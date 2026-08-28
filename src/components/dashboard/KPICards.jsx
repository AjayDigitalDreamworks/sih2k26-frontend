import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, AlertTriangle, Ban, Truck, Package, ArrowUpRight } from 'lucide-react';
import { kpiData } from '../../data/dashboardData';

export default function KPICards() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'road':
        return (
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current" fill="none" strokeWidth="2.2">
            <path d="M4 19L8 5H16L20 19" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="7" x2="12" y2="10" strokeDasharray="1 1" strokeLinecap="round" />
            <line x1="12" y1="14" x2="12" y2="17" strokeDasharray="1 1" strokeLinecap="round" />
          </svg>
        );
      case 'warning':
        return <AlertTriangle className="w-4 h-4 stroke-[2.2]" />;
      case 'blocked':
        return <Ban className="w-4 h-4 stroke-[2.2]" />;
      case 'truck':
        return <Truck className="w-4 h-4 stroke-[2.2]" />;
      case 'package':
        return <Package className="w-4 h-4 stroke-[2.2]" />;
      default:
        return <Milestone className="w-4 h-4 stroke-[2.2]" />;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
      {kpiData.map((kpi, idx) => (
        <motion.div
          key={kpi.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: idx * 0.06 }}
          whileHover={{ y: -2 }}
          className="bg-white rounded-xl p-3 sm:p-3.5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          {/* Top Row: Icon and Title */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 shadow-2xs ${kpi.iconBg}`}>
              {getIcon(kpi.icon)}
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-500 leading-tight">
              {kpi.title}
            </span>
          </div>

          {/* Bottom Content: Number + Growth inline, and period below */}
          <div className="pl-[38px]">
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <span className="text-lg sm:text-xl font-black text-slate-900 leading-none whitespace-nowrap">
                {kpi.value}
              </span>
              <span className="text-[10px] sm:text-[11px] font-extrabold text-emerald-600 flex items-center flex-shrink-0">
                <ArrowUpRight className="w-3 h-3" />
                {kpi.change}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium leading-none block">
              {kpi.period}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
