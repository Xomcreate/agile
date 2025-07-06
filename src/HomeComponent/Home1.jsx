import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home1() {
  const services = [
    {
      title: "HR Consultancy",
      desc: "We offer a comprehensive range of HR services that can help any organization to tap into and unlock the value of their human capital.",
    },
    {
      title: "Compliance Audit",
      desc: "Our thorough approach ensures your ​organization meets all regulatory ​requirements and operates within the ​required legal frameworks.",
    },
    {
      title: "Solution Design and Implementation",
      desc: "We design bespoke solutions, creating forms and templates specifically tailored to your business and organizational needs.",
    },
    {
      title: "HR Outsourcing",
      desc: "A cost-effective way of ensuring your HR needs are met and allows you to free up resources to prioritize core areas.",
    },
    {
      title: "Developing HR Strategies",
      desc: "Engaging people to achieve corporate goals, create an attractive work environment and a strong organizational culture.",
    },
    {
      title: "Developing HR Policy & Procedure",
      desc: "HR policy provides the necessary framework to manage people effectively and set the rules for daily operations in any organization.",
    },
    {
      title: "Manpower Planning, Recruitment & Retention",
      desc: "Manpower planning, recruitment and retention are critical business considerations for building a skilled workforce.",
    },
    {
      title: "Organizational Design and Structure",
      desc: "Effective organizational design integrates people, structures, processes, and systems while considering the external environment.",
    },
  ];

  return (
    <div className="w-full py-14 px-4 md:px-16">
      <div className="bg-[#e9f8f5] rounded-3xl py-10 px-6 md:px-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#af08af] tracking-wide">
            Services
          </h2>
          <p className="mt-4 text-[15px] md:text-lg max-w-2xl mx-auto text-gray-700 leading-relaxed font-medium">
            Unlocking Your Business's Potential with <br />
            the Best Innovate Consulting active and <br />
            Dedicated Customers
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-white text-center md:text-left p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 hover:scale-[1.03]"
            >
              <h4 className="font-bold text-lg mb-3 text-[#af08af]">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 font-medium tracking-wide">
                {item.desc}
              </p>
              <Link
                to="/service"
                className="text-sm text-[#af08af] font-semibold hover:underline"
              >
                Read more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home1;
