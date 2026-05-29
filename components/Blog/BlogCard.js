import Link from "next/link";
import TagChip from "../ui/TagChip";

const BlogCard = ({ slug, title, date, tags = [], excerpt }) => {
  return (
    <Link href={`/blog/${slug}`} className="link block group">
      <article className="rounded-2xl border border-gray-dark-1 bg-gray-dark-2 p-6 md:p-8 transition-all duration-300 hover:border-purple/40 hover:shadow-[0_0_1.5rem_rgba(139,49,255,0.08)]">
        {/* Tags & Date */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
          <span className="text-sm font-mono text-gray-light-4 ml-auto">
            {date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-indigo-light transition-colors duration-200">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-light-3 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        {/* Read more arrow */}
        <div className="mt-4 flex items-center gap-2 text-indigo-light text-sm font-mono font-medium group-hover:gap-3 transition-all duration-200">
          Read more
          <span className="transform group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
