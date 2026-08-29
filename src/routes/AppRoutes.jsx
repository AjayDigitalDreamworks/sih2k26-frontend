import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/Landing/LandingPage';
import LoginPage from '../pages/Auth/LoginPage';
import TransporterDashboard from '../pages/Transporter/TransporterDashboard';
import MyConsignments from '../pages/Transporter/MyConsignments';
import MyVehicles from '../pages/Transporter/MyVehicles';
import LiveTrackingPage from '../pages/Transporter/LiveTrackingPage';

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

      {/* Fallback to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
