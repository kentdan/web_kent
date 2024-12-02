'use client';
import { useEffect, useRef } from 'react';
import '@/app/hero2.css';

export default function Cursor() {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const trailsRef = useRef([]);

  useEffect(() => {
    // Create cursor elements
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    cursorDotRef.current = cursorDot;

    const cursorOutline = document.createElement('div');
    cursorOutline.className = 'cursor-outline';
    document.body.appendChild(cursorOutline);
    cursorOutlineRef.current = cursorOutline;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Update cursor dot
      cursorDot.style.transform = `translate(${clientX - 4}px, ${clientY - 4}px)`;

      // Update cursor outline with lag
      requestAnimationFrame(() => {
        cursorOutline.style.transform = `translate(${clientX - 20}px, ${clientY - 20}px)`;
      });

      // Create trail effect
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.transform = `translate(${clientX - 3}px, ${clientY - 3}px)`;
      document.body.appendChild(trail);
      trailsRef.current.push(trail);

      // Fade out and remove trail
      setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
          trail.remove();
          trailsRef.current = trailsRef.current.filter(t => t !== trail);
        }, 500);
      }, 100);

      // Update mouseRef for other effects
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        mouseRef.current = {
          x: ((clientX - rect.left) / rect.width) * 100,
          y: ((clientY - rect.top) / rect.height) * 100
        };

        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        ripple.style.left = `${mouseRef.current.x}%`;
        ripple.style.top = `${mouseRef.current.y}%`;
        container.appendChild(ripple);

        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 1000);
      }
    };

    // Handle cursor over interactive elements
    const handleMouseOver = () => {
      cursorOutline.style.width = '60px';
      cursorOutline.style.height = '60px';
      cursorOutline.style.borderColor = 'rgba(74, 222, 128, 0.5)';
    };

    const handleMouseOut = () => {
      cursorOutline.style.width = '40px';
      cursorOutline.style.height = '40px';
      cursorOutline.style.borderColor = 'rgba(74, 222, 128, 0.3)';
    };

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .scroll-arrow');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Clean up all effects
      if (cursorDot.parentElement) cursorDot.remove();
      if (cursorOutline.parentElement) cursorOutline.remove();
      trailsRef.current.forEach(trail => {
        if (trail.parentElement) trail.remove();
      });
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return <div ref={containerRef} className="cursor-container" />;
}
