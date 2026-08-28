import React from 'react';
import { motion } from 'framer-motion';
import { Route, Network, AlertOctagon, XCircle } from 'lucide-react';

export default function DistrictKPIs({ kpis }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'road':
        return <Route className="w-5 h-5 text-emerald-600 stroke-[2.2]" />;
      case 'network':
        return <Network className="w-5 h-5 text-blue-600 stroke-[2.2]" />;
      case 'partial-road':
        return <Route className="w-5 h-5 text-orange-500 stroke-[2.2]" />;
      case 'blocked':
        return <XCircle className="w-5 h-5 text-rose-600 stroke-[2.2]" />;
      default:
        return <Route className="w-5 h-5 text-emerald-600 stroke-[2.2]" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">
      {kpis.map((kpi, idx) => (
        <motion.div
          key={kpi.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: idx * 0.05 }}
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="bg-white rounded-2xl px-4 py-3.5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex items-center gap-3.5 cursor-pointer h-full min-h-[82px]"
        >
          {/* Left: Icon Container with subtle styled background */}
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-2xs ${kpi.iconBg}`}>
            {getIcon(kpi.icon)}
          </div>

          {/* Right: Info Column */}
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] sm:text-xs font-bold text-slate-400 truncate leading-tight">
              {kpi.title}
            </span>
            <div className="text-xl sm:text-2xl font-black text-slate-900 leading-none mt-1 whitespace-nowrap">
              {kpi.value}
            </div>
            <span className="text-[10px] text-slate-400 font-medium leading-none mt-1 block truncate">
              {kpi.subtitle}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
