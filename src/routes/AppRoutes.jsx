import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/Landing/LandingPage';
import LoginPage from '../pages/Auth/LoginPage';
import TransporterDashboard from '../pages/Transporter/TransporterDashboard';

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

      {/* Fallback to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
