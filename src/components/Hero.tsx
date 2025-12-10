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
          <div className="fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
              The Enterprise Digital Asset Treasury
            </h1>
            <p className="text-lg sm:text-xl text-green-accent mb-4 font-medium fade-in-delay-1">
              End-to-end custody, reporting, and ESG integration for modern finance teams.
            </p>
            <p className="text-base sm:text-lg text-light-gray mb-8 leading-relaxed fade-in-delay-1">
              Greenstone Vault centralizes digital assets and alternative investments into one secure, compliant, and fully integrated treasury platform—built for real-time visibility, audit readiness, and ESG-aligned financial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 fade-in-delay-2">
              <a 
                href="https://calendar.app.google/NMUpSnNEPRjJ4JED6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary btn-micro flex items-center justify-center space-x-2 group" 
                aria-label="Schedule a demo"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Schedule a Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="mailto:Tyler@beneficial.technology" 
                className="btn-secondary btn-micro" 
                aria-label="Contact sales"
              >
                Contact Sales
              </a>
            </div>
          </div>

          {/* Hero Visual - Stone Green Image */}
          <div className="relative fade-in-delay-3">
            <div className="relative rounded-card overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <Image
                src="/stonegreen.png"
                alt="Greenstone Vault"
                width={800}
                height={600}
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105 image-float"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

