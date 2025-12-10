'use client';

import { 
  TrendingUp, 
  MessageSquare, 
  Leaf, 
  Shield, 
  CreditCard, 
  BarChart, 
  Database 
} from 'lucide-react';

export default function IntegrationStack() {
  const integrations = [
    {
      category: 'Market Data & Trading',
      icon: TrendingUp,
      items: ['Bloomberg', 'Refinitiv', 'Coinbase', 'Kraken'],
    },
    {
      category: 'Collaboration & Workflow',
      icon: MessageSquare,
      items: ['Slack', 'Microsoft Teams', 'DocuSign'],
    },
    {
      category: 'ESG & Sustainability',
      icon: Leaf,
      items: ['Verra', 'Gold Standard', 'Climate Action Reserve'],
    },
    {
      category: 'Compliance & Audit',
      icon: Shield,
      items: ['Workiva', 'Chainalysis', 'Elliptic'],
    },
    {
      category: 'Banking & Payments',
      icon: CreditCard,
      items: ['SWIFT', 'ACH', 'Fedwire'],
    },
    {
      category: 'Treasury Management',
      icon: BarChart,
      items: ['Kyriba', 'Reval', 'GTreasury'],
    },
    {
      category: 'ERP & Accounting',
      icon: Database,
      items: ['SAP', 'NetSuite', 'Dynamics', 'QuickBooks', 'Xero'],
    },
  ];

  return (
    <section id="integrations" className="section-padding bg-white section-margin relative bg-texture bg-animated-gradient floating-shapes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-4">
            Connect Your Digital Asset Treasury to the Tools You Use Every Day
          </h2>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Greenstone Vault integrates with the systems your teams already use, 
            streamlining operations and enhancing visibility.
          </p>
        </div>

        {/* Integration Flow Diagram */}
        <div className="mb-12">
          <div className="bg-[#2F2F2F] rounded-card p-8 border border-[#333333]">
            <div className="flex flex-col items-center">
              {/* Central Vault */}
              <div className="bg-charcoal rounded-card p-6 shadow-card border-2 border-green-accent mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center">
                    <span className="text-charcoal font-bold text-xl">GV</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white">Greenstone Vault</h3>
                    <p className="text-sm text-light-gray">Digital Asset Treasury</p>
                  </div>
                </div>
              </div>

              {/* Integration Categories */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {integrations.map((integration, idx) => {
                  const Icon = integration.icon;
                  return (
                    <div key={integration.category} className="relative">
                      {/* Connection Line */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-green-accent/50" />
                      
                      <div className="bg-white rounded-card p-4 border border-light-gray shadow-card hover:shadow-card-hover transition-shadow">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 bg-[#2F2F2F] rounded-lg flex items-center justify-center mb-2">
                            <Icon className="w-5 h-5 text-green-accent" />
                          </div>
                          <h4 className="text-sm font-semibold text-charcoal mb-2">
                            {integration.category}
                          </h4>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {integration.items.slice(0, 2).map((item) => (
                              <span
                                key={item}
                                className="text-xs px-2 py-1 bg-[#F5F5F5] rounded text-light-gray"
                              >
                                {item}
                              </span>
                            ))}
                            {integration.items.length > 2 && (
                              <span className="text-xs px-2 py-1 bg-[#F5F5F5] rounded text-light-gray">
                                +{integration.items.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Integration List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) => {
            const Icon = integration.icon;
            return (
              <div key={integration.category} className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-[#2F2F2F] rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-green-accent" />
                  </div>
                  <h3 className="font-semibold text-charcoal">{integration.category}</h3>
                </div>
                <ul className="space-y-2">
                  {integration.items.map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-sm text-charcoal">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

