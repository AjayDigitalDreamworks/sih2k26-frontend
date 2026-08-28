import React from 'react';
import { Cpu } from 'lucide-react';

export default function MapStatusBar() {
  return (
    <footer className="pt-3 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold text-slate-500 border-t border-slate-200/80">
      {/* Left: Sensor Status */}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Real-time data from 1,248 sensors
        </span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1.5 text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Last updated: 30 sec ago
        </span>
      </div>

      {/* Center: Copyright */}
      <div className="text-slate-400 font-medium">
        © 2025 NER LogiSmart. All rights reserved.
      </div>

      {/* Right: Technology Badge */}
      <div className="flex items-center gap-1.5 text-emerald-700 font-extrabold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60 shadow-2xs">
        <Cpu className="w-3.5 h-3.5 text-emerald-600" />
        <span>Powered by AI & GIS</span>
      </div>
    </footer>
  );
}
