
import React, { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const updateCursorHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button')
      );

      if (isClickable) {
        cursor.style.width = '50px';
        cursor.style.height = '50px';
        cursor.style.backgroundColor = '#6E59A5';
      } else {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.backgroundColor = '#8B5CF6';
      }
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', updateCursorHover);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', updateCursorHover);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-glow"></div>;
};

export default CursorEffect;
