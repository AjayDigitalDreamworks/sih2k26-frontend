import React, { useState } from 'react';
import { ChevronDown, Calendar, Download } from 'lucide-react';
import { alertFiltersData } from '../../data/alertsData';

export default function AlertFilters({ onFilterChange }) {
  const [selectedSeverity, setSelectedSeverity] = useState('All Severity');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  const handleSeverityChange = (val) => {
    setSelectedSeverity(val);
    if (onFilterChange) onFilterChange({ severity: val, type: selectedType, status: selectedStatus });
  };

  const handleTypeChange = (val) => {
    setSelectedType(val);
    if (onFilterChange) onFilterChange({ severity: selectedSeverity, type: val, status: selectedStatus });
  };

  const handleStatusChange = (val) => {
    setSelectedStatus(val);
    if (onFilterChange) onFilterChange({ severity: selectedSeverity, type: selectedType, status: val });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pt-1 pb-3">
      {/* Left: 4 Filter Selectors */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {/* 1. Severity Dropdown */}
        <div className="relative inline-flex items-center">
          <select
            value={selectedSeverity}
            onChange={(e) => handleSeverityChange(e.target.value)}
            className="appearance-none bg-white border border-slate-200/90 rounded-xl px-3 py-1.5 pr-8 text-xs font-semibold text-slate-700 hover:border-slate-300 focus:outline-none cursor-pointer shadow-2xs transition-colors"
          >
            {alertFiltersData.severities.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
        </div>

        {/* 2. Type Dropdown */}
        <div className="relative inline-flex items-center">
          <select
            value={selectedType}
            onChange={(e) => handleTypeChange(e.target.value)}
            className="appearance-none bg-white border border-slate-200/90 rounded-xl px-3 py-1.5 pr-8 text-xs font-semibold text-slate-700 hover:border-slate-300 focus:outline-none cursor-pointer shadow-2xs transition-colors"
          >
            {alertFiltersData.types.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
        </div>

        {/* 3. Status Dropdown */}
        <div className="relative inline-flex items-center">
          <select
            value={selectedStatus}
            onChange={(e) => handleStatusChange(e.target.value)}
            className="appearance-none bg-white border border-slate-200/90 rounded-xl px-3 py-1.5 pr-8 text-xs font-semibold text-slate-700 hover:border-slate-300 focus:outline-none cursor-pointer shadow-2xs transition-colors"
          >
            {alertFiltersData.statuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
        </div>

        {/* 4. Date Range */}
        <div className="relative inline-flex items-center bg-white border border-slate-200/90 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-slate-300 shadow-2xs transition-colors cursor-pointer">
          <Calendar className="w-3.5 h-3.5 text-slate-400 mr-2 flex-shrink-0" />
          <span className="text-xs">{alertFiltersData.dateRange}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-2 flex-shrink-0" />
        </div>
      </div>

      {/* Right: Export Report Button */}
      <button
        type="button"
        className="self-start lg:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 hover:bg-slate-50 text-slate-700 text-xs font-bold shadow-2xs hover:shadow-xs transition-all cursor-pointer"
      >
        <Download className="w-3.5 h-3.5 text-slate-600" />
        <span>Export Report</span>
      </button>
    </div>
  );
}
