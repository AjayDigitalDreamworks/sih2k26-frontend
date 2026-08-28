import React from 'react';
import { ChevronDown } from 'lucide-react';
import { districtOptions } from '../../data/districtData';

export default function DistrictSelector({ selectedDistrict, onDistrictChange }) {
  return (
    <div className="flex flex-col gap-1.5 max-w-sm">
      <label className="text-[11px] font-bold text-slate-500">
        Select District
      </label>
      <div className="relative inline-flex items-center">
        <select
          value={selectedDistrict}
          onChange={(e) => onDistrictChange(e.target.value)}
          className="w-full appearance-none bg-white border border-slate-200/90 rounded-xl px-3.5 py-2.5 pr-9 text-xs font-bold text-slate-800 hover:border-slate-300 focus:outline-none cursor-pointer shadow-2xs transition-colors"
        >
          {districtOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
      </div>
    </div>
  );
}
