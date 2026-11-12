import React from 'react';
import Link from 'next/link';
import { FaGithub, FaHeart } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-800 bg-[#0b0e14] py-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-amber-400 text-neutral-950 font-black flex items-center justify-center text-xs">
                JL
              </div>
              <span className="font-bold text-neutral-100 text-sm">JavaScript Lab</span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Curated interview questions, deep JavaScript runtime mechanics, native polyfills, and Striver A2Z DSA solutions.
            </p>
            <div className="text-[11px] text-neutral-400 font-mono">
              Deployed at <span className="text-amber-400">javascript.asharlabs.stream</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-200 uppercase tracking-wider text-[11px] mb-3">Handbook</h4>
            <ul className="space-y-2">
              <li><Link href="/masterbook" className="hover:text-amber-400 transition">Interview Masterbook</Link></li>
              <li><Link href="/masterbook/what-are-closures" className="hover:text-amber-400 transition">Closures & Memory</Link></li>
              <li><Link href="/masterbook/what-is-event-loop" className="hover:text-amber-400 transition">Event Loop & Tasks</Link></li>
              <li><Link href="/quick-revision" className="hover:text-amber-400 transition">Quick Revision Notes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-200 uppercase tracking-wider text-[11px] mb-3">Interview Arena</h4>
            <ul className="space-y-2">
              <li><Link href="/problems?level=SDE1" className="hover:text-amber-400 transition">SDE-1 Practice</Link></li>
              <li><Link href="/problems?level=SDE2" className="hover:text-amber-400 transition">SDE-2 Machine Coding</Link></li>
              <li><Link href="/problems?company=Swiggy" className="hover:text-amber-400 transition">Swiggy Questions</Link></li>
              <li><Link href="/problems?company=Birdeye" className="hover:text-amber-400 transition">Birdeye SSE Problems</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-200 uppercase tracking-wider text-[11px] mb-3">DSA & Tools</h4>
            <ul className="space-y-2">
              <li><Link href="/dsa" className="hover:text-amber-400 transition">Striver A2Z Sheet</Link></li>
              <li><Link href="/playground" className="hover:text-amber-400 transition">In-Browser Playground</Link></li>
              <li>
                <a
                  href="https://github.com/Asharalikhan4/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition"
                >
                  <FaGithub className="w-3.5 h-3.5" /> GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400">
          <div suppressHydrationWarning>
            © {new Date().getFullYear()} Ashar Ali Khan. Open source developer guide.
          </div>
          <div className="flex items-center gap-1">
            Built with <FaHeart className="w-3 h-3 text-red-500 fill-current mx-0.5" /> for frontend engineers.
          </div>
        </div>
      </div>
    </footer>
  );
};
