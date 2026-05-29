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
        stagger: 0.1,
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
        <div className="flex flex-wrap gap-2 mb-10">
          {allTech.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`link rounded-full px-4 py-1.5 text-xs font-mono font-medium transition-all duration-200 ${
                filter === tech
                  ? "bg-purple text-white shadow-[0_0_0.75rem_rgba(139,49,255,0.3)]"
                  : "bg-gray-dark-2 text-gray-light-3 hover:text-white hover:bg-gray-dark-1"
              }`}
            >
              {tech === "All" ? "All" : tech.charAt(0).toUpperCase() + tech.slice(1)}
            </button>
          ))}
        </div>

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
          <p className="text-gray-light-3 text-center py-20 font-mono">
            No projects found for &ldquo;{filter}&rdquo;
          </p>
        )}
      </div>
      <CTASection />
    </>
  );
};

export default WorkPage;
