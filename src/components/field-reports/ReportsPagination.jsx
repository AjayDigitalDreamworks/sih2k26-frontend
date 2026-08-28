import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function ReportsPagination({
  currentPage = 1,
  totalItems = 128,
  itemsPerPage = 8,
  onPageChange,
}) {
  const [page, setPage] = useState(currentPage);

  const handlePage = (p) => {
    setPage(p);
    if (onPageChange) onPageChange(p);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
      {/* Left: Summary text */}
      <span className="text-slate-400 font-medium">
        Showing 1 to {Math.min(itemsPerPage, totalItems)} of {totalItems} reports
      </span>

      {/* Right: Pagination Controls */}
      <div className="flex items-center gap-1 self-end sm:self-auto select-none">
        {/* Page 1 */}
        <button
          type="button"
          onClick={() => handlePage(1)}
          className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            page === 1
              ? 'bg-[#1B5E20] text-white shadow-xs'
              : 'border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs'
          }`}
        >
          1
        </button>

        {/* Page 2 */}
        <button
          type="button"
          onClick={() => handlePage(2)}
          className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            page === 2
              ? 'bg-[#1B5E20] text-white shadow-xs'
              : 'border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs'
          }`}
        >
          2
        </button>

        {/* Page 3 */}
        <button
          type="button"
          onClick={() => handlePage(3)}
          className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            page === 3
              ? 'bg-[#1B5E20] text-white shadow-xs'
              : 'border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs'
          }`}
        >
          3
        </button>

        {/* Ellipsis */}
        <span className="px-1 text-slate-400 font-bold">..</span>

        {/* Page 16 */}
        <button
          type="button"
          onClick={() => handlePage(16)}
          className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            page === 16
              ? 'bg-[#1B5E20] text-white shadow-xs'
              : 'border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 shadow-2xs'
          }`}
        >
          16
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={() => handlePage(Math.min(16, page + 1))}
          className="w-7 h-7 rounded-lg border border-slate-200/90 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-2xs transition-colors cursor-pointer"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
