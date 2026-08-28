import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { mapLayersList } from '../../data/liveMapData';

export default function MapLayersPanel({ layersState, setLayersState }) {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = (id) => {
    if (setLayersState) {
      setLayersState((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-slate-200/80 w-44 sm:w-48 select-none">
      {/* Header */}
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="w-full flex items-center justify-between text-xs font-black text-slate-800 focus:outline-none cursor-pointer"
      >
        <span className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-emerald-600" />
          Map Layers
        </span>
        {collapsed ? (
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        ) : (
          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
        )}
      </button>

      {/* Layer Checkboxes */}
      {!collapsed && (
        <div className="mt-2.5 space-y-1.5 pt-2 border-t border-slate-100">
          {mapLayersList.map((layer) => {
            const isChecked = layersState ? layersState[layer.id] ?? true : true;
            return (
              <label
                key={layer.id}
                className="flex items-center gap-2 text-[11px] font-bold text-slate-700 hover:text-slate-900 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleToggle(layer.id)}
                  className="w-3.5 h-3.5 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer accent-emerald-600"
                />
                <span className="truncate">{layer.label}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}
