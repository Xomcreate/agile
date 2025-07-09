import React from 'react';
import logo from '../assets/agi.jpeg';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Footer = () => (
  <motion.footer
    className="bg-[purple] text-white pt-16 px-6 md:px-20 relative"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    {/* Main Footer Grid */}
    <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center md:justify-between gap-12 pb-12">
      
      {/* ─── Logo + Newsletter ───────────────────────── */}
      <motion.div
        className="flex-1 min-w-[250px] max-w-[300px]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
      >
        <h1 className="text-3xl font-bold flex items-center gap-2 justify-center md:justify-start">
          <img src={logo} alt="Logo" className="h-17 w-[200px]" />
        </h1>
        <p className="text-sm mt-4 leading-relaxed md:text-left text-center">
          Agile360 PMC is a project management consulting firm specializing in
          HR consulting and Sponsor Compliance audits and solutions.
        </p>

        <div className="mt-6 w-full">
          <label
            htmlFor="mail"
            className="text-sm font-medium block mb-2 md:text-left text-center"
          >
            Enter E-Mail*
          </label>
          <div className="flex items-center w-full">
            <input
              id="mail"
              type="email"
              placeholder="example@mail.com"
              className="flex-1 px-3 py-2 text-black bg-white rounded-l-md focus:outline-none"
            />
            <button
              onClick={() => (window.location.href = '/')}
              className="bg-black hover:bg-gray-800 px-4 py-2 rounded-r-full text-white font-medium"
            >
              Subscribe
            </button>
          </div>
          <div className="border-b border-white mt-3" />
        </div>
      </motion.div>

      {/* ─── Company Links ─────────────────────────── */}
      <motion.div
        className="flex-1 min-w-[180px] max-w-[220px] md:text-left text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
      >
        <h2 className="text-xl font-semibold mb-4">Company</h2>
        <ul className="text-sm space-y-3">
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/service" className="hover:underline">Services</a></li>
          <li><a href="/test" className="hover:underline">Testimonials</a></li>
          <li><a href="/blog" className="hover:underline">Blog</a></li>
         <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </motion.div>

      {/* ─── Services Links ────────────────────────── */}
      <motion.div
        className="flex-1 min-w-[180px] max-w-[220px] md:text-left text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={3}
      >
        <h2 className="text-xl font-semibold mb-4">Services</h2>
        <ul className="text-sm space-y-3">
          <li><a href="/service" className="hover:underline">HR Consulting</a></li>
          <li><a href="/service" className="hover:underline">Compliance & Audit</a></li>
          <li><a href="/service" className="hover:underline">HR Outsourcing</a></li>
          <li><a href="/service" className="hover:underline">HR Support & Advisory</a></li>
          <li><a href="/service" className="hover:underline">Additional Services</a></li>
        </ul>
      </motion.div>

      {/* ─── Contact Info ──────────────────────────── */}
      <motion.div
        className="flex-1 min-w-[250px] max-w-[300px] md:text-left text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={4}
      >
        <h2 className="text-xl font-semibold mb-4">Contact</h2>

        <div className="text-sm mb-4">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaMapMarkerAlt className="text-white" />
            <p className="font-semibold">Our address:</p>
          </div>
          <div className="ml-6 text-center md:text-left">
            <p>116a Brandshawgate Manchester, Leigh, WN7 4NP,</p>
            <p>United Kingdom</p>
          </div>
        </div>

        <hr className="border-dashed border-white mb-4 w-full" />

        <div className="flex items-center gap-3 text-sm mb-2 justify-center md:justify-start">
          <FaPhoneAlt className="text-white" />
          <p>(+44) 7770627646</p>
        </div>

        <div className="flex items-center gap-3 text-sm mb-4 justify-center md:justify-start">
          <FaEnvelope className="text-white" />
          <p>info@agile360pmc.com</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 justify-center md:justify-start">
          <a href="https://www.facebook.com/share/1FVpy2jaZP/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-300">
            <FaFacebookF />
          </a>
          <a href="https://x.com/Agile360pmc" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-300">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/_agile360pmc/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-300">
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </div>

    {/* Bottom Divider */}
    <hr className="border-t border-white mx-6 md:mx-20" />

    {/* Bottom Text */}
    <motion.div
      className="max-w-screen-xl mx-auto px-4 py-6 text-sm text-gray-300 flex justify-center"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={5}
    >
      <p className="text-center">
        © 2025 <span className="text-white font-semibold">Agile360PMC</span>. Designed &amp; Developed by{' '}
        <span className="text-white font-semibold">Xom-Codes</span>
      </p>
    </motion.div>

    {/* Scroll to Top Button */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 border-2 border-orange-500 text-orange-500 p-3 rounded-full hover:bg-orange-500 hover:text-white transition"
    >
      <FaArrowUp />
    </button>
  </motion.footer>
);

export default Footer;
