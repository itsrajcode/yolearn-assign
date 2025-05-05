"use client";
import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { StartedButton } from './startedButton';
import Image from 'next/image';
import logo from './../../public/logo.png';



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const menuItems = [
    {
      id: 'teachers',
      label: 'For Teachers',
      hasDropdown: true
    },
    {
      id: 'resources',
      label: 'Resources',
      hasDropdown: true
    },
    {
      id: 'about',
      label: 'About Us',
      hasDropdown: true
    }
  ];

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              className="block w-auto"
              src="/logo.png"
              alt="Workflow"
              width={100}
              height={100}
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map(item => (
              <div key={item.id} className="relative">
                <button className="group flex items-center text-gray-900 hover:text-emerald-700 px-3 py-2 text-sm font-medium">
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown size={16} className="ml-1 text-gray-500 group-hover:text-emerald-700" />
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <StartedButton
              text="Login" 
              variant="tertiary"
            />
            <StartedButton 
              text="Get started for free" 
              icon={<ArrowRight size={16} />}
              variant="primary"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center justify-between text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={16} className="text-gray-500" />}
              </a>
            ))}
            <div className="mt-4 space-y-2 px-3">
              <StartedButton 
                text="Login" 
                variant="tertiary"
                className="w-full justify-center"
              />
              <startedButton
                text="Get started for free" 
                icon={<ArrowRight size={16} />}
                variant="primary"
                className="w-full justify-center"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}