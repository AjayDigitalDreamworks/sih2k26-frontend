import React from 'react';
import { routeSummaryMetrics, routeSequence } from '../../data/routeOptimizationData';

export default function RouteSummary() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="text-sm font-extrabold text-[#0B1E36] tracking-tight mb-3">
        Optimized Route Summary
      </h3>

      {/* 4 Summary Metric Boxes */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {routeSummaryMetrics.map((metric) => (
          <div
            key={metric.id}
            className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-center text-left"
          >
            <span className="text-[9px] font-bold text-slate-400 truncate leading-tight">
              {metric.label}
            </span>
            <span className="text-xs sm:text-sm font-black text-slate-900 leading-tight mt-0.5">
              {metric.value}
            </span>
          </div>
        ))}
      </div>

      {/* Route Sequence Section */}
      <div className="flex-1 flex flex-col">
        <h4 className="text-xs font-bold text-slate-800 tracking-tight mb-2.5">
          Route Sequence
        </h4>

        {/* Timeline List */}
        <div className="space-y-2 flex-1 overflow-y-auto max-h-[310px] pr-1 custom-scrollbar">
          {routeSequence.map((step, idx) => (
            <div key={idx} className="flex items-center justify-between gap-2 text-xs py-0.5">
              {/* Badge + Name */}
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center font-black text-[10px] flex-shrink-0 shadow-2xs ${step.badgeColor}`}
                >
                  {step.id}
                </span>

                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-slate-800 text-[11px] truncate leading-tight">
                    {step.name}
                  </span>
                  {step.detail && (
                    <span className="text-[10px] text-slate-400 font-medium truncate leading-tight">
                      {step.detail}
                    </span>
                  )}
                </div>
              </div>

              {/* Timestamp */}
              <span className="text-[10px] font-semibold text-slate-500 flex-shrink-0">
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
