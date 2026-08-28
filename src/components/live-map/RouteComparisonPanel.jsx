import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { routeComparisonData } from '../../data/liveMapData';

export default function RouteComparisonPanel() {
  const [activeTab, setActiveTab] = useState('smart');

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <h3 className="text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Route Comparison
        </h3>
        <div className="flex items-center gap-1 p-0.5 bg-slate-100/70 rounded-lg border border-slate-200/60">
          <button
            type="button"
            onClick={() => setActiveTab('smart')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
              activeTab === 'smart'
                ? 'bg-white text-slate-900 shadow-2xs font-extrabold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Smart Suggestions
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ai')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'ai'
                ? 'bg-white text-emerald-700 shadow-2xs font-extrabold'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3 h-3 text-emerald-600" />
            AI
          </button>
        </div>
      </div>

      {/* 3 Comparison Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-auto">
        {routeComparisonData.map((route) => (
          <div
            key={route.id}
            className={`rounded-2xl border flex flex-col justify-between p-3.5 relative overflow-hidden transition-all hover:shadow-md ${
              route.type === 'success'
                ? 'bg-emerald-50/30 border-emerald-300 ring-2 ring-emerald-500/20'
                : route.type === 'danger'
                ? 'bg-rose-50/30 border-rose-200'
                : 'bg-blue-50/20 border-blue-200'
            }`}
          >
            {/* Top Tag & Badge */}
            <div className="flex items-center justify-between gap-1 mb-2">
              <span
                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md border flex items-center gap-1 ${
                  route.type === 'success'
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : route.type === 'danger'
                    ? 'bg-rose-100 text-rose-800 border-rose-300'
                    : 'bg-blue-100 text-blue-800 border-blue-300'
                }`}
              >
                {route.type === 'success' && <Sparkles className="w-2.5 h-2.5" />}
                {route.tag}
              </span>
              {route.badge && (
                <span className="text-[9px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100/90 px-1.5 py-0.5 rounded">
                  {route.badge}
                </span>
              )}
            </div>

            {/* Route Name Title */}
            <h4 className="text-xs font-black text-slate-900 tracking-tight mb-2.5">
              {route.title}
            </h4>

            {/* Distance, Time, Status Grid */}
            <div className="grid grid-cols-3 gap-1.5 p-2 rounded-xl bg-white/90 border border-slate-200/80 mb-2.5 text-center text-[10px]">
              <div>
                <span className="text-slate-400 block font-medium">Distance</span>
                <span className="font-extrabold text-slate-800">{route.distance}</span>
              </div>
              <div className="border-x border-slate-100">
                <span className="text-slate-400 block font-medium">Est. Time</span>
                <span className="font-extrabold text-slate-800">{route.duration}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Status</span>
                <span
                  className={`font-black ${
                    route.type === 'success'
                      ? 'text-emerald-600'
                      : route.type === 'danger'
                      ? 'text-rose-600'
                      : 'text-amber-600'
                  }`}
                >
                  {route.status}
                </span>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-1 text-[10px] text-slate-600 font-medium mb-3">
              {route.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-1.5 leading-tight">
                  <span
                    className={`w-1 h-1 rounded-full mt-1 flex-shrink-0 ${
                      route.type === 'success'
                        ? 'bg-emerald-500'
                        : route.type === 'danger'
                        ? 'bg-rose-500'
                        : 'bg-blue-500'
                    }`}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Elevation/Risk Wave Graphic at Bottom */}
            <div className="w-full h-8 mb-2">
              <svg viewBox="0 0 100 25" className="w-full h-full" fill="none">
                <path
                  d={
                    route.type === 'danger'
                      ? 'M0,18 Q20,5 40,20 T70,8 T100,18 L100,25 L0,25 Z'
                      : route.type === 'success'
                      ? 'M0,15 Q30,12 50,14 T100,10 L100,25 L0,25 Z'
                      : 'M0,16 Q25,10 60,18 T100,12 L100,25 L0,25 Z'
                  }
                  fill={route.accentColor}
                  fillOpacity="0.15"
                />
                <path
                  d={
                    route.type === 'danger'
                      ? 'M0,18 Q20,5 40,20 T70,8 T100,18'
                      : route.type === 'success'
                      ? 'M0,15 Q30,12 50,14 T100,10'
                      : 'M0,16 Q25,10 60,18 T100,12'
                  }
                  stroke={route.accentColor}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* CTA Button */}
            {route.actionText && (
              <button
                type="button"
                className={`w-full py-2 px-3 rounded-xl font-bold text-[11px] transition-all cursor-pointer shadow-2xs flex items-center justify-center gap-1.5 ${
                  route.type === 'success'
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-white hover:bg-blue-50 text-blue-700 border border-blue-300'
                }`}
              >
                <span>{route.actionText}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
