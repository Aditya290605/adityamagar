import Image from "next/image";
import TagChip from "../ui/TagChip";

const ExperienceCard = ({
  role,
  company,
  companyUrl,
  logo,
  dateRange,
  location,
  bullets = [],
  techStack = [],
  isCurrent,
}) => {
  return (
    <div className="relative rounded-2xl border border-gray-dark-1 bg-gray-dark-2 p-6 md:p-8 transition-all duration-300 hover:border-purple/40 hover:shadow-[0_0_1.5rem_rgba(139,49,255,0.08)]">
      <div className="flex flex-col sm:flex-row gap-5">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-dark-3 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo}
              alt={company}
              className="w-14 h-14 object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
            <h3 className="text-xl font-semibold text-white">{role}</h3>
            {isCurrent && <TagChip label="Current" variant="live" />}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm font-mono text-gray-light-3 mb-4">
            <a
              href={companyUrl}
              target="_blank"
              rel="noreferrer"
              className="link text-indigo-light hover:text-purple transition-colors"
            >
              {company}
            </a>
            <span className="hidden sm:inline text-gray-light-4">·</span>
            <span>{dateRange}</span>
            <span className="hidden sm:inline text-gray-light-4">·</span>
            <span>{location}</span>
          </div>

          {/* Bullet points */}
          {bullets.length > 0 && (
            <ul className="space-y-2 mb-5">
              {bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="text-gray-light-2 text-sm leading-relaxed flex items-start gap-2"
                >
                  <span className="text-indigo-light mt-1.5 text-[0.5rem]">
                    ▶
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech stack */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <TagChip key={tech} label={tech} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
