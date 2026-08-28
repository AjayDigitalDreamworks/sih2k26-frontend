import React from 'react';
import { Calendar, CloudSun } from 'lucide-react';

export default function DistrictHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      {/* Left: Title & Subtitle */}
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-[#0B1E36] tracking-tight">
          District Management
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-tight mt-0.5">
          View district-wise route connectivity and accessibility status.
        </p>
      </div>

      {/* Right: Date & Weather horizontal cards */}
      <div className="flex items-center gap-3 self-end lg:self-auto flex-shrink-0">
        {/* Date Card */}
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700 min-w-[155px]">
          <Calendar className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-slate-800">21 May 2025</span>
            <span className="text-[10px] text-slate-400 font-medium">Wednesday, 10:30 AM</span>
          </div>
        </div>

        {/* Weather Card */}
        <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700 min-w-[125px]">
          <CloudSun className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-slate-800">24°C</span>
            <span className="text-[10px] text-slate-400 font-medium">Guwahati</span>
          </div>
        </div>
      </div>
    </div>
  );
}
