import React from 'react';
import { reportsByTypeData } from '../../data/fieldReportsData';

export default function ReportsByType() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Reports by Type
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View Details
        </button>
      </div>

      {/* Donut Chart & Legend */}
      <div className="flex items-center gap-3 my-auto">
        {/* SVG Donut Chart */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="14" fill="transparent" stroke="#f1f5f9" strokeWidth="4.5" />
            {/* Road Damage 25% (Green) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#10B981"
              strokeWidth="4.5"
              strokeDasharray="25 75"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
            {/* Traffic Jam 19% (Blue) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#2563EB"
              strokeWidth="4.5"
              strokeDasharray="19 81"
              strokeDashoffset="-25"
              strokeLinecap="round"
            />
            {/* Accident 16% (Red) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#EF4444"
              strokeWidth="4.5"
              strokeDasharray="16 84"
              strokeDashoffset="-44"
              strokeLinecap="round"
            />
            {/* Road Block 14% (Orange) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#F97316"
              strokeWidth="4.5"
              strokeDasharray="14 86"
              strokeDashoffset="-60"
              strokeLinecap="round"
            />
            {/* Weather Issue 11% (Purple) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#8B5CF6"
              strokeWidth="4.5"
              strokeDasharray="11 89"
              strokeDashoffset="-74"
              strokeLinecap="round"
            />
            {/* Others 15% (Slate) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#64748B"
              strokeWidth="4.5"
              strokeDasharray="15 85"
              strokeDashoffset="-85"
              strokeLinecap="round"
            />
          </svg>

          {/* Center Info */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
            <span className="text-base sm:text-lg font-black text-slate-900 leading-tight">
              {reportsByTypeData.total}
            </span>
            <span className="text-[8px] font-bold text-slate-400">Total</span>
          </div>
        </div>

        {/* Legend List */}
        <div className="flex flex-col space-y-1 min-w-0 flex-1">
          {reportsByTypeData.breakdown.map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-1 text-[10px]">
              <span className="flex items-center gap-1.5 text-slate-600 truncate min-w-0">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.color}`} />
                <span className="truncate">{item.label}</span>
              </span>
              <span className="font-bold text-slate-800 flex-shrink-0">
                {item.count} ({item.percent})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
