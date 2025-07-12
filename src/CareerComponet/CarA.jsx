import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/jug.jpg'; // you can change to a careers-themed image
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

function CarA() {
  return (
    <div className="w-full overflow-hidden">
      <div className="grid h-[80vh] w-full px-4 md:px-24 py-6">
        <motion.div
          variants={zoomIn}
          initial="hidden"
          animate="visible"
          className="w-full h-full grid rounded-3xl bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-0 rounded-3xl" />

          {/* Left-aligned text */}
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
                Join Our <span className="border-b-2 border-purple-600">Team</span>
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-white mb-4 leading-relaxed">
                Discover exciting career opportunities with us. At Agile360, we value innovation,
                collaboration, and growth. Be part of a team that's making a difference.
              </p>

              <div className="flex items-center gap-2 text-white text-sm font-medium">
                <Link to="/" className="hover:underline hover:text-purple-300 flex items-center gap-1">
                  <FaHome /> Home
                </Link>
                <span>→</span>
                <span>Careers</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default CarA;
