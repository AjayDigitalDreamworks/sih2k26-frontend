import React, { useState } from 'react';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import FieldReportsHeader from '../../components/field-reports/FieldReportsHeader';
import FieldReportsKPIs from '../../components/field-reports/FieldReportsKPIs';
import ReportFilters from '../../components/field-reports/ReportFilters';
import ReportsTable from '../../components/field-reports/ReportsTable';
import ReportsPagination from '../../components/field-reports/ReportsPagination';
import ReportsByLocation from '../../components/field-reports/ReportsByLocation';
import ReportsByType from '../../components/field-reports/ReportsByType';
import ReportsTrend from '../../components/field-reports/ReportsTrend';
import ReportsByPriority from '../../components/field-reports/ReportsByPriority';
import RecentActivity from '../../components/field-reports/RecentActivity';
import { reportsTableData } from '../../data/fieldReportsData';

export default function FieldReports() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [reports, setReports] = useState(reportsTableData);

  const handleFilterChange = ({ type, priority, status }) => {
    let filtered = [...reportsTableData];

    if (type && type !== 'All Report Types') {
      filtered = filtered.filter(
        (r) => r.type.toLowerCase() === type.toLowerCase()
      );
    }
    if (priority && priority !== 'All Priorities') {
      filtered = filtered.filter(
        (r) => r.priority.toLowerCase() === priority.toLowerCase()
      );
    }
    if (status && status !== 'All Status') {
      filtered = filtered.filter(
        (r) => r.status.toLowerCase() === status.toLowerCase()
      );
    }

    setReports(filtered);
  };

  const handleAction = (reportId, action) => {
    if (action === 'delete') {
      setReports((prev) => prev.filter((r) => r.id !== reportId));
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex selection:bg-emerald-500 selection:text-white font-sans antialiased text-slate-900">
      {/* Reused Left Navigation Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Field Reports Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-x-hidden">
        {/* Reused Top Header */}
        <DashboardHeader
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          placeholder="Search location, vehicle, route or incident..."
        />

        {/* Field Reports Page Main Container */}
        <main className="flex-1 p-4 sm:p-5 lg:p-6 space-y-4">
          {/* Top Page Header (Title + Date/Weather) */}
          <FieldReportsHeader />

          {/* 5 Compact KPI Badges */}
          <FieldReportsKPIs />

          {/* Main Reports Area: Table on Left + Location/Type on Right */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* Left: Filters + Reports Table + Pagination (8 cols on lg) */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-5 flex flex-col justify-between">
              <div className="space-y-3">
                {/* Filters */}
                <ReportFilters onFilterChange={handleFilterChange} />

                {/* Table */}
                <ReportsTable reports={reports} onAction={handleAction} />
              </div>

              {/* Pagination */}
              <ReportsPagination totalItems={128} itemsPerPage={8} />
            </div>

            {/* Right: Reports by Location & Reports by Type (4 cols on lg) */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <ReportsByLocation />
              <ReportsByType />
            </div>
          </section>

          {/* Lower Analytics Row: Reports Trend, Reports by Priority, Recent Activity */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            <div>
              <ReportsTrend />
            </div>
            <div>
              <ReportsByPriority />
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <RecentActivity />
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
