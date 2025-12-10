'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass shadow-lg border-b border-white/20' 
          : 'bg-white/80 backdrop-blur-md border-b border-light-gray/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Much Larger */}
          <Link 
            href="/" 
            className="flex items-center logo-hover fade-in"
          >
            <Image
              src="/greenstone.png"
              alt="Greenstone Vault"
              width={240}
              height={80}
              className="h-12 md:h-16 w-auto transition-all duration-300"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 fade-in-delay-1">
            <Link 
              href="#about" 
              className="nav-link text-charcoal hover:text-green-accent font-medium text-sm md:text-base"
            >
              About
            </Link>
            <Link 
              href="#product" 
              className="nav-link text-charcoal hover:text-green-accent font-medium text-sm md:text-base"
            >
              Product
            </Link>
            <Link 
              href="#integrations" 
              className="nav-link text-charcoal hover:text-green-accent font-medium text-sm md:text-base"
            >
              Integrations
            </Link>
            <Link 
              href="#faq" 
              className="nav-link text-charcoal hover:text-green-accent font-medium text-sm md:text-base"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 fade-in-delay-2">
            <a 
              href="mailto:Tyler@beneficial.technology" 
              className="btn-secondary btn-micro text-sm py-2.5 px-5"
            >
              Contact Sales
            </a>
            <a 
              href="https://calendar.app.google/NMUpSnNEPRjJ4JED6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary btn-micro text-sm py-2.5 px-5"
            >
              Schedule Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors">
            <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

