'use client';

import { Calendar, ArrowRight, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative section-padding bg-charcoal text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Dashboard Illustration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-lg transform rotate-12" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white rounded-lg transform -rotate-12" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
          Start Managing Your Digital Assets with Confidence
        </h2>
        <p className="text-xl sm:text-2xl text-light-gray mb-10 leading-relaxed">
          Book a demo today and see how Greenstone Vault can bring security, transparency, 
          and ESG integration to your corporate treasury.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary flex items-center justify-center space-x-2 group" aria-label="Schedule a demo">
            <Calendar className="w-5 h-5" />
            <span>Schedule a Demo</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-secondary flex items-center justify-center space-x-2" aria-label="Contact sales">
            <Mail className="w-5 h-5" />
            <span>Contact Sales</span>
          </button>
        </div>
      </div>
    </section>
  );
}

