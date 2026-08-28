import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Waves, Ban, CloudRain, X } from 'lucide-react';
import heroBg from '../../assets/hero-bg.jpeg';
import footerMountains from '../../assets/footer-mountains.jpg';

export default function IncidentPopupCard({ popup }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const getHeaderIcon = (type) => {
    switch (type) {
      case 'landslide':
        return <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />;
      case 'flood':
        return <Waves className="w-3.5 h-3.5 text-blue-600" />;
      case 'blocked':
        return <Ban className="w-3.5 h-3.5 text-rose-600" />;
      case 'rain':
        return <CloudRain className="w-3.5 h-3.5 text-amber-600" />;
      default:
        return <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />;
    }
  };

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'landslide':
      case 'blocked':
        return 'text-rose-700 bg-rose-50 border-rose-200';
      case 'flood':
        return 'text-blue-700 bg-blue-50 border-blue-200';
      case 'rain':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      default:
        return 'text-slate-700 bg-slate-50 border-slate-200';
    }
  };

  const getImage = (type) => {
    switch (type) {
      case 'landslide':
      case 'rain':
        return heroBg;
      case 'flood':
      case 'blocked':
      default:
        return footerMountains;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        style={{ top: popup.position.top, left: popup.position.left }}
        className="absolute z-20 w-44 sm:w-52 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-xl border border-slate-200/90 select-none -translate-x-1/2 -translate-y-1/2 group"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between gap-1 mb-1.5">
          <div className="flex items-center gap-1.5 min-w-0">
            <div className={`p-1 rounded-md border ${getBadgeStyle(popup.type)}`}>
              {getHeaderIcon(popup.type)}
            </div>
            <span className="text-[11px] font-black text-slate-900 truncate">
              {popup.title}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setVisible(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close Incident Card"
          >
            <X className="w-3 h-3" />
          </button>
        </div>

        {/* Location & Details */}
        <div className="space-y-0.5 mb-2 text-[10px]">
          <div className="font-extrabold text-slate-800 leading-tight">
            {popup.location}
          </div>
          <div className="text-slate-500 font-medium leading-tight">
            {popup.subLocation}
          </div>
          <div className="text-[9px] font-bold text-slate-400">
            {popup.time}
          </div>
        </div>

        {/* Incident Thumbnail Image */}
        <div className="w-full h-16 rounded-xl overflow-hidden relative border border-slate-200">
          <img
            src={getImage(popup.imageType)}
            alt={popup.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-slate-950/20" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
