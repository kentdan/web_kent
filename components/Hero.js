"use client";

import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 5, 13] // Corrected position values
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Experience />
      </Canvas>

      <div className="absolute bottom-60 left-1/2 transform -translate-x-1/2 flex justify-between w-48">
        <button className="btn btn-primary btn-wide w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-red-700 text-white font-bold shadow-lg transition-transform transform hover:scale-105">
          📝
        </button>

        <button className="btn btn-primary btn-wide w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-blue-700 text-white font-bold shadow-lg transition-transform transform hover:scale-105">
         🌐
        </button>

        <button className="btn btn-primary btn-wide w-12 h-12 flex items-center justify-center rounded-full bg-black hover:bg-green-700 text-white font-bold shadow-lg transition-transform transform hover:scale-105">
          Hi
        </button>
      </div>
    </section>
  );
};
//test
export default Hero;
