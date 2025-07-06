import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/boss.jpg'; // Replace with your actual image path

function HomeC() {
  return (
    <div className="bg-white py-10 px-4 md:px-8 lg:px-16">
      <div className="bg-[#af08af] rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-6 md:p-10">
        
        {/* ✅ Animated Image */}
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

        {/* ✅ Animated Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-white space-y-4"
        >
          {/* Centered Title & Stars */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
            <div className="text-yellow-300 text-xl mt-2">⭐⭐⭐⭐⭐</div>
          </div>

          <p className="text-sm md:text-base leading-relaxed text-justify">
            "Agile360 PMC is a project management consulting service specializing in Human Resources consulting practice, HR Outsourcing and Sponsor Compliance audits. We work in partnership with our clients to develop and implement strategic and tactical solutions across all aspects of Human Resources Management and Sponsor Compliance. We partner with all shapes and sizes of organizations from start-ups to global corporates; we are agile and creative in how we deliver a great client experience."
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeC;
