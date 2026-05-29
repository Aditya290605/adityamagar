import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Meta from "@/components/Meta/Meta";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/ui/CTASection";
import ProjectCard from "@/components/Projects/ProjectCard";
import { PROJECTS } from "../../constants";

const allTech = ["All", ...new Set(PROJECTS.flatMap((p) => p.tech))];

const WorkPage = () => {
  const [filter, setFilter] = useState("All");
  const gridRef = useRef(null);

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tech.includes(filter));

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(gridRef.current.querySelectorAll(".project-card-item"), {
        opacity: 0,
        y: 40,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, [filter]);

  return (
    <>
      <Meta
        title="Work — Aditya Magar"
        description="Explore my portfolio of mobile apps, web applications, and AI-powered projects built with Flutter, React, and Python."
      />
      <div className="section-container min-h-screen">
        <PageHeader
          title="Work"
          subtitle="A collection of projects I've built with passion, expertise, and a pinch of magical ingredients."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Work" },
          ]}
        />

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          {allTech.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`link rounded-full px-5 py-2 text-[0.75rem] font-mono font-medium transition-all duration-300 border ${
                filter === tech
                  ? "bg-gradient-to-r from-indigo-light to-indigo-dark text-white border-transparent shadow-[0_0_20px_rgba(139,49,255,0.25)]"
                  : "bg-white/[0.02] text-gray-light-3 border-white/[0.06] hover:text-white hover:border-white/[0.12] hover:bg-white/[0.04]"
              }`}
            >
              {tech === "All" ? "All Projects" : tech.charAt(0).toUpperCase() + tech.slice(1)}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm font-mono text-gray-light-4 mb-6">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Project grid */}
        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-10"
        >
          {filtered.map((project) => (
            <div key={project.slug} className="project-card-item">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-light-3 font-mono text-lg mb-2">
              No projects found
            </p>
            <p className="text-gray-light-4 text-sm">
              Try selecting a different filter
            </p>
          </div>
        )}
      </div>
      <CTASection />
    </>
  );
};

export default WorkPage;
