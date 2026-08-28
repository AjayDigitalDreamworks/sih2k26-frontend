import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, Pause, CloudSun } from 'lucide-react';

export default function WeatherRadarPanel() {
  const [collapsed, setCollapsed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedTime, setSelectedTime] = useState('Live');

  const timeSlots = ['Live', '09:00', '10:00', '11:00', '12:00'];

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-slate-200/80 w-52 sm:w-60 select-none">
      {/* Header */}
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="w-full flex items-center justify-between text-xs font-black text-slate-800 focus:outline-none cursor-pointer"
      >
        <span className="flex items-center gap-1.5">
          <CloudSun className="w-3.5 h-3.5 text-amber-500" />
          Weather Radar
        </span>
        {collapsed ? (
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        ) : (
          <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
        )}
      </button>

      {/* Radar Controls */}
      {!collapsed && (
        <div className="mt-2.5 space-y-2.5 pt-2 border-t border-slate-100">
          {/* Gradient Intensity Scale */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[9px] font-bold text-slate-500">
              <span>Light</span>
              <span>Heavy</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-blue-400 via-teal-400 via-emerald-400 via-amber-400 to-rose-500 shadow-2xs" />
          </div>

          {/* Timeline / Player Scrub */}
          <div className="flex items-center justify-between gap-1 pt-1">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-2xs flex-shrink-0 cursor-pointer focus:outline-none"
              aria-label={isPlaying ? 'Pause Radar' : 'Play Radar'}
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5" />}
            </button>

            <div className="flex items-center gap-1 overflow-x-auto text-[9px] font-bold">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={`px-1.5 py-0.5 rounded-md transition-colors cursor-pointer ${
                    selectedTime === slot
                      ? 'bg-emerald-100 text-emerald-800 font-extrabold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
