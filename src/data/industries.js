// Complete 25 Business Categories with Dedicated Industry Details, Modules, Key Features, Benefits, and Stats
export const industryCategories = [
  'All',
  'Industrial & Manufacturing',
  'Trade & Commerce',
  'Healthcare & Life Sciences',
  'Institutional & Hospitality',
  'Services & Technology',
  'Energy & Resources'
];

export const industriesData = [
  {
    id: 1,
    slug: 'manufacturing',
    name: 'Manufacturing & Fabrication',
    category: 'Industrial & Manufacturing',
    icon: 'Factory',
    shortDesc: 'Automate multi-level BOMs, shop floor work orders, machine uptime, quality checkpoints, and production schedules.',
    tagline: 'Precision production control from raw material to finished goods.',
    fullDesc: 'Engineered specifically for discrete and process manufacturing plants. Nirghos ERP orchestrates end-to-end factory operations—from multi-stage Bill of Materials (BOM) management and machine capacity planning to scrap reduction, shop-floor worker tracking, and real-time inventory ledger integration.',
    stats: [
      { label: 'Production Efficiency', value: '+34%' },
      { label: 'Scrap & Waste Cut', value: '-28%' },
      { label: 'On-time Order Delivery', value: '99.2%' },
      { label: 'Machine OEE Uptime', value: '94.8%' }
    ],
    keyFeatures: [
      { title: 'Multi-Level BOM Engineering', desc: 'Define complex assembly trees, sub-assemblies, scrap percentages, and alternate components with auto-cost recalculation.' },
      { title: 'Shop Floor & Work Order Control', desc: 'Dispatch digital work orders, track routing stages, record operator time-logs, and identify production bottlenecks in real time.' },
      { title: 'Machine Maintenance & OEE', desc: 'Preventive scheduling, MTTR/MTBF metrics tracking, breakdown work orders, and IoT sensor telemetry integration.' },
      { title: 'Quality Assurance & Inspection', desc: 'Inward material sampling, in-process routing checks, and pre-dispatch Certificate of Analysis (COA) generation.' }
    ],
    modules: [
      { name: 'Production Management', code: 'PRD', icon: 'Cpu', desc: 'Production planning, master scheduling, and batch sequencing.' },
      { name: 'Raw Material Management', code: 'RAW', icon: 'Layers', desc: 'Just-in-time inward logistics, scrap reconciliation, and lot-wise allocation.' },
      { name: 'BOM Management', code: 'BOM', icon: 'Network', desc: 'Configurable multi-level BOMs with version control and engineering change orders.' },
      { name: 'Work Orders & Routing', code: 'WKO', icon: 'ClipboardList', desc: 'Digital routing slips, job card issuance, and station-by-station tracking.' },
      { name: 'Quality Control (QC)', code: 'QAC', icon: 'CheckCircle2', desc: 'Parameter-based inspection sheets, defect logging, and CAPA resolution.' },
      { name: 'Inventory & Warehousing', code: 'INV', icon: 'Boxes', desc: 'Bin level stock tracking, FIFO/LIFO valuation, and automated reorder triggers.' },
      { name: 'Purchase & Procurement', code: 'PUR', icon: 'ShoppingCart', desc: 'Vendor rate contracts, PO approvals, and GRN 3-way reconciliation.' },
      { name: 'Sales & Dispatch', code: 'SLS', icon: 'TrendingUp', desc: 'Sales order dispatch planning, proforma invoices, and e-way bill generation.' },
      { name: 'HRMS & Shift Roster', code: 'HRM', icon: 'Users', desc: 'Worker shift scheduling, biometric overtime logs, and piece-rate payroll.' },
      { name: 'Finance & Costing', code: 'FIN', icon: 'Landmark', desc: 'Standard vs actual cost variance analysis, general ledger, and P&L.' },
      { name: 'Executive BI Reports', code: 'REP', icon: 'BarChart3', desc: 'Real-time production KPIs, plant throughput, and machine downtime analysis.' }
    ],
    benefits: [
      'Eliminate raw material stockouts through automatic demand-driven replenishment.',
      'Achieve exact job-costing by factoring material, machine hour, and labor rates.',
      'Reduce scrap and defect rates with mandatory quality gates at every stage.',
      'Streamline compliance with ISO and environmental manufacturing standards.'
    ],
    relatedSlugs: ['automobile', 'chemical', 'electronics', 'furniture']
  },
  {
    id: 2,
    slug: 'trading',
    name: 'Trading & Wholesale',
    category: 'Trade & Commerce',
    icon: 'ArrowLeftRight',
    shortDesc: 'Streamline bulk orders, multi-warehouse distribution, tier pricing, vendor credit terms, and high-volume billing.',
    tagline: 'High-velocity trade operations with real-time margins and warehouse sync.',
    fullDesc: 'Tailored for wholesale distributors, indenting agents, and bulk trading houses. Nirghos ERP empowers traders to oversee multi-branch inventories, lock customer credit terms, automate purchase cycle margins, and issue thousands of GST/VAT compliant invoices effortlessly.',
    stats: [
      { label: 'Order Processing Speed', value: '3.5x' },
      { label: 'Inventory Holding Cost', value: '-22%' },
      { label: 'Credit Default Rate', value: '< 0.3%' },
      { label: 'Fulfillment Accuracy', value: '99.8%' }
    ],
    keyFeatures: [
      { title: 'Dynamic Multi-Tier Price Lists', desc: 'Assign custom wholesale rates by client category, order volume, payment terms, or geographic territory.' },
      { title: 'Multi-Godown Inventory Sync', desc: 'Instant stock visibility across distributed warehouses with inter-branch transfer challans.' },
      { title: 'Strict Credit Limit Controls', desc: 'Automate customer credit days, overdue payment locks, and interest on delayed payments.' },
      { title: 'Bulk Invoicing & Despatch', desc: 'Generate grouped invoices, batch packing slips, and auto-dispatch notices with transporter tracking.' }
    ],
    modules: [
      { name: 'Purchase Management', code: 'PUR', icon: 'ShoppingCart', desc: 'Vendor price comparison, indenting, and container shipment tracking.' },
      { name: 'Sales Management', code: 'SLS', icon: 'TrendingUp', desc: 'Bulk order processing, quotation builder, and sales rep commission logs.' },
      { name: 'Warehouse & Godown', code: 'WAR', icon: 'Boxes', desc: 'Rack-wise item placement, stock audits, and transfer manifests.' },
      { name: 'Supplier Management', code: 'SUP', icon: 'Building2', desc: 'Vendor performance rating, ledger statements, and credit debit notes.' },
      { name: 'Customer Management', code: 'CRM', icon: 'Users', desc: 'Tiered customer directory, credit scoring, and automated balance reminders.' },
      { name: 'Invoicing & E-Way Bills', code: 'INV', icon: 'FileText', desc: 'One-click GST compliant e-invoice, e-way bills, and delivery challans.' },
      { name: 'Payments & Collections', code: 'PAY', icon: 'CreditCard', desc: 'Receivable aging alerts, automated payment gateway reconciliation.' },
      { name: 'Trading Analytics', code: 'REP', icon: 'BarChart3', desc: 'Item-wise profit margins, fast/slow-moving goods, and turnover ratios.' }
    ],
    benefits: [
      'Protect margins by seeing real-time landed costs and gross margins before confirming bids.',
      'Eliminate dead stock with automatic reorder triggers and aging stock alerts.',
      'Recover outstanding receivables faster with automated WhatsApp payment nudges.',
      'Manage multiple wholesale branches and godowns from a single unified screen.'
    ],
    relatedSlugs: ['retail', 'logistics', 'ecommerce', 'export-import']
  },
  {
    id: 3,
    slug: 'retail',
    name: 'Retail Shops & Supermarkets',
    category: 'Trade & Commerce',
    icon: 'Store',
    shortDesc: 'Fast touch POS, barcode scanning, loyalty programs, scheme promotions, and automated replenishment.',
    tagline: 'Lightning-fast checkout counters connected to intelligent retail analytics.',
    fullDesc: 'Built for single stores, supermarket chains, and franchised retail outlets. Nirghos ERP pairs an ultra-fast offline-capable Point of Sale (POS) counter with enterprise back-office management, centralized SKU cataloging, loyalty points, and promotional bundling.',
    stats: [
      { label: 'Checkout Time per Bill', value: '4.2 sec' },
      { label: 'Customer Retention Lift', value: '+41%' },
      { label: 'Shrinkage & Stock Discrepancy', value: '-65%' },
      { label: 'Daily Transaction Capacity', value: '50k+' }
    ],
    keyFeatures: [
      { title: 'Ultra-Fast POS & Offline Billing', desc: 'Process sales even during internet outages with auto-sync when connection restores.' },
      { title: 'Barcode, Weighing & RFID Sync', desc: 'Direct integration with barcode thermal printers, digital weighing scales, and card swipers.' },
      { title: 'Promotions, Bundles & Loyalty', desc: 'Run "Buy 1 Get 1", category discounts, holiday coupon vouchers, and redeemable points.' },
      { title: 'Multi-Store Central Catalog', desc: 'Update prices and launch seasonal campaigns across 100+ stores simultaneously in seconds.' }
    ],
    modules: [
      { name: 'Point of Sale (POS)', code: 'POS', icon: 'Smartphone', desc: 'Touchscreen cashier terminal with keyboard shortcuts and split payments.' },
      { name: 'Fast Billing & Receipts', code: 'BIL', icon: 'Receipt', desc: 'Thermal receipt printing, digital SMS/WhatsApp e-bills, and returns handling.' },
      { name: 'Product & SKU Catalog', code: 'CAT', icon: 'Package', desc: 'Universal SKU database, variants (size/color), and automated HSN mapping.' },
      { name: 'Stock & Shelf Replenishment', code: 'STK', icon: 'Boxes', desc: 'Aisle/shelf level monitoring, stocktake auditing, and loss prevention.' },
      { name: 'Barcode & Label Printing', code: 'BAR', icon: 'QrCode', desc: 'Custom sticker and tag generator for standard 1D/2D and QR codes.' },
      { name: 'Vendor Purchase Orders', code: 'PUR', icon: 'ShoppingCart', desc: 'Central procurement, vendor returns, and minimum order quantity alerts.' },
      { name: 'Customer Loyalty & CRM', code: 'LOY', icon: 'Award', desc: 'Member tiers, cashback points, anniversary offers, and purchase history.' },
      { name: 'Retail Reports & Cash Count', code: 'REP', icon: 'BarChart3', desc: 'Cashier shift handover balances, hourly footfall sales, and top brands.' }
    ],
    benefits: [
      'Eliminate long customer queues with intuitive sub-5 second barcode billing.',
      'Prevent stock pilferage with cashier drawer reconciliation and audit trails.',
      'Boost basket size using automated cross-sell prompts during POS scan.',
      'Effortlessly expand from 1 store to 50+ stores without changing software.'
    ],
    relatedSlugs: ['trading', 'ecommerce', 'food-beverage', 'textile']
  },
  {
    id: 4,
    slug: 'construction',
    name: 'Construction & Real Estate',
    category: 'Industrial & Manufacturing',
    icon: 'HardHat',
    shortDesc: 'Control site material indents, contractor billing, project Gantt timelines, milestone budgets, and property booking.',
    tagline: 'End-to-end site intelligence, subcontractor billing, and real estate units.',
    fullDesc: 'Engineered for civil builders, infrastructure developers, and real estate developers. Nirghos ERP provides granular visibility into project cost centers, site cement/steel material consumption, contractor measurement books (MB), and customer installment schedules.',
    stats: [
      { label: 'Site Cost Overrun Cut', value: '-31%' },
      { label: 'Material Wastage Prevented', value: '-24%' },
      { label: 'Contractor Audit Speed', value: '4x' },
      { label: 'Unit Booking Conversion', value: '+27%' }
    ],
    keyFeatures: [
      { title: 'Project Milestone Costing', desc: 'Track estimated vs actual civil costs per square foot across multiple project sites.' },
      { title: 'Site Indents & Material Issue', desc: 'App-based site manager material requisitions with gate pass approval workflows.' },
      { title: 'Subcontractor MB Books & RA Bills', desc: 'Digital measurement books with retention money, TDS, and milestone release approvals.' },
      { title: 'Real Estate Unit Booking & CRM', desc: 'Interactive floor plan inventory, payment schedule milestones, and customer demand letters.' }
    ],
    modules: [
      { name: 'Project & Site Management', code: 'PRJ', icon: 'FolderGit2', desc: 'WBS structure, task Gantt scheduling, and site daily progress logs.' },
      { name: 'Site Material Indenting', code: 'MAT', icon: 'Boxes', desc: 'Requisition slips, gate entry notes, and cement/steel consumption.' },
      { name: 'Contractor & Labor Billing', code: 'LAB', icon: 'Users', desc: 'RA bill generation, measurement book audits, and gang labor payments.' },
      { name: 'Equipment & Fleet Logs', code: 'EQP', icon: 'Truck', desc: 'Cranes, earthmovers logbooks, diesel tracking, and idle hour logs.' },
      { name: 'Unit Inventory & Booking', code: 'UNT', icon: 'Home', desc: 'Flats/plots availability matrix, token booking, and allotment letters.' },
      { name: 'Milestone Demands & Receipts', code: 'BIL', icon: 'Receipt', desc: 'RERA-compliant demand generation, installment tracking, and interest.' },
      { name: 'Budget & Cost Variance', code: 'CST', icon: 'Landmark', desc: 'BOQ cost estimation vs actual spend per project phase.' },
      { name: 'Site Safety & Compliance', code: 'SAF', icon: 'ShieldCheck', desc: 'Incident reporting, safety audits, and statutory labor compliance.' }
    ],
    benefits: [
      'Stop site material theft and excess consumption with strict requisition limits.',
      'Protect project profit margins with real-time BOQ vs actual spend alerts.',
      'Streamline RERA compliance and customer payment collection schedules.',
      'Deliver multi-phase projects on budget and on schedule.'
    ],
    relatedSlugs: ['manufacturing', 'service-maintenance', 'furniture', 'oil-gas']
  },
  {
    id: 5,
    slug: 'automobile',
    name: 'Automobile & Auto Parts',
    category: 'Industrial & Manufacturing',
    icon: 'Car',
    shortDesc: 'Manage vehicle showroom bookings, spare parts inventory with OEM codes, workshop job cards, and warranty claims.',
    tagline: 'Comprehensive ERP for auto dealerships, OEM parts distributors, and workshops.',
    fullDesc: 'Designed for automotive dealerships, multi-brand service centers, and auto component manufacturers. Nirghos ERP handles chassis/VIN tracking, vehicle test drives, workshop job cards with mechanic allocation, OEM cross-reference catalogs, and warranty reimbursements.',
    stats: [
      { label: 'Spare Parts Fill Rate', value: '98.6%' },
      { label: 'Bay Turnaround Time', value: '-35%' },
      { label: 'Warranty Claim Approval', value: '99.1%' },
      { label: 'Repeat Service Rate', value: '+44%' }
    ],
    keyFeatures: [
      { title: 'VIN & Chassis History Ledger', desc: 'Complete lifecycle record from vehicle delivery and registration to every periodic service.' },
      { title: 'Digital Workshop Job Cards', desc: 'Tablet inspection checklist, customer estimate approvals via SMS, and mechanic labor logging.' },
      { title: 'OEM Parts Cross-Referencing', desc: 'Instant search across thousands of interchangeable manufacturer part numbers and rack locations.' },
      { title: 'Insurance & Warranty Claims', desc: 'Seamless processing of cashless claims, surveyor inspection documents, and OEM warranty credits.' }
    ],
    modules: [
      { name: 'Vehicle Sales & Showroom', code: 'AUT', icon: 'Car', desc: 'Booking tokens, finance loan processing, RTO registration, and PDI checklists.' },
      { name: 'Workshop Job Card System', code: 'WRK', icon: 'Wrench', desc: 'Service bay allocation, mechanic tracking, and customer estimate signatures.' },
      { name: 'Spare Parts Catalog (OEM)', code: 'PRT', icon: 'Settings', desc: 'Multi-make part numbers, superceded codes, bin locator, and dead stock alerts.' },
      { name: 'Service Billing & Estimates', code: 'BIL', icon: 'Receipt', desc: 'Labor hours billing, parts consumption, and insurance cashless settlement.' },
      { name: 'Insurance & Warranty Desk', code: 'INS', icon: 'ShieldAlert', desc: 'Surveyor approval documentation and warranty reimbursement tracking.' },
      { name: 'Technician Labor Time', code: 'TEC', icon: 'Clock', desc: 'Flat rate manual vs actual hours, productivity index, and commission.' },
      { name: 'Customer Service Reminders', code: 'CRM', icon: 'MessageSquare', desc: 'Automated periodic maintenance and insurance renewal SMS alerts.' },
      { name: 'Dealership Performance BI', code: 'REP', icon: 'BarChart3', desc: 'Service absorption ratio, bay utilization, and vehicle profit margins.' }
    ],
    benefits: [
      'Increase service bay throughput with live bay tracking and mechanic scheduling.',
      'Eliminate obsolete spare parts inventory with automated OEM supersession tracking.',
      'Boost service retention through automated WhatsApp servicing reminders.',
      'Standardize transparent billing to build long-term customer trust.'
    ],
    relatedSlugs: ['manufacturing', 'service-maintenance', 'logistics', 'electronics']
  },
  {
    id: 6,
    slug: 'textile',
    name: 'Textile & Garments',
    category: 'Industrial & Manufacturing',
    icon: 'Scissors',
    shortDesc: 'Track fabric rolls, shade variations, GSM/shrinkage testing, cut-to-pack apparel production, and style seasons.',
    tagline: 'Flawless execution from yarn spinning and dyeing to garment retail shipment.',
    fullDesc: 'Tailored for spinning mills, fabric processors, garment exporters, and apparel brands. Nirghos ERP handles fabric roll tagging, shrinkage/shade sorting, cutting room wastage, production line balancing, style matrices (size/color), and buyer tech pack compliance.',
    stats: [
      { label: 'Cutting Waste Reduction', value: '-19%' },
      { label: 'Line Balancing Efficiency', value: '+28%' },
      { label: 'Buyer Order Compliance', value: '99.7%' },
      { label: 'Fabric Roll Traceability', value: '100%' }
    ],
    keyFeatures: [
      { title: 'Style & Tech Pack Management', desc: 'Define garment tech sheets, measurement specs, trims consumption, and cost calculations.' },
      { title: 'Fabric Roll & Shade Lot Control', desc: 'Barcode roll-level tracking with length, width, shrinkage, and shade band classification.' },
      { title: 'Cut-to-Pack Production Tracking', desc: 'Monitor cutting, bundle bundling, stitching line progress, washing, and iron-packing.' },
      { title: 'Export Shipping & Documentation', desc: 'Generate packing lists, container load plans, shipping bills, and duty drawback statements.' }
    ],
    modules: [
      { name: 'Style & Sample Development', code: 'STL', icon: 'Sparkles', desc: 'Tech pack specs, cost sheets, and buyer sample approval stages.' },
      { name: 'Fabric & Trims Inventory', code: 'FAB', icon: 'Layers', desc: 'Roll-wise barcoding, GSM checks, and trims allocation per order.' },
      { name: 'Cutting Room Management', code: 'CUT', icon: 'Scissors', desc: 'Lay planning, marker efficiency calculation, and bundle ticket generation.' },
      { name: 'Sewing Floor & Assembly', code: 'SEW', icon: 'Activity', desc: 'Hourly production tracking, line balancing, and operator piece-rate pay.' },
      { name: 'Washing & Finishing', code: 'WSH', icon: 'Sparkle', desc: 'Wet/dry process tracking, quality checking, ironing, and tagging.' },
      { name: 'Packaging & Carton Packing', code: 'PCK', icon: 'Box', desc: 'Solid/assorted carton ratio packing and barcode carton label printing.' },
      { name: 'Export & Domestic Billing', code: 'BIL', icon: 'FileText', desc: 'Multi-currency commercial invoices, packing lists, and GST compliance.' },
      { name: 'Quality Inspection (AQL)', code: 'QAC', icon: 'CheckCircle2', desc: 'AQL 1.5/2.5 statistical audit checklists and defect heatmaps.' }
    ],
    benefits: [
      'Stop costly fabric wastage in cutting rooms with intelligent marker planning.',
      'Track every garment bundle seamlessly from cutting table to shipping carton.',
      'Maintain exact operator piece-rate logs to eliminate payroll disputes.',
      'Pass international buyer social and technical audits with digital traceability.'
    ],
    relatedSlugs: ['manufacturing', 'retail', 'export-import', 'ecommerce']
  },
  {
    id: 7,
    slug: 'pharma',
    name: 'Pharma & Healthcare',
    category: 'Healthcare & Life Sciences',
    icon: 'Pill',
    shortDesc: 'Maintain GMP & 21 CFR compliance, batch formulas, active ingredient shelf-life, sterility audits, and regulatory logs.',
    tagline: 'Strict regulatory compliance, batch traceability, and cold-chain integrity.',
    fullDesc: 'Built for pharmaceutical drug manufacturers, API chemical plants, and medical device distributors. Nirghos ERP ensures uncompromising adherence to GMP, WHO, and FDA 21 CFR Part 11 standards with electronic batch records (eBR), electronic signatures, and tamper-proof audit trails.',
    stats: [
      { label: 'Regulatory Audit Readiness', value: '100%' },
      { label: 'Batch Release Time', value: '-60%' },
      { label: 'Expiry Stock Loss', value: '< 0.05%' },
      { label: 'Recall Traceability Time', value: '< 10 min' }
    ],
    keyFeatures: [
      { title: 'Electronic Batch Records (eBR)', desc: 'Digitized step-by-step master manufacturing records with dual verification signatures.' },
      { title: '21 CFR Part 11 Audit Trail', desc: 'Immutable change logs, electronic signatures, session timeouts, and role privileges.' },
      { title: 'Expiry & FEFO Stock Allocation', desc: 'Strict First-Expiry-First-Out picking to eliminate expired drug dispensing.' },
      { title: 'Instant Backward & Forward Recall', desc: 'Track any API raw material batch to every packaged commercial strip in minutes.' }
    ],
    modules: [
      { name: 'Batch Formula & eBR', code: 'EBR', icon: 'FileCode2', desc: 'Master formulation records, yield calculations, and electronic signatures.' },
      { name: 'Cleanroom & QC Laboratory', code: 'QCL', icon: 'Microscope', desc: 'LIMS integration, sampling protocols, and Certificate of Analysis (CoA).' },
      { name: 'Stability & Quarantine Control', code: 'STB', icon: 'Thermometer', desc: 'Quarantine stock holds, stability chamber testing, and release approvals.' },
      { name: 'Batch Expiry & FEFO Inventory', code: 'EXP', icon: 'Boxes', desc: 'Active ingredient potency tracking, cold-chain sensor sync, and FEFO.' },
      { name: 'Regulatory & Validation Logs', code: 'REG', icon: 'FileCheck', desc: 'Equipment calibration logs, SOP revision control, and CAPA registers.' },
      { name: 'Pharma Distribution Billing', code: 'BIL', icon: 'Receipt', desc: 'Drug license checks, DPCO price capping, and wholesale GST invoices.' },
      { name: 'Vendor Qualification', code: 'VND', icon: 'Building2', desc: 'Active API supplier audits, vendor re-certification, and rating.' },
      { name: 'Traceability & Recall Engine', code: 'RCL', icon: 'History', desc: 'End-to-end mock recall simulation and batch distribution audits.' }
    ],
    benefits: [
      'Pass regulatory inspections (FDA, WHO, GMP) with confidence and zero paperwork delays.',
      'Eliminate expired stock losses through automated FEFO warehouse rules.',
      'Prevent human error in formulation with mandatory dual electronic signatures.',
      'Execute full batch recalls in under 10 minutes when required.'
    ],
    relatedSlugs: ['hospital', 'chemical', 'trading', 'logistics']
  },
  {
    id: 8,
    slug: 'food-beverage',
    name: 'Food & Beverage',
    category: 'Industrial & Manufacturing',
    icon: 'UtensilsCrossed',
    shortDesc: 'Control recipe formulations, batch shelf life, HACCP quality checks, cold chain monitoring, and packaging lines.',
    tagline: 'Farm-to-fork batch traceability, recipe consistency, and food safety.',
    fullDesc: 'Engineered for packaged food manufacturers, bakeries, dairies, beverage bottlers, and cloud kitchen chains. Nirghos ERP provides strict recipe formulation control, ingredient shrinkage tracking, allergen warnings, temperature-controlled cold storage, and FSSAI/HACCP compliance.',
    stats: [
      { label: 'Recipe Consistency', value: '100%' },
      { label: 'Ingredient Waste Cut', value: '-33%' },
      { label: 'Audit Compliance Score', value: '99.5%' },
      { label: 'Shelf-Life Yield Lift', value: '+18%' }
    ],
    keyFeatures: [
      { title: 'Recipe & Flavor Formulation', desc: 'Standardized batch recipes with moisture loss, baking yield, and cost calculations.' },
      { title: 'HACCP & Food Safety Checklists', desc: 'Mandatory CCP temperature logs, sanitation audits, and allergen segregation.' },
      { title: 'Cold-Chain & Expiry Control', desc: 'IoT freezer temperature monitoring, FEFO dispatch, and perishable inventory alerts.' },
      { title: 'Nutritional & Barcode Labelling', desc: 'Automated calorie, ingredient listing, batch printing, and best-before date stamping.' }
    ],
    modules: [
      { name: 'Recipe Formulation & Scaling', code: 'REC', icon: 'FlaskConical', desc: 'Batch scaling, ingredient substitution, and nutritional calculation.' },
      { name: 'Batch Blending & Production', code: 'BLN', icon: 'Cpu', desc: 'Mixing, cooking, bottling, canning schedules, and yield tracking.' },
      { name: 'Perishable Raw Stock & FEFO', code: 'RAW', icon: 'Boxes', desc: 'Shelf-life countdowns, supplier grading, and cold store allocation.' },
      { name: 'HACCP & Safety Protocols', code: 'HCP', icon: 'ShieldCheck', desc: 'Critical control point checks, micro-testing, and sanitation logs.' },
      { name: 'Packaging & Expiry Dating', code: 'PKG', icon: 'PackageCheck', desc: 'Automated date coder integration, carton packing, and barcoding.' },
      { name: 'Direct-Store-Delivery (DSD)', code: 'DSD', icon: 'Truck', desc: 'Route sales rep billing, crate returns, and daily store stock replenishment.' },
      { name: 'Distributor & Retail Invoicing', code: 'BIL', icon: 'Receipt', desc: 'Scheme discounts, volume rebates, and GST-compliant e-invoicing.' },
      { name: 'Food Traceability & Audit', code: 'TRC', icon: 'SearchCheck', desc: 'Ingredient lot traceability from farm harvest to consumer pack.' }
    ],
    benefits: [
      'Maintain identical taste and quality across all batches and production runs.',
      'Drastically reduce spoilage of sensitive dairy, meat, and organic ingredients.',
      'Effortlessly comply with national and global food safety hygiene standards.',
      'Optimize delivery vehicle load and route timing for fresh food delivery.'
    ],
    relatedSlugs: ['agriculture', 'hotel-restaurant', 'retail', 'manufacturing']
  },
  {
    id: 9,
    slug: 'logistics',
    name: 'Logistics & Transport',
    category: 'Trade & Commerce',
    icon: 'Truck',
    shortDesc: 'Automate consignment booking, lorry receipts (LR), fleet maintenance, GPS trip tracking, and driver settlements.',
    tagline: 'End-to-end fleet coordination, dispatch manifests, and automated billing.',
    fullDesc: 'Tailored for 3PL providers, fleet operators, freight forwarders, and courier networks. Nirghos ERP centralizes consignment booking, consignment tracking, route planning, toll and fuel card reconciliation, driver trip advances, vehicle fitness expiry, and consignor billing.',
    stats: [
      { label: 'Fleet Utilization', value: '+37%' },
      { label: 'Fuel Theft & Loss Drop', value: '-26%' },
      { label: 'Trip Billing Cycle Time', value: '-70%' },
      { label: 'On-Time Delivery Rate', value: '98.9%' }
    ],
    keyFeatures: [
      { title: 'Lorry Receipt (LR) & Waybill', desc: 'Instant digital LR creation with barcode tracking, e-way bill sync, and customer SMS.' },
      { title: 'Live GPS & Route Optimization', desc: 'Real-time vehicle location, geofencing, detour alerts, and planned vs actual trip distance.' },
      { title: 'Driver Trip Expense & Advance', desc: 'Trip cash settlements, diesel slips, toll FASTag integration, and driver trip incentives.' },
      { title: 'Fleet Maintenance & Compliance', desc: 'Engine servicing alerts, tire mileage tracking, and insurance/permit renewal triggers.' }
    ],
    modules: [
      { name: 'Consignment & LR Booking', code: 'CNG', icon: 'FileSpreadsheet', desc: 'Single & parcel booking, destination hub routing, and barcode stickers.' },
      { name: 'Fleet & Vehicle Master', code: 'FLT', icon: 'Truck', desc: 'Vehicle specs, RC, fitness certificate, insurance, and permit repository.' },
      { name: 'Trip Dispatch & Manifest', code: 'TRP', icon: 'MapPin', desc: 'Vehicle loading sheets, route sequencing, transshipment manifests.' },
      { name: 'Fuel & FASTag Toll Ledger', code: 'FUL', icon: 'Fuel', desc: 'Mileage analysis, fuel pump receipts, and automated toll deductions.' },
      { name: 'Driver & Crew Management', code: 'DRV', icon: 'Users', desc: 'Driver license validity, trip allowances, and safety ratings.' },
      { name: 'Vehicle Workshop & Tires', code: 'MNT', icon: 'Wrench', desc: 'Preventive service schedules, spare parts logs, and tire retreading.' },
      { name: 'Freight Invoicing & POD', code: 'BIL', icon: 'Receipt', desc: 'Proof of Delivery (POD) scanning, detention billing, and client statements.' },
      { name: 'Logistics Analytics & KPIs', code: 'REP', icon: 'BarChart3', desc: 'Cost-per-ton-km, empty deadhead mileage, and fleet profitability.' }
    ],
    benefits: [
      'Eliminate cash leakages in fuel and driver expenses with automated verification.',
      'Accelerate freight payment recovery with instant mobile POD upload.',
      'Prevent vehicle impounding with proactive vehicle permit and fitness renewals.',
      'Gain real-time shipment status visibility across all transit corridors.'
    ],
    relatedSlugs: ['trading', 'export-import', 'ecommerce', 'manufacturing']
  },
  {
    id: 10,
    slug: 'education',
    name: 'Schools & Colleges',
    category: 'Institutional & Hospitality',
    icon: 'GraduationCap',
    shortDesc: 'Automate student admissions, fee installments, online examinations, attendance biometric logs, and timetable rosters.',
    tagline: 'Comprehensive campus management from admission to alumni network.',
    fullDesc: 'Engineered for K-12 schools, multi-branch educational institutes, and universities. Nirghos ERP provides a unified platform for parent portals, online fee collection, automated student report cards, faculty class scheduling, library automation, and hostel/transportation management.',
    stats: [
      { label: 'Fee Collection Efficiency', value: '+48%' },
      { label: 'Administrative Hours Saved', value: '-55%' },
      { label: 'Parent Engagement Rate', value: '96%' },
      { label: 'Examination Grading Speed', value: '5x' }
    ],
    keyFeatures: [
      { title: 'Student Admission & Enrollment', desc: 'Online application workflows, document verification, entrance merit lists, and ID cards.' },
      { title: 'Automated Fee Management', desc: 'Custom installment plans, scholarship waivers, automated SMS reminders, and payment gateways.' },
      { title: 'Examination & Grade Cards', desc: 'Continuous evaluation marks entry, grade calculation, and instant PDF report cards.' },
      { title: 'Parent & Student Mobile App', desc: 'Daily attendance push alerts, homework diaries, circulars, and teacher messaging.' }
    ],
    modules: [
      { name: 'Admissions & Enrollment', code: 'ADM', icon: 'UserPlus', desc: 'Inquiry tracking, merit lists, student master profiles, and registration.' },
      { name: 'Student Fee & Payments', code: 'FEE', icon: 'CreditCard', desc: 'Category-wise fee structure, penalty rules, and online receipt issuance.' },
      { name: 'Academics & Timetable', code: 'ACD', icon: 'CalendarDays', desc: 'Automatic timetable conflict generator, curriculum progress, and syllabus.' },
      { name: 'Examinations & Marks', code: 'EXM', icon: 'FileSpreadsheet', desc: 'Hall tickets, invigilation duty roster, grading scale, and report cards.' },
      { name: 'Student & Staff Attendance', code: 'ATT', icon: 'Clock', desc: 'RFID/biometric gate integration, mobile teacher app, and absentee alerts.' },
      { name: 'Library Management', code: 'LIB', icon: 'BookOpen', desc: 'Barcode book catalog, issue/return logs, and overdue fine calculations.' },
      { name: 'Hostel & Mess Operations', code: 'HST', icon: 'Home', desc: 'Room allotment, mess menu planning, visitor logs, and gate passes.' },
      { name: 'School Bus Transportation', code: 'BUS', icon: 'Bus', desc: 'Bus route stops, student boarding verification, and live bus GPS tracking.' }
    ],
    benefits: [
      'Achieve 100% timely fee collection with automated digital payment reminders.',
      'Empower teachers to focus on teaching by cutting routine administrative paperwork.',
      'Enhance parent satisfaction with real-time academic and attendance transparency.',
      'Manage multiple campuses and boards (CBSE, ICSE, IB, State) seamlessly.'
    ],
    relatedSlugs: ['hospital', 'it-software', 'professional-services', 'security-facility']
  },
  {
    id: 11,
    slug: 'hospital',
    name: 'Hospitals & Clinics',
    category: 'Healthcare & Life Sciences',
    icon: 'Hospital',
    shortDesc: 'Manage OPD/IPD queues, doctor consultation scheduling, electronic health records (EHR), bed allocation, and pharmacy billing.',
    tagline: 'Compassionate patient care powered by clinical precision and administrative ease.',
    fullDesc: 'Tailored for multi-specialty hospitals, day-care surgical clinics, and diagnostic chains. Nirghos ERP unifies clinical workflows, doctor rosters, patient electronic medical records (EMR), operation theatre (OT) booking, pharmacy dispensing, pathology lab reports, and insurance TPA cashless claims.',
    stats: [
      { label: 'Patient Wait Times', value: '-42%' },
      { label: 'Bed Turnover Rate', value: '+30%' },
      { label: 'TPA Claim Settlement', value: '98.5%' },
      { label: 'Clinical Documentation Accuracy', value: '99.9%' }
    ],
    keyFeatures: [
      { title: 'OPD & IPD Ward Management', desc: 'Patient registration, doctor token queue display, bed occupancy matrix, and discharge summaries.' },
      { title: 'Electronic Medical Records (EMR)', desc: 'Secure clinical notes, diagnosis ICD codes, prescription templates, and past medical history.' },
      { title: 'Integrated In-House Pharmacy', desc: 'Direct doctor e-prescription fulfillment, batch expiry monitoring, and bedside billing.' },
      { title: 'Pathology & Diagnostic LIMS', desc: 'Automated analyzer machine interfacing, test barcode sample tubes, and online report downloads.' }
    ],
    modules: [
      { name: 'Patient Registration & OPD', code: 'OPD', icon: 'Users', desc: 'Token queue management, consultation billing, and appointment scheduling.' },
      { name: 'In-Patient (IPD) & Bed Matrix', code: 'IPD', icon: 'BedDouble', desc: 'Ward/ICU bed allocation, nursing care sheets, and doctor rounds logging.' },
      { name: 'Doctor Consultation & EMR', code: 'EMR', icon: 'Stethoscope', desc: 'Clinical notes, vitals monitoring, digital prescription, and diagnosis.' },
      { name: 'Operation Theatre (OT) Desk', code: 'OTR', icon: 'Activity', desc: 'Surgeon slot scheduling, anesthesia checklist, and OT consumable billing.' },
      { name: 'Hospital Pharmacy & Drugs', code: 'PHR', icon: 'Pill', desc: 'Bedside dispensing, return slips, drug interaction warnings, and FEFO.' },
      { name: 'Pathology & Radiology LIMS', code: 'LAB', icon: 'Microscope', desc: 'Sample accessioning, reference ranges, doctor approval, and SMS links.' },
      { name: 'Insurance (TPA) & Billing', code: 'TPA', icon: 'ShieldCheck', desc: 'Cashless pre-authorization, package rate billing, and claims settlement.' },
      { name: 'Hospital Staff & Nursing', code: 'STF', icon: 'UserCheck', desc: 'Nurse shift rosters, duty handover notes, and doctor commission payout.' }
    ],
    benefits: [
      'Eliminate billing errors and missed consumables during patient discharge.',
      'Speed up insurance pre-authorizations and cashless claim approvals.',
      'Improve patient outcomes through instant access to previous medical histories.',
      'Optimize hospital bed occupancy and doctor consultation schedules.'
    ],
    relatedSlugs: ['pharma', 'education', 'hotel-restaurant', 'service-maintenance']
  },
  {
    id: 12,
    slug: 'hotel-restaurant',
    name: 'Hotels & Restaurants',
    category: 'Institutional & Hospitality',
    icon: 'Utensils',
    shortDesc: 'Handle table floor reservations, kitchen order tickets (KOT), recipe ingredient consumption, room booking, and fast guest checkout.',
    tagline: 'Exquisite guest experiences paired with watertight kitchen and room controls.',
    fullDesc: 'Crafted for boutique hotels, fine dining restaurants, bars, banquet halls, and multi-outlet food chains. Nirghos ERP links table touch-screen ordering, wireless Kitchen Order Tickets (KOT), room reservation channel managers, mini-bar billing, housekeeping status, and banquet event costing.',
    stats: [
      { label: 'Table Turnover Speed', value: '+35%' },
      { label: 'Kitchen Food Wastage', value: '-29%' },
      { label: 'Room Occupancy Growth', value: '+22%' },
      { label: 'Guest Billing Time', value: '< 15 sec' }
    ],
    keyFeatures: [
      { title: 'Interactive Floor & Table Layout', desc: 'Visual floor plan with real-time table status (Vacant, Seated, KOT Placed, Billed).' },
      { title: 'Wireless KOT & Kitchen Display (KDS)', desc: 'Instant order routing to specific kitchen stations (Grill, Bar, Bakery) with prep timers.' },
      { title: 'Hotel Room Channel Manager', desc: 'Live two-way sync with Booking.com, Agoda, Expedia, and direct front desk walk-ins.' },
      { title: 'Recipe Ingredient Auto-Deduction', desc: 'Automatic back-end deduction of raw meat, spices, and liquor per dish or cocktail served.' }
    ],
    modules: [
      { name: 'Table & Floor Management', code: 'TBL', icon: 'LayoutGrid', desc: 'Table reservation, split bills, guest seating, and waiter assignment.' },
      { name: 'Kitchen Order Tickets (KOT)', code: 'KOT', icon: 'Flame', desc: 'Wireless kitchen printing, modifiers, allergen notes, and KDS screens.' },
      { name: 'Menu & Recipe Costing', code: 'MNU', icon: 'Menu', desc: 'Dynamic digital menus, recipe cost cards, and ingredient auto-depletion.' },
      { name: 'Front Desk & Room Booking', code: 'RSV', icon: 'KeyRound', desc: 'Guest check-in/out, room tariff plans, ID scanning, and folios.' },
      { name: 'Housekeeping & Maintenance', code: 'HSK', icon: 'Sparkles', desc: 'Room cleaning status (Clean, Dirty, Under Repair), and linen inventory.' },
      { name: 'Banquet & Event Catering', code: 'BNQ', icon: 'PartyPopper', desc: 'Hall booking schedule, custom buffet menus, and milestone payments.' },
      { name: 'Restaurant Billing & Split Pay', code: 'BIL', icon: 'Receipt', desc: 'Discount schemes, tip allocation, split payment by item, and e-invoices.' },
      { name: 'Hospitality Analytics', code: 'REP', icon: 'BarChart3', desc: 'RevPAR, average ticket size, food cost percentage, and waiter sales.' }
    ],
    benefits: [
      'Stop costly food and liquor pilferage with recipe-based inventory depletion.',
      'Eliminate order delays and mix-ups with digital Kitchen Display Systems.',
      'Prevent overbooking of hotel rooms across multiple online travel agencies.',
      'Deliver personalized service with guest dining preference and loyalty tracking.'
    ],
    relatedSlugs: ['food-beverage', 'retail', 'service-maintenance', 'education']
  },
  {
    id: 13,
    slug: 'it-software',
    name: 'IT & Software Companies',
    category: 'Services & Technology',
    icon: 'Code2',
    shortDesc: 'Manage software sprints, developer billable hours, client retainers, SaaS subscription billing, and IT asset allocation.',
    tagline: 'Maximize team billable utilization and streamline project profit margins.',
    fullDesc: 'Tailored for software development agencies, SaaS companies, and digital consultancies. Nirghos ERP provides project milestone tracking, automated developer timesheet logging, client retainer billing, recurring SaaS subscription management, and hardware asset allocation.',
    stats: [
      { label: 'Billable Hour Utilization', value: '+31%' },
      { label: 'Unbilled Leakage Cut', value: '-88%' },
      { label: 'Client Retention Rate', value: '94%' },
      { label: 'Project Margin Visibility', value: '100%' }
    ],
    keyFeatures: [
      { title: 'Project Sprints & Timesheets', desc: 'Log billable vs non-billable hours with manager approvals and client invoice links.' },
      { title: 'Retainer & Milestone Contracts', desc: 'Automate fixed-cost milestone billing, Time & Material (T&M), and monthly retainers.' },
      { title: 'Recurring SaaS Subscriptions', desc: 'Automated recurring card billing, prorated upgrades, churn analysis, and MRR metrics.' },
      { title: 'Developer Skills & Resource Matrix', desc: 'Forecast developer availability, bench strength, and project skill allocations.' }
    ],
    modules: [
      { name: 'Project & Sprint Tracking', code: 'PRJ', icon: 'Kanban', desc: 'Agile sprints, milestone deliverables, task boards, and bug tracking.' },
      { name: 'Timesheets & Utilization', code: 'TMS', icon: 'Clock', desc: 'Daily/weekly time logging, approval workflows, and billability metrics.' },
      { name: 'Client Invoicing (T&M & Fixed)', code: 'INV', icon: 'Receipt', desc: 'Automated timesheet-to-invoice generation and international currency.' },
      { name: 'SaaS Subscription Engine', code: 'SUB', icon: 'Repeat', desc: 'Plan tiers, metered usage, automated renewals, and MRR/ARR analytics.' },
      { name: 'IT Asset & Laptop Inventory', code: 'AST', icon: 'Laptop', desc: 'Hardware serial tracking, software license renewals, and handovers.' },
      { name: 'Talent Acquisition & HRMS', code: 'HRM', icon: 'Users', desc: 'Developer interview pipeline, remote attendance, and compensation.' },
      { name: 'Client Portal & Feedback', code: 'CRM', icon: 'MessageSquare', desc: 'Shared milestone progress, support ticketing, and NPS surveys.' },
      { name: 'Software Agency Financials', code: 'FIN', icon: 'Landmark', desc: 'Profitability per client/project, overhead allocation, and tax filing.' }
    ],
    benefits: [
      'Eliminate unbilled hours through automated timesheet-to-invoice synchronization.',
      'Gain real-time visibility into developer bench costs and project gross margins.',
      'Automate monthly retainer billing and reduce overdue payment follow-ups.',
      'Keep IT hardware assets and software licenses fully audited and tracked.'
    ],
    relatedSlugs: ['professional-services', 'service-maintenance', 'electronics', 'trading']
  },
  {
    id: 14,
    slug: 'service-maintenance',
    name: 'Service & Maintenance',
    category: 'Services & Technology',
    icon: 'Wrench',
    shortDesc: 'Automate annual maintenance contracts (AMC), field technician dispatch, GPS geo-attendance, customer ticket resolution, and spare usage.',
    tagline: 'Reliable service dispatching and recurring maintenance contract management.',
    fullDesc: 'Engineered for HVAC contractors, elevator maintenance providers, industrial machinery service firms, and home appliance networks. Nirghos ERP manages AMC contracts, warranty periods, field technician GPS dispatch, customer digital signatures on service completion, and spare part consumption.',
    stats: [
      { label: 'First-Time Fix Rate', value: '88.4%' },
      { label: 'Technician Jobs per Day', value: '+32%' },
      { label: 'AMC Contract Renewals', value: '+46%' },
      { label: 'Ticket Resolution Time', value: '-50%' }
    ],
    keyFeatures: [
      { title: 'Annual Maintenance Contracts (AMC)', desc: 'Automated periodic service schedule generation, renewal reminders, and SLA terms.' },
      { title: 'Field Technician Mobile App', desc: 'Task notifications, customer location navigation, job checklists, and spare requests.' },
      { title: 'Digital Job Sign-off & OTP', desc: 'Customer digital signature or OTP verification on service completion with instant invoice.' },
      { title: 'Van Stock & Spare Inventory', desc: 'Mobile trunk stock visibility, defective spare returns, and warranty replacement tracking.' }
    ],
    modules: [
      { name: 'Customer Service Helpdesk', code: 'HDQ', icon: 'Headphones', desc: 'Multi-channel ticket capture (phone/email/app) and priority dispatch.' },
      { name: 'AMC & Warranty Contracts', code: 'AMC', icon: 'FileCheck', desc: 'Comprehensive vs non-comprehensive contracts and automated preventive visits.' },
      { name: 'Field Technician Dispatch', code: 'DSP', icon: 'MapPin', desc: 'Geo-location assignment, skill matching, and route optimization.' },
      { name: 'Spare Parts & Van Inventory', code: 'SPR', icon: 'Boxes', desc: 'Technician kit stock, replacement parts ledger, and warranty return.' },
      { name: 'On-Site Service Billing', code: 'BIL', icon: 'Receipt', desc: 'Instant invoice generation for visit charges, labor, and parts replaced.' },
      { name: 'Equipment History & Serial Log', code: 'EQP', icon: 'History', desc: 'Complete breakdown and maintenance history per installed asset serial.' },
      { name: 'SLA & Escalation Matrix', code: 'SLA', icon: 'AlertTriangle', desc: 'Response and resolution time tracking with auto-escalation to managers.' },
      { name: 'Service Quality & Feedback', code: 'REP', icon: 'Star', desc: 'Customer CSAT ratings, repeat breakdown frequency, and technician KPIs.' }
    ],
    benefits: [
      'Never miss an AMC scheduled visit with automated calendar dispatch alerts.',
      'Prevent leakage of costly spare parts by tracking technician van inventory in real-time.',
      'Boost recurring annual contract revenue with timely automated renewal proposals.',
      'Increase customer satisfaction through rapid first-time problem resolution.'
    ],
    relatedSlugs: ['automobile', 'electronics', 'security-facility', 'construction']
  },
  {
    id: 15,
    slug: 'agriculture',
    name: 'Agriculture & Agro',
    category: 'Energy & Resources',
    icon: 'Sprout',
    shortDesc: 'Track crop plantation cycles, cold storage lot allocation, fertilizer/pesticide usage, farm gate procurement, and mandi auctions.',
    tagline: 'Modernize agribusiness, cold chains, crop yields, and farm procurement.',
    fullDesc: 'Built for agro-processing companies, farm cooperatives, seed manufacturers, cold storage operators, and commodity traders. Nirghos ERP connects farm-gate weighbridge buying, crop growth stages, chemical spraying logs, cold storage chamber management, and bulk wholesale distribution.',
    stats: [
      { label: 'Post-Harvest Losses Cut', value: '-30%' },
      { label: 'Crop Yield Forecasting', value: '94%' },
      { label: 'Farmer Payment Speed', value: 'Instant' },
      { label: 'Cold Storage Capacity Use', value: '98%' }
    ],
    keyFeatures: [
      { title: 'Farm Gate & Mandi Buying', desc: 'Weighbridge integration, moisture quality grading, deduction slips, and instant farmer payouts.' },
      { title: 'Cold Storage Chamber Allocation', desc: 'Pallet/bag tracking, chamber temperature monitoring, and rent billing calculations.' },
      { title: 'Crop Cycle & Chemical Dosage', desc: 'Seed plantation tracking, fertilizer schedule, pre-harvest safety interval compliance.' },
      { title: 'Commodity Trading & Contracts', desc: 'Forward buying contracts, hedging, bag-wise lot traceability, and export packing.' }
    ],
    modules: [
      { name: 'Farm Procurement & Weighbridge', code: 'PRC', icon: 'Scale', desc: 'Direct farmer buying, deduction for moisture/foreign matter, and receipts.' },
      { name: 'Cold Storage Operations', code: 'CLD', icon: 'Snowflake', desc: 'Chamber bin allocation, warehouse receipts, and storage rent invoices.' },
      { name: 'Crop Plantation & Agronomy', code: 'CRP', icon: 'Sprout', desc: 'Soil testing data, weather forecast sync, and crop growth stage records.' },
      { name: 'Fertilizers & Seed Inventory', code: 'CHM', icon: 'Boxes', desc: 'Batch control, active ingredient expiry, and pesticide usage compliance.' },
      { name: 'Processing & Grain Milling', code: 'PRD', icon: 'Cpu', desc: 'Sorting, grading, cleaning, packaging, and by-product yield recovery.' },
      { name: 'Farmer Accounts & Payouts', code: 'PAY', icon: 'Landmark', desc: 'Direct bank transfer (NEFT/RTGS), loan advances, and seed adjustment.' },
      { name: 'Bulk Wholesale Dispatch', code: 'DIS', icon: 'Truck', desc: 'Truck manifests, bagging tally, and commercial tax e-way bills.' },
      { name: 'Agro Commodity Analytics', code: 'REP', icon: 'BarChart3', desc: 'Commodity price trends, lot profit margins, and inventory moisture loss.' }
    ],
    benefits: [
      'Maintain fair and transparent farmer procurement with automated weighbridge data.',
      'Maximize cold storage revenue with automated bag-level storage rent calculation.',
      'Ensure pesticide residue compliance for export-grade agricultural produce.',
      'Protect operating margins against commodity seasonal price fluctuations.'
    ],
    relatedSlugs: ['food-beverage', 'chemical', 'trading', 'logistics']
  },
  {
    id: 16,
    slug: 'jewellery',
    name: 'Jewellery & Diamond',
    category: 'Trade & Commerce',
    icon: 'Gem',
    shortDesc: 'Control precious metal purities, stone carat weights, hallmarking, artisan (karigar) metal loss, and pawn loan gold schemes.',
    tagline: 'Flawless precision down to 0.001 grams of gold and diamond carats.',
    fullDesc: 'Tailored for diamond merchants, gold manufacturing units, and luxury retail showrooms. Nirghos ERP accounts for gold/silver purity variations (24K/22K/18K), diamond clarity/cut grading, karigar labor wastage reconciliation, hallmark certification, and monthly gold savings schemes.',
    stats: [
      { label: 'Artisan Metal Loss Audit', value: '100%' },
      { label: 'Gold Scheme Enrollment', value: '+52%' },
      { label: 'Inventory Valuation Accuracy', value: '99.99%' },
      { label: 'Billing Speed with Tags', value: '5 sec' }
    ],
    keyFeatures: [
      { title: 'Centigram & Carat Precision', desc: 'Triple-decimal precision weight calculation with live market gold rate integration.' },
      { title: 'Artisan (Karigar) Metal Ledger', desc: 'Issue pure metal bars, track manufacturing loss/wastage, and pay per-gram making charges.' },
      { title: 'RFID & Barcode Jewellery Tagging', desc: 'Scan trays of rings and necklaces in seconds with portable RFID readers for instant stock audit.' },
      { title: 'Monthly Gold Saving Schemes', desc: 'Customer advance contribution tracking, monthly passbooks, and redemption bonuses.' }
    ],
    modules: [
      { name: 'Jewellery POS & Fast Billing', code: 'POS', icon: 'Receipt', desc: 'Making charge calculations, old gold exchange, and hallmarking charges.' },
      { name: 'Precious Metals & Bullion', code: 'GLD', icon: 'Coins', desc: 'Daily bullion rates, conversion matrices, and touch/purity reconciliations.' },
      { name: 'Diamond & Gemstone Master', code: 'GEM', icon: 'Gem', desc: '4Cs classification (Cut, Color, Clarity, Carat), and certification tracking (GIA/IGI).' },
      { name: 'Artisan (Karigar) Accounts', code: 'KRG', icon: 'Hammer', desc: 'Daily gold issuance, return weight, allowed wastage loss, and labor settlement.' },
      { name: 'RFID Tray & Tag Stocktake', code: 'TAG', icon: 'QrCode', desc: 'Instant showroom inventory scanning and missing item alerts.' },
      { name: 'Customer Gold Schemes', code: 'SCH', icon: 'PiggyBank', desc: 'Installment schemes, maturity bonus calculators, and automated SMS reminders.' },
      { name: 'Old Gold Purchase & Melting', code: 'MLT', icon: 'Flame', desc: 'Testing purity percentage, deduction calculation, and refinery melting slips.' },
      { name: 'Luxury Showroom Analytics', code: 'REP', icon: 'BarChart3', desc: 'Gross margin by ornament category, slow-moving heavy inventory, and counter sales.' }
    ],
    benefits: [
      'Stop metal leakage completely with daily closing physical weight versus system audits.',
      'Dramatically speed up showroom stocktaking from hours to under 10 minutes using RFID.',
      'Protect margins against gold price volatility with automated live price updating.',
      'Grow repeat customer footfall through automated gold savings scheme management.'
    ],
    relatedSlugs: ['retail', 'trading', 'manufacturing', 'ecommerce']
  },
  {
    id: 17,
    slug: 'chemical',
    name: 'Chemical Industries',
    category: 'Industrial & Manufacturing',
    icon: 'FlaskRound',
    shortDesc: 'Ensure hazardous material safety, SDS sheets, reactor batch kinetics, environmental compliance, and tanker dispatch.',
    tagline: 'Chemical process safety, regulatory compliance, and formulation stability.',
    fullDesc: 'Engineered for specialty chemical manufacturers, polymer producers, and industrial solvent processors. Nirghos ERP oversees reactor batch sequencing, temperature/pressure parameters, Safety Data Sheet (SDS) generation, hazardous transport compliance, and bulk tanker weighbridge integration.',
    stats: [
      { label: 'Batch Quality Consistency', value: '99.6%' },
      { label: 'EHS Safety Audit Score', value: '100%' },
      { label: 'Tanker Turnaround Time', value: '-38%' },
      { label: 'Emission Compliance', value: 'Zero Defect' }
    ],
    keyFeatures: [
      { title: 'Reactor Batch Processing', desc: 'Monitor multi-stage reaction times, catalyst additions, exothermic cooling, and batch yields.' },
      { title: 'EHS & Safety Data Sheets (SDS)', desc: 'Automated GHS compliant hazard labeling, emergency action protocols, and SDS generation.' },
      { title: 'Tanker & Drum Fleet Logistics', desc: 'Tanker cleanliness certification, dip-rod volume measurement, and weighbridge linking.' },
      { title: 'Environmental & Pollution Logs', desc: 'Effluent treatment plant (ETP) metrics, hazardous waste manifests, and government reports.' }
    ],
    modules: [
      { name: 'Reactor Formulation & Batching', code: 'CHM', icon: 'FlaskRound', desc: 'Chemical recipe management, stoichiometric ratios, and batch history sheets.' },
      { name: 'Quality & Analytical Lab (QC)', code: 'QAC', icon: 'Microscope', desc: 'Spectroscopy, pH, viscosity testing, and Certificate of Analysis issuance.' },
      { name: 'Hazardous Material Inventory', code: 'HAZ', icon: 'AlertTriangle', desc: 'Compatibility segregation, explosive storage limits, and spill containment logs.' },
      { name: 'Bulk Tank Farm Management', code: 'TNK', icon: 'Layers', desc: 'Liquid bulk storage tank levels, density temperature correction, and transfers.' },
      { name: 'EHS Safety & Statutory Filing', code: 'EHS', icon: 'ShieldAlert', desc: 'Incident investigations, OSHA compliance, and PCB hazardous waste returns.' },
      { name: 'Bulk Tanker Weighbridge', code: 'WGH', icon: 'Scale', desc: 'Gross tare weigh slips, driver safety briefing, and tanker seal tracking.' },
      { name: 'Contract Tolling & Manufacturing', code: 'TOL', icon: 'Cpu', desc: 'Customer raw material reconciliation, conversion cost billing, and yield.' },
      { name: 'Chemical BI & Process Variance', code: 'REP', icon: 'BarChart3', desc: 'Steam and energy consumption per ton, yield variance, and chemical costs.' }
    ],
    benefits: [
      'Maintain rigorous compliance with environmental, pollution, and chemical safety boards.',
      'Prevent hazardous mixing disasters with automated warehouse compatibility checks.',
      'Accurately price toll-manufacturing services with true energy and reactor hour costing.',
      'Guarantee customer satisfaction through automated Certificate of Analysis attachments.'
    ],
    relatedSlugs: ['manufacturing', 'oil-gas', 'pharma', 'agriculture']
  },
  {
    id: 18,
    slug: 'electronics',
    name: 'Electronics & Electrical',
    category: 'Industrial & Manufacturing',
    icon: 'Cpu',
    shortDesc: 'Track PCB surface mount assembly, component serial numbers, warranty RMA tracking, and electronic test benches.',
    tagline: 'High-density SMT manufacturing, component trace, and post-sales RMA.',
    fullDesc: 'Crafted for PCB assembly houses, consumer electronics manufacturers, and electrical switchgear makers. Nirghos ERP provides component reel feeder verification, PCB serial number laser-engraved traceability, automatic test bench data capture, and customer RMA warranty repairs.',
    stats: [
      { label: 'Component Placement Defect Drop', value: '-45%' },
      { label: 'Serial Traceability Time', value: 'Instant' },
      { label: 'RMA Turnaround Days', value: '-60%' },
      { label: 'Component Stock Accuracy', value: '99.8%' }
    ],
    keyFeatures: [
      { title: 'SMT Feeder & Reel Barcoding', desc: 'Prevent incorrect component mounting on PCB pick-and-place lines with feeder scanning.' },
      { title: 'Unit-Level Serial Traceability', desc: 'Track every resistor, chip, and firmware version embedded in each serialized device.' },
      { title: 'Automated Test Station Link', desc: 'Capture voltage, frequency, and functional pass/fail test telemetry directly into the ERP.' },
      { title: 'RMA & Warranty Return Desk', desc: 'Streamline customer warranty claims, component rework logs, and refurb replacements.' }
    ],
    modules: [
      { name: 'SMT & Assembly Production', code: 'SMT', icon: 'Cpu', desc: 'Surface mount line scheduling, job orders, and wave soldering tracking.' },
      { name: 'Component Reel Barcoding', code: 'REL', icon: 'QrCode', desc: 'Tape and reel inventory, moisture sensitivity levels (MSL), and feeder setup.' },
      { name: 'Testing & Calibration Logs', code: 'TST', icon: 'CheckCircle2', desc: 'Automated test bench integration, burn-in test logs, and calibration certs.' },
      { name: 'RMA & Warranty Management', code: 'RMA', icon: 'RotateCcw', desc: 'Customer return authorization, fault diagnosis, and repair invoicing.' },
      { name: 'Firmware & Revision Control', code: 'REV', icon: 'Code', desc: 'Hardware revision compatibility and firmware flashing records.' },
      { name: 'Electrical Switchgear Costing', code: 'SWG', icon: 'Layers', desc: 'Custom panel engineering BOMs, busbar calculations, and wiring costs.' },
      { name: 'Global Component Sourcing', code: 'PUR', icon: 'ShoppingCart', desc: 'Lead time forecasting, distributor price matrices, and obsolescence tracking.' },
      { name: 'Electronics Analytics', code: 'REP', icon: 'BarChart3', desc: 'First-pass yield (FPY), component failure Pareto charts, and warranty expense.' }
    ],
    benefits: [
      'Eliminate costly SMT line setups with automated reel barcode verification.',
      'Pinpoint recalled faulty components in customer hands within minutes.',
      'Reduce warranty losses through verified purchase date and repair history tracking.',
      'Accurately bid on custom electrical panel switchgear engineering tenders.'
    ],
    relatedSlugs: ['manufacturing', 'it-software', 'service-maintenance', 'automobile']
  },
  {
    id: 19,
    slug: 'printing',
    name: 'Printing & Packaging',
    category: 'Industrial & Manufacturing',
    icon: 'Printer',
    shortDesc: 'Calculate paper reel sheet yields, cylinder/die plate masters, offset press runs, corrugated box burst factors, and binding.',
    tagline: 'Flawless print estimation, press efficiency, and packaging conversion.',
    fullDesc: 'Tailored for commercial offset printers, flexible packaging converters, and corrugated carton box plants. Nirghos ERP estimates paper weight, ink coverage, plate creation, die-cutting, folding, and lamination costs to generate competitive quotes with guaranteed profitability.',
    stats: [
      { label: 'Quote Estimation Speed', value: '10x' },
      { label: 'Paper Wastage Reduction', value: '-21%' },
      { label: 'Press Make-ready Time', value: '-35%' },
      { label: 'On-Time Job Completion', value: '98.7%' }
    ],
    keyFeatures: [
      { title: 'Automated Print Job Estimator', desc: 'Instant calculation of sheet size, grain direction, ink consumption, and finishing costs.' },
      { title: 'Paper Reel & Sheet Inventory', desc: 'Reel-to-sheet conversion, GSM/caliper tracking, and mill reel roll damage logging.' },
      { title: 'Die & Printing Plate Archive', desc: 'Cylinder and tooling location tracking, impression lifespan counters, and maintenance.' },
      { title: 'Packaging Burst Factor & Strength', desc: 'Corrugation flute profiles, paper BF/GSM testing, and box compression strength test sheets.' }
    ],
    modules: [
      { name: 'Estimation & Quotation Engine', code: 'EST', icon: 'Calculator', desc: 'Multi-color offset, digital, flexo job costing, and customer quote generation.' },
      { name: 'Pre-Press & Plate Archives', code: 'PLT', icon: 'Layers', desc: 'Die punch repository, plate exposure logs, and artwork version approvals.' },
      { name: 'Press Room & Job Cards', code: 'PRS', icon: 'Printer', desc: 'Make-ready tracking, run speeds, impression counters, and color matching.' },
      { name: 'Post-Press & Binding Operations', code: 'BND', icon: 'Scissors', desc: 'UV varnishing, lamination, die-cutting, folding, and gluing lines.' },
      { name: 'Paper Reel & Stock Control', code: 'PPR', icon: 'Boxes', desc: 'GSM-wise paper ledger, reel diameter calculations, and waste trim resale.' },
      { name: 'Corrugated Box Conversion', code: 'BOX', icon: 'Package', desc: 'Flute combinations, ply calculation, slotting, and stitching management.' },
      { name: 'Finished Carton Dispatch', code: 'BIL', icon: 'Truck', desc: 'Bundle counting, palletization manifests, and e-invoices.' },
      { name: 'Press Productivity Analytics', code: 'REP', icon: 'BarChart3', desc: 'OEE per printing press, ink cost per impression, and quote win ratios.' }
    ],
    benefits: [
      'Stop under-quoting print jobs with algorithmic paper, ink, and labor estimation.',
      'Reduce make-ready scrap and machine idle time between press runs.',
      'Track valuable dies and printing plates to prevent lost tooling and remanufacturing.',
      'Deliver custom packaging orders with exact burst factor quality certification.'
    ],
    relatedSlugs: ['manufacturing', 'textile', 'chemical', 'retail']
  },
  {
    id: 20,
    slug: 'furniture',
    name: 'Furniture & Interior',
    category: 'Industrial & Manufacturing',
    icon: 'Armchair',
    shortDesc: 'Automate modular panel optimization, wood veneer batching, upholstery fabric cutting, 3D project estimation, and on-site assembly.',
    tagline: 'Bespoke interior craftsmanship backed by modular manufacturing systems.',
    fullDesc: 'Built for modular kitchen manufacturers, office furniture factories, and turnkey interior design studios. Nirghos ERP links CAD dimension imports, panel nesting software, hardware fittings inventory, carpenter assembly schedules, and client site handover checklists.',
    stats: [
      { label: 'Plywood & Board Nesting Yield', value: '+24%' },
      { label: 'On-Site Fitting Errors', value: '-72%' },
      { label: 'Turnkey Project Delivery Speed', value: '+30%' },
      { label: 'Hardware Stock Accuracy', value: '99.5%' }
    ],
    keyFeatures: [
      { title: 'Board Nesting & Cut-list Sync', desc: 'Import dimensions to optimize MDF/plywood cutting, minimizing board wastage.' },
      { title: 'Hardware & Fittings Bill of Material', desc: 'Track hinges, drawer channels, handles, and screws for every cabinet unit.' },
      { title: 'Site Measurement & Snagging', desc: 'Mobile site measurement recording, progress photos, and snag-list resolution.' },
      { title: 'Carpentry & Assembly Job Cards', desc: 'Edge-banding, CNC router routing, flat-pack carton labeling, and assembly guides.' }
    ],
    modules: [
      { name: 'Modular Cabinet Designer Sync', code: 'CAB', icon: 'Layout', desc: 'Cabinet dimension parametric calculation and automatic cut-list output.' },
      { name: 'Wood & Board Inventory', code: 'WOD', icon: 'Layers', desc: 'Plywood, veneer sheets, laminates, and solid timber seasoning records.' },
      { name: 'Hardware & Fittings Warehouse', code: 'HRD', icon: 'Wrench', desc: 'Channel locks, hinges, edge-band tapes, and adhesive procurement.' },
      { name: 'Factory Production Floor', code: 'FCT', icon: 'Cpu', desc: 'Panel saw cutting, edge-banding line, CNC drilling, and trial assembly.' },
      { name: 'Upholstery & Fabric Cutting', code: 'UPH', icon: 'Scissors', desc: 'Foam density, leather/fabric meterage, and stitching job tracking.' },
      { name: 'Flat-Pack Packaging & Labels', code: 'PKG', icon: 'Box', desc: 'Barcode labeling for each panel and hardware packet for easy site assembly.' },
      { name: 'On-Site Installation Team', code: 'INS', icon: 'UserCheck', desc: 'Site carpenter rosters, progress photos, and client completion sign-off.' },
      { name: 'Turnkey Interior Analytics', code: 'REP', icon: 'BarChart3', desc: 'Project cost per square foot, material wastage, and installation time.' }
    ],
    benefits: [
      'Dramatically cut board wastage through optimized nesting cut-lists.',
      'Eliminate on-site assembly confusion with flat-pack serialized panel tags.',
      'Ensure complete hardware kits accompany every kitchen and wardrobe shipment.',
      'Keep client interior renovation projects strictly on budget and on schedule.'
    ],
    relatedSlugs: ['construction', 'manufacturing', 'retail', 'service-maintenance']
  },
  {
    id: 21,
    slug: 'ecommerce',
    name: 'E-commerce & Distribution',
    category: 'Trade & Commerce',
    icon: 'ShoppingBag',
    shortDesc: 'Sync multi-channel marketplaces (Amazon, Shopify), automated courier rate shopping, barcode pick-pack-ship, and RTO return tracking.',
    tagline: 'High-velocity order fulfillment, zero stockouts, and seamless marketplace sync.',
    fullDesc: 'Tailored for Direct-to-Consumer (D2C) brands, omnichannel retailers, and Amazon/Shopify sellers. Nirghos ERP synchronizes orders across multiple sales channels, automates 3PL courier selection based on cheapest rate, provides zone-wise barcode picking, and manages RTO returns.',
    stats: [
      { label: 'Order Dispatch Capacity', value: '15,000 / day' },
      { label: 'Picking Accuracy', value: '99.95%' },
      { label: 'RTO Return Processing Time', value: '-65%' },
      { label: 'Shipping Cost Savings', value: '-18%' }
    ],
    keyFeatures: [
      { title: 'Multi-Channel Marketplace Sync', desc: 'Two-way inventory and order sync with Amazon, Shopify, WooCommerce, and Flipkart.' },
      { title: 'Smart Courier Rate Shopping', desc: 'Automate courier allocation (FedEx, BlueDart, Delhivery) for fastest delivery at lowest cost.' },
      { title: 'Wave & Zone Barcode Picking', desc: 'Direct warehouse staff along the shortest pick-path with handheld barcode scanners.' },
      { title: 'RTO & Return Quality Audit', desc: 'Process customer returns, grade item condition, and auto-issue refunds or restock.' }
    ],
    modules: [
      { name: 'Marketplace Channel Hub', code: 'CHN', icon: 'Globe', desc: 'Centralized order funnel, inventory lock, and price synchronization.' },
      { name: 'Order Processing & Allocation', code: 'ORD', icon: 'ShoppingBag', desc: 'Fraud check, address validation, inventory reservation, and invoice creation.' },
      { name: 'Warehouse Pick-Pack-Ship', code: 'WMS', icon: 'Boxes', desc: 'Batch pick slips, packing station verification, and thermal shipping label print.' },
      { name: 'Courier API & Tracking', code: 'SHP', icon: 'Truck', desc: 'Automated AWB generation, manifest dispatch, and live shipment webhooks.' },
      { name: 'RTO & Customer Returns Desk', code: 'RTO', icon: 'RotateCcw', desc: 'Return QC inspection, refurbishment tag, and refund authorization.' },
      { name: 'Bundling & Combo Kits', code: 'BND', icon: 'PackagePlus', desc: 'Virtual bundles, promotional hampers, and component stock auto-depletion.' },
      { name: 'D2C Customer Profiles', code: 'CRM', icon: 'Users', desc: 'Customer lifetime value (LTV), repeat order frequency, and ticket support.' },
      { name: 'E-commerce BI & Unit Economics', code: 'REP', icon: 'BarChart3', desc: 'CAC vs LTV, gross margin after shipping/ad spend, and channel profit.' }
    ],
    benefits: [
      'Stop marketplace penalties for overselling with instant real-time inventory sync.',
      'Slash fulfillment labor costs with optimized wave picking routes.',
      'Cut courier expenses by automatically choosing the lowest-rate carrier per pincode.',
      'Recover value on returned products with structured RTO inspection and restocking.'
    ],
    relatedSlugs: ['retail', 'trading', 'logistics', 'export-import']
  },
  {
    id: 22,
    slug: 'export-import',
    name: 'Export & Import',
    category: 'Trade & Commerce',
    icon: 'Ship',
    shortDesc: 'Manage LC documents, customs shipping bills, container tracking, duty drawback calculations, and foreign currency hedges.',
    tagline: 'Frictionless international trade, customs compliance, and forex management.',
    fullDesc: 'Engineered for foreign trade houses, merchant exporters, clearing & forwarding agents, and container logistics managers. Nirghos ERP handles letters of credit (LC), multi-currency commercial invoices, bill of lading (BL), packing lists, customs duty tariffs, and export incentive claims.',
    stats: [
      { label: 'Documentation Error Rate', value: 'Zero' },
      { label: 'Customs Clearance Speed', value: '2.5x' },
      { label: 'Forex Loss Prevention', value: '99.4%' },
      { label: 'Duty Drawback Realization', value: '100%' }
    ],
    keyFeatures: [
      { title: 'International Trade Documentation', desc: 'Auto-generate Commercial Invoices, Packing Lists, Certificates of Origin, and COO.' },
      { title: 'Letter of Credit (LC) Tracking', desc: 'Monitor LC expiry dates, document discrepancy checks, and bank negotiation status.' },
      { title: 'Customs & Duty Tariff Engine', desc: 'HS code tariff lookup, anti-dumping duties, IGST calculations, and Bill of Entry.' },
      { title: 'Forex & Currency Hedging', desc: 'Multi-currency ledger, realized/unrealized forex gain/loss, and forward contract locks.' }
    ],
    modules: [
      { name: 'Export Order & LC Desk', code: 'EXP', icon: 'FileText', desc: 'Buyer purchase contracts, Letter of Credit terms, and proforma invoices.' },
      { name: 'Shipping Documents Generator', code: 'DOC', icon: 'FileSpreadsheet', desc: 'Commercial invoices, packing lists, BL/AWB, and consular documentation.' },
      { name: 'Customs Clearing & Forwarding', code: 'CUS', icon: 'ShieldCheck', desc: 'Bill of Entry, Shipping Bill tracking, and CHA agent coordination.' },
      { name: 'Container & Freight Booking', code: 'CNT', icon: 'Ship', desc: 'FCL/LCL ocean container bookings, vessel schedules, and demurrage logs.' },
      { name: 'Duty Drawback & Incentives', code: 'DRW', icon: 'Award', desc: 'RoDTEP, RoSCTL export benefit claims, and government rebate ledger.' },
      { name: 'Multi-Currency Forex Ledger', code: 'FRX', icon: 'DollarSign', desc: 'Exchange rate fluctuations, forward contracts, and BRC/e-BRC closure.' },
      { name: 'Import Consignment Costing', code: 'IMP', icon: 'Anchor', desc: 'Landed cost calculation including ocean freight, customs duty, and port fees.' },
      { name: 'Exim Analytics & Compliance', code: 'REP', icon: 'BarChart3', desc: 'Country-wise trade volume, container turnaround, and export profitability.' }
    ],
    benefits: [
      'Eliminate costly port demurrage fees with timely, error-free documentation.',
      'Claim 100% of entitled government export drawbacks and incentive rebates.',
      'Calculate true landed import costs down to the individual SKU level.',
      'Shield trade operating profits from violent foreign exchange currency swings.'
    ],
    relatedSlugs: ['trading', 'logistics', 'manufacturing', 'textile']
  },
  {
    id: 23,
    slug: 'oil-gas',
    name: 'Oil & Gas',
    category: 'Energy & Resources',
    icon: 'Fuel',
    shortDesc: 'Monitor pipeline telemetry, fuel terminal bunkering, hazardous safety permits, refinery yield, and calibration dip records.',
    tagline: 'Enterprise safety, hydrocarbons accountability, and pipeline logistics.',
    fullDesc: 'Crafted for petroleum refineries, fuel terminal depots, pipeline operators, and oilfield service contractors. Nirghos ERP ensures strict hydrocarbons accounting, temperature-corrected density reconciliation, Work Permit to Work (PTW) safety management, and pipeline pump station telemetry.',
    stats: [
      { label: 'Hydrocarbon Loss Cut', value: '-42%' },
      { label: 'Work Safety Incidents', value: 'Zero LTI' },
      { label: 'Terminal Loading Speed', value: '+35%' },
      { label: 'Asset Uptime Reliability', value: '99.7%' }
    ],
    keyFeatures: [
      { title: 'Hydrocarbon Mass Balance', desc: 'Reconcile crude intake vs refined fractions factoring temperature and API gravity.' },
      { title: 'Electronic Permit to Work (e-PTW)', desc: 'Hot work, confined space, and height permits with mandatory safety checklists.' },
      { title: 'Tank Farm Dip & Bunkering', desc: 'Automated tank gauging (ATG) sync, water cut bottom drainage, and ship bunkering.' },
      { title: 'Pipeline & Valve Preventive Maintenance', desc: 'Corrosion coupon monitoring, pigging logs, valve testing, and compressor telemetry.' }
    ],
    modules: [
      { name: 'Hydrocarbon Accounting', code: 'HYD', icon: 'Droplets', desc: 'Crude and refined liquid mass balance, volume correction, and evaporation loss.' },
      { name: 'Permit to Work & EHS (Safety)', code: 'PTW', icon: 'ShieldAlert', desc: 'Digital hot/cold work permits, gas testing records, and safety briefings.' },
      { name: 'Terminal Loading Automation', code: 'TRM', icon: 'Fuel', desc: 'Gantry loading arm sync, tanker truck grounding checks, and automated receipts.' },
      { name: 'Tank Farm Inventory', code: 'TNK', icon: 'Layers', desc: 'Floating roof tank levels, ASTM volume correction tables, and water dip logs.' },
      { name: 'Pipeline Inspection & Pigging', code: 'PIG', icon: 'Activity', desc: 'Smart pigging data logs, cathodic protection voltage, and pipeline pressure.' },
      { name: 'Oilfield Equipment & Rigs', code: 'RIG', icon: 'Wrench', desc: 'Drill string inspection, blowout preventer (BOP) tests, and rig crew roster.' },
      { name: 'Fuel Sales & Statutory Billing', code: 'BIL', icon: 'Receipt', desc: 'Excise duty, VAT/GST petroleum invoices, and bunkering delivery notes.' },
      { name: 'Oil & Gas Operational Intelligence', code: 'REP', icon: 'BarChart3', desc: 'Depot throughput, product loss trends, refinery gross margins, and safety KPIs.' }
    ],
    benefits: [
      'Stop fuel loss and pilferage with automated mass balance and dip reconciliation.',
      'Enforce zero-compromise site safety using digital electronic Permit to Work.',
      'Speed up petroleum road tanker gantry turnaround times dramatically.',
      'Keep multi-million dollar drilling and pipeline assets at peak operating uptime.'
    ],
    relatedSlugs: ['chemical', 'logistics', 'manufacturing', 'security-facility']
  },
  {
    id: 24,
    slug: 'security-facility',
    name: 'Security & Facility Management',
    category: 'Services & Technology',
    icon: 'Shield',
    shortDesc: 'Automate guard shift rostering, QR patrol checkpoints, client billing per site, janitorial consumables, and visitor badge kiosks.',
    tagline: 'Reliable security deployment, guard attendance, and facility upkeep.',
    fullDesc: 'Tailored for private security agencies, corporate facility management companies, and janitorial service providers. Nirghos ERP streamlines guard shift rostering, QR code mobile patrol verification, biometric site attendance, uniform/kit deductions, and contract billing per man-hour.',
    stats: [
      { label: 'Guard Patrol Compliance', value: '99.4%' },
      { label: 'Billing Discrepancies Cut', value: '-92%' },
      { label: 'Guard Absenteeism Drop', value: '-34%' },
      { label: 'Client Contract Renewal', value: '+40%' }
    ],
    keyFeatures: [
      { title: 'Smart Guard Rostering & Shift Sync', desc: 'Auto-schedule day/night shifts, overtime limits, reliever assignments, and site quotas.' },
      { title: 'QR Patrol Wand & Incident Logging', desc: 'Guards scan physical QR tags on patrol routes; system flags missed checkpoint scans.' },
      { title: 'Site Biometric & Geo-Attendance', desc: 'Face recognition or geofenced smartphone check-in preventing buddy punching.' },
      { title: 'Contract Billing & Wage Compliance', desc: 'Automate client billing based on man-days, minimum wage statutes, PF, and ESI.' }
    ],
    modules: [
      { name: 'Guard Shift Rostering', code: 'RST', icon: 'CalendarDays', desc: 'Site-wise post allocations, shift rotation, reliever standby, and leave approval.' },
      { name: 'QR Patrol Tour Verification', code: 'PTR', icon: 'QrCode', desc: 'Checkpoint scan logs, patrol route delays, and mobile incident reporting.' },
      { name: 'Site Attendance & Biometrics', code: 'ATT', icon: 'UserCheck', desc: 'Geofenced mobile clock-in, overtime validation, and daily muster roll.' },
      { name: 'Janitorial & Facility Services', code: 'FAC', icon: 'Sparkles', desc: 'Cleaning task checklists, washroom hygiene audits, and chemical inventory.' },
      { name: 'Uniform & Equipment Issuance', code: 'EQP', icon: 'Shield', desc: 'Guard uniform kits, baton, metal detector issuance, and salary recovery.' },
      { name: 'Client Contracts & Man-hour Billing', code: 'BIL', icon: 'Receipt', desc: 'Rates per guard rank, overtime multiplier, and statutory compliance attachments.' },
      { name: 'Statutory Compliance (PF/ESI/Wage)', code: 'CMP', icon: 'Scale', desc: 'Minimum wage audits, monthly statutory challans, and labor law registers.' },
      { name: 'Facility Service Quality BI', code: 'REP', icon: 'BarChart3', desc: 'Client SLA compliance, guard turnover rates, and site margin analysis.' }
    ],
    benefits: [
      'Eliminate client billing disputes with verified biometric muster rolls and patrol logs.',
      'Ensure 100% statutory labor compliance to avoid regulatory penalties.',
      'Verify that night patrols are actively conducted through GPS & QR checkpoint timestamps.',
      'Control janitorial and housekeeping consumables usage across multiple commercial sites.'
    ],
    relatedSlugs: ['service-maintenance', 'construction', 'it-software', 'hospital']
  },
  {
    id: 25,
    slug: 'professional-services',
    name: 'Professional Services',
    category: 'Services & Technology',
    icon: 'Briefcase',
    shortDesc: 'Streamline legal/accounting client retainers, consultation billable hours, project deliverables, document compliance, and trust accounts.',
    tagline: 'Elevate advisory practices, client trust, and partner billable performance.',
    fullDesc: 'Crafted for law firms, chartered accountants, management consultants, and architectural practices. Nirghos ERP manages client case files, hourly and fixed-fee engagement letters, trust escrow accounts, automated billing schedules, conflict checks, and secure client document portals.',
    stats: [
      { label: 'Partner Billable Realization', value: '+33%' },
      { label: 'Billing Cycle Turnaround', value: '3x Faster' },
      { label: 'Conflict Check Speed', value: '< 2 min' },
      { label: 'Client Satisfaction (NPS)', value: '82' }
    ],
    keyFeatures: [
      { title: 'Matter & Engagement File Ledger', desc: 'Central repository of court matters, audit assignments, client documents, and deadlines.' },
      { title: 'Conflict of Interest Checks', desc: 'Instant search across active clients, counterparties, and matters to avoid legal conflicts.' },
      { title: 'Automated Billable Time Capture', desc: 'Track consultation calls, drafting hours, and out-of-pocket expenses per client matter.' },
      { title: 'Trust & Escrow Accounting', desc: 'Strict separation of client retainer trust funds from operating firm revenue accounts.' }
    ],
    modules: [
      { name: 'Matter & Engagement Desk', code: 'MTR', icon: 'FolderKanban', desc: 'Engagement letters, scope definition, team assignment, and milestone status.' },
      { name: 'Time & Expense Billing', code: 'TIM', icon: 'Clock', desc: 'Granular billable increments, expense disbursement logs, and invoice generation.' },
      { name: 'Trust & Retainer Accounting', code: 'TRS', icon: 'Landmark', desc: 'Client advance funds, drawdowns upon invoice approval, and audit statements.' },
      { name: 'Document Portal & E-Sign', code: 'DOC', icon: 'FileCheck', desc: 'Secure document exchange, version control, and legally binding digital signatures.' },
      { name: 'Statutory Deadlines & Calendar', code: 'CAL', icon: 'Calendar', desc: 'Court appearance dates, tax filing statutory deadlines, and reminder alerts.' },
      { name: 'Conflict of Interest Engine', code: 'CNF', icon: 'ShieldCheck', desc: 'Automated search across entity directors, parties, and past engagements.' },
      { name: 'Client Invoicing & Statements', code: 'BIL', icon: 'Receipt', desc: 'Itemized fee notes, tax deduction (TDS) receipts, and automated payment links.' },
      { name: 'Firm Performance & Partner BI', code: 'REP', icon: 'BarChart3', desc: 'Realization rate per partner, practice area profitability, and collection aging.' }
    ],
    benefits: [
      'Stop unbilled consultation hours leaking through easy one-click mobile time recording.',
      'Maintain pristine trust and escrow accounting compliance with zero audit risk.',
      'Accelerate fee collection with professional, transparent, itemized client fee notes.',
      'Enhance client confidence with secure digital document delivery and collaboration.'
    ],
    relatedSlugs: ['it-software', 'service-maintenance', 'trading', 'security-facility']
  }
];

// Helper functions for easy querying
export const getIndustryBySlug = (slug) => {
  return industriesData.find((item) => item.slug === slug);
};

export const getRelatedIndustries = (slugs = []) => {
  return industriesData.filter((item) => slugs.includes(item.slug));
};

