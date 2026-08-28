import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Activity, ArrowUpRight } from 'lucide-react';

export default function AlternateRouteCard({ route, onSelect, isSelected }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      className={`bg-white rounded-2xl border p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between h-full ${
        isSelected
          ? 'border-emerald-500 ring-1 ring-emerald-500'
          : 'border-slate-200/80'
      }`}
    >
      <div>
        {/* Header: Title + Badge + Time Impact */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              {route.title}
            </span>
            {route.recommended && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                (Recommended)
              </span>
            )}
          </div>
          <span className={`text-xs font-bold ${route.timeDiffColor}`}>
            {route.timeDiff}
          </span>
        </div>

        {/* Via route text */}
        <h4 className="text-xs font-bold text-slate-800 leading-tight">
          {route.via}
        </h4>

        {/* Description */}
        <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1 mb-4 min-h-[32px]">
          {route.description}
        </p>

        {/* 3-Column Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 py-2.5 border-t border-b border-slate-100 text-center mb-4">
          {/* Distance */}
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-400 leading-none mb-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>Distance</span>
            </span>
            <span className="text-xs font-black text-slate-900 leading-tight">
              {route.distance}
            </span>
          </div>

          {/* Est. Time */}
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-400 leading-none mb-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>Est. Time</span>
            </span>
            <span className="text-xs font-black text-slate-900 leading-tight">
              {route.estTime}
            </span>
          </div>

          {/* Traffic */}
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-400 leading-none mb-1">
              <Activity className="w-3 h-3 text-slate-400" />
              <span>Traffic</span>
            </span>
            <span className={`text-xs font-black leading-tight ${route.trafficColor}`}>
              {route.traffic}
            </span>
          </div>
        </div>
      </div>

      {/* View Route Action Button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onSelect && onSelect(route.id)}
        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-emerald-600/90 hover:bg-emerald-50 text-emerald-700 text-xs font-bold shadow-2xs hover:shadow-xs transition-all cursor-pointer"
      >
        <span>View Route</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </motion.button>
    </motion.div>
  );
}
