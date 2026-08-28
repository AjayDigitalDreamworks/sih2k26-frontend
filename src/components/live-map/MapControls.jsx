import React from 'react';
import { Plus, Minus, Crosshair, Layers, Maximize2 } from 'lucide-react';

export default function MapControls() {
  return (
    <div className="flex flex-col space-y-1.5 z-20 select-none">
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
        aria-label="Recenter Map"
      >
        <Crosshair className="w-4 h-4" />
      </button>

      <button
        type="button"
        className="w-8 h-8 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors focus:outline-none cursor-pointer"
        aria-label="Layer Settings"
      >
        <Layers className="w-4 h-4" />
      </button>

      <button
        type="button"
        className="w-8 h-8 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-200/80 flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-emerald-700 transition-colors focus:outline-none cursor-pointer"
        aria-label="Fullscreen Map"
      >
        <Maximize2 className="w-4 h-4" />
      </button>
    </div>
  );
}
