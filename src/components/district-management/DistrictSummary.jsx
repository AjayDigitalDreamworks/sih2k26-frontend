import React from 'react';
import { Calendar } from 'lucide-react';

export default function DistrictSummary({ summary }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-5 flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="text-[18px] font-bold text-[#0B1E36] tracking-tight mb-4">
        District Summary
      </h3>

      {/* Metric Rows */}
      <div className="divide-y divide-slate-100 my-auto">
        {/* District Name */}
        <div className="flex items-center justify-between py-4 text-sm">
          <span className="font-medium text-slate-500">District</span>
          <span className="font-bold text-slate-900">{summary.district}</span>
        </div>

        {/* Total Roads */}
        <div className="flex items-center justify-between py-4 text-sm">
          <span className="font-medium text-slate-500">Total Roads (KM)</span>
          <span className="font-bold text-slate-900">{summary.totalRoads}</span>
        </div>

        {/* Population */}
        <div className="flex items-center justify-between py-4 text-sm">
          <span className="font-medium text-slate-500">Population</span>
          <span className="font-bold text-slate-900">{summary.population}</span>
        </div>

        {/* Area */}
        <div className="flex items-center justify-between py-4 text-sm">
          <span className="font-medium text-slate-500">Area</span>
          <span className="font-bold text-slate-900">{summary.area}</span>
        </div>

        {/* Last Updated */}
        <div className="flex items-center justify-between py-4 text-sm">
          <span className="flex items-center gap-2 font-medium text-slate-500">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>Last Updated</span>
          </span>
          <span className="font-bold text-slate-700">{summary.lastUpdated}</span>
        </div>
      </div>
    </div>
  );
}
