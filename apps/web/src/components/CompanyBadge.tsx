import React from 'react';

interface CompanyBadgeProps {
  company: string;
  className?: string;
}

export const CompanyBadge: React.FC<CompanyBadgeProps> = ({ company, className = '' }) => {
  const norm = company.toLowerCase();

  let colorClasses = 'bg-neutral-800 text-neutral-300 border-neutral-700';
  if (norm.includes('swiggy')) {
    colorClasses = 'bg-orange-950/60 text-orange-400 border-orange-800/80';
  } else if (norm.includes('uber')) {
    colorClasses = 'bg-neutral-900 text-white border-neutral-600';
  } else if (norm.includes('zeta')) {
    colorClasses = 'bg-purple-950/60 text-purple-300 border-purple-800/80';
  } else if (norm.includes('birdeye')) {
    colorClasses = 'bg-sky-950/60 text-sky-300 border-sky-800/80';
  } else if (norm.includes('thoughtspot')) {
    colorClasses = 'bg-blue-950/60 text-blue-300 border-blue-800/80';
  } else if (norm.includes('abhibus')) {
    colorClasses = 'bg-red-950/60 text-red-300 border-red-800/80';
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colorClasses} ${className}`}
    >
      🏢 {company}
    </span>
  );
};
