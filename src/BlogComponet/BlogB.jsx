import React, { useEffect, useState } from 'react';
import { FaCalendarAlt, FaBullhorn } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function BlogB() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://agibackend.onrender.com/api/blogs', { mode: 'cors' })
      .then(res => res.json())
      .then(data => {
        const published = data.filter(b => b.status.toLowerCase() === 'published');
        setBlogs(published);
      })
      .catch(err => console.error('Error fetching blogs:', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
      <div className="flex items-center mb-10 gap-3">
        <FaBullhorn className="text-purple-600 text-2xl md:text-3xl" />
        <h2 className="text-2xl md:text-3xl font-bold text-purple-800">
          Latest Blog Posts
        </h2>
      </div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {blogs.map(({ _id, date, title, description, thumbnail }) => (
          <motion.div
            key={_id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
            }}
          >
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-44 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <FaCalendarAlt className="text-purple-500 text-lg" />
                <time className="text-purple-700 text-sm font-semibold">
                  {new Date(date).toLocaleDateString()}
                </time>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-700">{description.slice(0, 100)}...</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {blogs.length === 0 && (
        <p className="text-center text-sm text-gray-500 mt-10">
          No published blog posts yet.
        </p>
      )}
    </div>
  );
}
