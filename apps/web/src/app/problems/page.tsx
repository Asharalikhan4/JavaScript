import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { getProblems, getAllCompanies, getAllCategories } from '@/lib/content';
import { ProblemsClient } from '@/components/ProblemsClient';

export const metadata = {
  title: 'Interview & Machine Coding Arena | JavaScript Lab',
  description: 'Practical interview machine coding questions asked at Swiggy, Uber, Zeta, Birdeye, ThoughtSpot, and Abhibus for SDE1, SDE2, and SSE roles.',
};

export default function ProblemsIndexPage() {
  const problems = getProblems();
  const companies = getAllCompanies();
  const categories = getAllCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-4">
          <FaLaptopCode className="w-3.5 h-3.5" /> learnersbucket.com Format
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Interview & Machine Coding Arena
        </h1>
        <p className="text-base text-neutral-400 leading-relaxed">
          Real-world coding questions, polyfills, SDK architectures, and UI component tasks calibrated for SDE-1, SDE-2, and Senior Software Engineer technical rounds.
        </p>
      </div>

      <ProblemsClient
        initialProblems={problems}
        allCompanies={companies}
        allCategories={categories}
      />
    </div>
  );
}
