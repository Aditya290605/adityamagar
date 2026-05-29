import Link from "next/link";
import { SOCIAL_LINKS, NAV_LINKS } from "../../constants";
import { Icon } from "../Icons";

const FooterSimple = () => {
  return (
    <footer className="w-full border-t border-gray-dark-1 bg-gray-dark-5">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
          {/* Site Links */}
          <div>
            <h4 className="uppercase tracking-widest text-gray-light-4 text-xs font-mono font-medium mb-5">
              Site
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="link text-gray-light-2 text-sm hover:text-indigo-light transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="uppercase tracking-widest text-gray-light-4 text-xs font-mono font-medium mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map(({ name, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="link text-gray-light-2 text-sm hover:text-indigo-light transition-colors duration-200 capitalize flex items-center gap-2"
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
            <h4 className="uppercase tracking-widest text-gray-light-4 text-xs font-mono font-medium mb-5">
              &copy; {new Date().getFullYear()}
            </h4>
            <p className="text-gray-light-3 text-sm leading-relaxed">
              Designed &amp; built by{" "}
              <span className="text-white font-medium">Aditya Magar</span>
            </p>
            <p className="text-gray-light-4 text-xs mt-2 font-mono">
              Built with Next.js &middot; Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSimple;
