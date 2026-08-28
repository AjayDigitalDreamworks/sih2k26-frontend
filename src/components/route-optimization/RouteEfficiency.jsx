import React from 'react';
import { Clock, Fuel } from 'lucide-react';
import { routeEfficiencyData } from '../../data/routeOptimizationData';

export default function RouteEfficiency() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight mb-2">
        Route Efficiency
      </h3>

      {/* Semicircle Gauge Meter */}
      <div className="flex flex-col items-center justify-center my-auto">
        <div className="relative w-36 h-20 sm:w-40 sm:h-22 flex items-end justify-center overflow-hidden">
          {/* Semicircular Track & Value Stroke */}
          <svg viewBox="0 0 100 50" className="w-full h-full">
            {/* Background Arc */}
            <path
              d="M 10,50 A 40,40 0 0,1 90,50"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Efficiency 92% Arc (Green) */}
            <path
              d="M 10,50 A 40,40 0 0,1 90,50"
              fill="none"
              stroke="#065F46"
              strokeWidth="8"
              strokeDasharray="125.6"
              strokeDashoffset="10"
              strokeLinecap="round"
            />
          </svg>

          {/* Centered Percentage */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-1 select-none pointer-events-none">
            <span className="text-xl sm:text-2xl font-black text-slate-900 leading-none">
              {routeEfficiencyData.percentage}%
            </span>
            <span className="text-[9px] font-bold text-slate-400 mt-0.5">
              {routeEfficiencyData.label}
            </span>
          </div>
        </div>

        <span className="text-[10px] font-bold text-slate-400 mt-2">
          You are saving
        </span>
      </div>

      {/* Savings Metric Pills */}
      <div className="grid grid-cols-2 gap-2 mt-2">
        {/* Time Saved Pill */}
        <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
          <div className="w-6 h-6 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center flex-shrink-0">
            <Clock className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-xs font-black text-slate-900 truncate">1h 25m</span>
            <span className="text-[9px] text-slate-400 font-medium truncate">Time</span>
          </div>
        </div>

        {/* Fuel Cost Saved Pill */}
        <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
          <div className="w-6 h-6 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center flex-shrink-0">
            <Fuel className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-xs font-black text-slate-900 truncate">₹ 1,320</span>
            <span className="text-[9px] text-slate-400 font-medium truncate">Fuel Cost</span>
          </div>
        </div>
      </div>
    </div>
  );
}
