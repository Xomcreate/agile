import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home2() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios
      .get('https://agibackend.onrender.com/api/works')
      .then(res => {
        if (Array.isArray(res.data)) {
          setWorks(res.data);
        } else {
          console.warn('Unexpected response structure', res.data);
          setWorks([]);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="w-screen overflow-hidden">
      {works.map((work, index) => (
        <div key={index} className="p-4">
          <img
            src={work?.images?.[0] || 'fallback.jpg'}
            alt={work?.title || 'Work Image'}
            className="w-full h-64 object-cover"
          />
          <h3 className="text-xl font-semibold mt-2">{work?.title}</h3>
          <p>{work?.description}</p>
        </div>
      ))}
    </div>
  );
}
