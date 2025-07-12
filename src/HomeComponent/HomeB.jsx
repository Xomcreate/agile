import React from 'react';
import { motion } from 'framer-motion';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';

const logos = [c1, c2, c3, c4];

export default function HomeB() {
  return (
    <div className="w-screen overflow-hidden">
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-16">
        <div className="bg-white rounded-3xl px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-[#af08af] text-center text-sm md:text-lg font-bold mb-6"
          >
            Worldwide 1,500+ Trusted Clients with Agile
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: false, amount: 0.2 }}
                className="bg-white flex items-center justify-center rounded shadow-md p-4 h-[12vh] md:h-[14vh] lg:h-[16vh]"
              >
                <img src={logo} alt={`Company ${i + 1}`} className="max-h-full max-w-full object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
