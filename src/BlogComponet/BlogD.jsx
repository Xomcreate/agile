// src/components/BlogD.jsx
import React, { useState } from 'react';

export default function BlogD() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

    try {
      const res = await fetch('https://agibackend.onrender.com/api/reviews', {
        method: 'POST',
        mode: 'cors',                         // ← enable CORS mode
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, rating }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || data.error || 'Submission failed');

      setStatus('✅ Review submitted!');
      setForm({ name: '', email: '', message: '' });
      setRating(0);
    } catch (err) {
      setStatus('❌ ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-purple-100 rounded-2xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-5 text-center">
            📝 Leave a Review or Comment
          </h2>

          {status && <p className="text-sm text-center mb-4 text-gray-700">{status}</p>}

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-2 text-sm border rounded-md"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-2 text-sm border rounded-md"
            />
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Rating:</span>
              {[1, 2, 3, 4, 5].map(star => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-lg cursor-pointer ${
                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your comment..."
              required
              rows="4"
              className="p-2 text-sm border rounded-md resize-none"
            />
            <button
              type="submit"
              className="bg-purple-700 text-white py-2 text-sm rounded-md hover:bg-purple-800 transition"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>
      </div>
    </div>
);
}
