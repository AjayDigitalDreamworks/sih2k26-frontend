import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../common/Logo';
import AuthNetworkStatus from './AuthNetworkStatus';
import AuthFeatureHighlights from './AuthFeatureHighlights';
import AuthStatsCard from './AuthStatsCard';
import heroBg from '../../assets/hero-bg.jpeg';

export default function AuthBranding() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden bg-slate-900">
      {/* Scenic Mountain & Highway Logistics Background */}
      <img
        src={heroBg}
        alt="Northeast Logistics Map & Highway"
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 opacity-85 pointer-events-none"
      />

      {/* Subtle Light/Dark Gradient Overlay for maximum readability */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-white/70 to-slate-900/40 pointer-events-none" />

      {/* SVG Glowing Route Lines Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 600" fill="none">
        {/* Green Corridor with Pin */}
        <path
          d="M 230 420 C 250 360, 310 260, 370 200"
          stroke="#10B981"
          strokeWidth="3.5"
          strokeDasharray="4 4"
          className="route-dash-animated"
        />
        {/* Orange Corridor with Pin */}
        <path
          d="M 230 420 C 210 370, 240 310, 260 280"
          stroke="#F59E0B"
          strokeWidth="3"
        />
        {/* Red Corridor with Pin */}
        <path
          d="M 260 280 C 280 270, 340 300, 380 280"
          stroke="#EF4444"
          strokeWidth="3.5"
        />
      </svg>

      {/* Route Location Map Pins */}
      <div className="absolute top-[32%] left-[62%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="relative flex items-center justify-center">
          <span className="absolute -inset-1 bg-emerald-500 rounded-full animate-ping opacity-70" />
          <div className="w-6 h-6 rounded-full bg-emerald-600 border-2 border-white shadow-lg flex items-center justify-center text-white text-[10px]">
            📍
          </div>
        </div>
      </div>

      <div className="absolute top-[45%] left-[44%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="w-5 h-5 rounded-full bg-amber-500 border-2 border-white shadow-lg flex items-center justify-center text-white text-[9px]">
          📍
        </div>
      </div>

      <div className="absolute top-[46%] left-[64%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="w-5 h-5 rounded-full bg-rose-600 border-2 border-white shadow-lg flex items-center justify-center text-white text-[9px]">
          📍
        </div>
      </div>

      {/* Top Left: Logo */}
      <div className="relative z-20">
        <Logo />
      </div>

      {/* Middle Content Section */}
      <div className="relative z-20 my-6 sm:my-8 space-y-6 max-w-xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-1"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0B1E36] tracking-tight leading-[1.1]">
            Smarter Routes.
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0B1E36] tracking-tight leading-[1.1]">
            Safer Deliveries.
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-emerald-600 tracking-tight leading-[1.1]">
            Stronger Northeast.
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium max-w-lg"
        >
          AI-powered logistics intelligence platform that monitors accessibility, predicts disruptions and optimizes movement of essential goods across the North Eastern Region.
        </motion.p>

        {/* Live Network Status & 4 Features Grid/Stack */}
        <div className="space-y-5 pt-1">
          <AuthNetworkStatus />
          <AuthFeatureHighlights />
        </div>
      </div>

      {/* Bottom Floating Stats Card */}
      <div className="relative z-20 pt-4">
        <AuthStatsCard />
      </div>
    </div>
  );
}
