import React from 'react';
import { Link } from 'react-router-dom';
import blogImage from '../assets/boss.jpg'; // Replace with your image
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const zoomIn = {
  hidden: { scale: 1 },
  visible: {
    scale: 1.02,
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
};

function BlogA() {
  return (
    <div className="grid h-[80vh] w-full">
      <motion.div
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        className="mx-4 md:mx-24 my-6 grid rounded-3xl bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${blogImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0 rounded-3xl"></div>

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
            className="bg-black/50 p-6 md:p-10 rounded-2xl max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3">
              Explore Our{' '}
              <span className="border-b-4 border-purple-600">
                Blog
              </span>
            </h1>

            <p className="text-white text-sm md:text-lg mb-6 leading-relaxed">
              Get insights, news, and thought-leadership from our team.
              We share stories and strategies that help businesses grow and stay informed.
            </p>

            <div className="flex items-center gap-3 text-white text-base font-medium">
              <Link
                to="/"
                className="hover:underline hover:text-purple-300 flex items-center gap-2"
              >
                <FaHome /> Home
              </Link>
              <span>→</span>
              <span>Blog</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BlogA;
