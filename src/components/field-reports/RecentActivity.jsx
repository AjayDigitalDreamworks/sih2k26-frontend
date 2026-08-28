import React from 'react';
import { AlertTriangle, CheckCircle2, Clock, Construction, Cloud } from 'lucide-react';
import { recentActivityData } from '../../data/fieldReportsData';

export default function RecentActivity() {
  const getActivityIcon = (iconType) => {
    switch (iconType) {
      case 'danger':
        return <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />;
      case 'success':
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />;
      case 'warning':
        return <Clock className="w-3.5 h-3.5 text-orange-500" />;
      case 'purple':
        return <Construction className="w-3.5 h-3.5 text-purple-600" />;
      case 'info':
        return <Cloud className="w-3.5 h-3.5 text-blue-500" />;
      default:
        return <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Recent Activity
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Activity List */}
      <div className="divide-y divide-slate-50 my-auto">
        {recentActivityData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 py-2 text-xs hover:bg-slate-50/70 px-1 rounded-lg transition-colors cursor-pointer"
          >
            {/* Left: Icon & Label */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="flex-shrink-0">
                {getActivityIcon(item.iconType)}
              </div>
              <span className="text-[11px] font-semibold text-slate-700 truncate leading-tight">
                {item.text}
              </span>
            </div>

            {/* Right: Timestamp */}
            <span className="text-[10px] font-semibold text-slate-400 flex-shrink-0">
              {item.time}
            </span>
          </div>
        ))}
      </div>

      {/* View All Activity Button */}
      <button
        type="button"
        className="w-full mt-3 py-2 px-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs shadow-2xs hover:shadow-xs transition-all cursor-pointer text-center"
      >
        View All Activity
      </button>
    </div>
  );
}
