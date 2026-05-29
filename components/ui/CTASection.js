import { motion } from "framer-motion";
import Link from "next/link";

const CTASection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 md:py-28"
    >
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
          Have a project or role in mind?
        </h2>
        <p className="text-gray-light-3 text-lg mb-8 max-w-md mx-auto">
          I&apos;m always open to discussing new opportunities, collaborations,
          and interesting ideas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="link inline-flex items-center font-mono text-sm font-bold px-7 py-3 rounded-md outline-2 outline-indigo-dark text-white bg-purple hover:shadow-[0_0_1rem_theme(colors.indigo.dark)] transition-all duration-300"
          >
            Get in Touch
          </Link>
          <Link
            href="/resume"
            className="link inline-flex items-center font-mono text-sm font-bold px-7 py-3 rounded-md outline outline-2 outline-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Resume
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
