import React from 'react';
import { CloudRain, Droplets, Wind, CloudDrizzle } from 'lucide-react';
import { weatherData } from '../../data/dashboardData';

export default function WeatherOverview() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <h3 className="text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Weather Overview
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View Details
        </button>
      </div>

      {/* Main Weather Information */}
      <div className="grid grid-cols-2 gap-4 items-center my-auto py-2">
        {/* Left Side: Current Temp & Condition */}
        <div className="flex items-center gap-3.5">
          <div className="w-13 h-13 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center shadow-2xs flex-shrink-0">
            <CloudRain className="w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-slate-900 leading-none">
              {weatherData.temp}
            </span>
            <span className="text-xs font-bold text-slate-600 mt-1 leading-tight">
              {weatherData.condition}
            </span>
            <span className="text-[10px] text-slate-400 font-medium leading-tight">
              {weatherData.location}
            </span>
          </div>
        </div>

        {/* Right Side: Humidity, Wind, Rainfall */}
        <div className="flex flex-col space-y-2 border-l border-slate-100 pl-4">
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-slate-500 font-medium">
              <Droplets className="w-3.5 h-3.5 text-blue-500" /> Humidity
            </span>
            <span className="font-bold text-slate-800">{weatherData.humidity}</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-slate-500 font-medium">
              <Wind className="w-3.5 h-3.5 text-teal-500" /> Wind
            </span>
            <span className="font-bold text-slate-800">{weatherData.wind}</span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-slate-500 font-medium">
              <CloudDrizzle className="w-3.5 h-3.5 text-indigo-500" /> Rainfall
            </span>
            <span className="font-bold text-slate-800">{weatherData.rainfall}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
