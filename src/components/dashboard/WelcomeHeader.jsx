import React from 'react';
import { CloudSun, ChevronDown } from 'lucide-react';

export default function WelcomeHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-2">
      {/* Left Greeting */}
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-[#0B1E36] tracking-tight flex items-center gap-2">
          <span>Welcome back, Admin</span>
          <span className="inline-block animate-bounce origin-bottom">👋</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
          Here's what's happening across the North Eastern Region today.
        </p>
      </div>

      {/* Right Timestamp & Weather Indicator */}
      <div className="flex items-center gap-3 self-start md:self-auto">
        <span className="text-xs font-semibold text-slate-400">
          21 May 2025, 10:30 AM
        </span>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700 cursor-pointer hover:bg-slate-50 transition-colors">
          <CloudSun className="w-4 h-4 text-amber-500" />
          <span>24°C</span>
          <span className="text-slate-400 font-medium">Guwahati</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </div>
      </div>
    </div>
  );
}
