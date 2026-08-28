import React from 'react';
import { ChevronDown } from 'lucide-react';
import { deliveriesData } from '../../data/dashboardData';

export default function DeliveriesOverview() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-3.5 sm:p-4 flex flex-col justify-between h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3 flex-shrink-0">
        <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight truncate">
          Deliveries Overview
        </h3>
        <button
          type="button"
          className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-slate-500 hover:text-slate-800 bg-slate-50 px-2 py-1 rounded-lg border border-slate-200/80 transition-colors cursor-pointer flex-shrink-0"
        >
          <span>This Week</span>
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      {/* Donut Chart & Delivery Breakdown Layout */}
      <div className="flex items-center gap-2.5 sm:gap-3 my-auto py-1 min-w-0">
        {/* SVG Donut Chart */}
        <div className="relative w-18 h-18 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="14" fill="transparent" stroke="#f1f5f9" strokeWidth="4.5" />
            {/* Delivered 50% (Green) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#10B981"
              strokeWidth="4.5"
              strokeDasharray="50 50"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
            {/* In Transit 36% (Blue) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#3B82F6"
              strokeWidth="4.5"
              strokeDasharray="36 64"
              strokeDashoffset="-50"
              strokeLinecap="round"
            />
            {/* Delayed 9% (Orange) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#F59E0B"
              strokeWidth="4.5"
              strokeDasharray="9 91"
              strokeDashoffset="-86"
              strokeLinecap="round"
            />
            {/* Cancelled 5% (Red) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#EF4444"
              strokeWidth="4.5"
              strokeDasharray="5 95"
              strokeDashoffset="-95"
              strokeLinecap="round"
            />
          </svg>

          {/* Center Count */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
            <span className="text-sm sm:text-base font-black text-slate-800 leading-none">
              {deliveriesData.total}
            </span>
            <span className="text-[8px] font-bold text-slate-400 mt-0.5">Total</span>
          </div>
        </div>

        {/* Delivery Breakdown List */}
        <div className="flex flex-col space-y-1.5 min-w-0 flex-1">
          {deliveriesData.breakdown.map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-1 text-[10px] sm:text-[11px] font-medium leading-tight">
              <span className="flex items-center gap-1.5 text-slate-600 truncate min-w-0">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.color}`} />
                <span className="truncate">{item.label}</span>
              </span>
              <span className="font-bold text-slate-800 flex-shrink-0 text-right">
                {item.count} <span className="text-slate-400 font-normal text-[9px] sm:text-[10px]">({item.percent})</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
