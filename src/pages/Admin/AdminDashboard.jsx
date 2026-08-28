import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import WelcomeHeader from '../../components/dashboard/WelcomeHeader';
import KPICards from '../../components/dashboard/KPICards';
import AccessibilityMap from '../../components/dashboard/AccessibilityMap';
import RiskPrediction from '../../components/dashboard/RiskPrediction';
import WeatherOverview from '../../components/dashboard/WeatherOverview';
import DeliveriesOverview from '../../components/dashboard/DeliveriesOverview';
import ActiveVehicles from '../../components/dashboard/ActiveVehicles';
import RecentAlerts from '../../components/dashboard/RecentAlerts';
import RecentFieldReports from '../../components/dashboard/RecentFieldReports';
import RouteStatusChart from '../../components/dashboard/RouteStatusChart';
import DistrictConnectivity from '../../components/dashboard/DistrictConnectivity';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex selection:bg-emerald-500 selection:text-white font-sans antialiased text-slate-900">
      {/* Left Navigation Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Dashboard Layout Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* Sticky Top Bar */}
        <DashboardHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Dashboard Main Scrollable Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-7 space-y-5">
          {/* Welcome Banner */}
          <WelcomeHeader />

          {/* KPI Summary Cards */}
          <KPICards />

          {/* Main Grid: Map & Side Intelligence Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Live Accessibility Map (65% width on desktop) */}
            <div className="lg:col-span-8 h-full">
              <AccessibilityMap />
            </div>

            {/* AI Risk Prediction & Weather Overview (35% width on desktop) */}
            <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
              <RiskPrediction />
              <WeatherOverview />
            </div>
          </div>

          {/* Operational Performance & Alerts Grid (4 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            <DeliveriesOverview />
            <ActiveVehicles />
            <RecentAlerts />
            <RecentFieldReports />
          </div>

          {/* Analytics & District Connectivity (2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            <RouteStatusChart />
            <DistrictConnectivity />
          </div>

          {/* Bottom Copyright Footer */}
          <footer className="pt-6 pb-2 text-center text-xs font-semibold text-slate-400">
            © 2025 NER LogiSmart. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}
