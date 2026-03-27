import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    let requestRef;
    const animateRing = () => {
      setRingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.12,
        y: prev.y + (position.y - prev.y) * 0.12,
      }));
      requestRef = requestAnimationFrame(animateRing);
    };

    requestRef = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef);
    };
  }, [position.x, position.y]);

  useEffect(() => {
    // Hide default cursor on interactive elements
    const style = document.createElement('style');
    style.innerHTML = `
      a, button { cursor: none !important; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <div 
        id="cursor" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }} 
      />
      <div 
        id="cursor-ring" 
        style={{ 
          left: `${ringPosition.x}px`, 
          top: `${ringPosition.y}px` 
        }} 
      />
    </>
  );
};

export default CustomCursor;
