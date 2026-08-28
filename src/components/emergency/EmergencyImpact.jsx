import React from 'react';
import { Ban, AlertTriangle, Route, Truck, Clock } from 'lucide-react';
import { emergencyImpactData } from '../../data/emergencyData';

export default function EmergencyImpact() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'traffic':
        return <Ban className="w-4 h-4 text-slate-500" />;
      case 'alert-triangle':
        return <AlertTriangle className="w-4 h-4 text-slate-500" />;
      case 'route':
        return <Route className="w-4 h-4 text-slate-500" />;
      case 'truck':
        return <Truck className="w-4 h-4 text-slate-500" />;
      case 'clock':
        return <Clock className="w-4 h-4 text-slate-500" />;
      default:
        return <AlertTriangle className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-5 flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight mb-3">
        Emergency Impact
      </h3>

      {/* Metric Rows */}
      <div className="divide-y divide-slate-100 my-auto">
        {emergencyImpactData.map((row) => (
          <div key={row.id} className="flex items-center justify-between py-3.5 text-xs sm:text-sm">
            {/* Left: Icon + Label */}
            <span className="flex items-center gap-2 font-medium text-slate-500">
              {getIcon(row.icon)}
              <span>{row.label}</span>
            </span>

            {/* Right: Value */}
            <span className={row.valueColor}>
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
