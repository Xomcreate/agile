import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function HomeC() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios
      .get('https://agibackend.onrender.com/api/works')
      .then((res) => setWorks(res.data))
      .catch((err) => console.error('Failed to fetch works:', err));
  }, []);

  return (
    <div className="w-full px-4 md:px-16 py-8 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Our <span className="text-purple-700">Latest Works</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore some of the amazing work we've done recently.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {works.length > 0 ? (
          works.map((work) => (
            <motion.div
              key={work._id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-md border p-4 transition-all"
            >
              <img
                src={work.images?.[0]?.url || 'fallback.jpg'}
                alt={work.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{work.title}</h3>
              <p className="text-sm text-gray-600">
                {work.description.length > 100
                  ? `${work.description.slice(0, 100)}...`
                  : work.description}
              </p>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No works uploaded yet.</p>
        )}
      </div>
    </div>
  );
}
