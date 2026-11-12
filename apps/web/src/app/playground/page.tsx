'use client';

import React, { useState } from 'react';
import { FaTerminal, FaCode, FaPlay } from 'react-icons/fa';
import { MonacoRunner } from '@/components/MonacoRunner';

const PRELOADED_SNIPPETS: Record<string, { title: string; code: string }> = {
  promiseAll: {
    title: 'Promise.all Polyfill',
    code: `// Polyfill for Promise.all
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Argument must be an array'));
    }

    const results = [];
    let completed = 0;

    if (promises.length === 0) {
      return resolve(results);
    }

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((val) => {
          results[index] = val;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// Test cases
const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res('Hello!'), 50));
const p3 = 42;

myPromiseAll([p1, p2, p3])
  .then((data) => console.log('Resolved all:', data))
  .catch((err) => console.error('Rejected:', err));
`,
  },
  debounce: {
    title: 'Debounce with Immediate Execution',
    code: `// Custom Debounce Function
function debounce(fn, delay = 300, immediate = false) {
  let timer = null;

  return function (...args) {
    const context = this;
    const callNow = immediate && !timer;

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      if (!immediate) fn.apply(context, args);
    }, delay);

    if (callNow) fn.apply(context, args);
  };
}

// Test the debounce
let counter = 0;
const increment = debounce(() => {
  counter++;
  console.log('Debounced call, counter:', counter);
}, 200);

increment();
increment();
increment();
console.log('Fired 3 rapid increments. Waiting for debounce...');
`,
  },
  currying: {
    title: 'Infinite Currying Sum',
    code: `// Infinite Currying sum: sum(1)(2)(3)(4)() => 10
function sum(a) {
  return function (b) {
    if (b !== undefined) {
      return sum(a + b);
    }
    return a;
  };
}

console.log('sum(1)(2)(3)():', sum(1)(2)(3)());
console.log('sum(10)(20)(30)(40)():', sum(10)(20)(30)(40)());
`,
  },
  analyticsSdk: {
    title: 'Swiggy Analytics SDK (Batching & Retry)',
    code: `// Simplified Analytics SDK
class AnalyticsSDK {
  constructor() {
    this.queue = [];
    this.count = 0;
  }

  logEvent(event) {
    this.queue.push(event);
  }

  async send() {
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      this.count++;
      
      // Simulate failure on every 5th event
      if (this.count % 5 === 0) {
        console.warn('Failed to send:', event, '-> Retrying...');
        this.queue.unshift(event);
        this.count++; // avoid infinite loop on simulated error
        continue;
      }
      
      console.log('Successfully logged:', event);
    }
    console.log('All analytics events flushed.');
  }
}

const sdk = new AnalyticsSDK();
for (let i = 1; i <= 8; i++) {
  sdk.logEvent('Event ' + i);
}
sdk.send();
`,
  },
};

export default function PlaygroundPage() {
  const [selectedSnippet, setSelectedSnippet] = useState<string>('promiseAll');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <FaTerminal className="w-3 h-3" /> JavaScript Lab Sandbox
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            JavaScript Interactive Playground
          </h1>
          <p className="text-sm text-neutral-400 mt-1">
            Write, execute, and debug polyfills and algorithms in real time with VS Code&apos;s Monaco engine.
          </p>
        </div>

        {/* Snippet selector */}
        <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 p-1.5 rounded-xl text-xs">
          <FaCode className="w-3.5 h-3.5 text-amber-400 ml-2" />
          <span className="text-neutral-400 font-medium">Load Snippet:</span>
          <select
            value={selectedSnippet}
            onChange={(e) => setSelectedSnippet(e.target.value)}
            className="bg-neutral-950 border border-neutral-800 text-neutral-200 rounded-lg px-2.5 py-1 text-xs focus:outline-none"
          >
            {Object.entries(PRELOADED_SNIPPETS).map(([key, val]) => (
              <option key={key} value={key}>
                {val.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <MonacoRunner
        key={selectedSnippet}
        initialCode={PRELOADED_SNIPPETS[selectedSnippet].code}
        height="560px"
      />
    </div>
  );
}
