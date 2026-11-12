'use client';

import React, { useState } from 'react';
import { MonacoRunner } from './MonacoRunner';
import { GitHubSourceLink } from './GitHubSourceLink';

interface Approach {
  name: string;
  complexity?: {
    time?: string;
    space?: string;
  };
  code: string;
  notes?: string;
}

interface ApproachTabsProps {
  title: string;
  fullCode: string;
  githubUrl: string;
  approaches?: Approach[];
}

export const ApproachTabs: React.FC<ApproachTabsProps> = ({
  title,
  fullCode,
  githubUrl,
  approaches = [],
}) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'approaches'>('editor');

  return (
    <div className="w-full my-6">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              activeTab === 'editor'
                ? 'bg-neutral-800 text-emerald-400 border border-neutral-700 shadow-sm'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            ⚡ Live Code & Tests
          </button>
          {approaches.length > 0 && (
            <button
              onClick={() => setActiveTab('approaches')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                activeTab === 'approaches'
                  ? 'bg-neutral-800 text-emerald-400 border border-neutral-700 shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              📑 Multi-Approach Breakdown ({approaches.length})
            </button>
          )}
        </div>
        <GitHubSourceLink url={githubUrl} />
      </div>

      {/* Tab Panels */}
      {activeTab === 'editor' && (
        <MonacoRunner initialCode={fullCode} height="460px" />
      )}

      {activeTab === 'approaches' && approaches.length > 0 && (
        <div className="grid gap-6 mt-4">
          {approaches.map((app, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 shadow-md"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h4 className="text-sm font-bold text-neutral-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {app.name}
                </h4>
                {app.complexity && (
                  <div className="flex items-center gap-2 text-[11px] font-mono">
                    {app.complexity.time && (
                      <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/80">
                        Time: {app.complexity.time}
                      </span>
                    )}
                    {app.complexity.space && (
                      <span className="px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/80">
                        Space: {app.complexity.space}
                      </span>
                    )}
                  </div>
                )}
              </div>
              {app.notes && (
                <p className="text-xs text-neutral-400 mb-3 leading-relaxed">{app.notes}</p>
              )}
              <pre className="p-3 rounded-lg bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 overflow-x-auto">
                <code>{app.code}</code>
              </pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
