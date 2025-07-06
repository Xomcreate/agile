import React from 'react';
import { FaCalendarAlt, FaBullhorn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const events = [
  {
    date: 'Aug 15, 2025',
    title: 'Annual Tech Conference 2025',
    description: 'Join industry leaders to explore the latest innovations in technology and networking opportunities.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Tech+Conference',
  },
  {
    date: 'Sep 10, 2025',
    title: 'HR & Compliance Workshop',
    description: 'A hands-on workshop covering modern HR practices and compliance regulations for businesses.',
    imageUrl: 'https://via.placeholder.com/400x250?text=HR+Workshop',
  },
  {
    date: 'Oct 05, 2025',
    title: 'Product Launch Event',
    description: 'Discover our newest product and enjoy live demos and Q&A sessions with the developers.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Product+Launch',
  },
  {
    date: 'Nov 20, 2025',
    title: 'Year-End Gala & Awards',
    description: 'Celebrate success and excellence with our team and partners at the annual gala event.',
    imageUrl: 'https://via.placeholder.com/400x250?text=Gala+&+Awards',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function BlogB() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      {/* Heading */}
      <div className="flex items-center mb-12 gap-4">
        <FaBullhorn className="text-purple-600 text-4xl" />
        <h2 className="text-4xl font-extrabold text-purple-800">Upcoming Events</h2>
      </div>

      {/* Events List with stagger container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {events.map(({ date, title, description, imageUrl }, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
            variants={fadeUp}
          >
            {/* Event image */}
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover rounded-t-xl"
            />

            {/* Text content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaCalendarAlt className="text-purple-500 text-xl" />
                <time className="text-purple-700 font-semibold">{date}</time>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default BlogB;
