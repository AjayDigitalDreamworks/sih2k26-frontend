import React from 'react';
import { Plus, Minus } from 'lucide-react';
import heroBg from '../../assets/hero-bg.jpeg';

export default function ReportsByLocation() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full min-h-[220px]">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Reports by Location
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View Full Map
        </button>
      </div>

      {/* Map Graphic Container */}
      <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden border border-slate-200/70 select-none bg-slate-100">
        {/* Light Map Background */}
        <img
          src={heroBg}
          alt="Reports by Location Map"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none brightness-125 contrast-75 saturate-50 opacity-95"
        />

        {/* Tint overlay */}
        <div className="absolute inset-0 bg-white/25 pointer-events-none" />

        {/* SVG River / Highway route lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 250" fill="none" preserveAspectRatio="none">
          <path
            d="M 60 140 C 120 120, 180 110, 240 80 C 280 60, 340 50, 390 40"
            stroke="#93C5FD"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 240 80 C 260 120, 280 160, 320 190 C 350 210, 380 230, 400 240"
            stroke="#93C5FD"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Location Markers */}
        {/* 1. Tezpur (Red 8) */}
        <div className="absolute top-[22%] left-[84%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-pointer">
          <div className="w-5 h-5 rounded-full bg-rose-600 border border-white shadow-md flex items-center justify-center text-white font-black text-[10px] group-hover:scale-110 transition-transform">
            8
          </div>
          <span className="text-[8px] font-extrabold text-slate-800 drop-shadow-xs leading-none mt-0.5">Tezpur</span>
        </div>

        {/* 2. Nagaon (Orange 5) */}
        <div className="absolute top-[44%] left-[89%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-pointer">
          <div className="w-5 h-5 rounded-full bg-orange-500 border border-white shadow-md flex items-center justify-center text-white font-black text-[10px] group-hover:scale-110 transition-transform">
            5
          </div>
          <span className="text-[8px] font-extrabold text-slate-800 drop-shadow-xs leading-none mt-0.5">Nagaon</span>
        </div>

        {/* 3. Guwahati (Green 12) */}
        <div className="absolute top-[52%] left-[18%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-pointer">
          <div className="w-5 h-5 rounded-full bg-emerald-600 border border-white shadow-md flex items-center justify-center text-white font-black text-[9px] group-hover:scale-110 transition-transform">
            12
          </div>
          <span className="text-[8px] font-extrabold text-slate-800 drop-shadow-xs leading-none mt-0.5">Guwahati</span>
        </div>

        {/* 4. Hojai (Purple 4) */}
        <div className="absolute top-[68%] left-[86%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-pointer">
          <div className="w-5 h-5 rounded-full bg-purple-600 border border-white shadow-md flex items-center justify-center text-white font-black text-[10px] group-hover:scale-110 transition-transform">
            4
          </div>
          <span className="text-[8px] font-extrabold text-slate-800 drop-shadow-xs leading-none mt-0.5">Hojai</span>
        </div>

        {/* 5. Diphu (Blue 3) */}
        <div className="absolute top-[75%] left-[93%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-pointer">
          <div className="w-5 h-5 rounded-full bg-blue-600 border border-white shadow-md flex items-center justify-center text-white font-black text-[10px] group-hover:scale-110 transition-transform">
            3
          </div>
          <span className="text-[8px] font-extrabold text-slate-800 drop-shadow-xs leading-none mt-0.5">Diphu</span>
        </div>

        {/* Zoom Controls */}
        <div className="absolute right-2 bottom-2 z-20 flex flex-col space-y-1">
          <button
            type="button"
            className="w-5 h-5 rounded-md bg-white/95 backdrop-blur-md shadow-xs border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Plus className="w-3 h-3" />
          </button>
          <button
            type="button"
            className="w-5 h-5 rounded-md bg-white/95 backdrop-blur-md shadow-xs border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Minus className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
