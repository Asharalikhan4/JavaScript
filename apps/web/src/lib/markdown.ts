import { marked } from 'marked';
import hljs from 'highlight.js';

// Configure marked with highlight.js
marked.setOptions({
  gfm: true,
  breaks: true,
});

export function renderMarkdown(content: string): string {
  if (!content) return '';

  // Transform GitHub alerts (> [!NOTE], etc.)
  let processed = content
    .replace(/^>\s*\[!NOTE\]\s*(.*)$/gim, '<div class="callout-note p-4 rounded-r-lg my-4 text-blue-200"><strong class="text-blue-400 block mb-1">ℹ️ Note</strong>$1</div>')
    .replace(/^>\s*\[!TIP\]\s*(.*)$/gim, '<div class="callout-tip p-4 rounded-r-lg my-4 text-emerald-200"><strong class="text-emerald-400 block mb-1">💡 Tip</strong>$1</div>')
    .replace(/^>\s*\[!WARNING\]\s*(.*)$/gim, '<div class="callout-warning p-4 rounded-r-lg my-4 text-amber-200"><strong class="text-amber-400 block mb-1">⚠️ Warning</strong>$1</div>')
    .replace(/^>\s*\[!IMPORTANT\]\s*(.*)$/gim, '<div class="callout-note p-4 rounded-r-lg my-4 text-indigo-200"><strong class="text-indigo-400 block mb-1">📌 Important</strong>$1</div>');

  const rawHtml = marked.parse(processed) as string;
  return rawHtml;
}
