import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Jane Doe',
    date: 'July 1, 2025',
    rating: 5,
    comment: 'Amazing experience! Highly recommend to everyone.',
  },
  {
    name: 'Michael Smith',
    date: 'June 28, 2025',
    rating: 4,
    comment: 'Great event, well organized and insightful.',
  },
  {
    name: 'Sarah Johnson',
    date: 'June 25, 2025',
    rating: 5,
    comment: 'The best seminar I’ve attended this year!',
  },
  {
    name: 'David Lee',
    date: 'June 20, 2025',
    rating: 3,
    comment: 'Some parts were slow, but overall good effort.',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

function StarRating({ rating }) {
  return (
    <div className="flex gap-1 text-yellow-400 mb-2">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className="w-5 h-5"
          fill={index < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function BlogC() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-10">
        ⭐ Reviews & Ratings
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="bg-purple-100 p-6 rounded-xl shadow-md"
          >
            <div className="flex justify-between items-center mb-1">
              <h4 className="font-bold text-purple-900">{review.name}</h4>
              <span className="text-sm text-purple-700">{review.date}</span>
            </div>
            <StarRating rating={review.rating} />
            <p className="text-gray-800 text-sm mt-2">{review.comment}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BlogC;
