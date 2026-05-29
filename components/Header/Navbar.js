import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NAV_LINKS, RESUME_URL } from "../../constants";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router?.pathname]);

  const isActive = (href) => {
    if (!router || !router.pathname) return false;
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-[60] select-none transition-all duration-500 ${
          isScrolled
            ? "py-3 backdrop-blur-xl bg-black/60 border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="link flex items-center gap-2 text-white font-semibold text-lg tracking-tight hover:text-indigo-light transition-colors duration-200 flex-shrink-0"
          >
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-light to-indigo-dark flex items-center justify-center text-white text-xs font-bold">
              A
            </span>
            <span className="hidden xs:inline">Aditya Magar</span>
          </Link>

          {/* Desktop Navigation — centered */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 bg-white/[0.04] backdrop-blur-md rounded-full px-2 py-1.5 border border-white/[0.06]">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`link font-mono text-[0.8rem] px-4 py-1.5 rounded-full transition-all duration-300 ${
                    isActive(link.href)
                      ? "bg-white/[0.1] text-white shadow-[0_0_12px_rgba(139,49,255,0.15)]"
                      : "text-gray-light-3 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side — Resume button */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link font-mono text-[0.8rem] font-bold px-5 py-2 rounded-full bg-gradient-to-r from-indigo-light to-indigo-dark text-white hover:shadow-[0_0_20px_rgba(139,49,255,0.35)] hover:scale-[1.02] transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="link md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-[70] rounded-lg hover:bg-white/[0.05] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] bg-white origin-center rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[5px] w-[18px]" : "w-5"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-white ml-auto rounded-full transition-all duration-300 ${
                isMenuOpen ? "w-0 opacity-0" : "w-3.5 opacity-100"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-white ml-auto origin-center rounded-full transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[5px] w-[18px]" : "w-4"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-md z-[55] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-gray-dark-5/95 backdrop-blur-xl border-l border-white/[0.06] z-[58] flex flex-col pt-24 px-8 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="link absolute top-7 right-6 w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
          aria-label="Close menu"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex flex-col gap-2">
          {NAV_LINKS.map((link, index) => (
            <div
              key={link.name}
              className="transition-all duration-300"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateX(0)" : "translateX(20px)",
                transitionDelay: `${0.05 + index * 0.04}s`,
              }}
            >
              <Link
                href={link.href}
                className={`link block font-mono text-lg font-medium px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-white bg-white/[0.08]"
                    : "text-gray-light-3 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Resume button in drawer */}
        <div
          className="mt-8 pt-6 border-t border-white/[0.06] transition-all duration-300"
          style={{
            opacity: isMenuOpen ? 1 : 0,
            transform: isMenuOpen ? "translateY(0)" : "translateY(10px)",
            transitionDelay: "0.3s",
          }}
        >
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link flex items-center justify-center font-mono text-sm font-bold px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-light to-indigo-dark text-white hover:shadow-[0_0_20px_rgba(139,49,255,0.35)] transition-all duration-300 w-full"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
