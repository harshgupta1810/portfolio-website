'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to update scroll progress
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((scrollTop / scrollHeight) * 100);
    };

    // Attach scroll event listener
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-lg">
      {/* Navigation bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <nav className="flex space-x-6">
          <a href="#home" className="text-primary hover:text-secondary transition-all duration-300">Home</a>
          <a href="#about" className="text-primary hover:text-secondary transition-all duration-300">About</a>
          <a href="#experience" className="text-primary hover:text-secondary transition-all duration-300">Experience</a>
          <a href="#projects" className="text-primary hover:text-secondary transition-all duration-300">Projects</a>
          <a href="#contact" className="text-primary hover:text-secondary transition-all duration-300">Contact</a>
        </nav>

        {/* Download Resume Button */}
        <a href="/Harsh_Gupta_Resume.docx" target="_blank" rel="noopener noreferrer" className="bg-primary text-background px-6 py-3 rounded hover:bg-secondary transition-colors duration-300">
          Download Resume
        </a>
      </div>

      {/* Scroll progress bar */}
      <div className="h-1 bg-highlight" style={{ width: `${scrollProgress}%` }} />
    </header>
  );
}
