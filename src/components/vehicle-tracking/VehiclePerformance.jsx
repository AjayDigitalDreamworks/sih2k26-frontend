import React from 'react';
import { Route, Fuel, Gauge, Clock, PackageCheck } from 'lucide-react';
import { vehiclePerformanceData } from '../../data/vehicleTrackingData';

export default function VehiclePerformance() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'distance':
        return <Route className="w-4 h-4 text-emerald-600" />;
      case 'fuel':
        return <Fuel className="w-4 h-4 text-emerald-600" />;
      case 'efficiency':
        return <Gauge className="w-4 h-4 text-emerald-600" />;
      case 'clock':
        return <Clock className="w-4 h-4 text-emerald-600" />;
      case 'delivery':
        return <PackageCheck className="w-4 h-4 text-emerald-600" />;
      default:
        return <Route className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-baseline gap-1.5 min-w-0">
          <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight truncate">
            Vehicle Performance
          </h3>
          <span className="text-[10px] text-slate-400 font-bold flex-shrink-0">
            (This Month)
          </span>
        </div>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer flex-shrink-0"
        >
          View Report
        </button>
      </div>

      {/* Metrics List */}
      <div className="divide-y divide-slate-50 my-auto">
        {vehiclePerformanceData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 py-2 text-xs"
          >
            {/* Left: Icon & Label */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                {getIcon(item.icon)}
              </div>
              <span className="text-[11px] font-bold text-slate-700 truncate">
                {item.label}
              </span>
            </div>

            {/* Right: Value */}
            <span className="text-xs font-black text-slate-900 flex-shrink-0">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
