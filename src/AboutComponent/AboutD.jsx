import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/ball.jpg'; // First image
import img2 from '../assets/gee.jpg'; // Second image

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

function AboutD() {
  return (
    <div className="bg-[#e9f8f5] w-full py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* ---------- IMAGE COLUMN ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          className="grid grid-cols-2 gap-4 justify-center md:justify-start"
        >
          <img
            src={img1}
            alt="Top Left"
            className="w-full h-56 md:h-64 object-cover rounded-xl shadow-lg"
          />
          <img
            src={img2}
            alt="Bottom Right"
            className="w-full h-56 md:h-64 object-cover rounded-xl shadow-lg self-end"
          />
        </motion.div>

        {/* ---------- TEXT COLUMN ---------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          className="text-center md:text-left"
        >
          <div className="relative inline-block mb-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 leading-tight z-10 relative">
              We Provide Creative Solutions
            </h2>
            <span className="absolute bottom-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-24 h-1 bg-purple-600 rounded-full"></span>
          </div>

          <p className="text-gray-700 mb-6 max-w-xl mx-auto md:mx-0 text-[15px] md:text-base leading-relaxed">
            Agile360 PMC delivers world-class HR strategies, compliance audits, and consulting services.
            We help you grow and scale your business while staying aligned with modern HR standards.
          </p>

          {/* Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              'Professional Team Members',
              'Innovative Business Solutions',
              'Lifetime Free Services',
              'Affordable Pricing Plans',
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.04 }}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md transition-transform"
              >
                <div className="text-purple-600 text-xl">✔️</div>
                <span className="font-medium text-gray-700">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutD;
