import React from 'react';
import { Plus, Minus } from 'lucide-react';
import heroBg from '../../assets/hero-bg.jpeg';

export default function AffectedRouteMap() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Section Title */}
      <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight mb-3">
        Affected Route
      </h3>

      {/* Map Container */}
      <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[380px] rounded-xl overflow-hidden border border-slate-200/70 select-none bg-slate-100">
        {/* Light Map Background */}
        <img
          src={heroBg}
          alt="Affected Route Map"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none brightness-125 contrast-75 saturate-50 opacity-95"
        />

        {/* Contrast overlay */}
        <div className="absolute inset-0 bg-white/30 pointer-events-none" />

        {/* SVG Route Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
          viewBox="0 0 700 420"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Brahmaputra river shape */}
          <path
            d="M 120 280 C 220 260, 340 240, 480 230 C 580 220, 640 200, 700 180"
            stroke="#93C5FD"
            strokeWidth="16"
            strokeOpacity="0.45"
            strokeLinecap="round"
          />

          {/* Affected Route Segment (RED) from Guwahati to Kolia Bhomora / Tezpur junction */}
          <path
            d="M 155 255 C 190 240, 225 245, 265 240 C 310 235, 360 225, 410 215 C 435 210, 460 210, 485 210 C 530 210, 570 215, 600 205"
            stroke="#EF4444"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Normal Route Segment (GREEN) going into Tezpur */}
          <path
            d="M 600 205 C 620 200, 640 195, 660 190"
            stroke="#16A34A"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Waypoint circles along red route */}
          <circle cx="155" cy="255" r="4.5" fill="#16A34A" stroke="#ffffff" strokeWidth="2" />
          <circle cx="225" cy="248" r="3.5" fill="#EF4444" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="310" cy="235" r="3.5" fill="#EF4444" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="660" cy="190" r="4.5" fill="#16A34A" stroke="#ffffff" strokeWidth="2" />
        </svg>

        {/* Guwahati Location Pill (Left) */}
        <div className="absolute top-[59%] left-[17%] -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm shadow-md border border-slate-200/90 text-xs font-bold text-slate-800">
            <span>Guwahati</span>
          </div>
        </div>

        {/* Tezpur Location Pill (Right) */}
        <div className="absolute top-[44%] left-[90%] -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm shadow-md border border-slate-200/90 text-xs font-bold text-slate-800">
            <span>Tezpur</span>
          </div>
        </div>

        {/* NH-27 Highway Tag */}
        <div className="absolute top-[52%] left-[76%] -translate-x-1/2 -translate-y-1/2 z-10">
          <span className="px-1.5 py-0.5 rounded bg-amber-500 text-white text-[8px] font-black shadow-xs">
            NH-27
          </span>
        </div>

        {/* Emergency Flood Pin Marker */}
        <div className="absolute top-[51%] left-[60%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-rose-600 border-2 border-white shadow-lg flex items-center justify-center text-white">
            <svg
              className="w-4.5 h-4.5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* House roof */}
              <path d="M3 10L12 3L21 10" />
              {/* House body */}
              <path d="M5 10V14" />
              <path d="M19 10V14" />
              {/* Waves */}
              <path d="M2 17C4 16 6 18 8 17C10 16 12 18 14 17C16 16 18 18 20 17" />
              <path d="M2 20C4 19 6 21 8 20C10 19 12 21 14 20C16 19 18 21 20 20" />
            </svg>
          </div>
        </div>

        {/* Floating Callout / Popup above the marker */}
        <div className="absolute top-[28%] left-[60%] -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="relative bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-slate-200/90 text-left max-w-[200px]">
            <span className="text-xs font-black text-rose-600 block leading-tight">
              Flood
            </span>
            <span className="text-[11px] font-bold text-slate-900 block leading-tight mt-0.5">
              Near Kolia Bhomora Bridge
            </span>
            <span className="text-[9px] text-slate-500 font-medium block leading-tight mt-1">
              Heavy rainfall has caused flooding on the route.
            </span>

            {/* Bottom Pointer */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b border-r border-slate-200/90 rotate-45" />
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute right-3 bottom-3 z-20 flex flex-col space-y-1">
          <button
            type="button"
            className="w-6 h-6 rounded-md bg-white/95 backdrop-blur-md shadow-xs border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            className="w-6 h-6 rounded-md bg-white/95 backdrop-blur-md shadow-xs border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
