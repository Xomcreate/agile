import React, { useState } from 'react';

function Upload() {
  const [uploads, setUploads] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    images: [],
  });

  // Handle input fields (title, description)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file selection and preview creation
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file),
      file,
    }));
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...imagePreviews],
    }));
  };

  // Submit new post
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || formData.images.length === 0) return;

    const newPost = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      images: formData.images,
    };

    setUploads([newPost, ...uploads]);
    setFormData({ title: '', description: '', images: [] });
  };

  // DELETE entire uploaded post
  const handleDeletePost = (postId) => {
    const updated = uploads.filter((upload) => upload.id !== postId);
    setUploads(updated);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full font-sans">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📁 Upload Latest Works</h2>

      {/* Upload Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Enter work title"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Describe the work..."
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Upload Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
        </div>

        {/* Preview Selected Images */}
        {formData.images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-3">
            {formData.images.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt="preview"
                className="h-32 w-full object-cover rounded"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          className="bg-[#af08af] text-white px-4 py-2 rounded hover:bg-purple-800"
        >
          Upload Post
        </button>
      </form>

      {/* Uploaded Posts List */}
      {uploads.length > 0 && (
        <div className="space-y-6">
          {uploads.map((post) => (
            <div
              key={post.id}
              className="border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-[#af08af]">{post.title}</h3>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  🗑️ Delete Post
                </button>
              </div>
              <p className="text-gray-700 mb-3">{post.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {post.images.map((img) => (
                  <img
                    key={img.id}
                    src={img.url}
                    alt="Uploaded"
                    className="h-32 w-full object-cover rounded"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Upload;
