'use client';
import { useEffect, useRef } from 'react';
import { MotionDiv } from './MotionDiv';
import Link from 'next/link';
import '@/app/hero2.css';

export default function Hero2() {
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

  const commands = [
    { text: 'visitor@kent_daniel_website:~$ whoami', delay: 0 },
    { text: '> User Profile:', delay: 0.8 },
    { text: '  NAME="Kent Daniel"', delay: 1.2 },
    { text: '  THIS WEBSITE="A little bit about my journey"', delay: 1.6 },
    { text: '  BLOG="I tried to learn new skills every week & documented them"', delay: 2.0 },
    { text: '  Journey:', delay: 2.4 },
    { text: '    "Started in Environmental Science"', delay: 2.6 },
    { text: '    "Fascinated by Deep Learning & Data Science"', delay: 2.8 },
    { text: '    "Becoming a Full-Stack Developer"', delay: 3.0 },
    { text: '    "Now Building My Own Team"', delay: 3.2 },
    { text: 'visitor@kent_daniel_website:~$ ', delay: 3.4 }
  ];
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Data visualization background */}
      <div ref={containerRef} className="absolute inset-0 opacity-25" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-5xl mb-16">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
              </div>
              <div className="terminal-title">visitor@portfolio: ~</div>
            </div>
            <div className="terminal-content">
              {commands.map((cmd, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: cmd.delay }}
                  className="terminal-text"
                >
                  <div className="mb-2 text-xl md:text-2xl font-mono">
                    {cmd.text.startsWith('visitor') ? (
                      <span className="command-prompt">{cmd.text}</span>
                    ) : cmd.text.startsWith('  NAME') ? (
                      <div className="key-value">
                        <span className="key">NAME</span>
                        <span className="equals">=</span>
                        <span className="value">"Kent Daniel"</span>
                      </div>
                    ) : cmd.text.startsWith('  THIS WEBSITE') ? (
                      <div className="key-value">
                        <span className="key">THIS WEBSITE</span>
                        <span className="equals">=</span>
                        <span className="value">"A little bit about my journey"</span>
                      </div>
                    ) : cmd.text.startsWith('  BLOG') ? (
                      <div className="key-value">
                        <span className="key">BLOG</span>
                        <span className="equals">=</span>
                        <Link 
                          href="/blog"
                          className="value hover:opacity-70 transition-opacity cursor-pointer"
                        >
                          "I tried to learn new skills every week & documented them"
                        </Link>
                      </div>
                    ) : cmd.text.startsWith('  Journey:') ? (
                      <span className="text-white">{cmd.text}</span>
                    ) : cmd.text.startsWith('    "') ? (
                      <div className="pl-8">
                        <span className="value">{cmd.text}</span>
                      </div>
                    ) : cmd.text.startsWith('> ') ? (
                      <span className="command-output">{cmd.text}</span>
                    ) : cmd.text === 'visitor@kent_daniel_website:~$ ' ? (
                      <div className="flex items-center">
                        <span>{cmd.text}</span>
                        <div className="w-[1px] h-[14px] bg-white ml-0.5"></div>
                      </div>
                    ) : (
                      <span className="command-output">{cmd.text}</span>
                    )}
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 3.8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-8 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <span className="text-green-400 text-lg font-mono">Scroll to Learn More</span>
          <div className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
