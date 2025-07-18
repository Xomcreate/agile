import React from 'react';
import { Link } from 'react-router-dom';
import manImage from '../assets/call.jpg';
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

export default function ContactA() {
  return (
    <div className="w-full">
      <div className="grid h-[80vh] w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mx-4 md:mx-24 my-6 grid rounded-3xl bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${manImage})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-0 rounded-3xl"></div>

          {/* Overlay text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              <span className="border-b-2 border-[#af08af] pb-1">Contact</span> Us
            </h1>

            <p className="text-white text-sm sm:text-base font-normal max-w-xl mb-5">
              We'd love to hear from you! Whether you have a question, feedback, or need assistance,
              our team is here to help. Reach out anytime — we're just a message away.
            </p>

            <p className="text-sm sm:text-base text-white font-medium flex items-center gap-2">
              <Link
                to="/"
                className="flex items-center gap-1 hover:border-b hover:border-[#af08af]"
              >
                <FaHome />
                Home
              </Link>
              <span>→</span>
              <span>Contact</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
