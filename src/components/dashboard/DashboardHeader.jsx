import React from 'react';
import { Menu, Search, Sun, Bell, ChevronDown } from 'lucide-react';

export default function DashboardHeader({
  onToggleSidebar,
  placeholder = 'Search routes, vehicles, districts, alerts...',
}) {
  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
      {/* Left: Hamburger Menu (Mobile & Tablet) */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search Input Bar */}
        <div className="relative w-72 sm:w-96 md:w-[480px]">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-2xs"
          />
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2.5 sm:gap-3.5">
        {/* Theme Toggle Button */}
        <button
          className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle Theme"
        >
          <Sun className="w-4 h-4" />
        </button>

        {/* Notification Bell with Badge 5 */}
        <div className="relative">
          <button
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
            aria-label="View Notifications"
          >
            <Bell className="w-4 h-4" />
          </button>
          <span className="absolute 1 top-1 right-1 w-4 h-4 rounded-full bg-emerald-500 text-white text-[9px] font-extrabold flex items-center justify-center border-2 border-white shadow-xs pointer-events-none">
            5
          </span>
        </div>

        {/* National Emblem / Government Admin Avatar */}
        <div className="flex items-center gap-2 pl-2 border-l border-slate-200 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center shadow-2xs overflow-hidden flex-shrink-0">
            {/* Ashoka Emblem representation / Gov seal */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-700 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8H9L12 2Z" />
              <path d="M12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8Z" opacity="0.8" />
              <rect x="7" y="17" width="10" height="4" rx="1" />
            </svg>
          </div>
          <span className="hidden sm:inline text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
            Government Admin
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
        </div>
      </div>
    </header>
  );
}
