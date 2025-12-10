'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/greenstone.png"
              alt="Greenstone Vault"
              width={180}
              height={60}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-charcoal hover:text-green-accent transition-colors font-medium">
              About
            </Link>
            <Link href="#product" className="text-charcoal hover:text-green-accent transition-colors font-medium">
              Product
            </Link>
            <Link href="#integrations" className="text-charcoal hover:text-green-accent transition-colors font-medium">
              Integrations
            </Link>
            <Link href="#faq" className="text-charcoal hover:text-green-accent transition-colors font-medium">
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary text-sm py-2 px-4">
              Contact Sales
            </button>
            <button className="btn-primary text-sm py-2 px-4">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

