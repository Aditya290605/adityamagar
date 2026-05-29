import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Meta from "@/components/Meta/Meta";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/ui/CTASection";
import TagChip from "@/components/ui/TagChip";
import Skills from "@/components/Skills/Skills";
import { ABOUT, AWARDS, SKILLS } from "../constants";

const AnimatedCounter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / end), 30);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gradient">
        {count}+
      </div>
      <p className="text-gray-light-3 text-sm font-mono mt-2">{label}</p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <>
      <Meta
        title="About — Aditya Magar"
        description="Learn more about Aditya Magar — a Flutter Developer from Pune, India, specializing in scalable mobile applications."
      />
      <div className="section-container min-h-screen">
        <PageHeader
          title="About"
          subtitle="A bit more about who I am, what I do, and what drives me."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 mb-16 border-y border-gray-dark-1"
        >
          {ABOUT.stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </motion.div>

        {/* Bio */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">
            Who I Am
          </h2>
          <div className="space-y-4">
            {ABOUT.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-light-2 text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm font-mono text-gray-light-3">
            <span className="text-indigo-light">📍</span>
            <span>{ABOUT.location}</span>
          </div>
        </motion.section>

        {/* Skills — reuse existing component */}
        <div className="mb-20">
          <Skills />
        </div>

        {/* Awards & Certifications */}
        {AWARDS && AWARDS.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="uppercase tracking-widest text-gray-light-4 text-xs font-mono font-medium mb-8">
              Awards & Recognitions
            </h2>
            <div className="space-y-4">
              {AWARDS.map((award, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-dark-1 bg-gray-dark-2 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-purple/40 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {award.title}
                    </h3>
                    <p className="text-sm font-mono text-gray-light-3 mt-1">
                      {award.issuer} · {award.year}
                    </p>
                  </div>
                  {award.credentialUrl && award.credentialUrl !== "#" && (
                    <a
                      href={award.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link text-indigo-light font-mono text-sm hover:text-purple transition-colors"
                    >
                      View ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
      <CTASection />
    </>
  );
};

export default AboutPage;
