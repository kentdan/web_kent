'use client';

import { Suspense } from "react";

export default function LayoutBlog({ children }) {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[2400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <main className="pt-12 pb-24 w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
