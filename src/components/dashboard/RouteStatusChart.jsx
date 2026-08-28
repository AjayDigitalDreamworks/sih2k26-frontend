import React from 'react';
import { routeStatusChartData } from '../../data/dashboardData';

export default function RouteStatusChart() {
  const { labels, yAxis, series } = routeStatusChartData;

  // Chart coordinates mapping (Width: 500, Height: 160, Padding-Left: 40, Padding-Bottom: 25)
  const chartW = 460;
  const chartH = 130;
  const padLeft = 45;
  const padTop = 15;
  const maxVal = 1500;

  const getX = (idx) => padLeft + (idx / (labels.length - 1)) * (chartW - padLeft);
  const getY = (val) => padTop + chartH - (val / maxVal) * chartH;

  const createPath = (points) => {
    return points
      .map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${getX(idx)} ${getY(p)}`)
      .join(' ');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <h3 className="text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Route Status Overview
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View Full Report
        </button>
      </div>

      {/* SVG Multi-Line Chart Canvas */}
      <div className="relative w-full overflow-hidden my-auto py-2">
        <svg viewBox="0 0 480 180" className="w-full h-auto" fill="none">
          {/* Y-Axis Label */}
          <text
            x="-85"
            y="12"
            transform="rotate(-90)"
            className="text-[9px] fill-slate-400 font-bold tracking-tight"
          >
            No. of Routes
          </text>

          {/* Horizontal Grid Lines & Y-Labels */}
          {yAxis.map((val) => {
            const y = getY(val);
            return (
              <g key={val}>
                <line
                  x1={padLeft}
                  y1={y}
                  x2={chartW}
                  y2={y}
                  stroke="#f1f5f9"
                  strokeWidth="1"
                  strokeDasharray={val === 0 ? '0' : '2 2'}
                />
                <text
                  x={padLeft - 8}
                  y={y + 3}
                  textAnchor="end"
                  className="text-[9px] fill-slate-400 font-medium"
                >
                  {val === 0 ? '0' : val.toLocaleString()}
                </text>
              </g>
            );
          })}

          {/* Series Lines & Glowing Points */}
          {series.map((s) => (
            <g key={s.name}>
              {/* Stroke Line */}
              <path
                d={createPath(s.points)}
                stroke={s.color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Circular Data Points */}
              {s.points.map((p, idx) => (
                <circle
                  key={idx}
                  cx={getX(idx)}
                  cy={getY(p)}
                  r="3"
                  fill={s.color}
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
              ))}
            </g>
          ))}

          {/* X-Axis Date Labels */}
          {labels.map((label, idx) => (
            <text
              key={label}
              x={getX(idx)}
              y={padTop + chartH + 16}
              textAnchor="middle"
              className="text-[9px] fill-slate-400 font-semibold"
            >
              {label}
            </text>
          ))}
        </svg>
      </div>

      {/* Chart Legend */}
      <div className="flex items-center justify-center gap-4 pt-2 border-t border-slate-100 text-[11px] font-bold text-slate-600">
        {series.map((s) => (
          <div key={s.name} className="flex items-center gap-1.5">
            <span className="w-3 h-1 rounded-full" style={{ backgroundColor: s.color }} />
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
