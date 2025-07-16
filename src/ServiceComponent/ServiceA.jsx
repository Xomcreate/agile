import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '../assets/serve.jpg';
import { motion } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const zoomIn = {
  hidden: { scale: 1 },
  visible: {
    scale: 1.02,
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

function ServiceA() {
  return (
    <div className="w-full">
      <div className="grid h-[80vh] w-full px-[20px] md:px-[100px] py-[10px]">
        <motion.div
          variants={zoomIn}
          initial="hidden"
          animate="visible"
          className="w-full h-full grid rounded-3xl bg-cover bg-center relative overflow-hidden"
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
              transition={{ delay: 0.6, duration: 1 }}
              className="bg-black/50 p-6 rounded-2xl max-w-3xl w-full"
            >
              <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                Our{' '}
                <span className="border-b-[3px] border-purple-600 leading-tight">
                  Services
                </span>
              </h1>

              <p className="text-xs md:text-sm text-white max-w-2xl mb-4">
                We deliver expert consulting, risk assessment, and audit services to help your organization grow while staying compliant and competitive.
              </p>

              <p className="text-sm md:text-base text-white font-medium flex items-center justify-center gap-2">
                <Link to="/" className="text-white hover:underline flex items-center gap-1">
                  <FaHome className="text-white" />
                  Home
                </Link>
                <span className="text-white">→</span>
                <span className="text-white">Services</span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServiceA;
