import React from 'react';
import { AlertTriangle, Ban, Waves, CloudRain } from 'lucide-react';
import { liveMapTrafficOverview, liveMapRecentIncidents } from '../../data/liveMapData';

export default function TrafficOverviewPanel() {
  const getIncidentIcon = (type) => {
    switch (type) {
      case 'landslide':
        return (
          <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-3.5 h-3.5" />
          </div>
        );
      case 'blocked':
        return (
          <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0">
            <Ban className="w-3.5 h-3.5" />
          </div>
        );
      case 'flood':
        return (
          <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
            <Waves className="w-3.5 h-3.5" />
          </div>
        );
      case 'rain':
        return (
          <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
            <CloudRain className="w-3.5 h-3.5" />
          </div>
        );
      default:
        return (
          <div className="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-3.5 h-3.5" />
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Top: Traffic Overview Donut Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between flex-1">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
            Traffic Overview
          </h3>
          <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-600">
            <button className="hover:text-emerald-700 cursor-pointer">View Full Report</button>
            <span className="text-slate-300">•</span>
            <button className="hover:text-emerald-700 cursor-pointer">View All</button>
          </div>
        </div>

        {/* Donut Chart & Legend */}
        <div className="flex items-center gap-3 my-auto py-1 min-w-0">
          {/* SVG Donut Chart */}
          <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="14" fill="transparent" stroke="#f1f5f9" strokeWidth="4.5" />
              {/* Smooth 53% (Green) */}
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="transparent"
                stroke="#10B981"
                strokeWidth="4.5"
                strokeDasharray="53 47"
                strokeDashoffset="0"
                strokeLinecap="round"
              />
              {/* Moderate 28% (Yellow) */}
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="transparent"
                stroke="#FBBF24"
                strokeWidth="4.5"
                strokeDasharray="28 72"
                strokeDashoffset="-53"
                strokeLinecap="round"
              />
              {/* Heavy 13% (Orange) */}
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="transparent"
                stroke="#F97316"
                strokeWidth="4.5"
                strokeDasharray="13 87"
                strokeDashoffset="-81"
                strokeLinecap="round"
              />
              {/* Blocked 6% (Red) */}
              <circle
                cx="18"
                cy="18"
                r="14"
                fill="transparent"
                stroke="#EF4444"
                strokeWidth="4.5"
                strokeDasharray="6 94"
                strokeDashoffset="-94"
                strokeLinecap="round"
              />
            </svg>

            {/* Center Count */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
              <span className="text-base font-black text-slate-800 leading-none">
                {liveMapTrafficOverview.total}
              </span>
              <span className="text-[8px] font-bold text-slate-400 mt-0.5">Total Routes</span>
            </div>
          </div>

          {/* Breakdown List */}
          <div className="flex flex-col space-y-1.5 min-w-0 flex-1">
            {liveMapTrafficOverview.breakdown.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-1 text-[11px] font-medium">
                <span className="flex items-center gap-1.5 text-slate-600 truncate min-w-0">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.color}`} />
                  <span className="truncate">{item.label}</span>
                </span>
                <span className="font-bold text-slate-800 flex-shrink-0">
                  {item.count} <span className="text-slate-400 font-normal text-[10px]">({item.percent})</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Recent Incidents List Card */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between flex-1">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
            Recent Incidents
          </h3>
          <button
            type="button"
            className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
          >
            View All
          </button>
        </div>

        {/* Incidents Rows */}
        <div className="space-y-2 my-auto">
          {liveMapRecentIncidents.map((incident) => (
            <div
              key={incident.id}
              className="flex items-center justify-between gap-2 text-xs py-1 border-b border-slate-50 last:border-0"
            >
              <div className="flex items-center gap-2 min-w-0">
                {getIncidentIcon(incident.type)}
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-slate-800 text-[11px] truncate leading-tight">
                    {incident.title}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium truncate leading-tight">
                    {incident.location}
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-semibold text-slate-400 flex-shrink-0">
                {incident.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
