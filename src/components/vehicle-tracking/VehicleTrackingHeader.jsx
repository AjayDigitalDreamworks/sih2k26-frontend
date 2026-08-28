import React from 'react';
import { Calendar, CloudSun, Truck } from 'lucide-react';

export default function VehicleTrackingHeader() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      {/* Left: Title & Subtitle */}
      <div className="flex items-start sm:items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-2xs">
          <Truck className="w-6 h-6 stroke-[2.2]" />
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-[#0B1E36] tracking-tight">
            Vehicle Tracking
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-tight mt-0.5">
            Real-time tracking and status of all vehicles in your fleet.
          </p>
        </div>
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
