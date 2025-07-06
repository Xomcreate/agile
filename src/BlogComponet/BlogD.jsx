import React, { useState } from 'react';

function BlogD() {
  const [rating, setRating] = useState(0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="bg-purple-100 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
          📝 Leave a Review or Comment
        </h2>

        <form className="grid gap-5">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Star Rating */}
          <div className="flex items-center gap-2">
            <span className="text-gray-800 font-medium">Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={`text-2xl cursor-pointer ${
                  star <= rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>

          {/* Comment */}
          <textarea
            placeholder="Write your comment..."
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default BlogD;
