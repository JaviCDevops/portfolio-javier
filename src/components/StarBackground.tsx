import React from 'react';

const StarBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 stars-container pointer-events-none">
        <div className="stars-sm relative"></div>
        <div className="stars-md relative"></div>
        <div className="stars-lg relative"></div>
    </div>
  );
};

export default StarBackground;