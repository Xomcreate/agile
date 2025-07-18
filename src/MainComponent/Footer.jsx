import React from 'react';
import { Link } from 'react-router-dom';
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
  <footer className="bg-[purple] text-white pt-20 px-6 md:px-20 text-lg leading-relaxed">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 pb-16">
      
      {/* Logo & Description */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        className="space-y-5"
      >
        <img src={logo} alt="Logo" className="h-20 w-auto mx-auto md:mx-0" />
        <p className="text-base text-center md:text-left font-medium">
          Agile360 PMC is a project management consulting firm specializing in
          HR consulting and Sponsor Compliance audits and solutions.
        </p>
      </motion.div>

      {/* Company Links */}
      <motion.div
        className="md:text-left text-center space-y-5"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
      >
        <h2 className="text-2xl font-bold mb-2">Company</h2>
        <ul className="space-y-4 text-base font-medium">
          {[
            ['/about', 'About Us'],
            ['/service', 'Services'],
            ['/test', 'Testimonials'],
            ['/blog', 'Blog'],
            ['/car', 'Career'],
            ['/contact', 'Contact'],
          ].map(([link, label]) => (
            <li key={label}>
              <Link to={link} className="hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Services */}
      <motion.div
        className="md:text-left text-center space-y-5"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={3}
      >
        <h2 className="text-2xl font-bold mb-2">Services</h2>
        <ul className="space-y-4 text-base font-medium">
          {[
            'HR Consulting',
            'Compliance & Audit',
            'HR Outsourcing',
            'HR Support & Advisory',
            'Additional Services',
          ].map((service, index) => (
            <li key={index}>
              <Link to="/service" className="hover:underline">
                {service}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="md:text-left text-center space-y-5"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={4}
      >
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <div className="space-y-3 text-base">
          <div className="flex items-start gap-2 justify-center md:justify-start">
            <FaMapMarkerAlt className="mt-1" />
            <div>
              <p className="font-semibold">Our address:</p>
              <p className="font-medium mt-1">
                116a Brandshawgate Manchester, Leigh, WN7 4NP
                <br />
                United Kingdom
              </p>
            </div>
          </div>
          <hr className="border-dashed border-white my-3" />
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaPhoneAlt />
            <p className="font-semibold">(+44) 7770627646</p>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaEnvelope />
            <p className="font-semibold">Contact@agile360-pmc.com</p>
          </div>
          <div className="flex gap-5 justify-center md:justify-start pt-3">
            <a
              href="https://www.facebook.com/share/1FVpy2jaZP/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-300 text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/Agile360pmc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-300 text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/_agile360pmc/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-300 text-xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </motion.div>
    </div>

    <hr className="border-t border-white mx-auto max-w-7xl my-4" />

    {/* Bottom Bar */}
    <motion.div
      className="max-w-7xl mx-auto px-4 py-6 text-base text-gray-300 text-center font-medium"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={5}
    >
      <p>
        © 2025 <span className="text-white font-bold">Agile360PMC</span>. Designed &amp; Developed by{' '}
        <a
          href="https://web.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold hover:underline"
        >
          Xom-Codes
        </a>
      </p>
    </motion.div>

    {/* Scroll to top button */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 border-2 border-orange-500 text-orange-500 p-3 rounded-full hover:bg-orange-500 hover:text-white transition"
    >
      <FaArrowUp />
    </button>
  </footer>
);

export default Footer;
