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
  PlusCircle,
  AlertOctagon,
  FileSpreadsheet,
  Download,
  CheckCircle2,
  Headphones,
  ChevronDown,
  X,
  Fuel,
  Network,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarNavItems } from '../../data/dashboardData';

export default function DashboardSidebar({ isOpen, onClose }) {
  const location = useLocation();

  const getIcon = (iconName, isEmergency, isActive) => {
    const iconClass = `w-4.5 h-4.5 flex-shrink-0 transition-colors ${
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
      case 'fuel':
        return <Fuel className={iconClass} />;
      case 'network':
        return <Network className={iconClass} />;
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

  const getItemLink = (id) => {
    if (id === 'dashboard') return '/admin/dashboard';
    if (id === 'live-map') return '/admin/live-map';
    if (id === 'route-optimization') return '/admin/route-optimization';
    if (id === 'vehicle-tracking') return '/admin/vehicle-tracking';
    if (id === 'alerts') return '/admin/alerts-notifications';
    if (id === 'field-reports') return '/admin/field-reports';
    if (id === 'district-management') return '/admin/district-management';
    return '#';
  };

  const isItemActive = (id) => {
    if (id === 'dashboard') {
      return location.pathname === '/admin/dashboard' || location.pathname === '/admin';
    }
    if (id === 'live-map') {
      return location.pathname === '/admin/live-map';
    }
    if (id === 'route-optimization') {
      return location.pathname === '/admin/route-optimization';
    }
    if (id === 'vehicle-tracking') {
      return location.pathname === '/admin/vehicle-tracking';
    }
    if (id === 'alerts') {
      return location.pathname === '/admin/alerts-notifications';
    }
    if (id === 'field-reports') {
      return location.pathname === '/admin/field-reports';
    }
    if (id === 'district-management') {
      return location.pathname === '/admin/district-management';
    }
    return false;
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-slate-200/80 select-none overflow-y-auto custom-scrollbar">
      {/* Brand Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-20">
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
            <span className="text-[9px] text-slate-400 font-medium tracking-tight -mt-0.5 leading-tight">
              Smart Logistics. Stronger Northeast
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

      {/* Main Navigation Links */}
      <div className="px-3 py-3 space-y-1">
        {sidebarNavItems.map((item) => {
          const active = isItemActive(item.id);
          const isEmergency = item.isEmergency;
          const linkTarget = getItemLink(item.id);

          return (
            <Link
              key={item.id}
              to={linkTarget}
              onClick={() => {
                if (onClose) onClose();
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all group text-left focus:outline-none ${
                active
                  ? 'bg-emerald-50/90 text-emerald-700 shadow-2xs font-extrabold'
                  : isEmergency
                  ? 'text-rose-500 hover:bg-rose-50/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                {getIcon(item.icon, isEmergency, active)}
                <span className="tracking-tight">{item.label}</span>
              </div>

              {/* Badges */}
              {item.badge && (
                <span
                  className={`w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center shadow-xs ${
                    item.id === 'alerts' ? 'bg-rose-600' : 'bg-emerald-500'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Quick Tools Section */}
      <div className="px-4 py-3 border-t border-slate-100">
        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">
          Quick Tools
        </span>
        <div className="space-y-1.5">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl bg-blue-50/70 text-blue-700 hover:bg-blue-100/70 transition-all text-xs font-bold text-left cursor-pointer hover:shadow-xs focus:outline-none"
          >
            <PlusCircle className="w-4 h-4 text-blue-600" />
            <span>Add Vehicle</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl bg-rose-50/70 text-rose-700 hover:bg-rose-100/70 transition-all text-xs font-bold text-left cursor-pointer hover:shadow-xs focus:outline-none"
          >
            <AlertOctagon className="w-4 h-4 text-rose-600" />
            <span>Create Alert</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl bg-emerald-50/70 text-emerald-700 hover:bg-emerald-100/70 transition-all text-xs font-bold text-left cursor-pointer hover:shadow-xs focus:outline-none"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Generate Report</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl bg-amber-50/70 text-amber-700 hover:bg-amber-100/70 transition-all text-xs font-bold text-left cursor-pointer hover:shadow-xs focus:outline-none"
          >
            <Download className="w-4 h-4 text-amber-600" />
            <span>Import Data</span>
          </motion.button>
        </div>
      </div>

      {/* System Status Section */}
      <div className="px-4 py-3 border-t border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
            System Status
          </span>
           
        </div>
        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 mb-2">
          <CheckCircle2 className="w-3 h-3" />
          All Systems Operational
        </span>
        <div className="space-y-1.5 text-[11px] font-medium text-slate-600">
          <div className="flex items-center justify-between">
            <span className="text-slate-500">GPS Tracking</span>
            <span className="font-bold text-emerald-600">Online</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Data Sync</span>
            <span className="font-bold text-emerald-600">Online</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">AI Engine</span>
            <span className="font-bold text-emerald-600">Online</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500">Server Status</span>
            <span className="font-bold text-emerald-600">Online</span>
          </div>
        </div>
      </div>

      {/* Need Help? Box */}
      <div className="p-3.5 border-t border-slate-100 bg-slate-50/60 mt-auto">
        <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
          <div>
            <span className="text-xs font-bold text-slate-800 block leading-tight">Need Help?</span>
            <span className="text-[10px] text-slate-400 font-medium leading-tight">
              Control room available 24/7 to assist you
            </span>
          </div>
          <button className="w-full py-2 px-3 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-2xs">
            <Headphones className="w-3.5 h-3.5" />
            <span>Contact Support</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-64 xl:w-70 h-screen sticky top-0 flex-shrink-0 z-30">
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
