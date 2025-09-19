import React from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "@/components/home.components/NavBar";
import { blogs } from "@/data/blogs";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="bg-[#0B101B] text-[#C9CED6] min-h-screen flex flex-col items-center justify-center">
        <NavBar />
        <h1 className="text-3xl font-bold">Blog Not Found</h1>
        <Link to="/blogs" className="mt-4 text-[#144EE3] hover:underline">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#0B101B] text-[#C9CED6] min-h-screen">
      <NavBar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          {blog.date} • {blog.author}
        </p>
        {/* Blog Excerpt */}
        {blog.excerpt && (
          <p className="text-lg text-gray-300 mb-8 leading-relaxed italic">
            {blog.excerpt}
          </p>
        )}

        {/* Blog Cover Image */}
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full rounded-xl mb-10 shadow-lg"
          />
        )}

        {/* Blog Content */}
        <div
          className="prose prose-invert prose-p:leading-relaxed prose-h2:text-white prose-h3:text-white prose-strong:text-white prose-a:text-[#144EE3] prose-li:marker:text-[#144EE3] max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Back Link */}
        <Link
          to="/blogs"
          className="inline-block mt-12 text-[#144EE3] font-semibold hover:underline"
        >
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
