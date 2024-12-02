'use client';
import Image from 'next/image';
import { MotionDiv } from './MotionDiv';
import Link from 'next/link';
import '@/app/hero3.css';

export default function Hero3() {
  return (
    <section className="min-h-[80vh] pt-24 lg:pt-32 pb-0 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:mt-8">
          {/* Left side - Text content */}
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full lg:max-w-[40%] pt-8"
          >
            <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 drop-shadow-sm text-center lg:text-left">
              Kent Daniel
            </h1>
            <p className="text-gray-800 text-xl mb-8 text-center lg:text-left">
              <span className="font-semibold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">AI Engineer · Full Stack Developer · Writer</span>
              <br />
              <span className="mt-4 block text-gray-600 text-lg">
                My interest is the intersection of AI, Environmental Science, and Software Development. When am not coding or you can find me doing sports, reading, learning chinese or writing.
              </span>
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Link 
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-700 to-purple-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden text-lg hover:scale-105"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
              <Link 
                href="#blog"
                className="group relative px-8 py-4 border-2 border-blue-700 text-blue-700 rounded-lg transition-all duration-300 overflow-hidden text-lg hover:scale-105"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">My Blog</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </div>
          </MotionDiv>

          {/* Right side - Playing card style */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 w-full lg:max-w-[55%] relative flex justify-center items-center min-h-[400px] sm:min-h-[500px] lg:min-h-0 mt-8 lg:mt-0"
          >
            <div className="relative w-[85%] sm:w-[70%] lg:w-full aspect-[4/5] max-w-[500px] mx-auto">
              {/* Background cards for stacked effect */}
              <div className="absolute -top-8 -left-8 w-[95%] h-[95%] rounded-2xl bg-purple-100 transform -rotate-6 shadow-xl border-2 border-purple-200">
                {/* AI text on furthest card */}
                <div className="absolute top-4 left-4 text-left z-10">
                  <div className="text-purple-600 font-bold text-2xl leading-tight tracking-wide">F♠</div>
                </div>
                <div className="absolute bottom-4 right-4 text-right z-10 transform rotate-180">
                  <div className="text-purple-600 font-bold text-2xl leading-tight tracking-wide">F♠</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-[97%] h-[97%] rounded-2xl bg-blue-100 transform -rotate-3 shadow-xl border-2 border-blue-200">
                {/* FS text on middle card */}
                <div className="absolute top-4 left-4 text-left z-10">
                  <div className="text-blue-600 font-bold text-2xl leading-tight tracking-wide">A♦</div>
                </div>
                <div className="absolute bottom-4 right-4 text-right z-10 transform rotate-180">
                  <div className="text-blue-600 font-bold text-2xl leading-tight tracking-wide">A♦</div>
                </div>
              </div>
              {/* Main card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white border-2 border-gray-200 transform hover:scale-105 transition-transform duration-300">
                {/* Top left role indicators */}
                <div className="absolute top-4 left-4 text-left z-10">
                  <div className="text-red-600 font-bold text-2xl leading-tight tracking-wide">KD</div>
                </div>
                {/* Bottom right role indicators (rotated) */}
                <div className="absolute bottom-4 right-4 text-right z-10 transform rotate-180">
                  <div className="text-red-600 font-bold text-2xl leading-tight tracking-wide">KD</div>
                </div>
                {/* Image */}
                <div className="absolute inset-0 m-4">
                  <Image
                    src="/images/Kent_tp.jpg"
                    alt="Hero Image"
                    fill
                    className="object-cover object-top rounded-lg"
                    priority
                  />
                </div>
                {/* Card border overlay */}
                <div className="absolute inset-0 border-2 border-gray-200 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-2xl" />
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
