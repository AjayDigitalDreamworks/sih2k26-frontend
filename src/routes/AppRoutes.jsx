import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/Landing/LandingPage';
import LoginPage from '../pages/Auth/LoginPage';
import TransporterDashboard from '../pages/Transporter/TransporterDashboard';
import MyConsignments from '../pages/Transporter/MyConsignments';
import MyVehicles from '../pages/Transporter/MyVehicles';
import LiveTrackingPage from '../pages/Transporter/LiveTrackingPage';
import RoutePlanningPage from '../pages/Transporter/RoutePlanningPage';
import AlertsPage from '../pages/Transporter/AlertsPage';
import DeliveryHistoryPage from '../pages/Transporter/DeliveryHistoryPage';
import ReportsPage from '../pages/Transporter/ReportsPage';
import SettingsPage from '../pages/Transporter/SettingsPage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Landing / Home Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Authentication Login Page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Transporter Authenticated Dashboard */}
      <Route path="/transporter/dashboard" element={<TransporterDashboard />} />
      <Route path="/dashboard" element={<TransporterDashboard />} />
      <Route path="/admin/dashboard" element={<TransporterDashboard />} />

      {/* Transporter Consignments Page */}
      <Route path="/transporter/consignments" element={<MyConsignments />} />
      <Route path="/consignments" element={<MyConsignments />} />

      {/* Transporter Vehicles Page */}
      <Route path="/transporter/vehicles" element={<MyVehicles />} />
      <Route path="/vehicles" element={<MyVehicles />} />

      {/* Transporter Live Tracking & GPS Page */}
      <Route path="/transporter/live-tracking" element={<LiveTrackingPage />} />
      <Route path="/transporter/tracking" element={<LiveTrackingPage />} />
      <Route path="/live-tracking" element={<LiveTrackingPage />} />
      <Route path="/tracking" element={<LiveTrackingPage />} />

      {/* Transporter Route Planning Page */}
      <Route path="/transporter/routes" element={<RoutePlanningPage />} />
      <Route path="/transporter/route-planning" element={<RoutePlanningPage />} />
      <Route path="/routes" element={<RoutePlanningPage />} />
      <Route path="/route-planning" element={<RoutePlanningPage />} />

      {/* Transporter Alerts Page */}
      <Route path="/transporter/alerts" element={<AlertsPage />} />
      <Route path="/alerts" element={<AlertsPage />} />

      {/* Transporter Delivery History Page */}
      <Route path="/transporter/delivery-history" element={<DeliveryHistoryPage />} />
      <Route path="/transporter/history" element={<DeliveryHistoryPage />} />
      <Route path="/delivery-history" element={<DeliveryHistoryPage />} />
      <Route path="/history" element={<DeliveryHistoryPage />} />

      {/* Transporter Reports Page */}
      <Route path="/transporter/reports" element={<ReportsPage />} />
      <Route path="/reports" element={<ReportsPage />} />

      {/* Transporter Settings Page */}
      <Route path="/transporter/settings" element={<SettingsPage />} />
      <Route path="/settings" element={<SettingsPage />} />

      {/* Fallback to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
