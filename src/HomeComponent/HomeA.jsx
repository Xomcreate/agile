import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import PlayIcon from '../assets/agi.jpeg';
import bg1 from '../assets/hom1.jpg';
import bg2 from '../assets/hom2.jpg';
import bg3 from '../assets/hom4.jpg';
import Appointment from '../MainComponent/Appointment';

const bgImages = [bg1, bg2, bg3];

function HomeA() {
  const [currentBg, setCurrentBg] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="relative text-white rounded-b-3xl mx-4 sm:mx-6 md:mx-12 lg:mx-[60px]
        mt-5 overflow-hidden h-auto sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
      >
        {/* Background Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${bgImages[currentBg]})` }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div
          className="relative z-20 max-w-7xl mx-auto
          flex flex-col-reverse lg:flex-row
          items-center lg:items-start
          py-12 sm:py-16 lg:py-20
          px-4 sm:px-6 md:px-8 lg:px-12 h-full"
        >
          {/* Left Text */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug mb-4 sm:mb-6">
              Human Resources Consulting,<br />
              Compliance Audit and Solutions<br />
              <span className="underline decoration-[purple]">Implementation</span>
            </h1>
            <p className="text-gray-300 mb-6 max-w-md mx-auto lg:mx-0 text-xs sm:text-sm md:text-base">
              Optimize Your HR Function with Our Expert Guidance
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 w-full text-center">
              <button
                onClick={() => setShowModal(true)}
                className="mx-auto sm:mx-0 bg-black hover:bg-[#af08af] px-4 py-2 sm:px-5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm"
              >
                Schedule An Appointment
              </button>
              <div className="flex justify-center sm:justify-start items-center text-gray-200 text-xs sm:text-sm">
                <span className="mr-2">📞</span>
                <span>(+44) 7770627646</span>
              </div>
            </div>
          </div>

          {/* Right Button */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
            <button
              className="bg-[purple] hover:bg-[#af08af] p-4 sm:p-5 rounded-full shadow-lg flex items-center justify-center"
            >
              <img src={PlayIcon} alt="Play Video" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal with Appointment Component */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-6 overflow-y-auto relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
              >
                ×
              </button>

              {/* Appointment Form Component */}
              <Appointment />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default HomeA;
