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
  const { slug, name, description, gradient, tech, status, image } = project;

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

  return (
    <Link href={`/work/${slug}`} className="link block group">
      <div
        ref={cardRef}
        className="relative rounded-2xl overflow-hidden h-[22rem] md:h-[24rem] p-6 flex flex-col justify-between transform-gpu transition-shadow duration-300 group-hover:shadow-[0_0_2rem_rgba(139,49,255,0.15)]"
        style={{
          background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <Image
          src="/project-bg.svg"
          alt=""
          className="absolute w-full h-full top-0 left-0 opacity-20"
          fill
        />

        {/* Status badge */}
        <div className="relative z-10 flex items-center justify-between">
          <h3
            className="font-medium text-xl sm:text-2xl text-white transform-gpu"
            style={{ transform: "translateZ(2rem)" }}
          >
            {name}
          </h3>
          {status && (
            <TagChip
              label={status === "live" ? "Live" : status === "wip" ? "WIP" : "Completed"}
              variant={status === "live" ? "live" : status === "wip" ? "wip" : "default"}
            />
          )}
        </div>

        {/* Tech icons */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden sm:flex flex-col gap-3 z-10">
          {tech.slice(0, 4).map((el) => (
            <Image
              key={el}
              src={`/projects/tech/${el}.svg`}
              alt={el}
              height={36}
              width={36}
              className="opacity-80"
            />
          ))}
        </div>

        {/* Description */}
        <p
          className="relative z-10 text-base text-white/90 font-medium tracking-wide max-w-[70%] transform-gpu"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
