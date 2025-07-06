import React from 'react';

function AboutC() {
  const keyframes = `
    @keyframes infiniteScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  // Custom style for outlined purple text
  const outlinedText = {
    color: 'transparent',
    WebkitTextStroke: '2px #6b21a8', // Thicker purple border
    wordSpacing: '5px',
  };

  const filledText = {
    color: '#af08af',
    wordSpacing: '5px',
  };

  return (
    <div className="bg-white h-[30vh] w-full overflow-hidden flex items-center">
      <style>{keyframes}</style>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex whitespace-nowrap w-max"
          style={{
            display: 'flex',
            animation: 'infiniteScroll 15s linear infinite',
          }}
        >
          {/* First duplicate */}
          <div className="flex gap-10 text-5xl sm:text-6xl md:text-7xl font-extrabold font-serif">
            <span style={outlinedText}>HR Consulting,</span>
            <span style={filledText}>Sponsor Compliance And Audits, </span>
            <span style={outlinedText}>HR Consulting,</span>
            <span style={filledText}>Sponsor Compliance And Audits, </span>
          </div>

          {/* Second duplicate */}
          <div className="flex gap-10 text-5xl sm:text-6xl md:text-7xl font-extrabold font-serif">
            <span style={outlinedText}>HR Consulting,</span>
            <span style={filledText}>Sponsor Compliance And Audits,   </span>
            <span style={outlinedText}>HR Consulting,</span>
            <span style={filledText}>Sponsor Compliance And Audits</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutC;
