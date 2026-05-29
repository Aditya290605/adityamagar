import { motion } from "framer-motion";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative section-container text-center py-24 md:py-32"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-indigo-light text-xs font-mono mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          Open to opportunities
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Have a project in mind?
        </h2>
        <p className="text-gray-light-3 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          I&apos;m always open to discussing new opportunities, collaborations,
          and interesting ideas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="link group inline-flex items-center gap-2 font-mono text-sm font-bold px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-light to-indigo-dark text-white hover:shadow-[0_0_30px_rgba(139,49,255,0.3)] hover:scale-[1.02] transition-all duration-300"
          >
            Get in Touch
            <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/resume"
            className="link inline-flex items-center gap-2 font-mono text-sm font-bold px-8 py-3.5 rounded-xl border border-white/[0.12] text-white hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
          >
            View Resume
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
