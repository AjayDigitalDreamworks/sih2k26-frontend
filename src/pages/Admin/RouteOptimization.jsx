import React, { useState } from 'react';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import RouteOptimizationHeader from '../../components/route-optimization/RouteOptimizationHeader';
import RouteControls from '../../components/route-optimization/RouteControls';
import RouteMap from '../../components/route-optimization/RouteMap';
import RouteSummary from '../../components/route-optimization/RouteSummary';
import DistanceComparison from '../../components/route-optimization/DistanceComparison';
import CostBreakdown from '../../components/route-optimization/CostBreakdown';
import RouteEfficiency from '../../components/route-optimization/RouteEfficiency';
import AlternativeRoutes from '../../components/route-optimization/AlternativeRoutes';
import RouteInsights from '../../components/route-optimization/RouteInsights';

export default function RouteOptimization() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex selection:bg-emerald-500 selection:text-white font-sans antialiased text-slate-900">
      {/* Reused Left Navigation Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Route Optimization Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* Reused Top Header */}
        <DashboardHeader
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          placeholder="Search location, route, vehicle or incident..."
        />

        {/* Route Optimization Page Main Container */}
        <main className="flex-1 p-4 sm:p-5 lg:p-6 space-y-4">
          {/* Top Page Header (Title + Date/Weather) */}
          <RouteOptimizationHeader />

          {/* Route Inputs / Controls Bar */}
          <RouteControls />

          {/* Map + Optimized Route Summary Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Map (8 cols on lg) */}
            <div className="lg:col-span-8 min-h-[460px] lg:min-h-[520px]">
              <RouteMap />
            </div>

            {/* Route Summary (4 cols on lg) */}
            <div className="lg:col-span-4 h-full">
              <RouteSummary />
            </div>
          </section>

          {/* Analytics Row: Distance Comparison, Cost Breakdown, Route Efficiency */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            <div>
              <DistanceComparison />
            </div>
            <div>
              <CostBreakdown />
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <RouteEfficiency />
            </div>
          </section>

          {/* Lower Row: Alternative Routes Table + Route Insights */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Alternative Routes Table (8 cols on lg) */}
            <div className="lg:col-span-8 h-full">
              <AlternativeRoutes />
            </div>

            {/* Route Insights & Export (4 cols on lg) */}
            <div className="lg:col-span-4 h-full">
              <RouteInsights />
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
