import React, { useState } from 'react';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import AlertsHeader from '../../components/alerts/AlertsHeader';
import AlertsKPIs from '../../components/alerts/AlertsKPIs';
import AlertsOverview from '../../components/alerts/AlertsOverview';
import AlertsBySeverity from '../../components/alerts/AlertsBySeverity';
import AlertsTrend from '../../components/alerts/AlertsTrend';
import RecentNotifications from '../../components/alerts/RecentNotifications';

export default function AlertsNotifications() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex selection:bg-emerald-500 selection:text-white font-sans antialiased text-slate-900">
      {/* Reused Left Navigation Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Alerts Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* Reused Top Header */}
        <DashboardHeader
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          placeholder="Search location, vehicle, route or incident..."
        />

        {/* Alerts Page Main Container */}
        <main className="flex-1 p-4 sm:p-5 lg:p-6 space-y-4">
          {/* Top Page Header (Title + Date/Weather) */}
          <AlertsHeader />

          {/* 5 Compact KPI Badges */}
          <AlertsKPIs />

          {/* Main Alerts Overview Container (Filters + Table + Pagination) */}
          <section>
            <AlertsOverview />
          </section>

          {/* Lower Analytics Row: Severity Donut, Trend Line Chart, Recent Notifications */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            <div>
              <AlertsBySeverity />
            </div>
            <div>
              <AlertsTrend />
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <RecentNotifications />
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
