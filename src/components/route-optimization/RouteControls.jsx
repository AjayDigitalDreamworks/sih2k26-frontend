import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ChevronDown, X, Sparkles, Truck } from 'lucide-react';
import { routeControlsData } from '../../data/routeOptimizationData';

export default function RouteControls({ onOptimize, onClear }) {
  const [fromValue, setFromValue] = useState(routeControlsData.defaultFrom);
  const [destinationsValue, setDestinationsValue] = useState(routeControlsData.defaultDestinations);
  const [vehicleType, setVehicleType] = useState('Medium Truck');
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleOptimizeClick = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      if (onOptimize) onOptimize();
    }, 600);
  };

  const handleClearClick = () => {
    setFromValue('');
    setDestinationsValue('Select Destinations');
    if (onClear) onClear();
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 items-end">
        {/* 1. From Field (4 cols on lg) */}
        <div className="lg:col-span-3">
          <label className="block text-[11px] font-bold text-slate-500 mb-1">
            From
          </label>
          <div className="relative flex items-center bg-slate-50/70 border border-slate-200/80 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 hover:border-slate-300 transition-colors">
            <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mr-2" />
            <input
              type="text"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              placeholder="Enter starting location"
              className="w-full bg-transparent border-0 p-0 text-xs font-semibold text-slate-800 focus:outline-none placeholder-slate-400"
            />
            {fromValue && (
              <button
                type="button"
                onClick={() => setFromValue('')}
                className="text-slate-400 hover:text-slate-600 p-0.5 ml-1 cursor-pointer focus:outline-none"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1 flex-shrink-0 pointer-events-none" />
          </div>
        </div>

        {/* 2. To / Destination(s) (4 cols on lg) */}
        <div className="lg:col-span-3">
          <label className="block text-[11px] font-bold text-slate-500 mb-1">
            To / Destination(s)
          </label>
          <div className="relative flex items-center justify-between bg-slate-50/70 border border-slate-200/80 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 hover:border-slate-300 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 truncate">
              <Navigation className="w-4 h-4 text-emerald-600 flex-shrink-0 transform rotate-45" />
              <span className="truncate">{destinationsValue}</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          </div>
        </div>

        {/* 3. Vehicle Type (2.5 cols on lg) */}
        <div className="lg:col-span-2">
          <label className="block text-[11px] font-bold text-slate-500 mb-1">
            Vehicle Type
          </label>
          <div className="relative flex items-center bg-slate-50/70 border border-slate-200/80 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 hover:border-slate-300 transition-colors">
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full bg-transparent border-0 p-0 text-xs font-semibold text-slate-800 focus:outline-none appearance-none cursor-pointer pr-5"
            >
              {routeControlsData.vehicleTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 pointer-events-none" />
          </div>
        </div>

        {/* 4. Action Buttons (Optimize & Clear) (2.5 cols on lg) */}
        <div className="lg:col-span-4 flex items-center gap-2.5 sm:justify-end">
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleOptimizeClick}
            disabled={isOptimizing}
            className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#1B5E20] hover:bg-[#154a19] text-white font-bold text-xs tracking-tight shadow-sm hover:shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-80"
          >
            {isOptimizing ? (
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Optimizing...
              </span>
            ) : (
              <span>Optimize Route</span>
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClearClick}
            className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            Clear All
          </motion.button>
        </div>
      </div>
    </div>
  );
}
