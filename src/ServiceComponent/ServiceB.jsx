import React from 'react';

const services = [
  {
    title: "HR Consultancy",
    desc: "We offer a comprehensive range of HR services that can help any organization to tap into and unlock the value of their human capital.",
  },
  {
    title: "Compliance Audit",
    desc: "Our thorough approach ensures your organization meets all regulatory requirements and operates within the required legal frameworks.",
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

// Combine all descriptions into one readable paragraph
const longWriteup = services.map(s => s.desc).join(' ');

function ServiceB() {
  return (
    <div className="w-full">
      <div className="bg-white w-full py-12 px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900">
            <span className="border-b-2 border-[#af08af] pb-1">Services</span> We Offer
          </h1>
        </div>

        {/* Combined Paragraph */}
        <div className="text-gray-700 text-sm sm:text-base md:text-base font-normal leading-relaxed max-w-5xl mx-auto md:mx-0 text-justify">
          {longWriteup}
        </div>
      </div>
    </div>
  );
}

export default ServiceB;
