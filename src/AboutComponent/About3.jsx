import React from 'react';
import { motion } from 'framer-motion';
import api from '../assets/pic2.jpeg';
import call from '../assets/ceo.jpeg';
import girl from '../assets/pic1.jpeg';

function About3() {
  return (
    <div className="bg-white min-h-[100vh] w-full px-4 md:px-20 py-10">
      {/* Header Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-[purple] uppercase tracking-wide">Meet Our Team</p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#af08af] leading-tight mt-2">
          We’ve Active & Dedicated Members <br />
          for Helping the Clients
        </p>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Globally engage cross-media leadership skills before cross-media innovation.
          Forward-develop standardized platforms without robust solutions.
        </p>
      </motion.div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white rounded-xl overflow-hidden shadow-md"
        >
          <div className="h-80 w-full">
            <img src={api} alt="Jane Doe" className="w-full h-full object-cover" />
          </div>
          <div className="text-center py-4">
            <h3 className="text-xl font-bold text-[#af08af]">Mattew Iriele</h3>
            <p className="text-sm text-gray-600">Head Of Operation</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white rounded-xl overflow-hidden shadow-md"
        >
          <div className="h-80 w-full">
            <img src={call} alt="Michael Smith" className="w-full h-full object-cover" />
          </div>
          <div className="text-center py-4">
            <h3 className="text-xl font-bold text-[#af08af]">Mercy Mattew</h3>
            <p className="text-sm text-gray-600">Chief Executive of Operation/Project Leader</p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-white rounded-xl overflow-hidden shadow-md"
        >
          <div className="h-80 w-full">
            <img src={girl} alt="Lisa Kim" className="w-full h-full object-cover" />
          </div>
          <div className="text-center py-4">
            <h3 className="text-xl font-bold text-[#af08af]">Stella Egwu</h3>
            <p className="text-sm text-gray-600">Complaince Case-Worker</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About3;
