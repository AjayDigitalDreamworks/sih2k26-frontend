import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Download } from 'lucide-react';
import { routeInsightsList } from '../../data/routeOptimizationData';

export default function RouteInsights() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      <div>
        {/* Title */}
        <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight mb-3">
          Route Insights
        </h3>

        {/* Insights Checklist */}
        <div className="space-y-2.5 mb-4">
          {routeInsightsList.map((insight, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium text-[11px] leading-tight">
                {insight}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Export Route Plan Button */}
      <motion.button
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        className="w-full py-2.5 px-4 rounded-xl bg-white border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold text-xs flex items-center justify-center gap-2 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
      >
        <Download className="w-4 h-4 text-emerald-600" />
        <span>Export Route Plan</span>
      </motion.button>
    </div>
  );
}
