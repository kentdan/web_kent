import { Suspense } from 'react'
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Hero3 from '@/components/Hero3';
import Hero1 from '@/components/Hero1';
import Hero2 from '@/components/Hero2';
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Introduction from '@/components/Introduction';
import Blog from '@/components/Blog';
import '@/app/introduction.css';
import '@/app/cursor.css';
import Cursor from '@/components/Cursor';

export default function Home() {
  return (
    <>
      <Cursor />
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-white">
        <Hero3 />
        <div className="container mx-auto px-4 max-w-[1400px]">
          <Blog />
        </div>
        <div className="container mx-auto px-4 max-w-[1400px]">
          <Projects />
        </div>
        {/* <Introduction /> */}
        {/* <Hero1 />
        <Hero2 />
        <Problem />
        <FeaturesAccordion /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
