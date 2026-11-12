'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaSearch, FaBars, FaTimes, FaBook, FaLaptopCode, FaCode, FaBolt, FaTerminal } from 'react-icons/fa';
import { SearchModal } from './SearchModal';

interface NavbarProps {
  searchItems?: Array<{
    title: string;
    url: string;
    category: string;
    type: 'masterbook' | 'problem' | 'dsa' | 'revision';
    badge?: string;
  }>;
}

export const Navbar: React.FC<NavbarProps> = ({ searchItems = [] }) => {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Global keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Masterbook', href: '/masterbook', icon: <FaBook className="w-3.5 h-3.5" /> },
    { name: 'Interview Arena', href: '/problems', icon: <FaLaptopCode className="w-3.5 h-3.5" /> },
    { name: 'Striver DSA', href: '/dsa', icon: <FaCode className="w-3.5 h-3.5" /> },
    { name: 'Quick Revision', href: '/quick-revision', icon: <FaBolt className="w-3.5 h-3.5" /> },
    { name: 'Playground', href: '/playground', icon: <FaTerminal className="w-3.5 h-3.5" /> },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-[#0d1117]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-300 flex items-center justify-center font-black text-neutral-950 text-base shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                JL
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  JavaScript <span className="text-amber-400">Lab</span>
                </span>
                <span className="text-[10px] text-neutral-400 font-mono tracking-wider -mt-1">
                  javascript.asharlabs.stream
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = Boolean(pathname && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      isActive
                        ? 'bg-neutral-800 text-amber-400 font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
                    }`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Controls: Search & GitHub */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700 transition text-xs shadow-inner"
            >
              <FaSearch className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-neutral-800 text-neutral-400 rounded border border-neutral-700">
                ⌘K
              </kbd>
            </button>

            {/* GitHub Repo */}
            <a
              href="https://github.com/Asharalikhan4/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Repository"
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
            >
              {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-900"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        items={searchItems}
      />
    </>
  );
};
