import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function CarB() {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    fetch('https://agibackend.onrender.com/api/careers')
      .then((res) => res.json())
      .then((data) => setCareers(data))
      .catch((err) => console.error('Failed to fetch careers', err));
  }, []);

  return (
    <div className="w-full min-h-screen px-4 md:px-16 py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Career <span className="text-purple-700">Opportunities</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Be part of our mission-driven team. Check out the latest open roles and apply to join us!
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {careers.length > 0 ? (
          careers.map((job) => (
            <motion.div
              key={job._id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                <FaBriefcase className="inline-block text-purple-600 mr-2" />
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {job.description.length > 120
                  ? `${job.description.slice(0, 120)}...`
                  : job.description}
              </p>

              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <FaMapMarkerAlt className="text-purple-500" />
                <span>{job.location}</span>
                <FaClock className="text-purple-500 ml-4" />
                <span>{job.type}</span>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No current openings.</p>
        )}
      </div>
    </div>
  );
}

export default CarB;
