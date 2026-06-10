import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import VanillaTilt from "vanilla-tilt";
import TagChip from "../ui/TagChip";

const tiltOptions = {
  max: 5,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const { slug, name, description, gradient, tech, status, image, featured } = project;

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, tiltOptions);
    }
    return () => {
      if (cardRef.current && cardRef.current.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  const statusLabel =
    status === "live" ? "Live" : status === "wip" ? "WIP" : "Completed";

  return (
    <Link href={`/work/${slug}`} className="link block h-full group">
      <div
        ref={cardRef}
        className="relative h-full min-h-[30rem] overflow-hidden rounded-2xl border border-white/[0.08] bg-gray-dark-5 p-4 transform-gpu transition-all duration-300 group-hover:-translate-y-1 group-hover:border-indigo-light/35 group-hover:shadow-[0_1.5rem_3.5rem_rgba(112,0,255,0.18)]"
        style={{
          background: `linear-gradient(145deg, rgba(18,14,22,0.96) 0%, rgba(30,27,32,0.98) 52%, ${gradient[1]}33 100%)`,
        }}
      >
        <Image
          src="/project-bg.svg"
          alt=""
          className="absolute left-0 top-0 h-full w-full opacity-10 mix-blend-screen"
          fill
        />

        <div
          className="absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl opacity-40"
          style={{ background: gradient[0] }}
        />
        <div
          className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full blur-3xl opacity-25"
          style={{ background: gradient[1] }}
        />

        <div className="relative z-10 flex h-full flex-col">
          <div
            className="relative mb-5 h-48 overflow-hidden rounded-xl border border-white/[0.08] bg-black/30 transform-gpu"
            style={{ transform: "translateZ(1.5rem)" }}
          >
            <div
              className="absolute inset-0 opacity-90"
              style={{
                background: `radial-gradient(circle at 20% 10%, ${gradient[0]}55, transparent 30%), linear-gradient(135deg, ${gradient[0]}22, ${gradient[1]}33)`,
              }}
            />
            {image && (
              <Image
                src={image}
                alt={name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.04]"
              />
            )}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
            {featured && (
              <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[0.68rem] font-mono font-medium uppercase tracking-wide text-white/80 backdrop-blur-md">
                Featured
              </span>
            )}
          </div>

          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-[0.68rem] font-mono uppercase tracking-[0.18em] text-indigo-light">
                Project
              </p>
              <h3
                className="text-2xl font-semibold leading-none text-white transform-gpu"
                style={{ transform: "translateZ(2rem)" }}
              >
                {name}
              </h3>
            </div>
            {status && (
              <TagChip
                label={statusLabel}
                variant={status === "live" ? "live" : status === "wip" ? "wip" : "default"}
              />
            )}
          </div>

          <p
            className="mb-6 text-[0.98rem] leading-relaxed text-gray-light-2 transform-gpu"
            style={{ transform: "translateZ(0.8rem)" }}
          >
            {description}
          </p>

          <div className="mt-auto">
            <div className="mb-5 flex flex-wrap gap-2">
              {tech.slice(0, 4).map((el) => (
                <span
                  key={el}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[0.7rem] font-mono text-gray-light-2"
                >
                  <Image
                    src={`/projects/tech/${el}.svg`}
                    alt=""
                    height={16}
                    width={16}
                    className="h-4 w-4"
                  />
                  {el}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.08] pt-4">
              <span className="text-[0.72rem] font-mono uppercase tracking-[0.18em] text-gray-light-4">
                View case study
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-white transition-all duration-300 group-hover:border-indigo-light/40 group-hover:bg-indigo-light/15 group-hover:text-indigo-light">
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
