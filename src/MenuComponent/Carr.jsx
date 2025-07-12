import React, { useState } from 'react';

function Carr() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    type: 'Full-time',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const res = await fetch('https://agibackend.onrender.com/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Upload failed');

      setMessage('✅ Career opportunity posted successfully!');
      setFormData({ title: '', description: '', location: '', type: 'Full-time' });
    } catch (error) {
      console.error(error);
      setMessage('❌ Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-16 md:px-16 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Post a Career Opportunity</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., Frontend Developer"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Enter job responsibilities and requirements"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="e.g., Remote, Lagos"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Job Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition"
          >
            {loading ? 'Posting...' : 'Post Job'}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm text-center text-green-600 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
}

export default Carr;
