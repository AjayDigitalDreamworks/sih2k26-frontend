import React from 'react';
import { AlertTriangle, ChevronRight } from 'lucide-react';
import { alertsSummaryData } from '../../data/vehicleTrackingData';

export default function AlertsSummary() {
  const getIconColor = (type) => {
    switch (type) {
      case 'danger':
        return 'text-rose-600 bg-rose-50 border-rose-200';
      case 'warning':
        return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'info':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Alerts Summary
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Alert Rows */}
      <div className="space-y-1.5 my-auto">
        {alertsSummaryData.map((alert) => (
          <div
            key={alert.id}
            className="flex items-center justify-between gap-2 p-2 rounded-xl hover:bg-slate-50/80 transition-colors cursor-pointer border border-transparent hover:border-slate-100"
          >
            {/* Left: Icon & Alert Title */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`w-6 h-6 rounded-lg border flex items-center justify-center flex-shrink-0 ${getIconColor(
                  alert.type
                )}`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-bold text-slate-700 truncate leading-tight">
                {alert.title}
              </span>
            </div>

            {/* Right: Count & Chevron */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="text-xs font-black text-slate-900">{alert.count}</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
