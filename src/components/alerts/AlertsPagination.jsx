import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';

export default function AlertsPagination({
  currentPage = 1,
  totalPages = 3,
  totalItems = 28,
  itemsPerPage = 8,
  onPageChange,
}) {
  const [page, setPage] = useState(currentPage);

  const handlePage = (p) => {
    if (p >= 1 && p <= totalPages) {
      setPage(p);
      if (onPageChange) onPageChange(p);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
      {/* Left: Summary text */}
      <span className="text-slate-400 font-medium">
        Showing 1 to {Math.min(itemsPerPage, totalItems)} of {totalItems} alerts
      </span>

      {/* Right: Pagination Controls */}
      <div className="flex items-center gap-1 self-end sm:self-auto select-none">
        {/* Prev */}
        <button
          type="button"
          onClick={() => handlePage(page - 1)}
          disabled={page === 1}
          className="w-7 h-7 rounded-lg border border-slate-200/90 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-slate-600 shadow-2xs transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

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

        {/* Next */}
        <button
          type="button"
          onClick={() => handlePage(page + 1)}
          disabled={page === totalPages}
          className="w-7 h-7 rounded-lg border border-slate-200/90 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-slate-600 shadow-2xs transition-colors cursor-pointer"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {/* Last Page Jump */}
        <button
          type="button"
          onClick={() => handlePage(totalPages)}
          disabled={page === totalPages}
          className="w-7 h-7 rounded-lg border border-slate-200/90 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-slate-600 shadow-2xs transition-colors cursor-pointer"
        >
          <ChevronsRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
