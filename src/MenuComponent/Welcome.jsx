import React from 'react';
import { motion } from 'framer-motion';

function Welcome() {
  return (
    <div className="w-full h-[70vh] bg-gradient-to-r from-[#af08af] to-purple-800 text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          👋 Welcome to Your Admin Dashboard
        </h1>
        <p className="text-md md:text-lg text-white/90">
          Manage your blog posts, upload latest works, and respond to contact inquiries —
          all in one place. Take control and keep your HR consulting site up-to-date.
        </p>
      </motion.div>
    </div>
  );
}

export default Welcome;
