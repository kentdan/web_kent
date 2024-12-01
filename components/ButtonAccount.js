'use client';

import { useRef } from 'react';
import Link from 'next/link';

export default function ButtonAccount() {
  const buttonRef = useRef(null);

  return (
    <Link href="/dashboard">
      <button
        ref={buttonRef}
        className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200"
      >
        <span>Dashboard</span>
      </button>
    </Link>
  );
}
