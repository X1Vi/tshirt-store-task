import React from 'react';

// A reusable animated text wrapper
const AnimatedText = ({ children }) => (
  <span className="oh">
    <span
      className="oh__inner"
      style={{
        translate: 'none',
        rotate: 'none',
        scale: 'none',
        transform: 'translate(0px, 0px)',
      }}
    >
      {children}
    </span>
  </span>
);

export default AnimatedText;