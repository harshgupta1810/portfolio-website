'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((scrollTop / scrollHeight) * 100);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        <nav className="flex space-x-4">
          <a href="#home" className="text-primary hover:text-secondary">Home</a>
          <a href="#about" className="text-primary hover:text-secondary">About</a>
          <a href="#projects" className="text-primary hover:text-secondary">Projects</a>
          <a href="#contact" className="text-primary hover:text-secondary">Contact</a>
        </nav>
        <button className="bg-primary text-background px-4 py-2 rounded hover:bg-secondary">
          Download Resume
        </button>
      </div>
      <div className="h-1 bg-highlight" style={{ width: `${scrollProgress}%` }} />
    </header>
  );
}
