import React from 'react';
import Link from 'next/link';
import {
  FaBook,
  FaLaptopCode,
  FaCode,
  FaArrowRight,
  FaCheckCircle,
  FaTerminal,
  FaBuilding,
  FaBolt,
} from 'react-icons/fa';
import {
  getMasterbookChapters,
  getProblems,
  getDsaProblems,
  getAllCompanies,
} from '@/lib/content';
import { CompanyBadge } from '@/components/CompanyBadge';
import { GitHubSourceLink } from '@/components/GitHubSourceLink';

export default function HomePage() {
  const masterbook = getMasterbookChapters();
  const problems = getProblems();
  const dsa = getDsaProblems();
  const companies = getAllCompanies();

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 border-b border-neutral-800/80 bg-gradient-to-b from-[#131720] via-[#0d1117] to-[#0d1117]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            JavaScript Lab • javascript.asharlabs.stream
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Master JavaScript & Frontend Engineering Interviews
          </h1>

          {/* <p className="mt-6 text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            The hybrid learning guide combining the deep conceptual clarity of{' '}
            <span className="text-neutral-200 font-semibold">javascript.info</span> with the real-world interview practice of{' '}
            <span className="text-neutral-200 font-semibold">learnersbucket.com</span>.
          </p> */}

          {/* Action buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/masterbook"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-neutral-950 font-bold text-sm hover:opacity-90 active:scale-95 transition shadow-lg shadow-amber-500/20"
            >
              <FaBook className="w-4 h-4" /> Start Reading Masterbook
            </Link>
            <Link
              href="/problems"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-semibold text-sm transition"
            >
              <FaLaptopCode className="w-4 h-4 text-orange-400" /> Solve Interview Problems
            </Link>
            <Link
              href="/playground"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 font-medium text-sm transition"
            >
              <FaTerminal className="w-4 h-4 text-emerald-400" /> Open Playground
            </Link>
          </div>

          {/* Stat counters */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-neutral-800/80">
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                {masterbook.length}+
              </div>
              <div className="text-xs text-neutral-400 font-medium mt-1">Handbook Chapters</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 font-mono">
                {problems.length}+
              </div>
              <div className="text-xs text-neutral-400 font-medium mt-1">Machine Coding Problems</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                {dsa.length}+
              </div>
              <div className="text-xs text-neutral-400 font-medium mt-1">Striver DSA in JS</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">
                {companies.length}+
              </div>
              <div className="text-xs text-neutral-400 font-medium mt-1">Company Problem Sets</div>
            </div>
          </div>
        </div>
      </section>

      {/* Track 1: The Masterbook */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              <FaBook className="w-3.5 h-3.5" /> javascript.info Style
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The JavaScript Interview Masterbook
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
              Deep-dive theoretical foundations: Execution Context, Event Loop, Closures, Scoping, and Advanced Web Architecture with intuitive mental models.
            </p>
          </div>
          <Link
            href="/masterbook"
            className="flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
          >
            Browse all chapters <FaArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {masterbook.slice(0, 6).map((chapter) => (
            <Link
              key={chapter.id}
              href={`/masterbook/${chapter.slug}`}
              className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/60 transition group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                  <span className="font-mono text-amber-400/90 font-semibold">Chapter {chapter.order}</span>
                  <span className="text-[11px] font-mono">{(chapter.size / 1024).toFixed(1)} KB</span>
                </div>
                <h3 className="font-bold text-neutral-100 group-hover:text-amber-300 transition text-sm mb-2 line-clamp-2">
                  {chapter.title}
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <span className="flex items-center gap-1">
                  <FaCheckCircle className="w-3 h-3 text-emerald-400" /> Concept Guide
                </span>
                <span className="text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Track 2: The Interview Arena */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-400 mb-2">
              <FaLaptopCode className="w-3.5 h-3.5" /> learnersbucket.com Style
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Company-Tagged Machine Coding & SDE Sets
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
              Practical problems asked in technical rounds at Swiggy, Uber, Zeta, Birdeye, ThoughtSpot, and Abhibus across SDE-1, SDE-2, and SSE tiers.
            </p>
          </div>
          <Link
            href="/problems"
            className="flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition"
          >
            View all {problems.length} problems <FaArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Company Quick Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs text-neutral-400 mr-2 font-medium">Filter by Company:</span>
          {companies.map((c) => (
            <Link key={c} href={`/problems?company=${encodeURIComponent(c)}`}>
              <CompanyBadge company={c} />
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.slice(0, 6).map((prob) => (
            <div
              key={prob.id}
              className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition flex flex-col justify-between"
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
                <h3 className="font-bold text-neutral-100 text-sm mb-2">
                  <Link href={`/problems/${prob.slug}`} className="hover:text-amber-400 transition">
                    {prob.title}
                  </Link>
                </h3>
                {prob.description && (
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {prob.description}
                  </p>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                <Link
                  href={`/problems/${prob.slug}`}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition flex items-center gap-1"
                >
                  Solve & Run →
                </Link>
                <GitHubSourceLink url={prob.githubUrl} label="Source" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Track 3: Striver A2Z Sheet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-neutral-900 to-neutral-900 border border-emerald-900/40 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <FaCode className="w-3.5 h-3.5" /> Striver A2Z Sheet
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Data Structures & Algorithms in Native JavaScript
              </h2>
              <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed">
                66+ DSA challenges written in clean modern JavaScript. Every problem breaks down multiple approaches with explicit Time & Space Complexity analysis: Brute Force $O(N^3) \rightarrow$ Better $O(N^2) \rightarrow$ Optimal $O(N)$.
              </p>
            </div>
            <Link
              href="/dsa"
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition shadow-lg shadow-emerald-500/20 whitespace-nowrap"
            >
              Open Striver DSA Tracker
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
