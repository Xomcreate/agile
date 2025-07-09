import React from 'react';

function ContactC() {
  return (
    <div className="bg-[wheat] h-[60vh] w-full rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Google Map"
        className="w-full h-full border-0"
        src="https://www.google.com/maps?q=116a+Brandshawgate+Manchester,+Leigh,+WN7+4NP,+United+Kingdom&output=embed"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ContactC;
