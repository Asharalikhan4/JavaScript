import React from 'react';
import { FaCode } from 'react-icons/fa';
import { getDsaProblems } from '@/lib/content';
import { DsaClient } from '@/components/DsaClient';

export const metadata = {
  title: 'Striver A2Z Sheet (DSA in JavaScript) | JavaScript Lab',
  description: 'Complete Striver A2Z DSA Sheet implemented in pure JavaScript with multiple approaches (Brute Force, Better, Optimal) and complexity analysis.',
};

export default function DsaIndexPage() {
  const problems = getDsaProblems();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
          <FaCode className="w-3.5 h-3.5" /> Striver A2Z Curriculum
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Data Structures & Algorithms in JavaScript
        </h1>
        <p className="text-base text-neutral-400 leading-relaxed">
          Striver&apos;s popular A2Z DSA sheet implemented from scratch in pure JavaScript. Compare brute-force, better, and optimal solutions with Big-O time and space complexity annotations.
        </p>
      </div>

      <DsaClient initialProblems={problems} />
    </div>
  );
}
