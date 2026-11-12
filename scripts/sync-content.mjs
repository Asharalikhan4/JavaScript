import fs from 'node:fs';
import path from 'node:path';

const ROOT_DIR = process.cwd();
const CONTENT_DIR = path.join(ROOT_DIR, 'content');
const GITHUB_REPO_URL = 'https://github.com/Asharalikhan4/JavaScript/blob/master';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

ensureDir(CONTENT_DIR);

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

function encodePathForGithub(relativePath) {
  return relativePath
    .split('/')
    .map(segment => encodeURIComponent(segment))
    .join('/');
}

// -------------------------------------------------------------
// 1. Ingest Masterbook (from theory/)
// -------------------------------------------------------------
function ingestMasterbook() {
  const masterbookDir = path.join(ROOT_DIR, 'theory', 'JavaScript Interview Masterbook');
  if (!fs.existsSync(masterbookDir)) return [];

  const files = fs.readdirSync(masterbookDir);
  const masterbookItems = [];

  for (const file of files) {
    if (file.startsWith('.')) continue;
    const fullPath = path.join(masterbookDir, file);
    const stat = fs.statSync(fullPath);
    if (!stat.isFile()) continue;

    const rawContent = fs.readFileSync(fullPath, 'utf8');
    const relPath = path.relative(ROOT_DIR, fullPath);
    const githubUrl = `${GITHUB_REPO_URL}/${encodePathForGithub(relPath)}`;

    // Filename pattern e.g. "4. What are closures?.md" or "36. Explain call, apply, bind.js"
    const match = file.match(/^(\d+)\.\s*(.+?)(\.[a-z]+)$/i);
    let order = 999;
    let title = file.replace(/\.[^/.]+$/, '');
    if (match) {
      order = parseInt(match[1], 10);
      title = match[2].trim();
    }

    const slug = slugify(title);
    const isJs = file.endsWith('.js');

    masterbookItems.push({
      id: `masterbook-${order}`,
      order,
      title,
      slug,
      filename: file,
      isJs,
      rawPath: relPath,
      githubUrl,
      size: stat.size,
      content: rawContent
    });
  }

  masterbookItems.sort((a, b) => a.order - b.order);
  fs.writeFileSync(
    path.join(CONTENT_DIR, 'masterbook.json'),
    JSON.stringify(masterbookItems, null, 2),
    'utf8'
  );
  console.log(`[Masterbook] Synced ${masterbookItems.length} chapters.`);
  return masterbookItems;
}

// -------------------------------------------------------------
// 2. Ingest QuickRevision (from theory/)
// -------------------------------------------------------------
function ingestQuickRevision() {
  const revisionDir = path.join(ROOT_DIR, 'theory', 'QuickRevision');
  if (!fs.existsSync(revisionDir)) return [];

  const files = fs.readdirSync(revisionDir);
  const revisionItems = [];

  for (const file of files) {
    if (file.startsWith('.') || !file.endsWith('.md')) continue;
    const fullPath = path.join(revisionDir, file);
    const stat = fs.statSync(fullPath);
    if (!stat.isFile()) continue;

    const rawContent = fs.readFileSync(fullPath, 'utf8');
    const relPath = path.relative(ROOT_DIR, fullPath);
    const githubUrl = `${GITHUB_REPO_URL}/${encodePathForGithub(relPath)}`;
    const title = file.replace(/\.md$/, '').trim();
    const slug = slugify(title);

    revisionItems.push({
      id: `revision-${slug}`,
      title,
      slug,
      filename: file,
      rawPath: relPath,
      githubUrl,
      size: stat.size,
      content: rawContent
    });
  }

  revisionItems.sort((a, b) => a.title.localeCompare(b.title));
  fs.writeFileSync(
    path.join(CONTENT_DIR, 'quick-revision.json'),
    JSON.stringify(revisionItems, null, 2),
    'utf8'
  );
  console.log(`[QuickRevision] Synced ${revisionItems.length} topics.`);
  return revisionItems;
}

// -------------------------------------------------------------
// 3. Ingest Problems (from practice/)
// -------------------------------------------------------------
function parseProblemFile(fullPath, defaultLevel, defaultCompanies = [], defaultCategory = 'Machine Coding') {
  const stat = fs.statSync(fullPath);
  const rawContent = fs.readFileSync(fullPath, 'utf8');
  const relPath = path.relative(ROOT_DIR, fullPath);
  const filename = path.basename(fullPath);
  const githubUrl = `${GITHUB_REPO_URL}/${encodePathForGithub(relPath)}`;

  const cleanName = filename
    .replace(/^(\d+)\.\s*/, '')
    .replace(/\.[^/.]+$/, '')
    .trim();

  // Extract multi-line comment header if present
  let description = '';
  let relatedLink = '';
  const commentMatch = rawContent.match(/\/\*([\s\S]*?)\*\//);
  if (commentMatch) {
    description = commentMatch[1].trim();
    const linkMatch = description.match(/Related Link\s*-\s*(https?:\/\/[^\s]+)/i);
    if (linkMatch) {
      relatedLink = linkMatch[1];
    }
  }

  // Detect companies
  const companies = [...defaultCompanies];
  const lowerContent = rawContent.toLowerCase();
  const lowerDesc = description.toLowerCase();
  if ((lowerContent.includes('swiggy') || lowerDesc.includes('swiggy')) && !companies.includes('Swiggy')) companies.push('Swiggy');
  if ((lowerContent.includes('uber') || lowerDesc.includes('uber')) && !companies.includes('Uber')) companies.push('Uber');
  if ((lowerContent.includes('birdeye') || lowerDesc.includes('birdeye')) && !companies.includes('Birdeye')) companies.push('Birdeye');
  if ((lowerContent.includes('zeta') || lowerDesc.includes('zeta')) && !companies.includes('Zeta')) companies.push('Zeta');
  if ((lowerContent.includes('thoughtspot') || lowerDesc.includes('thoughtspot')) && !companies.includes('ThoughtSpot')) companies.push('ThoughtSpot');
  if ((lowerContent.includes('abhibus') || lowerDesc.includes('abhibus')) && !companies.includes('Abhibus')) companies.push('Abhibus');

  // Detect category
  let category = defaultCategory;
  if (/polyfill/i.test(cleanName) || /polyfill/i.test(description)) category = 'Polyfill';
  if (/curry/i.test(cleanName) || /chaining/i.test(cleanName) || /pipe/i.test(cleanName)) category = 'Functional Programming';
  if (/stack|queue|deque|linked list/i.test(cleanName)) category = 'Data Structures';
  if (/component|modal|color|swatch/i.test(cleanName)) category = 'DOM / UI Component';

  return {
    id: slugify(`${defaultLevel}-${cleanName}`),
    title: cleanName,
    slug: slugify(cleanName),
    filename,
    level: defaultLevel,
    companies,
    category,
    description,
    relatedLink,
    rawPath: relPath,
    githubUrl,
    size: stat.size,
    code: rawContent
  };
}

function ingestProblems() {
  const problems = [];

  const sourceDirs = [
    { dir: 'practice/Abhibus - SDE2', level: 'SDE2', companies: ['Abhibus'], cat: 'Interview Machine Coding' },
    { dir: 'practice/Birdeye - SSE', level: 'SSE', companies: ['Birdeye'], cat: 'Interview Machine Coding' },
    { dir: 'practice/ThoughtSpot - SDE2', level: 'SDE2', companies: ['ThoughtSpot'], cat: 'Interview Machine Coding' },
    { dir: 'practice/Zeta - SDE1', level: 'SDE1', companies: ['Zeta'], cat: 'Interview Machine Coding' },
    { dir: 'practice/JavaScript problems for practice - SDE1', level: 'SDE1', companies: [], cat: 'Practice Problem' },
    { dir: 'practice/JavaScript problems for practice - SDE2', level: 'SDE2', companies: [], cat: 'Practice Problem' },
    { dir: 'practice/JavaScript Interview Guide Book', level: 'SDE2', companies: [], cat: 'Polyfill' },
    { dir: 'practice/JavaScript Based Problems', level: 'SDE2', companies: [], cat: 'Machine Coding' },
    { dir: 'practice/SDE2 - Problem Set 5', level: 'SDE2', companies: [], cat: 'Problem Set' },
    { dir: 'practice/SDE2 - Problem Set 6', level: 'SDE2', companies: [], cat: 'Problem Set' },
    { dir: 'practice/SDE2 - Problem Set 7', level: 'SDE2', companies: [], cat: 'Problem Set' },
    { dir: 'practice/SDE2 - Problem Set 8', level: 'SDE2', companies: [], cat: 'Problem Set' },
    { dir: 'practice/SDE2 - Problem Set 9', level: 'SDE2', companies: [], cat: 'Problem Set' },
  ];

  for (const item of sourceDirs) {
    const fullDir = path.join(ROOT_DIR, item.dir);
    if (!fs.existsSync(fullDir)) continue;

    const files = fs.readdirSync(fullDir);
    for (const file of files) {
      if (file.startsWith('.') || file.endsWith('.DS_Store')) continue;
      const fullPath = path.join(fullDir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) continue;
      if (file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.md')) {
        const prob = parseProblemFile(fullPath, item.level, item.companies, item.cat);
        problems.push(prob);
      }
    }
  }

  // Deduplicate by title & level
  const uniqueProblems = [];
  const seen = new Set();
  for (const p of problems) {
    const key = `${p.level}:${p.title}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueProblems.push(p);
    }
  }

  uniqueProblems.sort((a, b) => a.title.localeCompare(b.title));
  fs.writeFileSync(
    path.join(CONTENT_DIR, 'problems.json'),
    JSON.stringify(uniqueProblems, null, 2),
    'utf8'
  );
  console.log(`[Problems] Synced ${uniqueProblems.length} machine coding and interview problems.`);
  return uniqueProblems;
}

// -------------------------------------------------------------
// 4. Ingest Striver A2Z Sheet & Algorithms (from dsa/)
// -------------------------------------------------------------
function ingestDsa() {
  const dsaBaseDir = path.join(ROOT_DIR, 'dsa');
  if (!fs.existsSync(dsaBaseDir)) return [];

  const dsaItems = [];

  function walk(currentDir, currentCategory = '', currentSub = '') {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.') || entry.name.endsWith('.DS_Store')) continue;
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        const catMatch = entry.name.match(/^\d+\.\s*(.+)/);
        const nextCat = catMatch ? catMatch[1] : entry.name;
        if (!currentCategory) {
          walk(fullPath, nextCat, '');
        } else {
          walk(fullPath, currentCategory, nextCat);
        }
      } else if (entry.isFile() && entry.name.endsWith('.js')) {
        const relPath = path.relative(ROOT_DIR, fullPath);
        const githubUrl = `${GITHUB_REPO_URL}/${encodePathForGithub(relPath)}`;
        const rawContent = fs.readFileSync(fullPath, 'utf8');

        // Extract Problem Statement & Approaches
        let problemStatement = '';
        const matchStatement = rawContent.match(/Problem Statement\s*->?\s*([^\n\r*]+)/i);
        if (matchStatement) {
          problemStatement = matchStatement[1].trim();
        }

        const title = entry.name
          .replace(/^\d+\.\s*/, '')
          .replace(/\.js$/, '')
          .trim();

        dsaItems.push({
          id: slugify(`${currentCategory}-${currentSub}-${title}`),
          title,
          slug: slugify(title),
          category: currentCategory || 'General',
          subCategory: currentSub || 'Core',
          filename: entry.name,
          problemStatement,
          rawPath: relPath,
          githubUrl,
          code: rawContent
        });
      }
    }
  }

  // Walk Striver A2Z Sheet
  const striverDir = path.join(dsaBaseDir, 'Striver A2Z Sheet');
  if (fs.existsSync(striverDir)) {
    walk(striverDir);
  }

  // Walk Algorithms
  const algoDir = path.join(dsaBaseDir, 'Algorithms');
  if (fs.existsSync(algoDir)) {
    walk(algoDir, 'Algorithms', 'General');
  }

  // Walk Data Structure
  const dsDir = path.join(dsaBaseDir, 'Data Structure');
  if (fs.existsSync(dsDir)) {
    walk(dsDir, 'Data Structures', 'Implementation');
  }

  dsaItems.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));
  fs.writeFileSync(
    path.join(CONTENT_DIR, 'dsa.json'),
    JSON.stringify(dsaItems, null, 2),
    'utf8'
  );
  console.log(`[DSA] Synced ${dsaItems.length} DSA problems and implementations.`);
  return dsaItems;
}

// Run all
console.log('--- Starting Content Ingestion ---');
ingestMasterbook();
ingestQuickRevision();
ingestProblems();
ingestDsa();
console.log('--- Content Ingestion Complete! ---');
