import Link from "next/link";
import { motion } from "framer-motion";
import Meta from "@/components/Meta/Meta";
import PageHeader from "@/components/ui/PageHeader";
import TagChip from "@/components/ui/TagChip";
import CTASection from "@/components/ui/CTASection";
import { BLOG_POSTS } from "../../constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const BlogPost = ({ post }) => {
  if (!post) return null;

  return (
    <>
      <Meta
        title={`${post.title} — Aditya Magar`}
        description={post.excerpt}
      />
      <div className="section-container min-h-screen">
        <PageHeader
          title={post.title}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Tags & Date */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-2 mb-12"
        >
          {post.tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
          <span className="text-sm font-mono text-gray-light-4 ml-2 flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gray-light-4" />
            {post.date}
          </span>
        </motion.div>

        {/* Content */}
        <motion.article
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl pb-16"
        >
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-2xl font-bold text-white mt-12 mb-5 tracking-tight"
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="text-lg font-bold text-white mt-8 mb-3 tracking-tight"
                >
                  {block.replace("### ", "")}
                </h3>
              );
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="space-y-2.5 my-5 pl-1">
                  {items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-gray-light-2 leading-relaxed"
                    >
                      <span className="mt-2.5 w-1 h-1 rounded-full bg-indigo-light flex-shrink-0" />
                      <span>{item.replace("- ", "")}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            // Numbered lists
            if (/^\d+\./.test(block)) {
              const items = block.split("\n").filter((l) => /^\d+\./.test(l));
              return (
                <ol key={i} className="space-y-2.5 my-5 pl-1">
                  {items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-gray-light-2 leading-relaxed"
                    >
                      <span className="text-indigo-light font-mono text-sm mt-0.5 flex-shrink-0">
                        {j + 1}.
                      </span>
                      <span>{item.replace(/^\d+\.\s*/, "")}</span>
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p
                key={i}
                className="text-gray-light-2 text-[1.05rem] leading-[1.85] mb-5"
              >
                {block}
              </p>
            );
          })}
        </motion.article>

        {/* Back link */}
        <div className="pb-10">
          <Link
            href="/blog"
            className="link inline-flex items-center gap-2 text-gray-light-3 font-mono text-sm hover:text-indigo-light transition-all duration-200 group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All posts
          </Link>
        </div>
      </div>
      <CTASection />
    </>
  );
};

export async function getStaticPaths() {
  const paths = BLOG_POSTS.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
}

export default BlogPost;
