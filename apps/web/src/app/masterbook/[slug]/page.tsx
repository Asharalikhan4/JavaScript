import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaBook, FaArrowLeft, FaArrowRight, FaClock } from 'react-icons/fa';
import { getMasterbookChapters, getMasterbookChapterBySlug } from '@/lib/content';
import { renderMarkdown } from '@/lib/markdown';
import { GitHubSourceLink } from '@/components/GitHubSourceLink';
import { MonacoRunner } from '@/components/MonacoRunner';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const chapters = getMasterbookChapters();
  return chapters.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const chapter = getMasterbookChapterBySlug(params.slug);
  if (!chapter) return { title: 'Chapter Not Found' };
  return {
    title: `${chapter.title} - Masterbook | JavaScript Lab`,
    description: `Read in-depth explanations and examples on ${chapter.title}.`,
  };
}

export default function MasterbookChapterPage({ params }: PageProps) {
  const allChapters = getMasterbookChapters();
  const chapter = getMasterbookChapterBySlug(params.slug);

  if (!chapter) {
    notFound();
  }

  // Find currentIndex, prev, next
  const currentIndex = allChapters.findIndex((c) => c.id === chapter.id);
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null;

  // Render markdown HTML
  const contentHtml = chapter.isJs ? '' : renderMarkdown(chapter.content);

  // Estimate reading time: ~200 words per minute
  const words = chapter.content.split(/\s+/).length;
  const readTime = Math.max(1, Math.round(words / 200));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        {/* Left Sidebar (javascript.info Chapter Navigation) */}
        <aside className="hidden lg:block w-72 shrink-0 border-r border-neutral-800 pr-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Chapters ({allChapters.length})
            </span>
            <Link href="/masterbook" className="text-xs text-amber-400 hover:underline">
              All Chapters
            </Link>
          </div>
          <div className="max-h-[calc(100vh-12rem)] overflow-y-auto space-y-1 pr-2">
            {allChapters.map((c) => {
              const isActive = c.id === chapter.id;
              return (
                <Link
                  key={c.id}
                  href={`/masterbook/${c.slug}`}
                  className={`flex items-start gap-2.5 p-2 rounded-lg text-xs transition ${
                    isActive
                      ? 'bg-neutral-800 text-amber-300 font-semibold border-l-2 border-amber-400'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  <span className="font-mono text-[10px] text-neutral-500 shrink-0 mt-0.5">
                    {c.order}.
                  </span>
                  <span className="line-clamp-2">{c.title}</span>
                </Link>
              );
            })}
          </div>
        </aside>

        {/* Main Reading Content */}
        <article className="flex-1 min-w-0 max-w-4xl">
          {/* Breadcrumbs & Header Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <Link href="/masterbook" className="hover:text-neutral-200">
                Masterbook
              </Link>
              <span>/</span>
              <span className="text-amber-400 font-medium">Chapter {chapter.order}</span>
              <span>•</span>
              <span className="flex items-center gap-1 font-mono">
                <FaClock className="w-3 h-3 text-neutral-500" /> {readTime} min read
              </span>
            </div>
            <GitHubSourceLink url={chapter.githubUrl} />
          </div>

          {/* Chapter Title */}
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6">
            {chapter.title}
          </h1>

          {/* Render content */}
          {chapter.isJs ? (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-900/60 text-xs text-blue-200">
                💡 This chapter includes an interactive JavaScript implementation. You can edit and test it live below!
              </div>
              <MonacoRunner initialCode={chapter.content} height="520px" />
            </div>
          ) : (
            <div
              className="prose prose-invert max-w-none text-neutral-300 text-sm sm:text-base leading-relaxed space-y-6 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-white [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-amber-300 [&_h3]:mt-6 [&_p]:leading-relaxed [&_code]:text-amber-300 [&_code]:bg-neutral-900 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_pre]:p-4 [&_pre]:bg-neutral-950 [&_pre]:border [&_pre]:border-neutral-800 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1.5"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          )}

          {/* Bottom Prev / Next Navigation */}
          <div className="mt-16 pt-8 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevChapter ? (
              <Link
                href={`/masterbook/${prevChapter.slug}`}
                className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-800/60 transition group flex flex-col"
              >
                <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1 group-hover:text-amber-400">
                  <FaArrowLeft className="w-2.5 h-2.5" /> Previous Chapter
                </span>
                <span className="text-sm font-bold text-neutral-200 mt-1 line-clamp-1">
                  {prevChapter.title}
                </span>
              </Link>
            ) : <div />}

            {nextChapter ? (
              <Link
                href={`/masterbook/${nextChapter.slug}`}
                className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-800/60 transition group flex flex-col text-right sm:items-end"
              >
                <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1 group-hover:text-amber-400">
                  Next Chapter <FaArrowRight className="w-2.5 h-2.5" />
                </span>
                <span className="text-sm font-bold text-neutral-200 mt-1 line-clamp-1">
                  {nextChapter.title}
                </span>
              </Link>
            ) : <div />}
          </div>
        </article>
      </div>
    </div>
  );
}
