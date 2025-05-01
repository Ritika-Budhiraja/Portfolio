
import React, { useEffect } from 'react';

const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);

    // Create larger outer glow
    const outerGlow = document.createElement('div');
    outerGlow.className = 'cursor-outer-glow';
    document.body.appendChild(outerGlow);

    // Create 3D depth elements
    const depth1 = document.createElement('div');
    depth1.className = 'cursor-depth cursor-depth-1';
    document.body.appendChild(depth1);

    const depth2 = document.createElement('div');
    depth2.className = 'cursor-depth cursor-depth-2';
    document.body.appendChild(depth2);

    // Create cursor trails
    const trails = [];
    const trailCount = 8;
    
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      document.body.appendChild(trail);
      trails.push(trail);
    }

    // Track mouse position
    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;

    // Trail positions
    const trailPositions = trails.map(() => ({ x: 0, y: 0 }));

    // Handle mouse move
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update cursor position
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

      // Update outer glow with slight delay
      outerGlow.style.left = `${mouseX}px`;
      outerGlow.style.top = `${mouseY}px`;

      // Update 3D depth elements
      depth1.style.left = `${mouseX}px`;
      depth1.style.top = `${mouseY}px`;
      
      depth2.style.left = `${mouseX}px`;
      depth2.style.top = `${mouseY}px`;

      // Scale effect on mouse move speed
      const speedX = Math.abs(mouseX - prevMouseX);
      const speedY = Math.abs(mouseY - prevMouseY);
      const speed = Math.min(Math.sqrt(speedX * speedX + speedY * speedY) * 0.3, 15);
      
      cursor.style.width = `${20 + speed}px`;
      cursor.style.height = `${20 + speed}px`;
      
      // Increase outer glow with speed
      outerGlow.style.width = `${40 + speed * 1.5}px`;
      outerGlow.style.height = `${40 + speed * 1.5}px`;
      outerGlow.style.opacity = Math.min(0.6, 0.2 + speed * 0.02);

      // Update 3D depth sizes
      depth1.style.width = `${28 + speed}px`;
      depth1.style.height = `${28 + speed}px`;
      
      depth2.style.width = `${22 + speed}px`;
      depth2.style.height = `${22 + speed}px`;

      prevMouseX = mouseX;
      prevMouseY = mouseY;
    };

    // Hover effect for interactive elements
    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'BUTTON' || 
        e.target.tagName === 'A' || 
        e.target.closest('button') || 
        e.target.closest('a') ||
        e.target.className.includes('group')
      ) {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.backgroundColor = 'rgba(155, 135, 245, 0.3)';
        cursor.style.mixBlendMode = 'difference';
        
        outerGlow.style.width = '60px';
        outerGlow.style.height = '60px';
        outerGlow.style.opacity = '0.8';
        
        depth1.style.width = '50px';
        depth1.style.height = '50px';
        
        depth2.style.width = '45px';
        depth2.style.height = '45px';
      }
    };

    // Reset cursor on mouse leave
    const handleMouseOut = (e) => {
      if (
        e.target.tagName === 'BUTTON' || 
        e.target.tagName === 'A' || 
        e.target.closest('button') || 
        e.target.closest('a') ||
        e.target.className.includes('group')
      ) {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.backgroundColor = 'rgba(139, 92, 246, 0.6)';
        
        outerGlow.style.width = '40px';
        outerGlow.style.height = '40px';
        outerGlow.style.opacity = '0.3';
        
        depth1.style.width = '28px';
        depth1.style.height = '28px';
        
        depth2.style.width = '24px';
        depth2.style.height = '24px';
      }
    };

    // Animate trails
    const animateTrails = () => {
      // Update trail positions with delay
      for (let i = 0; i < trails.length; i++) {
        // Calculate position with delay based on trail index
        const delay = i * 0.08; // Increasing delay for each trail
        const targetX = mouseX;
        const targetY = mouseY;
        
        // Calculate new position with easing
        trailPositions[i].x += (targetX - trailPositions[i].x) * (0.2 - i * 0.02);
        trailPositions[i].y += (targetY - trailPositions[i].y) * (0.2 - i * 0.02);
        
        // Set trail position
        trails[i].style.left = `${trailPositions[i].x}px`;
        trails[i].style.top = `${trailPositions[i].y}px`;
        
        // Decrease opacity for further trails
        trails[i].style.opacity = 1 - (i / trails.length) * 0.8;
        
        // Decrease size for further trails
        const size = 10 - i * 1; 
        trails[i].style.width = `${Math.max(size, 2)}px`;
        trails[i].style.height = `${Math.max(size, 2)}px`;
      }
      
      requestAnimationFrame(animateTrails);
    };

    // Start animation
    animateTrails();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Hide default cursor when over the document
    document.body.style.cursor = 'none';

    // Clean up
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.removeChild(cursor);
      document.body.removeChild(outerGlow);
      document.body.removeChild(depth1);
      document.body.removeChild(depth2);
      trails.forEach(trail => document.body.removeChild(trail));
      document.body.style.cursor = 'auto';
    };
  }, []);

  return null;
};

export default CursorEffect;
