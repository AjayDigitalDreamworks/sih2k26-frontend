import React, { useState } from 'react';
import AlertFilters from './AlertFilters';
import AlertsTable from './AlertsTable';
import AlertsPagination from './AlertsPagination';
import { alertsTableData } from '../../data/alertsData';

export default function AlertsOverview() {
  const [alerts, setAlerts] = useState(alertsTableData);

  const handleFilterChange = ({ severity, type, status }) => {
    let filtered = [...alertsTableData];

    if (severity && severity !== 'All Severity') {
      filtered = filtered.filter(
        (a) => a.severity.toLowerCase() === severity.toLowerCase()
      );
    }
    if (type && type !== 'All Types') {
      filtered = filtered.filter(
        (a) => a.type.toLowerCase() === type.toLowerCase()
      );
    }
    if (status && status !== 'All Status') {
      filtered = filtered.filter(
        (a) => a.status.toLowerCase() === status.toLowerCase()
      );
    }

    setAlerts(filtered);
  };

  const handleStatusUpdate = (alertId, newStatus) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === alertId ? { ...alert, status: newStatus } : alert
      )
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-5 space-y-3">
      {/* Title */}
      <h3 className="text-sm font-extrabold text-[#0B1E36] tracking-tight">
        Alerts Overview
      </h3>

      {/* Filter Bar */}
      <AlertFilters onFilterChange={handleFilterChange} />

      {/* Table */}
      <AlertsTable alerts={alerts} onStatusUpdate={handleStatusUpdate} />

      {/* Pagination Controls */}
      <AlertsPagination totalItems={28} itemsPerPage={8} />
    </div>
  );
}
