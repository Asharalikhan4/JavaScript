import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface GitHubSourceLinkProps {
  url: string;
  label?: string;
  className?: string;
}

export const GitHubSourceLink: React.FC<GitHubSourceLinkProps> = ({
  url,
  label = 'View Raw Code on GitHub',
  className = '',
}) => {
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-neutral-700 bg-neutral-900/80 text-neutral-200 hover:bg-neutral-800 hover:text-white hover:border-neutral-500 transition-all shadow-sm ${className}`}
    >
      <FaGithub className="w-4 h-4 text-neutral-300" />
      <span>{label}</span>
      <FaExternalLinkAlt className="w-2.5 h-2.5 opacity-60 ml-0.5" />
    </a>
  );
};
