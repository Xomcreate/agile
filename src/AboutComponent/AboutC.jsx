import React from 'react';

export default function AboutC() {
  const keyframes = `
    @keyframes infiniteScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  const textStyle = {
    color: '#af08af',
    wordSpacing: '5px',
    WebkitTextStroke: '1px #6b21a8', // Optional for a light outlined look
  };

  return (
    <div className="w-screen overflow-hidden">
      <style>{keyframes}</style>
      <div className="relative w-full h-[30vh] overflow-hidden flex items-center bg-white">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: 'infiniteScroll 15s linear infinite',
          }}
        >
          {[...Array(2)].flatMap((_, index) => [
            <span
              key={`hr-${index}`}
              style={textStyle}
              className="mx-4 text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif"
            >
              HR Consulting,
            </span>,
            <span
              key={`audit-${index}`}
              style={textStyle}
              className="mx-4 text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif"
            >
              Sponsor Compliance And Audits,
            </span>,
            <span
              key={`recruit-${index}`}
              style={textStyle}
              className="mx-4 text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif"
            >
              End to End Recruitment,
            </span>,
          ])}
        </div>
      </div>
    </div>
  );
}
