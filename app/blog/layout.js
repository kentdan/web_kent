'use client';

import { Suspense } from "react";


export default async function LayoutBlog({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <main className="pt-12 pb-24">
          {children}
        </main>
      </div>
    </div>
  );
}
