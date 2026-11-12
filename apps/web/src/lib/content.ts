import fs from 'node:fs';
import path from 'node:path';

// Locate content directory at root
const CONTENT_DIR = path.resolve(process.cwd(), '../../content');

export interface MasterbookItem {
  id: string;
  order: number;
  title: string;
  slug: string;
  filename: string;
  isJs: boolean;
  rawPath: string;
  githubUrl: string;
  size: number;
  content: string;
}

export interface QuickRevisionItem {
  id: string;
  title: string;
  slug: string;
  filename: string;
  rawPath: string;
  githubUrl: string;
  size: number;
  content: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  slug: string;
  filename: string;
  level: 'SDE1' | 'SDE2' | 'SSE' | string;
  companies: string[];
  category: string;
  description: string;
  relatedLink?: string;
  rawPath: string;
  githubUrl: string;
  size: number;
  code: string;
}

export interface DsaItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  subCategory: string;
  filename: string;
  problemStatement: string;
  rawPath: string;
  githubUrl: string;
  code: string;
}

function readJsonFile<T>(filename: string): T[] {
  try {
    const fullPath = path.join(CONTENT_DIR, filename);
    if (!fs.existsSync(fullPath)) return [];
    const raw = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(raw) as T[];
  } catch (err) {
    console.error(`Error reading ${filename}:`, err);
    return [];
  }
}

export function getMasterbookChapters(): MasterbookItem[] {
  return readJsonFile<MasterbookItem>('masterbook.json');
}

export function getMasterbookChapterBySlug(slug: string): MasterbookItem | undefined {
  const chapters = getMasterbookChapters();
  return chapters.find((c) => c.slug === slug || slugify(c.title) === slug);
}

export function getQuickRevisionTopics(): QuickRevisionItem[] {
  return readJsonFile<QuickRevisionItem>('quick-revision.json');
}

export function getQuickRevisionBySlug(slug: string): QuickRevisionItem | undefined {
  const topics = getQuickRevisionTopics();
  return topics.find((t) => t.slug === slug || slugify(t.title) === slug);
}

export function getProblems(): ProblemItem[] {
  return readJsonFile<ProblemItem>('problems.json');
}

export function getProblemBySlug(slug: string): ProblemItem | undefined {
  const problems = getProblems();
  return problems.find((p) => p.slug === slug || p.id === slug);
}

export function getDsaProblems(): DsaItem[] {
  return readJsonFile<DsaItem>('dsa.json');
}

export function getDsaProblemBySlug(slug: string): DsaItem | undefined {
  const list = getDsaProblems();
  return list.find((d) => d.slug === slug || d.id === slug);
}

export function getAllCompanies(): string[] {
  const problems = getProblems();
  const set = new Set<string>();
  for (const p of problems) {
    p.companies.forEach((c) => set.add(c));
  }
  return Array.from(set).sort();
}

export function getAllCategories(): string[] {
  const problems = getProblems();
  const set = new Set<string>();
  for (const p of problems) {
    if (p.category) set.add(p.category);
  }
  return Array.from(set).sort();
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}
