'use client';

import { 
  Lock, 
  BarChart3, 
  Settings, 
  Layers, 
  FileText, 
  Zap,
  TrendingDown,
  Eye,
  TrendingUp,
  Leaf,
  Rocket
} from 'lucide-react';
import DashboardPreview from './DashboardPreview';

export default function Product() {
  const features = [
    { icon: Lock, title: 'Secure Custody', description: 'MPC/HSM' },
    { icon: BarChart3, title: 'Real-Time Dashboard', description: 'Live portfolio insights' },
    { icon: Settings, title: 'Treasury Policy Automation', description: 'Automated workflows' },
    { icon: Layers, title: 'Alternative Asset Integration', description: 'Multi-asset support' },
    { icon: FileText, title: 'Compliance & Reporting', description: 'Audit-ready reports' },
    { icon: Zap, title: 'Enterprise Scalability', description: 'Built for scale' },
  ];

  const benefits = [
    { icon: TrendingDown, text: 'Reduce risk' },
    { icon: Eye, text: 'Increase transparency' },
    { icon: TrendingUp, text: 'Optimize treasury' },
    { icon: Leaf, text: 'Support ESG goals' },
    { icon: Rocket, text: 'Future-proof operations' },
  ];

  return (
    <section id="product" className="section-padding bg-white section-margin relative bg-texture grid-pattern floating-shapes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-4">
            Greenstone Vault
          </h2>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            A comprehensive platform designed for enterprise treasury teams managing digital assets 
            and alternative investments.
          </p>
        </div>

        {/* Dashboard Preview - Full Width */}
        <div className="mb-16 fade-in-delay-1">
          <div className="bg-charcoal rounded-card shadow-card overflow-hidden border border-[#333333]">
            <div className="bg-[#2F2F2F] px-4 py-3 border-b border-[#333333]">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-accent" />
                <span className="ml-4 text-sm font-medium text-light-gray">Demo Dashboard</span>
              </div>
            </div>
            <div className="p-4 md:p-6 max-h-[700px] overflow-y-auto custom-scrollbar">
              <DashboardPreview />
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-12 fade-in-delay-2">
          <h3 className="text-2xl font-heading font-semibold text-charcoal mb-6 text-center">
            Key Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-start space-x-3 p-4 bg-white/95 backdrop-blur-sm rounded-card border border-light-gray shadow-card hover:shadow-card-hover transition-all">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#2F2F2F] rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-green-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">{feature.title}</h4>
                    <p className="text-sm text-charcoal">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Should I Care Callout */}
        <div className="bg-charcoal rounded-card p-6 md:p-8 border border-green-accent/30 fade-in-delay-3">
          <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-6 text-center">
            Why Should I Care?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.text} className="flex flex-col items-center text-center">
                  <Icon className="w-6 h-6 text-green-accent flex-shrink-0 mb-2" />
                  <span className="text-light-gray text-sm">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

