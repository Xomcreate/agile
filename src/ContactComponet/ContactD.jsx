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

export default function ContactD() {
  return (
    <div className="w-full">
      <motion.div
        className="bg-[#af08af] w-full py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
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
              <p>Contact@agile360-pmc.com</p>
            </div>
          </motion.div>

          {/* Column 2: Logo */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={agi} alt="Agile Icon" className="w-[80px] md:w-[120px] h-auto rounded-full" />
          </motion.div>

          {/* Column 3: Social Media Icons */}
          <motion.div
            className="flex justify-center md:justify-end gap-4 flex-wrap"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {[
              ['https://www.facebook.com/share/1FVpy2jaZP/', <FaFacebookF />],
              ['https://x.com/Agile360pmcc', <FaTwitter />],
              ['https://www.instagram.com/_agile360pmc/', <FaInstagram />],
              ['https://www.linkedin.com/company/agile360pmc/', <FaLinkedinIn />],
            ].map(([link, Icon], index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-3 hover:scale-110 transition-transform"
              >
                <div className="text-[#af08af] text-lg">{Icon}</div>
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
