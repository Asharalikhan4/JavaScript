'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaLaptopCode, FaFilter, FaSearch, FaBuilding } from 'react-icons/fa';
import { ProblemItem } from '@/lib/content';
import { CompanyBadge } from '@/components/CompanyBadge';
import { GitHubSourceLink } from '@/components/GitHubSourceLink';

interface ProblemsClientProps {
  initialProblems: ProblemItem[];
  allCompanies: string[];
  allCategories: string[];
}

export const ProblemsClient: React.FC<ProblemsClientProps> = ({
  initialProblems,
  allCompanies,
  allCategories,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('ALL');
  const [selectedCompany, setSelectedCompany] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const levels = ['ALL', 'SDE1', 'SDE2', 'SSE'];

  const filtered = initialProblems.filter((p) => {
    if (selectedLevel !== 'ALL' && p.level !== selectedLevel) return false;
    if (selectedCompany !== 'ALL' && !p.companies.includes(selectedCompany)) return false;
    if (selectedCategory !== 'ALL' && p.category !== selectedCategory) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchComp = p.companies.some((c) => c.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchComp) return false;
    }
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Filters Section */}
      <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative w-full sm:w-96">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 w-3.5 h-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search problems by name or company..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-neutral-600"
            />
          </div>

          {/* Level Tabs */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto bg-neutral-950 p-1 rounded-xl border border-neutral-800 text-xs">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1 rounded-lg font-medium transition ${
                  selectedLevel === lvl
                    ? 'bg-amber-400 text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Company & Category Selectors */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-neutral-800/80 text-xs">
          <div className="flex items-center gap-2 text-neutral-400">
            <FaBuilding className="w-3.5 h-3.5 text-orange-400" />
            <span className="font-semibold">Company:</span>
            <select
              value={selectedCompany}
              onChange={(e) => setSelectedCompany(e.target.value)}
              className="bg-neutral-950 border border-neutral-800 text-neutral-200 rounded-lg px-2.5 py-1 text-xs focus:outline-none"
            >
              <option value="ALL">All Companies</option>
              {allCompanies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 text-neutral-400 ml-auto sm:ml-4">
            <FaFilter className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-neutral-950 border border-neutral-800 text-neutral-200 rounded-lg px-2.5 py-1 text-xs focus:outline-none"
            >
              <option value="ALL">All Categories</option>
              {allCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="text-neutral-500 font-mono text-xs ml-auto">
            Showing <span className="text-amber-400 font-bold">{filtered.length}</span> of {initialProblems.length}
          </div>
        </div>
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full p-12 text-center text-sm text-neutral-500 rounded-2xl border border-neutral-800 bg-neutral-900/20">
            No problems found matching your selected filters.
          </div>
        ) : (
          filtered.map((prob) => (
            <div
              key={prob.id}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-neutral-800 text-neutral-300 border border-neutral-700">
                    {prob.level}
                  </span>
                  {prob.companies.map((c) => (
                    <CompanyBadge key={c} company={c} />
                  ))}
                  <span className="text-[10px] text-neutral-400 ml-auto font-mono">
                    {prob.category}
                  </span>
                </div>

                <h3 className="font-bold text-neutral-100 text-base mb-2">
                  <Link href={`/problems/${prob.slug}`} className="hover:text-amber-400 transition">
                    {prob.title}
                  </Link>
                </h3>

                {prob.description ? (
                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                    {prob.description}
                  </p>
                ) : (
                  <p className="text-xs text-neutral-500 italic">
                    Machine coding challenge implementation and test cases.
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <Link
                  href={`/problems/${prob.slug}`}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition flex items-center gap-1"
                >
                  Solve & Run →
                </Link>
                <GitHubSourceLink url={prob.githubUrl} label="Source" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
