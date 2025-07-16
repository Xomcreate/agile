import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/boss.jpg';

export default function HomeC() {
  return (
    <div className="relative w-full bg-white py-12 px-4 md:px-10 lg:px-20 overflow-x-hidden">
      <div className="bg-[#af08af] rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-8 md:p-12 max-w-[95rem] mx-auto min-h-[380px]">
        
        {/* ✅ Image with animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          className="flex items-center justify-center"
        >
          <img
            src={img}
            alt="Compliance"
            className="w-[300px] h-[300px] md:w-[360px] md:h-[360px] object-cover rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* ✅ Text with animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-white"
        >
          {/* Title and Rating */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
            <div className="text-yellow-300 text-xl mt-2">⭐⭐⭐⭐⭐</div>
          </div>

          {/* Mission Text (tight spacing, no paragraph gaps) */}
          <p className="text-sm md:text-base leading-relaxed text-justify mt-4">
            "Agile360 PMC is a project management consulting service specializing in Human Resources consulting practice, HR Outsourcing and Sponsor Compliance audits. We work in partnership with our clients to develop and implement strategic and tactical solutions across all aspects of Human Resources Management and Sponsor Compliance. We partner with all shapes and sizes of organizations from start-ups to global corporates; we are agile and creative in how we deliver a great client experience."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
