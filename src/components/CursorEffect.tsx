
import React, { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice = () => {
      return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
    };
    
    // Hide custom cursor on touch devices
    if (isTouchDevice()) {
      setIsVisible(false);
      return;
    }

    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-glow');
    
    const cursorOuter = document.createElement('div');
    cursorOuter.classList.add('cursor-outer-glow');
    
    const cursorDepth1 = document.createElement('div');
    cursorDepth1.classList.add('cursor-depth', 'cursor-depth-1');
    
    const cursorDepth2 = document.createElement('div');
    cursorDepth2.classList.add('cursor-depth', 'cursor-depth-2');
    
    // Add to DOM
    document.body.appendChild(cursor);
    document.body.appendChild(cursorOuter);
    document.body.appendChild(cursorDepth1);
    document.body.appendChild(cursorDepth2);
    
    // Track mouse movement
    const updateCursorPosition = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Update main cursor
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      
      // Update outer glow with slight delay
      setTimeout(() => {
        cursorOuter.style.left = `${x}px`;
        cursorOuter.style.top = `${y}px`;
      }, 50);
      
      // Update depth layers with different delays
      setTimeout(() => {
        cursorDepth1.style.left = `${x}px`;
        cursorDepth1.style.top = `${y}px`;
      }, 30);
      
      setTimeout(() => {
        cursorDepth2.style.left = `${x}px`;
        cursorDepth2.style.top = `${y}px`;
      }, 20);
    };
    
    // Track mouse events
    document.addEventListener('mousemove', updateCursorPosition);
    
    // Handle mouse down/up events for click effect
    document.addEventListener('mousedown', () => {
      cursor.style.width = '15px';
      cursor.style.height = '15px';
      cursorOuter.style.width = '35px';
      cursorOuter.style.height = '35px';
    });
    
    document.addEventListener('mouseup', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursorOuter.style.width = '40px';
      cursorOuter.style.height = '40px';
    });
    
    // Clean up
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.body.removeChild(cursor);
      document.body.removeChild(cursorOuter);
      document.body.removeChild(cursorDepth1);
      document.body.removeChild(cursorDepth2);
    };
  }, []);
  
  return null; // Component doesn't render anything directly
};

export default CursorEffect;
