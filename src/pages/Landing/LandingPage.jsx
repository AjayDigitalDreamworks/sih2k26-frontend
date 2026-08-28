import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Hero from '../../components/landing/Hero';
import InfoStrip from '../../components/landing/InfoStrip';
import FeatureCards from '../../components/landing/FeatureCards';
import StatsSection from '../../components/landing/StatsSection';
import Footer from '../../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-emerald-500 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with GIS Map & Floating Cards */}
        <Hero />

        {/* Dark Blue Information Strip */}
        <InfoStrip />

        {/* Feature Grid ("Everything You Need, In One Platform") */}
        <FeatureCards />

        {/* Key Metrics / Statistics Strip */}
        <StatsSection />
      </main>

      {/* Mountain Footer */}
      <Footer />
    </div>
  );
}
