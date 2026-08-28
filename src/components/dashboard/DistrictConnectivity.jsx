import React from 'react';
import { districtConnectivityList } from '../../data/dashboardData';

export default function DistrictConnectivity() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <h3 className="text-sm font-extrabold text-[#0B1E36] tracking-tight">
          District-wise Connectivity
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Connectivity Table */}
      <div className="overflow-x-auto my-auto py-1">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
              <th className="pb-2 font-bold">District</th>
              <th className="pb-2 font-bold text-center">Good</th>
              <th className="pb-2 font-bold text-center">Moderate</th>
              <th className="pb-2 font-bold text-center">At Risk</th>
              <th className="pb-2 font-bold text-center">Blocked</th>
              <th className="pb-2 font-bold text-right min-w-[120px]">Connectivity Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 font-medium text-slate-700">
            {districtConnectivityList.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="py-2.5 font-bold text-slate-800 text-[11px] whitespace-nowrap">
                  {row.name}
                </td>
                <td className="py-2.5 text-center text-slate-600 text-[11px]">{row.good}</td>
                <td className="py-2.5 text-center text-slate-600 text-[11px]">{row.moderate}</td>
                <td className="py-2.5 text-center text-slate-600 text-[11px]">{row.atRisk}</td>
                <td className="py-2.5 text-center text-slate-600 text-[11px]">{row.blocked}</td>
                <td className="py-2.5 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-20 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${row.scoreColor}`}
                        style={{ width: `${row.score}%` }}
                      />
                    </div>
                    <span className="font-extrabold text-slate-800 text-[11px] w-8 text-right">
                      {row.score}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Threshold Legend */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px] font-bold text-slate-500 overflow-x-auto gap-2">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Good (&gt;70%)</span>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Moderate (40–69%)</span>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          <span>At Risk (20–39%)</span>
        </div>
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span>Blocked (&lt;20%)</span>
        </div>
      </div>
    </div>
  );
}
