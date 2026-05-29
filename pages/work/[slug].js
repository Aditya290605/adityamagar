import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Meta from "@/components/Meta/Meta";
import PageHeader from "@/components/ui/PageHeader";
import TagChip from "@/components/ui/TagChip";
import CTASection from "@/components/ui/CTASection";
import { PROJECTS } from "../../constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const ProjectDetail = ({ project }) => {
  if (!project) return null;

  return (
    <>
      <Meta
        title={`${project.name} — Aditya Magar`}
        description={project.overview || project.description}
      />
      <div className="section-container min-h-screen">
        <PageHeader
          title={project.name}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Work", href: "/work" },
            { label: project.name },
          ]}
        />

        {/* Tags & Status */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          {project.status && (
            <TagChip
              label={project.status === "live" ? "Live" : project.status === "wip" ? "WIP" : "Completed"}
              variant={project.status === "live" ? "live" : project.status === "wip" ? "wip" : "default"}
            />
          )}
          {project.techStack &&
            project.techStack.map((tech) => (
              <TagChip key={tech} label={tech} />
            ))}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-wrap gap-3 mb-12"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="link group inline-flex items-center gap-2 font-mono text-sm font-bold px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-light to-indigo-dark text-white hover:shadow-[0_0_30px_rgba(139,49,255,0.3)] hover:scale-[1.02] transition-all duration-300"
            >
              Live Demo
              <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="link group inline-flex items-center gap-2 font-mono text-sm font-bold px-6 py-3 rounded-xl border border-white/[0.12] text-white hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
            >
              GitHub
              <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </motion.div>

        {/* Hero image */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[20rem] md:h-[30rem] rounded-2xl overflow-hidden mb-20 border border-white/[0.06]"
            style={{
              background: `linear-gradient(135deg, ${project.gradient[0]} 0%, ${project.gradient[1]} 100%)`,
            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-contain p-8 md:p-16"
              priority
            />
          </motion.div>
        )}

        {/* Content sections */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl space-y-20 pb-10"
        >
          {/* Overview */}
          {project.overview && (
            <motion.section variants={fadeInUp}>
              <h2 className="text-xs font-mono uppercase tracking-widest text-gray-light-4 mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-gray-light-4" />
                Overview
              </h2>
              <p className="text-gray-light-2 leading-[1.85] text-[1.05rem]">
                {project.overview}
              </p>
            </motion.section>
          )}

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <motion.section variants={fadeInUp}>
              <h2 className="text-xs font-mono uppercase tracking-widest text-gray-light-4 mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-gray-light-4" />
                Key Achievements
              </h2>
              <ul className="space-y-4">
                {project.achievements.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-gray-light-2 leading-relaxed"
                  >
                    <span className="mt-1 w-6 h-6 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-indigo-light text-[0.65rem] font-mono font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Timeline */}
          {project.timeline && project.timeline.length > 0 && (
            <motion.section variants={fadeInUp}>
              <h2 className="text-xs font-mono uppercase tracking-widest text-gray-light-4 mb-8 flex items-center gap-2">
                <span className="w-4 h-px bg-gray-light-4" />
                Timeline
              </h2>
              <div className="relative border-l border-white/[0.06] pl-8 space-y-10">
                {project.timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div className="absolute -left-[2.15rem] top-1 w-2.5 h-2.5 rounded-full bg-indigo-light/80 ring-[3px] ring-gray-dark-5" />
                    <span className="text-[0.7rem] font-mono text-indigo-light uppercase tracking-wider">
                      {item.date}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1.5 tracking-tight">
                      {item.label}
                    </h3>
                    <p className="text-gray-light-3 text-sm mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <motion.section variants={fadeInUp}>
              <h2 className="text-xs font-mono uppercase tracking-widest text-gray-light-4 mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-gray-light-4" />
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TagChip key={tech} label={tech} />
                ))}
              </div>
            </motion.section>
          )}
        </motion.div>

        {/* Back link */}
        <div className="pb-10 mt-10">
          <Link
            href="/work"
            className="link inline-flex items-center gap-2 text-gray-light-3 font-mono text-sm hover:text-indigo-light transition-all duration-200 group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All projects
          </Link>
        </div>
      </div>
      <CTASection />
    </>
  );
};

export async function getStaticPaths() {
  const paths = PROJECTS.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return { notFound: true };
  }

  const serialized = {
    name: project.name,
    slug: project.slug,
    description: project.description,
    gradient: project.gradient,
    tech: project.tech,
    status: project.status || null,
    image: project.image || null,
    overview: project.overview || null,
    achievements: project.achievements || [],
    timeline: project.timeline || [],
    techStack: project.techStack || [],
    liveUrl: project.liveUrl || null,
    githubUrl: project.githubUrl || null,
  };

  return { props: { project: serialized } };
}

export default ProjectDetail;
