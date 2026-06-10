import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Meta from "@/components/Meta/Meta";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/ui/CTASection";
import { ABOUT, AWARDS, EDUCATION, SOCIAL_LINKS } from "../constants";

const AnimatedCounter = ({ value, label, suffix = "+" }) => {
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
    <div ref={ref} className="rounded-2xl border border-white/[0.06] bg-white/[0.025] px-4 py-6 text-center group">
      <div className="text-4xl md:text-6xl font-bold text-white tracking-tight">
        {count}
        {suffix && <span className="text-indigo-light">{suffix}</span>}
      </div>
      <p className="text-gray-light-3 text-[0.78rem] font-mono mt-3 uppercase tracking-[0.14em]">{label}</p>
    </div>
  );
};

const SectionTitle = ({ label, title }) => (
  <div className="mb-9">
    <p className="mb-3 flex items-center gap-3 text-[0.82rem] font-mono uppercase tracking-[0.16em] text-indigo-light">
      <span className="h-px w-8 bg-indigo-light/70" />
      {label}
    </p>
    <h2 className="text-4xl md:text-5xl font-semibold text-white leading-[1.05]">
      {title}
    </h2>
  </div>
);

const AboutPage = () => {
  const github = SOCIAL_LINKS.find((link) => link.name === "github");
  const linkedin = SOCIAL_LINKS.find((link) => link.name === "linkedin");

  return (
    <>
      <Meta
        title="About — Aditya Magar"
        description="Learn more about Aditya Magar — a Flutter Developer from Aurangabad, Maharashtra specializing in scalable mobile applications."
      />
      <div className="section-container min-h-screen">
        <PageHeader
          title="Who I Am"
          subtitle={ABOUT.headline}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Who I Am" },
          ]}
        />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-24"
        >
          {ABOUT.stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-28 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]"
        >
          <div>
            <SectionTitle label="Profile" title="Mobile-first engineer with product instincts." />
            <div className="space-y-5">
              {ABOUT.bio.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-gray-light-2 text-[1.18rem] md:text-[1.26rem] leading-[1.75]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${ABOUT.email}`}
                className="link rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 font-mono text-[0.95rem] text-gray-light-2 hover:border-indigo-light/40 hover:text-white transition-colors"
              >
                {ABOUT.email}
              </a>
              <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 font-mono text-[0.95rem] text-gray-light-2">
                {ABOUT.phone}
              </span>
              <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 font-mono text-[0.95rem] text-gray-light-2">
                {ABOUT.location}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 md:p-8 shadow-[0_1.5rem_4rem_rgba(112,0,255,0.08)]">
            <p className="mb-5 text-[0.82rem] font-mono uppercase tracking-[0.16em] text-indigo-light">
              Currently Strong At
            </p>
            <div className="space-y-3">
              {ABOUT.focusAreas.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-white/[0.06] bg-black/20 p-4 text-[1.04rem] text-gray-light-2"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-light" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              {github && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link flex-1 rounded-xl bg-gradient-to-r from-indigo-light to-indigo-dark px-4 py-3.5 text-center font-mono text-[0.95rem] font-bold text-white"
                >
                  GitHub
                </a>
              )}
              {linkedin && (
                <a
                  href={linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link flex-1 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3.5 text-center font-mono text-[0.95rem] font-bold text-white hover:bg-white/[0.07] transition-colors"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-28"
        >
          <SectionTitle label="Experience" title="Internships that shaped how I build." />
          <div className="grid gap-5 lg:grid-cols-2">
            {ABOUT.experienceHighlights.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 md:p-7"
              >
                <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                      {item.role}
                    </h3>
                    <p className="mt-2 font-mono text-[0.95rem] text-indigo-light">
                      {item.company}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-mono text-xs text-gray-light-3">
                    {item.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[1.05rem] text-gray-light-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-light" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-28 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"
        >
          <div>
            <SectionTitle label="Skills" title="Practical stack, not buzzwords." />
            <p className="max-w-md text-[1.12rem] leading-[1.8] text-gray-light-3">
              These are the tools and patterns I use across mobile apps,
              backend integrations, testing, and team workflows.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {ABOUT.technicalGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 md:p-6"
              >
                <h3 className="mb-4 font-mono text-[0.82rem] uppercase tracking-[0.16em] text-indigo-light">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-2 text-[0.95rem] text-gray-light-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-28"
        >
          <SectionTitle label="Education" title="Computer science foundation." />
          <div className="grid gap-5 lg:grid-cols-2">
            {EDUCATION.map((item) => (
              <div
                key={item.institution}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 md:p-7"
              >
                <p className="mb-3 font-mono text-[0.95rem] text-indigo-light">
                  {item.dateRange}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                  {item.institution}
                </h3>
                <p className="mt-3 text-[1.08rem] text-gray-light-2">{item.degree}</p>
                <p className="mt-4 text-[0.95rem] font-mono text-gray-light-4">
                  {item.location}
                </p>
                <p className="mt-4 text-[1.04rem] leading-relaxed text-gray-light-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {AWARDS && AWARDS.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <SectionTitle label="Recognition" title="Achievements and proof points." />
            <div className="grid gap-4 md:grid-cols-3">
              {AWARDS.map((award, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-white/[0.06] bg-white/[0.035] p-6 md:p-7 hover:border-purple/30 hover:bg-white/[0.05] transition-all duration-500"
                >
                  <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-light/20 bg-indigo-light/10 font-mono text-sm font-bold text-indigo-light">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl font-semibold text-white tracking-tight leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-[0.95rem] font-mono text-gray-light-3 mt-3">
                    {award.issuer} · {award.year}
                  </p>
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
