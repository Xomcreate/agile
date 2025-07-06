import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/agi.jpeg';
import SunIcon from '../assets/agi.jpeg';
import AdminLogin from '../MainComponent/AdminLogin';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsOpen(o => !o);
  const closeMenu = () => setIsOpen(false);

  const bgClass = scrolled
    ? 'bg-white bg-opacity-80 shadow-md backdrop-blur-sm'
    : 'bg-transparent';

  return (
    <>
      {/* Header Section */}
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`${bgClass} fixed top-0 w-full z-50 transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={Logo}
              alt="Logo"
              className="h-16 w-auto rounded-full object-cover transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/service', 'Service'],
              ['/test', 'Testimonials'],
              ['/blog', 'Blog'],
              ['/contact', 'Contact'],
            ].map(([path, label]) => (
              <Link
                key={path}
                to={path}
                className="hover:text-[#af08af] relative group transition-colors"
              >
                {label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#af08af] group-hover:w-6 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* CTA & Admin */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-[#af08af] hover:bg-purple-800 text-white px-4 py-2 rounded-lg font-semibold space-x-2 transition-colors">
              <Link to="/contact">Get A Quote</Link>
              <Link to="/" className="hover:underline">&#8594;</Link>
            </div>

            {/* Admin Icon Button */}
            <button
              onClick={() => setShowAdminModal(true)}
              className="p-2 rounded-full opacity-20 hover:opacity-60 transition-opacity"
              title="Admin login"
            >
              <img src={SunIcon} alt="Admin" className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl text-gray-700">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="md:hidden bg-white shadow-md px-6 pt-4 pb-6 text-center text-gray-800 font-medium space-y-4 fixed top-20 w-full z-40"
          >
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/service', 'Service'],
              ['/test', 'Testimonials'],
              ['/blog', 'Blog'],
              ['/contact', 'Contact'],
              ['/contact', 'Get A Quote'],
            ].map(([path, label], i) => (
              <Link
                key={i}
                to={path}
                onClick={closeMenu}
                className="block hover:text-[#af08af] relative group transition-colors"
              >
                {label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#af08af] group-hover:w-6 transition-all duration-300 rounded-full" />
              </Link>
            ))}

            <Link
              to="/"
              onClick={closeMenu}
              className="block text-2xl text-[#af08af] hover:underline transition-colors"
            >
              &#8594;
            </Link>

            {/* Mobile Admin Icon */}
            <button
              onClick={() => {
                closeMenu();
                setShowAdminModal(true);
              }}
              className="inline-flex items-center justify-center p-2 rounded-full opacity-20 hover:opacity-60 transition-opacity mx-auto"
              title="Admin login"
            >
              <img src={SunIcon} alt="Admin" className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer below fixed header */}
      <div className="h-20 w-full" />

      {/* Admin Login Modal */}
      <AnimatePresence>
        {showAdminModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-md w-full rounded-2xl p-6 relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowAdminModal(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
              >
                ×
              </button>
              <AdminLogin />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
