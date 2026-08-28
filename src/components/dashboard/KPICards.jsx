import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, AlertTriangle, Ban, Truck, Package, ArrowUpRight } from 'lucide-react';
import { kpiData } from '../../data/dashboardData';

export default function KPICards() {
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
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
      {kpiData.map((kpi, idx) => (
        <motion.div
          key={kpi.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: idx * 0.06 }}
          whileHover={{ y: -2 }}
          className="bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
        >
          {/* Header Row: Title and Colored Icon */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-2xs ${kpi.iconBg}`}>
              {getIcon(kpi.icon)}
            </div>
            <span className="text-[11px] font-bold text-slate-500 text-right leading-tight line-clamp-2">
              {kpi.title}
            </span>
          </div>

          {/* Value and Percentage Trend */}
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0B1E36] tracking-tight leading-none mb-1.5">
              {kpi.value}
            </div>

            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
              <span className="flex items-center font-bold">
                <ArrowUpRight className="w-3.5 h-3.5" />
                {kpi.change}
              </span>
              <span className="text-slate-400 font-medium text-[10px]">{kpi.period}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
