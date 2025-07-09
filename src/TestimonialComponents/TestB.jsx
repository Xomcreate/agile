import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Helena Villagra Grant',
    role: 'Manager, FLO Fitness Studio – Abu Dhabi',
    text: `We have been working with AGILE360 PMC as our retained outsourced HR representative, consultant, and business partner for quite some time, and their contribution has been invaluable. Their guidance throughout our HR processes has been characterized by exceptional diligence, in-depth knowledge, and expertise. Beyond being an integral part of our team and business, they have consistently demonstrated their commitment by making themselves available—even beyond standard working hours—to ensure timely resolution of any issues. AGILE360 PMC's proactive and hands-on approach has been key to our success, and we truly value their partnership.`,
  },
  {
    name: 'Sophie Zwizwai',
    role: 'Director - Fair Tree Lodge - UK',
    text: `We found ourselves in a difficult situation after the solicitor we had entrusted with our Sponsor compliance matters took our money and stopped responding to our calls. Fortunately, a friend who had faced a similar issue referred us to AGILE360 PMC... Engaging AGILE360 PMC was one of the best decisions we’ve made. Retaining their services on a monthly basis has provided us with ongoing, invaluable HR and compliance support.`,
  },
  {
    name: 'Chinelo Menkiti',
    role: 'Responsible Individual - New Horizon Lodge Limited - UK',
    text: `As a care provider new to sponsoring workers, I experienced countless sleepless nights... Thanks to AGILE360 PMC, I now sleep peacefully at night, reassured by the fact that our operations are fully compliant.`,
  },
  {
    name: 'Trudy Williams',
    role: 'Responsible Individual - Gwernllwyn Care Home - UK',
    text: `A massive thank you for your consistent dedication, your expertise, reliability, and the way you always give your all (and more)... we got cleared. Because of you, “We are not liable for a civil penalty under section 15 of the Immigration, Asylum and Nationality Act 2006.”`,
  },
  {
    name: 'Keith Thomas',
    role: 'CEO – Marina United - UK',
    text: `Mercy, you are indeed a STAR!... I was looking at a penalty of up to £20,000 as payout and didn’t know how to navigate. Your professionalism in the way you handled consultation meetings, interventions, the investigations, gathering evidence... Since having you as my retained HR Consultant and outsourcing all HR matters to you has made life easy for me.`,
  },
  {
    name: 'Lyndsey Ferrier',
    role: 'Managing Director and Authorising Officer - Old Vicarage Nursing Home - UK',
    text: `Had no clue what I was doing as a Sponsor, but I know I needed my sponsored staff else my care home will go under... The best decision I ever made was having Mercy as my retained compliance consultant and HR Advisor.`,
  },
];

// Animation config for each card
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2, // staggered delay per card
    },
  }),
};

function TestB() {
  return (
    <div className="px-4 md:px-20 py-16 bg-white">
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What Our Clients Say
      </motion.h2>

      <motion.p
        className="text-center text-gray-500 mb-10 text-sm md:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Real stories from business owners, managers, and decision-makers across the UK and beyond.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={index}
          >
            <FaQuoteLeft className="text-purple-600 text-xl mb-3" />
            <p className="text-gray-700 text-sm leading-relaxed mb-5">“{item.text}”</p>
            <div className="font-semibold text-sm text-gray-900">{item.name}</div>
            <div className="text-xs text-gray-600">{item.role}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TestB;
