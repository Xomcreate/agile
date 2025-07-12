import React, { useEffect, useState } from 'react';
import { FaTrash, FaStar, FaCheck } from 'react-icons/fa';

function Review() {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const res = await fetch('https://agibackend.onrender.com/api/reviews');
    const data = await res.json();
    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleApprove = async (id) => {
    await fetch(`https://agibackend.onrender.com/api/reviews/${id}/approve`, {
      method: 'PATCH'
    });
    fetchReviews();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this review?')) return;
    await fetch(`https://agibackend.onrender.com/api/reviews/${id}`, {
      method: 'DELETE'
    });
    fetchReviews();
  };

  return (
    <div className="w-full p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">💬 Review Messages</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {reviews.map((review) => (
          <div key={review._id} className="bg-white p-4 rounded shadow relative">
            <div className="absolute top-2 right-2 flex gap-2">
              {!review.approved && (
                <button
                  onClick={() => handleApprove(review._id)}
                  className="text-green-600 hover:text-green-800"
                  title="Approve"
                >
                  <FaCheck />
                </button>
              )}
              <button
                onClick={() => handleDelete(review._id)}
                className="text-red-600 hover:text-red-800"
                title="Delete"
              >
                <FaTrash />
              </button>
            </div>
            <h4 className="font-bold text-lg">{review.name}</h4>
            <p className="text-gray-700 my-2">{review.message}</p>
            <div className="text-yellow-500 flex">
              {Array.from({ length: review.rating }, (_, i) => (
                <FaStar key={`star-${review._id}-${i}`} />
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">
              {new Date(review.date).toLocaleDateString()}
            </p>
            {review.approved && (
              <p className="text-xs text-green-600 font-semibold mt-1">Approved</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
