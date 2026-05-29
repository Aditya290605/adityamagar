import { motion } from "framer-motion";
import Link from "next/link";

const PageHeader = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="pt-32 pb-12 md:pt-40 md:pb-16 relative"
    >
      {/* Decorative gradient orb */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-purple/10 to-indigo-dark/5 rounded-full blur-[100px] pointer-events-none" />

      {breadcrumbs.length > 0 && (
        <nav className="relative flex items-center gap-2 text-sm font-mono text-gray-light-3 mb-8">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {index > 0 && (
                <svg className="w-3.5 h-3.5 text-gray-light-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="link hover:text-indigo-light transition-colors duration-200"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/70">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <h1 className="relative text-5xl md:text-7xl font-bold text-white tracking-tight">
        {title}
        <span className="text-gradient">.</span>
      </h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-gray-light-3 mt-5 max-w-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Subtle divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent origin-left"
      />
    </motion.div>
  );
};

export default PageHeader;
