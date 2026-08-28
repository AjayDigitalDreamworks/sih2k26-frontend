import React from 'react';
import { Plus, Minus, Crosshair, MapPin } from 'lucide-react';
import heroBg from '../../assets/hero-bg.jpeg';

export default function RouteMap() {
  return (
    <div className="relative w-full h-full min-h-[460px] lg:min-h-[520px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs bg-slate-950 select-none group">
      {/* Topographic Satellite Terrain Image */}
      <img
        src={heroBg}
        alt="Northeast India Route Optimization Map"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-90 scale-105"
      />

      {/* Map Contrast Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/15 to-slate-950/30 pointer-events-none z-[1]" />

      {/* SVG Multi-Stop Route Lines Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5]" viewBox="0 0 900 650" fill="none" preserveAspectRatio="none">
        {/* Route Segment S -> 1: Guwahati to Mangaldoi (Blue) */}
        <path
          d="M 200 230 C 260 210, 310 180, 420 160 C 510 140, 580 120, 680 90"
          stroke="#2563EB"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Route Segment 1 -> 2: Mangaldoi to Nagaon (Purple) */}
        <path
          d="M 680 90 C 660 170, 610 230, 530 260 C 510 270, 490 280, 470 310"
          stroke="#9333EA"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Route Segment 2 -> 3: Nagaon to Hojai (Orange) */}
        <path
          d="M 470 310 C 450 350, 430 390, 425 430"
          stroke="#F97316"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Route Segment 3 -> 4: Hojai to Shillong (Red) */}
        <path
          d="M 425 430 C 390 440, 350 450, 305 455"
          stroke="#EF4444"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Route Segment 4 -> 5: Shillong to Dimapur (Green) */}
        <path
          d="M 305 455 C 380 430, 470 390, 530 370 C 570 350, 620 340, 650 345"
          stroke="#10B981"
          strokeWidth="3.5"
          strokeDasharray="4 2"
          strokeLinecap="round"
        />

        {/* Route Segment 5 -> 6: Dimapur to Tezpur (Green) */}
        <path
          d="M 650 345 C 660 290, 660 230, 655 190"
          stroke="#10B981"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Route Segment 6 -> E: Tezpur back to Guwahati (Green Dotted/Dashed) */}
        <path
          d="M 655 190 C 560 180, 450 170, 360 190 C 290 210, 240 220, 200 230"
          stroke="#10B981"
          strokeWidth="3.5"
          strokeDasharray="6 3"
          strokeLinecap="round"
        />
      </svg>

      {/* State & Landmark Geographic Labels */}
      <div className="absolute top-[12%] left-[32%] pointer-events-none z-[6]">
        <span className="text-xs font-black text-white/90 drop-shadow-lg tracking-widest">ASSAM</span>
      </div>
      <div className="absolute top-[38%] left-[22%] pointer-events-none z-[6]">
        <span className="text-xs font-black text-white/90 drop-shadow-lg tracking-widest">MEGHALAYA</span>
      </div>

      {/* Brahmaputra River Label */}
      <div className="absolute top-[20%] left-[34%] pointer-events-none z-[6] -rotate-12">
        <span className="text-[10px] font-bold text-blue-200/80 drop-shadow italic">Brahmaputra River</span>
      </div>

      {/* City Labels */}
      <div className="absolute top-[18%] left-[20%] pointer-events-none z-[6] text-[10px] font-bold text-white drop-shadow">
        North Guwahati
      </div>
      <div className="absolute top-[26%] left-[19%] pointer-events-none z-[6] text-[11px] font-black text-white drop-shadow">
        Guwahati
      </div>
      <div className="absolute top-[16%] left-[45%] pointer-events-none z-[6] text-[10px] font-bold text-white drop-shadow">
        Tezpur
      </div>
      <div className="absolute top-[12%] left-[64%] pointer-events-none z-[6] text-[10px] font-bold text-white drop-shadow">
        Mangaldoi
      </div>
      <div className="absolute top-[32%] left-[49%] pointer-events-none z-[6] text-[10px] font-bold text-white drop-shadow">
        Nagaon
      </div>
      <div className="absolute top-[38%] left-[40%] pointer-events-none z-[6] text-[10px] font-bold text-white drop-shadow">
        Hapjan
      </div>
      <div className="absolute top-[44%] left-[47%] pointer-events-none z-[6] text-[10px] font-bold text-white drop-shadow">
        Hojai
      </div>
      <div className="absolute top-[48%] left-[23%] pointer-events-none z-[6] text-[10px] font-bold text-white drop-shadow">
        Shillong
      </div>
      <div className="absolute top-[38%] left-[68%] pointer-events-none z-[6] text-[10px] font-bold text-white drop-shadow">
        Dimapur
      </div>

      {/* Highway Number Tags */}
      <div className="absolute top-[28%] left-[30%] z-[7] pointer-events-none">
        <span className="px-1.5 py-0.5 rounded bg-blue-900/90 text-white text-[8px] font-extrabold border border-blue-400/60 shadow-sm">
          NH-27
        </span>
      </div>
      <div className="absolute top-[22%] left-[49%] z-[7] pointer-events-none">
        <span className="px-1.5 py-0.5 rounded bg-blue-900/90 text-white text-[8px] font-extrabold border border-blue-400/60 shadow-sm">
          NH-37
        </span>
      </div>
      <div className="absolute top-[15%] left-[56%] z-[7] pointer-events-none">
        <span className="px-1.5 py-0.5 rounded bg-blue-900/90 text-white text-[8px] font-extrabold border border-blue-400/60 shadow-sm">
          NH-127B
        </span>
      </div>
      <div className="absolute top-[37%] left-[58%] z-[7] pointer-events-none">
        <span className="px-1.5 py-0.5 rounded bg-blue-900/90 text-white text-[8px] font-extrabold border border-blue-400/60 shadow-sm">
          NH-02
        </span>
      </div>

      {/* Stop Markers */}
      {/* Start / Destination Point: Guwahati */}
      <div className="absolute top-[24%] left-[22%] -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer group/pin flex items-center justify-center">
        <div className="w-7 h-7 rounded-full bg-emerald-600 border-2 border-white shadow-xl flex items-center justify-center text-white font-black text-xs group-hover/pin:scale-110 transition-transform">
          <MapPin className="w-4 h-4 fill-white" />
        </div>
      </div>

      {/* Stop 1: Mangaldoi (Blue 1) */}
      <div className="absolute top-[10%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer hover:scale-110 transition-transform">
        <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-white shadow-xl flex items-center justify-center text-white font-black text-xs">
          1
        </div>
      </div>

      {/* Stop 2: Nagaon (Purple 2) */}
      <div className="absolute top-[35%] left-[53%] -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer hover:scale-110 transition-transform">
        <div className="w-6 h-6 rounded-full bg-purple-600 border-2 border-white shadow-xl flex items-center justify-center text-white font-black text-xs">
          2
        </div>
      </div>

      {/* Stop 3: Hojai (Orange 3) */}
      <div className="absolute top-[48%] left-[47%] -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer hover:scale-110 transition-transform">
        <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white shadow-xl flex items-center justify-center text-white font-black text-xs">
          3
        </div>
      </div>

      {/* Stop 4: Shillong (Red 4) */}
      <div className="absolute top-[50%] left-[34%] -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer hover:scale-110 transition-transform">
        <div className="w-6 h-6 rounded-full bg-rose-600 border-2 border-white shadow-xl flex items-center justify-center text-white font-black text-xs">
          4
        </div>
      </div>

      {/* Stop 5: Dimapur (Green 5) */}
      <div className="absolute top-[38%] left-[66%] -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer hover:scale-110 transition-transform">
        <div className="w-6 h-6 rounded-full bg-emerald-600 border-2 border-white shadow-xl flex items-center justify-center text-white font-black text-xs">
          5
        </div>
      </div>

      {/* Stop 6: Tezpur (Green 6) */}
      <div className="absolute top-[21%] left-[69%] -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer hover:scale-110 transition-transform">
        <div className="w-6 h-6 rounded-full bg-emerald-600 border-2 border-white shadow-xl flex items-center justify-center text-white font-black text-xs">
          6
        </div>
      </div>

      {/* Floating Map Controls (Right-Center) */}
      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 flex flex-col space-y-1.5 pointer-events-auto">
        <button
          type="button"
          className="w-8 h-8 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors focus:outline-none cursor-pointer"
          aria-label="Zoom In"
        >
          <Plus className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="w-8 h-8 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors focus:outline-none cursor-pointer"
          aria-label="Zoom Out"
        >
          <Minus className="w-4 h-4" />
        </button>
        <button
          type="button"
          className="w-8 h-8 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors focus:outline-none cursor-pointer"
          aria-label="Recenter"
        >
          <Crosshair className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom-Left Map Legend */}
      <div className="absolute bottom-3 left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-md border border-slate-200/80 flex items-center gap-4 text-[10px] font-bold text-slate-700">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
          <span>Start Point</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
          <span>Destination</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-0.5 bg-blue-600 rounded-full" />
          <span>Route</span>
        </div>
      </div>
    </div>
  );
}
