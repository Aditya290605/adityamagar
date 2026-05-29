import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BlogCard from "./BlogCard";
import { BLOG_POSTS } from "../../constants";

const BlogPreview = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".blog-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full relative select-none mt-20 sm:mt-32 mb-10"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col blog-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              BLOG
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              Latest Posts
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              Thoughts on Flutter, architecture, and building great software.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 staggered-reveal">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="mt-8 staggered-reveal">
            <Link
              href="/blog"
              className="link inline-flex items-center gap-2 text-indigo-light font-mono text-sm font-medium hover:gap-3 transition-all duration-200"
            >
              All Posts <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
