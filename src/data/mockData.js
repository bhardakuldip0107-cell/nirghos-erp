// Realistic Mock Data for Nirghos ERP Demo Dashboard & Interactive Features
import { industriesData } from './industries.js';

export const defaultCompanyProfile = {
  name: 'Apex Global Enterprises',
  industry: 'Manufacturing & Fabrication',
  slug: 'manufacturing',
  owner: 'Vikram Malhotra',
  email: 'vikram.m@apexglobal.com',
  phone: '+91 84012 30372',
  plan: 'Enterprise Multi-Branch License',
  renewalDate: 'Nov 2027',
  gstin: '27AAACA1234F1Z8',
  currency: 'USD',
  currencySymbol: '$'
};

export const defaultKpis = {
  totalRevenue: 2845600,
  revenueGrowth: '+18.4%',
  totalEmployees: 248,
  employeeGrowth: '+12 this month',
  totalCustomers: 1420,
  customerGrowth: '+8.6%',
  totalProducts: 4890,
  productGrowth: '98.2% in stock'
};

// Preset Demo Accounts for Quick 1-Click Testing across multiple industries
export const demoPresetAccounts = [
  {
    name: 'Apex Industrial Works',
    owner: 'Vikram Malhotra',
    email: 'vikram@apexindustrial.com',
    industrySlug: 'manufacturing',
    industryName: 'Manufacturing & Fabrication',
    phone: '+91 84012 30372'
  },
  {
    name: 'CareWell Multi-Specialty Hospital',
    owner: 'Dr. Ananya Roy',
    email: 'dr.ananya@carewellhospitals.com',
    industrySlug: 'hospital',
    industryName: 'Hospitals & Clinics',
    phone: '+91 98111 22334'
  },
  {
    name: 'Metro Hypermarkets Network',
    owner: 'Rajesh Bansal',
    email: 'rajesh@metrohyper.com',
    industrySlug: 'retail',
    industryName: 'Retail Shops & Supermarkets',
    phone: '+91 98222 33445'
  },
  {
    name: 'Patel Diamonds & Fine Jewellery',
    owner: 'Ramesh Patel',
    email: 'ramesh@pateldiamonds.com',
    industrySlug: 'jewellery',
    industryName: 'Jewellery & Diamond',
    phone: '+91 98250 88990'
  },
  {
    name: 'Zenith Global Express Logistics',
    owner: 'Ketan Mehta',
    email: 'ketan@zenithlogistics.com',
    industrySlug: 'logistics',
    industryName: 'Logistics & Transport',
    phone: '+91 98333 44556'
  },
  {
    name: 'Shiv Shakti Builders & Realty',
    owner: 'Harshvardhan Rao',
    email: 'harsh@shivshaktibuilders.com',
    industrySlug: 'construction',
    industryName: 'Construction & Real Estate',
    phone: '+91 98444 55667'
  },
  {
    name: 'Horizon Software Technologies',
    owner: 'Priyanka Sen',
    email: 'priyanka@horizontech.io',
    industrySlug: 'it-software',
    industryName: 'IT & Software Companies',
    phone: '+91 98555 66778'
  },
  {
    name: 'St. Xavier Global Academy',
    owner: 'Father Joseph Matthew',
    email: 'admin@stxavierglobal.edu',
    industrySlug: 'education',
    industryName: 'Schools & Colleges',
    phone: '+91 98666 77889'
  }
];

// Industry-specific KPI definitions for ALL 25 industries
export const industryKpis = {
  manufacturing: {
    stat1: { label: 'Total Output Revenue', value: '$2,845,600', change: '+18.4%', note: 'vs last quarter' },
    stat2: { label: 'Active Work Orders', value: '184 Batch Jobs', change: '94% on schedule', note: 'Shop floor capacity' },
    stat3: { label: 'Machine OEE Uptime', value: '94.8%', change: '+3.2%', note: 'Across 16 lines' },
    stat4: { label: 'Raw Stock Inventory', value: '$742,100', change: '42 low alerts', note: 'Reorder triggered' }
  },
  trading: {
    stat1: { label: 'Monthly Wholesale Turnover', value: '$4,120,800', change: '+22.5%', note: 'Bulk client orders' },
    stat2: { label: 'Active Trade Clients', value: '1,890 Accounts', change: '+45 this month', note: 'Credit locked: 12' },
    stat3: { label: 'Stock Valuation (FIFO)', value: '$1,980,500', change: '98.4% turnover', note: 'Across 4 godowns' },
    stat4: { label: 'Outstanding Receivables', value: '$340,200', change: '-14% overdue', note: 'Avg aging 24 days' }
  },
  retail: {
    stat1: { label: 'Daily Counter Revenue', value: '$84,500', change: '+14.2%', note: '5 store branches' },
    stat2: { label: 'Bills Scanned Today', value: '2,480 Bills', change: 'Avg $34.10/bill', note: 'Sub-4.2s speed' },
    stat3: { label: 'Active Loyalty Members', value: '18,450', change: '+412 this week', note: 'Redemption rate 38%' },
    stat4: { label: 'Catalog SKUs in Stock', value: '12,400 SKUs', change: '18 low shelf alerts', note: 'Auto PO drafted' }
  },
  construction: {
    stat1: { label: 'Project Work-in-Progress', value: '$12,480,000', change: '+16.5%', note: 'Across 6 live sites' },
    stat2: { label: 'Site Material Indents', value: '84 Indents', change: '98% verified', note: 'Cement & steel logs' },
    stat3: { label: 'Subcontractor RA Bills', value: '$420,000', change: 'TDS withheld', note: 'Measurement audited' },
    stat4: { label: 'Units Sold / Escrow', value: '142 Units', change: '+18 this month', note: 'RERA compliant' }
  },
  automobile: {
    stat1: { label: 'Dealership & Service Gross', value: '$3,180,000', change: '+19.2%', note: 'New cars + Service' },
    stat2: { label: 'Active Workshop Job Cards', value: '94 Bay Cards', change: 'Avg TAT 3.2 hours', note: 'Mechanic roster 100%' },
    stat3: { label: 'OEM Spare Parts Catalog', value: '14,200 Parts', change: '98.6% fill rate', note: 'Rack bin sync' },
    stat4: { label: 'Cashless Warranty Claims', value: '$184,000', change: '99.1% approved', note: 'Surveyor approved' }
  },
  textile: {
    stat1: { label: 'Cut-to-Pack Export Volume', value: '$2,340,000', change: '+24.1%', note: 'Buyer tech packs' },
    stat2: { label: 'Sewing Line Balancing', value: '88.6% OEE', change: '+5.4% efficiency', note: 'Piece-rate sync' },
    stat3: { label: 'Fabric Rolls in Godown', value: '3,840 Rolls', change: '100% shade sorted', note: 'Zero defect audit' },
    stat4: { label: 'Cutting Wastage Cut', value: '-19% Scrap', change: 'Marker plan optimized', note: 'Yield maxed' }
  },
  pharma: {
    stat1: { label: 'Batch Output Valuation', value: '$5,240,000', change: '+12.4%', note: 'GMP formulations' },
    stat2: { label: 'Active Drug Master Files', value: '48 Formulations', change: '100% eBR verified', note: '21 CFR Part 11' },
    stat3: { label: 'FEFO Quarantine Batches', value: '12 Batches', change: 'Zero expired loss', note: 'LIMS cleared' },
    stat4: { label: 'Recall Traceability Time', value: '< 8 Minutes', change: 'Mock recall passed', note: 'Batch ledger live' }
  },
  'food-beverage': {
    stat1: { label: 'Daily Packaged Throughput', value: '$420,000', change: '+17.8%', note: 'Bottling & packaging' },
    stat2: { label: 'Active Recipe Batches', value: '64 Formulations', change: '100% taste locked', note: 'Moisture sync' },
    stat3: { label: 'Cold Storage Pallets', value: '480 Pallets', change: 'IoT temp monitored', note: 'FEFO stock active' },
    stat4: { label: 'HACCP Safety Compliance', value: '99.5% Score', change: 'Zero critical audit', note: 'FSSAI compliant' }
  },
  logistics: {
    stat1: { label: 'Freight Billing Revenue', value: '$2,140,000', change: '+19.5%', note: '1,420 Ton-KM' },
    stat2: { label: 'Active Fleet Vehicles', value: '142 Heavy Trucks', change: '98 in transit', note: '44 loading/yard' },
    stat3: { label: 'On-Time Consignments', value: '98.9%', change: '+1.4% dispatch', note: 'Avg TAT 36 hours' },
    stat4: { label: 'Fuel & FASTag Outlay', value: '$310,000', change: '-8.2% consumption', note: 'Mileage 4.2 km/L' }
  },
  education: {
    stat1: { label: 'Tuition Fee Collected', value: '$1,890,000', change: '94% collected', note: 'Term 2 ongoing' },
    stat2: { label: 'Enrolled Students', value: '2,840 Students', change: '124 faculty staff', note: 'Attendance 96.8%' },
    stat3: { label: 'Fee Overdue Defaulters', value: '$64,500', change: '-32% overdue', note: 'Auto reminders sent' },
    stat4: { label: 'Bus Fleet Routes Active', value: '28 School Buses', change: '100% on schedule', note: 'Live GPS tracked' }
  },
  hospital: {
    stat1: { label: 'Total Hospital Revenue', value: '$1,480,000', change: '+9.4%', note: 'OPD + IPD + Pharmacy' },
    stat2: { label: 'Patients Treated Today', value: '382 Patients', change: 'OPD 312 | IPD 70', note: 'Wait time 14 mins' },
    stat3: { label: 'Bed Occupancy Rate', value: '88.5%', change: '176 / 200 Beds', note: 'ICU 18 / 20 Occupied' },
    stat4: { label: 'TPA Claims in Process', value: '$198,000', change: '98.5% approved', note: 'Avg settlement 48h' }
  },
  'hotel-restaurant': {
    stat1: { label: 'Gross F&B & Room Sales', value: '$385,200', change: '+27.8%', note: 'Peak uplift' },
    stat2: { label: 'Table Turns & KOTs', value: '890 Orders', change: 'Avg table turn 38m', note: 'Kitchen prep 11m' },
    stat3: { label: 'Room Occupancy Rate', value: '92.4%', change: '+14% vs prev', note: 'Direct walk-ins 34%' },
    stat4: { label: 'Food Cost Ratio', value: '28.2%', change: '-3.1% waste', note: 'Recipe sync optimal' }
  },
  'it-software': {
    stat1: { label: 'Monthly Recurring (MRR)', value: '$560,000', change: '+16.2%', note: 'ARR: $6.72M' },
    stat2: { label: 'Billable Utilization', value: '86.4%', change: '+4.5% vs target', note: '142 Devs assigned' },
    stat3: { label: 'Active Agile Sprints', value: '24 Projects', change: '92% milestone hit', note: '3 in UAT review' },
    stat4: { label: 'Unbilled Time Revenue', value: '$48,200', change: '-88% leakage', note: 'Invoices auto-queued' }
  },
  'service-maintenance': {
    stat1: { label: 'AMC Contract Revenue', value: '$840,000', change: '+32.4%', note: 'Annual service deals' },
    stat2: { label: 'Technician Daily Jobs', value: '112 Jobs Closed', change: '88.4% first-time fix', note: 'Geo-attendance sync' },
    stat3: { label: 'Van Spare Part Inventory', value: '$148,000', change: 'Zero stockout', note: 'Trunk kits audited' },
    stat4: { label: 'Average Ticket Resolution', value: '2.4 Hours', change: '-50% resolution time', note: 'Customer CSAT 4.8/5' }
  },
  agriculture: {
    stat1: { label: 'Farm Gate Procurement', value: '$1,680,000', change: '+21.5%', note: 'Mandi weighbridge' },
    stat2: { label: 'Cold Storage Capacity', value: '98% Occupied', change: '12,400 bags held', note: 'Chamber rent billed' },
    stat3: { label: 'Active Crop Cycles', value: '18 Plantations', change: '100% soil tested', note: 'Fertilizer scheduled' },
    stat4: { label: 'Direct Farmer Payouts', value: '$840,000', change: 'Instant wire transfer', note: 'Deductions automated' }
  },
  jewellery: {
    stat1: { label: 'Daily Gold Bullion Turnover', value: '$1,420,500', change: '+26.4%', note: 'Live bullion rate sync' },
    stat2: { label: 'Active Gold Schemes', value: '840 Accounts', change: '+88 this month', note: 'Monthly advance passbook' },
    stat3: { label: 'Pure Metal Vault (24K)', value: '18.420 kg Gold', change: '0.001g precision', note: 'Daily closing audit' },
    stat4: { label: 'Artisan (Karigar) Metal Ledger', value: 'Zero Loss Variance', change: 'Wastage allowance audited', note: 'Making charge logged' }
  },
  chemical: {
    stat1: { label: 'Chemical Reactor Billing', value: '$3,890,000', change: '+14.8%', note: 'Specialty polymer' },
    stat2: { label: 'Hazardous SDS Formulations', value: '72 Certified', change: '100% GHS compliant', note: 'COA auto-generated' },
    stat3: { label: 'Bulk Tank Farm Stock', value: '240,000 Liters', change: 'Temp density corrected', note: 'Weighbridge sync' },
    stat4: { label: 'EHS & Pollution Audits', value: 'Zero LTI', change: '100% PCB safe', note: 'ETP effluent logged' }
  },
  electronics: {
    stat1: { label: 'SMT Assembly Revenue', value: '$2,750,000', change: '+19.6%', note: 'PCB pick-and-place' },
    stat2: { label: 'First-Pass Yield (FPY)', value: '98.4%', change: '+3.1% pass rate', note: 'Test station logged' },
    stat3: { label: 'Component Reel Barcodes', value: '42,000 Reels', change: '100% feeder verified', note: 'Zero SMT mismatch' },
    stat4: { label: 'Warranty RMA Repairs', value: '2.1 Days TAT', change: '-60% turnaround', note: 'Serial trace instant' }
  },
  printing: {
    stat1: { label: 'Press Room Job Invoicing', value: '$720,000', change: '+15.2%', note: 'Offset & flexo runs' },
    stat2: { label: 'Paper Reel Sheet Yield', value: '94.2%', change: '-21% trim scrap', note: 'GSM calibrated' },
    stat3: { label: 'Tooling & Die Plates', value: '1,450 Tool Sets', change: 'Impression life tracked', note: 'Tool rack locator' },
    stat4: { label: 'Burst Factor Quality', value: '100% Passed', change: 'Box compression test', note: 'Corrugated cartons' }
  },
  furniture: {
    stat1: { label: 'Turnkey Interior Projects', value: '$1,340,000', change: '+28.4%', note: 'Bespoke fit-outs' },
    stat2: { label: 'Board Nesting Optimization', value: '91.8% Board Yield', change: '+24% ply savings', note: 'CNC cut-list auto' },
    stat3: { label: 'Hardware Fittings BOM', value: '3,800 Sets', change: 'Zero site shortage', note: 'Flat-pack labeled' },
    stat4: { label: 'Carpentry Site Handover', value: '96% on time', change: 'Snag-list mobile signed', note: 'Client satisfaction' }
  },
  ecommerce: {
    stat1: { label: 'Marketplace Net GMV', value: '$1,920,000', change: '+34.2%', note: 'Amazon, Shopify, D2C' },
    stat2: { label: 'Daily Pick-Pack-Ship', value: '4,850 Orders', change: '99.95% pick accuracy', note: 'Zone barcode scanner' },
    stat3: { label: 'Courier SLA Fulfillment', value: '98.6% On-Time', change: 'Lowest-cost rate shopping', note: 'AWB auto-generated' },
    stat4: { label: 'RTO Customer Return Desk', value: '-65% Process Time', change: 'QC restock automated', note: 'Refund linked' }
  },
  'export-import': {
    stat1: { label: 'International Trade Gross', value: '$6,480,000', change: '+28.9%', note: 'Multi-currency forex' },
    stat2: { label: 'Letters of Credit (LC)', value: '18 Active LCs', change: 'Zero discrepancy audit', note: 'Bank cleared' },
    stat3: { label: 'Container Ocean Freight', value: '64 TEU Shipped', change: 'BL documentation instant', note: 'Port demurrage zero' },
    stat4: { label: 'Duty Drawback Realized', value: '$240,000', change: '100% RoDTEP claimed', note: 'Customs ICEGATE sync' }
  },
  'oil-gas': {
    stat1: { label: 'Terminal Hydrocarbon Volume', value: '$8,920,000', change: '+11.2%', note: 'Mass balance ledger' },
    stat2: { label: 'Electronic PTW Permits', value: '42 Hot/Cold Permits', change: '100% gas tested', note: 'Zero incidents' },
    stat3: { label: 'Pipeline Telemetry Uptime', value: '99.7% Integrity', change: 'Pressure steady', note: 'Pigging logs current' },
    stat4: { label: 'Gantry Road Tanker Load', value: '84 Tankers / Day', change: 'Turnaround 24 mins', note: 'Dip seal verified' }
  },
  'security-facility': {
    stat1: { label: 'Site Contract Man-Hour Billing', value: '$960,000', change: '+22.4%', note: 'PF/ESI wage compliance' },
    stat2: { label: 'Guards on Active Duty', value: '480 Personnel', change: '100% geofenced clock-in', note: 'Zero buddy punching' },
    stat3: { label: 'QR Patrol Tour Compliance', value: '99.4% Scans', change: 'Wand route checked', note: 'Missed checkpoints: 0' },
    stat4: { label: 'Janitorial Consumables', value: '$64,000', change: '-18% chemical waste', note: 'Dispenser monitored' }
  },
  'professional-services': {
    stat1: { label: 'Partner Billable Realization', value: '$1,120,000', change: '+33.1%', note: 'Fee notes dispatched' },
    stat2: { label: 'Active Matters & Client Files', value: '340 Matters', change: 'Zero conflict of interest', note: 'Milestone tracking' },
    stat3: { label: 'Trust & Escrow Retainer', value: '$480,000', change: 'Separate client ledger', note: 'Audit compliant' },
    stat4: { label: 'Statutory Filing Deadlines', value: '100% on schedule', change: 'Court & tax calendar', note: 'Document portal signed' }
  }
};

// Industry-specific inventory catalog samples for Tab 4
export const industryInventorySamples = {
  jewellery: [
    { sku: 'JWL-01', name: '22K Hallmarked Gold Filigree Necklace (38.42g)', category: 'Gold Ornaments', stock: 12, reorder: 4, unitPrice: '$3,180.00', status: 'Optimal' },
    { sku: 'JWL-02', name: 'VVS1 1.25 Carat Diamond Solitaire Ring (18K White Gold)', category: 'Diamonds', stock: 8, reorder: 3, unitPrice: '$5,400.00', status: 'Optimal' },
    { sku: 'JWL-03', name: '999 Fine Silver Minted Coin 100g', category: 'Bullion', stock: 45, reorder: 50, unitPrice: '$94.00', status: 'Low Stock' },
    { sku: 'JWL-04', name: 'Artisan Pure 24K Gold Bar Casting (100g)', category: 'Raw Metal', stock: 14, reorder: 5, unitPrice: '$8,250.00', status: 'Optimal' },
    { sku: 'JWL-05', name: 'Platinum Wedding Band Pair (950 Purity)', category: 'Platinum', stock: 6, reorder: 8, unitPrice: '$1,450.00', status: 'Low Stock' }
  ],
  hospital: [
    { sku: 'MED-01', name: 'Injectable Ceftriaxone 1g USP Vials', category: 'ICU Drugs', stock: 850, reorder: 150, unitPrice: '$14.50', status: 'Optimal' },
    { sku: 'MED-02', name: 'Disposable Sterile Syringe 5ml (Box of 100)', category: 'Consumables', stock: 42, reorder: 50, unitPrice: '$18.00', status: 'Low Stock' },
    { sku: 'MED-03', name: 'IV Infusion Normal Saline 0.9% 500ml', category: 'Fluids', stock: 1200, reorder: 200, unitPrice: '$4.20', status: 'Optimal' },
    { sku: 'MED-04', name: 'Surgical Latex Gloves Powder-Free (Size 7.5)', category: 'OT Supplies', stock: 180, reorder: 60, unitPrice: '$28.00', status: 'Optimal' },
    { sku: 'MED-05', name: 'Diagnostic Blood Glucose Test Strips (Pack of 50)', category: 'Pathology', stock: 24, reorder: 30, unitPrice: '$32.00', status: 'Low Stock' }
  ],
  retail: [
    { sku: 'RTL-01', name: 'Organic Almond Milk 1L Tetra Pak', category: 'Beverages', stock: 340, reorder: 80, unitPrice: '$4.80', status: 'Optimal' },
    { sku: 'RTL-02', name: 'Whole Wheat Breakfast Flakes 500g', category: 'Cereals', stock: 45, reorder: 60, unitPrice: '$5.50', status: 'Low Stock' },
    { sku: 'RTL-03', name: 'Premium Extra Virgin Olive Oil 750ml', category: 'Gourmet', stock: 120, reorder: 30, unitPrice: '$16.90', status: 'Optimal' },
    { sku: 'RTL-04', name: 'Herbal Toothpaste Cavity Protection 150g', category: 'Personal Care', stock: 480, reorder: 100, unitPrice: '$3.40', status: 'Optimal' },
    { sku: 'RTL-05', name: 'Eco-Friendly Bamboo Paper Towels (2-Pack)', category: 'Household', stock: 35, reorder: 40, unitPrice: '$6.20', status: 'Low Stock' }
  ],
  construction: [
    { sku: 'CON-01', name: 'TMT Steel Rebars Fe-550D (12mm x 12m)', category: 'Steel & Metals', stock: 48, reorder: 15, unitPrice: '$640.00', status: 'Optimal' },
    { sku: 'CON-02', name: 'UltraTech Portland Cement Grade 53 (50kg Bag)', category: 'Cement', stock: 85, reorder: 100, unitPrice: '$5.80', status: 'Low Stock' },
    { sku: 'CON-03', name: 'Vitrified Double-Charge Floor Tiles 600x600', category: 'Finishes', stock: 420, reorder: 80, unitPrice: '$18.50', status: 'Optimal' },
    { sku: 'CON-04', name: 'High-Density UPVC Plumbing Conduits 4-inch', category: 'MEP Systems', stock: 240, reorder: 50, unitPrice: '$24.00', status: 'Optimal' },
    { sku: 'CON-05', name: 'Ready-Mix Concrete Grade M-25 (Cubic Meter)', category: 'Concrete', stock: 12, reorder: 20, unitPrice: '$92.00', status: 'Low Stock' }
  ],
  logistics: [
    { sku: 'LOG-01', name: 'Heavy Duty Cargo Lashing Straps (5 Ton x 10m)', category: 'Truck Hardware', stock: 180, reorder: 40, unitPrice: '$38.00', status: 'Optimal' },
    { sku: 'LOG-02', name: 'Electronic Barcode Container Bolt Seals', category: 'Security Seals', stock: 85, reorder: 100, unitPrice: '$4.50', status: 'Low Stock' },
    { sku: 'LOG-03', name: 'Thermal Shipping Label Rolls 4x6 (Pack of 10)', category: 'Stationery', stock: 450, reorder: 80, unitPrice: '$19.00', status: 'Optimal' },
    { sku: 'LOG-04', name: 'Fleet Synthetic Engine Oil 15W-40 (210L Drum)', category: 'Fleet Maintenance', stock: 14, reorder: 4, unitPrice: '$680.00', status: 'Optimal' },
    { sku: 'LOG-05', name: 'Heavy Commercial Truck Radial Tire (295/80R22.5)', category: 'Tires', stock: 8, reorder: 12, unitPrice: '$340.00', status: 'Low Stock' }
  ],
  'it-software': [
    { sku: 'ITS-01', name: 'Annual Cloud Enterprise ERP License (Seats 50)', category: 'Software Subscriptions', stock: 999, reorder: 10, unitPrice: '$12,000.00', status: 'Optimal' },
    { sku: 'ITS-02', name: 'Developer Workstation Laptop i7 32GB RAM', category: 'Hardware Assets', stock: 12, reorder: 5, unitPrice: '$1,850.00', status: 'Optimal' },
    { sku: 'ITS-03', name: 'Ultra-Wide 4K IPS Developer Monitor 34-inch', category: 'Peripherals', stock: 8, reorder: 10, unitPrice: '$420.00', status: 'Low Stock' },
    { sku: 'ITS-04', name: 'Dedicated Cloud Database Instance (Monthly)', category: 'Infrastructure', stock: 45, reorder: 5, unitPrice: '$380.00', status: 'Optimal' },
    { sku: 'ITS-05', name: 'Hardware YubiKey 5C NFC Security Key', category: 'Security Devices', stock: 18, reorder: 25, unitPrice: '$55.00', status: 'Low Stock' }
  ]
};

// Generic fallback inventory generator for any of the 25 industries
export const getInventoryForIndustry = (slug) => {
  const safeSlug = (typeof slug === 'string' && slug.trim()) ? slug.trim() : 'manufacturing';
  if (industryInventorySamples[safeSlug]) {
    return industryInventorySamples[safeSlug];
  }
  const prefix = safeSlug.slice(0, 3).toUpperCase();
  // Fallback realistic inventory based on industry name
  return [
    { sku: `SKU-${prefix}-101`, name: `Enterprise Core Assembly Unit (${safeSlug})`, category: 'Direct Materials', stock: 340, reorder: 80, unitPrice: '$145.00', status: 'Optimal' },
    { sku: `SKU-${prefix}-102`, name: `Grade A Process Compound`, category: 'Consumables', stock: 42, reorder: 50, unitPrice: '$78.00', status: 'Low Stock' },
    { sku: `SKU-${prefix}-103`, name: `Finished Commercial Package`, category: 'Finished Goods', stock: 850, reorder: 120, unitPrice: '$210.00', status: 'Optimal' },
    { sku: `SKU-${prefix}-104`, name: `Sub-Assembly Component Lot #8`, category: 'Parts', stock: 190, reorder: 40, unitPrice: '$34.50', status: 'Optimal' },
    { sku: `SKU-${prefix}-105`, name: `Heavy Duty Replacement Spares`, category: 'Maintenance', stock: 18, reorder: 25, unitPrice: '$412.00', status: 'Low Stock' }
  ];
};

// Industry-specific workforce staff roles for Tab 5
export const industryStaffSamples = {
  jewellery: [
    { id: 'JWL-EMP-01', name: 'Sanjay Soni', dept: 'Artisan Floor', role: 'Head Karigar & Goldsmith', status: 'Present', checkIn: '08:52 AM', salary: 8500 },
    { id: 'JWL-EMP-02', name: 'Pooja Choksi', dept: 'Gemology Lab', role: 'Certified Diamond Grader (GIA)', status: 'Present', checkIn: '09:00 AM', salary: 9200 },
    { id: 'JWL-EMP-03', name: 'Manish Zaveri', dept: 'Showroom Counter', role: 'Luxury Client Executive', status: 'Present', checkIn: '09:12 AM', salary: 6800 },
    { id: 'JWL-EMP-04', name: 'Kavita Shah', dept: 'Accounts & Schemes', role: 'Gold Passbook Scheme Controller', status: 'Late', checkIn: '09:38 AM', salary: 7400 },
    { id: 'JWL-EMP-05', name: 'Bharat Varma', dept: 'Hallmarking & Bullion', role: 'Bureau Hallmarking Officer', status: 'On Leave', checkIn: '-', salary: 8100 }
  ],
  hospital: [
    { id: 'HSP-EMP-01', name: 'Dr. Vikram Sen', dept: 'Emergency & Trauma', role: 'Chief Medical Officer', status: 'Present', checkIn: '07:45 AM', salary: 16500 },
    { id: 'HSP-EMP-02', name: 'Sister Mary Thomas', dept: 'ICU & Critical Care', role: 'Head Nursing Superintendent', status: 'Present', checkIn: '07:55 AM', salary: 7200 },
    { id: 'HSP-EMP-03', name: 'Rahul Nambiar', dept: 'Hospital Pharmacy', role: 'Chief Pharmacist (D.Pharm)', status: 'Present', checkIn: '08:30 AM', salary: 6400 },
    { id: 'HSP-EMP-04', name: 'Dr. Sunita Rao', dept: 'OPD Consultation', role: 'Senior Consultant Physician', status: 'Late', checkIn: '09:15 AM', salary: 14200 },
    { id: 'HSP-EMP-05', name: 'Girish Joshi', dept: 'TPA Insurance Desk', role: 'Cashless Billing Executive', status: 'On Leave', checkIn: '-', salary: 5800 }
  ],
  construction: [
    { id: 'CON-EMP-01', name: 'Rohan Deshmukh', dept: 'Project Site Nirghos', role: 'Chief Project Engineer', status: 'Present', checkIn: '08:30 AM', salary: 11500 },
    { id: 'CON-EMP-02', name: 'Anil Chauhan', dept: 'Quantity Surveying', role: 'Measurement Book (MB) Auditor', status: 'Present', checkIn: '08:45 AM', salary: 8400 },
    { id: 'CON-EMP-03', name: 'Sameer Sheikh', dept: 'Heavy Equipment', role: 'Tower Crane Operations Lead', status: 'Present', checkIn: '08:15 AM', salary: 7200 },
    { id: 'CON-EMP-04', name: 'Megha Trivedi', dept: 'RERA Client CRM', role: 'Property Allotment Manager', status: 'Late', checkIn: '09:40 AM', salary: 7900 },
    { id: 'CON-EMP-05', name: 'Pradeep Yadav', dept: 'EHS Safety', role: 'Safety Compliance Marshal', status: 'On Leave', checkIn: '-', salary: 6500 }
  ],
  'it-software': [
    { id: 'ITS-EMP-01', name: 'Aarav Mehta', dept: 'Cloud Architecture & DevOps', role: 'Staff Site Reliability Engineer (SRE)', status: 'Present', checkIn: '08:52 AM', salary: 12500 },
    { id: 'ITS-EMP-02', name: 'Neha Singhania', dept: 'Full-Stack Engineering', role: 'Principal React & Node Architect', status: 'Present', checkIn: '09:05 AM', salary: 11800 },
    { id: 'ITS-EMP-03', name: 'Rohan Varma', dept: 'Cybersecurity & InfoSec', role: 'Lead SOC Analyst & Pen-Tester', status: 'Present', checkIn: '08:45 AM', salary: 9800 },
    { id: 'ITS-EMP-04', name: 'Tanvi Deshmukh', dept: 'AI / Machine Learning Labs', role: 'Senior LLM & ML Ops Engineer', status: 'Late', checkIn: '09:42 AM', salary: 10500 },
    { id: 'ITS-EMP-05', name: 'Vikramaditya Bose', dept: 'Product & Delivery Management', role: 'VP of Engineering & Scrum Master', status: 'On Leave', checkIn: '-', salary: 14200 },
    { id: 'ITS-EMP-06', name: 'Ananya Iyer', dept: 'Quality Assurance & SDET', role: 'Lead Automation Test Engineer', status: 'Present', checkIn: '08:38 AM', salary: 8400 },
    { id: 'ITS-EMP-07', name: 'Kabir Chawla', dept: 'Mobile Application Labs', role: 'Senior Flutter & iOS Developer', status: 'Present', checkIn: '08:59 AM', salary: 9200 }
  ],
  manufacturing: [
    { id: 'MFG-EMP-01', name: 'Rajesh Sharma', dept: 'Shop Floor Assembly', role: 'Production Line Superintendent', status: 'Present', checkIn: '07:45 AM', salary: 9500 },
    { id: 'MFG-EMP-02', name: 'Kavita Patel', dept: 'Quality Control (QC)', role: 'Senior CMM Metrology Inspector', status: 'Present', checkIn: '07:55 AM', salary: 7800 },
    { id: 'MFG-EMP-03', name: 'Manoj Tiwari', dept: 'Plant Maintenance', role: 'Chief CNC Millwright Technician', status: 'Present', checkIn: '08:10 AM', salary: 8200 },
    { id: 'MFG-EMP-04', name: 'Pooja Nair', dept: 'Inventory Logistics', role: 'Raw Material Store Keeper', status: 'Late', checkIn: '09:20 AM', salary: 6100 },
    { id: 'MFG-EMP-05', name: 'Dinesh Varma', dept: 'EHS & Industrial Safety', role: 'Certified Safety Officer', status: 'On Leave', checkIn: '-', salary: 6900 }
  ]
};

export const getStaffForIndustry = (slug) => {
  const safeSlug = (typeof slug === 'string' && slug.trim()) ? slug.trim() : 'manufacturing';
  if (industryStaffSamples[safeSlug]) {
    return industryStaffSamples[safeSlug];
  }
  const prefix = safeSlug.slice(0, 3).toUpperCase();
  return [
    { id: `EMP-${prefix}-01`, name: 'Arun Kulkarni', dept: 'Operations & Engineering', role: 'Department Operations Lead', status: 'Present', checkIn: '08:58 AM', salary: 9200 },
    { id: `EMP-${prefix}-02`, name: 'Meera Nambiar', dept: 'Quality Assurance (QA)', role: 'Senior Regulatory Inspector', status: 'Present', checkIn: '09:04 AM', salary: 8100 },
    { id: `EMP-${prefix}-03`, name: 'David Reynolds', dept: 'Inventory Logistics', role: 'Supply Chain Controller', status: 'Present', checkIn: '08:50 AM', salary: 7500 },
    { id: `EMP-${prefix}-04`, name: 'Sanjay Deshmukh', dept: 'Finance & Accounts', role: 'Chief Financial Accountant', status: 'Late', checkIn: '09:35 AM', salary: 8900 },
    { id: `EMP-${prefix}-05`, name: 'Pooja Verma', dept: 'Procurement & Contracts', role: 'Senior Purchase Specialist', status: 'On Leave', checkIn: '-', salary: 6800 }
  ];
};

export const monthlySalesData = [
  { month: 'Jan', revenue: 195000, expenses: 142000, profit: 53000 },
  { month: 'Feb', revenue: 210000, expenses: 148000, profit: 62000 },
  { month: 'Mar', revenue: 245000, expenses: 162000, profit: 83000 },
  { month: 'Apr', revenue: 230000, expenses: 155000, profit: 75000 },
  { month: 'May', revenue: 265000, expenses: 170000, profit: 95000 },
  { month: 'Jun', revenue: 285000, expenses: 180000, profit: 105000 },
  { month: 'Jul', revenue: 275000, expenses: 175000, profit: 100000 },
  { month: 'Aug', revenue: 295000, expenses: 182000, profit: 113000 },
  { month: 'Sep', revenue: 315000, expenses: 192000, profit: 123000 },
  { month: 'Oct', revenue: 340000, expenses: 205000, profit: 135000 },
  { month: 'Nov', revenue: 365000, expenses: 215000, profit: 150000 },
  { month: 'Dec', revenue: 395000, expenses: 228000, profit: 167000 }
];

export const initialTransactions = [
  {
    id: 'TXN-9842',
    entity: 'Precision Component Works',
    type: 'Sales Invoice',
    amount: 48500.00,
    date: '2026-11-15',
    status: 'Paid',
    method: 'Direct Bank Wire',
    category: 'Commercial'
  },
  {
    id: 'TXN-9841',
    entity: 'Zenith Logistics Hub',
    type: 'Dispatch Challan',
    amount: 14200.50,
    date: '2026-11-15',
    status: 'Processing',
    method: 'Credit Term (30 Days)',
    category: 'Logistics'
  },
  {
    id: 'TXN-9840',
    entity: 'Bharat Alloys & Steel Corp',
    type: 'Purchase Order',
    amount: 112800.00,
    date: '2026-11-14',
    status: 'Paid',
    method: 'Letter of Credit',
    category: 'Procurement'
  },
  {
    id: 'TXN-9839',
    entity: 'Medix Diagnostics & Healthcare',
    type: 'Service Retainer',
    amount: 8750.00,
    date: '2026-11-14',
    status: 'Pending',
    method: 'Automated ACH',
    category: 'Subscription'
  },
  {
    id: 'TXN-9838',
    entity: 'Metro Supermarkets Network',
    type: 'Wholesale Invoice',
    amount: 67240.00,
    date: '2026-11-13',
    status: 'Paid',
    method: 'Online Payment Gateway',
    category: 'Retail Supply'
  },
  {
    id: 'TXN-9837',
    entity: 'Orbital Tech Solutions',
    type: 'Software AMC Retainer',
    amount: 24000.00,
    date: '2026-11-12',
    status: 'Overdue',
    method: 'Bank Transfer',
    category: 'IT Services'
  },
  {
    id: 'TXN-9836',
    entity: 'Sovereign Realty Developers',
    type: 'Civil Material Bill',
    amount: 93400.00,
    date: '2026-11-12',
    status: 'Paid',
    method: 'RTGS Electronic Wire',
    category: 'Infrastructure'
  }
];

export const initialNotifications = [
  {
    id: 1,
    title: 'Low Stock Reorder Triggered',
    desc: 'Critical component inventory is below threshold. Automatic PO drafted for approval.',
    time: '12 mins ago',
    type: 'warning',
    read: false
  },
  {
    id: 2,
    title: 'Purchase Order Approved',
    desc: 'PO #PO-7841 for $42,500 has been countersigned by Finance Director.',
    time: '45 mins ago',
    type: 'success',
    read: false
  },
  {
    id: 3,
    title: 'Tax Compliance Ready',
    desc: 'GST / VAT Monthly Filing Summary for October 2026 is compiled and ready for e-filing.',
    time: '2 hours ago',
    type: 'info',
    read: false
  },
  {
    id: 4,
    title: 'Biometric Attendance Synchronized',
    desc: 'Workforce shift muster processed. 100% logs verified.',
    time: '4 hours ago',
    type: 'neutral',
    read: true
  }
];

export const quickActionItems = [
  { id: 'new-invoice', label: 'Create Invoice', icon: 'FilePlus', color: 'bg-brand-600' },
  { id: 'add-product', label: 'Add Product/SKU', icon: 'PackagePlus', color: 'bg-emerald-600' },
  { id: 'new-order', label: 'New Work Order', icon: 'ClipboardPlus', color: 'bg-indigo-600' },
  { id: 'record-payment', label: 'Record Payment', icon: 'CreditCard', color: 'bg-amber-600' },
  { id: 'export-report', label: 'Export P&L Report', icon: 'Download', color: 'bg-slate-700' }
];
