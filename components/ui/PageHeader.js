import { motion } from "framer-motion";
import Link from "next/link";

const PageHeader = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pt-32 pb-12 md:pt-40 md:pb-16"
    >
      {breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-2 text-sm font-mono text-gray-light-3 mb-6">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {index > 0 && <span className="text-gray-light-4">/</span>}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="link hover:text-indigo-light transition-colors duration-200"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <h1 className="text-5xl md:text-6xl font-medium text-gradient w-fit">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[1.35rem] md:text-[1.65rem] font-medium text-gray-light-3 mt-4 max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default PageHeader;
