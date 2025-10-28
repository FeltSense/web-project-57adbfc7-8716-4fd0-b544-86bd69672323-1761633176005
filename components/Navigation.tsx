'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="text-white text-2xl font-bold tracking-tight">PulseCore Fitness Studio</span>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-8">
          <a href="#home" className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-md text-sm font-medium transition duration-300">
            Home
          </a>
          <a href="#services" className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-md text-sm font-medium transition duration-300">
            Services
          </a>
          <a href="#pricing" className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-md text-sm font-medium transition duration-300">
            Pricing
          </a>
          <a href="#contact" className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-md text-sm font-medium transition duration-300">
            Contact
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <button className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-md">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
  );
}