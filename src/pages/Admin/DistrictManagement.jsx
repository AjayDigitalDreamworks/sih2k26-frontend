import React, { useState } from 'react';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import DistrictHeader from '../../components/district-management/DistrictHeader';
import DistrictSelector from '../../components/district-management/DistrictSelector';
import DistrictKPIs from '../../components/district-management/DistrictKPIs';
import RouteConnectivityMap from '../../components/district-management/RouteConnectivityMap';
import DistrictSummary from '../../components/district-management/DistrictSummary';
import RouteConnectivityTable from '../../components/district-management/RouteConnectivityTable';
import { districtDatasets } from '../../data/districtData';

export default function DistrictManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState('Tezpur District, Assam');

  const currentData =
    districtDatasets[selectedDistrict] || districtDatasets['Tezpur District, Assam'];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex selection:bg-emerald-500 selection:text-white font-sans antialiased text-slate-900">
      {/* Reused Left Navigation Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main District Management Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* Reused Top Header */}
        <DashboardHeader
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          placeholder="Search location, vehicle, route or incident..."
        />

        {/* District Management Page Main Container */}
        <main className="flex-1 p-4 sm:p-5 lg:p-6 space-y-4">
          {/* Top Page Header (Title + Date/Weather) */}
          <DistrictHeader />

          {/* District Dropdown Selector */}
          <DistrictSelector
            selectedDistrict={selectedDistrict}
            onDistrictChange={setSelectedDistrict}
          />

          {/* 4 KPI Cards */}
          <DistrictKPIs kpis={currentData.kpis} />

          {/* Route Connectivity Map + District Summary Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Map (8 cols on lg) */}
            <div className="lg:col-span-8 h-full">
              <RouteConnectivityMap />
            </div>

            {/* District Summary (4 cols on lg) */}
            <div className="lg:col-span-4 h-full">
              <DistrictSummary summary={currentData.summary} />
            </div>
          </section>

          {/* Route-wise Connectivity Table */}
          <section>
            <RouteConnectivityTable routes={currentData.routes} />
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
