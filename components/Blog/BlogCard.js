import Link from "next/link";
import TagChip from "../ui/TagChip";

const BlogCard = ({ slug, title, date, tags = [], excerpt }) => {
  return (
    <Link href={`/blog/${slug}`} className="link block group">
      <article className="relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-500 hover:border-purple/30 hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(139,49,255,0.06)]">
        {/* Hover gradient */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative">
          {/* Date */}
          <span className="text-[0.7rem] font-mono text-gray-light-4 uppercase tracking-wider">
            {date}
          </span>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold text-white mt-3 mb-3 group-hover:text-indigo-light transition-colors duration-300 leading-snug">
            {title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-1.5 mb-4">
            {tags.map((tag) => (
              <TagChip key={tag} label={tag} />
            ))}
          </div>

          {/* Excerpt */}
          <p className="text-gray-light-3 text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>

          {/* Read more arrow */}
          <div className="mt-5 flex items-center gap-2 text-indigo-light text-sm font-mono font-medium">
            Read article
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
