import Link from "next/link";
import { motion } from "framer-motion";
import Meta from "@/components/Meta/Meta";
import PageHeader from "@/components/ui/PageHeader";
import TagChip from "@/components/ui/TagChip";
import CTASection from "@/components/ui/CTASection";
import { BLOG_POSTS } from "../../constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          {post.tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
          <span className="text-sm font-mono text-gray-light-4 ml-2">
            {post.date}
          </span>
        </motion.div>

        {/* Content */}
        <motion.article
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-3xl pb-16 prose-custom"
        >
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-2xl font-semibold text-white mt-10 mb-4"
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="text-xl font-semibold text-white mt-8 mb-3"
                >
                  {block.replace("### ", "")}
                </h3>
              );
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="space-y-2 my-4">
                  {items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-gray-light-2 leading-relaxed"
                    >
                      <span className="text-indigo-light mt-1.5 text-xs">
                        ▶
                      </span>
                      <span>{item.replace("- ", "")}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p
                key={i}
                className="text-gray-light-2 text-lg leading-relaxed mb-4"
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
            className="link inline-flex items-center gap-2 text-gray-light-3 font-mono text-sm hover:text-indigo-light hover:gap-3 transition-all duration-200"
          >
            <span>←</span> All posts
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
