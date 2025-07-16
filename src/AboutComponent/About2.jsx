import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaSmile, FaStar } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function About2() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    setStartCount(inView);
  }, [inView]);

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-10">
      <div
        ref={ref}
        className="bg-[purple] rounded-3xl p-8 md:p-12 grid grid-rows-[auto,auto,1fr] gap-6 text-white max-w-[95rem] mx-auto min-h-[380px]"
      >
        {/* Header and Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-xl md:text-3xl font-extrabold leading-tight">
            <p>Get The Latest Achievement</p>
            <p>for HR Consult</p>
          </div>
          <a href="/contact">
            <button className="bg-white text-purple-700 font-bold py-3 px-6 rounded-full shadow-md hover:bg-purple-100 transition">
              <u>Get</u> Started Now
            </button>
          </a>
        </div>

        {/* Divider Line */}
        <hr className="w-[80%] border-t-2 border-white/50 mx-auto" />

        {/* Stats Counters */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-around items-center gap-8 text-center">
          {[
            {
              icon: <FaCheckCircle className="text-4xl" />,
              end: 12000,
              label: 'Projects Completed',
            },
            {
              icon: <FaSmile className="text-4xl" />,
              end: 950,
              label: 'Satisfied Active Customers',
            },
            {
              icon: <FaStar className="text-4xl" />,
              end: 4.7,
              label: 'Average Client Ratings',
              decimals: 1,
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {item.icon}
              <div>
                <p className="text-3xl font-bold">
                  {startCount ? (
                    <CountUp
                      end={item.end}
                      duration={2.5}
                      separator=","
                      decimals={item.decimals}
                    />
                  ) : (
                    item.decimals ? '0.0' : '0'
                  )}
                  {!item.decimals && '+'}
                </p>
                <p className="text-base">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
