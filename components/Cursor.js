'use client';
import { useEffect, useRef } from 'react';
import '@/app/cursor.css';

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

    // Remove the line that hides the cursor
    // document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Update cursor dot
      cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;
      cursorDot.style.width = '4px';
      cursorDot.style.height = '4px';
      cursorDot.style.backgroundColor = 'rgba(34, 197, 94, 0.9)';

      // Update cursor outline with lag
      requestAnimationFrame(() => {
        cursorOutline.style.transform = `translate(${clientX}px, ${clientY}px)`;
        cursorOutline.style.width = '30px';
        cursorOutline.style.height = '30px';
        cursorOutline.style.border = '1.5px solid rgba(34, 197, 94, 0.5)';
      });

      // Create trail effect
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.transform = `translate(${clientX}px, ${clientY}px)`;
      trail.style.width = '4px';
      trail.style.height = '4px';
      trail.style.backgroundColor = 'rgba(34, 197, 94, 0.3)';
      trail.style.opacity = '0.5';
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

        // Update closest points
        const points = Array.from(container.getElementsByClassName('data-point'));
        points.forEach(point => {
          const dx = parseFloat(point.style.left) - mouseRef.current.x;
          const dy = parseFloat(point.style.top) - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 20) {
            point.style.transform = `scale(1.5)`;
            point.style.opacity = '0.8';
            cursorOutline.style.width = '50px';
            cursorOutline.style.height = '50px';
          } else {
            point.style.transform = 'scale(1)';
            point.style.opacity = '0.5';
            cursorOutline.style.width = '40px';
            cursorOutline.style.height = '40px';
          }
        });
      }
    };

    // Handle cursor over interactive elements
    const handleMouseOver = () => {
      cursorOutline.style.width = '60px';
      cursorOutline.style.height = '60px';
      cursorOutline.style.borderColor = 'rgba(34, 197, 94, 0.7)';
    };

    const handleMouseOut = () => {
      cursorOutline.style.width = '30px';
      cursorOutline.style.height = '30px';
      cursorOutline.style.borderColor = 'rgba(34, 197, 94, 0.5)';
    };

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .scroll-arrow');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    document.addEventListener('mousemove', handleMouseMove);

    // Create data points and other background effects
    const container = containerRef.current;
    if (!container) return;

    const numPoints = 150;
    const points = [];
    const lines = [];

    for (let i = 0; i < numPoints; i++) {
      const point = document.createElement('div');
      point.className = 'data-point';
      point.style.left = `${Math.random() * 100}%`;
      point.style.top = `${Math.random() * 100}%`;
      point.style.animationDelay = `${Math.random() * 2}s`;
      points.push(point);
      container.appendChild(point);

      if (i > 0 && Math.random() > 0.3) {
        const line = document.createElement('div');
        line.className = 'connection-line';
        const prevPoint = points[Math.floor(Math.random() * i)];
        const x1 = parseFloat(prevPoint.style.left);
        const y1 = parseFloat(prevPoint.style.top);
        const x2 = parseFloat(point.style.left);
        const y2 = parseFloat(point.style.top);

        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

        line.style.width = `${length}%`;
        line.style.left = `${x1}%`;
        line.style.top = `${y1}%`;
        line.style.transform = `rotate(${angle}deg)`;
        lines.push(line);
        container.appendChild(line);
      }
    }

    // Add floating binary numbers
    const addBinaryNumber = () => {
      const binary = document.createElement('div');
      binary.className = 'binary-number';
      binary.textContent = Math.random().toString(2).substr(2, 8);
      binary.style.left = `${Math.random() * 100}%`;
      binary.style.top = '-20px';
      container.appendChild(binary);

      setTimeout(() => binary.remove(), 10000);
    };

    const binaryInterval = setInterval(addBinaryNumber, 2000);

    return () => {
      // Clean up all effects
      cursorDot.remove();
      cursorOutline.remove();
      trailsRef.current.forEach(trail => trail.remove());
      points.forEach(point => point.remove());
      lines.forEach(line => line.remove());
      clearInterval(binaryInterval);
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none">
      {/* Container for data points and effects */}
    </div>
  );
}
