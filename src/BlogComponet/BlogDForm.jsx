// BlogDForm.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function BlogDForm({ addReview }) {
  const [form, setForm] = useState({ name: '', rating: 0, comment: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRating = (value) => {
    setForm((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.comment || !form.rating) return alert("All fields are required");
    addReview({
      ...form,
      id: Date.now(),
      date: new Date().toLocaleDateString()
    });
    setForm({ name: '', rating: 0, comment: '' });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-semibold text-purple-700 text-center mb-6">Leave a Review</h3>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full mb-4 px-4 py-3 border rounded-md border-gray-300 focus:ring-purple-600 focus:outline-none"
        required
      />

      <div className="flex items-center gap-2 mb-4">
        <span className="font-medium text-gray-700">Rating:</span>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => handleRating(num)}
            className={`text-yellow-400 ${form.rating >= num ? 'fill-current' : 'stroke-current'}`}
          >
            <svg
              className="w-6 h-6"
              fill={form.rating >= num ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
            </svg>
          </button>
        ))}
      </div>

      <textarea
        name="comment"
        value={form.comment}
        onChange={handleChange}
        placeholder="Your Review"
        rows={4}
        className="w-full mb-6 px-4 py-3 border rounded-md border-gray-300 focus:ring-purple-600 focus:outline-none"
        required
      />

      <button
        type="submit"
        className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-md transition shadow-md"
      >
        Submit Review
      </button>
    </motion.form>
  );
}

export default BlogDForm;
