import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

function BlogManager() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'The Importance of Compliance in HR Consulting',
      description: 'Learn how HR compliance builds trust and reduces legal risk.',
      date: 'July 5, 2025',
      status: 'Published',
      thumbnail: 'https://via.placeholder.com/80?text=HR1',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    title: '',
    description: '',
    status: 'Draft',
    thumbnail: '',
    imageFile: null,
  });

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleEdit = (blog) => {
    setFormData({ ...blog, imageFile: null });
    setShowForm(true);
  };

  const handleAddNew = () => {
    setFormData({
      id: null,
      title: '',
      description: '',
      status: 'Draft',
      thumbnail: '',
      imageFile: null,
    });
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const thumbnail = formData.imageFile
      ? URL.createObjectURL(formData.imageFile)
      : formData.thumbnail;

    if (!formData.title || !thumbnail || !formData.description) return;

    if (formData.id) {
      setBlogs(
        blogs.map((blog) =>
          blog.id === formData.id
            ? { ...formData, thumbnail, date: blog.date }
            : blog
        )
      );
    } else {
      const newBlog = {
        ...formData,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        thumbnail,
      };
      setBlogs([newBlog, ...blogs]);
    }

    setShowForm(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 sm:p-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">📰 Blog Manager</h2>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 bg-[#af08af] hover:bg-purple-800 text-white px-4 py-2 rounded-md transition"
        >
          <FaPlus />
          Add New Post
        </button>
      </div>

      {/* Blog List */}
      <div className="bg-white shadow-md rounded-xl overflow-x-auto">
        <table className="min-w-full text-sm sm:text-base text-left">
          <thead className="bg-purple-100 text-gray-700 font-semibold">
            <tr>
              <th className="px-4 py-3">Post</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((post) => (
              <tr key={post.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <img
                    src={post.thumbnail}
                    alt="thumbnail"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span className="font-medium">{post.title}</span>
                </td>
                <td className="px-4 py-3 text-gray-700 max-w-sm">
                  {post.description.length > 60
                    ? post.description.slice(0, 60) + '...'
                    : post.description}
                </td>
                <td className="px-4 py-3">{post.date}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      post.status === 'Published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-3 justify-center">
                  <button
                    onClick={() => handleEdit(post)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-8">
                  No blog posts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-bold mb-4">
              {formData.id ? 'Edit Post' : 'Add New Post'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1">Title</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Description</label>
                <textarea
                  className="w-full border px-3 py-2 rounded"
                  rows="3"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setFormData({
                        ...formData,
                        imageFile: file,
                        thumbnail: URL.createObjectURL(file),
                      });
                    }
                  }}
                />
              </div>

              {formData.thumbnail && (
                <div className="mt-2">
                  <img
                    src={formData.thumbnail}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold mb-1">Status</label>
                <select
                  className="w-full border px-3 py-2 rounded"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#af08af] text-white px-4 py-2 rounded hover:bg-purple-800"
                >
                  {formData.id ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogManager;
