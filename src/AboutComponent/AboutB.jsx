import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imgA from '../assets/pple.jpg';
import imgB from '../assets/care.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: 'easeOut' }
  }
};

export default function AboutB() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-4 md:px-10 lg:px-16">
        
        {/* Image Stack */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-full h-[270px] md:h-[320px] flex items-center justify-center"
        >
          <div className="absolute top-0 left-[15%] w-44 h-44 md:w-52 md:h-52 z-10 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
            <img src={imgA} alt="Top Left" className="w-full h-full object-cover" />
          </div>

          <div className="absolute bottom-0 right-[15%] w-44 h-44 md:w-52 md:h-52 z-20 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
            <img src={imgB} alt="Bottom Right" className="w-full h-full object-cover" />
            <div className="absolute bg-purple-600 rounded-full -top-4 -right-4 w-14 h-14 md:w-16 md:h-16 z-30 border-4 border-white shadow-md animate-bounce" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center md:text-left px-4 md:px-0"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-purple-800 mb-5 leading-snug">
            Empowering Teams with <br className="hidden md:block" /> HR & Compliance Excellence
          </h2>

          <p className="text-gray-700 mb-6 max-w-lg leading-relaxed text-[16px] md:text-[17px]">
            Agile360 PMC helps businesses streamline operations, comply with regulations,
            and build winning cultures. Our consultants bring real-world insight and custom
            HR strategies that drive productivity and success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-[15px] md:text-base">
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-800 hover:text-purple-700 transition cursor-pointer">
              ✅ Strategic Workforce Planning
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-800 hover:text-purple-700 transition cursor-pointer">
              🔍 Compliance & Risk Advisory
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 flex-wrap">
            <Link to="/contact">
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-sm md:text-base">
                🚀 Get Started Now
              </button>
            </Link>

            <Link to="/service" className="text-purple-700 font-semibold hover:underline flex items-center gap-1 text-sm md:text-base">
              View Services <span className="text-xl">↗</span>
            </Link>

            <Link to="/test" className="text-purple-700 font-semibold hover:underline flex items-center gap-1 text-sm md:text-base">
              Testimonials <span className="text-lg">💬</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
