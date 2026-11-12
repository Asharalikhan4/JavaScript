'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { FaPlay, FaUndo, FaTrash, FaTerminal } from 'react-icons/fa';

// Dynamically import Monaco Editor to avoid SSR window issues
const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

interface MonacoRunnerProps {
  initialCode: string;
  language?: string;
  height?: string;
}

function safeFormat(val: any): string {
  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (typeof val === 'object') {
    try {
      return JSON.stringify(val, null, 2);
    } catch {
      return String(val);
    }
  }
  return String(val);
}

export const MonacoRunner: React.FC<MonacoRunnerProps> = ({
  initialCode,
  language = 'javascript',
  height = '420px',
}) => {
  const [code, setCode] = useState(initialCode || '');
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const runCode = () => {
    setIsRunning(true);
    const logs: string[] = [];

    // Capture console methods
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;

    console.log = (...args: any[]) => {
      logs.push(args.map(safeFormat).join(' '));
      originalLog.apply(console, args);
    };

    console.error = (...args: any[]) => {
      logs.push(`[ERROR] ${args.map(safeFormat).join(' ')}`);
      originalError.apply(console, args);
    };

    console.warn = (...args: any[]) => {
      logs.push(`[WARN] ${args.map(safeFormat).join(' ')}`);
      originalWarn.apply(console, args);
    };

    try {
      // Execute within an isolated Function scope
      const executor = new Function(code);
      executor();
      if (logs.length === 0) {
        logs.push('✓ Code executed successfully (no console output).');
      }
    } catch (err: any) {
      logs.push(`Uncaught Exception: ${err.message || String(err)}`);
    } finally {
      // Restore console
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
      setOutput(logs);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(initialCode || '');
    setOutput([]);
  };

  const handleClearOutput = () => {
    setOutput([]);
  };

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl flex flex-col my-6">
      {/* Editor Controls Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          <span className="text-xs font-mono text-neutral-400 ml-2 font-medium">JavaScript Lab Sandbox</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            title="Reset code"
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition"
          >
            <FaUndo className="w-3 h-3" /> Reset
          </button>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-4 py-1 text-xs font-semibold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 rounded-md transition shadow-sm font-mono"
          >
            <FaPlay className="w-2.5 h-2.5 fill-current" /> {isRunning ? 'Running...' : 'Run Code'}
          </button>
        </div>
      </div>

      {/* Monaco Code Editor */}
      <div className="border-b border-neutral-800 bg-[#1e1e1e]" style={{ minHeight: height }}>
        {mounted ? (
          <Editor
            height={height}
            language={language}
            value={code}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            }}
            onChange={(val) => setCode(val || '')}
          />
        ) : (
          <div
            className="p-4 font-mono text-xs text-neutral-400 overflow-auto bg-[#1e1e1e]"
            style={{ height }}
          >
            <pre><code>{code}</code></pre>
          </div>
        )}
      </div>

      {/* Terminal Output Console */}
      <div className="bg-[#0b0e14] p-3 text-xs font-mono text-neutral-300">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800/80">
          <div className="flex items-center gap-2 text-neutral-400">
            <FaTerminal className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-neutral-300">Console Output</span>
          </div>
          {output.length > 0 && (
            <button
              onClick={handleClearOutput}
              className="text-neutral-500 hover:text-neutral-300 flex items-center gap-1 text-[11px]"
            >
              <FaTrash className="w-2.5 h-2.5" /> Clear
            </button>
          )}
        </div>
        <div className="min-h-[70px] max-h-[180px] overflow-y-auto space-y-1">
          {output.length === 0 ? (
            <div className="text-neutral-600 italic">Click "Run Code" above to execute and view output...</div>
          ) : (
            output.map((line, idx) => (
              <div
                key={idx}
                className={`whitespace-pre-wrap leading-relaxed ${
                  line.includes('[ERROR]') || line.includes('Uncaught')
                    ? 'text-red-400'
                    : line.includes('[WARN]')
                    ? 'text-yellow-400'
                    : 'text-neutral-200'
                }`}
              >
                {line}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
