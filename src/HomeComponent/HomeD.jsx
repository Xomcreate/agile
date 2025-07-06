import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'How to Maximize Your Donations',
    excerpt: 'Learn the best ways to make your charitable giving more impactful and rewarding.',
    image: '/images/blog1.jpg',
  },
  {
    id: 2,
    title: 'The Importance of Community Support',
    excerpt: 'Discover why supporting your local community makes a lasting difference.',
    image: '/images/blog2.jpg',
  },
  {
    id: 3,
    title: 'Success Stories from Our Beneficiaries',
    excerpt: 'Read inspiring stories from people whose lives have been changed through your generosity.',
    image: '/images/blog3.jpg',
  },
];

function HomeD() {
  return (
    <div className="bg-white py-16 px-6 md:px-20 w-full min-h-[80vh]">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">View Our Latest News</h2>
        <p className="text-lg md:text-xl text-gray-600 font-medium max-w-3xl mx-auto">
          Stay updated with the latest stories, tips, and events from our organization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogPosts.map(({ id, title, excerpt, image }) => (
          <div
            key={id}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
              <p className="text-gray-600 flex-grow">{excerpt}</p>
              <Link
                to="/blog"
                className="mt-4 inline-block text-purple-600 font-semibold hover:text-purple-800 transition"
              >
                Read More &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeD;
