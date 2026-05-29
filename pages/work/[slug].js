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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
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
          className="flex flex-wrap items-center gap-2 mb-6"
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
          className="flex flex-wrap gap-3 mb-10"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="link inline-flex items-center gap-2 font-mono text-sm font-bold px-5 py-2.5 rounded-md bg-purple text-white hover:shadow-[0_0_1rem_rgba(139,49,255,0.4)] transition-all duration-300"
            >
              Live Demo ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="link inline-flex items-center gap-2 font-mono text-sm font-bold px-5 py-2.5 rounded-md outline outline-2 outline-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              GitHub ↗
            </a>
          )}
        </motion.div>

        {/* Hero image */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[20rem] md:h-[28rem] rounded-2xl overflow-hidden mb-16"
            style={{
              background: `linear-gradient(135deg, ${project.gradient[0]} 0%, ${project.gradient[1]} 100%)`,
            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-contain p-8 md:p-12"
              priority
            />
          </motion.div>
        )}

        {/* Content sections */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl space-y-16 pb-10"
        >
          {/* Overview */}
          {project.overview && (
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Overview
              </h2>
              <p className="text-gray-light-2 leading-relaxed text-lg">
                {project.overview}
              </p>
            </motion.section>
          )}

          {/* Achievements */}
          {project.achievements && project.achievements.length > 0 && (
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Key Achievements
              </h2>
              <ul className="space-y-3">
                {project.achievements.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-light-2 leading-relaxed"
                  >
                    <span className="text-indigo-light mt-1.5 text-xs">▶</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Timeline */}
          {project.timeline && project.timeline.length > 0 && (
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Timeline
              </h2>
              <div className="relative border-l-2 border-gray-dark-1 pl-8 space-y-8">
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
                    <div className="absolute -left-[2.55rem] top-1.5 w-3 h-3 rounded-full bg-purple border-2 border-gray-dark-5" />
                    <span className="text-xs font-mono text-indigo-light">
                      {item.date}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-1">
                      {item.label}
                    </h3>
                    <p className="text-gray-light-3 text-sm mt-1">
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
              <h2 className="text-2xl font-semibold text-white mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TagChip key={tech} label={tech} />
                ))}
              </div>
            </motion.section>
          )}

          {/* Links */}
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-semibold text-white mb-4">Links</h2>
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link text-indigo-light font-mono text-sm hover:text-purple transition-colors"
                >
                  Live Demo ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link text-indigo-light font-mono text-sm hover:text-purple transition-colors"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </motion.section>
        </motion.div>

        {/* Back link */}
        <div className="pb-10">
          <Link
            href="/work"
            className="link inline-flex items-center gap-2 text-gray-light-3 font-mono text-sm hover:text-indigo-light hover:gap-3 transition-all duration-200"
          >
            <span>←</span> All projects
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

  // Serialize the project (strip JSX/functions that can't be serialized)
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
