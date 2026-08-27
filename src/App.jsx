import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoStrip from './components/InfoStrip';
import FeatureCards from './components/FeatureCards';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';

export default function App() {
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
