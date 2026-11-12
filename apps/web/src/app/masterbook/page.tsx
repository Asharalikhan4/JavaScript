import React from 'react';
import Link from 'next/link';
import { FaBook, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { getMasterbookChapters } from '@/lib/content';
import { GitHubSourceLink } from '@/components/GitHubSourceLink';

export const metadata = {
  title: 'JavaScript Interview Masterbook | JavaScript Lab',
  description: 'Deep-dive theoretical guide covering JavaScript runtime mechanics, event loop, closures, scoping, and advanced web engineering.',
};

export default function MasterbookIndexPage() {
  const chapters = getMasterbookChapters();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20 mb-4">
          <FaBook className="w-3.5 h-3.5" /> javascript.info Format
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
          The JavaScript Interview Masterbook
        </h1>
        <p className="text-base text-neutral-400 leading-relaxed">
          A systematic handbook covering JavaScript runtime mechanics, lexical scoping, closures, this-binding, asynchronous execution, and modern browser APIs.
        </p>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/60 transition group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-3 font-mono">
                <span className="px-2 py-0.5 rounded bg-neutral-800 text-amber-400 font-semibold border border-neutral-700">
                  Chapter {chapter.order}
                </span>
                <span>{(chapter.size / 1024).toFixed(1)} KB</span>
              </div>
              <h2 className="text-base font-bold text-neutral-100 group-hover:text-amber-300 transition mb-3">
                <Link href={`/masterbook/${chapter.slug}`} className="hover:underline">
                  {chapter.title}
                </Link>
              </h2>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
              <Link
                href={`/masterbook/${chapter.slug}`}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
              >
                Read Chapter <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
              <GitHubSourceLink url={chapter.githubUrl} label="Raw Code" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
