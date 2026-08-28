import React, { useState } from 'react';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import LiveMapTopBar from '../../components/live-map/LiveMapTopBar';
import LiveMapCanvas from '../../components/live-map/LiveMapCanvas';
import ActiveVehiclesMapPanel from '../../components/live-map/ActiveVehiclesMapPanel';
import RouteComparisonPanel from '../../components/live-map/RouteComparisonPanel';
import TrafficOverviewPanel from '../../components/live-map/TrafficOverviewPanel';
import MapStatusBar from '../../components/live-map/MapStatusBar';

export default function LiveMapPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex selection:bg-emerald-500 selection:text-white font-sans antialiased text-slate-900">
      {/* Reused Left Navigation Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Live Map Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* Reused Top Header with Live Map search placeholder */}
        <DashboardHeader
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          placeholder="Search location, route, vehicle or incident..."
        />

        {/* Live Map Page Main Scrollable Container */}
        <main className="flex-1 p-4 sm:p-5 lg:p-6 space-y-4">
          {/* Top KPI Mini Summary & Weather Bar */}
          <LiveMapTopBar />

          {/* Large Dominant Live Accessibility Map Canvas */}
          <section className="w-full">
            <LiveMapCanvas />
          </section>

          {/* Bottom 3 Analytics & Fleet Monitoring Panels */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Active Vehicles (312) - Left 3.5 cols */}
            <div className="lg:col-span-4 xl:col-span-3 h-full">
              <ActiveVehiclesMapPanel />
            </div>

            {/* Route Comparison - Center 5.5 cols */}
            <div className="lg:col-span-8 xl:col-span-6 h-full">
              <RouteComparisonPanel />
            </div>

            {/* Traffic Overview & Recent Incidents - Right 3 cols */}
            <div className="lg:col-span-12 xl:col-span-3 h-full">
              <TrafficOverviewPanel />
            </div>
          </section>

          {/* Bottom Status Bar & Technology Footer */}
          <MapStatusBar />
        </main>
      </div>
    </div>
  );
}
