import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import agi from '../assets/agi.jpeg';

function ContactD() {
  return (
    <motion.div
      className="bg-[#af08af] w-full py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="w-full px-6 md:px-[120px] grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Column 1: Email */}
        <motion.div
          className="flex items-center justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="bg-white rounded-full p-3">
            <FaEnvelope className="text-[#af08af] text-xl" />
          </div>
          <div className="text-white text-sm text-center md:text-left">
            <p className="font-semibold">Say Hello</p>
            <p>info@agile360pmc.com</p>
          </div>
        </motion.div>

        {/* Column 2: Logo */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={agi} alt="Agile Icon" className="w-[80px] md:w-[120px] h-auto" />
        </motion.div>

        {/* Column 3: Social Media Icons */}
        <motion.div
          className="flex justify-center md:justify-end gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <a
            href="https://facebook.com/agile360pmc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-3 hover:scale-110 transition-transform"
          >
            <FaFacebookF className="text-[#af08af] text-lg" />
          </a>

          <a
            href="https://twitter.com/agile360pmc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-3 hover:scale-110 transition-transform"
          >
            <FaTwitter className="text-[#af08af] text-lg" />
          </a>

          <a
            href="https://instagram.com/agile360pmc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-3 hover:scale-110 transition-transform"
          >
            <FaInstagram className="text-[#af08af] text-lg" />
          </a>

          <a
            href="https://linkedin.com/company/agile360pmc"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-3 hover:scale-110 transition-transform"
          >
            <FaLinkedinIn className="text-[#af08af] text-lg" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ContactD;
