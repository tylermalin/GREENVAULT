'use client';

import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-charcoal text-white overflow-hidden section-padding">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Greenstone Vault – Your Enterprise Digital Asset Treasury
            </h1>
            <p className="text-xl sm:text-2xl text-light-gray mb-8 leading-relaxed">
              Secure, transparent, and connected. Manage digital assets and alternative investments alongside the tools you use every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2 group" aria-label="Schedule a demo">
                <Calendar className="w-5 h-5" />
                <span>Schedule a Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary" aria-label="Contact sales">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Hero Visual - Vault Image */}
          <div className="relative">
            <div className="relative rounded-card overflow-hidden shadow-card">
              <Image
                src="/VALUT.png"
                alt="Greenstone Vault"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

