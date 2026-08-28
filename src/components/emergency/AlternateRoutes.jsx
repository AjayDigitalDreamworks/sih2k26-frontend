import React, { useState } from 'react';
import AlternateRouteCard from './AlternateRouteCard';
import { alternateRoutesData } from '../../data/emergencyData';

export default function AlternateRoutes() {
  const [selectedRouteId, setSelectedRouteId] = useState(1);

  return (
    <div className="space-y-3">
      {/* Section Title */}
      <h3 className="text-xs sm:text-sm font-extrabold text-[#0B1E36] tracking-tight">
        Alternate Routes
      </h3>

      {/* 3 Alternate Route Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {alternateRoutesData.map((route) => (
          <AlternateRouteCard
            key={route.id}
            route={route}
            isSelected={selectedRouteId === route.id}
            onSelect={setSelectedRouteId}
          />
        ))}
      </div>
    </div>
  );
}
