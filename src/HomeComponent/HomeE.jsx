import React from 'react';
import { FaCheckCircle, FaUserTie, FaTags } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function HomeE() {
  return (
    <div className="w-full py-10 px-2 text-white font-sans">
      <div className="rounded-3xl py-10 px-6 md:px-12 mx-4 md:mx-16 bg-[#af08af]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* 🔵 Left Side */}
          <div className="space-y-5 text-center md:text-left">
            <h2 className="text-lg md:text-2xl font-bold uppercase flex items-center justify-center md:justify-start gap-2">
              <FaTags className="text-yellow-300" />
              Sponsorship & Pricing
            </h2>

            <p className="text-sm md:text-base font-medium leading-snug">
              Flexible support through <br />
              sponsorship or tailored <br />
              service agreements.
            </p>

            <div className="space-y-2 text-xs md:text-sm text-white/90">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaCheckCircle className="text-yellow-300" />
                No fixed cost — pricing is based on your needs and sponsorship eligibility.
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaCheckCircle className="text-yellow-300" />
                We work with NGOs, donors, and direct clients.
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaUserTie className="text-yellow-300" />
                Let’s discuss a plan that works for your structure.
              </p>
            </div>
          </div>

          {/* 🟣 Right Side: Sponsorship Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Sponsored Support */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-[#af08af] mt-10"
            >
              <h4 className="text-base font-semibold mb-2">Sponsored Support</h4>
              <p className="text-xs mb-3">
                Access support through donor funding or NGO partnerships.
              </p>
              <ul className="text-xs text-gray-700 space-y-1 mb-4">
                <li>✓ Full/Partial Sponsorship</li>
                <li>✓ Eligibility-Based Access</li>
                <li>✓ Flexible Timeframes</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-[#af08af] text-white py-2 rounded-lg hover:bg-purple-800 transition duration-300 text-sm">
                  Check Eligibility
                </button>
              </Link>
            </motion.div>

            {/* Custom Quote */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-[#af08af]"
            >
              <h4 className="text-base font-semibold mb-2">Custom Plan</h4>
              <p className="text-xs mb-3">
                We'll assess your needs and provide a personalized plan & quote.
              </p>
              <ul className="text-xs text-gray-700 space-y-1 mb-4">
                <li>✓ Tailored HR Services</li>
                <li>✓ Individual or Business Options</li>
                <li>✓ Strategic Support</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-[#af08af] text-white py-2 rounded-lg hover:bg-purple-800 transition duration-300 text-sm">
                  Request a Quote
                </button>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomeE;
