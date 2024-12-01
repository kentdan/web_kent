'use client';
import { useEffect } from 'react';
import '@/app/cursor.css';

export default function Cursor() {
  useEffect(() => {
    let ripples = [];
    let isCreatingRipple = false;

    const createRipple = (x, y) => {
      const ripple = document.createElement('div');
      ripple.className = 'cursor-ripple';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      document.body.appendChild(ripple);
      ripples.push(ripple);

      // Remove ripple after animation
      setTimeout(() => {
        if (ripple.parentElement) {
          document.body.removeChild(ripple);
        }
        ripples = ripples.filter(r => r !== ripple);
      }, 1000);
    };

    const handleMouseMove = (e) => {
      if (!isCreatingRipple) {
        isCreatingRipple = true;
        createRipple(e.clientX, e.clientY);
        setTimeout(() => {
          isCreatingRipple = false;
        }, 50); // Control the frequency of ripple creation
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Click creates a larger ripple
    document.addEventListener('click', (e) => {
      const clickRipple = document.createElement('div');
      clickRipple.className = 'click-ripple';
      clickRipple.style.left = e.clientX + 'px';
      clickRipple.style.top = e.clientY + 'px';
      document.body.appendChild(clickRipple);

      setTimeout(() => {
        if (clickRipple.parentElement) {
          document.body.removeChild(clickRipple);
        }
      }, 1000);
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      ripples.forEach(ripple => {
        if (ripple.parentElement) {
          document.body.removeChild(ripple);
        }
      });
    };
  }, []);

  return null;
}
