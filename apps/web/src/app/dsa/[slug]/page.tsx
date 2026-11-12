import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaCode, FaArrowLeft } from 'react-icons/fa';
import { getDsaProblems, getDsaProblemBySlug } from '@/lib/content';
import { GitHubSourceLink } from '@/components/GitHubSourceLink';
import { MonacoRunner } from '@/components/MonacoRunner';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const problems = getDsaProblems();
  return problems.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const problem = getDsaProblemBySlug(params.slug);
  if (!problem) return { title: 'Problem Not Found' };
  return {
    title: `${problem.title} (Striver DSA in JS) | JavaScript Lab`,
    description: problem.problemStatement
      ? problem.problemStatement
      : `JavaScript implementation of ${problem.title}.`,
  };
}

export default function SingleDsaPage({ params }: PageProps) {
  const problem = getDsaProblemBySlug(params.slug);

  if (!problem) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
        <Link
          href="/dsa"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition"
        >
          <FaArrowLeft className="w-3 h-3" /> Back to Striver Sheet
        </Link>
        <GitHubSourceLink url={problem.githubUrl} />
      </div>

      {/* Header */}
      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-2.5 py-0.5 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 font-bold">
            {problem.category}
          </span>
          {problem.subCategory && (
            <span className="px-2.5 py-0.5 rounded-lg bg-neutral-900 text-neutral-400 border border-neutral-800">
              {problem.subCategory}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          {problem.title}
        </h1>

        {problem.problemStatement && (
          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-sm text-neutral-300 leading-relaxed">
            <strong className="text-emerald-400 block mb-1">Problem Statement:</strong>
            {problem.problemStatement}
          </div>
        )}
      </div>

      {/* Code Runner */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-neutral-100 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            JavaScript Solution & Complexity Analysis
          </h2>
          <span className="text-xs text-neutral-400 font-mono">Run & test in browser</span>
        </div>

        <MonacoRunner initialCode={problem.code} height="540px" />
      </div>
    </div>
  );
}
