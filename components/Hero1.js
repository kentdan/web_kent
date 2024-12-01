'use client';
import { MotionDiv } from './MotionDiv';
import '@/app/hero1.css';

export default function Hero1() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-purple-900/40 to-blue-900/30">
      {/* Animated stars background */}
      <div className="absolute inset-0 bg-black">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-200 to-purple-400 leading-[1.3] py-2">
              Exploring Earth Through Data
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-0 max-w-3xl mx-auto leading-relaxed pt-4">
              Combining Machine Learning, Environmental Science, and Space Technology
              to Understand Our Planet Better
            </p>
          </MotionDiv>

          {/* Project cards */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <div className="p-8 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Machine Learning</h3>
              <p className="text-gray-300">
                Leveraging AI to analyze environmental data and predict patterns
              </p>
            </div>

            <div className="p-8 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-green-300">Environmental Science</h3>
              <p className="text-gray-300">
                Studying ecosystems and climate patterns for sustainable solutions
              </p>
            </div>

            <div className="p-8 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Space Technology</h3>
              <p className="text-gray-300">
                Using satellite data to monitor environmental changes
              </p>
            </div>
          </MotionDiv>

          {/* Call to action */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <a
              href="#projects"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white font-semibold hover:scale-105 transition-transform"
            >
              Explore Projects
            </a>
          </MotionDiv>
        </div>

        {/* Animated gradient orb */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
