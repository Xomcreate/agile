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
              Pricing Plan
            </h2>

            <p className="text-sm md:text-base font-medium leading-snug">
              Pricing the Comfortable <br />
              Pricing Plans for your <br />
              Consultant Service
            </p>

            <div className="space-y-2 text-xs md:text-sm text-white/90">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaCheckCircle className="text-yellow-300" />
                Transparent, flexible pricing to support your growth.
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaCheckCircle className="text-yellow-300" />
                Choose what fits best for your organization.
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaUserTie className="text-yellow-300" />
                Need a custom solution? Let’s talk strategy!
              </p>
            </div>
          </div>

          {/* 🟣 Right Side: Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-[#af08af] mt-10"
            >
              <h4 className="text-base font-semibold mb-2">Starter Plan</h4>
              <p className="text-xs mb-3">
                Perfect for individuals and small teams just starting out.
              </p>
              <div className="text-xl font-bold mb-3">
                $49<span className="text-xs text-gray-600">/mo</span>
              </div>
              <ul className="text-xs text-gray-700 space-y-1 mb-4">
                <li>✓ Basic HR Support</li>
                <li>✓ Up to 5 Users</li>
                <li>✓ Email Assistance</li>
                <li>✓ Monthly Reports</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-[#af08af] text-white py-2 rounded-lg hover:bg-purple-800 transition duration-300 text-sm">
                  Get Started
                </button>
              </Link>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-[#af08af]"
            >
              <h4 className="text-base font-semibold mb-2">Premium Plan</h4>
              <p className="text-xs mb-3">
                Ideal for growing businesses needing full HR support and scalability.
              </p>
              <div className="text-xl font-bold mb-3">
                $99<span className="text-xs text-gray-600">/mo</span>
              </div>
              <ul className="text-xs text-gray-700 space-y-1 mb-4">
                <li>✓ Full HR Services</li>
                <li>✓ Unlimited Users</li>
                <li>✓ Priority Support</li>
                <li>✓ Weekly Reports</li>
                <li>✓ Dedicated Consultant</li>
              </ul>
              <Link to="/contact">
                <button className="w-full bg-[#af08af] text-white py-2 rounded-lg hover:bg-purple-800 transition duration-300 text-sm">
                  Choose Plan
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
