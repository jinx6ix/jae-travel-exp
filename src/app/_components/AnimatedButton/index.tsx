import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import './index.scss'; // Ensure you have this file for styles

const AnimatedButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [text, setText] = useState('Book Travel');

  useEffect(() => {
    const textOptions = ['Book Travel', 'Hire Vehicle'];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % textOptions.length;
      setText(textOptions[currentIndex]);
    }, 10000); // Change text every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const handleButtonClick = () => {
    setHovered(!hovered);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="button-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="animated-button" onClick={handleButtonClick}>
        {text}
      </button>
      {hovered && (
        <div className="dropdown">
          <Link href="/quick-booking-form" className="dropdownlink">
            <span className="dropdown-option" onClick={() => setHovered(false)}>
              Book a Travel
            </span>
          </Link>
          <Link href="/vehicle-hire-form" className="dropdownlink">
            <span className="dropdown-option" onClick={() => setHovered(false)}>
              Book a Vehicle
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AnimatedButton;