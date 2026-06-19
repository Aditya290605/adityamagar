import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Sliders, Wifi, Bluetooth, Music, ChevronRight, ChevronLeft } from "lucide-react";
import { MENULINKS, PROJECTS } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const PROJECT_METRICS = {
  gradevise: [
    { label: "Evaluation Speed", value: 92, icon: Zap },
    { label: "Grading Accuracy", value: 95, icon: Sliders },
  ],
  itineraryai: [
    { label: "AI Planning Speed", value: 96, icon: Zap },
    { label: "Sync Reliability", value: 98, icon: Wifi },
  ],
  "fitness-geni": [
    { label: "Workout Customization", value: 90, icon: Sliders },
    { label: "Real-time Sync", value: 94, icon: Wifi },
  ],
  "cricket-scorer": [
    { label: "Sync Reliability", value: 99, icon: Wifi },
    { label: "Audio Playback Latency", value: 95, icon: Zap },
  ],
  "pneumonia-prediction": [
    { label: "Detection Accuracy", value: 95, icon: Sliders },
    { label: "Processing Speed", value: 94, icon: Zap },
  ],
  "expense-tracker-pro": [
    { label: "Insight Generation", value: 90, icon: Sliders },
    { label: "Database Speed", value: 95, icon: Zap },
  ],
  dailyflow: [
    { label: "Analytics Depth", value: 92, icon: Sliders },
    { label: "Streak Consistency", value: 98, icon: Wifi },
  ],
  collabboard: [
    { label: "Real-time Sync Rate", value: 98, icon: Wifi },
    { label: "Canvas Smoothness", value: 96, icon: Sliders },
  ],
  "neo-route": [
    { label: "Route Optimization", value: 95, icon: Sliders },
    { label: "Emission Analysis", value: 92, icon: Zap },
  ]
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : direction < 0 ? -200 : 0,
    opacity: 0,
    filter: "blur(6px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      x: { type: "spring", stiffness: 350, damping: 32 },
      opacity: { duration: 0.35 },
      filter: { duration: 0.35 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 200 : direction > 0 ? -200 : 0,
    opacity: 0,
    filter: "blur(6px)",
    transition: {
      x: { type: "spring", stiffness: 350, damping: 32 },
      opacity: { duration: 0.35 },
      filter: { duration: 0.35 },
    },
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ExternalIcon = () => (
  <svg
    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M7 17L17 7M17 7H9M17 7v8"
    />
  </svg>
);

const BackgroundGradient = ({ isApp }) => (
  <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
    <motion.div
      animate={{
        background: isApp
          ? "radial-gradient(circle at 10% 50%, rgba(99, 102, 241, 0.08), transparent 60%)"
          : "radial-gradient(circle at 90% 50%, rgba(139, 92, 246, 0.08), transparent 60%)",
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0"
    />
  </div>
);

const ProjectVisual = ({ data }) => (
  <div className="relative group shrink-0">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute inset-[-12%] rounded-full border border-dashed border-white/5 border-indigo-light/20"
    />
    <motion.div
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-light/10 to-purple/10 blur-2xl opacity-40"
    />

    <div className="relative h-72 w-72 md:h-[400px] md:w-[400px] rounded-3xl border border-white/[0.08] shadow-2xl flex items-center justify-center overflow-hidden bg-black/40 backdrop-blur-md">
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative z-10 w-full h-full flex items-center justify-center p-5 md:p-7"
      >
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-contain rounded-2xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
          draggable={false}
        />
      </motion.div>
    </div>

    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
      <div className="flex items-center gap-2 text-[0.68rem] font-mono uppercase tracking-widest text-gray-light-4 bg-zinc-950/90 px-4 py-2 rounded-full border border-white/[0.08] backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-light animate-pulse" />
        {data.status || "Completed"}
      </div>
    </div>
  </div>
);

const ProjectDetails = ({ data, isApp }) => {
  const barColorClass = isApp ? "bg-indigo-light" : "bg-purple";

  const metrics = PROJECT_METRICS[data.slug] || [
    { label: "Performance", value: 95, icon: Zap },
    { label: "Build Quality", value: 94, icon: Sliders },
  ];

  return (
    <div className="flex flex-col items-start text-left w-full">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-light mb-2">
        {isApp ? "App Project" : "Web Project"}
      </h2>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
        {data.name}
      </h1>
      <p className="text-gray-light-3 mb-6 leading-relaxed text-sm md:text-[0.98rem]">
        {data.overview || data.description}
      </p>

      <div className="w-full space-y-4 bg-white/[0.015] p-5 rounded-2xl border border-white/[0.06] backdrop-blur-sm">
        {metrics.map((feature, idx) => (
          <div key={feature.label} className="group">
            <div className="flex items-center justify-between mb-2 text-xs">
              <div className="flex items-center gap-2 text-gray-light-2">
                <feature.icon size={14} className="text-indigo-light" />
                <span className="font-mono uppercase tracking-wider">{feature.label}</span>
              </div>
              <span className="font-mono text-zinc-500">{feature.value}%</span>
            </div>
            <div className="relative h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${feature.value}%` }}
                transition={{ duration: 1, delay: 0.2 + idx * 0.15 }}
                className={`absolute top-0 bottom-0 left-0 ${barColorClass} opacity-90`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3 w-full">
        {data.liveUrl && (
          <a
            href={data.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="link group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-light to-indigo-dark px-4.5 py-3 font-mono text-[0.72rem] font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,49,255,0.3)]"
          >
            Live Demo
            <ExternalIcon />
          </a>
        )}
        {data.githubUrl && (
          <a
            href={data.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="link group flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-4.5 py-3 font-mono text-[0.72rem] font-bold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
          >
            GitHub
            <ExternalIcon />
          </a>
        )}
        <Link href={`/work/${data.slug}`} className="link group flex items-center justify-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.01] px-4.5 py-3 font-mono text-[0.72rem] text-gray-light-3 transition-all duration-300 hover:text-white hover:border-white/10">
          Case Study
          <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

const CategorySwitcher = ({ activeTab, onToggle }) => {
  return (
    <div className="flex justify-center mt-12 staggered-reveal">
      <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-zinc-950/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
        <button
          onClick={() => onToggle("app")}
          className="relative w-28 h-10.5 rounded-full flex items-center justify-center text-xs font-semibold uppercase tracking-wider focus:outline-none"
        >
          {activeTab === "app" && (
            <motion.div
              layoutId="category-surface"
              className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-inner"
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            />
          )}
          <span className={`relative z-10 transition-colors duration-300 ${activeTab === "app" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}>
            Apps
          </span>
        </button>
        <button
          onClick={() => onToggle("web")}
          className="relative w-28 h-10.5 rounded-full flex items-center justify-center text-xs font-semibold uppercase tracking-wider focus:outline-none"
        >
          {activeTab === "web" && (
            <motion.div
              layoutId="category-surface"
              className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-white/5 border border-white/10 shadow-inner"
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            />
          )}
          <span className={`relative z-10 transition-colors duration-300 ${activeTab === "web" ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}>
            Web
          </span>
        </button>
      </div>
    </div>
  );
};

const Projects = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  const [activeTab, setActiveTab] = useState("app"); // 'app' or 'web'
  const [activeIndex, setActiveIndex] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const categoryProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const isApp = p.tech.includes("flutter") || p.tech.includes("dart");
      return activeTab === "app" ? isApp : !isApp;
    });
  }, [activeTab]);

  // Reset index when category changes
  useEffect(() => {
    setActiveIndex(0);
    setPage([0, 0]);
  }, [activeTab]);

  const activeProject = categoryProjects[activeIndex] || categoryProjects[0];

  const handleNext = () => {
    setPage(([prevPage]) => [prevPage + 1, 1]);
    setActiveIndex((prevIndex) => (prevIndex + 1) % categoryProjects.length);
  };

  const handlePrev = () => {
    setPage(([prevPage]) => [prevPage - 1, -1]);
    setActiveIndex((prevIndex) => (prevIndex - 1 + categoryProjects.length) % categoryProjects.length);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const [revealTimeline, revealScrollTrigger] = getRevealSt();

    return () => {
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
    };
  }, [isDesktop]);

  const getRevealSt = () => {
    if (!sectionRef.current) return [null, null];
    const revealTl = gsap.timeline({ defaults: { ease: "none" } });

    const targets = sectionRef.current.querySelectorAll(".staggered-reveal");
    revealTl.from(
      targets,
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const isApp = activeTab === "app";

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className="w-full relative select-none section-container py-24 transform-gpu border-b border-white/[0.04]"
    >
      <BackgroundGradient isApp={isApp} />

      <div className="flex flex-col justify-center h-full max-w-6xl mx-auto px-6">
        <div
          className="flex flex-col text-center items-center transform-gpu mb-12"
          ref={sectionTitleRef}
        >
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal text-sm font-mono">
            PROJECTS
          </p>
          <h1 className="text-4xl md:text-5xl mt-3 font-semibold text-gradient w-fit staggered-reveal">
            My Projects
          </h1>
          <h2 className="text-sm md:text-base font-medium text-gray-light-3 max-w-md mt-3 staggered-reveal">
            Some things I&apos;ve built with love, expertise and a pinch of magical ingredients.
          </h2>
        </div>

        {activeProject && (
          <div className="relative w-full flex items-center justify-center min-h-[460px]">
            {/* Carousel Slider Arrows */}
            {categoryProjects.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-0 md:left-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-black/45 text-gray-light-3 backdrop-blur-md transition-all duration-300 hover:border-indigo-light/40 hover:bg-indigo-light/10 hover:text-white hover:scale-105"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 md:right-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-black/45 text-gray-light-3 backdrop-blur-md transition-all duration-300 hover:border-indigo-light/40 hover:bg-indigo-light/10 hover:text-white hover:scale-105"
                  aria-label="Next project"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Slider Content Wrapper */}
            <div className="w-full overflow-hidden py-4 px-12 md:px-16 flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeProject.slug}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      handleNext();
                    } else if (swipe > swipeConfidenceThreshold) {
                      handlePrev();
                    }
                  }}
                  className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-20 cursor-grab active:cursor-grabbing"
                >
                  {/* Left/Visual Column */}
                  <ProjectVisual data={activeProject} />

                  {/* Right/Details Column */}
                  <div className="w-full max-w-md">
                    <ProjectDetails
                      data={activeProject}
                      isApp={isApp}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        <CategorySwitcher activeTab={activeTab} onToggle={setActiveTab} />
      </div>
    </section>
  );
};

export default Projects;
