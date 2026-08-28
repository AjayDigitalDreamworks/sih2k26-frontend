import React from 'react';
import { Truck } from 'lucide-react';
import { liveVehiclesList } from '../../data/vehicleTrackingData';

export default function LiveVehicles() {
  const getStatusBadge = (statusType) => {
    switch (statusType) {
      case 'success':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200/80';
      case 'warning':
        return 'bg-amber-50 text-amber-600 border-amber-200/80';
      case 'danger':
        return 'bg-rose-50 text-rose-600 border-rose-200/80';
      case 'offline':
        return 'bg-slate-50 text-slate-500 border-slate-200/80';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200/80';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <h3 className="text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Live Vehicles
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Vehicle Rows List */}
      <div className="space-y-1.5 my-auto overflow-y-auto max-h-[470px] pr-1 custom-scrollbar">
        {liveVehiclesList.map((vehicle) => (
          <div
            key={vehicle.id}
            className="flex items-center justify-between gap-2 text-xs py-1 px-2 rounded-xl hover:bg-slate-50/80 transition-colors border border-transparent hover:border-slate-100"
          >
            {/* Left: Icon + Registration ID & Model */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 shadow-2xs ${vehicle.iconColor}`}
              >
                <Truck className="w-3.5 h-3.5" />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="font-extrabold text-slate-900 text-xs truncate leading-tight">
                  {vehicle.id}
                </span>
                <span className="text-[10px] text-slate-400 font-medium truncate leading-tight">
                  {vehicle.model}
                </span>
              </div>
            </div>

            {/* Middle: Driver Name */}
            <div className="hidden sm:flex flex-col min-w-0 text-left">
              <span className="text-[11px] font-bold text-slate-700 truncate leading-tight">
                {vehicle.driver}
              </span>
            </div>

            {/* Right: Status Badge, Speed, Timestamp */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getStatusBadge(
                  vehicle.statusType
                )}`}
              >
                {vehicle.status}
              </span>

              <span className="text-[10px] font-bold text-slate-700 min-w-[45px] text-right">
                {vehicle.speed}
              </span>

              <span className="text-[10px] font-medium text-slate-400 min-w-[50px] text-right">
                {vehicle.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
