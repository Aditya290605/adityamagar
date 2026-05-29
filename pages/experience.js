import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Meta from "@/components/Meta/Meta";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/ui/CTASection";
import ExperienceCard from "@/components/Work/ExperienceCard";
import { WORK_EXPERIENCE, EDUCATION } from "../constants";

const ExperiencePage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll(".exp-card"), {
        opacity: 0,
        y: 40,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Meta
        title="Experience — Aditya Magar"
        description="My professional journey as a Flutter Developer — internships, roles, and education timeline."
      />
      <div className="section-container min-h-screen" ref={sectionRef}>
        <PageHeader
          title="Experience"
          subtitle="My professional journey building production-grade mobile applications across teams and continents."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Experience" },
          ]}
        />

        {/* Work Experience */}
        <section className="mb-20">
          <h2 className="uppercase tracking-widest text-gray-light-4 text-xs font-mono font-medium mb-8">
            Work Experience
          </h2>
          <div className="space-y-6">
            {WORK_EXPERIENCE.map((exp, index) => (
              <div key={index} className="exp-card">
                <ExperienceCard {...exp} />
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="uppercase tracking-widest text-gray-light-4 text-xs font-mono font-medium mb-8">
            Education
          </h2>
          <div className="space-y-6">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="exp-card">
                <div className="rounded-2xl border border-gray-dark-1 bg-gray-dark-2 p-6 md:p-8 transition-all duration-300 hover:border-purple/40 hover:shadow-[0_0_1.5rem_rgba(139,49,255,0.08)]">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm font-mono text-gray-light-3 mb-3">
                    <span className="text-indigo-light">{edu.institution}</span>
                    <span className="hidden sm:inline text-gray-light-4">·</span>
                    <span>{edu.dateRange}</span>
                    <span className="hidden sm:inline text-gray-light-4">·</span>
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-gray-light-2 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CTASection />
    </>
  );
};

export default ExperiencePage;
