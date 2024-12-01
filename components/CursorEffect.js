'use client';
import { useEffect, useRef } from 'react';
import '@/app/cursor.css';

export default function CursorEffect() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const trailsRef = useRef([]);
  const isActive = useRef(false);

  useEffect(() => {
    if (isActive.current) return;
    isActive.current = true;

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

      // Add ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${clientX}px`;
      ripple.style.top = `${clientY}px`;
      document.body.appendChild(ripple);

      // Remove ripple after animation
      setTimeout(() => ripple.remove(), 1000);
    };

    // Handle cursor over interactive elements
    const handleMouseOver = () => {
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.width = '60px';
        cursorOutlineRef.current.style.height = '60px';
        cursorOutlineRef.current.style.borderColor = 'rgba(147, 197, 253, 0.8)';
      }
    };

    const handleMouseOut = () => {
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.width = '40px';
        cursorOutlineRef.current.style.height = '40px';
        cursorOutlineRef.current.style.borderColor = 'rgba(147, 197, 253, 0.5)';
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    // Cleanup
    return () => {
      isActive.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
      if (cursorDotRef.current) cursorDotRef.current.remove();
      if (cursorOutlineRef.current) cursorOutlineRef.current.remove();
      trailsRef.current.forEach(trail => trail.remove());
    };
  }, []);

  return null;
}
