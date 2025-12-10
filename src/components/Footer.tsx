'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/greenstone.png"
              alt="Greenstone Vault"
              width={180}
              height={60}
              className="h-10 w-auto mb-4"
            />
            <p className="text-light-gray max-w-md">
              Enterprise-grade digital asset treasury platform. Secure, transparent, and connected.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-light-gray hover:text-green-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#product" className="text-light-gray hover:text-green-accent transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="#integrations" className="text-light-gray hover:text-green-accent transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-light-gray hover:text-green-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:sales@greenstonevault.com" className="text-light-gray hover:text-green-accent transition-colors">
                  sales@greenstonevault.com
                </a>
              </li>
              <li>
                <button className="text-light-gray hover:text-green-accent transition-colors text-left">
                  Schedule a Demo
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-gray text-sm">
            © {new Date().getFullYear()} Greenstone Vault. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-light-gray hover:text-green-accent transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-light-gray hover:text-green-accent transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

