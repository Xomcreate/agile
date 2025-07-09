import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home2() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios.get('/api/works')
      .then(res => setWorks(res.data))
      .catch(err => console.error('Error fetching works:', err));
  }, []);

  return (
    <div className="bg-white py-16 px-6 md:px-20 w-full">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Latest Works
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-medium">
          Recently We’ve Finished These Works<br />
          With Highly Satisfaction
        </p>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {works.slice(0, 6).map((work, idx) => {
          const img = work.images[0];
          const src = img
            ? (img.url.startsWith('http') ? img.url : `${img.url}`)
            : 'https://via.placeholder.com/600x400?text=No+Image';

          return (
            <div
              key={work._id}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300 bg-white"
            >
              <img
                src={src}
                alt={work.title || `Work ${idx + 1}`}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{work.title}</h3>
                <p className="text-sm text-gray-600">{work.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
