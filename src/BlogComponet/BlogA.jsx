import React from 'react';
import { Link } from 'react-router-dom';
import blogImage from '../assets/white3.jpg';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const zoomIn = {
  hidden: { scale: 1 },
  visible: {
    scale: 1.02,
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

export default function BlogA() {
  return (
    <div className="w-full overflow-hidden">
      <div className="grid h-[80vh] w-full px-4 md:px-24 py-6">
        <motion.div
          variants={zoomIn}
          initial="hidden"
          animate="visible"
          className="w-full h-full grid rounded-3xl bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${blogImage})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-0 rounded-3xl" />

          {/* Left-aligned content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative z-10 w-full h-full flex items-center justify-start text-left px-6 md:px-16"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="bg-black/50 p-4 sm:p-6 md:p-8 rounded-2xl max-w-xl"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                Explore Our <span className="border-b-2 border-purple-600">Blog</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-white mb-4 leading-relaxed">
                Get insights, news, and thought-leadership from our team. We share stories and
                strategies that help businesses grow and stay informed.
              </p>

              <div className="flex items-center gap-2 text-white text-sm font-medium">
                <Link to="/" className="hover:underline hover:text-purple-300 flex items-center gap-1">
                  <FaHome /> Home
                </Link>
                <span>→</span>
                <span>Blog</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
