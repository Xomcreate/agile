import React from 'react';
import { motion } from 'framer-motion';
import testimonialBg from '../assets/client.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const zoomIn = {
  hidden: { scale: 1 },
  visible: {
    scale: 1.02,
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

function TestA() {
  return (
    <div className="grid h-[80vh] w-full">
      <motion.div
        variants={zoomIn}
        initial="hidden"
        animate="visible"
        className="mx-[20px] md:mx-[100px] my-[10px] grid rounded-3xl bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${testimonialBg})` }}
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative z-10 w-full h-full rounded-3xl flex items-center justify-center px-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="bg-black/50 p-5 md:p-6 rounded-2xl max-w-3xl w-full"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              What{' '}
              <span className="border-b-[2px] border-purple-600 leading-tight">
                Clients Say
              </span>
            </h1>

            <p className="text-xs md:text-base text-white max-w-2xl mb-3">
              “Working with Agile360 transformed our operations. Their consulting services are second to none — strategic, responsive, and always results-driven.”
            </p>

            <p className="text-white font-medium text-sm md:text-base">
              — Mercy Mattew, CEO of Agile360
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default TestA;
