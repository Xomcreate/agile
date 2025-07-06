import React, { useState } from 'react';

function Home2() {
  // Placeholder image array — later replace with API data
  const [images] = useState([
    'https://via.placeholder.com/600x400?text=Work+1',
    'https://via.placeholder.com/600x400?text=Work+2',
    'https://via.placeholder.com/600x400?text=Work+3',
    'https://via.placeholder.com/600x400?text=Work+4',
    'https://via.placeholder.com/600x400?text=Work+5',
    'https://via.placeholder.com/600x400?text=Work+6',
  ]);

  return (
    <div className="bg-white py-16 px-6 md:px-20 w-full">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Latest Works</h2>
        <p className="text-lg md:text-xl text-gray-600 font-medium">
          Recently We’ve Finished These Works<br />
          With Highly Satisfaction
        </p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.slice(0, 6).map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition duration-300"
          >
            <img
              src={src}
              alt={`Work ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home2;
