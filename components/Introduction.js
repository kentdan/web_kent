'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Introduction() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = () => {
      if (containerRef.current) {
        // Cleanup code if needed
      }
    };
    return cleanup;
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        Software Engineer | Creative Developer | Problem Solver
      </p>
    </motion.div>
  );
}
