import React, { useState } from 'react';

function AdminLogin({ onSuccess }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      return setError('All fields are required');
    }

    try {
      const res = await fetch('http://localhost:5000/api/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');

      localStorage.setItem('adminToken', data.token);

      // ✅ Use callback to let Header handle redirect
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-2">
      <h2 className="text-2xl font-bold text-center text-[purple]">Admin Login</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="w-full p-3 border rounded"
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-3 border rounded"
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button type="submit" className="w-full bg-[purple] text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
