import React from 'react';
import { motion } from 'framer-motion';
import AuthBranding from '../../components/auth/AuthBranding';
import LoginForm from '../../components/auth/LoginForm';
import LanguageSelector from '../../components/common/LanguageSelector';
import AuthFooter from '../../components/auth/AuthFooter';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F8FAFC] selection:bg-emerald-500 selection:text-white relative overflow-x-hidden">
      {/* Main 2-Column Split Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left Visual Marketing Panel (50%) */}
        <div className="lg:col-span-6 xl:col-span-6 w-full">
          <AuthBranding />
        </div>

        {/* Right Authentication Area (50%) */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative bg-[#F8FAFC]">
          {/* Top Floating Language Selector */}
          <div className="flex justify-end w-full relative z-30 mb-4 sm:mb-6">
            <LanguageSelector />
          </div>

          {/* Centered Login Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full flex items-center justify-center my-auto relative z-20 py-4"
          >
            <LoginForm />
          </motion.div>

          {/* Decorative Subtle Landmark/Bridge Silhouette at bottom right */}
          <div className="absolute bottom-0 right-0 left-0 h-28 opacity-15 pointer-events-none z-10">
            <svg viewBox="0 0 1000 120" className="w-full h-full object-cover" fill="#059669">
              <path d="M0,120 L0,90 Q50,70 100,90 T200,90 Q250,50 300,90 T400,90 Q450,40 500,90 T600,90 Q650,60 700,90 T800,90 Q850,30 900,90 T1000,90 L1000,120 Z" />
              <rect x="180" y="50" width="40" height="70" opacity="0.6" />
              <rect x="420" y="35" width="50" height="85" opacity="0.7" />
              <rect x="740" y="45" width="45" height="75" opacity="0.5" />
            </svg>
          </div>

          {/* Bottom Legal Footer */}
          <AuthFooter />
        </div>
      </div>
    </div>
  );
}
