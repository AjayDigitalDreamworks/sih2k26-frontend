import React from 'react';
import { alertsTrendData } from '../../data/alertsData';

export default function AlertsTrend() {
  const { days, series, yAxis } = alertsTrendData;
  const maxY = 40;

  // Chart dimensions in viewBox coordinates
  const width = 340;
  const height = 120;
  const paddingLeft = 10;
  const paddingRight = 10;
  const paddingTop = 10;
  const paddingBottom = 10;

  const chartW = width - paddingLeft - paddingRight;
  const chartH = height - paddingTop - paddingBottom;

  // Helper to calculate X and Y coordinates
  const getX = (index) => paddingLeft + (index / (days.length - 1)) * chartW;
  const getY = (val) => paddingTop + chartH - (val / maxY) * chartH;

  // Generate SVG path for a data series
  const generatePath = (values) => {
    return values
      .map((val, idx) => {
        const x = getX(idx);
        const y = getY(val);
        return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(' ');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight mb-1.5">
        Alerts Trend (Last 7 Days)
      </h3>

      {/* Line Chart Area */}
      <div className="flex items-center gap-1 my-auto">
        {/* Y-Axis Labels */}
        <div className="flex flex-col justify-between h-28 pr-1 text-[9px] font-bold text-slate-400 flex-shrink-0 select-none">
          {yAxis.map((y) => (
            <span key={y}>{y}</span>
          ))}
        </div>

        {/* SVG Multi-Line Chart Canvas */}
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

              {/* Data Series Lines & Points */}
              {series.map((s) => {
                const pathD = generatePath(s.values);

                return (
                  <g key={s.name}>
                    {/* Line */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={s.color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Circular points */}
                    {s.values.map((val, idx) => (
                      <circle
                        key={idx}
                        cx={getX(idx)}
                        cy={getY(val)}
                        r="3"
                        fill={s.color}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                    ))}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* X-Axis Days */}
          <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-bold text-slate-400 pt-1.5 px-1">
            {days.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Legend Row at Bottom */}
      <div className="flex items-center justify-center gap-3.5 pt-2 text-[10px] font-bold text-slate-600 border-t border-slate-50">
        {series.map((s) => (
          <div key={s.name} className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-0.5 rounded-full"
              style={{ backgroundColor: s.color }}
            />
            <span className="text-[10px] text-slate-600">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
