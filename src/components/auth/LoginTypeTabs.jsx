import React from 'react';
import { motion } from 'framer-motion';
import { User, ShieldCheck, UserCog } from 'lucide-react';
import { loginTabs } from '../../data/authData';

export default function LoginTypeTabs({ activeTab, setActiveTab }) {
  const getIcon = (iconName, isActive) => {
    const iconClass = `w-4 h-4 transition-colors ${isActive ? 'text-emerald-600' : 'text-slate-500'}`;
    switch (iconName) {
      case 'user':
        return <User className={iconClass} />;
      case 'shield':
        return <ShieldCheck className={iconClass} />;
      case 'operator':
        return <UserCog className={iconClass} />;
      default:
        return <User className={iconClass} />;
    }
  };

  return (
    <div className="flex items-center justify-between border border-slate-200 rounded-xl bg-slate-50/70 p-1 mb-6">
      {loginTabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer focus:outline-none ${
              isActive
                ? 'text-emerald-700 bg-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
            }`}
          >
            {getIcon(tab.icon, isActive)}
            <span>{tab.label}</span>
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute -bottom-1 left-3 right-3 h-[2px] bg-emerald-500 rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
