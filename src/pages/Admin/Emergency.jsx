import React, { useState } from 'react';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import EmergencyHeader from '../../components/emergency/EmergencyHeader';
import EmergencyOverview from '../../components/emergency/EmergencyOverview';
import AffectedRouteMap from '../../components/emergency/AffectedRouteMap';
import EmergencyImpact from '../../components/emergency/EmergencyImpact';
import AlternateRoutes from '../../components/emergency/AlternateRoutes';

export default function Emergency() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex selection:bg-emerald-500 selection:text-white font-sans antialiased text-slate-900">
      {/* Reused Left Navigation Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Emergency Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* Reused Top Header */}
        <DashboardHeader
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          placeholder="Search location, vehicle, route or incident..."
        />

        {/* Emergency Page Main Container */}
        <main className="flex-1 p-4 sm:p-5 lg:p-6 space-y-4">
          {/* Top Page Header (Title + Date/Weather) */}
          <EmergencyHeader />

          {/* Emergency Overview Card */}
          <section>
            <EmergencyOverview />
          </section>

          {/* Affected Route Map + Emergency Impact */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Map (8 cols on lg) */}
            <div className="lg:col-span-8 h-full">
              <AffectedRouteMap />
            </div>

            {/* Emergency Impact (4 cols on lg) */}
            <div className="lg:col-span-4 h-full">
              <EmergencyImpact />
            </div>
          </section>

          {/* Alternate Routes Section */}
          <section>
            <AlternateRoutes />
          </section>

          {/* Page Footer */}
          <footer className="pt-4 pb-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-medium text-slate-400">
            <span>© 2025 RAAHI. All rights reserved.</span>
            <span>Version 2.4.1</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
