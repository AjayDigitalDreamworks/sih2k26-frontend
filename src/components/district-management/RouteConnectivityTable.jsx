import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function RouteConnectivityTable({ routes }) {
  const [currentPage, setCurrentPage] = useState(1);

  const getStatusBadge = (statusType) => {
    switch (statusType) {
      case 'good':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200/80';
      case 'moderate':
        return 'bg-amber-50 text-amber-600 border-amber-200/80';
      case 'poor':
        return 'bg-rose-50 text-rose-600 border-rose-200/80';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200/80';
    }
  };

  const getProgressBarColor = (statusType) => {
    switch (statusType) {
      case 'good':
        return 'bg-emerald-600';
      case 'moderate':
        return 'bg-amber-500';
      case 'poor':
        return 'bg-rose-600';
      default:
        return 'bg-slate-400';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-5 flex flex-col justify-between">
      {/* Title */}
      <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight mb-3">
        Route-wise Connectivity
      </h3>

      {/* Table Container */}
      <div className="overflow-x-auto custom-scrollbar -mx-4 sm:mx-0">
        <table className="w-full text-left text-xs min-w-[720px]">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400">
              <th className="py-2.5 px-3 font-bold">Route Name</th>
              <th className="py-2.5 px-3 font-bold">Route Type</th>
              <th className="py-2.5 px-3 font-bold">From</th>
              <th className="py-2.5 px-3 font-bold">To</th>
              <th className="py-2.5 px-3 font-bold">Total Distance</th>
              <th className="py-2.5 px-3 font-bold text-center">Accessibility Status</th>
              <th className="py-2.5 px-3 font-bold">Accessibility (%)</th>
              <th className="py-2.5 px-3 font-bold text-right">Last Updated</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-50 text-[11px]">
            {routes.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70 transition-colors">
                {/* Route Name */}
                <td className="py-3 px-3 font-extrabold text-slate-900 whitespace-nowrap">
                  {row.routeName}
                </td>

                {/* Route Type */}
                <td className="py-3 px-3 font-medium text-slate-600 whitespace-nowrap">
                  {row.routeType}
                </td>

                {/* From */}
                <td className="py-3 px-3 font-medium text-slate-700 whitespace-nowrap">
                  {row.from}
                </td>

                {/* To */}
                <td className="py-3 px-3 font-medium text-slate-700 whitespace-nowrap">
                  {row.to}
                </td>

                {/* Total Distance */}
                <td className="py-3 px-3 font-semibold text-slate-800 whitespace-nowrap">
                  {row.distance}
                </td>

                {/* Accessibility Status Pill */}
                <td className="py-3 px-3 text-center whitespace-nowrap">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getStatusBadge(
                      row.statusType
                    )}`}
                  >
                    {row.status}
                  </span>
                </td>

                {/* Accessibility Progress Bar */}
                <td className="py-3 px-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800 text-[11px] min-w-[32px]">
                      {row.accessibility}%
                    </span>
                    <div className="w-16 h-1.5 rounded-full bg-slate-100 overflow-hidden flex-shrink-0">
                      <div
                        style={{ width: `${row.accessibility}%` }}
                        className={`h-full rounded-full transition-all ${getProgressBarColor(
                          row.statusType
                        )}`}
                      />
                    </div>
                  </div>
                </td>

                {/* Last Updated */}
                <td className="py-3 px-3 text-right font-medium text-slate-500 whitespace-nowrap">
                  {row.lastUpdated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-100 text-xs mt-3">
        <span className="text-slate-400 font-medium">
          Showing 1 to 5 of 24 routes
        </span>

        {/* Controls */}
        <div className="flex items-center gap-1 self-end sm:self-auto select-none">
          <button
            type="button"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-7 h-7 rounded-lg border border-slate-200/90 bg-white hover:bg-slate-50 disabled:opacity-40 flex items-center justify-center text-slate-600 shadow-2xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage(1)}
            className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentPage === 1
                ? 'bg-[#1B5E20] text-white shadow-xs'
                : 'border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs'
            }`}
          >
            1
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage(2)}
            className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentPage === 2
                ? 'bg-[#1B5E20] text-white shadow-xs'
                : 'border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs'
            }`}
          >
            2
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage(3)}
            className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentPage === 3
                ? 'bg-[#1B5E20] text-white shadow-xs'
                : 'border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs'
            }`}
          >
            3
          </button>

          <span className="px-1 text-slate-400 font-bold">...</span>

          <button
            type="button"
            onClick={() => setCurrentPage(5)}
            className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              currentPage === 5
                ? 'bg-[#1B5E20] text-white shadow-xs'
                : 'border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs'
            }`}
          >
            5
          </button>

          <button
            type="button"
            onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
            className="w-7 h-7 rounded-lg border border-slate-200/90 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-2xs transition-colors cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
