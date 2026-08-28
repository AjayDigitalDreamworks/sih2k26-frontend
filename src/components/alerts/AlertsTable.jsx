import React, { useState } from 'react';
import {
  AlertTriangle,
  Share2,
  Fuel,
  AlertCircle,
  Wrench,
  MapPin,
  CircleAlert,
  DoorOpen,
  MoreVertical,
} from 'lucide-react';

export default function AlertsTable({ alerts, onStatusUpdate }) {
  const [activeMenuId, setActiveMenuId] = useState(null);

  const getAlertIcon = (typeIcon) => {
    switch (typeIcon) {
      case 'triangle-alert':
        return <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />;
      case 'route-deviation':
        return <Share2 className="w-3.5 h-3.5 text-purple-600 rotate-180" />;
      case 'low-fuel':
        return <Fuel className="w-3.5 h-3.5 text-blue-600" />;
      case 'engine-issue':
        return <AlertCircle className="w-3.5 h-3.5 text-rose-600" />;
      case 'wrench':
        return <Wrench className="w-3.5 h-3.5 text-emerald-600" />;
      case 'geofence':
        return <MapPin className="w-3.5 h-3.5 text-purple-600" />;
      case 'harsh-braking':
        return <CircleAlert className="w-3.5 h-3.5 text-orange-500" />;
      case 'door-open':
        return <DoorOpen className="w-3.5 h-3.5 text-emerald-600" />;
      default:
        return <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />;
    }
  };

  const getSeverityBadge = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return 'bg-rose-50 text-rose-600 border-rose-200/80';
      case 'high':
        return 'bg-orange-50 text-orange-600 border-orange-200/80';
      case 'medium':
        return 'bg-amber-50 text-amber-600 border-amber-200/80';
      case 'low':
        return 'bg-blue-50 text-blue-600 border-blue-200/80';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200/80';
    }
  };

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-rose-50 text-rose-600 border-rose-200/80';
      case 'acknowledged':
        return 'bg-blue-50 text-blue-600 border-blue-200/80';
      case 'resolved':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200/80';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200/80';
    }
  };

  const handleAction = (alertId, newStatus) => {
    if (onStatusUpdate) {
      onStatusUpdate(alertId, newStatus);
    }
    setActiveMenuId(null);
  };

  return (
    <div className="overflow-x-auto custom-scrollbar -mx-4 sm:mx-0">
      <table className="w-full text-left text-xs min-w-[780px]">
        {/* Table Header */}
        <thead>
          <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400">
            <th className="py-2.5 px-3 font-bold">Alert ID</th>
            <th className="py-2.5 px-3 font-bold">Type</th>
            <th className="py-2.5 px-3 font-bold">Severity</th>
            <th className="py-2.5 px-3 font-bold">Message</th>
            <th className="py-2.5 px-3 font-bold">Vehicle/Driver</th>
            <th className="py-2.5 px-3 font-bold">Time</th>
            <th className="py-2.5 px-3 font-bold">Status</th>
            <th className="py-2.5 px-3 font-bold text-right">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-slate-50 text-[11px]">
          {alerts.map((row) => (
            <tr key={row.id} className="hover:bg-slate-50/70 transition-colors group">
              {/* Alert ID */}
              <td className="py-3 px-3 font-extrabold text-slate-900 whitespace-nowrap">
                {row.id}
              </td>

              {/* Type */}
              <td className="py-3 px-3 whitespace-nowrap">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  {getAlertIcon(row.typeIcon)}
                  <span>{row.type}</span>
                </div>
              </td>

              {/* Severity Pill */}
              <td className="py-3 px-3 whitespace-nowrap">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getSeverityBadge(
                    row.severity
                  )}`}
                >
                  {row.severity}
                </span>
              </td>

              {/* Message (Two lines) */}
              <td className="py-3 px-3 max-w-[280px]">
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-800 leading-tight">
                    {row.message}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                    {row.secondaryMessage}
                  </span>
                </div>
              </td>

              {/* Vehicle / Driver (Two lines) */}
              <td className="py-3 px-3 whitespace-nowrap">
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 leading-tight">
                    {row.vehicle}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                    {row.driver}
                  </span>
                </div>
              </td>

              {/* Date & Time (Two lines) */}
              <td className="py-3 px-3 whitespace-nowrap">
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-700 leading-tight">
                    {row.date}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                    {row.time}
                  </span>
                </div>
              </td>

              {/* Status Pill */}
              <td className="py-3 px-3 whitespace-nowrap">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getStatusBadge(
                    row.status
                  )}`}
                >
                  {row.status}
                </span>
              </td>

              {/* Actions Dropdown */}
              <td className="py-3 px-3 text-right relative">
                <button
                  type="button"
                  onClick={() => setActiveMenuId(activeMenuId === row.id ? null : row.id)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>

                {/* Popover Action Menu */}
                {activeMenuId === row.id && (
                  <div className="absolute right-3 top-10 z-30 w-36 bg-white rounded-xl shadow-lg border border-slate-200/90 py-1 text-left text-xs font-semibold text-slate-700 animate-in fade-in zoom-in-95 duration-100">
                    <button
                      type="button"
                      onClick={() => setActiveMenuId(null)}
                      className="w-full px-3 py-1.5 hover:bg-slate-50 text-left transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAction(row.id, 'Acknowledged')}
                      className="w-full px-3 py-1.5 hover:bg-blue-50 text-blue-600 text-left transition-colors cursor-pointer"
                    >
                      Acknowledge
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAction(row.id, 'Resolved')}
                      className="w-full px-3 py-1.5 hover:bg-emerald-50 text-emerald-600 text-left transition-colors cursor-pointer"
                    >
                      Resolve
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
