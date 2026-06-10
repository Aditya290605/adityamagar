import Link from "next/link";

const tagColors = {
  Flutter: ["#42A5F5", "#02569B"],
  Architecture: ["#8B31FF", "#7000FF"],
  Dart: ["#00B4AB", "#0175C2"],
  "Next.js": ["#FFFFFF", "#8A8A8A"],
  Portfolio: ["#9F55FF", "#06B6D4"],
  "Web Dev": ["#22C55E", "#16A34A"],
  State: ["#F59E0B", "#D97706"],
  Supabase: ["#3ECF8E", "#059669"],
  Firebase: ["#FFCA28", "#F59E0B"],
  Performance: ["#EF4444", "#DC2626"],
  Git: ["#F97316", "#EA580C"],
};

const getAccent = (tags) => tagColors[tags[0]] || ["#8B31FF", "#7000FF"];

const estimateReadTime = (excerpt = "") =>
  Math.max(3, Math.ceil(excerpt.split(/\s+/).filter(Boolean).length / 35) + 2);

const BlogCard = ({ slug, title, date, tags = [], excerpt }) => {
  const accent = getAccent(tags);
  const readTime = estimateReadTime(excerpt);

  return (
    <Link href={`/blog/${slug}`} className="link block h-full group">
      <article className="relative flex h-full min-h-[25rem] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gray-dark-5 p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-indigo-light/35 group-hover:shadow-[0_1.5rem_3.5rem_rgba(112,0,255,0.15)] md:p-7">
        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{ background: `linear-gradient(90deg, ${accent[0]}, ${accent[1]})` }}
        />
        <div
          className="absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-45"
          style={{ background: accent[0] }}
        />
        <div
          className="absolute -bottom-24 left-1/4 h-56 w-56 rounded-full blur-3xl opacity-20"
          style={{ background: accent[1] }}
        />

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-8 flex items-center justify-between gap-4">
            <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[0.78rem] font-mono uppercase tracking-[0.14em] text-gray-light-3">
              {date}
            </span>
            <span className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-[0.78rem] font-mono text-indigo-light">
              {readTime} min read
            </span>
          </div>

          <div
            className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] text-xl font-bold text-white shadow-[0_1rem_2.5rem_rgba(0,0,0,0.2)]"
            style={{ background: `linear-gradient(135deg, ${accent[0]}55, ${accent[1]}55)` }}
          >
            {title.charAt(0)}
          </div>

          <h3 className="mb-4 text-2xl font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-indigo-light md:text-[1.65rem]">
            {title}
          </h3>

          <div className="mb-6 flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[0.78rem] font-mono text-gray-light-2"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[1.04rem] leading-[1.75] text-gray-light-3 line-clamp-4">
            {excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-5">
            <span className="text-[0.82rem] font-mono uppercase tracking-[0.16em] text-gray-light-4">
              Read article
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-white transition-all duration-300 group-hover:border-indigo-light/40 group-hover:bg-indigo-light/15 group-hover:text-indigo-light">
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
      </article>
    </Link>
  );
};

export default BlogCard;
