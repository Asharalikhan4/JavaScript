import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaBolt, FaArrowLeft } from 'react-icons/fa';
import { getQuickRevisionTopics, getQuickRevisionBySlug } from '@/lib/content';
import { renderMarkdown } from '@/lib/markdown';
import { GitHubSourceLink } from '@/components/GitHubSourceLink';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const topics = getQuickRevisionTopics();
  return topics.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const topic = getQuickRevisionBySlug(params.slug);
  if (!topic) return { title: 'Topic Not Found' };
  return {
    title: `${topic.title} - Quick Revision | JavaScript Lab`,
    description: `Quick revision summary of ${topic.title}.`,
  };
}

export default function SingleQuickRevisionPage({ params }: PageProps) {
  const topic = getQuickRevisionBySlug(params.slug);

  if (!topic) {
    notFound();
  }

  const contentHtml = renderMarkdown(topic.content);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
        <Link
          href="/quick-revision"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition"
        >
          <FaArrowLeft className="w-3 h-3" /> Back to Quick Revision
        </Link>
        <GitHubSourceLink url={topic.githubUrl} />
      </div>

      <div className="space-y-3 mb-8">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
          <FaBolt className="w-3 h-3" /> Quick Revision Sheet
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          {topic.title}
        </h1>
      </div>

      <article
        className="prose prose-invert max-w-none text-neutral-300 text-sm sm:text-base leading-relaxed space-y-6 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-white [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-neutral-100 [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-yellow-300 [&_h3]:mt-6 [&_p]:leading-relaxed [&_code]:text-yellow-300 [&_code]:bg-neutral-900 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_pre]:p-4 [&_pre]:bg-neutral-950 [&_pre]:border [&_pre]:border-neutral-800 [&_pre]:rounded-xl [&_pre]:overflow-x-auto [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:my-1.5"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
