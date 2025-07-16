import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlayIcon from '../assets/agi.jpeg';
import bg1 from '../assets/hom1.jpg';
import bg2 from '../assets/white1.jpg';
import bg3 from '../assets/white2.jpg';
import Appointment from '../MainComponent/Appointment';

const bgImages = [bg1, bg2, bg3];

export default function HomeA() {
  const [currentBg, setCurrentBg] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <section className="relative text-white h-[80vh] w-full px-4 sm:px-6 md:px-16 py-6 rounded-3xl overflow-hidden">
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

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Text & Button Content (moved down further) */}
        <div className="relative z-20 h-full flex items-start pt-27">
          <div className="max-w-xl space-y-6">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold leading-snug tracking-tight drop-shadow-md">
              Human Resources Consulting,<br />
              Compliance Audit and Solutions<br />
              <span className="underline decoration-pink-600 decoration-4 underline-offset-4">
                Implementation
              </span>
            </h1>

            <p className="text-base sm:text-lg font-medium max-w-md">
              Optimize Your HR Function with Our Expert Guidance
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 pt-2">
              <button
                onClick={() => setShowModal(true)}
                className="bg-black hover:bg-[#af08af] px-4 py-2 sm:px-5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm"
              >
                Schedule An Appointment
              </button>
              <div className="flex items-center text-gray-200 text-xs sm:text-sm">
                <span className="mr-2">📞</span>
                <span>(+44) 7770627646</span>
              </div>
            </div>
          </div>
        </div>

        {/* Purple Icon */}
        <div className="absolute top-9 right-6 z-30">
          <button className="bg-[purple] hover:bg-[#af08af] p-5 rounded-full shadow-lg">
            <img src={PlayIcon} alt="Play Video" className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Appointment Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-6 relative max-h-[90vh] overflow-y-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
              >
                ×
              </button>
              <Appointment />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
