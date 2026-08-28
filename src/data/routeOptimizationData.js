export const routeControlsData = {
  defaultFrom: 'Guwahati, Assam',
  defaultDestinations: '6 Destinations Selected',
  vehicleTypes: ['Medium Truck', 'Small Truck', 'Heavy Truck', 'Refrigerated Truck'],
};

export const routeSummaryMetrics = [
  { id: 'distance', label: 'Total Distance', value: '468 km' },
  { id: 'time', label: 'Total Time', value: '10h 45m' },
  { id: 'cost', label: 'Est. Fuel Cost', value: '₹ 6,240' },
  { id: 'stops', label: 'Stops', value: '6' },
];

export const routeSequence = [
  {
    id: 'S',
    name: 'Guwahati, Assam',
    time: '08:00AM',
    type: 'start',
    badgeColor: 'bg-emerald-600 text-white',
    isEndpoint: true,
  },
  {
    id: '1',
    name: 'Jorhat, Assam',
    detail: '104 km • 1h 45m',
    time: '09:45 AM',
    badgeColor: 'bg-blue-600 text-white',
  },
  {
    id: '2',
    name: 'Nagaon, Assam',
    detail: '84 km • 1h 15m',
    time: '11:30AM',
    badgeColor: 'bg-purple-600 text-white',
  },
  {
    id: '3',
    name: 'Hojai, Assam',
    detail: '98 km • 1h 10m',
    time: '01:00PM',
    badgeColor: 'bg-orange-500 text-white',
  },
  {
    id: '4',
    name: 'Shillong, Meghalaya',
    detail: '91 km • 1h 20m',
    time: '02:20PM',
    badgeColor: 'bg-rose-600 text-white',
  },
  {
    id: '5',
    name: 'Dimapur, Nagaland',
    detail: '86 km • 1h 05m',
    time: '04:30PM',
    badgeColor: 'bg-emerald-600 text-white',
  },
  {
    id: '6',
    name: 'Tezpur, Assam',
    detail: '71 km • 55m',
    time: '05:35PM',
    badgeColor: 'bg-emerald-600 text-white',
  },
  {
    id: 'E',
    name: 'Guwahati, Assam',
    time: '06:45PM',
    type: 'end',
    badgeColor: 'bg-emerald-600 text-white',
    isEndpoint: true,
  },
];

export const distanceComparisonData = {
  yAxis: [600, 450, 300, 150, 0],
  bars: [
    { name: 'Current Route', value: 520, display: '520 km', color: 'bg-slate-400', isHighlighted: false },
    { name: 'Optimized Route', value: 468, display: '468km', color: 'bg-emerald-900', isHighlighted: true },
    { name: 'Shortest Route', value: 452, display: '452 km', color: 'bg-emerald-600/40', isHighlighted: false },
    { name: 'Alternative 1', value: 485, display: '485 km', color: 'bg-emerald-600/40', isHighlighted: false },
    { name: 'Alternative 2', value: 510, display: '510 km', color: 'bg-emerald-600/40', isHighlighted: false },
  ],
};

export const costBreakdownData = {
  total: '₹ 6,240',
  items: [
    { label: 'Fuel Cost', amount: '₹3,240(52%)', color: 'bg-emerald-800', stroke: '#065F46' },
    { label: 'Driver Cost', amount: '₹ 1,800 (29%)', color: 'bg-blue-600', stroke: '#2563EB' },
    { label: 'Toll Cost', amount: '₹ 900 (14%)', color: 'bg-orange-500', stroke: '#F97316' },
    { label: 'Miscellaneous', amount: '₹ 300 (5%)', color: 'bg-purple-600', stroke: '#9333EA' },
  ],
};

export const routeEfficiencyData = {
  percentage: 92,
  label: 'Efficient',
  savings: [
    { id: 'time', icon: 'clock', label: 'Time', value: '1h 25m' },
    { id: 'fuel', icon: 'fuel', label: 'Fuel Cost', value: '₹ 1,320' },
  ],
};

export const alternativeRoutesData = [
  {
    id: 'opt',
    option: 'Optimized Route',
    distance: '468km',
    time: '10h 45m',
    fuelCost: '₹ 6,240',
    tolls: '₹ 900',
    stops: 6,
    efficiency: '92%',
    isSelected: true,
  },
  {
    id: 'short',
    option: 'Shortest Route',
    distance: '452 km',
    time: '11h 30m',
    fuelCost: '₹ 5,920',
    tolls: '₹ 1,050',
    stops: 6,
    efficiency: '88%',
    isSelected: false,
  },
  {
    id: 'fast',
    option: 'Fastest Route',
    distance: '468 km',
    time: '10h 20m',
    fuelCost: '₹ 6,540',
    tolls: '₹ 1,200',
    stops: 6,
    efficiency: '90%',
    isSelected: false,
  },
  {
    id: 'econ',
    option: 'Most Economical',
    distance: '510 km',
    time: '11h 15m',
    fuelCost: '₹ 5,720',
    tolls: '₹ 800',
    stops: 7,
    efficiency: '85%',
    isSelected: false,
  },
];

export const routeInsightsList = [
  'Optimized route saves 1h 25m and ₹ 1,320 in fuel cost.',
  'Traffic is moderate on NH-27 and NH-37.',
  'Road conditions are good for heavy vehicles.',
  'No weather alerts on this route.',
];
