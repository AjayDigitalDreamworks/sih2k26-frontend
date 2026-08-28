import React from 'react';
import { Brain, Sparkles } from 'lucide-react';
import { aiRiskData } from '../../data/dashboardData';

export default function RiskPrediction() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div>
          <h3 className="text-sm font-extrabold text-[#0B1E36] tracking-tight">
            AI Risk Prediction
          </h3>
          <span className="text-[10px] text-slate-400 font-semibold">(Next 24–48 Hours)</span>
        </div>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Donut Chart & Breakdown */}
      <div className="flex flex-col sm:flex-row lg:flex-row items-center gap-5 my-auto py-2">
        {/* SVG Donut Chart */}
        <div className="relative w-28 h-28 flex-shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            {/* Background Circle */}
            <circle cx="18" cy="18" r="14" fill="transparent" stroke="#f1f5f9" strokeWidth="4.5" />
            {/* High Risk: 26% (Red) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#EF4444"
              strokeWidth="4.5"
              strokeDasharray="26 74"
              strokeDashoffset="0"
              strokeLinecap="round"
            />
            {/* Medium Risk: 41% (Orange) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#F59E0B"
              strokeWidth="4.5"
              strokeDasharray="41 59"
              strokeDashoffset="-26"
              strokeLinecap="round"
            />
            {/* Low Risk: 32% (Green) */}
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="transparent"
              stroke="#10B981"
              strokeWidth="4.5"
              strokeDasharray="32 68"
              strokeDashoffset="-67"
              strokeLinecap="round"
            />
          </svg>

          {/* Centered Count */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
            <span className="text-xl font-black text-slate-800 leading-none">
              {aiRiskData.total}
            </span>
            <span className="text-[9px] font-bold text-slate-400 tracking-tight mt-0.5">
              Total Risks
            </span>
          </div>
        </div>

        {/* Legend List */}
        <div className="flex flex-col space-y-2.5 w-full">
          {aiRiskData.breakdown.map((item) => (
            <div key={item.label} className="flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-2 text-slate-600">
                <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                {item.label}
              </span>
              <span className="font-bold text-slate-800">
                {item.count} <span className="text-slate-400 font-normal text-[11px]">({item.percent})</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Model Update Notice */}
      <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-semibold text-slate-400">
        <Sparkles className="w-3.5 h-3.5 text-blue-500" />
        <span>AI model updated {aiRiskData.updated}</span>
      </div>
    </div>
  );
}
