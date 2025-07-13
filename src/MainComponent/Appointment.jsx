// src/components/Appointment.jsx
import React, { useState } from 'react';

export default function Appointment() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('https://agibackend.onrender.com/api/appointments', {
        method: 'POST',
        mode: 'cors',                        // ← enable CORS mode
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Booking failed');
      }

      setMessage('✅ Appointment booked successfully!');
      setForm({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: '',
      });
    } catch (err) {
      console.error('❌ Booking failed:', err.message);
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-h-[85vh] overflow-y-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-[purple] mb-4">
        Schedule an Appointment
      </h2>

      {message && (
        <p
          className={`text-center mb-4 ${
            message.startsWith('✅') ? 'text-green-600' : 'text-red-500'
          }`}
        >
          {message}
        </p>
      )}

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 px-1 sm:px-2"
        onSubmit={handleSubmit}
      >
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="p-2 border border-gray-300 rounded-lg"
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select a service</option>
          <option value="consulting">HR Consulting</option>
          <option value="design">Solution Design & Implementation</option>
          <option value="outsourcing">HR Outsourcing</option>
          <option value="strategies">Developing HR Strategies</option>
          <option value="policies">Developing HR Policies</option>
          <option value="planning">Manpower Planning, Recruitment & Planning</option>
          <option value="structure">Organisational Design & Structure</option>
        </select>

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          name="time"
          type="time"
          value={form.time}
          onChange={handleChange}
          required
          className="p-2 border border-gray-300 rounded-lg"
        />

        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="Additional Notes"
          rows="3"
          className="md:col-span-2 p-2 border border-gray-300 rounded-lg"
        />

        <button
          type="submit"
          className="md:col-span-2 w-full bg-[purple] text-white py-2 rounded-lg hover:bg-purple-700 transition-all text-sm"
          disabled={loading}
        >
          {loading ? 'Booking...' : 'Book Appointment'}
        </button>
      </form>
    </div>
  );
}
