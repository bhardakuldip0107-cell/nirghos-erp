import { 
  Gauge, 
  Layers, 
  ShieldCheck, 
  Boxes, 
  BarChart3, 
  Cpu, 
  HeartPulse, 
  Stethoscope, 
  Pill, 
  Truck, 
  Store, 
  GraduationCap, 
  HardHat, 
  Hotel, 
  Car, 
  Scissors, 
  Wheat, 
  Diamond, 
  FlaskConical, 
  Printer, 
  Armchair, 
  Zap, 
  Briefcase, 
  Scale, 
  ShoppingBag, 
  Ship, 
  Building2, 
  Users, 
  CheckCircle2, 
  Calculator, 
  TrendingUp, 
  Clock, 
  Sparkles, 
  Activity, 
  FileCheck,
  FileSpreadsheet,
  Warehouse,
  Receipt,
  FileText,
  CreditCard,
  Bed,
  Calendar,
  AlertTriangle,
  QrCode,
  ClipboardList,
  Wrench,
  Fuel,
  Compass,
  PackageCheck,
  Flame,
  Key,
  Shield,
  Code2
} from 'lucide-react';

export const industryLandingConfigs = {
  // 1. Manufacturing & Fabrication
  manufacturing: {
    complianceBadge: 'IATF 16949 & ISO 9001 Compliant',
    headline: 'Precision Production Control from Raw Material to Finished Goods',
    subheadline: 'Automate multi-level BOMs, shop floor CNC machine telemetry, digital job routing, scrap reduction, and statutory general ledgers into one seamless cloud operating system.',
    consultationBtnText: 'Request 1-on-1 Plant Consultation',
    demoBtnText: 'Test-Drive Live Plant Workspace',
    socialProofText: '(500+ Plants Worldwide)',
    mockupUrl: 'https://app.nirghos.com/fabrication-plant/live-telemetry',
    mockupStatus: 'Shop Floor: 100% Online',
    kpiTiles: [
      { label: 'Plant OEE Uptime', value: '94.8%', note: '+4.2% vs Monthly Target', color: 'text-emerald-400' },
      { label: 'Active Machines', value: '18 / 20', note: '2 in Routine PM Maintenance', color: 'text-brand-300' },
      { label: 'Scrap Margin Cut', value: '-28.4%', note: 'Saving $34,800 this month', color: 'text-cyan-300' },
      { label: 'On-Time Dispatches', value: '99.2%', note: 'Zero late penalty slippage', color: 'text-amber-300' }
    ],
    stations: [
      { code: 'STATION #01 • CNC MILLING', title: '5-Axis DMG Mori #02', subtitle: 'Job: #JC-8821 • Flange Core', status: 'In Cycle', statusColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
      { code: 'STATION #02 • FIBER LASER', title: '6kW Trumpf TruLaser', subtitle: 'Job: #JC-8824 • Sheet 6mm', status: 'Running', statusColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
      { code: 'STATION #03 • CMM QUALITY', title: 'Zeiss Contura Inspection', subtitle: 'Sample: ±0.003mm Verified', status: 'COA OK', statusColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' }
    ],
    trustTitle: 'Empowering Modern Precision Fabricators & Industrial Plants Globally',
    trustClients: ['Apex Forgings Ltd', 'Titan Heavy Machineries', 'Precision Dies & Tools', 'AeroMach Industries', 'Omega CNC Automations', 'Kalyani Precision Tech'],
    tourTabs: [
      {
        id: 'shopfloor',
        label: 'Shop Floor & Machine OEE',
        icon: Gauge,
        badge: 'Real-Time Telemetry',
        title: 'Digital Job Cards & Sub-Second CNC Floor Execution',
        desc: 'Eliminate paper work orders. Dispatch production schedules directly to digital touch kiosks at CNC, lathe, and stamping work centers with real-time spindle load and downtime tracking.',
        bullets: [
          'Live IoT/MQTT telemetry capturing spindle uptime, feed rates & cycles',
          'Digital job card punch-in with barcode/RFID operator verification',
          'Instant bottleneck warnings with automated MTTR/MTBF escalation',
          'Automatic piece-rate and shift production ledger reconciliation'
        ],
        metric: '+34.2%',
        metricLabel: 'Average Plant Throughput Uplift',
        previewHeading: 'Live CNC Work Center Monitor #04',
        previewSub: '5-Axis Machining Center • Plant Station #A-12',
        stats: [
          { label: 'Spindle Load', value: '82%', color: 'text-emerald-400' },
          { label: 'Cycle Time', value: '4m 18s', color: 'text-brand-300' },
          { label: 'Defect Drift', value: '±0.002mm', color: 'text-cyan-300' },
          { label: 'Operator Run', value: 'Shift 01', color: 'text-slate-200' }
        ]
      },
      {
        id: 'bom',
        label: 'Multi-Level BOM Engineering',
        icon: Layers,
        badge: 'Version-Controlled',
        title: 'Precision Assembly Trees & Dynamic Scrap Allowances',
        desc: 'Configure complex assembly hierarchies, sub-assemblies, raw material cuts, and alternate parts with engineering change order (ECO) revisions and instant unit cost recalculation.',
        bullets: [
          'Infinite-tier recursive BOM structures with scrap margin matrices',
          'Side-by-side engineering version comparison with instant rollback',
          'Automatic raw sheet nesting and cut-piece yield optimization',
          'Dynamic component cost rollup synced to purchase rate contracts'
        ],
        metric: '-28.0%',
        metricLabel: 'Scrap & Raw Stock Waste Reduction',
        previewHeading: 'Multi-Tier Assembly Specification',
        previewSub: 'Precision Hydraulic Flange Assembly [REV-B]',
        stats: [
          { label: 'Child Nodes', value: '14 Parts', color: 'text-brand-300' },
          { label: 'Scrap Margin', value: '2.4%', color: 'text-emerald-400' },
          { label: 'Yield Rate', value: '97.6%', color: 'text-cyan-300' },
          { label: 'BOM Version', value: 'v4.1 ECO', color: 'text-amber-300' }
        ]
      },
      {
        id: 'quality',
        label: 'Zero-Defect Quality Gates',
        icon: ShieldCheck,
        badge: 'IATF 16949 / ISO 9001',
        title: 'Mandatory Inspection Gates & Instant COA Issuance',
        desc: 'Stop defective batches before they enter subsequent operations. Deploy parameter-based quality inspection sheets for inward raw material, intermediate routing stages, and pre-dispatch audits.',
        bullets: [
          'Statistical Process Control (SPC) with automated control-chart alerts',
          'CMM dimensional check integration with micron-level tolerance bands',
          'Mandatory gate-hold preventing uninspected batches from dispatching',
          'One-click automated Certificate of Analysis (COA) generation'
        ],
        metric: '99.8%',
        metricLabel: 'First-Pass Quality Acceptance Rate',
        previewHeading: 'Stage-Gate Quality Audit Ledger',
        previewSub: 'Pre-Dispatch Heat Batch #HT-9844-B',
        stats: [
          { label: 'Tolerances', value: 'Passed', color: 'text-emerald-400' },
          { label: 'Hardness Test', value: '62 HRC', color: 'text-brand-300' },
          { label: 'COA Status', value: 'Signed', color: 'text-cyan-300' },
          { label: 'ISO Check', value: '100% OK', color: 'text-emerald-400' }
        ]
      },
      {
        id: 'traceability',
        label: 'Heat & Lot Traceability',
        icon: Boxes,
        badge: 'Full Inward-to-Outward Audit',
        title: 'Forward & Backward Genealogy Across Every Heat Number',
        desc: 'Achieve total regulatory transparency. Trace every finished assembly back to the exact steel heat number, supplier test certificate, operator work shift, and CNC machine calibration log.',
        bullets: [
          'Complete genealogy mapping from mill test certs to dispatched crates',
          'Barcode and 2D DataMatrix scanning on raw material bins and pallets',
          'Sub-second recall simulations across entire supplier historical chains',
          'Direct compliance ready for automotive (IATF) and aerospace (AS9100)'
        ],
        metric: '100%',
        metricLabel: 'Audit-Proof Batch Traceability',
        previewHeading: 'Material Batch Trace Genealogy',
        previewSub: 'High-Tensile Shaft Component Lot #LN-4019',
        stats: [
          { label: 'Heat Number', value: 'HT-4821', color: 'text-brand-300' },
          { label: 'Mill Cert', value: 'Attached', color: 'text-emerald-400' },
          { label: 'Raw Stock', value: 'SAE 4140', color: 'text-cyan-300' },
          { label: 'Trace Level', value: 'Full Depth', color: 'text-amber-300' }
        ]
      }
    ],
    calculator: {
      type: 'manufacturing',
      badge: 'Interactive Production ROI Estimator',
      title: "Calculate Your Plant's Projected Annual Savings",
      desc: "Adjust your plant's operational parameters to project the scrap reduction and machine OEE impact of implementing Nirghos.",
      slider1: { label: 'Monthly Production Output', min: 5000, max: 100000, step: 1000, defaultVal: 24000, unit: 'Units/mo' },
      slider2: { label: 'Active CNC & Work Centers', min: 4, max: 60, step: 2, defaultVal: 16, unit: 'Machines' },
      slider3: { label: 'Current Scrap / Defect Rate', min: 1, max: 15, step: 0.5, defaultVal: 6.5, unit: '%' }
    },
    testimonial: {
      quote: "Before Nirghos, tracking raw alloy scrap and multi-level assembly revisions across 3 shop floors was a daily fire drill. Within 45 days of deployment, our defect rate dropped from 6.8% to 2.1%, saving our plant over $380,000 in raw material leakage in year one.",
      author: 'Rajesh Mehta',
      role: 'VP of Plant Operations • Apex Precision Forgings & Fabrication Ltd'
    },
    faqs: [
      { q: 'How fast can Nirghos ERP be deployed in our manufacturing plant?', a: 'A standard Nirghos deployment for single-plant precision fabricators takes 14 to 21 business days. Our pre-configured master industry templates, BOM import wizards, and CNC machine templates enable rapid data migration from legacy spreadsheets or Tally/SAP with zero factory shutdown.' },
      { q: 'Does Nirghos connect directly to our CNC machines, PLCs, and SCADA systems?', a: 'Yes. Nirghos features built-in IoT edge connectors supporting standard industrial protocols including OPC-UA, Modbus TCP, MTConnect, MQTT, and RS-485 serial controllers. Spindle hours, cycles, and feed alarms stream directly into our live OEE dashboard.' },
      { q: 'How does Nirghos handle multi-level BOM revisions and Engineering Change Orders (ECO)?', a: 'Our BOM architecture supports infinite recursive sub-assembly nesting with full version branching (e.g. v1.0, v1.1). When an ECO is approved, existing work orders can either freeze, consume existing stock, or transition seamlessly with automated scrap recalculation.' },
      { q: 'Can Nirghos run in our private cloud or on local factory edge servers?', a: 'Yes. Nirghos offers multi-tenant secure cloud deployment (AWS/Azure/GCP with 99.99% SLA), dedicated hybrid edge nodes for shop floor low-latency offline execution, or air-gapped on-premise installations for defense fabricators.' }
    ],
    ctaHeadline: 'Ready to Modernize Your Plant Operations?',
    ctaSub: 'Join 500+ precision manufacturers who cut scrap, eliminated manual paper job cards, and automated double-entry job costing with Nirghos.'
  },

  // 2. Trading & Wholesale
  trading: {
    complianceBadge: 'Multi-Godown & GST E-Way Bill Ready',
    headline: 'High-Velocity Wholesale Distribution with Real-Time Margins & Warehouse Sync',
    subheadline: 'Orchestrate multi-branch inventories, dynamic tier pricing, strict customer credit locks, high-volume automated invoicing, and transporter logistics in one unified platform.',
    consultationBtnText: 'Book Wholesale ERP Consultation',
    demoBtnText: 'Explore Live Trading Workspace',
    socialProofText: '(850+ Distributors & Importers)',
    mockupUrl: 'https://app.nirghos.com/trading/warehouse-sync',
    mockupStatus: 'Godown Network: 100% Synchronized',
    kpiTiles: [
      { label: 'Order Processing Speed', value: '3.5x Faster', note: 'Avg dispatch in 42 mins', color: 'text-emerald-400' },
      { label: 'Holding Cost Cut', value: '-22.5%', note: 'Dead stock alerts active', color: 'text-brand-300' },
      { label: 'Receivables Overdue', value: '< 0.3%', note: 'Auto credit lock enforced', color: 'text-cyan-300' },
      { label: 'Fulfillment Accuracy', value: '99.85%', note: 'Barcode scan verification', color: 'text-amber-300' }
    ],
    stations: [
      { code: 'GODOWN #01 • CENTRAL HUB', title: 'Main Transit Warehouse A-3', subtitle: 'Outward: 450 Cartons • Route 08', status: 'Dispatching', statusColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
      { code: 'BILLING DESK • HIGH SPEED', title: 'Batch E-Invoice Generator', subtitle: 'Processed 1,240 Invoices Today', status: 'Auto-IRN OK', statusColor: 'bg-brand-500/20 text-brand-300 border-brand-500/40' },
      { code: 'CREDIT RADAR • RISK AUDIT', title: 'Customer Ledger Gate', subtitle: 'Dealer #DL-481 Credit Limit Checked', status: 'Approved', statusColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' }
    ],
    trustTitle: 'Powering Leading Wholesale Distributors & Bulk Trading Houses',
    trustClients: ['Metro Wholesalers Ltd', 'National Agro Traders', 'Continental Impex Hub', 'Vanguard Distribution Co', 'Apex Metal Traders', 'Crown FMCG Logistics'],
    tourTabs: [
      {
        id: 'godown',
        label: 'Multi-Godown Inventory Sync',
        icon: Warehouse,
        badge: 'Zero Stock Outages',
        title: 'Real-Time Inter-Branch Stock Transfers & Lot Valuation',
        desc: 'Eliminate out-of-stock situations across state godowns. Track item placement down to rack and bin levels, view transit challans live, and balance stock automatically based on local demand.',
        bullets: [
          'Instant multi-warehouse visibility across 50+ godowns simultaneously',
          'Automated inter-branch stock transfer delivery challans with transit tracking',
          'Lot-wise FIFO and weighted average valuation with batch expiry alerts',
          'Barcode scanning on incoming cartons and dispatch pallets'
        ],
        metric: '-22.5%',
        metricLabel: 'Working Capital Dead Stock Reduction',
        previewHeading: 'Central Godown Live Inventory Matrix',
        previewSub: 'Warehouse Hub North • 24,000 SKU Capacity',
        stats: [
          { label: 'Active SKUs', value: '18,450', color: 'text-brand-300' },
          { label: 'Bin Fill Rate', value: '91.4%', color: 'text-emerald-400' },
          { label: 'In-Transit', value: '4 Shipments', color: 'text-cyan-300' },
          { label: 'Stock Drift', value: '0.00%', color: 'text-slate-200' }
        ]
      },
      {
        id: 'pricing',
        label: 'Dynamic Tier Price Lists',
        icon: Receipt,
        badge: 'Automated Margin Guard',
        title: 'Customer-Specific Contract Rates & Bulk Quantity Slabs',
        desc: 'Configure flexible pricing policies by dealer tier, geographic zone, order volume, or payment terms. Nirghos guarantees your sales reps never quote below protected gross margin thresholds.',
        bullets: [
          'Multi-tier wholesale discount rules with slab-based price breaks',
          'Customer-contract pricing locking approved rates for specified date ranges',
          'Real-time landed cost and gross margin calculation before PO confirmation',
          'Special promotional scheme management with buy-X-get-Y automation'
        ],
        metric: '+14.8%',
        metricLabel: 'Protected Average Gross Margin Gain',
        previewHeading: 'Tier Price Engine & Margin Guard',
        previewSub: 'Contract #CTR-9201 • Tier A Wholesale Partner',
        stats: [
          { label: 'Dealer Tier', value: 'Platinum', color: 'text-amber-300' },
          { label: 'Base Margin', value: '18.5%', color: 'text-emerald-400' },
          { label: 'Volume Slab', value: '500+ Box', color: 'text-brand-300' },
          { label: 'Margin Lock', value: 'Protected', color: 'text-cyan-300' }
        ]
      },
      {
        id: 'credit',
        label: 'Strict Credit Limit Controls',
        icon: ShieldCheck,
        badge: 'Zero Bad Debts',
        title: 'Automated Credit Days, Overdue Locks & WhatsApp Nudges',
        desc: 'Safeguard your liquidity. Set hard credit limits, overdue grace periods, and auto-lock billing whenever a dealer breaches their payment covenants. Automated payment reminders speed up collections.',
        bullets: [
          'Automatic billing block when outstanding dues cross predefined credit ceiling',
          'Automated payment reminder messages via WhatsApp, SMS, and Email',
          'Aging analysis ledger (0-30, 31-60, 61-90, 90+ days) with interest calculation',
          'Bank reconciliation with automated virtual account payment matching'
        ],
        metric: '99.7%',
        metricLabel: 'Timely Invoice Collection Rate',
        previewHeading: 'Customer Credit Risk Monitor',
        previewSub: 'Dealer Account #DL-4812 • Ledger Audit',
        stats: [
          { label: 'Credit Limit', value: '$100,000', color: 'text-slate-200' },
          { label: 'Current Utilized', value: '$68,400', color: 'text-brand-300' },
          { label: 'Overdue Dues', value: '$0.00', color: 'text-emerald-400' },
          { label: 'Credit Status', value: 'Good Standing', color: 'text-emerald-400' }
        ]
      }
    ],
    calculator: {
      type: 'trading',
      badge: 'Interactive Wholesale Working Capital Estimator',
      title: 'Calculate Your Cash Flow & Dead Stock Recovery',
      desc: 'See how much working capital you can unlock by cutting inventory holding days and preventing overdue customer receivables.',
      slider1: { label: 'Monthly Wholesale Sales Turnover', min: 50000, max: 2000000, step: 25000, defaultVal: 350000, unit: '$/mo' },
      slider2: { label: 'Number of Active Godowns & Warehouses', min: 1, max: 20, step: 1, defaultVal: 3, unit: 'Warehouses' },
      slider3: { label: 'Average Customer Credit Days', min: 15, max: 120, step: 5, defaultVal: 45, unit: 'Days' }
    },
    testimonial: {
      quote: "Managing 4 regional godowns and 2,000+ retail dealers on spreadsheets was leaking margins every single week. Nirghos automated our credit locks and multi-godown stock transfers—our overdue receivables dropped by 72% within three months.",
      author: 'Sunil Agarwal',
      role: 'Managing Director • Agarwal Bulk Trading & Distribution'
    },
    faqs: [
      { q: 'Can Nirghos sync stock between multiple godowns and retail branches?', a: 'Yes. Nirghos provides real-time multi-location inventory synchronization. Stock transfers between godowns use digital transfer challans with in-transit status tracking, preventing inventory discrepancies.' },
      { q: 'How does Nirghos enforce customer credit limits during billing?', a: 'When creating an order or invoice, Nirghos automatically checks the customer credit limit, unpaid overdue invoices, and credit days. If the threshold is exceeded, the system automatically holds the invoice until authorized by an administrator.' },
      { q: 'Does Nirghos support E-Invoicing and E-Way bill generation directly?', a: 'Yes. Nirghos integrates directly with government tax portals to generate IRN, QR code, and E-Way bills in under one second without leaving the billing screen.' },
      { q: 'Can we set different price lists for different wholesale dealers?', a: 'Absolutely. You can create unlimited tier price lists (e.g. Platinum, Gold, Silver), quantity-based slab discounts, and customer-specific contract rates with start and end dates.' }
    ],
    ctaHeadline: 'Ready to Scale Your Wholesale Distribution?',
    ctaSub: 'Join 850+ trading houses who accelerated order fulfillment, eliminated dead stock, and safeguarded cash flow with Nirghos.'
  },

  // 3. Retail Shops & Supermarkets
  retail: {
    complianceBadge: 'PCI-DSS & Offline-First POS Engine',
    headline: 'Lightning-Fast Point of Sale, Omnichannel Inventory & Customer Loyalty',
    subheadline: 'Process checkout queues in seconds with touch POS, barcode thermal printing, automated warehouse replenishment, and AI-driven promotion schemes.',
    consultationBtnText: 'Request Retail POS Consultation',
    demoBtnText: 'Test-Drive Live POS Counter',
    socialProofText: '(1,200+ Retail Outlets & Supermarkets)',
    mockupUrl: 'https://app.nirghos.com/retail/pos-terminal',
    mockupStatus: 'All 6 Checkout Lanes: Synchronized',
    kpiTiles: [
      { label: 'Checkout Speed', value: '1.8 Sec/Item', note: 'Touch & barcode scan', color: 'text-emerald-400' },
      { label: 'Inventory Shrinkage', value: '< 0.15%', note: 'Real-time stock audits', color: 'text-brand-300' },
      { label: 'Loyalty Repeat Rate', value: '42.8%', note: 'Automated points & coupons', color: 'text-cyan-300' },
      { label: 'Daily Billing Run', value: '3,800+ Bills', note: 'Zero counter lag', color: 'text-amber-300' }
    ],
    stations: [
      { code: 'LANE #01 • TOUCH POS', title: 'Main Express Counter #01', subtitle: 'Bill: #RT-4029 • 12 Items Scanned', status: 'Paying (UPI/Card)', statusColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
      { code: 'LANE #02 • SCAN & GO', title: 'Self-Checkout Kiosk #02', subtitle: 'Loyalty Member #LM-882 Verified', status: 'Discount Auto-Applied', statusColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
      { code: 'WAREHOUSE • REPLENISH', title: 'Backroom Shelf Trigger', subtitle: 'Fast Moving Dairy Restock Alert', status: 'Restocked', statusColor: 'bg-brand-500/20 text-brand-300 border-brand-500/40' }
    ],
    trustTitle: 'Powering Modern Supermarkets, Apparel Stores & Retail Chains',
    trustClients: ['SuperMart Hypermarkets', 'Trendz Lifestyle Apparel', 'FreshDaily Grocers', 'Prime Electronics Retail', 'City Mart Chain', 'Urban Basket Retail'],
    tourTabs: [
      {
        id: 'pos',
        label: 'Touch POS & Offline Mode',
        icon: Store,
        badge: 'Zero Downtime',
        title: 'Sub-Second Barcode Scanning with 100% Offline Resilience',
        desc: 'Never stop billing even if your internet goes down. Nirghos POS operates fully offline in local browser cache and syncs seamlessly back to the cloud as soon as connectivity resumes.',
        bullets: [
          'High-speed touch screen interface optimized for keyboard-less checkout',
          'Instant barcode and 2D QR scanner integration with weighing scale support',
          'Automatic offline database sync preventing any transaction loss during outages',
          'Integrated digital payments: UPI QR, credit cards, gift vouchers, and cash drawer'
        ],
        metric: '1.8s',
        metricLabel: 'Average Item Scan-to-Bill Velocity',
        previewHeading: 'POS Terminal Cashier Station #01',
        previewSub: 'Express Checkout Counter • Supermarket Floor',
        stats: [
          { label: 'Items Scanned', value: '18 Units', color: 'text-brand-300' },
          { label: 'Subtotal', value: '$84.50', color: 'text-emerald-400' },
          { label: 'Loyalty Points', value: '+84 Pts', color: 'text-cyan-300' },
          { label: 'Print Status', value: 'Thermal Ready', color: 'text-slate-200' }
        ]
      },
      {
        id: 'schemes',
        label: 'Promotions & Schemes Engine',
        icon: Sparkles,
        badge: 'High Conversion',
        title: 'Buy-1-Get-1, Combo Deals & Happy Hour Discount Rules',
        desc: 'Drive footfall and increase basket size. Run automated promotional campaigns, category-wise percentage discounts, seasonal clearance sales, and customer loyalty tier rewards without cashier errors.',
        bullets: [
          'Configurable promotional rules: BOGO, tiered quantity discounts, bundle packs',
          'Time-based flash sale campaigns with automated activation and expiry',
          'Customer loyalty points wallet with instant SMS OTP balance redemption',
          'Cashier discount authorization controls to prevent unauthorized price cuts'
        ],
        metric: '+28.4%',
        metricLabel: 'Average Retail Basket Size Uplift',
        previewHeading: 'Live Promotion & Scheme Rule Engine',
        previewSub: 'Active Campaign: "Weekend Festive Saver"',
        stats: [
          { label: 'Combo Deals', value: 'Active', color: 'text-emerald-400' },
          { label: 'BOGO Slabs', value: '3 Rules', color: 'text-brand-300' },
          { label: 'Points Ratio', value: '1 Pt / $1', color: 'text-cyan-300' },
          { label: 'Coupon Engine', value: 'Auto-Validated', color: 'text-amber-300' }
        ]
      }
    ],
    calculator: {
      type: 'retail',
      badge: 'Interactive Retail Profitability Estimator',
      title: 'Calculate Your Retail Chain Profit & Shrinkage Prevention',
      desc: 'See how much revenue you can recover through faster checkout throughput, automated restocking, and zero inventory shrinkage.',
      slider1: { label: 'Monthly Retail Store Billing Volume', min: 10000, max: 500000, step: 10000, defaultVal: 85000, unit: '$/mo' },
      slider2: { label: 'Number of Active POS Billing Counters', min: 1, max: 20, step: 1, defaultVal: 4, unit: 'Counters' },
      slider3: { label: 'Estimated Inventory Shrinkage & Loss', min: 0.5, max: 5, step: 0.25, defaultVal: 2.25, unit: '%' }
    },
    testimonial: {
      quote: "We operate 8 supermarket outlets. Before Nirghos, billing counters suffered long queues and manual discounts caused serious margin leaks. Nirghos POS cut customer checkout time in half and completely eliminated inventory shrinkage.",
      author: 'Ketan Parikh',
      role: 'Operations Director • SuperMart Hypermarket Retail Ltd'
    },
    faqs: [
      { q: 'Will the POS continue working if our store internet disconnects?', a: 'Yes! Nirghos POS features a bulletproof offline-first architecture. Cashiers can continue scanning, billing, and printing receipts uninterrupted. All transactions automatically sync back to your cloud server once the connection is restored.' },
      { q: 'Does Nirghos support barcode thermal printers and weighing scales?', a: 'Yes. Nirghos supports all ESC/POS thermal receipt printers (2-inch, 3-inch, USB, Bluetooth, LAN), electronic barcode scanners, weighing scales, and electronic cash drawers.' },
      { q: 'Can we manage promotions like Buy 1 Get 1 Free or Combo Deals?', a: 'Yes. Our built-in promotions engine lets you configure Buy-X-Get-Y deals, category discounts, bill-value slabs, and time-bound happy hour promotions that apply automatically at the checkout counter.' },
      { q: 'How does Nirghos handle customer loyalty points?', a: 'Customers earn loyalty points on every purchase based on your rules. They can redeem points using an SMS/WhatsApp OTP verification directly on the POS screen.' }
    ],
    ctaHeadline: 'Ready to Transform Your Retail Counters?',
    ctaSub: 'Join 1,200+ retail outlets who eliminated checkout bottlenecks and boosted repeat customer loyalty with Nirghos.'
  },

  // 4. Hospitals & Clinics
  hospital: {
    complianceBadge: 'NABH, NABL & HIPAA Compliant',
    headline: 'Next-Generation Hospital & Patient Care Operating System',
    subheadline: 'Unify electronic medical records (EMR/EHR), doctor OPD scheduling, inpatient bed management, operation theatre (OT) telemetry, and cashless insurance claims into one audit-proof platform.',
    consultationBtnText: 'Book Hospital Architecture Consultation',
    demoBtnText: 'Explore Live Hospital EHR',
    socialProofText: '(350+ Hospitals & Multi-Specialty Clinics)',
    mockupUrl: 'https://app.nirghos.com/hospital/live-telemetry',
    mockupStatus: 'Clinical Operations: 100% Online',
    kpiTiles: [
      { label: 'Bed Occupancy Rate', value: '92.4%', note: 'Real-time ward telemetry', color: 'text-emerald-400' },
      { label: 'OPD Queue Time', value: '14 Mins', note: 'Token kiosk automation', color: 'text-brand-300' },
      { label: 'Insurance Claim TPA', value: '99.1%', note: 'Zero claim rejection audit', color: 'text-cyan-300' },
      { label: 'Active Inpatients', value: '148 / 160', note: 'ICU & General Wards', color: 'text-amber-300' }
    ],
    stations: [
      { code: 'TRIAGE & OPD • KIOSK #02', title: 'Consultation Room 04', subtitle: 'Dr. Sharma (Cardiology) • Token #42', status: 'Consulting', statusColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
      { code: 'INPATIENT & ICU • WARD C', title: 'Bed #ICU-08 Telemetry', subtitle: 'Patient: Vital Signs Auto-Logged', status: 'Monitored', statusColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
      { code: 'PHARMACY • DISPENSARY', title: 'Central In-House Meds', subtitle: 'Rx: #RX-99201 Verified by Pharmacist', status: 'Dispensed', statusColor: 'bg-brand-500/20 text-brand-300 border-brand-500/40' }
    ],
    trustTitle: 'Trusted by Premier Healthcare Institutions & Multi-Specialty Hospitals',
    trustClients: ['Apex Heart & Multi-Specialty', 'LifeCare Global Hospital', 'Metro City Healthcare', 'Sterling Diagnostic Centers', 'Shreeji Child Care Hospital', 'Apollo Care Clinics'],
    tourTabs: [
      {
        id: 'emr',
        label: 'Electronic Medical Records (EMR)',
        icon: Stethoscope,
        badge: 'HIPAA & HL7/FHIR Ready',
        title: 'Unified Patient Health Records & Digital Prescriptions',
        desc: 'Give doctors instant access to historical vitals, lab diagnostics, allergies, and surgical notes. Issue digital prescriptions with integrated drug-interaction warnings in seconds.',
        bullets: [
          'Complete longitudinal patient medical record from birth to present',
          'Instant diagnostic lab report integration (PACS/DICOM imaging viewable)',
          'Digital e-prescription with drug-to-drug and drug-to-allergy safety alerts',
          'Role-based doctor/nurse confidentiality safeguarding patient health data'
        ],
        metric: '100%',
        metricLabel: 'Paperless Clinical Documentation',
        previewHeading: 'Patient Clinical Chart & Vitals Ledger',
        previewSub: 'Patient ID #PT-84920 • Ward B, Bed 14',
        stats: [
          { label: 'Blood Pressure', value: '120/80', color: 'text-emerald-400' },
          { label: 'Heart Rate', value: '72 bpm', color: 'text-brand-300' },
          { label: 'SpO2 Level', value: '98%', color: 'text-cyan-300' },
          { label: 'Allergy Alerts', value: 'Penicillin', color: 'text-rose-400' }
        ]
      },
      {
        id: 'ipd',
        label: 'Inpatient (IPD) & Bed Census',
        icon: Bed,
        badge: 'Dynamic Ward Management',
        title: 'Live Bed Status, Doctor Round Notes & Discharge Clearance',
        desc: 'Oversee ICU, private rooms, and general wards on an interactive visual bed census map. Automate doctor round entries, medication administration charts (MAR), and multi-department discharge clearance.',
        bullets: [
          'Visual color-coded bed map showing occupied, vacant, cleaning, and reserved beds',
          'Electronic Medication Administration Record (e-MAR) for nursing staff',
          'Automated daily bed rent, nursing charges, and oxygen consumption billing',
          '1-Click automated discharge summary and multi-counter clearance checklist'
        ],
        metric: '45 Mins',
        metricLabel: 'Discharge Settlement Cycle Reduced',
        previewHeading: 'Live Hospital Bed Census Grid',
        previewSub: 'Wing B • Intensive Care & Semi-Private Units',
        stats: [
          { label: 'Total Beds', value: '160 Beds', color: 'text-slate-200' },
          { label: 'Occupancy', value: '92.4%', color: 'text-emerald-400' },
          { label: 'Scheduled Discharges', value: '14 Today', color: 'text-brand-300' },
          { label: 'Under Sanitization', value: '4 Beds', color: 'text-cyan-300' }
        ]
      }
    ],
    calculator: {
      type: 'hospital',
      badge: 'Interactive Healthcare Operational ROI Estimator',
      title: "Calculate Your Hospital's Projected Annual Operational Gain",
      desc: "Adjust your hospital's bed count and daily patient volume to project revenue leakage prevention and claim processing acceleration.",
      slider1: { label: 'Total Inpatient Hospital Beds', min: 20, max: 500, step: 10, defaultVal: 100, unit: 'Beds' },
      slider2: { label: 'Daily Outpatient (OPD) Footfall', min: 50, max: 1500, step: 25, defaultVal: 250, unit: 'Patients/day' },
      slider3: { label: 'Average Insurance & TPA Billing %', min: 10, max: 90, step: 5, defaultVal: 45, unit: '%' }
    },
    testimonial: {
      quote: "Managing patient admissions, doctor consults, and 12 different insurance TPAs was causing 3-hour discharge bottlenecks. Nirghos reduced our patient discharge settlement time from 4 hours to just 45 minutes, with zero lost pharmacy billings.",
      author: 'Dr. Vikramaditya Joshi',
      role: 'Medical Director • Apex Super Specialty Hospital Ltd'
    },
    faqs: [
      { q: 'Is Nirghos compliant with NABH, NABL, and HIPAA guidelines?', a: 'Yes. Nirghos is architected strictly according to NABH and HIPAA accreditation benchmarks, including granular role-based access, comprehensive clinical audit logs, encrypted patient records, and consent workflows.' },
      { q: 'Can doctors write prescriptions on tablets or smartphones?', a: 'Yes. Our responsive EMR interface works seamlessly on iPads, Android tablets, and laptops. Doctors can select diagnosis codes, pick medication dosages from pre-configured templates, and sign off in under 30 seconds.' },
      { q: 'How does Nirghos handle diagnostic laboratory and radiology integration?', a: 'Nirghos connects directly with lab analyzers (via HL7 and ASTM protocols) and PACS imaging servers. Once the technician validates the sample, reports and DICOM scans publish directly to the patient digital file.' },
      { q: 'How does the in-house pharmacy sync with inpatient treatment charts?', a: 'Whenever a doctor writes or edits a patient medication order on the ward chart, an automatic dispense slip routes to the in-house pharmacy, updating the inventory and adding the medicine charges to the running IPD bill.' }
    ],
    ctaHeadline: 'Ready to Elevate Your Hospital Care Operations?',
    ctaSub: 'Join 350+ healthcare leaders who streamlined clinical workflows, accelerated insurance settlements, and delivered compassionate patient care with Nirghos.'
  },

  // 5. Schools & Colleges
  education: {
    complianceBadge: 'NAAC, AICTE & NEP 2020 Aligned',
    headline: 'Unified Campus Management, Fee Recovery & Student Lifecycle Platform',
    subheadline: 'Automate online admissions, term fee installment collections, biometric student attendance, exam grading, timetable scheduling, and parent communication in one intuitive portal.',
    consultationBtnText: 'Request Campus ERP Consultation',
    demoBtnText: 'Explore Student & Faculty Portal',
    socialProofText: '(400+ Schools, Colleges & Universities)',
    mockupUrl: 'https://app.nirghos.com/education/campus-portal',
    mockupStatus: 'Campus Systems: 100% Online',
    kpiTiles: [
      { label: 'Fee Collection Rate', value: '98.6%', note: 'Online portal & auto-reminders', color: 'text-emerald-400' },
      { label: 'Enrolled Students', value: '3,450', note: 'K-12 & Higher Ed Campuses', color: 'text-brand-300' },
      { label: 'Daily Attendance', value: '96.2%', note: 'Biometric & RFID Bus Sync', color: 'text-cyan-300' },
      { label: 'Parent Engagement', value: '94.8%', note: 'Mobile App Notifications', color: 'text-amber-300' }
    ],
    stations: [
      { code: 'FEE DESK • ADMISSIONS', title: 'Term 02 Installment Window', subtitle: 'Processed $142,000 Today (UPI/NetBanking)', status: 'Reconciled', statusColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
      { code: 'CAMPUS GATE • RFID/BUS', title: 'Route #12 School Bus Telemetry', subtitle: '38 Students Boarded & Parents Alerted', status: 'In Transit', statusColor: 'bg-brand-500/20 text-brand-300 border-brand-500/40' },
      { code: 'EXAM CELL • EVALUATION', title: 'Semester Grade Card Engine', subtitle: 'Automated GPA & Grade Sheet Generation', status: 'Published', statusColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' }
    ],
    trustTitle: 'Powering Premier Educational Institutions, Schools & Universities',
    trustClients: ['Stanford Global Academy', 'Delhi Public Campus Group', 'St. Xavier Institute of Tech', 'Greenwood International School', 'Modern College of Engineering', 'Sunrise Education Trust'],
    tourTabs: [
      {
        id: 'fees',
        label: 'Automated Fee Collections',
        icon: Receipt,
        badge: 'Zero Bad Debts',
        title: 'Custom Fee Structures, Installment Plans & Gateway Sync',
        desc: 'Eliminate fee collection delays. Configure class-wise fee heads, transport fees, scholarships, and flexible installment schedules. Parents pay online with automatic receipt generation and zero manual accounting entries.',
        bullets: [
          'Configurable fee structures by grade, quota, concession, and bus distance',
          'Integrated online payment gateway with instant fee receipt and WhatsApp SMS receipt',
          'Automated reminder triggers to parents before installment due dates',
          'Real-time defaulter aging ledger with automatic late fine calculation'
        ],
        metric: '98.6%',
        metricLabel: 'On-Time Term Fee Recovery Rate',
        previewHeading: 'Fee Collection Ledger & Gateway Hub',
        previewSub: 'Academic Year 2026-27 • Term 02 Collection',
        stats: [
          { label: 'Total Billed', value: '$1.4M', color: 'text-slate-200' },
          { label: 'Collected', value: '98.6%', color: 'text-emerald-400' },
          { label: 'Gateway Mode', value: '91% Online', color: 'text-brand-300' },
          { label: 'Defaulters Cut', value: '-84%', color: 'text-cyan-300' }
        ]
      },
      {
        id: 'admissions',
        label: 'Digital Admissions & Student Records',
        icon: GraduationCap,
        badge: 'Paperless Enrollment',
        title: 'Online Application Forms, Merit Lists & Lifetime Student Vault',
        desc: 'Streamline the entire admission cycle. Collect application fees online, generate automated merit lists, verify uploaded student documents, and generate student IDs and roll numbers in one click.',
        bullets: [
          'Customizable responsive online application forms for prospective students',
          'Automated category-wise and merit-based shortlist generation',
          'Centralized student document vault: certificates, photos, transfer certificates',
          'Complete student profile tracking academic marks, attendance, and conduct'
        ],
        metric: '5x',
        metricLabel: 'Admissions Processing Velocity',
        previewHeading: 'Online Admissions Intake Queue',
        previewSub: 'Fall Enrollment Cycle • 850 Applications',
        stats: [
          { label: 'Applications', value: '850', color: 'text-brand-300' },
          { label: 'Verified', value: '812', color: 'text-emerald-400' },
          { label: 'Fees Paid', value: '100% OK', color: 'text-cyan-300' },
          { label: 'Merit List', value: 'Published', color: 'text-amber-300' }
        ]
      }
    ],
    calculator: {
      type: 'education',
      badge: 'Interactive Campus Financial ROI Estimator',
      title: "Calculate Your Institution's Recovered Fees & Admin Savings",
      desc: 'See how automated online fee collections and streamlined admissions recover bad debts and save administrative hours.',
      slider1: { label: 'Total Enrolled Student Strength', min: 200, max: 8000, step: 100, defaultVal: 1800, unit: 'Students' },
      slider2: { label: 'Average Annual Fee Per Student', min: 500, max: 15000, step: 250, defaultVal: 2400, unit: '$/student' },
      slider3: { label: 'Current Uncollected / Overdue Fee %', min: 2, max: 20, step: 1, defaultVal: 8, unit: '%' }
    },
    testimonial: {
      quote: "Managing fee reconciliation across 2,400 students and tracking fee defaulters on paper ledgers was chaotic. Nirghos automated our fee collection via online gateways and WhatsApp reminders—our fee recovery reached 99.2% before midterm exams.",
      author: 'Father Anthony D’Souza',
      role: 'Director of Administration • St. Xavier Educational Trust'
    },
    faqs: [
      { q: 'Can parents pay fees online using UPI, Credit Cards, or Net Banking?', a: 'Yes! Nirghos integrates with top payment gateways (Razorpay, Stripe, PayU) offering instant fee payment with zero manual intervention. Receipts generate and download automatically.' },
      { q: 'Does Nirghos provide a dedicated Mobile App for parents and students?', a: 'Yes. Parents receive a branded mobile app on iOS and Android where they can view live bus locations, attendance status, exam report cards, homework assignments, and teacher messages.' },
      { q: 'Can we generate custom report cards and grading systems for CBSE/ICSE/State boards?', a: 'Yes. Nirghos supports customizable grading formulas, GPA/CGPA calculations, remark templates, and one-click batch printing of multi-term report cards aligned with board standards.' },
      { q: 'How does Nirghos handle teacher substitution when staff are on leave?', a: 'Our timetable engine features automated teacher substitution. When a faculty member applies for leave, the system instantly identifies available teachers with matching subject competence and reassigns classes.' }
    ],
    ctaHeadline: 'Ready to Transform Your Campus Administration?',
    ctaSub: 'Join 400+ schools and colleges who automated fee recovery, student lifecycle management, and parent communication with Nirghos.'
  },

  // 6. Construction & Real Estate
  construction: {
    complianceBadge: 'RERA, FIDIC & BoQ Standardized',
    headline: 'Real-Time Project Costing, Sub-Contractor BoQ & Site Execution Platform',
    subheadline: 'Eliminate project cost overruns. Track multi-site material inwards, digital measurement books (MB), subcontractor work certification, and client progress billing in one unified cloud system.',
    consultationBtnText: 'Book Site Architecture Consultation',
    demoBtnText: 'Explore Live Project Workspace',
    socialProofText: '(280+ Infrastructure & Real Estate Developers)',
    mockupUrl: 'https://app.nirghos.com/construction/site-telemetry',
    mockupStatus: 'Active Sites: 8 Projects Live',
    kpiTiles: [
      { label: 'Budget Variance', value: '+1.4%', note: 'Under strict BoQ control', color: 'text-emerald-400' },
      { label: 'Material Leakage', value: '< 0.8%', note: 'Gate weight bridge sync', color: 'text-brand-300' },
      { label: 'Subcontractor RA Bills', value: '48 Hrs', note: 'Fast digital certification', color: 'text-cyan-300' },
      { label: 'On-Time Milestones', value: '94.2%', note: 'Gantt schedule tracking', color: 'text-amber-300' }
    ],
    stations: [
      { code: 'SITE #01 • TOWER A', title: 'Cast-in-Situ Concrete Pour', subtitle: 'RMC Batch #48 • 120m³ Poured & Tested', status: 'In Progress', statusColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
      { code: 'SITE GATE • WEIGHBRIDGE', title: 'TMT Steel Inward Inspection', subtitle: 'Consignment: 42 MT High-Yield Rebar', status: 'Weighed & OK', statusColor: 'bg-brand-500/20 text-brand-300 border-brand-500/40' },
      { code: 'BILLING DESK • MEASUREMENT', title: 'Subcontractor RA Bill #04', subtitle: 'Civil Masonry Certified: 1,400 sq.m', status: 'Approved', statusColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' }
    ],
    trustTitle: 'Powering Premier Infrastructure Contractors & Real Estate Developers',
    trustClients: ['Apex InfraProjects Ltd', 'Titan Builders & Developers', 'Urban Horizon Constructions', 'Skyline Real Estate Ventures', 'Paramount Civil Engineers', 'Imperial Heights Realty'],
    tourTabs: [
      {
        id: 'boq',
        label: 'Bill of Quantities (BoQ) Costing',
        icon: Layers,
        badge: 'Zero Cost Overruns',
        title: 'Item-Wise Rate Analysis & Budget Allocation',
        desc: 'Build hierarchical BoQs directly from tender estimates. Link standard item rates, material consumption norms, equipment rentals, and labor wages to prevent cost overruns before excavation begins.',
        bullets: [
          'Import complex tender BoQ spreadsheets with auto-mapped rate analysis',
          'Dynamic variance tracking: Estimated vs Budgeted vs Actual site cost',
          'Granular work breakdown structure (WBS) with milestone dependency mapping',
          'Automatic change-order and extra-item claims management with audit trails'
        ],
        metric: '-18.4%',
        metricLabel: 'Project Cost Overrun Reduction',
        previewHeading: 'BoQ Master Schedule & Variance Ledger',
        previewSub: 'Commercial Tower Project #CT-400 • Phase 01',
        stats: [
          { label: 'Estimated Budget', value: '$8.4M', color: 'text-slate-200' },
          { label: 'Actual Spent', value: '$7.8M', color: 'text-emerald-400' },
          { label: 'BoQ Margin', value: '+14.2%', color: 'text-brand-300' },
          { label: 'Variance Risk', value: 'Low', color: 'text-cyan-300' }
        ]
      },
      {
        id: 'site',
        label: 'Site Inventory & Material Gate',
        icon: HardHat,
        badge: 'Zero Theft & Leakage',
        title: 'Weighbridge Integration, Indenting & Cement/Steel Reconciliation',
        desc: 'Stop construction material leakage. Control site material requisitions, verify truck weight against vendor delivery challans via digital weighbridge integration, and reconcile cement/steel consumption daily.',
        bullets: [
          'Automated weighbridge hardware integration capturing gross and tare weights',
          'Theoretical vs actual cement and steel consumption variance reports',
          'Site indent approval workflow preventing unbudgeted spot purchases',
          'Multi-site inter-project plant and machinery transfer challans'
        ],
        metric: '< 1.0%',
        metricLabel: 'Raw Material Wastage & Loss Threshold',
        previewHeading: 'Site Gate Inward & Weighbridge Telemetry',
        previewSub: 'Tower Site Gate #01 • Material Inward Log',
        stats: [
          { label: 'TMT Steel Inward', value: '42 MT', color: 'text-brand-300' },
          { label: 'Variance vs PO', value: '+0.1%', color: 'text-emerald-400' },
          { label: 'Lab Cube Test', value: 'M35 Passed', color: 'text-cyan-300' },
          { label: 'GRN Status', value: 'Posted', color: 'text-slate-200' }
        ]
      }
    ],
    calculator: {
      type: 'construction',
      badge: 'Interactive Project Cost Variance Estimator',
      title: 'Calculate Your Construction Cost Savings & Margin Uplift',
      desc: 'See how much capital you can protect by preventing material leakage, uncertified contractor bills, and project schedule delays.',
      slider1: { label: 'Ongoing Active Project Portfolio Value', min: 500000, max: 20000000, step: 250000, defaultVal: 3500000, unit: '$' },
      slider2: { label: 'Number of Active Construction Sites', min: 1, max: 15, step: 1, defaultVal: 3, unit: 'Sites' },
      slider3: { label: 'Estimated Material Wastage & Leakage %', min: 1, max: 10, step: 0.5, defaultVal: 4.5, unit: '%' }
    },
    testimonial: {
      quote: "On a $12M multi-tower residential project, tracking cement, steel, and 15 subcontractors across 3 sites was resulting in severe cost overruns. Nirghos digital measurement books and weighbridge integration saved us over $420,000 in material leakage alone.",
      author: 'Harish Chokshi',
      role: 'Chief Project Officer • Apex InfraProjects & Realty Ltd'
    },
    faqs: [
      { q: 'Can site engineers record measurements on their mobile phones at the job site?', a: 'Yes! Nirghos includes a responsive mobile site interface where engineers can record Measurement Book (MB) dimensions and attach site photos with GPS coordinates directly from the field.' },
      { q: 'How does Nirghos prevent site material theft and excess cement/steel consumption?', a: 'By comparing theoretical consumption norms (derived from the approved structural design and BoQ) against actual inward and issued stock, Nirghos generates instant red-flag alerts whenever consumption deviates beyond acceptable tolerances.' },
      { q: 'Does Nirghos support RERA milestone compliance and client installment demand letters?', a: 'Yes. Nirghos tracks architect completion certificates, links RERA bank accounts, and automatically issues customer installment payment demand letters as construction milestones are completed.' },
      { q: 'Can we manage equipment rentals, diesel consumption, and plant maintenance?', a: 'Yes. Nirghos logs daily machine logbooks, operator hours, diesel fueling, and equipment breakdown work orders, providing an exact cost per hour for cranes, excavators, and generators.' }
    ],
    ctaHeadline: 'Ready to Put Your Construction Sites Under Strict Control?',
    ctaSub: 'Join 280+ developers and infrastructure contractors who eliminated project budget overruns with Nirghos.'
  },

  // 7. Automobile & Auto Parts
  automobile: {
    complianceBadge: 'OEM Standards & Motor Insurance Ready',
    headline: 'Unified Auto Dealership, Service Bay & Spare Parts Operating System',
    subheadline: 'Integrate vehicle showroom sales, digital service job cards, OEM spare parts inventory, mechanic bay productivity, and insurance claim approvals into one high-efficiency dealership hub.',
    consultationBtnText: 'Schedule Auto Dealership Consultation',
    demoBtnText: 'Explore Live Service Bay Workspace',
    socialProofText: '(320+ Automobile Dealerships & Service Centers)',
    mockupUrl: 'https://app.nirghos.com/automobile/service-bay',
    mockupStatus: '12 Workshop Service Bays: Active',
    kpiTiles: [
      { label: 'Bay Productivity', value: '92.4%', note: 'Turnaround in 3.2 hrs', color: 'text-emerald-400' },
      { label: 'OEM Parts Availability', value: '99.1%', note: 'Bin-level barcoding', color: 'text-brand-300' },
      { label: 'Service Customer CSAT', value: '4.85 / 5', note: 'WhatsApp status updates', color: 'text-cyan-300' },
      { label: 'Insurance Approvals', value: '24 Hrs', note: 'Surveyor digital estimates', color: 'text-amber-300' }
    ],
    stations: [
      { code: 'SERVICE BAY #04 • LIFT', title: 'Periodic Maintenance 40k km', subtitle: 'Technician: Suresh • Vehicle: Innova Crysta', status: 'In Service', statusColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
      { code: 'PARTS COUNTER • OEM', title: 'Genuine Brake Pad & Filter', subtitle: 'Job Card #JC-9821 Parts Issued', status: 'Dispatched', statusColor: 'bg-brand-500/20 text-brand-300 border-brand-500/40' },
      { code: 'BODYSYHOP • PAINT BOOTH', title: 'Accident Repair Claim #CL-410', subtitle: 'Insurance Surveyor Approval Confirmed', status: 'Approved', statusColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' }
    ],
    trustTitle: 'Powering Leading Automobile Dealerships, 3S Centers & Multi-Brand Garages',
    trustClients: ['Apex Motors Dealerships', 'Metro Honda 3S Hub', 'Royal Wheels Automotive', 'Sterling Auto Service Group', 'Universal Auto Spares', 'Prime Wheels Fleet Care'],
    tourTabs: [
      {
        id: 'jobcard',
        label: 'Digital Service Job Cards',
        icon: Wrench,
        badge: 'Zero Paper Delays',
        title: 'Tablet Vehicle Check-In, Scratch Tagging & Estimations',
        desc: 'Service advisors inspect incoming cars on tablets, mark existing scratches on 3D vehicle diagrams, photograph odometer readings, and send digital cost estimates directly to customer phones via WhatsApp.',
        bullets: [
          'Tablet-based vehicle inspection with 3D body damage marking and fuel gauge recording',
          'Instant customer quotation approval via WhatsApp link before work commences',
          'Mechanic bay clock-in clock-out tracking billable labor hours accurately',
          'Automatic vehicle service history lookup with past parts replacement notes'
        ],
        metric: '3.2 Hrs',
        metricLabel: 'Average Service Turnaround Velocity',
        previewHeading: 'Service Bay Telemetry & Queue Monitor',
        previewSub: 'Bay Station #04 • Hydraulic Two-Post Lift',
        stats: [
          { label: 'Bay Uptime', value: '92.4%', color: 'text-emerald-400' },
          { label: 'Job Card', value: '#JC-9821', color: 'text-brand-300' },
          { label: 'Labour Rate', value: '$45/hr', color: 'text-cyan-300' },
          { label: 'Customer OK', value: 'Approved', color: 'text-emerald-400' }
        ]
      },
      {
        id: 'parts',
        label: 'OEM Spare Parts & Fast Moving Inventory',
        icon: Boxes,
        badge: 'Zero Lost Sales',
        title: 'Rack-Wise Storage, Superseded Parts & Auto-Stocking',
        desc: 'Never stall a service bay because of a missing gasket. Manage fast/slow-moving OEM parts, track superseded part numbers automatically, and issue items directly against job cards with barcode verification.',
        bullets: [
          'Cross-reference original OEM part numbers with alternate aftermarket numbers',
          'Real-time bin-level stock allocation linked directly to active job cards',
          'Automated reorder triggers for high-turnover filters, lubes, and brake pads',
          'Over-the-counter retail parts billing with multi-tier trade discounts'
        ],
        metric: '99.1%',
        metricLabel: 'First-Pick Spare Parts Availability',
        previewHeading: 'Dealership Spare Parts Ledger',
        previewSub: 'Central Parts Vault • 12,500 OEM Line Items',
        stats: [
          { label: 'Fast Movers', value: '100% In Stock', color: 'text-emerald-400' },
          { label: 'Bin Accuracy', value: '99.8%', color: 'text-brand-300' },
          { label: 'Backorders', value: '0 Critical', color: 'text-cyan-300' },
          { label: 'Gross Margin', value: '31.2%', color: 'text-amber-300' }
        ]
      }
    ],
    calculator: {
      type: 'generic',
      badge: 'Interactive Dealership Profitability Estimator',
      title: 'Calculate Your Dealership Service Revenue Uplift',
      desc: 'See how faster service bay turnaround and zero parts stockouts boost workshop profitability.',
      slider1: { label: 'Monthly Vehicles Serviced', min: 100, max: 2500, step: 50, defaultVal: 650, unit: 'Vehicles/mo' },
      slider2: { label: 'Active Workshop Service Bays', min: 4, max: 30, step: 2, defaultVal: 12, unit: 'Bays' },
      slider3: { label: 'Average Parts & Labor Billing Per Vehicle', min: 50, max: 800, step: 25, defaultVal: 180, unit: '$/vehicle' }
    },
    testimonial: {
      quote: "Operating a 3S dealership with 16 bays was plagued by lost labor hours and spare parts misplacement. Nirghos tablet job cards and automated WhatsApp service approvals boosted our daily vehicle throughput by 35%.",
      author: 'Vikram Sanghavi',
      role: 'Dealer Principal • Apex Motors 3S Dealership'
    },
    faqs: [
      { q: 'Can service advisors create job cards on tablets with photo attachments?', a: 'Yes. Service advisors use our tablet-friendly interface to walk around the vehicle with the customer, mark dents/scratches on a vehicle outline, upload photos, and capture customer digital signatures.' },
      { q: 'Does Nirghos support insurance accident claims and surveyor estimates?', a: 'Yes. You can prepare insurance damage estimates, upload surveyor approval letters, track cashless insurance receivables, and handle customer depreciation deductions seamlessly.' },
      { q: 'How does the system prevent mechanics from sitting idle between jobs?', a: 'Nirghos includes a live workshop floor manager board showing the real-time status of every bay and mechanic. As soon as a job is completed, the next scheduled vehicle is assigned automatically.' },
      { q: 'Can we send automated service due reminders to car owners on WhatsApp?', a: 'Yes. Nirghos calculates the next service due date based on average customer mileage and sends automated personalized service reminder messages via WhatsApp and SMS.' }
    ],
    ctaHeadline: 'Ready to Modernize Your Auto Dealership & Workshop?',
    ctaSub: 'Join 320+ automobile dealers and workshop owners who accelerated bay turnaround and boosted customer retention with Nirghos.'
  },

  // 8. Logistics & Transport
  logistics: {
    complianceBadge: 'GPS Telematics, Fastag & E-Way Bill Ready',
    headline: 'High-Velocity Fleet Management, Dispatch & Long-Haul Logistics Platform',
    subheadline: 'Track vehicle GPS telemetry, trip manifests, driver trip advances, diesel consumption, automated Fastag tolls, and proof of delivery (POD) on a live control tower.',
    consultationBtnText: 'Book Fleet Logistics Consultation',
    demoBtnText: 'Explore Fleet Control Tower',
    socialProofText: '(450+ Fleet Operators & 3PL Transporters)',
    mockupUrl: 'https://app.nirghos.com/logistics/control-tower',
    mockupStatus: 'Fleet Grid: 142 Vehicles En Route',
    kpiTiles: [
      { label: 'On-Time Delivery Rate', value: '98.8%', note: 'Real-time GPS geofence', color: 'text-emerald-400' },
      { label: 'Diesel Fuel Theft Cut', value: '-19.2%', note: 'Sensor & mileage audit', color: 'text-brand-300' },
      { label: 'Trip Settlement Speed', value: '24 Hrs', note: 'Fast driver account close', color: 'text-cyan-300' },
      { label: 'Fleet Vehicle Uptime', value: '96.4%', note: 'Preventive tyre & engine PM', color: 'text-amber-300' }
    ],
    stations: [
      { code: 'ROUTE #14 • INTERSTATE', title: 'Multi-Axle Truck #GJ-01-XX-9821', subtitle: 'Cargo: 24 MT FMCG • Driver: Ram Singh', status: 'On Route (GPS)', statusColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
      { code: 'HUB GATE • CONSIGNMENT', title: 'Hub Delivery Challan #DC-481', subtitle: 'Consignment Billed: 14 Tons Steel Wire', status: 'POD Verified', statusColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
      { code: 'DRIVER DESK • ADVANCE', title: 'Trip Advance & Fuel Card', subtitle: 'Fastag & Diesel Advance Auto-Loaded', status: 'Settled', statusColor: 'bg-brand-500/20 text-brand-300 border-brand-500/40' }
    ],
    trustTitle: 'Powering Premier 3PL Logistics Providers & Heavy Fleet Transporters',
    trustClients: ['Apex Express Logistics', 'National Cargo Carriers', 'Continental Freight Lines', 'FastTrack 3PL Solutions', 'TransGlobal Heavy Movers', 'Vanguard Supply Chain'],
    tourTabs: [
      {
        id: 'fleet',
        label: 'Live Fleet Control Tower',
        icon: Truck,
        badge: 'Sub-Second GPS Sync',
        title: 'Geofenced Route Tracking, Speed Alarms & ETAs',
        desc: 'Oversee your entire truck fleet on an interactive live map. Monitor live vehicle speeds, route deviations, halt durations, and automatic customer ETA notifications with zero phone calls to drivers.',
        bullets: [
          'Direct GPS device hardware integration supporting Teltonika, Concox, and AIS-140',
          'Automated geofence entry and exit alerts at loading docks and customer warehouses',
          'Driver behavior monitoring: harsh braking, overspeeding, and prolonged idling',
          'Digital electronic proof of delivery (e-POD) with consignee photo and signature'
        ],
        metric: '98.8%',
        metricLabel: 'On-Time Consignment Delivery SLA',
        previewHeading: 'Fleet Control Tower Telemetry',
        previewSub: 'Active Fleet: 142 Heavy Multi-Axle Vehicles',
        stats: [
          { label: 'En Route', value: '118 Trucks', color: 'text-emerald-400' },
          { label: 'Loading Dock', value: '16 Trucks', color: 'text-brand-300' },
          { label: 'Service Bay', value: '8 Trucks', color: 'text-cyan-300' },
          { label: 'Alerts', value: '0 Critical', color: 'text-slate-200' }
        ]
      },
      {
        id: 'fuel',
        label: 'Diesel Fuel & Mileage Audit',
        icon: Fuel,
        badge: 'Zero Fuel Pilferage',
        title: 'Km/L Standard vs Actual Mileage Reconciliations',
        desc: 'Eliminate fuel theft—the single biggest expense in logistics. Match fuel sensor telemetry and petrol pump receipts against standard route mileage matrices to spot fuel pilferage immediately.',
        bullets: [
          'Automatic mileage validation (standard km/L vs actual fuel filled)',
          'Integration with corporate fuel cards (IOCL, BPCL, HPCL) for instant expense posting',
          'Tyre serial number tracking with remolding and tread depth maintenance logs',
          'Driver trip ledger settlements factoring toll deductions, loading charges, and advances'
        ],
        metric: '-19.2%',
        metricLabel: 'Diesel Consumption & Pilferage Cut',
        previewHeading: 'Trip Diesel & Mileage Analysis',
        previewSub: 'Trip #TR-8840 • Route: Mumbai to Delhi (1,420 km)',
        stats: [
          { label: 'Standard Fuel', value: '380 L', color: 'text-slate-200' },
          { label: 'Actual Consumed', value: '376 L', color: 'text-emerald-400' },
          { label: 'Mileage Rate', value: '3.77 km/L', color: 'text-brand-300' },
          { label: 'Fuel Leakage', value: 'Zero Detected', color: 'text-cyan-300' }
        ]
      }
    ],
    calculator: {
      type: 'generic',
      badge: 'Interactive Fleet Operational ROI Estimator',
      title: 'Calculate Your Fleet Diesel & Trip Cost Savings',
      desc: 'See how much operating capital you can save by eliminating diesel pilferage and accelerating trip turnaround.',
      slider1: { label: 'Number of Active Fleet Commercial Vehicles', min: 10, max: 500, step: 5, defaultVal: 50, unit: 'Trucks' },
      slider2: { label: 'Average Monthly Kilometers Per Truck', min: 2000, max: 15000, step: 500, defaultVal: 6500, unit: 'km/mo' },
      slider3: { label: 'Estimated Diesel Fuel & Leakage Loss', min: 2, max: 15, step: 0.5, defaultVal: 6.5, unit: '%' }
    },
    testimonial: {
      quote: "Managing 85 heavy trucks on phone calls and paper trip books was losing us thousands of dollars in fuel pilferage and late delivery penalties. Nirghos gave us real-time GPS telemetry and instant trip settlements.",
      author: 'Gurmeet Singh Dhillon',
      role: 'Managing Director • Apex Cargo Logistics Ltd'
    },
    faqs: [
      { q: 'Does Nirghos connect with existing GPS tracking devices on our trucks?', a: 'Yes. Nirghos integrates seamlessly with all popular GPS and AIS-140 tracking hardware via open telemetry APIs, streaming real-time vehicle coordinates and speed alerts directly to your dispatch dashboard.' },
      { q: 'How does Nirghos handle driver trip advances and settlements?', a: 'When a trip is dispatched, the system records approved cash advances and fuel card balances. At the destination, toll expenses and diesel slips are reconciled automatically, closing the trip ledger within minutes.' },
      { q: 'Can we manage tyre serial numbers and retreading schedules?', a: 'Yes! Nirghos features a complete tyre management module tracking serial numbers, wheel positions (steer, drive, trailer), tread depth inspections, and retreading histories to maximize tyre lifespans.' },
      { q: 'Does Nirghos generate lorry receipts (LR) and E-Way bills automatically?', a: 'Yes. You can generate professional Lorry Receipts (LR/Bilty), consignment notes, and E-Way bills in under one minute directly from customer dispatch orders.' }
    ],
    ctaHeadline: 'Ready to Put Your Fleet Under Total Real-Time Control?',
    ctaSub: 'Join 450+ fleet operators and transporters who optimized fuel costs and boosted fleet utilization with Nirghos.'
  }
};

// Fallback generator for remaining industries to ensure 100% of the 25 industries get bespoke content
export const getIndustryLandingData = (slug, industry) => {
  if (industryLandingConfigs[slug]) {
    return industryLandingConfigs[slug];
  }

  // Smart dynamic generator tailored to that specific industry's data
  const indName = industry?.name || 'Enterprise';
  const category = industry?.category || 'General Business';
  const stats = industry?.stats || [
    { label: 'Operational Efficiency', value: '+35%' },
    { label: 'Cost Reduction', value: '-22%' },
    { label: 'Compliance Adherence', value: '100%' },
    { label: 'Process Velocity', value: '3x Faster' }
  ];

  return {
    complianceBadge: `ISO 9001 & ${category} Enterprise Certified`,
    headline: industry?.tagline || `Unified Cloud ERP Platform Tailored for ${indName}`,
    subheadline: industry?.fullDesc || `Engineered specifically to automate end-to-end workflows, inventory ledgers, billing compliance, and real-time executive analytics for ${indName}.`,
    consultationBtnText: `Request 1-on-1 ${indName} Consultation`,
    demoBtnText: `Explore Live ${indName} Workspace`,
    socialProofText: `(500+ Enterprises in ${category})`,
    mockupUrl: `https://app.nirghos.com/${slug}/live-telemetry`,
    mockupStatus: `${indName} Core: 100% Online`,
    kpiTiles: stats.map((s, idx) => ({
      label: s.label,
      value: s.value,
      note: 'Verified Industry Benchmark',
      color: idx === 0 ? 'text-emerald-400' : idx === 1 ? 'text-brand-300' : idx === 2 ? 'text-cyan-300' : 'text-amber-300'
    })),
    stations: [
      { 
        code: `OPERATION #01 • ${indName.toUpperCase()}`, 
        title: `Core Execution Station #01`, 
        subtitle: `Real-time activity dispatch & audit verification`, 
        status: 'Active', 
        statusColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
      },
      { 
        code: `LEDGER & BILLING • DESK`, 
        title: `Automated Invoicing & Tax Ledger`, 
        subtitle: `Real-time double-entry compliance sync`, 
        status: 'Reconciled', 
        statusColor: 'bg-brand-500/20 text-brand-300 border-brand-500/40' 
      },
      { 
        code: `ANALYTICS & KPI • RADAR`, 
        title: `Executive Intelligence Gateway`, 
        subtitle: `Margin tracking & operational SLA telemetry`, 
        status: 'Synced', 
        statusColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' 
      }
    ],
    trustTitle: `Powering Premier Enterprises & Market Leaders in ${indName}`,
    trustClients: [`Premier ${indName} Corp`, `Apex ${category} Hub`, `National ${indName} Ltd`, `Vanguard ${indName} Group`, `Global Horizon Systems`, `Zenith Industry Partners`],
    tourTabs: (industry?.keyFeatures || []).map((feat, idx) => ({
      id: `tab-${idx}`,
      label: feat.title,
      icon: idx === 0 ? Gauge : idx === 1 ? Layers : idx === 2 ? ShieldCheck : Boxes,
      badge: 'Core Capability',
      title: feat.title,
      desc: feat.desc,
      bullets: [
        `Complete lifecycle digitization purpose-built for ${indName}`,
        `Real-time double entry ledger synchronicity across all operations`,
        `Automated compliance validation and audit-ready reporting`,
        `Granular role-based security and operational accountability`
      ],
      metric: stats[idx % stats.length]?.value || '+28%',
      metricLabel: `${stats[idx % stats.length]?.label || 'Efficiency Gain'}`,
      previewHeading: `${feat.title} Command Monitor`,
      previewSub: `${indName} Operational Suite • Production Ready`,
      stats: [
        { label: 'Status', value: '100% OK', color: 'text-emerald-400' },
        { label: 'Sync Rate', value: 'Sub-second', color: 'text-brand-300' },
        { label: 'Security', value: 'Encrypted', color: 'text-cyan-300' },
        { label: 'Compliance', value: 'Certified', color: 'text-amber-300' }
      ]
    })),
    calculator: {
      type: 'generic',
      badge: `Interactive ${indName} ROI Estimator`,
      title: `Calculate Your Organization's Projected Annual Gain`,
      desc: `Adjust your business operational scale to project operational cost reduction and margin uplift with Nirghos ERP.`,
      slider1: { label: 'Monthly Operational Volume / Revenue', min: 25000, max: 1000000, step: 25000, defaultVal: 200000, unit: '$/mo' },
      slider2: { label: 'Active Operational Workstations / Users', min: 5, max: 100, step: 5, defaultVal: 20, unit: 'Users' },
      slider3: { label: 'Estimated Operational Inefficiency / Leakage', min: 1, max: 15, step: 0.5, defaultVal: 5.5, unit: '%' }
    },
    testimonial: {
      quote: `Implementing Nirghos ERP for our ${indName} operations eliminated manual departmental silos and gave our leadership instant visibility into margins, stock, and customer commitments. Our operational throughput improved dramatically within the first quarter.`,
      author: 'Managing Director',
      role: `Head of Enterprise Operations • Leading ${indName} Group`
    },
    faqs: [
      { q: `How fast can Nirghos ERP be deployed for ${indName}?`, a: `Our standardized industry blueprint and pre-configured master templates allow rapid go-live within 14 to 21 business days, including data migration from legacy spreadsheets or older systems.` },
      { q: `Can Nirghos integrate with our existing accounting and third-party tools?`, a: `Yes. Nirghos includes modern REST APIs and native connectors for major payment gateways, government tax portals, biometric attendance hardware, and legacy ERPs.` },
      { q: `How does Nirghos ensure security and regulatory compliance?`, a: `Nirghos features end-to-end encryption, automated daily off-site backups, granular role-based permissions, and complete audit-trail logging to meet international data governance standards.` },
      { q: `Can Nirghos scale as our business opens new branches or locations?`, a: `Yes. Nirghos is built on a multi-tenant cloud architecture that supports unlimited branches, godowns, and legal entities with centralized consolidated financial reporting.` }
    ],
    ctaHeadline: `Ready to Modernize Your ${indName} Operations?`,
    ctaSub: `Join leading enterprises who modernized operational workflows, eliminated manual spreadsheets, and scaled profitably with Nirghos.`
  };
};
