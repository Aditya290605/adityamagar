import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
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
  }, [router.pathname]);

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-[60] select-none transition-all duration-300 ${
          isScrolled
            ? "py-4 backdrop-blur-lg bg-black/70 border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="link text-white font-semibold text-lg tracking-tight hover:text-indigo-light transition-colors duration-200"
          >
            Aditya Magar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`link font-mono text-sm transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-indigo-light"
                    : "text-gray-light-3 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link font-mono text-sm font-bold px-4 py-1.5 rounded-full bg-purple text-white hover:shadow-[0_0_1rem_rgba(139,49,255,0.4)] transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="link md:hidden relative w-6 h-6 flex flex-col items-center justify-center gap-1.5 z-[70]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 4 : 0,
              }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -4 : 0,
              }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-72 bg-gray-dark-4 border-l border-white/5 z-[58] flex flex-col pt-24 px-8"
            >
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`link block font-mono text-xl font-medium transition-colors duration-200 ${
                        isActive(link.href)
                          ? "text-indigo-light"
                          : "text-gray-light-2 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + NAV_LINKS.length * 0.05 }}
                >
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link inline-flex font-mono text-sm font-bold px-5 py-2 rounded-full bg-purple text-white hover:shadow-[0_0_1rem_rgba(139,49,255,0.4)] transition-all duration-300"
                  >
                    Resume
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
