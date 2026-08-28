import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  MapPin,
  Brain,
  GitFork,
  Truck,
  Bell,
  ClipboardList,
  BarChart2,
  AlertTriangle,
  Users,
  Settings,
  CloudLightning,
  ChevronDown,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { sidebarNavItems } from '../../data/dashboardData';

export default function DashboardSidebar({ isOpen, onClose }) {
  const getIcon = (iconName, isEmergency, isActive) => {
    const iconClass = `w-5 h-5 flex-shrink-0 transition-colors ${
      isEmergency
        ? 'text-rose-500'
        : isActive
        ? 'text-emerald-600'
        : 'text-slate-500 group-hover:text-slate-800'
    }`;

    switch (iconName) {
      case 'dashboard':
        return <LayoutDashboard className={iconClass} />;
      case 'map-pin':
        return <MapPin className={iconClass} />;
      case 'brain':
        return <Brain className={iconClass} />;
      case 'route':
        return <GitFork className={`${iconClass} rotate-90`} />;
      case 'truck':
        return <Truck className={iconClass} />;
      case 'bell':
        return <Bell className={iconClass} />;
      case 'clipboard':
        return <ClipboardList className={iconClass} />;
      case 'bar-chart':
        return <BarChart2 className={iconClass} />;
      case 'alert-triangle':
        return <AlertTriangle className={iconClass} />;
      case 'users':
        return <Users className={iconClass} />;
      case 'settings':
        return <Settings className={iconClass} />;
      default:
        return <LayoutDashboard className={iconClass} />;
    }
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-slate-200/80 select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-100 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 shadow-sm group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7L33 29H7L20 7Z" fill="#059669" />
              <path d="M20 7L28 29H12L20 7Z" fill="#10B981" fillOpacity="0.85" />
              <path d="M20 7L23 13H17L20 7Z" fill="#D1FAE5" />
              <path
                d="M10 29C15 24 17 27 24 22C28 19 31 29 31 29"
                stroke="#1E3A8A"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline tracking-tight">
              <span className="text-xl font-extrabold text-[#0B1E36]">NER Logi</span>
              <span className="text-xl font-extrabold text-emerald-600">Smart</span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium tracking-tight -mt-0.5 leading-tight">
              Smarter Routes. Safer Deliveries.
              <br />
              Stronger Northeast.
            </span>
          </div>
        </Link>

        {/* Mobile Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1 custom-scrollbar">
        {sidebarNavItems.map((item) => {
          const isActive = item.active;
          const isEmergency = item.isEmergency;

          return (
            <button
              key={item.id}
              type="button"
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all group cursor-pointer text-left focus:outline-none ${
                isActive
                  ? 'bg-emerald-50/90 text-emerald-700 shadow-2xs font-extrabold'
                  : isEmergency
                  ? 'text-rose-500 hover:bg-rose-50/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                {getIcon(item.icon, isEmergency, isActive)}
                <span className="tracking-tight">{item.label}</span>
              </div>

              {/* Badges */}
              {item.badge && (
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Area: Offline Mode & User Profile */}
      <div className="p-3.5 border-t border-slate-100 space-y-3 bg-slate-50/50">
        {/* Offline Mode Status Card */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
            <CloudLightning className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-800 leading-tight">Offline Mode</span>
            <span className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
              Data will sync when you're back online
            </span>
          </div>
        </div>

        {/* User Profile Card */}
        <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100/70 transition-colors cursor-pointer group">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-teal-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
              AU
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-800 leading-tight group-hover:text-emerald-700 transition-colors">
                Admin User
              </span>
              <span className="text-[10px] text-slate-400 font-medium leading-tight">
                Government Admin
              </span>
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-72 h-screen sticky top-0 flex-shrink-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Backdrop & Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="lg:hidden fixed inset-y-0 left-0 w-72 h-full z-50 shadow-2xl"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
