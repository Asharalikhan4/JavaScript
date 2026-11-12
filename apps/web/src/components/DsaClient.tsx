'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCode, FaCheck, FaSearch } from 'react-icons/fa';
import { DsaItem } from '@/lib/content';
import { GitHubSourceLink } from '@/components/GitHubSourceLink';

interface DsaClientProps {
  initialProblems: DsaItem[];
}

export const DsaClient: React.FC<DsaClientProps> = ({ initialProblems }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [completedIds, setCompletedIds] = useState<Record<string, boolean>>({});

  // Load completed items from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('dsa_completed');
      if (stored) {
        setCompletedIds(JSON.parse(stored));
      }
    } catch {}
  }, []);

  const toggleComplete = (id: string) => {
    const next = { ...completedIds, [id]: !completedIds[id] };
    setCompletedIds(next);
    try {
      localStorage.setItem('dsa_completed', JSON.stringify(next));
    } catch {}
  };

  // Group by category
  const categories = Array.from(new Set(initialProblems.map((p) => p.category))).sort();

  const filtered = initialProblems.filter((p) => {
    if (selectedCategory !== 'ALL' && p.category !== selectedCategory) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      if (!p.title.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  const totalCompleted = Object.values(completedIds).filter(Boolean).length;
  const progressPercent = initialProblems.length > 0 ? Math.round((totalCompleted / initialProblems.length) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Progress & Stat Bar */}
      <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-white">Striver A2Z DSA Sheet Progress</h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Track completed problems in pure JavaScript with progressive complexity analysis.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-emerald-400">
              {totalCompleted} / {initialProblems.length} Solved ({progressPercent}%)
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-neutral-950 h-2.5 rounded-full overflow-hidden border border-neutral-800">
          <div
            className="bg-emerald-400 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-neutral-800/80">
          <div className="relative w-full sm:w-80">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 w-3.5 h-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Striver problems..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto max-w-full text-xs">
            <button
              onClick={() => setSelectedCategory('ALL')}
              className={`px-3 py-1 rounded-lg transition font-medium ${
                selectedCategory === 'ALL'
                  ? 'bg-emerald-400 text-neutral-950 font-bold'
                  : 'text-neutral-400 hover:text-white bg-neutral-950'
              }`}
            >
              All Topics
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg transition font-medium whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-emerald-400 text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-white bg-neutral-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Problems Table / List */}
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 overflow-hidden shadow-xl">
        <div className="divide-y divide-neutral-800/80">
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-sm text-neutral-500">
              No matching DSA problems found.
            </div>
          ) : (
            filtered.map((prob, idx) => {
              const isDone = Boolean(completedIds[prob.id]);
              return (
                <div
                  key={prob.id}
                  className={`p-4 flex items-center justify-between gap-4 transition ${
                    isDone ? 'bg-emerald-950/10' : 'hover:bg-neutral-800/40'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <button
                      onClick={() => toggleComplete(prob.id)}
                      title={isDone ? 'Mark as incomplete' : 'Mark as solved'}
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 transition ${
                        isDone
                          ? 'bg-emerald-500 border-emerald-400 text-neutral-950'
                          : 'border-neutral-700 bg-neutral-950 text-transparent hover:border-neutral-500'
                      }`}
                    >
                      <FaCheck className="w-3 h-3 stroke-[3]" />
                    </button>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/dsa/${prob.slug}`}
                          className={`text-sm font-semibold truncate hover:text-amber-400 transition ${
                            isDone ? 'text-neutral-400 line-through' : 'text-neutral-100'
                          }`}
                        >
                          {prob.title}
                        </Link>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-mono mt-0.5">
                        <span className="text-emerald-400/90">{prob.category}</span>
                        {prob.subCategory && (
                          <>
                            <span>/</span>
                            <span>{prob.subCategory}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      href={`/dsa/${prob.slug}`}
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition"
                    >
                      View Solution →
                    </Link>
                    <GitHubSourceLink url={prob.githubUrl} label="Code" />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
