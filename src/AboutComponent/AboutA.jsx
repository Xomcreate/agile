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

function AboutA() {
  return (
    <div className="grid min-h-[80vh] w-full">
      <motion.div
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        className="mx-4 md:mx-24 my-6 grid rounded-3xl bg-cover bg-center relative overflow-hidden shadow-lg"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative z-10 w-full h-full rounded-3xl flex items-center justify-center px-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="bg-black/60 p-6 sm:p-10 rounded-2xl max-w-3xl text-white"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
              Who <span className="border-b-4 border-purple-600 pb-1">We Are</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
              Agile360 PMC is a project management and HR consulting firm
              committed to optimizing business performance through strategic
              human resource solutions and compliance audits. We help you
              navigate complexity, remain compliant, and scale effectively.
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

export default AboutA;
