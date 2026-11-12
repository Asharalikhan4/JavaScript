import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  getMasterbookChapters,
  getProblems,
  getDsaProblems,
  getQuickRevisionTopics,
} from '@/lib/content';

export const metadata: Metadata = {
  metadataBase: new URL('https://javascript.asharlabs.stream'),
  title: 'JavaScript Lab | Master Frontend & Machine Coding',
  description:
    'JavaScript Lab: Comprehensive JavaScript handbook, machine coding problems (Swiggy, Uber, Zeta, Birdeye), native polyfills, and Striver A2Z DSA solutions.',
  openGraph: {
    title: 'JavaScript Lab - javascript.asharlabs.stream',
    description:
      'Curated frontend interview prep, in-depth runtime mechanics, and interactive code playground.',
    url: 'https://javascript.asharlabs.stream',
    siteName: 'JavaScript Lab',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Aggregate search index
  const masterbook = getMasterbookChapters();
  const problems = getProblems();
  const dsa = getDsaProblems();
  const revisions = getQuickRevisionTopics();

  const searchItems = [
    ...masterbook.map((m) => ({
      title: m.title,
      url: `/masterbook/${m.slug}`,
      category: 'Masterbook',
      type: 'masterbook' as const,
      badge: `#${m.order}`,
    })),
    ...revisions.map((r) => ({
      title: r.title,
      url: `/quick-revision/${r.slug}`,
      category: 'Quick Revision',
      type: 'revision' as const,
      badge: 'Revision',
    })),
    ...problems.map((p) => ({
      title: p.title,
      url: `/problems/${p.slug}`,
      category: p.category || 'Interview Problem',
      type: 'problem' as const,
      badge: p.level || (p.companies[0] ? p.companies[0] : 'SDE'),
    })),
    ...dsa.map((d) => ({
      title: d.title,
      url: `/dsa/${d.slug}`,
      category: `DSA: ${d.category}`,
      type: 'dsa' as const,
      badge: d.subCategory || 'DSA',
    })),
  ];

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="min-h-screen flex flex-col bg-[#0d1117] text-[#e6edf3] antialiased selection:bg-amber-400 selection:text-neutral-950"
        suppressHydrationWarning
      >
        <Navbar searchItems={searchItems} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
