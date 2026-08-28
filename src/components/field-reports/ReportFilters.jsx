import React, { useState } from 'react';
import { ChevronDown, Calendar, SlidersHorizontal, Download } from 'lucide-react';
import { reportFiltersData } from '../../data/fieldReportsData';

export default function ReportFilters({ onFilterChange }) {
  const [selectedType, setSelectedType] = useState('All Report Types');
  const [selectedPriority, setSelectedPriority] = useState('All Priorities');
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  const handleTypeChange = (val) => {
    setSelectedType(val);
    if (onFilterChange) onFilterChange({ type: val, priority: selectedPriority, status: selectedStatus });
  };

  const handlePriorityChange = (val) => {
    setSelectedPriority(val);
    if (onFilterChange) onFilterChange({ type: selectedType, priority: val, status: selectedStatus });
  };

  const handleStatusChange = (val) => {
    setSelectedStatus(val);
    if (onFilterChange) onFilterChange({ type: selectedType, priority: selectedPriority, status: val });
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pt-1 pb-3">
      {/* Left: 4 Filter Selectors */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
        {/* 1. Report Type Dropdown */}
        <div className="relative inline-flex items-center">
          <select
            value={selectedType}
            onChange={(e) => handleTypeChange(e.target.value)}
            className="appearance-none bg-white border border-slate-200/90 rounded-xl px-3 py-1.5 pr-8 text-xs font-semibold text-slate-700 hover:border-slate-300 focus:outline-none cursor-pointer shadow-2xs transition-colors"
          >
            {reportFiltersData.reportTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
        </div>

        {/* 2. Priority Dropdown */}
        <div className="relative inline-flex items-center">
          <select
            value={selectedPriority}
            onChange={(e) => handlePriorityChange(e.target.value)}
            className="appearance-none bg-white border border-slate-200/90 rounded-xl px-3 py-1.5 pr-8 text-xs font-semibold text-slate-700 hover:border-slate-300 focus:outline-none cursor-pointer shadow-2xs transition-colors"
          >
            {reportFiltersData.priorities.map((item) => (
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
            {reportFiltersData.statuses.map((item) => (
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
          <span className="text-xs">{reportFiltersData.dateRange}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-2 flex-shrink-0" />
        </div>
      </div>

      {/* Right: Filters & Export Report Buttons */}
      <div className="flex items-center gap-2 self-start lg:self-auto">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 hover:bg-slate-50 text-slate-700 text-xs font-bold shadow-2xs hover:shadow-xs transition-all cursor-pointer whitespace-nowrap"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-slate-600" />
          <span>Filters</span>
        </button>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200/90 hover:bg-slate-50 text-slate-700 text-xs font-bold shadow-2xs hover:shadow-xs transition-all cursor-pointer whitespace-nowrap"
        >
          <Download className="w-3.5 h-3.5 text-slate-600" />
          <span>Export Report</span>
        </button>
      </div>
    </div>
  );
}
