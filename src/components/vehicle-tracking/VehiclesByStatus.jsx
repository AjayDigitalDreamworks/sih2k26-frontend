import React from 'react';
import { vehiclesByStatusData } from '../../data/vehicleTrackingData';

export default function VehiclesByStatus() {
  const maxVal = 80;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight mb-2">
        Vehicles by Status
      </h3>

      {/* Bar Chart Container */}
      <div className="flex items-end gap-2.5 h-36 sm:h-40 pt-4 pb-2 border-b border-slate-100 relative">
        {/* Y-Axis Labels */}
        <div className="flex flex-col justify-between h-full pr-1.5 text-[9px] font-bold text-slate-400 flex-shrink-0 select-none">
          <span>80</span>
          <span>60</span>
          <span>40</span>
          <span>20</span>
          <span>0</span>
        </div>

        {/* 5 Bars */}
        <div className="flex-1 grid grid-cols-5 gap-1.5 sm:gap-2 h-full items-end">
          {vehiclesByStatusData.bars.map((bar) => {
            const heightPercent = bar.count === 0 ? 0 : Math.min(100, Math.round((bar.count / maxVal) * 100));

            return (
              <div key={bar.label} className="flex flex-col items-center h-full justify-end group">
                {/* Number on top */}
                <span className="text-[10px] font-bold text-slate-700 mb-1 leading-tight">
                  {bar.count}
                </span>

                {/* Colored bar */}
                <div
                  style={{ height: `${heightPercent}%`, minHeight: bar.count > 0 ? '4px' : '0px' }}
                  className={`w-full max-w-[28px] sm:max-w-[34px] rounded-t-md transition-all group-hover:opacity-90 ${bar.color}`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Labels */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 pt-2 text-center">
        {vehiclesByStatusData.bars.map((bar) => (
          <span key={bar.label} className="text-[9px] font-bold text-slate-500 truncate">
            {bar.label}
          </span>
        ))}
      </div>
    </div>
  );
}
