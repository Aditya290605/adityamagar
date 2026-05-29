import Link from "next/link";
import { SOCIAL_LINKS, NAV_LINKS } from "../../constants";
import { Icon } from "../Icons";

const FooterSimple = () => {
  return (
    <footer className="w-full relative overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative section-container py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
          {/* Site Links */}
          <div>
            <h4 className="uppercase tracking-widest text-gray-light-4 text-[0.65rem] font-mono font-medium mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-gray-light-4" />
              Navigation
            </h4>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="link text-gray-light-3 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="uppercase tracking-widest text-gray-light-4 text-[0.65rem] font-mono font-medium mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-gray-light-4" />
              Connect
            </h4>
            <ul className="space-y-3.5">
              {SOCIAL_LINKS.map(({ name, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="link text-gray-light-3 text-sm hover:text-white transition-colors duration-300 capitalize flex items-center gap-2.5"
                  >
                    <Icon name={name} />
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="uppercase tracking-widest text-gray-light-4 text-[0.65rem] font-mono font-medium mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-gray-light-4" />
              &copy; {new Date().getFullYear()}
            </h4>
            <p className="text-gray-light-3 text-sm leading-relaxed mb-3">
              Designed &amp; built by{" "}
              <span className="text-white font-medium">Aditya Magar</span>
            </p>
            <p className="text-gray-light-4 text-xs font-mono flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-green" />
              Next.js &middot; Tailwind CSS &middot; GSAP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSimple;
