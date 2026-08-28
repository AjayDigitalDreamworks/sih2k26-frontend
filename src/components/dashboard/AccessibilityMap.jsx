import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Plus, Minus, Crosshair, Layers, Truck, AlertTriangle, Check, X } from 'lucide-react';
import heroBg from '../../assets/hero-bg.jpeg';

export default function AccessibilityMap() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-5 flex flex-col h-full">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-3 mb-3.5">
        <div className="flex items-center gap-2.5">
          <h2 className="text-sm sm:text-base font-extrabold text-[#0B1E36] tracking-tight">
            Live Accessibility Map
          </h2>
          <span className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Real-time
          </span>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-xl transition-colors cursor-pointer shadow-2xs"
        >
          <span>View Full Map</span>
          <Maximize2 className="w-3 h-3" />
        </button>
      </div>

      {/* Map Interactive Canvas / Visual Area */}
      <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[360px] rounded-2xl overflow-hidden border border-slate-800/40 bg-slate-900 select-none group">
        {/* Satellite Background */}
        <img
          src={heroBg}
          alt="Northeast India Satellite Map"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:scale-102 transition-transform duration-700 pointer-events-none"
        />

        {/* Subtle Dark Map Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40 pointer-events-none" />

        {/* SVG Route Network Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 400" fill="none">
          {/* Green Good Routes */}
          <path
            d="M 120 280 C 180 260, 240 230, 290 230 C 350 230, 420 180, 480 130"
            stroke="#10B981"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 210 270 C 230 320, 250 360, 260 380"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Yellow Moderate Routes */}
          <path
            d="M 290 230 C 320 280, 360 300, 390 320"
            stroke="#FBBF24"
            strokeWidth="3"
            strokeDasharray="4 3"
            strokeLinecap="round"
          />
          <path
            d="M 330 160 C 370 140, 420 120, 480 130"
            stroke="#FBBF24"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Orange At-Risk Routes */}
          <path
            d="M 290 230 C 310 180, 350 160, 390 140"
            stroke="#F97316"
            strokeWidth="3.5"
            strokeDasharray="5 3"
            strokeLinecap="round"
          />
          <path
            d="M 230 260 C 270 290, 310 320, 330 340"
            stroke="#F97316"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Red Blocked Routes */}
          <path
            d="M 290 230 C 340 240, 370 210, 400 190"
            stroke="#EF4444"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 180 250 C 220 250, 240 280, 270 280"
            stroke="#EF4444"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>

        {/* State / City Markers & Labels */}
        <div className="absolute top-[14%] left-[62%] pointer-events-none">
          <span className="text-[10px] font-bold text-white drop-shadow-md">Arunachal Pradesh</span>
        </div>
        <div className="absolute top-[38%] left-[42%] pointer-events-none">
          <span className="text-[10px] font-bold text-white drop-shadow-md">Assam</span>
        </div>
        <div className="absolute top-[48%] left-[68%] pointer-events-none">
          <span className="text-[10px] font-bold text-white drop-shadow-md">Nagaland</span>
        </div>
        <div className="absolute top-[58%] left-[32%] pointer-events-none">
          <span className="text-[10px] font-bold text-white drop-shadow-md">Meghalaya</span>
        </div>
        <div className="absolute top-[68%] left-[62%] pointer-events-none">
          <span className="text-[10px] font-bold text-white drop-shadow-md">Manipur</span>
        </div>
        <div className="absolute top-[78%] left-[42%] pointer-events-none">
          <span className="text-[10px] font-bold text-white drop-shadow-md">Tripura</span>
        </div>
        <div className="absolute top-[82%] left-[58%] pointer-events-none">
          <span className="text-[10px] font-bold text-white drop-shadow-md">Mizoram</span>
        </div>

        {/* Active Route Pins */}
        {/* Red Blocked Marker Pin 1 */}
        <div className="absolute top-[47%] left-[66%] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
            <X className="w-3 h-3 stroke-[3]" />
          </div>
        </div>

        {/* Red Blocked Marker Pin 2 */}
        <div className="absolute top-[68%] left-[45%] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
            <X className="w-3 h-3 stroke-[3]" />
          </div>
        </div>

        {/* Blue Vehicle Pin 1 */}
        <div className="absolute top-[62%] left-[30%] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
            <Truck className="w-3 h-3" />
          </div>
        </div>

        {/* Blue Vehicle Pin 2 */}
        <div className="absolute top-[28%] left-[72%] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
            <Truck className="w-3 h-3" />
          </div>
        </div>

        {/* Orange Hazard Pin */}
        <div className="absolute top-[42%] left-[37%] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
            <AlertTriangle className="w-3 h-3 stroke-[2.5]" />
          </div>
        </div>

        {/* Green Check Pin */}
        <div className="absolute top-[58%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
        </div>

        {/* Map Legend Overlay (Bottom Left) */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-white/80 z-20 flex flex-col space-y-1 text-[10px] font-bold text-slate-700">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 rounded-full bg-emerald-500" />
            <span>Good</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 rounded-full bg-amber-400" />
            <span>Moderate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 rounded-full bg-orange-500" />
            <span>At Risk</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 rounded-full bg-rose-500" />
            <span>Blocked</span>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5 border-t border-slate-100">
            <Truck className="w-3 h-3 text-blue-600" />
            <span>Vehicle</span>
          </div>
        </div>

        {/* Map Control Buttons (Right) */}
        <div className="absolute top-3 right-3 flex flex-col space-y-1.5 z-20">
          <button
            type="button"
            className="w-7 h-7 rounded-lg bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
            aria-label="Zoom In"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="w-7 h-7 rounded-lg bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
            aria-label="Zoom Out"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="w-7 h-7 rounded-lg bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
            aria-label="Recenter Location"
          >
            <Crosshair className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            className="w-7 h-7 rounded-lg bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
            aria-label="Layer Options"
          >
            <Layers className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
