import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function HomeD() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/api/blogs')
      .then(res => {
        const publishedBlogs = res.data.filter(blog => blog.status === 'Published');
        setBlogs(publishedBlogs);
      })
      .catch(err => console.error('Error fetching blogs:', err));
  }, []);

  return (
    <div className="bg-white py-16 px-6 md:px-20 w-full min-h-[80vh]">

      {/* ==== Blog Section ==== */}
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          Our Latest Blog Posts
        </h2>
        <p className="text-lg text-gray-600 font-medium max-w-3xl mx-auto">
          Read the latest insights and updates from our team.
        </p>
      </div>

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

      {blogs.length > 3 && (
        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            View All Blogs
          </Link>
        </div>
      )}
    </div>
  );
}
