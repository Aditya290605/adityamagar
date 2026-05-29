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
    <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8 transition-all duration-500 hover:border-purple/30 hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(139,49,255,0.06)]">
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative flex flex-col sm:flex-row gap-5">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/[0.05] border border-white/[0.06] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo}
              alt={company}
              className="w-11 h-11 object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1.5">
            <h3 className="text-xl font-bold text-white tracking-tight">{role}</h3>
            {isCurrent && <TagChip label="Current" variant="live" />}
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm font-mono text-gray-light-3 mb-5">
            <a
              href={companyUrl}
              target="_blank"
              rel="noreferrer"
              className="link text-indigo-light hover:text-purple transition-colors"
            >
              {company}
            </a>
            <span className="text-gray-light-4">·</span>
            <span>{dateRange}</span>
            <span className="hidden sm:inline text-gray-light-4">·</span>
            <span className="hidden sm:inline">{location}</span>
          </div>

          {/* Bullet points */}
          {bullets.length > 0 && (
            <ul className="space-y-2.5 mb-6">
              {bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="text-gray-light-2 text-sm leading-relaxed flex items-start gap-3"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-indigo-light flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech stack */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
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
