import React, { useState } from 'react';

function AdminLogin() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.password) {
      setError('Both fields are required');
      return;
    }

    // TODO: Authentication logic goes here
    console.log('Logging in with:', formData);
    setError('');
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[purple]">
         Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Username Field */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-600 text-sm font-medium">{error}</div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[purple] text-white py-3 rounded-lg hover:bg-purple-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
