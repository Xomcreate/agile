import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

function ServiceC() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const services = [
    {
      title: "HR Consultancy",
      desc: `We offer a comprehensive range of HR services to unlock the value of your human capital—tailored to your organization, workforce, and mission.

Our approach ensures alignment with business goals and employee engagement. Whether it's hiring, performance management, or workforce planning, our consultancy covers the entire employee lifecycle to drive business success.`,
    },
    {
      title: "Compliance Audit",
      desc: `Our thorough HR compliance audit evaluates how well your organization is adhering to employment laws and internal policies.

We identify compliance risks, highlight areas of improvement, and provide actionable recommendations to ensure legal adherence and minimize potential penalties.`,
    },
    {
      title: "Solution Design and Implementation",
      desc: `We create customized forms, templates, and HR process solutions that integrate seamlessly into your existing systems.

Our approach is hands-on, from discovery through design to implementation—ensuring the solutions are practical, scalable, and aligned with your unique business structure.`,
    },
    {
      title: "HR Outsourcing",
      desc: `Outsource your HR functions to reduce overhead and improve efficiency.

From employee relations, payroll administration, and leave management to full-service HR operations, we act as your HR department while you focus on strategic growth.`,
    },
    {
      title: "Developing HR Strategies",
      desc: `We help you create powerful HR strategies that drive productivity and align with your corporate objectives.

This includes workforce planning, performance management, employee engagement, training and development, and succession planning to build a future-ready organization.`,
    },
    {
      title: "Developing HR Policy & Procedure",
      desc: `Clear policies and procedures are critical for consistent and fair operations.

We assist in drafting, revising, and implementing HR policies to reflect best practices, legal requirements, and your organization’s culture—supporting leadership and empowering staff.`,
    },
    {
      title: "Manpower Planning, Recruitment & Retention",
      desc: `Our team helps you assess manpower needs, build recruitment pipelines, and implement strategies to attract and retain top talent.

We offer support for structured interviews, onboarding processes, and employee value propositions to reduce attrition and build workforce loyalty.`,
    },
    {
      title: "Organizational Design and Structure",
      desc: `The design and structure of your organization directly impact its performance.

Effective organizational design integrates people, structures, processes, and systems while considering the external environment. Whether you're preparing for growth or undergoing a restructure, it's crucial to maintain a focus on organizational design to ensure efficiency.

We have a proven track record in developing organizational design solutions tailored to our clients' unique operating environments. Our experienced team works across various industries, including government and the private sector.

We begin with a comprehensive analysis of your business to understand its strategic direction, culture, challenges, and processes. From this, we identify areas for improved performance and alignment, and then create detailed workflows, functional descriptors, and job descriptions to clarify accountability and responsibility at every level.`,
    },
  ];

  return (
    <div className="w-full py-14 px-4 md:px-16">
      <div className="bg-[#fdf1fc] rounded-3xl shadow-2xl py-10 px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[#af08af] tracking-wide">
            Services
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base max-w-2xl mx-auto text-gray-700 leading-relaxed font-normal">
            Discover the strategic services we offer to elevate your HR operations,  
            foster growth, and ensure long-term success.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {services.map((item, index) => {
            const isOpen = index === activeIndex;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full px-6 py-4 flex justify-between items-center text-left transition-colors duration-300 ${
                    isOpen ? "bg-gradient-to-r from-[#af08af]/10 to-[#af08af]/5" : "hover:bg-[#af08af]/10"
                  }`}
                >
                  <span className="text-base sm:text-lg font-semibold text-[#af08af]">
                    {item.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#af08af]"
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-gray-800 text-xs sm:text-sm md:text-[15px] font-normal leading-[1.7rem] whitespace-pre-wrap"
                    >
                      {item.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceC;
