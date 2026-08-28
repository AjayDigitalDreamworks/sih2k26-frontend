import React, { useState } from 'react';
import { Truck } from 'lucide-react';
import { liveMapVehicles } from '../../data/liveMapData';

export default function ActiveVehiclesMapPanel() {
  const [activeTab, setActiveTab] = useState('live');

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-5 flex flex-col justify-between h-full">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <h3 className="text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Active Vehicles (312)
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100/70 rounded-xl mb-3 border border-slate-200/60">
        <button
          type="button"
          onClick={() => setActiveTab('live')}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'live'
              ? 'bg-emerald-600 text-white shadow-2xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Live Tracking
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'all'
              ? 'bg-white text-slate-900 shadow-2xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          All Vehicles
        </button>
      </div>

      {/* Vehicles List */}
      <div className="space-y-2.5 my-auto">
        {liveMapVehicles.map((vehicle) => {
          const getStatusBadge = (statusType) => {
            switch (statusType) {
              case 'success':
                return 'bg-emerald-50 text-emerald-600 border-emerald-200/80';
              case 'warning':
                return 'bg-amber-50 text-amber-600 border-amber-200/80';
              case 'danger':
                return 'bg-rose-50 text-rose-600 border-rose-200/80';
              default:
                return 'bg-slate-50 text-slate-600 border-slate-200/80';
            }
          };

          return (
            <div
              key={vehicle.id}
              className="flex items-center justify-between gap-2 text-xs py-1 border-b border-slate-50 last:border-0"
            >
              {/* Left Details */}
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-extrabold text-slate-800 text-xs truncate leading-tight">
                    {vehicle.id}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium truncate leading-tight">
                    {vehicle.route}
                  </span>
                </div>
              </div>

              {/* Speed & Status Badge */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[10px] font-semibold text-slate-400">
                  {vehicle.speed}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getStatusBadge(
                    vehicle.statusType
                  )}`}
                >
                  {vehicle.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
