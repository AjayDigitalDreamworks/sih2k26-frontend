import React from 'react';
import { recentNotificationsList } from '../../data/alertsData';

export default function RecentNotifications() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Recent Notifications
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Notifications List */}
      <div className="divide-y divide-slate-50 my-auto">
        {recentNotificationsList.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 py-2.5 text-xs hover:bg-slate-50/70 px-1 rounded-lg transition-colors cursor-pointer"
          >
            {/* Left: Green Dot & Message */}
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 flex-shrink-0 shadow-2xs" />
              <span className="text-[11px] font-semibold text-slate-700 truncate">
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
    </div>
  );
}
