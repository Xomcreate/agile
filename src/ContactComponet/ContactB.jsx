import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaChevronDown,
  FaPen,
  FaThumbsUp
} from 'react-icons/fa';
import { motion } from 'framer-motion';

function ContactB() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* ─── LEFT PANEL ───────────────────────────── */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-sm font-medium text-[#af08af] uppercase">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[purple] leading-tight">
            Trusted By the Genius<br />People with Agile
          </h2>
          <p className="text-gray-600">
            Globally engage cross‑media leadership skills before cross‑media innovation forward.
          </p>
          <p className="text-gray-600">
            Develop standardized platforms without robust.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl">
            {/* Phone Card */}
            <motion.div
              className="flex items-center gap-4 pb-6 border-b border-dashed border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="bg-white p-3 rounded-full shadow">
                <FaPhoneAlt className="text-[black] text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Call us Anytime</p>
                <p className="mt-1 font-semibold text-lg">(+44) 7770627646</p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              className="flex items-center gap-4 py-6 border-b border-dashed border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="bg-white p-3 rounded-full shadow">
                <FaEnvelope className="text-[black] text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600">E‑Mail us</p>
                <p className="mt-1 font-semibold text-lg">info@agile360pmc.com</p>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="flex items-start gap-4 pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="bg-white p-3 rounded-full shadow">
                <FaMapMarkerAlt className="text-[black] text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Our Locations</p>
                <p className="mt-1 font-semibold">116a Brandshawgate Manchester, Leigh, WN7 4NP,</p>
                <p className="text-gray-600">United Kingdom</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ─── RIGHT PANEL ───────────────────────────── */}
        <motion.div
          className="w-full md:w-1/2 bg-white shadow-lg p-8 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-sm font-medium text-[#af08af] uppercase">Contact Us</p>
          <h3 className="relative text-2xl font-bold text-[purple] mb-8">
            Get In Touch With Agile
            <span className="absolute left-0 -bottom-1 w-20 h-1 bg-[#af08af] rounded-full"></span>
          </h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Name*"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#af08af]"
                />
                <FaUser className="absolute top-3 right-3 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter E‑Mail*"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#af08af]"
                />
                <FaEnvelope className="absolute top-3 right-3 text-gray-400" />
              </div>
              <div className="relative">
                <select className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#af08af] text-gray-500">
                  <option>Which Service</option>
                  <option>Consulting</option>
                  <option>Support</option>
                </select>
                <FaChevronDown className="absolute top-3 right-3 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Enter Number*"
                  className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#af08af]"
                />
                <FaPhoneAlt className="absolute top-3 right-3 text-gray-400" />
              </div>
            </div>

            <div className="relative">
              <textarea
                rows="4"
                placeholder="Write a short message..."
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#af08af] resize-none"
              />
              <FaPen className="absolute top-3 right-3 text-gray-400" />
            </div>

            <div className="flex items-center text-sm text-gray-600">
              <input id="terms" type="checkbox" className="h-4 w-4 accent-[#af08af]" />
              <label htmlFor="terms" className="ml-2">I accept all terms & conditions.</label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#af08af] hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full shadow-md transition-shadow"
              >
                <FaThumbsUp /> Submit Now
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactB;
