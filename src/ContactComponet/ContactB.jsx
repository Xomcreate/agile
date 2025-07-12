import React, { useState } from 'react';
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaUser, FaChevronDown, FaPen, FaThumbsUp
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactB() {
  const [form, setForm] = useState({
    name: '', email: '', subject: '', phone: '', message: '', terms: false
  });
  const [status, setStatus] = useState({
    loading: false, success: null, error: null
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch('https://agibackend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error('Unexpected server response. Please try again.');
      }

      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setStatus({ loading: false, success: data.message, error: null });
      setForm({ name: '', email: '', subject: '', phone: '', message: '', terms: false });
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message });
    }
  };

  return (
    <div className="w-screen overflow-hidden bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

        {/* LEFT PANEL */}
        <motion.div
          className="w-full md:w-1/2 space-y-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-xs font-medium text-[#af08af] uppercase">Get In Touch</p>
          <h2 className="text-xl md:text-2xl font-bold text-[purple] leading-snug">
            Let's help you redefine<br />
            excellence in business
          </h2>
          <p className="text-sm text-gray-600">
            With Our Tailored Made Implementable Solutions.
          </p>

          <div className="bg-gray-50 p-5 rounded-xl space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-dashed border-gray-300">
              <div className="bg-white p-2 rounded-full shadow">
                <FaPhoneAlt className="text-black" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Call us Anytime</p>
                <p className="mt-1 font-semibold text-sm">(+44) 7770627646</p>
              </div>
            </div>
            <div className="flex items-center gap-3 py-4 border-b border-dashed border-gray-300">
              <div className="bg-white p-2 rounded-full shadow">
                <FaEnvelope className="text-black" />
              </div>
              <div>
                <p className="text-xs text-gray-600">E‑Mail us</p>
                <p className="mt-1 font-semibold text-sm">Contact@agile360-pmc.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pt-4">
              <div className="bg-white p-2 rounded-full shadow">
                <FaMapMarkerAlt className="text-black" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Our Locations</p>
                <p className="mt-1 font-semibold text-sm">
                  116a Brandshawgate Manchester, Leigh, WN7 4NP
                </p>
                <p className="text-xs text-gray-600">United Kingdom</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          className="w-full md:w-1/2 bg-white shadow-lg p-6 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-xs font-medium text-[#af08af] uppercase">Contact Us</p>
          <h3 className="relative text-lg font-bold text-[purple] mb-6">
            Get In Touch With Agile360
            <span className="absolute left-0 -bottom-1 w-16 h-1 bg-[#af08af] rounded-full" />
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Name*"
                  required
                  className="w-full text-sm border px-3 py-2 rounded-lg focus:ring-1 focus:ring-[#af08af]"
                />
                <FaUser className="absolute top-2.5 right-3 text-gray-400 text-sm" />
              </div>
              <div className="relative">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter E‑Mail*"
                  required
                  className="w-full text-sm border px-3 py-2 rounded-lg focus:ring-1 focus:ring-[#af08af]"
                />
                <FaEnvelope className="absolute top-2.5 right-3 text-gray-400 text-sm" />
              </div>
              <div className="relative">
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full text-sm text-gray-600 border px-3 py-2 rounded-lg focus:ring-1 focus:ring-[#af08af]"
                >
                  <option value="">Which Service</option>
                  <option value="consulting">HR Consulting</option>
                  <option value="design">Solution Design & Implementation</option>
                  <option value="outsourcing">HR Outsourcing</option>
                  <option value="strategies">Developing HR Strategies</option>
                  <option value="policies">Developing HR Policies</option>
                  <option value="planning">Manpower Planning, Recruitment & Planning</option>
                  <option value="structure">Organisational Design & Structure</option>
                </select>
                <FaChevronDown className="absolute top-2.5 right-3 text-gray-400 text-sm" />
              </div>
              <div className="relative">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Enter Number"
                  className="w-full text-sm border px-3 py-2 rounded-lg focus:ring-1 focus:ring-[#af08af]"
                />
                <FaPhoneAlt className="absolute top-2.5 right-3 text-gray-400 text-sm" />
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write a short message..."
                required
                className="w-full text-sm border px-3 py-2 rounded-lg focus:ring-1 focus:ring-[#af08af] resize-none"
              />
              <FaPen className="absolute top-2.5 right-3 text-gray-400 text-sm" />
            </div>

            <div className="flex items-center text-xs text-gray-600">
              <input
                name="terms"
                type="checkbox"
                checked={form.terms}
                onChange={handleChange}
                required
                className="h-4 w-4 accent-[#af08af]"
              />
              <label htmlFor="terms" className="ml-2">
                I accept all terms & conditions.
              </label>
            </div>

            {status.error && <p className="text-red-500 text-xs">{status.error}</p>}
            {status.success && <p className="text-green-600 text-xs">{status.success}</p>}

            <div className="text-center">
              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex items-center gap-2 bg-[#af08af] hover:bg-purple-800 text-white text-sm font-semibold py-2 px-5 rounded-full shadow-md transition-shadow disabled:opacity-50"
              >
                <FaThumbsUp />
                {status.loading ? 'Sending…' : 'Submit Now'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
