import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/Landing/LandingPage';
import LoginPage from '../pages/Auth/LoginPage';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import LiveMapPage from '../pages/Admin/LiveMapPage';
import RouteOptimization from '../pages/Admin/RouteOptimization';
import VehicleTracking from '../pages/Admin/VehicleTracking';
import AlertsNotifications from '../pages/Admin/AlertsNotifications';
import FieldReports from '../pages/Admin/FieldReports';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Landing / Home Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Authentication Login Page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Admin Dashboard */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      {/* Live Map Page */}
      <Route path="/admin/live-map" element={<LiveMapPage />} />

      {/* Route Optimization Page */}
      <Route path="/admin/route-optimization" element={<RouteOptimization />} />

      {/* Vehicle Tracking Page */}
      <Route path="/admin/vehicle-tracking" element={<VehicleTracking />} />

      {/* Alerts & Notifications Page */}
      <Route path="/admin/alerts-notifications" element={<AlertsNotifications />} />

      {/* Field Reports Page */}
      <Route path="/admin/field-reports" element={<FieldReports />} />

      {/* Fallback to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
