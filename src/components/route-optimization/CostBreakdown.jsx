import React from 'react';
import { costBreakdownData } from '../../data/routeOptimizationData';

export default function CostBreakdown() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight mb-3">
        Estimated Cost Breakdown
      </h3>

      {/* Donut Chart & Legend */}
      <div className="flex items-center gap-3.5 my-auto">
        {/* SVG Donut Chart */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="14" fill="transparent" stroke="#f1f5f9" strokeWidth="4.5" />
            {/* Fuel Cost 52% (Green) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#065F46"
              strokeWidth="4.5"
              strokeDasharray="52 48"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
            {/* Driver Cost 29% (Blue) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#2563EB"
              strokeWidth="4.5"
              strokeDasharray="29 71"
              strokeDashoffset="-52"
              strokeLinecap="round"
            />
            {/* Toll Cost 14% (Orange) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#F97316"
              strokeWidth="4.5"
              strokeDasharray="14 86"
              strokeDashoffset="-81"
              strokeLinecap="round"
            />
            {/* Miscellaneous 5% (Purple) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#9333EA"
              strokeWidth="4.5"
              strokeDasharray="5 95"
              strokeDashoffset="-95"
              strokeLinecap="round"
            />
          </svg>

          {/* Center Info */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
            <span className="text-sm sm:text-base font-black text-slate-900 leading-tight">
              {costBreakdownData.total}
            </span>
            <span className="text-[8px] font-bold text-slate-400">Total Cost</span>
          </div>
        </div>

        {/* Legend List */}
        <div className="flex flex-col space-y-2 min-w-0 flex-1">
          {costBreakdownData.items.map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-1 text-[11px]">
              <span className="flex items-center gap-1.5 text-slate-600 truncate min-w-0">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.color}`} />
                <span className="truncate">{item.label}</span>
              </span>
              <span className="font-bold text-slate-800 flex-shrink-0 text-[10px] sm:text-[11px]">
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
