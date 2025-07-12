import React from 'react';
import { motion } from 'framer-motion';
import api   from '../assets/pic2.jpeg';
import call  from '../assets/ceo.jpeg';
import girl  from '../assets/pic1.jpeg';

export default function About3() {
  return (
    <div className="w-screen overflow-hidden">
      <div className="bg-white min-h-[100vh] py-10 px-4 md:px-20">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <p className="text-xs uppercase tracking-wide text-purple-600">Meet Our Team</p>
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-[#af08af]">Dedicated Members Helping Our Clients</p>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">We bring expert solutions and committed professionals…</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[{img: api,  name:'Mathew Iriele', role:'Head Of Operation'},
            {img: call, name:'Mercy Mathew', role:'CEO. / Project Lead'},
            {img: girl, name:'Stella Egwu', role:'Compliance Case-Worker'}].map((p,i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:0.7,delay:i*0.1 }} className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-72 w-full">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover"/>
              </div>
              <div className="py-4 text-center">
                <h3 className="text-lg font-semibold text-[#af08af]">{p.name}</h3>
                <p className="text-xs text-gray-600">{p.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
