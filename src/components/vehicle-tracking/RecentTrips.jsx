import React from 'react';
import { Truck } from 'lucide-react';
import { recentTripsData } from '../../data/vehicleTrackingData';

export default function RecentTrips() {
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

  const getProgressBarColor = (statusType) => {
    switch (statusType) {
      case 'success':
        return 'bg-emerald-600';
      case 'warning':
        return 'bg-amber-500';
      case 'danger':
        return 'bg-rose-600';
      default:
        return 'bg-slate-400';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Recent Trips
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left text-xs min-w-[520px]">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400">
              <th className="py-2 px-2 font-bold">Vehicle</th>
              <th className="py-2 px-2 font-bold">Driver</th>
              <th className="py-2 px-2 font-bold">Route</th>
              <th className="py-2 px-2 font-bold text-center">Start Time</th>
              <th className="py-2 px-2 font-bold text-center">Status</th>
              <th className="py-2 px-2 font-bold text-right">Progress</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-50 text-[11px]">
            {recentTripsData.map((trip) => (
              <tr key={trip.id} className="hover:bg-slate-50/80 transition-colors">
                {/* Vehicle with icon */}
                <td className="py-2.5 px-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 shadow-2xs ${trip.iconColor}`}
                    >
                      <Truck className="w-3 h-3" />
                    </div>
                    <span className="font-extrabold text-slate-900 text-[11px] truncate">
                      {trip.vehicle}
                    </span>
                  </div>
                </td>

                {/* Driver */}
                <td className="py-2.5 px-2 font-bold text-slate-700">
                  {trip.driver}
                </td>

                {/* Route */}
                <td className="py-2.5 px-2 font-medium text-slate-600">
                  {trip.route}
                </td>

                {/* Start Time */}
                <td className="py-2.5 px-2 text-center font-medium text-slate-500">
                  {trip.startTime}
                </td>

                {/* Status Badge */}
                <td className="py-2.5 px-2 text-center">
                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-md border ${getStatusBadge(
                      trip.statusType
                    )}`}
                  >
                    {trip.status}
                  </span>
                </td>

                {/* Progress Bar */}
                <td className="py-2.5 px-2 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-16 h-1.5 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                      <div
                        style={{ width: `${trip.progress}%` }}
                        className={`h-full rounded-full transition-all ${getProgressBarColor(
                          trip.statusType
                        )}`}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 min-w-[28px] text-right">
                      {trip.progress}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
