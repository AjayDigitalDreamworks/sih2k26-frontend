export const sidebarNavItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', active: true },
  { id: 'live-map', label: 'Live Map', icon: 'map-pin', active: false },
  { id: 'ai-predictions', label: 'AI Predictions', icon: 'brain', active: false },
  { id: 'route-optimization', label: 'Route Optimization', icon: 'route', active: false },
  { id: 'vehicle-tracking', label: 'Vehicle Tracking', icon: 'truck', active: false },
  { id: 'alerts', label: 'Alerts & Notifications', icon: 'bell', badge: '8', active: false },
  { id: 'field-reports', label: 'Field Reports', icon: 'clipboard', active: false },
  { id: 'analytics', label: 'Analytics & Reports', icon: 'bar-chart', active: false },
  { id: 'emergency', label: 'Emergency Mode', icon: 'alert-triangle', isEmergency: true, active: false },
  { id: 'user-management', label: 'User Management', icon: 'users', active: false },
  { id: 'system-settings', label: 'System Settings', icon: 'settings', active: false },
];

export const kpiData = [
  {
    id: 1,
    title: 'Total Routes Monitored',
    value: '1,248',
    change: '12.5%',
    changeType: 'increase',
    period: 'vs yesterday',
    icon: 'road',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 2,
    title: 'Routes at Risk',
    value: '87',
    change: '8.3%',
    changeType: 'increase',
    period: 'vs yesterday',
    icon: 'warning',
    iconBg: 'bg-amber-100 text-amber-600',
  },
  {
    id: 3,
    title: 'Blocked Routes',
    value: '23',
    change: '15.2%',
    changeType: 'increase',
    period: 'vs yesterday',
    icon: 'blocked',
    iconBg: 'bg-rose-100 text-rose-600',
  },
  {
    id: 4,
    title: 'Active Vehicles',
    value: '312',
    change: '6.1%',
    changeType: 'increase',
    period: 'vs yesterday',
    icon: 'truck',
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    id: 5,
    title: 'Deliveries in Transit',
    value: '156',
    change: '9.4%',
    changeType: 'increase',
    period: 'vs yesterday',
    icon: 'package',
    iconBg: 'bg-purple-100 text-purple-600',
  },
];

export const aiRiskData = {
  total: 87,
  breakdown: [
    { label: 'High Risk', count: 23, percent: '26%', color: 'bg-rose-500', stroke: '#EF4444' },
    { label: 'Medium Risk', count: 36, percent: '41%', color: 'bg-amber-500', stroke: '#F59E0B' },
    { label: 'Low Risk', count: 28, percent: '32%', color: 'bg-emerald-500', stroke: '#10B981' },
  ],
  updated: '30 mins ago',
};

export const weatherData = {
  temp: '24°C',
  condition: 'Light Rain',
  location: 'Guwahati',
  humidity: '78%',
  wind: '12 km/h',
  rainfall: '6.4 mm',
};

export const deliveriesData = {
  total: 156,
  breakdown: [
    { label: 'Delivered', count: 78, percent: '50%', color: 'bg-emerald-500', stroke: '#10B981' },
    { label: 'In Transit', count: 56, percent: '36%', color: 'bg-blue-500', stroke: '#3B82F6' },
    { label: 'Delayed', count: 14, percent: '9%', color: 'bg-amber-500', stroke: '#F59E0B' },
    { label: 'Cancelled', count: 8, percent: '5%', color: 'bg-rose-500', stroke: '#EF4444' },
  ],
};

export const activeVehiclesList = [
  {
    id: 'AS01AB1234',
    route: 'Guwahati→Itanagar',
    status: 'On Time',
    statusType: 'success',
  },
  {
    id: 'AS02CD5678',
    route: 'Silchar→Aizawl',
    status: 'Delayed',
    statusType: 'warning',
  },
  {
    id: 'ML01EF9012',
    route: 'Shillong→Tura',
    status: 'On Time',
    statusType: 'success',
  },
  {
    id: 'NL01GH3456',
    route: 'Dimapur→Kohima',
    status: 'Delayed',
    statusType: 'warning',
  },
  {
    id: 'MN01IJ7890',
    route: 'Imphal→Ukhrul',
    status: 'On Time',
    statusType: 'success',
  },
];

export const recentAlertsList = [
  {
    id: 1,
    title: 'Landslide reported on NH-13 near Jorhat, Assam',
    time: '10:15 AM',
    severity: 'High',
    severityColor: 'bg-rose-50 text-rose-600 border-rose-200',
    icon: 'warning',
  },
  {
    id: 2,
    title: 'Heavy rainfall predicted in East Khasi Hills',
    time: '09:45 AM',
    severity: 'Medium',
    severityColor: 'bg-amber-50 text-amber-600 border-amber-200',
    icon: 'cloud-rain',
  },
  {
    id: 3,
    title: 'Traffic congestion on NH-27 near Lumding',
    time: '09:20 AM',
    severity: 'Medium',
    severityColor: 'bg-amber-50 text-amber-600 border-amber-200',
    icon: 'traffic',
  },
  {
    id: 4,
    title: 'Route cleared on NH-2 near Dimapur',
    time: '08:50 AM',
    severity: 'Low',
    severityColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    icon: 'check-circle',
  },
];

export const recentFieldReportsList = [
  {
    id: 1,
    title: 'Road blocked due to landslide',
    time: 'Today, 09:30 AM',
    location: 'West Khasi Hills',
    imageType: 'landslide',
  },
  {
    id: 2,
    title: 'Bridge damage reported on local route',
    time: 'Today, 08:45 AM',
    location: 'Dima Hasao',
    imageType: 'bridge',
  },
  {
    id: 3,
    title: 'Waterlogging on NH-306',
    time: 'Today, 07:30 AM',
    location: 'Cachar',
    imageType: 'flood',
  },
];

export const routeStatusChartData = {
  labels: ['15 May', '16 May', '17 May', '18 May', '19 May', '20 May', '21 May'],
  yAxis: [1500, 1200, 900, 600, 300, 0],
  series: [
    { name: 'Good', color: '#10B981', points: [900, 1140, 1020, 1250, 1260, 1240, 1180] },
    { name: 'Moderate', color: '#FBBF24', points: [460, 670, 610, 750, 730, 640, 710] },
    { name: 'At Risk', color: '#F97316', points: [220, 320, 300, 390, 360, 310, 350] },
    { name: 'Blocked', color: '#EF4444', points: [80, 120, 90, 150, 140, 100, 110] },
  ],
};

export const districtConnectivityList = [
  {
    id: 1,
    name: 'Kamrup (M)',
    good: '82%',
    moderate: '12%',
    atRisk: '4%',
    blocked: '2%',
    score: 82,
    scoreColor: 'bg-emerald-500',
  },
  {
    id: 2,
    name: 'Dima Hasao',
    good: '68%',
    moderate: '18%',
    atRisk: '9%',
    blocked: '5%',
    score: 68,
    scoreColor: 'bg-emerald-500',
  },
  {
    id: 3,
    name: 'West Khasi Hills',
    good: '65%',
    moderate: '20%',
    atRisk: '10%',
    blocked: '5%',
    score: 65,
    scoreColor: 'bg-emerald-500',
  },
  {
    id: 4,
    name: 'Lohit',
    good: '74%',
    moderate: '15%',
    atRisk: '7%',
    blocked: '4%',
    score: 74,
    scoreColor: 'bg-emerald-500',
  },
  {
    id: 5,
    name: 'Mamit',
    good: '60%',
    moderate: '20%',
    atRisk: '12%',
    blocked: '8%',
    score: 60,
    scoreColor: 'bg-amber-500',
  },
];
