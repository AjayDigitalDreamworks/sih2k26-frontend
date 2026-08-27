# NER LogiSmart

**Smart Logistics. Stronger Northeast.**

NER LogiSmart is the frontend interface for an AI-powered logistics intelligence platform designed specifically for the North Eastern Region (NER) of India. 

The broader platform is designed to leverage AI, real-time data, GIS intelligence, and active logistics monitoring to evaluate route accessibility, predict environmental disruptions, optimize cargo routes, and ensure continuous delivery visibility.

## 1. Problem Context

The North Eastern Region of India faces extreme geographical and environmental challenges, including difficult mountain terrain, severe weather patterns, regular landslides, flash floods, and fragile road connectivity. These disruptions lead to unpredictable delays in transporting essential goods such as medicines, vaccines, fresh food, agricultural produce, and critical construction materials. 

NER LogiSmart aims to address these issues by providing intelligent route analysis, predictive risk alerting, and live tracking interfaces to secure supply lines across the region.

---

## 2. Repository Scope

> [!IMPORTANT]
> **This repository contains only the frontend application of NER LogiSmart.** 
> It is responsible for the user interface, design system tokens, responsive layouts, client-side routing, interactive mapping displays, and frontend animations. 
> 
> Backend REST APIs, AI/ML risk estimation models, real-time GPS telemetry pipelines, and external government databases (like GIS and meteorological services) are not hosted in this repository and are planned for future integration.

---

## 3. Current Frontend Implementation

The frontend currently provides a high-fidelity landing page showcasing the user experience and interface structure of the platform:

* **Header / Navbar**: Fully responsive navigation containing brand identification, language selector dropdown, dynamic active link styling, and Login/Sign Up action anchors.
* **Hero Section**: 
  * Spark-badge signaling the platform's AI integration.
  * Three-tiered main typography highlighting core solutions (Smarter Routes, Safer Deliveries, Stronger Northeast).
  * Five feature highlight nodes with specialized icon cells.
* **Northeast India GIS Centerpiece (`HeroMap.jsx`)**: 
  * High-fidelity 3D terrain graphic representation of the NER states (*Assam, Arunachal Pradesh, Meghalaya, Nagaland, Manipur, Tripura, and Mizoram*).
  * Color-coded route overlays representing safe (green), at-risk (orange), and blocked (red) corridors with animated signal nodes.
  * **Interactive Floating Information Cards**:
    * **Network Status**: Interactive SVGA-rendered donut chart simulating active corridor status (*68% Open, 21% At Risk, 11% Blocked*).
    * **Weather Widget**: Guwahati station feed simulator showing temperature and precipitation.
    * **Active Vehicles Tracker**: Status display indicating vehicles on the move.
    * **High Risk Alert**: Critical slide-up card alerting about predicted landslide risks on NH-13A (Haflong Section).
* **Dark Navy Information Strip**: Four-column layout demonstrating value pillars (*Designed for NER*, *Real-time Data*, *AI-Powered Insights*, *For Everyone*) separated by vertical borders.
* **Features Grid ("Everything You Need, In One Platform")**: Six custom-themed cards representing major planned services, featuring smooth scroll-reveal and hover-lift animations.
* **Key Statistics**: 5 color-matched statistics presenting simulated metrics (KM monitored, districts covered, active vehicles, alerts generated, and tracked deliveries).
* **Footer**: Centered brand logo and copyright information layered directly on top of a scenic mountain range silhouette.

---

## 4. Platform Vision

The planned wider system scope includes the following capabilities:

* **Real-time Road & Bridge Accessibility**: Automated status ingestion from state PWDs and field reports.
* **AI Landslide & Flood Prediction**: Machine learning models predicting road closures based on precipitation and soil composition.
* **Dynamic Alternate Route Engine**: Automatic calculation of detour options with associated transit risks.
* **GPS Consignment Tracking**: Telemetry visualization for trucks transporting essential supplies.
* **Geo-tagged Field Reporting**: Offline-capable mobile reporting for highway maintenance teams.
* **Multilingual SMS & App Alerts**: Local language push notifications to drivers and transporters before entering high-risk sections.

---

## 5. Technology Stack

The frontend repository utilizes the following stack:

* **Framework**: React 18
* **Build System**: Vite 6
* **Styling**: Tailwind CSS 3
* **Animations**: Framer Motion 12
* **Icons**: Lucide React

No backend databases, MQTT brokers, or machine learning frameworks are present in this repository.

---

## 6. Architecture & Directory Structure

```text
sih2k26-frontend/
├── dist/                     # Production build output
├── public/
│   └── favicon.svg           # Application tab icon
├── src/
│   ├── assets/               # Image assets (hero-bg, footer-mountains)
│   ├── components/           # Reusable presentational components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── HeroMap.jsx
│   │   ├── FeatureHighlights.jsx
│   │   ├── InfoStrip.jsx
│   │   ├── FeatureCards.jsx
│   │   ├── StatsSection.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── landingData.js    # Data-driven config files for mapped components
│   ├── App.jsx               # Section assembler and root layout
│   ├── index.css             # Tailwind base & custom animations
│   └── main.jsx              # React mounting file
├── index.html                # HTML template with Google Fonts link
├── tailwind.config.js        # Theme color tokens & styling extensions
├── vite.config.js            # Vite compiler configuration
└── package.json              # Script directives and dependencies
```

---

## 7. Installation & Setup

### Prerequisites
* **Node.js** (LTS Version 18+ recommended)
* **npm** (v9+ recommended)

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project root:
   ```bash
   cd sih2k26-frontend
   ```
3. Install package dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. View the project in your browser by opening the local host URL outputted by Vite (default is `http://localhost:5173`).

---

## 8. Available Scripts

* **`npm run dev`**: Launches the local development server with hot-module replacement.
* **`npm run build`**: Compiles the application into static files under the `dist/` directory.
* **`npm run preview`**: Launches a local static server to inspect the production build.

---

## 9. Environment Variables

> [!NOTE]
> No environment variables are currently required for the existing frontend demo. Future API client setup will utilize a `.env` file containing API endpoints.

---

## 10. Development & Contribution Guidelines

* **Component Separation**: Keep layout styling out of generic utility helpers. Maintain separate, reusable components inside `src/components`.
* **Data-driven Design**: Avoid duplicating markup for list cards or metrics. Declare lists in `src/data/landingData.js` and render them using map functions.
* **Tailwind Standards**: Do not inject arbitrary styling values unless necessary. Leverage theme colors (`brand-green`, `brand-navy`) configured in `tailwind.config.js`.
* **Smooth Transitions**: Limit the usage of complex keyframes. Utilize Framer Motion's physical bounds for natural layouts and hover transitions.

---

## 11. Git Workflow

For contributing code changes:
1. Create a branch for your feature:
   ```bash
   git checkout -b feature/feature-name
   ```
2. Save your changes and stage files:
   ```bash
   git add .
   ```
3. Commit with semantic messages:
   ```bash
   git commit -m "feat: add feature-name"
   ```
4. Push to remote:
   ```bash
   git push origin feature/feature-name
   ```

---

## 12. Implementation Status: Current vs Planned

| Area / Feature | Current Frontend Status | Future Planned Integration |
| :--- | :--- | :--- |
| **Landing Page** | Implemented (High fidelity UI) | API-driven static page content |
| **GIS Map Overlay** | SVG representation with active pins | Live Leaflet/Mapbox vector layer |
| **Weather Feed** | Mocked UI display (Guwahati station) | OpenWeatherMap API connection |
| **Vehicle Tracking** | Static card representation | Live WebSockets stream from GPS feed |
| **Disruption Alerting**| Landslide alert simulation card | Real-time notifications / SMS gateway |
| **AI Route Optimization**| Rendered route paths (green/orange/red) | ML risk-scoring API endpoints |
| **User Access Control** | Sign up and login modal hooks | OAuth2 / RBAC dashboard gateway |

---

## 13. System Architecture Design

Below is a diagram of the full system vision, highlighting the layer represented by this repository:

```text
+---------------------------------------------------------+
|                  sih2k26-frontend                       |
|           (This Repository - React, Vite)               |
+----------------------------+----------------------------+
                             |
                    REST / WebSockets
                             |
                             v
+----------------------------+----------------------------+
|                      Backend API                        |
|            (Python FastAPI / Node Express)              |
+----+-----------------------+-----------------------+----+
     |                       |                       |
     v                       v                       v
+----+----+            +-----+-----+            +----+----+
| Database|            | AI Models |            | GIS Serv|
| (PostgreSQL          | Landslide |            | GeoServer /
| PostGIS)|            | Prediction|            | Mapbox  |
+---------+            +-----------+            +---------+
```

---

## 14. Project Roadmap

### Phase 1: Frontend Prototype
* [x] Establish design system token parameters (colors, font weights).
* [x] Recreate full landing page with responsive layouts.
* [x] Integrate Framer Motion animations and state markers.

### Phase 2: Live Operation Dashboard
* [ ] Develop primary dispatcher and tracking console screens.
* [ ] Integrate Leaflet/Mapbox GIS engines into maps.
* [ ] Build interactive report reporting form for emergency updates.

### Phase 3: Backend & Data Integration
* [ ] Setup FastAPI web server.
* [ ] Integrate PostGIS geospatial engine.
* [ ] Connect vehicle GPS stream using WebSockets protocol.

---

## 15. Hackathon Context

NER LogiSmart is developed in reference to the Smart India Hackathon (SIH) 2026 problem statements targeting remote regional connectivity, disaster-resilient logistics, and supply chain tracking for the North Eastern Region of India.
