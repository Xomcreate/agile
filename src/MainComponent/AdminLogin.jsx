// src/components/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin({ onSuccess }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError]     = useState('');
  const navigate               = useNavigate();

  const handleChange = e =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    if (!formData.username || !formData.password) {
      return setError('All fields are required');
    }

    try {
      const res = await fetch(
        'https://agibackend.onrender.com/api/admin-login',
        {
          method: 'POST',
          mode: 'cors',                         // ← explicitly enable CORS mode
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');

      localStorage.setItem('adminToken', data.token);

      if (onSuccess) onSuccess();
      else navigate('/admin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center text-purple-700">
        Admin Login
      </h2>
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
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
