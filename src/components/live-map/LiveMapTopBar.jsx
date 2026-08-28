import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, AlertTriangle, Ban, Truck, Package, ArrowUpRight, CloudSun, Calendar } from 'lucide-react';
import { kpiData } from '../../data/dashboardData';

export default function LiveMapTopBar() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'road':
        return (
          <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current" fill="none" strokeWidth="2.2">
            <path d="M4 19L8 5H16L20 19" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="7" x2="12" y2="10" strokeDasharray="1 1" strokeLinecap="round" />
            <line x1="12" y1="14" x2="12" y2="17" strokeDasharray="1 1" strokeLinecap="round" />
          </svg>
        );
      case 'warning':
        return <AlertTriangle className="w-5 h-5 stroke-[2.2]" />;
      case 'blocked':
        return <Ban className="w-5 h-5 stroke-[2.2]" />;
      case 'truck':
        return <Truck className="w-5 h-5 stroke-[2.2]" />;
      case 'package':
        return <Package className="w-5 h-5 stroke-[2.2]" />;
      default:
        return <Milestone className="w-5 h-5 stroke-[2.2]" />;
    }
  };

  return (
    <div className="flex flex-col xl:flex-row items-stretch justify-between gap-3">
      {/* 5 KPI Badges aligned to stretch to the exact height of the weather/date stack */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 flex-1 items-stretch">
        {kpiData.map((kpi) => (
          <motion.div
            key={kpi.id}
            whileHover={{ y: -2 }}
            className="bg-white rounded-xl px-3 sm:px-3.5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex items-center gap-3 cursor-pointer h-full min-h-[44px]"
          >
            {/* Left: Icon Container */}
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${kpi.iconBg}`}>
              {getIcon(kpi.icon)}
            </div>

            {/* Right: Info Column */}
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] sm:text-xs font-bold text-slate-400 truncate leading-tight">
                {kpi.title.replace('Monitored', '')}
              </span>
              <div className="flex items-baseline gap-1.5 leading-none mt-1">
                <span className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 whitespace-nowrap">
                  {kpi.value}
                </span>
                <span className="text-[11px] sm:text-xs font-extrabold text-emerald-600 flex items-center flex-shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  {kpi.change}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Weather & Timestamp Card - Stacked Vertically with aligned height */}
      <div className="flex flex-col gap-2 flex-shrink-0 w-full xl:w-44">
        {/* Weather Card */}
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700 h-[48px] w-full">
          <CloudSun className="w-4 h-4 text-amber-500 flex-shrink-0" />
          <div className="flex flex-col leading-tight">
            <span>24°C</span>
            <span className="text-[9px] text-slate-400 font-medium">Guwahati</span>
          </div>
        </div>

        {/* Date/Time Card */}
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700 h-[48px] w-full">
          <Calendar className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <div className="flex flex-col leading-tight">
            <span>21 May 2025</span>
            <span className="text-[9px] text-slate-400 font-medium">10:30 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
