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
              Custom Pricing Plans
            </h2>

            <p className="text-sm md:text-base font-medium leading-snug">
              We believe every organization is unique. That’s why our pricing is fully tailored to match your exact needs, goals, and scale.
            </p>

            <div className="space-y-2 text-xs md:text-sm text-white/90">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaCheckCircle className="text-yellow-300" />
                Transparent quotes – no hidden fees or fixed costs.
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaCheckCircle className="text-yellow-300" />
                Whether you're a startup, NGO, or corporation – we build around your structure.
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaUserTie className="text-yellow-300" />
                You tell us your vision, we’ll shape a plan that works for you.
              </p>
            </div>
          </div>

          {/* 🟣 Right Side: Custom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-[#af08af]"
          >
            <h4 className="text-base font-semibold mb-2">Request Your Custom Quote</h4>
            <p className="text-xs mb-3">
              Let’s assess your needs and build a personalized service plan just for you.
            </p>
            <ul className="text-xs text-gray-700 space-y-1 mb-4">
              <li>✓ Tailored HR or recruitment services</li>
              <li>✓ Pay for what you need, nothing more</li>
              <li>✓ One-time, monthly, or annual plans</li>
              <li>✓ Flexible for individuals or organizations</li>
            </ul>
            <p className="text-[11px] text-gray-500 mb-2 italic">
              * Quotes are customized based on project scope, timeframe, and service depth.
            </p>
            <Link to="/contact">
              <button className="w-full bg-[#af08af] text-white py-2 rounded-lg hover:bg-purple-800 transition duration-300 text-sm">
                Start Custom Quote
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default HomeE;
