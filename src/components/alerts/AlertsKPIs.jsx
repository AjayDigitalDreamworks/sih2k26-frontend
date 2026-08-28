import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldAlert, Bell, CheckCircle2, Eye } from 'lucide-react';
import { alertsKPIs } from '../../data/alertsData';

export default function AlertsKPIs() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'triangle-alert':
        return <AlertTriangle className="w-5 h-5 text-rose-600 stroke-[2.2]" />;
      case 'shield-alert':
        return <ShieldAlert className="w-5 h-5 text-rose-600 stroke-[2.2]" />;
      case 'bell':
        return <Bell className="w-5 h-5 text-orange-500 stroke-[2.2]" />;
      case 'check-circle':
        return <CheckCircle2 className="w-5 h-5 text-emerald-600 stroke-[2.2]" />;
      case 'eye':
        return <Eye className="w-5 h-5 text-blue-600 stroke-[2.2]" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-rose-600 stroke-[2.2]" />;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 items-stretch">
      {alertsKPIs.map((kpi, idx) => (
        <motion.div
          key={kpi.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: idx * 0.05 }}
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="bg-white rounded-xl px-3.5 py-3.5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all flex items-center gap-3.5 cursor-pointer h-full min-h-[78px]"
        >
          {/* Left: Icon Container with subtle rounded border */}
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 shadow-2xs">
            {getIcon(kpi.icon)}
          </div>

          {/* Right: Info Column */}
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] sm:text-xs font-bold text-slate-400 truncate leading-tight">
              {kpi.title}
            </span>
            <div className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 leading-none mt-1 whitespace-nowrap">
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
