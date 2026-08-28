import React from 'react';
import { Truck } from 'lucide-react';
import { activeVehiclesList } from '../../data/dashboardData';

export default function ActiveVehicles() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Active Vehicles
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Vehicle Rows List */}
      <div className="space-y-2.5 my-auto">
        {activeVehiclesList.map((vehicle) => (
          <div
            key={vehicle.id}
            className="flex items-center justify-between gap-2 text-xs py-1 border-b border-slate-50 last:border-0"
          >
            {/* Left Info with Truck Icon */}
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Truck className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-extrabold text-slate-800 text-[11px] truncate leading-tight">
                  {vehicle.id}
                </span>
                <span className="text-[10px] text-slate-400 font-medium truncate leading-tight">
                  {vehicle.route}
                </span>
              </div>
            </div>

            {/* Status Pill */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  vehicle.statusType === 'success' ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
              />
              <span
                className={`text-[10px] font-bold ${
                  vehicle.statusType === 'success' ? 'text-emerald-600' : 'text-amber-600'
                }`}
              >
                {vehicle.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
