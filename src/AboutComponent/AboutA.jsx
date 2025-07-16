import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/jj.jpg';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
};

export default function AboutA() {
  return (
    <div className="w-full">
      <div className="h-[80vh] w-full px-4 sm:px-6 md:px-16 py-6">
        <motion.div
          variants={zoomIn}
          initial="hidden"
          animate="visible"
          className="h-full rounded-3xl bg-cover bg-center relative"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-0 rounded-3xl" />

          {/* Text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative z-10 h-full flex items-center px-4 sm:px-6 md:px-12 lg:px-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="bg-black/60 p-4 sm:p-6 md:p-8 rounded-2xl max-w-xl text-white"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Who <span className="border-b-2 border-purple-600">We Are</span>
              </h1>

              <p className="text-sm sm:text-base mb-4 leading-relaxed">
                Agile360 PMC is a project management and HR consulting firm committed to helping
                businesses improve performance through smart HR solutions and compliance support.
                We simplify complexity and help you grow with clarity.
              </p>

              <div className="text-sm sm:text-base font-medium flex items-center gap-2">
                <Link to="/" className="hover:underline decoration-purple-500 flex items-center gap-1 text-white">
                  <FaHome />
                  Home
                </Link>
                <span className="text-white">→</span>
                <span>About</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
