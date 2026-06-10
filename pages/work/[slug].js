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

const getStatusLabel = (status) =>
  status === "live" ? "Live" : status === "wip" ? "WIP" : "Completed";

const getStatusVariant = (status) =>
  status === "live" ? "live" : status === "wip" ? "wip" : "default";

const SectionHeading = ({ eyebrow, title }) => (
  <div className="mb-7">
    <p className="mb-2 flex items-center gap-3 text-[0.72rem] font-mono uppercase tracking-[0.18em] text-indigo-light">
      <span className="h-px w-7 bg-indigo-light/70" />
      {eyebrow}
    </p>
    <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
      {title}
    </h2>
  </div>
);

const ExternalIcon = () => (
  <svg
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 17L17 7M17 7H9M17 7v8"
    />
  </svg>
);

const ProjectDetail = ({ project }) => {
  if (!project) return null;

  const statusLabel = getStatusLabel(project.status);
  const statusVariant = getStatusVariant(project.status);
  const featuredAchievements = project.achievements?.slice(0, 3) || [];

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

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-20 pb-16"
        >
          <motion.section
            variants={fadeInUp}
            className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)]"
          >
            <div
              className="relative min-h-[24rem] overflow-hidden rounded-2xl border border-white/[0.08] bg-gray-dark-5 md:min-h-[34rem]"
              style={{
                background: `linear-gradient(145deg, rgba(18,14,22,0.96) 0%, ${project.gradient[0]}22 45%, ${project.gradient[1]}44 100%)`,
              }}
            >
              <Image
                src="/project-bg.svg"
                alt=""
                fill
                className="opacity-10 mix-blend-screen"
              />
              <div
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl opacity-40"
                style={{ background: project.gradient[0] }}
              />
              <div
                className="absolute -bottom-28 left-1/4 h-80 w-80 rounded-full blur-3xl opacity-30"
                style={{ background: project.gradient[1] }}
              />
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="relative object-contain p-7 md:p-14"
                />
              )}
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 md:p-7">
              <div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.status && (
                    <TagChip label={statusLabel} variant={statusVariant} />
                  )}
                  {project.techStack?.slice(0, 3).map((tech) => (
                    <TagChip key={tech} label={tech} />
                  ))}
                </div>
                <p className="text-[1.08rem] leading-[1.8] text-gray-light-2">
                  {project.overview || project.description}
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link group flex items-center justify-between rounded-xl bg-gradient-to-r from-indigo-light to-indigo-dark px-5 py-3 font-mono text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,49,255,0.3)]"
                  >
                    Live Demo
                    <ExternalIcon />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link group flex items-center justify-between rounded-xl border border-white/[0.1] bg-white/[0.04] px-5 py-3 font-mono text-sm font-bold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    GitHub Repo
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </div>
          </motion.section>

          {featuredAchievements.length > 0 && (
            <motion.section variants={fadeInUp}>
              <div className="grid gap-4 md:grid-cols-3">
                {featuredAchievements.map((item, i) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5"
                  >
                    <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-light/20 bg-indigo-light/10 font-mono text-sm font-bold text-indigo-light">
                      0{i + 1}
                    </span>
                    <p className="leading-relaxed text-gray-light-2">{item}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          <motion.section
            variants={fadeInUp}
            className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <SectionHeading eyebrow="Stack" title="Built With" />
              <p className="max-w-md text-[1.02rem] leading-[1.8] text-gray-light-3">
                The stack combines the core frameworks, services, and UI tools
                used to ship the project.
              </p>
            </div>
            <div className="flex flex-wrap content-start gap-3">
              {project.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 font-mono text-sm text-gray-light-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          {project.timeline && project.timeline.length > 0 && (
            <motion.section variants={fadeInUp}>
              <SectionHeading eyebrow="Process" title="Project Timeline" />
              <div className="relative grid gap-4 md:grid-cols-2">
                {project.timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5"
                  >
                    <div
                      className="absolute -right-10 -top-10 h-24 w-24 rounded-full blur-2xl opacity-25"
                      style={{ background: project.gradient[i % 2] }}
                    />
                    <span className="text-[0.72rem] font-mono uppercase tracking-[0.18em] text-indigo-light">
                      {item.date}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold leading-tight text-white">
                      {item.label}
                    </h3>
                    <p className="mt-3 text-[0.98rem] leading-relaxed text-gray-light-3">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {project.achievements && project.achievements.length > 0 && (
            <motion.section variants={fadeInUp}>
              <SectionHeading eyebrow="Highlights" title="What It Delivers" />
              <ul className="grid gap-4 md:grid-cols-2">
                {project.achievements.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 text-gray-light-2"
                  >
                    <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white/[0.05] font-mono text-[0.72rem] font-bold text-indigo-light">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}
        </motion.div>

        <div className="pb-10">
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
