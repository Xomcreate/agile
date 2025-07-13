import React, { useEffect, useState } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';

export default function BlogManager() {
  const [blogs, setBlogs]       = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '', description: '', status: 'Draft', imageFile: null,
  });

  const fetchBlogs = async () => {
    const res  = await fetch('https://agibackend.onrender.com/api/blogs', { mode: 'cors' });
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => { fetchBlogs(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this post?')) return;
    await fetch(`https://agibackend.onrender.com/api/blogs/${id}`, {
      method: 'DELETE', mode: 'cors'
    });
    fetchBlogs();
  };

  const handleAddNew = () => {
    setFormData({ title: '', description: '', status: 'Draft', imageFile: null });
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('status', formData.status);
    if (formData.imageFile) data.append('thumbnail', formData.imageFile);

    const res = await fetch('https://agibackend.onrender.com/api/blogs', {
      method: 'POST', mode: 'cors', body: data
    });

    if (res.ok) {
      setShowForm(false);
      fetchBlogs();
    } else {
      console.error('Upload failed:', await res.json());
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">📰 Blog Manager</h2>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          <FaPlus /> Add New Post
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map(post => (
          <div key={post._id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-48 object-cover"
              onError={e => (e.target.style.display = 'none')}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.description.slice(0, 100)}...</p>
              <p className="text-sm mt-2 text-gray-400">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className={`text-xs inline-block mt-2 px-2 py-1 rounded ${
                post.status === 'Published'
                  ? 'bg-green-200 text-green-800'
                  : 'bg-yellow-200 text-yellow-800'
              }`}>
                {post.status}
              </p>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => handleDelete(post._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <h2 className="font-bold text-lg mb-4">Add New Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                required
                className="w-full border px-3 py-2 rounded"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
              />
              <textarea
                placeholder="Description"
                required
                rows="4"
                className="w-full border px-3 py-2 rounded"
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
              />
              <input
                type="file"
                accept="image/*"
                onChange={e => setFormData({ ...formData, imageFile: e.target.files[0] })}
              />
              {formData.imageFile && (
                <img
                  src={URL.createObjectURL(formData.imageFile)}
                  alt="Preview"
                  className="h-32 w-full object-cover rounded"
                />
              )}
              <select
                className="w-full border px-3 py-2 rounded"
                value={formData.status}
                onChange={e => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
