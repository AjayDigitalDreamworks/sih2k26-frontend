import React from 'react';
import { distanceComparisonData } from '../../data/routeOptimizationData';

export default function DistanceComparison() {
  const maxVal = 600;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Distance Comparison
        </h3>
        <span className="text-[10px] font-bold text-slate-400">km</span>
      </div>

      {/* Bar Chart Container */}
      <div className="flex items-end gap-2.5 h-44 sm:h-48 pt-4 pb-2 border-b border-slate-100 relative">
        {/* Y-Axis Grid Lines & Labels */}
        <div className="flex flex-col justify-between h-full pr-1.5 text-[9px] font-bold text-slate-400 flex-shrink-0 select-none">
          <span>600</span>
          <span>450</span>
          <span>300</span>
          <span>150</span>
          <span>0</span>
        </div>

        {/* 5 Bars */}
        <div className="flex-1 grid grid-cols-5 gap-1.5 sm:gap-2 h-full items-end">
          {distanceComparisonData.bars.map((bar) => {
            const heightPercent = Math.min(100, Math.round((bar.value / maxVal) * 100));

            return (
              <div key={bar.name} className="flex flex-col items-center h-full justify-end group">
                {/* Number on Top of Bar */}
                <span
                  className={`text-[9px] sm:text-[10px] mb-1 font-bold truncate leading-tight ${
                    bar.isHighlighted ? 'text-slate-900 font-black' : 'text-slate-500'
                  }`}
                >
                  {bar.display}
                </span>

                {/* Animated / Colored Bar */}
                <div
                  style={{ height: `${heightPercent}%` }}
                  className={`w-full max-w-[28px] sm:max-w-[34px] rounded-t-md transition-all group-hover:opacity-90 ${bar.color}`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bar Bottom Category Names */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 pt-2 text-center">
        {distanceComparisonData.bars.map((bar) => (
          <span
            key={bar.name}
            className={`text-[8px] sm:text-[9px] leading-tight break-words ${
              bar.isHighlighted
                ? 'font-black text-slate-900'
                : 'font-medium text-slate-400'
            }`}
          >
            {bar.name}
          </span>
        ))}
      </div>
    </div>
  );
}
