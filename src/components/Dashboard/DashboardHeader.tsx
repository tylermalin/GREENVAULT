'use client';

import { useState } from 'react';
import { Menu, X, User, ChevronDown } from 'lucide-react';

export default function DashboardHeader() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Dashboard', 'Portfolio', 'Transactions', 'ESG Assets', 'Reports', 'Settings'];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-heading font-bold text-primary-700">
                Greenstone Vault
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item === 'Dashboard'
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-slate-600 hover:text-primary-700 hover:bg-slate-50'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-50 transition-colors"
              aria-label="User menu"
              aria-expanded={isProfileOpen}
            >
              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <ChevronDown className="w-4 h-4 text-slate-600 hidden md:block" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Profile Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                  Preferences
                </button>
                <hr className="my-2 border-slate-200" />
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-50">
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-50"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  className={`px-4 py-2 rounded-lg text-left font-medium ${
                    item === 'Dashboard'
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

