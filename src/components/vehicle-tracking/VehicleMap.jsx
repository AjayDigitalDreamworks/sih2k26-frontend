import React, { useState } from 'react';
import { Plus, Minus, Crosshair, Truck } from 'lucide-react';
import heroBg from '../../assets/hero-bg.jpeg';

export default function VehicleMap() {
  const [mapType, setMapType] = useState('map');

  return (
    <div className="relative w-full h-full min-h-[460px] lg:min-h-[520px] rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs bg-slate-100 select-none group">
      {/* Light Geographic / Topographic Terrain Background */}
      <img
        src={heroBg}
        alt="Northeast India Vehicle Fleet Tracking Map"
        className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-all duration-500 ${
          mapType === 'map' ? 'brightness-125 contrast-75 saturate-50' : 'opacity-90'
        }`}
      />

      {/* Light Map Tint Overlay (Light clean map appearance matching reference) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/20 to-white/30 pointer-events-none z-[1]" />

      {/* SVG Corridor Highway Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5]" viewBox="0 0 900 650" fill="none" preserveAspectRatio="none">
        {/* Blue corridor routes */}
        <path
          d="M 210 340 C 270 330, 320 300, 390 280 C 470 260, 560 210, 680 180"
          stroke="#38BDF8"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 390 280 C 420 330, 480 380, 530 430 C 570 470, 630 490, 690 500"
          stroke="#38BDF8"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 210 340 C 240 390, 270 450, 320 500 C 370 540, 440 560, 510 540"
          stroke="#38BDF8"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 530 430 C 490 460, 440 480, 390 500"
          stroke="#38BDF8"
          strokeWidth="3.5"
          strokeDasharray="4 2"
          strokeLinecap="round"
        />
      </svg>

      {/* State & City Geographic Labels */}
      <div className="absolute top-[32%] left-[28%] pointer-events-none z-[6] -rotate-12">
        <span className="text-[10px] font-bold text-blue-600/70 italic drop-shadow-xs">Brahmaputra River</span>
      </div>
      <div className="absolute top-[26%] left-[23%] pointer-events-none z-[6] text-[10px] font-bold text-slate-700">
        Baihata Chariali
      </div>
      <div className="absolute top-[30%] left-[17%] pointer-events-none z-[6] text-[10px] font-bold text-slate-700">
        North Guwahati
      </div>
      <div className="absolute top-[36%] left-[19%] pointer-events-none z-[6] text-[11px] font-black text-slate-800">
        Guwahati
      </div>
      <div className="absolute top-[37%] left-[32%] pointer-events-none z-[6] text-[10px] font-bold text-slate-700">
        Pandu
      </div>
      <div className="absolute top-[27%] left-[44%] pointer-events-none z-[6] text-[11px] font-black text-slate-800">
        Tezpur
      </div>
      <div className="absolute top-[26%] left-[55%] pointer-events-none z-[6] text-[10px] font-bold text-slate-700">
        Mangaldoi
      </div>
      <div className="absolute top-[44%] left-[43%] pointer-events-none z-[6] text-[10px] font-bold text-slate-700">
        Nagaon
      </div>
      <div className="absolute top-[48%] left-[47%] pointer-events-none z-[6] text-[10px] font-bold text-slate-700">
        Hojai
      </div>
      <div className="absolute top-[39%] left-[64%] pointer-events-none z-[6] text-[10px] font-bold text-slate-700">
        Dimapur
      </div>

      {/* Top-Left Map / Satellite Toggle */}
      <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl p-1 shadow-sm border border-slate-200/80 flex items-center gap-1 text-[11px] font-bold">
        <button
          type="button"
          onClick={() => setMapType('map')}
          className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
            mapType === 'map'
              ? 'bg-slate-100 text-slate-900 shadow-2xs font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Map
        </button>
        <button
          type="button"
          onClick={() => setMapType('satellite')}
          className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
            mapType === 'satellite'
              ? 'bg-slate-100 text-slate-900 shadow-2xs font-extrabold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Satellite
        </button>
      </div>

      {/* Floating Vehicle Markers on Map */}
      {/* 1. Green Vehicle Marker: Guwahati */}
      <div className="absolute top-[33%] left-[27%] -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer group/v hover:scale-105 transition-transform">
        <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2 py-1 rounded-xl shadow-md border border-emerald-200">
          <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
            <Truck className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col leading-tight pr-1">
            <span className="text-[9px] font-black text-slate-900">AS-01-AB-1234</span>
            <span className="text-[8px] font-bold text-slate-500">45 km/h</span>
          </div>
        </div>
      </div>

      {/* 2. Blue Vehicle Marker: Tezpur */}
      <div className="absolute top-[23%] left-[47%] -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer group/v hover:scale-105 transition-transform">
        <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2 py-1 rounded-xl shadow-md border border-blue-200">
          <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
            <Truck className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col leading-tight pr-1">
            <span className="text-[9px] font-black text-slate-900">AS-01-CD-5678</span>
            <span className="text-[8px] font-bold text-slate-500">60km/h</span>
          </div>
        </div>
      </div>

      {/* 3. Purple Vehicle Marker: Nagaon */}
      <div className="absolute top-[42%] left-[47%] -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer group/v hover:scale-105 transition-transform">
        <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2 py-1 rounded-xl shadow-md border border-purple-200">
          <div className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
            <Truck className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col leading-tight pr-1">
            <span className="text-[9px] font-black text-slate-900">AS-01-EF-9012</span>
            <span className="text-[8px] font-bold text-slate-500">55 km/h</span>
          </div>
        </div>
      </div>

      {/* 4. Orange Vehicle Marker: Hojai */}
      <div className="absolute top-[49%] left-[53%] -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer group/v hover:scale-105 transition-transform">
        <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2 py-1 rounded-xl shadow-md border border-orange-200">
          <div className="w-6 h-6 rounded-lg bg-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
            <Truck className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col leading-tight pr-1">
            <span className="text-[9px] font-black text-slate-900">AS-01-GH-3456</span>
            <span className="text-[8px] font-bold text-slate-500">40 km/h</span>
          </div>
        </div>
      </div>

      {/* 5. Red Vehicle Marker: Southern route */}
      <div className="absolute top-[48%] left-[31%] -translate-x-1/2 -translate-y-1/2 z-[10] cursor-pointer group/v hover:scale-105 transition-transform">
        <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2 py-1 rounded-xl shadow-md border border-rose-200">
          <div className="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
            <Truck className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col leading-tight pr-1">
            <span className="text-[9px] font-black text-slate-900">AS-01-IJ-7890</span>
            <span className="text-[8px] font-bold text-slate-500">35 km/h</span>
          </div>
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
      <div className="absolute bottom-3 left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-md border border-slate-200/80 flex items-center gap-3.5 text-[10px] font-bold text-slate-700">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
          <span>Moving</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
          <span>Idle</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
          <span>Stopped</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
          <span>Delayed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
          <span>Offline</span>
        </div>
      </div>
    </div>
  );
}
