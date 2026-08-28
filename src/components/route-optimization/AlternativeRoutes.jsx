import React, { useState } from 'react';
import { alternativeRoutesData } from '../../data/routeOptimizationData';

export default function AlternativeRoutes() {
  const [selectedRouteId, setSelectedRouteId] = useState('opt');

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs p-4 sm:p-4.5 flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight mb-3">
        Alternative Routes
      </h3>

      {/* Table Container */}
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left text-xs min-w-[500px]">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400">
              <th className="py-2 px-2 font-bold">Route Option</th>
              <th className="py-2 px-2 font-bold text-center">Distance</th>
              <th className="py-2 px-2 font-bold text-center">Time</th>
              <th className="py-2 px-2 font-bold text-center">Est. Fuel Cost</th>
              <th className="py-2 px-2 font-bold text-center">Tolls</th>
              <th className="py-2 px-2 font-bold text-center">Stops</th>
              <th className="py-2 px-2 font-bold text-right">Efficiency</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-slate-50 text-[11px]">
            {alternativeRoutesData.map((route) => {
              const isSelected = selectedRouteId === route.id;

              return (
                <tr
                  key={route.id}
                  onClick={() => setSelectedRouteId(route.id)}
                  className={`cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-emerald-50/40 text-slate-900 font-bold'
                      : 'hover:bg-slate-50/80 text-slate-600 font-medium'
                  }`}
                >
                  {/* Route Option with Custom Radio */}
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? 'border-emerald-600 bg-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        )}
                      </span>
                      <span className={isSelected ? 'font-bold text-slate-900' : 'text-slate-700'}>
                        {route.option}
                      </span>
                    </div>
                  </td>

                  {/* Distance */}
                  <td className="py-3 px-2 text-center text-slate-700">
                    {route.distance}
                  </td>

                  {/* Time */}
                  <td className={`py-3 px-2 text-center ${isSelected ? 'font-bold text-slate-900' : 'text-slate-700'}`}>
                    {route.time}
                  </td>

                  {/* Est. Fuel Cost */}
                  <td className="py-3 px-2 text-center text-slate-700">
                    {route.fuelCost}
                  </td>

                  {/* Tolls */}
                  <td className="py-3 px-2 text-center text-slate-700">
                    {route.tolls}
                  </td>

                  {/* Stops */}
                  <td className="py-3 px-2 text-center text-slate-700">
                    {route.stops}
                  </td>

                  {/* Efficiency */}
                  <td className="py-3 px-2 text-right">
                    <span
                      className={`font-black ${
                        isSelected
                          ? 'text-emerald-600'
                          : 'text-slate-600'
                      }`}
                    >
                      {route.efficiency}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
