import React from 'react';
import { MapPin } from 'lucide-react';
import { recentFieldReportsList } from '../../data/dashboardData';
import heroBg from '../../assets/hero-bg.jpeg';
import footerMountains from '../../assets/footer-mountains.jpg';

export default function RecentFieldReports() {
  const getThumbnail = (imageType) => {
    switch (imageType) {
      case 'landslide':
        return heroBg;
      case 'bridge':
        return footerMountains;
      case 'flood':
        return heroBg;
      default:
        return heroBg;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
          Recent Field Reports
        </h3>
        <button
          type="button"
          className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Reports List */}
      <div className="space-y-2.5 my-auto">
        {recentFieldReportsList.map((report) => (
          <div
            key={report.id}
            className="flex items-center gap-2.5 text-xs py-1 border-b border-slate-50 last:border-0 group cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="w-12 h-10 rounded-lg overflow-hidden flex-shrink-0 relative border border-slate-200">
              <img
                src={getThumbnail(report.imageType)}
                alt={report.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
            </div>

            {/* Description & Location */}
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-bold text-slate-800 text-[11px] leading-tight line-clamp-1 group-hover:text-emerald-700 transition-colors">
                {report.title}
              </span>
              <div className="flex items-center justify-between mt-1 text-[10px]">
                <span className="text-slate-400 font-medium">{report.time}</span>
                <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                  <MapPin className="w-2.5 h-2.5" />
                  {report.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
