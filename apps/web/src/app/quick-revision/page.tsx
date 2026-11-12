import React from 'react';
import Link from 'next/link';
import { FaBolt, FaArrowRight } from 'react-icons/fa';
import { getQuickRevisionTopics } from '@/lib/content';
import { GitHubSourceLink } from '@/components/GitHubSourceLink';

export const metadata = {
  title: 'Quick Revision Sheets | JavaScript Lab',
  description: 'High-density JavaScript revision sheets covering Promises, Closures, "this" keyword, React performance hooks, and Data Structures.',
};

export default function QuickRevisionIndexPage() {
  const topics = getQuickRevisionTopics();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-4">
          <FaBolt className="w-3.5 h-3.5" /> High-Density Sheets
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          Quick Revision Notes
        </h1>
        <p className="text-base text-neutral-400 leading-relaxed">
          Concise, high-impact reference sheets for quick review before your interview: Promises, Closures, &quot;this&quot; scoping, Set & Map, and React performance hooks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/60 transition group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-3 font-mono">
                <span className="px-2 py-0.5 rounded bg-neutral-800 text-yellow-400 font-semibold border border-neutral-700">
                  Revision
                </span>
                <span>{(item.size / 1024).toFixed(1)} KB</span>
              </div>
              <h2 className="text-base font-bold text-neutral-100 group-hover:text-yellow-300 transition mb-3">
                <Link href={`/quick-revision/${item.slug}`} className="hover:underline">
                  {item.title}
                </Link>
              </h2>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
              <Link
                href={`/quick-revision/${item.slug}`}
                className="text-xs font-semibold text-yellow-400 hover:text-yellow-300 flex items-center gap-1"
              >
                Read Sheet <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
              <GitHubSourceLink url={item.githubUrl} label="Raw Code" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
