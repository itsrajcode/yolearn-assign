"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('teachers');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? 
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg> :
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            }
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#students" 
            className={`px-3 py-2 text-sm font-medium ${activeLink === 'students' ? 'border-b-2 border-white' : ''}`}
            onClick={() => setActiveLink('students')}
          >
            For Students
          </a>
          <a 
            href="#teachers" 
            className={`px-3 py-2 text-sm font-medium ${activeLink === 'teachers' ? 'border-b-2 border-white' : ''}`}
            onClick={() => setActiveLink('teachers')}
          >
            For Teachers
          </a>
          <a 
            href="#schools" 
            className={`px-3 py-2 text-sm font-medium ${activeLink === 'schools' ? 'border-b-2 border-white' : ''}`}
            onClick={() => setActiveLink('schools')}
          >
            For Schools
          </a>
          <a 
            href="#organizations" 
            className={`px-3 py-2 text-sm font-medium ${activeLink === 'organizations' ? 'border-b-2 border-white' : ''}`}
            onClick={() => setActiveLink('organizations')}
          >
            For Organizations
          </a>
        </div>

        {/* Language Selection */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button 
              className="flex items-center space-x-1 focus:outline-none"
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
              <span className="w-6 h-6 flex items-center justify-center rounded-full overflow-hidden">
                🌎
              </span>
              <span className="text-sm font-medium">EN</span>
              <ChevronDown size={16} />
            </button>
            
            {/* Language Dropdown */}
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">English</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Español</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Français</a>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-1 focus:outline-none">
              <span className="w-6 h-6 flex items-center justify-center rounded-full overflow-hidden">
              🇮🇳
              </span>
              <span className="text-sm font-medium">IND</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#students" className="block px-3 py-2 text-base font-medium hover:bg-blue-700 rounded-md">
              For Students
            </a>
            <a href="#teachers" className="block px-3 py-2 text-base font-medium hover:bg-blue-700 rounded-md">
              For Teachers
            </a>
            <a href="#schools" className="block px-3 py-2 text-base font-medium hover:bg-blue-700 rounded-md">
              For Schools
            </a>
            <a href="#organizations" className="block px-3 py-2 text-base font-medium hover:bg-blue-700 rounded-md">
              For Organizations
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}