import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Upload() {
  const [uploads, setUploads] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    images: []
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const res = await axios.get('https://agibackend.onrender.com/api/works');
        setUploads(res.data);
      } catch (err) {
        console.error('Failed to fetch uploads:', err);
      }
    };
    fetchUploads();
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const handleImageChange = e => {
    const files = Array.from(e.target.files);
    const previews = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      url: URL.createObjectURL(file)
    }));
    setFormData(fd => ({ ...fd, images: [...fd.images, ...previews] }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formData.title || !formData.description || formData.images.length === 0) {
      return alert('All fields are required!');
    }

    const body = new FormData();
    body.append('title', formData.title);
    body.append('description', formData.description);
    formData.images.forEach(img => body.append('images', img.file));

    const token = localStorage.getItem('adminToken');
    if (!token) return alert('You must be logged in as admin.');

    try {
      setLoading(true);
      const res = await axios.post('https://agibackend.onrender.com/api/works', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });

      console.log('✅ Upload success:', res.data);
      setUploads(u => [res.data, ...u]);
      setFormData({ title: '', description: '', images: [] });
    } catch (err) {
      console.error('❌ Upload error:', err.response?.data || err.message);
      alert('Upload failed: ' + (err.response?.data?.error || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async id => {
    const token = localStorage.getItem('adminToken');
    if (!token) return alert('Unauthorized. Please log in.');

    if (!window.confirm('Are you sure you want to delete this upload?')) return;

    try {
      await axios.delete(`https://agibackend.onrender.com/api/works/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUploads(u => u.filter(x => x._id !== id));
      alert('Upload deleted successfully.');
    } catch (err) {
      console.error('❌ Delete error:', err.response?.data || err.message);
      alert('Delete failed: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📁 Upload Latest Works</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter title"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter description"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Upload Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
        </div>

        {formData.images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
            {formData.images.map(img => (
              <img
                key={img.id}
                src={img.url}
                alt=""
                className="h-32 object-cover rounded"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#af08af] text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Uploading…' : 'Upload Post'}
        </button>
      </form>

      {uploads.map(post => (
        <div key={post._id} className="border p-4 mb-6 rounded bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <button
              onClick={() => handleDelete(post._id)}
              className="text-red-600 hover:text-red-800 transition"
            >
              🗑️
            </button>
          </div>
          <p className="mb-3">{post.description}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {post.images.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt=""
                className="h-32 object-cover rounded"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
