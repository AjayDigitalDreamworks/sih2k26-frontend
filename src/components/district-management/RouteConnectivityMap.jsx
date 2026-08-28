import React from 'react';
import heroBg from '../../assets/hero-bg.jpeg';

export default function RouteConnectivityMap() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight mb-3">
        Route Connectivity Overview
      </h3>

      {/* Map Container */}
      <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[380px] rounded-xl overflow-hidden border border-slate-200/70 select-none bg-slate-100">
        {/* Light Map Background */}
        <img
          src={heroBg}
          alt="District Route Connectivity Map"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none brightness-125 contrast-75 saturate-50 opacity-95"
        />

        {/* Contrast overlay */}
        <div className="absolute inset-0 bg-white/30 pointer-events-none" />

        {/* SVG Route Lines & District Boundary */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
          viewBox="0 0 700 450"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* District Outer Boundary (Dashed/polygon line) */}
          <path
            d="M 180 220 C 200 180, 260 160, 310 160 C 360 160, 420 180, 470 200 C 520 220, 580 230, 620 260 C 590 300, 540 330, 480 340 C 420 350, 360 360, 300 340 C 240 320, 190 280, 180 220 Z"
            stroke="#16A34A"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            fill="#16A34A"
            fillOpacity="0.03"
          />

          {/* NH-27 Route Line (Green - Good Accessibility) */}
          <path
            d="M 280 200 C 290 190, 300 180, 310 170 C 320 190, 315 230, 310 270"
            stroke="#16A34A"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* NH-15 Route Line (Green - Good Accessibility) */}
          <path
            d="M 310 170 C 370 180, 430 190, 490 200 C 530 210, 570 220, 600 240"
            stroke="#16A34A"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* NH-217 Route Line (Orange - Moderate Partial Access) */}
          <path
            d="M 490 200 C 520 230, 560 260, 610 270"
            stroke="#F97316"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* SH-2 Route Line (Green - Good Accessibility) */}
          <path
            d="M 310 270 C 320 310, 330 350, 340 380"
            stroke="#16A34A"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* SH-16 Route Line (Red - Poor / Not Accessible) */}
          <path
            d="M 310 270 C 360 280, 410 290, 460 310 C 475 330, 475 350, 480 370"
            stroke="#EF4444"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Route Number Badges */}
        {/* NH-27 (Green) */}
        <div className="absolute top-[37%] left-[44%] -translate-x-1/2 -translate-y-1/2 z-10">
          <span className="px-2 py-0.5 rounded bg-emerald-800 text-white text-[9px] font-black shadow-sm border border-emerald-600">
            NH-27
          </span>
        </div>

        {/* NH-15 (Green) */}
        <div className="absolute top-[38%] left-[64%] -translate-x-1/2 -translate-y-1/2 z-10">
          <span className="px-2 py-0.5 rounded bg-emerald-800 text-white text-[9px] font-black shadow-sm border border-emerald-600">
            NH-15
          </span>
        </div>

        {/* NH-217 (Orange) */}
        <div className="absolute top-[44%] left-[78%] -translate-x-1/2 -translate-y-1/2 z-10">
          <span className="px-2 py-0.5 rounded bg-orange-600 text-white text-[9px] font-black shadow-sm border border-orange-400">
            NH-217
          </span>
        </div>

        {/* SH-2 (Green) */}
        <div className="absolute top-[60%] left-[44%] -translate-x-1/2 -translate-y-1/2 z-10">
          <span className="px-2 py-0.5 rounded bg-emerald-800 text-white text-[9px] font-black shadow-sm border border-emerald-600">
            SH-2
          </span>
        </div>

        {/* SH-16 (Red) */}
        <div className="absolute top-[61%] left-[66%] -translate-x-1/2 -translate-y-1/2 z-10">
          <span className="px-2 py-0.5 rounded bg-rose-700 text-white text-[9px] font-black shadow-sm border border-rose-500">
            SH-16
          </span>
        </div>

        {/* Bottom-Left Legend Panel */}
        <div className="absolute bottom-3 left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 shadow-md border border-slate-200/80 flex flex-col space-y-1.5 text-[10px] font-bold text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-emerald-600 rounded-full flex-shrink-0" />
            <span>Good (High Accessibility)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-orange-500 rounded-full flex-shrink-0" />
            <span>Moderate (Partial Access)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-rose-600 rounded-full flex-shrink-0" />
            <span>Poor (Not Accessible)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
