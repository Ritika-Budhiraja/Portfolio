
import React, { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorTrail = cursorTrailRef.current;
    if (!cursor || !cursorTrail) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
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
        cursor.style.backgroundColor = 'rgba(110, 89, 165, 0.5)';
        cursor.style.mixBlendMode = 'normal';
        cursor.style.backdropFilter = 'blur(8px)';
        cursor.style.border = '2px solid #9b87f5';
      } else {
        cursor.style.width = '24px';
        cursor.style.height = '24px';
        cursor.style.backgroundColor = 'rgba(139, 92, 246, 0.6)';
        cursor.style.mixBlendMode = 'difference';
        cursor.style.backdropFilter = 'blur(4px)';
        cursor.style.border = '1px solid rgba(255, 255, 255, 0.8)';
      }
    };

    // Animate trail to follow main cursor with a slight delay
    const animateTrail = () => {
      // Calculate the distance between the trail and the cursor
      const dx = mouseX - trailX;
      const dy = mouseY - trailY;
      
      // Move the trail a percentage of the distance
      trailX += dx * 0.1;
      trailY += dy * 0.1;
      
      cursorTrail.style.left = `${trailX}px`;
      cursorTrail.style.top = `${trailY}px`;
      
      requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', updateCursorHover);
    
    animateTrail();

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', updateCursorHover);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="cursor-glow z-[9999]"
      />
      <div 
        ref={cursorTrailRef} 
        className="cursor-trail z-[9998]"
      />
    </>
  );
};

export default CursorEffect;
