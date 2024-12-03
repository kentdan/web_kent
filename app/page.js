import Hero3 from '@/components/Hero3';
import Hero2 from '@/components/Hero2';
import Blog from '@/components/Blog';
import Projects from '@/components/Projects';
import Introduction from '@/components/Introduction';
import '@/app/introduction.css';
import '@/app/cursor.css';
import Cursor from '@/components/Cursor';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Cursor />
      <main className="flex min-h-screen flex-col bg-black">
        <Hero2 />
        
        <div className="container mx-auto px-4 max-w-[1400px]">
          <Blog />
        </div>
        <div className="container mx-auto px-4 max-w-[1400px]">
          <Projects />
        </div>
      </main>
    </>
  )
}
