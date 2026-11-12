import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaLaptopCode, FaArrowLeft, FaExternalLinkAlt, FaBuilding, FaTag } from 'react-icons/fa';
import { getProblems, getProblemBySlug } from '@/lib/content';
import { CompanyBadge } from '@/components/CompanyBadge';
import { GitHubSourceLink } from '@/components/GitHubSourceLink';
import { MonacoRunner } from '@/components/MonacoRunner';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const problems = getProblems();
  return problems.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const problem = getProblemBySlug(params.slug);
  if (!problem) return { title: 'Problem Not Found' };
  return {
    title: `${problem.title} | JavaScript Lab`,
    description: problem.description
      ? problem.description.slice(0, 160)
      : `Solve ${problem.title} with interactive code editor.`,
  };
}

export default function SingleProblemPage({ params }: PageProps) {
  const problem = getProblemBySlug(params.slug);

  if (!problem) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Top Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
        <Link
          href="/problems"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition"
        >
          <FaArrowLeft className="w-3 h-3" /> Back to Problem Library
        </Link>
        <GitHubSourceLink url={problem.githubUrl} />
      </div>

      {/* Problem Header */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-neutral-800 text-amber-400 border border-neutral-700">
            {problem.level}
          </span>
          {problem.companies.map((c) => (
            <CompanyBadge key={c} company={c} />
          ))}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-neutral-300 bg-neutral-900 border border-neutral-800">
            <FaTag className="w-2.5 h-2.5 text-neutral-500" /> {problem.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          {problem.title}
        </h1>

        {problem.relatedLink && (
          <div className="text-xs text-neutral-400">
            Reference Discussion:{' '}
            <a
              href={problem.relatedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline inline-flex items-center gap-1"
            >
              LeetCode / Discussion Link <FaExternalLinkAlt className="w-2.5 h-2.5" />
            </a>
          </div>
        )}
      </div>

      {/* Problem Statement Box */}
      {problem.description && (
        <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3 mb-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-200">
            Problem Description & Specifications
          </h2>
          <pre className="whitespace-pre-wrap font-sans text-sm text-neutral-300 leading-relaxed">
            {problem.description}
          </pre>
        </div>
      )}

      {/* Live Interactive Code Playground */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-neutral-100 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            Implementation & Test Harness
          </h2>
          <span className="text-xs text-neutral-400 font-mono">
            Editable Monaco Runner
          </span>
        </div>

        <MonacoRunner initialCode={problem.code} height="520px" />
      </div>
    </div>
  );
}
