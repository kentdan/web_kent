'use client';
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import '@/app/introduction.css';

export default function Introduction() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const currentRef = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when in view
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleScrollClick = () => {
    const nextSection = containerRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#000005] overflow-hidden">
      {/* Text Content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 pt-40 text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-blue-300"
        >
          The Pale Blue Dot
        </motion.h1>
        
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          From a distance of 6 billion kilometers, Voyager 1 captured this historic image of Earth 
          on February 14, 1990. At the request of Carl Sagan, NASA commanded the spacecraft to turn 
          its camera around and take one last photograph of its home planet.
        </p>
        <p className="text-lg md:text-xl mb-8 leading-relaxed italic">
          "Look again at that dot. That's here. That's home. That's us. On it everyone you love, 
          everyone you know, everyone you ever heard of, every human being who ever was, lived out 
          their lives..."
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          - Carl Sagan
        </p>
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg md:text-xl mt-8 leading-relaxed text-blue-300"
      >
        This profound perspective of our planet inspired me to study Environmental Science at National Taiwan University, 
        driving my commitment to protect our pale blue dot.
      </motion.p>

      <p className="text-lg text-gray-600 mb-8">
        &quot;I&apos;m passionate about building &apos;ship-fast&apos; products that &apos;solve real problems&apos; for users.&quot;
      </p>
      <p className="text-lg text-gray-600">
        &quot;Let&apos;s build something amazing together!&quot;
      </p>

        <div className="mt-16">
          <motion.div
            className="inline-block cursor-pointer group"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={handleScrollClick}
          >
            <span className="text-blue-300 text-sm group-hover:text-blue-400 transition-colors">
              Scroll to Continue
            </span>
            <div className="mt-4">
              <div className="scroll-dot" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
