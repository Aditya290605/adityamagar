import Link from "next/link";
import { motion } from "framer-motion";
import Meta from "@/components/Meta/Meta";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/ui/CTASection";
import { RESUME_URL } from "../constants";

const ResumePage = () => {
  return (
    <>
      <Meta
        title="Resume — Aditya Magar"
        description="View or download Aditya Magar's resume — Flutter Developer specializing in scalable mobile applications."
      />
      <div className="section-container min-h-[70vh] flex flex-col">
        <PageHeader
          title="Resume / CV"
          subtitle="My professional resume with a summary of my skills, experience, and education."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Resume" },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex flex-col items-center justify-center text-center py-16"
        >
          <div className="w-20 h-20 rounded-2xl bg-gray-dark-2 border border-gray-dark-1 flex items-center justify-center mb-8">
            <svg
              className="w-10 h-10 text-indigo-light"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-gray-light-2 text-lg max-w-md mb-10 leading-relaxed">
            You can view or download my resume to learn more about my professional
            experience, technical skills, and education background.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link inline-flex items-center gap-2 font-mono text-sm font-bold px-8 py-3 rounded-md bg-purple text-white hover:shadow-[0_0_1rem_rgba(139,49,255,0.4)] transition-all duration-300"
            >
              Open Resume ↗
            </a>
            <Link
              href="/contact"
              className="link inline-flex items-center gap-2 font-mono text-sm font-bold px-8 py-3 rounded-md outline outline-2 outline-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Contact Instead
            </Link>
          </div>

          <p className="text-gray-light-4 text-xs font-mono mt-10">
            Last updated: May 2025
          </p>
        </motion.div>
      </div>
      <CTASection />
    </>
  );
};

export default ResumePage;
