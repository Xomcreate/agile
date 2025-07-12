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
    <div className="w-screen overflow-hidden">
      <motion.div
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl my-6 rounded-3xl bg-cover bg-center relative overflow-hidden shadow-lg min-h-[80vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-24"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="bg-black/60 p-6 sm:p-10 rounded-2xl max-w-3xl text-white text-center"
          >
            <h1 className="text-xl md:text-3xl font-bold mb-3">
              Who <span className="border-b-4 border-purple-600 pb-1">We Are</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base mb-4 leading-relaxed">
              Agile360 PMC is a project management and HR consulting firm committed to helping
              businesses improve performance through smart HR solutions and compliance support.
              We simplify complexity and help you grow with clarity.
            </p>

            <p className="text-sm sm:text-base font-medium flex items-center justify-center gap-2">
              <Link to="/" className="hover:underline decoration-[purple] flex items-center gap-1 text-white">
                <FaHome />
                Home
              </Link>
              <span className="text-white">→</span>
              <span>About</span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
