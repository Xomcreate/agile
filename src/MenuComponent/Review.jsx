import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaUser, FaStar, FaCheckCircle, FaTrash } from 'react-icons/fa';

function Review() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchReviews = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/reviews');
      if (!res.ok) throw new Error('Failed to fetch reviews');
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      setError('Failed to load reviews');
    } finally {
      setLoading(false);
    }
  };

  const approveReview = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/reviews/${id}/approve`, {
        method: 'PATCH',
      });
      if (!res.ok) throw new Error('Failed to approve');
      fetchReviews(); // Refresh
    } catch (err) {
      alert('❌ Failed to approve review');
    }
  };

  const deleteReview = async (id) => {
    if (!window.confirm('Are you sure you want to delete this review?')) return;

    try {
      const res = await fetch(`http://localhost:5000/api/reviews/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete review');
      fetchReviews();
    } catch (err) {
      alert('❌ Failed to delete review');
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="w-full max-h-[85vh] overflow-y-auto px-4 py-4">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-purple-700 mb-6">
        Client Review Messages
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading reviews...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid gap-4">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white border rounded-lg p-4 shadow relative"
            >
              <p className="font-semibold text-lg text-purple-700 flex items-center gap-2">
                <FaUser /> {review.name}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaEnvelope /> {review.email}
              </p>
              <p className="text-sm text-gray-800 my-1">
                <strong>Message:</strong> {review.message}
              </p>

              <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                {Array.from({ length: review.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-gray-500 ml-2">({review.rating} stars)</span>
              </div>

              <p className="text-xs text-gray-400 mt-2">
                Posted on: {new Date(review.createdAt).toLocaleString()}
              </p>

              {!review.approved ? (
                <button
                  className="mt-3 bg-green-600 text-white py-1 px-3 rounded text-sm"
                  onClick={() => approveReview(review._id)}
                >
                  <FaCheckCircle className="inline mr-1" /> Approve
                </button>
              ) : (
                <p className="mt-2 text-green-600 text-sm font-medium">
                  ✅ Approved
                </p>
              )}

              <button
                onClick={() => deleteReview(review._id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
                title="Delete"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Review;
