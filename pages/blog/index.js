import { motion } from "framer-motion";
import Meta from "@/components/Meta/Meta";
import PageHeader from "@/components/ui/PageHeader";
import CTASection from "@/components/ui/CTASection";
import BlogCard from "@/components/Blog/BlogCard";
import { BLOG_POSTS } from "../../constants";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const BlogPage = () => {
  return (
    <>
      <Meta
        title="Blog — Aditya Magar"
        description="Thoughts on Flutter, architecture, state management, and building great software products."
      />
      <div className="section-container min-h-screen">
        <PageHeader
          title="Blog"
          subtitle="Thoughts on Flutter, architecture, and lessons learned from building production apps."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog" },
          ]}
        />

        {/* Post count */}
        <p className="text-sm font-mono text-gray-light-4 mb-8">
          {BLOG_POSTS.length} article{BLOG_POSTS.length !== 1 ? "s" : ""}
        </p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-10"
        >
          {BLOG_POSTS.map((post) => (
            <motion.div key={post.slug} variants={fadeInUp}>
              <BlogCard {...post} />
            </motion.div>
          ))}
        </motion.div>

        {BLOG_POSTS.length === 0 && (
          <div className="text-center py-24">
            <p className="text-gray-light-3 font-mono text-lg mb-2">
              No blog posts yet
            </p>
            <p className="text-gray-light-4 text-sm">Stay tuned!</p>
          </div>
        )}
      </div>
      <CTASection />
    </>
  );
};

export default BlogPage;
