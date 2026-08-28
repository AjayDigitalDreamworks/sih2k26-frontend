import React from 'react';
import { reportsTrendData } from '../../data/fieldReportsData';

export default function ReportsTrend() {
  const { days, values, yAxis } = reportsTrendData;
  const maxY = 50;

  const width = 340;
  const height = 120;
  const paddingLeft = 10;
  const paddingRight = 10;
  const paddingTop = 15;
  const paddingBottom = 10;

  const chartW = width - paddingLeft - paddingRight;
  const chartH = height - paddingTop - paddingBottom;

  const getX = (index) => paddingLeft + (index / (days.length - 1)) * chartW;
  const getY = (val) => paddingTop + chartH - (val / maxY) * chartH;

  const pathD = values
    .map((val, idx) => {
      const x = getX(idx);
      const y = getY(val);
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Reports Trend
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View Full Report
        </button>
      </div>

      {/* Chart Area */}
      <div className="flex items-center gap-1 my-auto">
        {/* Y-Axis Labels */}
        <div className="flex flex-col justify-between h-28 pr-1 text-[9px] font-bold text-slate-400 flex-shrink-0 select-none">
          {yAxis.map((y) => (
            <span key={y}>{y}</span>
          ))}
        </div>

        {/* SVG Canvas */}
        <div className="flex-1 flex flex-col">
          <div className="relative w-full h-28">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              {/* Horizontal Grid lines */}
              {yAxis.map((y) => {
                const yPos = getY(y);
                return (
                  <line
                    key={y}
                    x1={paddingLeft}
                    y1={yPos}
                    x2={width - paddingRight}
                    y2={yPos}
                    stroke="#f1f5f9"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                );
              })}

              {/* Green Line */}
              <path
                d={pathD}
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points & Value tags above */}
              {values.map((val, idx) => {
                const x = getX(idx);
                const y = getY(val);

                return (
                  <g key={idx}>
                    {/* Number on top */}
                    <text
                      x={x}
                      y={y - 6}
                      textAnchor="middle"
                      fill="#0B1E36"
                      fontSize="9"
                      fontWeight="bold"
                    >
                      {val}
                    </text>

                    {/* Circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r="3.5"
                      fill="#10B981"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* X-Axis Days */}
          <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-bold text-slate-400 pt-1 px-1">
            {days.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Legend Row */}
      <div className="flex items-center justify-center gap-2 pt-2 text-[10px] font-bold text-slate-600 border-t border-slate-50">
        <span className="w-4 h-0.5 bg-emerald-500 rounded-full" />
        <span>Reports</span>
      </div>
    </div>
  );
}
