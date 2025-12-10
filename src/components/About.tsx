'use client';

import { Shield, FileCheck, Leaf } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade MPC/HSM custody with multi-signature controls',
    },
    {
      icon: FileCheck,
      title: 'Compliance',
      description: 'Built-in regulatory compliance and audit-ready reporting',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'ESG and carbon credit integration for sustainable treasury operations',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white section-margin relative bg-texture bg-animated-gradient floating-shapes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Enterprise-grade digital asset management, seamless integration with existing systems, 
            and ESG and sustainability-ready infrastructure for modern corporate treasury teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const delayClass = index === 0 ? 'fade-in-delay-1' : index === 1 ? 'fade-in-delay-2' : 'fade-in-delay-3';
            return (
              <div key={feature.title} className={`text-center ${delayClass}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2F2F2F] rounded-card mb-4">
                  <Icon className="w-8 h-8 text-green-accent" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-charcoal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

