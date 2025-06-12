import React, { useEffect, useState } from "react";

export default function TextScroller() {
  const texts = ["Web Development", "App Development", "UI/UX Design"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 overflow-hidden text-3xl font-bold text-purple-700">
      <div
        className="transition-all duration-500 ease-in-out"
        style={{ transform: `translateY(-${index * 2.5}rem)`, height: '10rem' }}
      >
        {texts.map((text, i) => (
          <div className="h-10 flex items-center" key={i}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}