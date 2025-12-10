'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Can it connect to ERP/accounting systems?',
    answer: 'Yes, Greenstone Vault integrates seamlessly with major ERP and accounting systems including SAP, NetSuite, Microsoft Dynamics, QuickBooks, and Xero. Real-time synchronization ensures your financial records are always up-to-date with your digital asset holdings.',
  },
  {
    question: 'How secure is Greenstone Vault?',
    answer: 'Greenstone Vault uses enterprise-grade security including Multi-Party Computation (MPC) and Hardware Security Modules (HSM) for key management. All transactions require multi-signature approval, and we maintain SOC 2 Type II compliance. Your assets are protected with bank-level security standards.',
  },
  {
    question: 'How does it support ESG/sustainability assets?',
    answer: 'Greenstone Vault has native support for tokenized carbon credits and ESG assets. You can track verification status, vintage, registry information, and impact scores. Integration with major registries like Verra and Gold Standard ensures authenticity and compliance with carbon credit standards.',
  },
  {
    question: 'Can auditors/regulators access it?',
    answer: 'Yes, Greenstone Vault provides comprehensive audit trails and reporting capabilities. Authorized auditors and regulators can be granted read-only access to view transaction history, compliance reports, and asset holdings. All activities are logged and timestamped for regulatory compliance.',
  },
  {
    question: 'Can treasury rules and rebalancing be automated?',
    answer: 'Absolutely. Greenstone Vault includes a powerful policy engine that allows you to define treasury rules, rebalancing thresholds, and automated workflows. Set up alerts for concentration limits, automate rebalancing based on allocation targets, and enforce approval workflows for transactions above certain thresholds.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white section-margin relative bg-texture bg-animated-gradient floating-shapes">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-charcoal">
            Everything you need to know about Greenstone Vault
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-light-gray rounded-card overflow-hidden transition-all hover:shadow-card"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#F5F5F5] transition-colors"
              >
                <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-light-gray flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-light-gray flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-charcoal leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

