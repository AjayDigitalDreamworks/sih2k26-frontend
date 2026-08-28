import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, CloudRain, Construction, ShieldAlert, Waves } from 'lucide-react';

export default function MapLegendPanel() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-slate-200/80 w-44 sm:w-48 select-none">
      {/* Header */}
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="w-full flex items-center justify-between text-xs font-black text-slate-800 focus:outline-none cursor-pointer"
      >
        <span>Legend</span>
        {collapsed ? (
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        ) : (
          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
        )}
      </button>

      {/* Legend Contents */}
      {!collapsed && (
        <div className="mt-2.5 space-y-2 pt-2 border-t border-slate-100 text-[10px] font-bold text-slate-700">
          {/* Traffic Corridors */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-1 rounded-full bg-emerald-500 flex-shrink-0" />
              <span>Smooth Traffic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-1 rounded-full bg-amber-400 flex-shrink-0" />
              <span>Moderate Traffic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-1 rounded-full bg-orange-500 flex-shrink-0" />
              <span>Heavy Traffic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-1 rounded-full bg-rose-500 flex-shrink-0" />
              <span>Blocked Route</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-1 border-b-2 border-dashed border-blue-500 flex-shrink-0" />
              <span>Alternate Route</span>
            </div>
          </div>

          {/* Incident Types */}
          <div className="pt-2 border-t border-slate-100 space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-2.5 h-2.5" />
              </div>
              <span>Landslide</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Waves className="w-2.5 h-2.5" />
              </div>
              <span>Flood</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                <CloudRain className="w-2.5 h-2.5" />
              </div>
              <span>Heavy Rainfall</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="w-2.5 h-2.5" />
              </div>
              <span>Accident</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                <Construction className="w-2.5 h-2.5" />
              </div>
              <span>Construction</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
