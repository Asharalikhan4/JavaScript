'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch, FaTimes, FaBook, FaCode, FaLaptopCode, FaBolt } from 'react-icons/fa';

interface SearchResult {
  title: string;
  url: string;
  category: string;
  type: 'masterbook' | 'problem' | 'dsa' | 'revision';
  badge?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: SearchResult[];
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, items = [] }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  // Reset state on open/close
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const filtered = query.trim() === ''
    ? items.slice(0, 8)
    : items
        .filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          (item.badge && item.badge.toLowerCase().includes(query.toLowerCase()))
        )
        .slice(0, 12);

  // Keyboard shortcut listener for Esc, Enter, Arrow keys
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter') {
        if (filtered[selectedIndex]) {
          router.push(filtered[selectedIndex].url);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, filtered, selectedIndex, router]);

  if (!isOpen) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'masterbook':
        return <FaBook className="w-3.5 h-3.5 text-blue-400" />;
      case 'problem':
        return <FaLaptopCode className="w-3.5 h-3.5 text-orange-400" />;
      case 'dsa':
        return <FaCode className="w-3.5 h-3.5 text-emerald-400" />;
      case 'revision':
        return <FaBolt className="w-3.5 h-3.5 text-yellow-400" />;
      default:
        return <FaSearch className="w-3.5 h-3.5 text-neutral-400" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-4 bg-black/75 backdrop-blur-sm animate-fadeIn cursor-pointer"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-neutral-700 bg-neutral-900 shadow-2xl overflow-hidden flex flex-col cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-800 bg-neutral-950/80">
          <FaSearch className="w-4 h-4 text-neutral-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search concepts, polyfills, DSA, Swiggy, Uber, closures... (Cmd + K)"
            autoFocus
            className="w-full bg-transparent text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none"
          />

          <div className="flex items-center gap-2 shrink-0 ml-2">
            {query && (
              <button
                onClick={() => setQuery('')}
                title="Clear input"
                className="text-neutral-500 hover:text-neutral-300 p-1 rounded transition"
              >
                <FaTimes className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={onClose}
              title="Close search modal (Esc)"
              className="px-2 py-0.5 text-[10px] font-mono bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 rounded border border-neutral-700 transition"
            >
              ESC
            </button>

            <button
              onClick={onClose}
              title="Close search modal"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-sm text-neutral-500">
              No matching questions or topics found for &quot;{query}&quot;.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setSelectedIndex(idx)}
                onClick={() => {
                  router.push(item.url);
                  onClose();
                }}
                className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition ${
                  selectedIndex === idx
                    ? 'bg-neutral-800 text-white'
                    : 'text-neutral-300 hover:bg-neutral-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                    {getIcon(item.type)}
                  </div>
                  <div>
                    <div className="text-xs font-semibold">{item.title}</div>
                    <div className="text-[11px] text-neutral-400">{item.category}</div>
                  </div>
                </div>
                {item.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-neutral-950 text-neutral-300 border border-neutral-800">
                    {item.badge}
                  </span>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between text-[11px] text-neutral-500">
          <div>Navigate with ↑ ↓ and Enter • Click outside or ESC to close</div>
          <div>JavaScript Lab • javascript.asharlabs.stream</div>
        </div>
      </div>
    </div>
  );
};
