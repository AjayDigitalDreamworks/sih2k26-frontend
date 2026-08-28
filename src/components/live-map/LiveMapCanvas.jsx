import React, { useState } from 'react';
import { Truck, AlertTriangle, Waves, Ban, CloudRain, Navigation, MapPin } from 'lucide-react';
import heroBg from '../../assets/hero-bg.jpeg';
import MapLayersPanel from './MapLayersPanel';
import MapLegendPanel from './MapLegendPanel';
import WeatherRadarPanel from './WeatherRadarPanel';
import MapControls from './MapControls';
import IncidentPopupCard from './IncidentPopupCard';
import { mapIncidentPopups } from '../../data/liveMapData';

export default function LiveMapCanvas() {
  const [layersState, setLayersState] = useState({
    'live-traffic': true,
    'active-vehicles': true,
    'incidents': true,
    'road-conditions': true,
    'weather-radar': true,
    'district-boundary': true,
  });

  return (
    <div className="relative w-full min-h-[520px] sm:min-h-[600px] lg:min-h-[660px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-950 select-none group">
      {/* Topographic Satellite Terrain Image */}
      <img
        src={heroBg}
        alt="Northeast India Live Geographic Map"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-90 scale-102"
      />

      {/* Subtle Map Contrast Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-slate-950/40 pointer-events-none z-[1]" />

      {/* Weather Radar Shading Overlay (When Weather Radar Layer is active) */}
      {layersState['weather-radar'] && (
        <div className="absolute inset-0 bg-radial from-teal-500/10 via-emerald-500/15 to-transparent pointer-events-none z-[2] mix-blend-overlay" />
      )}

      {/* SVG Route Network Lines */}
      {layersState['live-traffic'] && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5]" viewBox="0 0 900 650" fill="none" preserveAspectRatio="none">
          {/* Green Smooth Routes */}
          <path
            d="M 160 480 C 230 460, 310 430, 410 390 C 490 350, 580 300, 670 230 C 720 190, 780 160, 830 140"
            stroke="#10B981"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 410 390 C 450 440, 500 490, 540 550 C 560 580, 570 610, 580 640"
            stroke="#10B981"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 280 430 C 330 380, 380 340, 440 310"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Yellow Moderate Traffic Routes */}
          <path
            d="M 410 390 C 480 390, 550 370, 630 330 C 690 300, 740 260, 790 220"
            stroke="#FBBF24"
            strokeWidth="3.5"
            strokeDasharray="6 3"
            strokeLinecap="round"
          />
          <path
            d="M 460 280 C 520 250, 600 230, 670 230"
            stroke="#FBBF24"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Orange Heavy Traffic Routes */}
          <path
            d="M 410 390 C 420 330, 460 280, 520 240 C 580 200, 640 180, 700 170"
            stroke="#F97316"
            strokeWidth="3.5"
            strokeDasharray="5 3"
            strokeLinecap="round"
          />
          <path
            d="M 540 450 C 570 430, 620 400, 660 380"
            stroke="#F97316"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Red Blocked Routes */}
          <path
            d="M 410 390 C 470 400, 520 380, 560 350 C 610 320, 670 270, 710 240"
            stroke="#EF4444"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M 540 550 C 560 500, 580 460, 600 420 C 620 380, 650 350, 690 320"
            stroke="#EF4444"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Blue Alternate Route (Dashed) */}
          <path
            d="M 410 390 C 370 340, 350 280, 390 220 C 440 160, 540 140, 630 160 C 720 180, 780 180, 830 140"
            stroke="#3B82F6"
            strokeWidth="3.5"
            strokeDasharray="6 4"
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* State & City Geographic Labels */}
      <div className="absolute top-[18%] left-[28%] pointer-events-none z-[6]">
        <span className="text-xs font-black text-white/90 drop-shadow-lg tracking-wider">BHUTAN</span>
      </div>
      <div className="absolute top-[10%] left-[58%] pointer-events-none z-[6]">
        <span className="text-xs font-black text-white/90 drop-shadow-lg tracking-wider">ARUNACHAL PRADESH</span>
      </div>
      <div className="absolute top-[34%] left-[38%] pointer-events-none z-[6]">
        <span className="text-xs font-black text-white/90 drop-shadow-lg tracking-wider">ASSAM</span>
      </div>
      <div className="absolute top-[48%] left-[34%] pointer-events-none z-[6]">
        <span className="text-xs font-black text-white/90 drop-shadow-lg tracking-wider">MEGHALAYA</span>
      </div>
      <div className="absolute top-[38%] left-[78%] pointer-events-none z-[6]">
        <span className="text-xs font-black text-white/90 drop-shadow-lg tracking-wider">NAGALAND</span>
      </div>
      <div className="absolute top-[52%] left-[72%] pointer-events-none z-[6]">
        <span className="text-xs font-black text-white/90 drop-shadow-lg tracking-wider">MANIPUR</span>
      </div>
      <div className="absolute top-[68%] left-[42%] pointer-events-none z-[6]">
        <span className="text-xs font-black text-white/90 drop-shadow-lg tracking-wider">TRIPURA</span>
      </div>
      <div className="absolute top-[68%] left-[64%] pointer-events-none z-[6]">
        <span className="text-xs font-black text-white/90 drop-shadow-lg tracking-wider">MIZORAM</span>
      </div>

      {/* Major City Nodes */}
      <div className="absolute top-[35%] left-[54%] -translate-x-1/2 -translate-y-1/2 z-[7] pointer-events-none flex items-center gap-1">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white shadow-md animate-ping" />
        <span className="text-[11px] font-black text-white bg-slate-900/80 px-2 py-0.5 rounded-md border border-white/40 shadow-md">
          Guwahati
        </span>
      </div>

      <div className="absolute top-[20%] left-[72%] pointer-events-none z-[7] text-[10px] font-bold text-white/90 drop-shadow-md">
        Itanagar
      </div>
      <div className="absolute top-[28%] left-[74%] pointer-events-none z-[7] text-[10px] font-bold text-white/90 drop-shadow-md">
        Jorhat
      </div>
      <div className="absolute top-[36%] left-[63%] pointer-events-none z-[7] text-[10px] font-bold text-white/90 drop-shadow-md">
        Nagaon
      </div>
      <div className="absolute top-[36%] left-[81%] pointer-events-none z-[7] text-[10px] font-bold text-white/90 drop-shadow-md">
        Dimapur
      </div>
      <div className="absolute top-[50%] left-[38%] pointer-events-none z-[7] text-[10px] font-bold text-white/90 drop-shadow-md">
        Shillong
      </div>
      <div className="absolute top-[51%] left-[52%] pointer-events-none z-[7] text-[10px] font-bold text-white/90 drop-shadow-md">
        Silchar
      </div>
      <div className="absolute top-[66%] left-[60%] pointer-events-none z-[7] text-[10px] font-bold text-white/90 drop-shadow-md">
        Aizawl
      </div>

      {/* Highway Number Badges */}
      <div className="absolute top-[37%] left-[32%] z-[7] pointer-events-none">
        <span className="px-1.5 py-0.5 rounded bg-blue-900/90 text-white text-[8px] font-extrabold border border-blue-400/60 shadow-sm">
          NH-37
        </span>
      </div>
      <div className="absolute top-[29%] left-[66%] z-[7] pointer-events-none">
        <span className="px-1.5 py-0.5 rounded bg-blue-900/90 text-white text-[8px] font-extrabold border border-blue-400/60 shadow-sm">
          MM-10
        </span>
      </div>
      <div className="absolute top-[18%] left-[83%] z-[7] pointer-events-none">
        <span className="px-1.5 py-0.5 rounded bg-blue-900/90 text-white text-[8px] font-extrabold border border-blue-400/60 shadow-sm">
          104-37
        </span>
      </div>
      <div className="absolute top-[56%] left-[60%] z-[7] pointer-events-none">
        <span className="px-1.5 py-0.5 rounded bg-blue-900/90 text-white text-[8px] font-extrabold border border-blue-400/60 shadow-sm">
          NH-102
        </span>
      </div>

      {/* Red Blocked Road Signs (Circular Bar Signs) */}
      {layersState['road-conditions'] && (
        <>
          <div className="absolute top-[26%] left-[78%] -translate-x-1/2 -translate-y-1/2 z-[8] pointer-events-none">
            <div className="w-5 h-5 rounded-full bg-rose-600 border-2 border-white shadow-lg flex items-center justify-center text-white">
              <Ban className="w-3 h-3 stroke-[3]" />
            </div>
          </div>
          <div className="absolute top-[36%] left-[70%] -translate-x-1/2 -translate-y-1/2 z-[8] pointer-events-none">
            <div className="w-5 h-5 rounded-full bg-rose-600 border-2 border-white shadow-lg flex items-center justify-center text-white">
              <Ban className="w-3 h-3 stroke-[3]" />
            </div>
          </div>
          <div className="absolute top-[49%] left-[62%] -translate-x-1/2 -translate-y-1/2 z-[8] pointer-events-none">
            <div className="w-5 h-5 rounded-full bg-rose-600 border-2 border-white shadow-lg flex items-center justify-center text-white">
              <Ban className="w-3 h-3 stroke-[3]" />
            </div>
          </div>
        </>
      )}

      {/* Vehicle Markers (Blue & Green Logistics Vehicles) */}
      {layersState['active-vehicles'] && (
        <>
          {/* Blue Vehicle 1 (Guwahati Corridor) */}
          <div className="absolute top-[33%] left-[53%] -translate-x-1/2 -translate-y-1/2 z-[8] cursor-pointer hover:scale-120 transition-transform">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white border-2 border-white shadow-xl flex items-center justify-center">
              <Truck className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Blue Vehicle 2 (Dimapur Corridor) */}
          <div className="absolute top-[39%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-[8] cursor-pointer hover:scale-120 transition-transform">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white border-2 border-white shadow-xl flex items-center justify-center">
              <Truck className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Blue Vehicle 3 (Silchar Corridor) */}
          <div className="absolute top-[53%] left-[66%] -translate-x-1/2 -translate-y-1/2 z-[8] cursor-pointer hover:scale-120 transition-transform">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white border-2 border-white shadow-xl flex items-center justify-center">
              <Truck className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Green Vehicle 1 (Itanagar Corridor) */}
          <div className="absolute top-[22%] left-[73%] -translate-x-1/2 -translate-y-1/2 z-[8] cursor-pointer hover:scale-120 transition-transform">
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white border-2 border-white shadow-xl flex items-center justify-center">
              <Truck className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Green Vehicle 2 (Nagaon Corridor) */}
          <div className="absolute top-[31%] left-[62%] -translate-x-1/2 -translate-y-1/2 z-[8] cursor-pointer hover:scale-120 transition-transform">
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white border-2 border-white shadow-xl flex items-center justify-center">
              <Truck className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Green Vehicle 3 (Meghalaya Corridor) */}
          <div className="absolute top-[37%] left-[43%] -translate-x-1/2 -translate-y-1/2 z-[8] cursor-pointer hover:scale-120 transition-transform">
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white border-2 border-white shadow-xl flex items-center justify-center">
              <Truck className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Green Vehicle 4 (Mizoram Corridor) */}
          <div className="absolute top-[64%] left-[61%] -translate-x-1/2 -translate-y-1/2 z-[8] cursor-pointer hover:scale-120 transition-transform">
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white border-2 border-white shadow-xl flex items-center justify-center">
              <Truck className="w-3.5 h-3.5" />
            </div>
          </div>
        </>
      )}

      {/* Floating Incident Popup Cards */}
      {layersState['incidents'] && (
        <>
          {mapIncidentPopups.map((popup) => (
            <IncidentPopupCard key={popup.id} popup={popup} />
          ))}
        </>
      )}

      {/* Map Overlays: Map Layers, Legend & Weather Radar (Left Side) */}
      <div className="absolute top-4 left-4 z-20 flex flex-col space-y-3 pointer-events-auto">
        <MapLayersPanel layersState={layersState} setLayersState={setLayersState} />
        <MapLegendPanel />
        {layersState['weather-radar'] && <WeatherRadarPanel />}
      </div>

      {/* Compass Indicator (Top Right) */}
      <div className="absolute top-4 right-4 z-20 pointer-events-auto">
        <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80 flex items-center justify-center cursor-pointer hover:rotate-12 transition-transform">
          <div className="relative flex items-center justify-center">
            <Navigation className="w-5 h-5 text-rose-600 fill-rose-600 transform -rotate-45" />
            <span className="absolute -top-1.5 text-[8px] font-black text-rose-600">N</span>
          </div>
        </div>
      </div>

      {/* Map Controls (Right-Center) */}
      <div className="absolute top-20 right-4 z-20 pointer-events-auto">
        <MapControls />
      </div>
    </div>
  );
}
