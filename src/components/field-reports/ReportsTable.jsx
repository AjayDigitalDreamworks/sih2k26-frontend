import React, { useState } from 'react';
import {
  FileText,
  Car,
  AlertTriangle,
  Construction,
  Cloud,
  Fuel,
  Settings,
  MoreHorizontal,
  MoreVertical,
} from 'lucide-react';

export default function ReportsTable({ reports, onAction }) {
  const [activeMenuId, setActiveMenuId] = useState(null);

  const getReportIcon = (typeIcon) => {
    switch (typeIcon) {
      case 'road-damage':
        return <FileText className="w-3.5 h-3.5 text-slate-700" />;
      case 'traffic-jam':
        return <Car className="w-3.5 h-3.5 text-orange-500" />;
      case 'accident':
        return <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />;
      case 'road-block':
        return <Construction className="w-3.5 h-3.5 text-purple-600" />;
      case 'weather-issue':
        return <Cloud className="w-3.5 h-3.5 text-blue-500" />;
      case 'fuel-shortage':
        return <Fuel className="w-3.5 h-3.5 text-emerald-600" />;
      case 'breakdown':
        return <Settings className="w-3.5 h-3.5 text-purple-600" />;
      case 'other-issue':
        return <MoreHorizontal className="w-3.5 h-3.5 text-slate-600" />;
      default:
        return <FileText className="w-3.5 h-3.5 text-slate-700" />;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-rose-50 text-rose-600 border-rose-200/80';
      case 'medium':
        return 'bg-orange-50 text-orange-600 border-orange-200/80';
      case 'low':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200/80';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200/80';
    }
  };

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'in progress':
        return 'bg-blue-50 text-blue-600 border-blue-200/80';
      case 'resolved':
        return 'bg-emerald-50 text-emerald-600 border-emerald-200/80';
      case 'pending':
        return 'bg-amber-50 text-amber-600 border-amber-200/80';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200/80';
    }
  };

  const handleMenuAction = (id, action) => {
    if (onAction) onAction(id, action);
    setActiveMenuId(null);
  };

  return (
    <div className="overflow-x-auto custom-scrollbar -mx-4 sm:mx-0">
      <table className="w-full text-left text-xs min-w-[780px]">
        {/* Table Header */}
        <thead>
          <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400">
            <th className="py-2.5 px-3 font-bold">Report ID</th>
            <th className="py-2.5 px-3 font-bold">Type</th>
            <th className="py-2.5 px-3 font-bold">Location</th>
            <th className="py-2.5 px-3 font-bold">Reported By</th>
            <th className="py-2.5 px-3 font-bold">Priority</th>
            <th className="py-2.5 px-3 font-bold">Status</th>
            <th className="py-2.5 px-3 font-bold">Reported On</th>
            <th className="py-2.5 px-3 font-bold text-right">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-slate-50 text-[11px]">
          {reports.map((row) => (
            <tr key={row.id} className="hover:bg-slate-50/70 transition-colors group">
              {/* Report ID */}
              <td className="py-3 px-3 font-extrabold text-slate-900 whitespace-nowrap">
                {row.id}
              </td>

              {/* Type with Icon */}
              <td className="py-3 px-3 whitespace-nowrap">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  {getReportIcon(row.typeIcon)}
                  <span>{row.type}</span>
                </div>
              </td>

              {/* Location (Location + State) */}
              <td className="py-3 px-3 whitespace-nowrap">
                <div className="flex flex-col">
                  <span className="font-bold text-slate-800 leading-tight">
                    {row.location}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                    {row.state}
                  </span>
                </div>
              </td>

              {/* Reported By (Name + Role) */}
              <td className="py-3 px-3 whitespace-nowrap">
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-800 leading-tight">
                    {row.reportedBy}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                    {row.role}
                  </span>
                </div>
              </td>

              {/* Priority Pill */}
              <td className="py-3 px-3 whitespace-nowrap">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getPriorityBadge(
                    row.priority
                  )}`}
                >
                  {row.priority}
                </span>
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

              {/* Reported On (Date + Time) */}
              <td className="py-3 px-3 whitespace-nowrap">
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 leading-tight">
                    {row.date}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                    {row.time}
                  </span>
                </div>
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
                      onClick={() => handleMenuAction(row.id, 'view')}
                      className="w-full px-3 py-1.5 hover:bg-slate-50 text-left transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMenuAction(row.id, 'edit')}
                      className="w-full px-3 py-1.5 hover:bg-slate-50 text-left transition-colors cursor-pointer"
                    >
                      Edit Report
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMenuAction(row.id, 'delete')}
                      className="w-full px-3 py-1.5 hover:bg-rose-50 text-rose-600 text-left transition-colors cursor-pointer"
                    >
                      Delete Report
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
