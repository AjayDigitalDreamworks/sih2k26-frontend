import React from 'react';
import { AlertTriangle, CloudRain, Car, CheckCircle } from 'lucide-react';
import { recentAlertsList } from '../../data/dashboardData';

export default function RecentAlerts() {
  const getAlertIcon = (iconName) => {
    switch (iconName) {
      case 'warning':
        return <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />;
      case 'cloud-rain':
        return <CloudRain className="w-3.5 h-3.5 text-amber-500" />;
      case 'traffic':
        return <Car className="w-3.5 h-3.5 text-amber-500" />;
      case 'check-circle':
        return <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />;
      default:
        return <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Recent Alerts
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Alerts List */}
      <div className="space-y-2.5 my-auto">
        {recentAlertsList.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start justify-between gap-2 text-xs py-1 border-b border-slate-50 last:border-0"
          >
            {/* Icon and Description */}
            <div className="flex items-start gap-2 min-w-0">
              <div className="mt-0.5 flex-shrink-0">{getAlertIcon(alert.icon)}</div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-slate-800 text-[11px] leading-tight line-clamp-1">
                  {alert.title}
                </span>
                <span className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                  {alert.time}
                </span>
              </div>
            </div>

            {/* Severity Pill */}
            <span
              className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md border flex-shrink-0 ${alert.severityColor}`}
            >
              {alert.severity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
