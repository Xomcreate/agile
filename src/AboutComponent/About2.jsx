import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaSmile, FaStar } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function About2() {
  const { ref, inView } = useInView({ threshold: 0.3 }); // trigger every time
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    setStartCount(inView); // true when visible, false when not
  }, [inView]);

  return (
    <div className="min-h-[60vh] w-full px-4 md:px-[40px]">
      <div className="bg-[purple] grid grid-rows-6 rounded-3xl w-full gap-4 h-full p-6 text-white">
        {/* Heading and Button */}
        <div className="row-span-2 flex flex-col md:flex-row items-center justify-between px-2 md:px-6 gap-2 md:gap-6 text-center md:text-left">
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold space-y-1 leading-tight">
            <p>Get The Latest Achievement</p>
            <p>for HR Consult</p>
          </div>

          <a href="/get-started">
            <button className="bg-white text-purple-700 font-bold py-3 px-6 rounded-full shadow-md hover:bg-purple-100 transition-all duration-200">
              <u>Get</u> Started Now
            </button>
          </a>
        </div>

        {/* HR Line */}
        <div className="row-span-1 flex items-center justify-center">
          <hr className="w-[80%] border-t-2 border-white/50" />
        </div>

        {/* Animated Numbers Section */}
        <div
          ref={ref}
          className="row-span-3 flex flex-col sm:flex-row flex-wrap justify-around items-center text-white gap-8 sm:gap-6 mt-2 text-center"
        >
          {/* 1. Projects */}
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-white text-3xl" />
            <div>
              <p className="text-3xl font-bold">
                {startCount ? <CountUp end={12000} duration={2.5} separator="," /> : '0'}+
              </p>
              <p className="text-base">Projects Completed</p>
            </div>
          </div>

          {/* 2. Customers */}
          <div className="flex items-center gap-3">
            <FaSmile className="text-white text-3xl" />
            <div>
              <p className="text-3xl font-bold">
                {startCount ? <CountUp end={950} duration={2.5} separator="," /> : '0'}+
              </p>
              <p className="text-base">Satisfied Active Customers</p>
            </div>
          </div>

          {/* 3. Ratings */}
          <div className="flex items-center gap-3">
            <FaStar className="text-white text-3xl" />
            <div>
              <p className="text-3xl font-bold">
                {startCount ? <CountUp end={4.7} duration={2.5} decimals={1} /> : '0.0'}★
              </p>
              <p className="text-base">Average Client Ratings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
