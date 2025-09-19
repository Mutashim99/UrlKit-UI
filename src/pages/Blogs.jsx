import React from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/home.components/NavBar";
import { blogs } from "@/data/blogs";

const Blogs = () => {
  return (
    <div className="bg-[#0B101B] text-[#C9CED6] min-h-screen">
      <NavBar />
      <div className="max-w-6xl mx-auto px-6 py-16">
       
        <h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-white"
        >
          Explore Our Blogs
        </h1>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#181E29] rounded-2xl overflow-hidden shadow-md border border-[#2A3242] hover:shadow-2xl hover:border-[#144EE3] transition-all duration-300"
            >
              
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-xs text-gray-400 mb-4">
                  {blog.date} • {blog.author}
                </p>
                <p className="text-sm mb-5 line-clamp-3">{blog.excerpt}</p>
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="inline-block text-[#144EE3] font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
