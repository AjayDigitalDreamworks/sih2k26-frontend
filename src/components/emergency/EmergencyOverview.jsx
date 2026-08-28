import React from 'react';
import { Route, MapPin, Calendar, Clock, ShieldAlert } from 'lucide-react';
import { emergencyOverviewData } from '../../data/emergencyData';

export default function EmergencyOverview() {
  const { status, title, description, details } = emergencyOverviewData;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-5">
      {/* Section Title */}
      <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight mb-4">
        Emergency Overview
      </h3>

      {/* Main Container: Left Block | Vertical Divider | Right Details */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Side: Large Flood Icon Box + Badge + Title + Description (md:col-span-6) */}
        <div className="md:col-span-6 flex items-start gap-4">
          {/* Large Flood Icon Container */}
          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-rose-50 border border-rose-200/90 flex items-center justify-center flex-shrink-0 shadow-2xs">
            <svg
              className="w-10 h-10 text-rose-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* House roof */}
              <path d="M3 10L12 3L21 10" />
              {/* House body */}
              <path d="M5 10V14" />
              <path d="M19 10V14" />
              {/* Wave 1 */}
              <path d="M2 17C4 16 6 18 8 17C10 16 12 18 14 17C16 16 18 18 20 17C21 16.5 22 17 22 17" />
              {/* Wave 2 */}
              <path d="M2 20C4 19 6 21 8 20C10 19 12 21 14 20C16 19 18 21 20 20C21 19.5 22 20 22 20" />
            </svg>
          </div>

          {/* Info Details */}
          <div className="flex flex-col min-w-0">
            <div>
              <span className="inline-block text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md bg-rose-50 text-rose-600 border border-rose-200/80 mb-1">
                {status}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-1">
              {description}
            </p>
          </div>
        </div>

        {/* Right Side: Information Block (md:col-span-6 with left divider on desktop) */}
        <div className="md:col-span-6 md:border-l md:border-slate-100 md:pl-6 space-y-2.5">
          {/* Affected Route */}
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 text-slate-400 font-semibold min-w-0 truncate">
              <Route className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="truncate">Affected Route</span>
            </span>
            <span className="font-bold text-slate-800 text-right ml-2">
              {details.affectedRoute}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 text-slate-400 font-semibold min-w-0 truncate">
              <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="truncate">Location</span>
            </span>
            <span className="font-bold text-slate-800 text-right ml-2">
              {details.location}
            </span>
          </div>

          {/* Reported On */}
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 text-slate-400 font-semibold min-w-0 truncate">
              <Calendar className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="truncate">Reported On</span>
            </span>
            <span className="font-semibold text-slate-700 text-right ml-2">
              {details.reportedOn}
            </span>
          </div>

          {/* Expected Clearance */}
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 text-slate-400 font-semibold min-w-0 truncate">
              <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="truncate">Expected Clearance</span>
            </span>
            <span className="font-semibold text-slate-700 text-right ml-2">
              {details.expectedClearance}
            </span>
          </div>

          {/* Reported By */}
          <div className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 text-slate-400 font-semibold min-w-0 truncate">
              <ShieldAlert className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="truncate">Reported By</span>
            </span>
            <span className="font-extrabold text-slate-900 text-right ml-2">
              {details.reportedBy}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
