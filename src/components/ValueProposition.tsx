'use client';

import { Shield, Eye, Leaf } from 'lucide-react';

export default function ValueProposition() {
  const values = [
    {
      icon: Shield,
      title: 'Security & Risk Management',
      description: 'Multi-party computation (MPC) and hardware security modules (HSM) ensure your digital assets are protected with enterprise-grade security. Automated risk monitoring and treasury policy enforcement reduce operational risk.',
    },
    {
      icon: Eye,
      title: 'Transparency & Compliance',
      description: 'Real-time visibility into all holdings, transactions, and compliance status. Automated reporting and audit trails ensure you\'re always ready for regulatory scrutiny and board reviews.',
    },
    {
      icon: Leaf,
      title: 'Sustainability Integration',
      description: 'Native support for ESG assets and carbon credits with verification tracking. Integrate sustainability goals directly into your treasury operations with impact scoring and reporting.',
    },
  ];

  return (
    <section className="section-padding bg-white section-margin relative bg-texture grid-pattern floating-shapes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-4">
            Built for Enterprise Treasury Teams
          </h2>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Three core pillars that make Greenstone Vault the trusted choice for digital asset treasury management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="card hover:shadow-card-hover transition-shadow">
                <div className="w-16 h-16 bg-[#2F2F2F] rounded-card flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-green-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

