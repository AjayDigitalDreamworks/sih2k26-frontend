import React, { useState } from 'react';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import VehicleTrackingHeader from '../../components/vehicle-tracking/VehicleTrackingHeader';
import VehicleTrackingKPIs from '../../components/vehicle-tracking/VehicleTrackingKPIs';
import VehicleMap from '../../components/vehicle-tracking/VehicleMap';
import LiveVehicles from '../../components/vehicle-tracking/LiveVehicles';
import FleetOverview from '../../components/vehicle-tracking/FleetOverview';
import VehiclesByStatus from '../../components/vehicle-tracking/VehiclesByStatus';
import AlertsSummary from '../../components/vehicle-tracking/AlertsSummary';
import RecentTrips from '../../components/vehicle-tracking/RecentTrips';
import VehiclePerformance from '../../components/vehicle-tracking/VehiclePerformance';

export default function VehicleTracking() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex selection:bg-emerald-500 selection:text-white font-sans antialiased text-slate-900">
      {/* Reused Left Navigation Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Vehicle Tracking Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* Reused Top Header */}
        <DashboardHeader
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          placeholder="Search location, vehicle number or driver..."
        />

        {/* Vehicle Tracking Page Main Container */}
        <main className="flex-1 p-4 sm:p-5 lg:p-6 space-y-4">
          {/* Top Page Header (Title + Date/Weather) */}
          <VehicleTrackingHeader />

          {/* 5 Compact KPI Badges */}
          <VehicleTrackingKPIs />

          {/* Map + Live Vehicles Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Map (8 cols on lg) */}
            <div className="lg:col-span-8 min-h-[460px] lg:min-h-[520px]">
              <VehicleMap />
            </div>

            {/* Live Vehicles (4 cols on lg) */}
            <div className="lg:col-span-4 h-full">
              <LiveVehicles />
            </div>
          </section>

          {/* Analytics Row: Fleet Overview, Vehicles by Status, Alerts Summary */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            <div>
              <FleetOverview />
            </div>
            <div>
              <VehiclesByStatus />
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <AlertsSummary />
            </div>
          </section>

          {/* Lower Row: Recent Trips Table + Vehicle Performance */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Recent Trips Table (8 cols on lg) */}
            <div className="lg:col-span-8 h-full">
              <RecentTrips />
            </div>

            {/* Vehicle Performance (4 cols on lg) */}
            <div className="lg:col-span-4 h-full">
              <VehiclePerformance />
            </div>
          </section>

          {/* Page Footer */}
          <footer className="pt-2 pb-1 text-center text-xs font-medium text-slate-400">
            © 2025 NER LogiSmart. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}
