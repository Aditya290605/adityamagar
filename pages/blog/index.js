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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-mono text-[0.78rem] uppercase tracking-[0.16em] text-indigo-light">
              Writing Desk
            </p>
            <p className="mt-2 max-w-2xl text-[1.08rem] leading-relaxed text-gray-light-2">
              Notes from building Flutter apps, shaping architecture, and
              learning through real projects.
            </p>
          </div>
          <div className="w-fit rounded-full border border-white/[0.08] bg-black/20 px-4 py-2 font-mono text-sm text-gray-light-3">
            {BLOG_POSTS.length} article{BLOG_POSTS.length !== 1 ? "s" : ""}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pb-14"
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
