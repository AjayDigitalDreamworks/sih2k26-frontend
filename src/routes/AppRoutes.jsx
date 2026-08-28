import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/Landing/LandingPage';
import LoginPage from '../pages/Auth/LoginPage';
import AdminDashboard from '../pages/Admin/AdminDashboard';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Landing / Home Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Authentication Login Page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Admin Dashboard */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      {/* Fallback to Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
