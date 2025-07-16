import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function HomeD() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('https://agibackend.onrender.com/api/blogs')
      .then(res => setBlogs(res.data.filter(b => b.status === 'Published')))
      .catch(console.error);
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto bg-white py-8 px-6 md:px-20 min-h-[65vh]">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">Our Latest Blog Posts</h2>
          <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto">
            Read the latest insights and updates from our team.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.slice(0, 3).map(blog => (
            <div
              key={blog._id}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-gray-600 flex-grow">
                  {blog.description.length > 100
                    ? blog.description.slice(0, 100) + '...'
                    : blog.description}
                </p>
                <p className="text-sm text-gray-500 mt-2">📅 {blog.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        {blogs.length > 3 && (
          <div className="text-center mt-6">
            <Link
              to="/blog"
              className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            >
              View All Blogs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
