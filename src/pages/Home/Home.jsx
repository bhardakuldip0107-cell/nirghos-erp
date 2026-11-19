import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  BarChart3, 
  Zap, 
  Boxes, 
  Users, 
  Landmark, 
  Cpu, 
  Building2, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  LayoutDashboard,
  Search,
  Globe,
  Award,
  Clock,
  Check,
  Star,
  Activity,
  ArrowUpRight,
  Calculator,
  Shirt,
  Gem,
  MessageSquare,
  Store,
  UtensilsCrossed,
  Truck,
  Play,
  ShoppingBag
} from 'lucide-react';
import { industriesData, industryCategories } from '../../data/industries';
import { coreFeatures } from '../../data/modules';
import IndustryCard from '../../components/IndustryCard/IndustryCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import DemoModal from '../../components/common/DemoModal';
import DynamicIcon from '../../components/common/DynamicIcon';
import AnimatedCounter from '../../components/common/AnimatedCounter';
import { useDemo } from '../../context/DemoContext';

export const Home = () => {
  const { isAuthenticated, profile } = useDemo();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeTabFeature, setActiveTabFeature] = useState(coreFeatures[0].id);
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [sliderMode, setSliderMode] = useState('categories'); // 'categories' | 'brands'
  const [activeErpProduct, setActiveErpProduct] = useState('gsoft');
  const [productSlideIndex, setProductSlideIndex] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);

  // Hero interactive sector switcher preview (defaults to registered sector if authenticated)
  const [heroSector, setHeroSector] = useState(profile?.slug || 'manufacturing');

  React.useEffect(() => {
    if (isAuthenticated && profile?.slug) {
      setHeroSector(profile.slug);
    }
  }, [isAuthenticated, profile?.slug]);

  const navigate = useNavigate();

  // Filter industries based on category and search query
  const filteredIndustries = industriesData.filter((ind) => {
    const matchesCategory = selectedCategory === 'All' || ind.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ind.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Display only 8 cards (2 lines of 4 on lg+) by default unless user clicks "View All"
  const displayedIndustries = showAllIndustries ? filteredIndustries : filteredIndustries.slice(0, 8);

  const activeFeatureObj = coreFeatures.find(f => f.id === activeTabFeature) || coreFeatures[0];

  // Dynamic hero sector previews
  const heroPreviews = {
    manufacturing: {
      title: 'Precision Factory Automation',
      stat1: { label: 'Active Work Orders', val: '184 Batch Jobs', sub: '99.2% on-time routing' },
      stat2: { label: 'Machine OEE Uptime', val: '94.8%', sub: '+3.2% vs last month' },
      stat3: { label: 'Scrap & Waste Cut', val: '-28%', sub: 'Zero-defect quality gate' },
      stat4: { label: 'Monthly Throughput', val: '$2,845,600', sub: 'Multi-level BOM costed' },
      modules: ['Production Master', 'Multi-Level BOM', 'Shop Floor QC', 'Inventory FIFO', 'Worker Roster']
    },
    hospital: {
      title: 'Clinical & Patient Precision',
      stat1: { label: 'Patients Treated Today', val: '382 Patients', sub: 'OPD 312 • IPD 70' },
      stat2: { label: 'Bed Occupancy', val: '88.5%', sub: '176 / 200 Beds occupied' },
      stat3: { label: 'TPA Cashless Claims', val: '98.5%', sub: 'Avg settlement 48 hours' },
      stat4: { label: 'Daily Hospital Billing', val: '$148,200', sub: 'Pharmacy + Diagnostic sync' },
      modules: ['OPD Token Queue', 'Electronic Health Records', 'Bed Matrix', 'In-House Pharmacy', 'Diagnostic LIMS']
    },
    retail: {
      title: 'High-Velocity Omnichannel POS',
      stat1: { label: 'Checkout Speed', val: '4.2 Seconds', sub: 'Barcode thermal bill' },
      stat2: { label: 'Daily Counter Revenue', val: '$84,500', sub: 'Across 5 branch stores' },
      stat3: { label: 'Loyalty Retention', val: '+41%', sub: '18,450 active members' },
      stat4: { label: 'Inventory Holding Cost', val: '-22%', sub: 'Automated shelf reorders' },
      modules: ['Touch POS Register', 'Barcode Printing', 'Promotional Bundles', 'Multi-Godown Stock', 'Customer Loyalty']
    },
    logistics: {
      title: 'Fleet & Transit Dispatch',
      stat1: { label: 'Active Fleet in Transit', val: '98 Heavy Trucks', sub: 'Live GPS geofenced' },
      stat2: { label: 'On-Time Consignments', val: '98.9%', sub: 'Avg TAT 36 hours' },
      stat3: { label: 'Fuel Loss & Theft Cut', val: '-26%', sub: 'FASTag & tank dip sync' },
      stat4: { label: 'Freight Billing Cycle', val: 'Instant POD', sub: 'Auto e-way bill generation' },
      modules: ['Lorry Receipt (LR)', 'Fleet GPS Tracking', 'FASTag Ledger', 'Driver Advance', 'Detention Billing']
    },
    'it-software': {
      title: 'Software Agility & Utilization',
      stat1: { label: 'Billable Utilization', val: '86.4%', sub: '142 developers assigned' },
      stat2: { label: 'Monthly Recurring (MRR)', val: '$560,000', sub: 'ARR: $6.72 Million' },
      stat3: { label: 'Unbilled Time Leakage', val: '-88%', sub: 'Timesheets auto-invoiced' },
      stat4: { label: 'Active Sprints', val: '24 Projects', sub: '92% milestone success' },
      modules: ['Agile Sprints', 'Billable Timesheets', 'Milestone Invoicing', 'SaaS MRR Engine', 'IT Hardware Asset']
    }
  };

  const currentHeroPreview = heroPreviews[heroSector] || heroPreviews.manufacturing;

  // Trusted Client Brand Logos for the Right-to-Left Marquee Slider (Exact match to screenshot)
  const brandLogos = [
    {
      id: 'shreeman',
      name: 'Shreeman',
      render: () => (
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl sm:text-2xl font-black text-[#d32f2f] tracking-tight font-serif leading-none">
            Shreeman
          </span>
          <span className="text-[9px] text-slate-500 italic tracking-wider mt-0.5 font-serif">
            Elegance has a name
          </span>
        </div>
      )
    },
    {
      id: 'samor',
      name: 'SAMOR GOLD',
      render: () => (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center text-lg sm:text-xl font-black text-slate-900 font-serif tracking-widest leading-none">
            <span>SAM</span>
            <span className="relative inline-flex items-center justify-center w-4 h-4 mx-0.5">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-amber-500 inline-block"></span>
              <span className="absolute -top-1 w-1.5 h-1.5 bg-amber-400 rotate-45"></span>
            </span>
            <span>R</span>
          </div>
          <span className="text-[8px] sm:text-[9px] font-black tracking-[0.3em] text-amber-600 mt-0.5">
            G O L D
          </span>
        </div>
      )
    },
    {
      id: 'deepkala',
      name: 'DEEPKALA heritage',
      render: () => (
        <div className="flex items-baseline gap-1">
          <span className="text-base sm:text-lg font-black text-[#e53935] tracking-tight font-serif uppercase">
            DEEPKALA
          </span>
          <span className="text-sm sm:text-base font-bold text-[#00acc1] font-sans italic -ml-0.5">
            heritage
          </span>
        </div>
      )
    },
    {
      id: 'fritzberg',
      name: 'FRITZBERG',
      render: () => (
        <div className="bg-[#d32f2f] px-3.5 py-1.5 rounded-xs flex flex-col items-center shadow-2xs border-b-2 border-slate-700">
          <div className="w-5 h-0.5 bg-white mb-0.5 transform -skew-x-12"></div>
          <span className="text-xs sm:text-sm font-black text-white tracking-widest italic font-sans leading-none">
            FRITZBËRG
          </span>
        </div>
      )
    },
    {
      id: 'laavian',
      name: 'laavian',
      render: () => (
        <div className="flex items-center">
          <span className="text-xl sm:text-2xl font-black text-[#f43f5e] tracking-tight font-sans">
            laavīan
          </span>
          <span className="text-[8px] text-slate-400 -mt-2 ml-0.5">™</span>
        </div>
      )
    },
    {
      id: 'sachins',
      name: "SACHIN'S Men's World",
      render: () => (
        <div className="flex flex-col items-center text-center">
          <span className="text-sm sm:text-base font-black text-[#ea580c] tracking-wider font-sans leading-none">
            SACHIN'S
          </span>
          <span className="text-[9px] font-semibold text-slate-600 tracking-wide mt-0.5">
            Men's World
          </span>
        </div>
      )
    },
    {
      id: 'sia',
      name: 'SIA',
      render: () => (
        <div className="bg-[#b91c1c] px-4 py-1.5 rounded-xs border-2 border-white/60 shadow-2xs flex items-center justify-center">
          <span className="text-xs sm:text-sm font-black text-white tracking-widest font-sans">
            SIA
          </span>
        </div>
      )
    },
    {
      id: 'navbharat',
      name: 'NAVBHARAT',
      render: () => (
        <div className="flex flex-col items-center">
          <div className="flex gap-0.5 mb-1">
            <div className="w-2.5 h-1 bg-cyan-500 rounded-2xs"></div>
            <div className="w-2.5 h-1 bg-pink-500 rounded-2xs"></div>
            <div className="w-2.5 h-1 bg-amber-400 rounded-2xs"></div>
          </div>
          <span className="text-xs sm:text-sm font-black text-slate-900 tracking-wider font-sans">
            NAVBHARAT
          </span>
        </div>
      )
    },
    {
      id: 'osomengel',
      name: 'osomengel',
      render: () => (
        <div className="bg-[#f59e0b] px-3.5 py-1.5 rounded-xs flex items-center gap-1.5 shadow-2xs">
          <div className="w-2.5 h-2.5 bg-slate-900 rotate-45 shrink-0"></div>
          <span className="text-xs sm:text-sm font-black text-slate-900 tracking-wide font-sans">
            osomengel
          </span>
        </div>
      )
    },
    {
      id: 'sequinze',
      name: 'SEQUINZE',
      render: () => (
        <div className="bg-[#881337] px-3.5 py-1.5 rounded-xs text-center shadow-2xs">
          <span className="text-xs sm:text-sm font-black text-white tracking-widest font-serif block leading-none">
            SEQUINZE
          </span>
          <span className="text-[6.5px] text-rose-200 tracking-widest uppercase block mt-0.5">
            WHERE STYLE FINDS SOUL
          </span>
        </div>
      )
    }
  ];

  // 25 Dedicated Business Categories Theme & Logo Badges Map
  const categoryThemeMap = {
    manufacturing: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', badge: 'Discrete & Process' },
    trading: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', badge: 'B2B Wholesale' },
    retail: { bg: 'bg-orange-50', text: 'text-[#f25c05]', border: 'border-orange-200', badge: 'POS & Billing' },
    construction: { bg: 'bg-yellow-50', text: 'text-yellow-800', border: 'border-yellow-200', badge: 'Real Estate & EPC' },
    automobile: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', badge: 'Auto & Spare Parts' },
    textile: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', badge: 'Apparel & Fabric' },
    pharma: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', badge: 'FDA & Batch Trace' },
    'food-beverage': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', badge: 'Food & Processing' },
    logistics: { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200', badge: 'Fleet & Dispatch' },
    education: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', badge: 'Campus & Academy' },
    hospital: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', badge: 'HMS & Clinical' },
    'hotel-restaurant': { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200', badge: 'Hospitality & KOT' },
    'it-software': { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200', badge: 'SaaS & Billing' },
    'service-maintenance': { bg: 'bg-cyan-50', text: 'text-cyan-800', border: 'border-cyan-200', badge: 'Field AMC & Jobs' },
    agriculture: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', badge: 'Agro & Farming' },
    jewellery: { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-300', badge: 'Gold, Diamond & RFID' },
    chemical: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', badge: 'Formulas & MSDS' },
    electronics: { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-200', badge: 'PCB & Hardware' },
    printing: { bg: 'bg-fuchsia-50', text: 'text-fuchsia-700', border: 'border-fuchsia-200', badge: 'Packaging & Offset' },
    furniture: { bg: 'bg-stone-100', text: 'text-stone-800', border: 'border-stone-300', badge: 'Woodwork & Modular' },
    ecommerce: { bg: 'bg-orange-50', text: 'text-[#f25c05]', border: 'border-orange-200', badge: 'Omnichannel D2C' },
    'export-import': { bg: 'bg-sky-50', text: 'text-sky-800', border: 'border-sky-200', badge: 'Customs & Port EDI' },
    'oil-gas': { bg: 'bg-amber-50', text: 'text-amber-900', border: 'border-amber-300', badge: 'Fuel & Pipeline' },
    'security-facility': { bg: 'bg-slate-100', text: 'text-slate-800', border: 'border-slate-300', badge: 'Facility & Guards' },
    'professional-services': { bg: 'bg-teal-50', text: 'text-teal-800', border: 'border-teal-200', badge: 'Audit & Consulting' }
  };

  // 7 Core Flagship ERP Products (Matching User Screenshot with Sharp Name & Icon)
  const erpProducts = [
    {
      id: 'gsoft',
      name: 'Gsoft ERP',
      icon: Shirt,
      iconBg: '#fee2e2',
      iconColor: '#dc2626',
      badge: 'Apparel & Footwear',
      renderLogo: () => (
        <div className="flex items-center gap-1 font-sans">
          <span className="text-base sm:text-lg font-black text-[#dc2626] leading-none">G</span>
          <span className="text-sm sm:text-base font-bold text-[#0060b9] leading-none">soft</span>
          <span className="text-[9px] font-black uppercase px-1 py-0.2 rounded bg-red-100 text-red-600 border border-red-200 ml-0.5">ERP</span>
        </div>
      ),
      heading: 'Apparel-Lifestyle and Footwear Industry',
      desc: 'G-Soft ERP delivers a complete, user-friendly ERP Software for the Apparel-Lifestyle and Footwear Industry with POS, Inventory, Accounting, CRM, BI Reports, Web Reports and Mobile Apps.',
      monitorCaption: 'Gsoft Desktop ERP Dashboard',
      slides: [
        'Gsoft Desktop ERP Dashboard',
        'Gsoft Multi-Size & Matrix POS Billing',
        'Gsoft Real-time Warehouse Inventory'
      ],
      link: '/industries/textile',
      categorySlug: 'textile',
      bulletPoints: [
        'Multi-Size & Color Matrix Management',
        'Barcode & RFID Tag Generation',
        'Fast POS Billing with Loyalty Points',
        'Central Head-Office & Multi-Store Sync'
      ]
    },
    {
      id: 'jsoft',
      name: 'Jsoft ERP',
      icon: Gem,
      iconBg: '#fef3c7',
      iconColor: '#d97706',
      badge: 'Jewellery & Diamond',
      renderLogo: () => (
        <div className="flex items-center gap-1 font-sans">
          <span className="text-base sm:text-lg font-black text-[#ea580c] leading-none">J</span>
          <span className="text-sm sm:text-base font-bold text-[#0060b9] leading-none">soft</span>
          <span className="text-[9px] font-black uppercase px-1 py-0.2 rounded bg-orange-100 text-orange-600 border border-orange-200 ml-0.5">ERP</span>
        </div>
      ),
      heading: 'Jewellery and Diamond Industry',
      desc: 'J-Soft ERP is a comprehensive, specialized Jewellery ERP Software covering Retail, Wholesale, Karigar/Goldsmith Job Work, Gold Scheme, Barcode/RFID, and Real-Time Bullion Rate Accounting.',
      monitorCaption: 'Jsoft Jewellery ERP & POS Console',
      slides: [
        'Jsoft Jewellery ERP & POS Console',
        'Jsoft Karigar & Job Work Tracking',
        'Jsoft Live Gold & Bullion Rate Ledger'
      ],
      link: '/industries/jewellery',
      categorySlug: 'jewellery',
      bulletPoints: [
        'Live Bullion & Daily Gold/Silver Rate Fixation',
        'Melting, Wastage & Purity Touch Loss Calculations',
        'High-Speed RFID Tray Scanning for Stock Audits',
        'Government Hallmark & HUID Statutory Compliance'
      ]
    },
    {
      id: 'bizpro',
      name: 'Alpha BIZPRO',
      icon: Cpu,
      iconBg: '#dbeafe',
      iconColor: '#2563eb',
      badge: 'Trading & Distribution',
      renderLogo: () => (
        <div className="flex flex-col text-left font-sans">
          <span className="text-xs sm:text-sm font-black text-[#0060b9] leading-none">Alpha</span>
          <span className="text-[9px] font-black uppercase tracking-wider text-slate-800 leading-none mt-0.5">BIZPRO</span>
        </div>
      ),
      heading: 'Trading, Distribution & Wholesale ERP',
      desc: 'Alpha BIZPRO provides end-to-end supply chain distribution, multi-warehouse stock management, automated credit limits, e-way bill generation, and GST compliance for high-volume traders.',
      monitorCaption: 'Alpha BIZPRO Supply Chain & Distribution Suite',
      slides: [
        'Alpha BIZPRO Supply Chain & Distribution Suite',
        'Alpha BIZPRO Multi-Warehouse Bin Control',
        'Alpha BIZPRO Automated E-Way Bill & GST'
      ],
      link: '/industries/trading',
      categorySlug: 'trading',
      bulletPoints: [
        'Tier-wise Customer Rate Contracts & Schemes',
        'Automated Receivables & Ageing Credit Lock',
        'Batch-wise FIFO Inventory & Expiry Alerts',
        'Direct GST E-Invoicing & Automated E-Way Bills'
      ]
    },
    {
      id: 'omni',
      name: 'Alpha Omni',
      icon: Globe,
      iconBg: '#ccfbf1',
      iconColor: '#0d9488',
      badge: 'Omnichannel & Sync',
      renderLogo: () => (
        <div className="flex items-center gap-1 font-sans">
          <span className="text-xs sm:text-sm font-bold text-slate-500 leading-none">Alpha</span>
          <span className="text-xs sm:text-sm font-black text-[#0d9488] leading-none">omni</span>
        </div>
      ),
      heading: 'Omnichannel Retail & E-Commerce Sync',
      desc: 'Unify your offline retail POS counters with online marketplaces (Amazon, Flipkart, Shopify, WooCommerce) in real time with central inventory sync, barcode dispatch, and returns management.',
      monitorCaption: 'Alpha Omni E-Commerce Sync Control Center',
      slides: [
        'Alpha Omni E-Commerce Sync Control Center',
        'Alpha Omni Central Marketplace Inventory',
        'Alpha Omni Automated Order Dispatch Hub'
      ],
      link: '/industries/ecommerce',
      categorySlug: 'ecommerce',
      bulletPoints: [
        'Real-time Multi-Channel Inventory Reconciliation',
        'Instant Auto-Sync with Amazon, Flipkart & Shopify',
        'Central Barcode Verification & Fast Courier Manifest',
        'Automated Return to Origin (RTO) Tracking'
      ]
    },
    {
      id: 'gorder',
      name: 'G ORDER',
      icon: ShoppingBag,
      iconBg: '#ffe4e6',
      iconColor: '#e11d48',
      badge: 'B2B Mobile Ordering',
      renderLogo: () => (
        <div className="flex items-center gap-1 font-sans">
          <span className="text-sm sm:text-base font-black text-[#dc2626] leading-none">G</span>
          <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight leading-none">ORDER</span>
        </div>
      ),
      heading: 'B2B Mobile Ordering & Sales Force App',
      desc: 'Enable your retail dealers and traveling sales representatives to browse live digital catalogs, book orders instantly on mobile, check outstanding ledgers, and track delivery status.',
      monitorCaption: 'G ORDER Digital Catalog & Order Booking App',
      slides: [
        'G ORDER Digital Catalog & Order Booking App',
        'G ORDER Dealer Order Processing Screen',
        'G ORDER Sales Representative Route Planner'
      ],
      link: '/industries/retail',
      categorySlug: 'retail',
      bulletPoints: [
        'High-Resolution Visual B2B Mobile Catalog',
        '24/7 Self-Service Dealer Order Booking',
        'Instant Customer Outstanding Ledger Check',
        'GPS-Enabled Sales Representative Field Routing'
      ]
    },
    {
      id: 'jeweldeal',
      name: 'JewelDeal',
      icon: Sparkles,
      iconBg: '#fef9c3',
      iconColor: '#ca8a04',
      badge: 'Jewellery B2B Portal',
      renderLogo: () => (
        <div className="bg-[#1c1917] px-2.5 py-1 rounded-sm text-center">
          <span className="text-[10px] sm:text-xs font-black text-[#eab308] tracking-wider font-sans leading-none block">JewelDeal</span>
        </div>
      ),
      heading: 'Digital Jewellery B2B Marketplace & Virtual Showroom',
      desc: 'An exclusive virtual B2B jewellery showroom and digital catalog platform connecting jewellery manufacturers, wholesalers, and retail buyers with real-time rate calculators and secure booking.',
      monitorCaption: 'JewelDeal Virtual Showroom & Booking Platform',
      slides: [
        'JewelDeal Virtual Showroom & Booking Platform',
        'JewelDeal Manufacturer Catalog Showcase',
        'JewelDeal Secure Wholesale Quotation Engine'
      ],
      link: '/industries/jewellery',
      categorySlug: 'jewellery',
      bulletPoints: [
        'Virtual HD 360° Jewellery Exhibition Showcase',
        'Restricted Verified Buyer Access Controls',
        'Instant Live Metal & Diamond Weight Pricing Calculator',
        'Confidential Quotations & Custom Design Inquiries'
      ]
    },
    {
      id: 'chatbox',
      name: 'Alpha CHATBOX',
      icon: MessageSquare,
      iconBg: '#d1fae5',
      iconColor: '#059669',
      badge: 'WhatsApp Automation',
      renderLogo: () => (
        <div className="flex flex-col text-left font-sans">
          <span className="text-[8px] font-bold text-slate-500 leading-none">Alpha</span>
          <span className="text-xs sm:text-sm font-black text-[#059669] leading-none">CHATBOX</span>
        </div>
      ),
      heading: 'WhatsApp Automated Customer Engagement Hub',
      desc: 'Automate payment reminders, GST invoice PDFs, order dispatches, OTP confirmations, and promotional broadcast campaigns directly via official Meta WhatsApp Business API.',
      monitorCaption: 'Alpha CHATBOX Smart WhatsApp Dispatch Engine',
      slides: [
        'Alpha CHATBOX Smart WhatsApp Dispatch Engine',
        'Alpha CHATBOX Automated Invoice Dispatcher',
        'Alpha CHATBOX Customer Broadcast Campaigns'
      ],
      link: '/contact',
      categorySlug: 'service-maintenance',
      bulletPoints: [
        'Official Meta WhatsApp Cloud API Verified Integration',
        'Automated PDF Invoice & Payment Receipt Delivery',
        'Scheduled Outstanding Ledger Payment Reminders',
        'Bulk Promotional Campaigns with Rich Media & Buttons'
      ]
    }
  ];

  const currentProduct = erpProducts.find(p => p.id === activeErpProduct) || erpProducts[0];

  // Comprehensive Services Tailored to Nirghos ERP Ecosystem (Exact match to screenshot)
  const nirghosServices = [
    {
      id: 'ecommerce',
      tag: 'B2B & B2C',
      title: 'E-commerce Website',
      desc: 'Our end-to-end B2B and B2C e-commerce platform eases your operations with live Nirghos ERP inventory sync, digital catalogs, customer pricing tiers, and secure online checkout.',
      image: '/services/service-ecommerce-hd.jpg',
      category: 'Web Solutions'
    },
    {
      id: 'mobile-app',
      tag: 'B2B & B2C',
      title: 'Mobile Application',
      desc: 'Stay connected and in control with our B2B mobile app for salesmen route planning, dealer order booking, live stock check, and instant customer ledger reports.',
      image: '/services/service-mobile-hd.jpg',
      category: 'Mobile Apps'
    },
    {
      id: 'digital-marketing',
      tag: 'Digital',
      title: 'Marketing',
      desc: 'Digital marketing services encompass a range of online lead generation, official WhatsApp business broadcast campaigns, targeted SEO, and high-ROI brand performance ads.',
      image: '/services/service-marketing-hd.jpg',
      category: 'Digital Growth'
    },
    {
      id: 'cloud-implementation',
      tag: 'Enterprise',
      title: 'Cloud ERP Implementation',
      desc: 'Seamless data migration from legacy accounting systems, customized workflow setup, high-availability cloud hosting, and dedicated SLA onboarding support.',
      image: '/services/service-cloud-hd.jpg',
      category: 'Enterprise Cloud'
    },
    {
      id: 'hardware-rfid',
      tag: 'Hardware',
      title: 'Barcode & RFID Automation',
      desc: 'Complete hardware automation pairing Nirghos ERP with high-speed barcode scanners, thermal POS receipt printers, RFID smart gates, and weighing scales.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      category: 'Hardware Integration'
    },
    {
      id: 'api-integration',
      tag: 'Integration',
      title: 'Custom API & Gateway Sync',
      desc: 'Direct API connectors uniting Nirghos ERP with government GST portals, e-way bill generation, bank payment gateways, and third-party logistics couriers.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      category: 'System Integration'
    }
  ];

  const displayedServices = showAllServices ? nirghosServices : nirghosServices.slice(0, 3);

  // Real enterprise testimonials across diverse industries
  const testimonials = [
    {
      quote: "Nirghos ERP transformed our multi-plant fabrication business within 12 days. Having multi-level BOMs, worker shift rosters, and scrap reconciliation working natively without months of coding was unbelievable.",
      author: "Rajesh Singhania",
      role: "Managing Director",
      company: "Singhania Heavy Engineering Ltd",
      sector: "Manufacturing & Fabrication",
      metric: "+34% Plant Throughput",
      initials: "RS"
    },
    {
      quote: "Managing 3 hospital branches with 350+ beds was an administrative bottleneck before Nirghos. Today, our OPD tokens, doctor EMR, bedside pharmacy, and TPA insurance pre-authorizations operate synchronously.",
      author: "Dr. Ananya Roy",
      role: "Chief Operating Officer",
      company: "CareWell Multi-Specialty Hospitals",
      sector: "Hospitals & Clinics",
      metric: "-42% Patient Wait Times",
      initials: "AR"
    },
    {
      quote: "As a wholesale distributor dealing in thousands of SKUs, credit limits and tier pricing used to be a mess. Nirghos locked our receivables and gave us live warehouse godown visibility in one unified window.",
      author: "Ketan Mehta",
      role: "Founder & CEO",
      company: "Apex Global Wholesale Distribution",
      sector: "Trading & Wholesale",
      metric: "99.8% Order Accuracy",
      initials: "KM"
    },
    {
      quote: "Automating our developer sprint allocations, client timesheets, and milestone invoicing took less than a week. Unbilled hours dropped to near zero, and cash flow forecasting became crystal clear.",
      author: "Vikramaditya Oberoi",
      role: "VP of Engineering",
      company: "CloudScale Technologies Ltd",
      sector: "IT & Software Companies",
      metric: "+22% Billable Margin",
      initials: "VO"
    },
    {
      quote: "With 12 checkout registers and offline-first POS reliability, Nirghos keeps our billing running uninterrupted even during festive network drops. Barcode scanning and thermal print speeds are instant.",
      author: "Pooja Sundaram",
      role: "Retail Operations Director",
      company: "MetroKart Hypermarket Chain",
      sector: "Retail & Supermarkets",
      metric: "4.2s Fast POS Billing",
      initials: "PS"
    },
    {
      quote: "Tracking 7 active project sites with subcontractor measurement books (MB), raw concrete batching runs, and automated client RERA installment demand letters has never been this stress-free.",
      author: "Harshvardhan Patel",
      role: "Managing Director",
      company: "Landmark Infra & Real Estate",
      sector: "Construction & Real Estate",
      metric: "Zero RERA Penalties",
      initials: "HP"
    },
    {
      quote: "Managing 120 fleet trucks with automated FASTag tolls, driver trip advances, GPS geofences, and electronic POD reconciliation saved us hundreds of dispatch administrative man-hours every month.",
      author: "Sameer Al-Mansoor",
      role: "Head of Fleet & Logistics",
      company: "TransGlobal Express Cargo",
      sector: "Logistics & Transport",
      metric: "-26% Transit Fuel Cost",
      initials: "SA"
    },
    {
      quote: "Batch manufacturing records (BMR), active ingredient expiry quarantines, and statutory drug regulatory compliance operate with airtight cryptographic audit trails on Nirghos dedicated cloud.",
      author: "Dr. Farooq Qureshi",
      role: "Director of Quality & Formulations",
      company: "BioCure Pharmaceuticals",
      sector: "Pharma & Healthcare",
      metric: "100% 21 CFR Audit Pass",
      initials: "FQ"
    }
  ];

  return (
    <div className="space-y-12 lg:space-y-16 pb-20 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (EXACT MATCH TO USER'S SCREENSHOT)                        */}
      {/* ========================================================================= */}
      <section className="relative pt-10 pb-8 lg:pt-14 lg:pb-10 bg-gradient-to-b from-[#fffcf8] via-white to-slate-50/60 border-b border-slate-200/80 overflow-hidden text-center">
        
        {/* Soft Warm Ambient Radial Glow Accents */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[550px] h-[380px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[380px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>

        {/* Faint dot matrix patterns on corners */}
        <div className="absolute bottom-3 right-6 w-32 h-20 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-75 pointer-events-none"></div>
        <div className="absolute bottom-3 left-6 w-32 h-20 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40 pointer-events-none"></div>

        {/* Hero Headline and Trust Bar Container (Expanded to eliminate excessive side margins) */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
          
          {/* Line 1: Trusted ERP Software (Orange) */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#f25c05] tracking-tight leading-tight">
            Trusted ERP Software
          </h2>

          {/* Line 2 & 3: For Apparel-Lifestyle, Footwear & Jewellery Businesses in India (Blue) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#0060b9] tracking-tight leading-[1.18]">
            For Apparel-Lifestyle, Footwear & <br className="hidden sm:inline" />
            Jewellery Businesses in India
          </h1>

          {/* Line 4: 25+ Years of Trust | 5000+ Clients | 400+ Cities across India */}
          <div className="pt-3 pb-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-slate-800 text-sm sm:text-base md:text-lg font-bold">
            <span><strong className="font-black text-slate-900">25+</strong> Years of Trust</span>
            <span className="text-slate-300 font-normal">|</span>
            <span><strong className="font-black text-slate-900">5000+</strong> Clients</span>
            <span className="text-slate-300 font-normal">|</span>
            <span><strong className="font-black text-slate-900">400+</strong> Cities across India</span>
          </div>

          {/* Line 5: Orange Pill "Get Demo" Button & Line 6: Hand-Drawn Sky Blue Curly Arrow */}
          <div className="pt-2 flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#f25c05] hover:bg-[#d94f00] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Get Demo
            </button>

            {/* Hand-Drawn Light Blue Curly Arrow */}
            <div className="mt-2 text-[#60a5fa] select-none pointer-events-none">
              <svg 
                width="72" 
                height="46" 
                viewBox="0 0 75 48" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transform -rotate-3"
              >
                <path 
                  d="M48 2 C58 12, 60 22, 44 26 C32 29, 24 25, 22 19 C20 12, 32 10, 40 16 C48 22, 42 34, 18 37" 
                  stroke="#60A5FA" 
                  strokeWidth="2.4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M25 31 L 17 37 L 23 43" 
                  stroke="#60A5FA" 
                  strokeWidth="2.4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FULL-WIDTH CONTINUOUS RIGHT-TO-LEFT 25 CATEGORIES SLIDER (EDGE-TO-EDGE)   */}
        {/* ========================================================================= */}
        <div className="pt-4 pb-2 w-full relative overflow-hidden my-3">
          
          {/* Slider Switcher (25 Categories / Client Brands) */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <button
              type="button"
              onClick={() => setSliderMode('categories')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                sliderMode === 'categories'
                  ? 'bg-[#f25c05] text-white shadow-md shadow-orange-500/20 scale-105'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>25 Specialized Industry ERPs</span>
            </button>
            <button
              type="button"
              onClick={() => setSliderMode('brands')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                sliderMode === 'brands'
                  ? 'bg-[#f25c05] text-white shadow-md shadow-orange-500/20 scale-105'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:bg-slate-50'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Enterprise Client Brands</span>
            </button>
          </div>

          {/* Seamless gradient edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#fffcf8] via-[#fffcf8]/90 to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#fffcf8] via-[#fffcf8]/90 to-transparent z-10"></div>

          {/* 1. Track: 25 Specialized Industry Categories with Logos */}
          {sliderMode === 'categories' && (
            <div 
              className="animate-marquee-rtl flex items-center gap-4 hover:[animation-play-state:paused]"
              style={{ animationDuration: '65s' }}
            >
              {[...industriesData, ...industriesData].map((ind, idx) => {
                const theme = categoryThemeMap[ind.slug] || {
                  bg: 'bg-orange-50',
                  text: 'text-[#f25c05]',
                  border: 'border-orange-200',
                  badge: 'Specialized ERP'
                };

                return (
                  <Link
                    key={`${ind.slug}-${idx}`}
                    to={`/industries/${ind.slug}`}
                    className="w-60 sm:w-72 h-20 sm:h-22 bg-white rounded-2xl border border-slate-200/90 hover:border-[#f25c05] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3.5 px-4 py-3 shrink-0 select-none group cursor-pointer"
                  >
                    {/* Category Logo Badge */}
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${theme.bg} ${theme.text} ${theme.border} border flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-[#f25c05] group-hover:text-white group-hover:border-[#f25c05] transition-all duration-200`}>
                      <DynamicIcon name={ind.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Category Name & Tag */}
                    <div className="flex flex-col min-w-0 text-left">
                      <span className="text-xs sm:text-sm font-black text-slate-800 group-hover:text-[#f25c05] transition-colors leading-tight truncate">
                        {ind.name}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 group-hover:text-slate-600 mt-1 flex items-center gap-1 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                        <span className="truncate">{theme.badge || 'ERP Software'}</span>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* 2. Track: Enterprise Client Brands */}
          {sliderMode === 'brands' && (
            <div className="animate-marquee-rtl flex items-center gap-4 hover:[animation-play-state:paused]">
              {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, idx) => (
                <div
                  key={`${brand.id}-${idx}`}
                  className="w-44 h-18 sm:w-52 sm:h-22 bg-white rounded-2xl border border-sky-100/90 hover:border-orange-300 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-all flex items-center justify-center px-4 py-2 shrink-0 select-none group cursor-pointer"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  {brand.render()}
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Search bar & quick category exploration */}
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-1">
          <SearchBar 
            onSearchChange={(q) => setSearchQuery(q)}
            placeholder="Search specialized industry ERPs (e.g. Apparel, Jewellery, Footwear, Manufacturing)..."
          />
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3 text-xs">
            <span className="font-bold text-slate-600 flex items-center gap-1.5 mr-1">
              <Sparkles className="w-3.5 h-3.5 text-[#f25c05]" />
              <span>Popular ERP Blueprints:</span>
            </span>
            {[
              { slug: 'textile', name: 'Textile & Garments', icon: 'Scissors' },
              { slug: 'jewellery', name: 'Jewellery & Diamond', icon: 'Gem' },
              { slug: 'manufacturing', name: 'Manufacturing', icon: 'Factory' },
              { slug: 'retail', name: 'Retail Shops', icon: 'Store' },
              { slug: 'pharma', name: 'Pharma & Healthcare', icon: 'Pill' },
              { slug: 'hospital', name: 'Hospitals & Clinics', icon: 'Hospital' },
              { slug: 'trading', name: 'Trading & Wholesale', icon: 'ArrowLeftRight' },
              { slug: 'construction', name: 'Construction', icon: 'HardHat' }
            ].map(item => (
              <Link 
                key={item.slug} 
                to={`/industries/${item.slug}`}
                className="px-3 py-1.5 rounded-full border border-slate-200/90 bg-white hover:border-[#f25c05] hover:bg-orange-50/60 hover:text-[#f25c05] transition-all text-xs font-bold text-slate-700 shadow-xs hover:shadow-sm hover:-translate-y-0.5 flex items-center gap-1.5 group cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#f25c05] group-hover:scale-125 transition-transform"></span>
                <DynamicIcon name={item.icon} className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#f25c05] transition-colors" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT NIRGHOS ERP SECTION (EXACT MATCH TO USER SCREENSHOT)              */}
      {/* ========================================================================= */}
      <section id="about-section" className="py-12 lg:py-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Team Image with Floating 25+ Year Experience & Play Button */}
            <div className="lg:col-span-6 relative pb-8 sm:pb-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-slate-50 group">
                <img 
                  src="/about-team.jpg" 
                  alt="Nirghos ERP Solutions Leadership Team" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating 25+ Year Experience & Video Play Card */}
              <div className="absolute -bottom-2 sm:-bottom-4 left-4 sm:left-6 right-4 sm:right-auto sm:w-80 bg-white rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.12),0_0_1px_1px_rgba(0,0,0,0.05)] border border-slate-100 p-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  {/* Orange Award Ribbon Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#f25c05] flex items-center justify-center shrink-0">
                    <Award className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
                      25+
                    </span>
                    <span className="text-xs font-semibold text-slate-500 mt-1">
                      Year Experience
                    </span>
                  </div>
                </div>

                {/* Sky Blue Circular Play Button */}
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-11 h-11 rounded-full bg-sky-100 hover:bg-sky-200 text-sky-600 flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 shadow-sm cursor-pointer ml-3 shrink-0"
                  title="Watch Video / Book Demo"
                  aria-label="Play video"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </button>
              </div>
            </div>

            {/* Right Column: About Nirghos ERP, Line, Text, Know More Button */}
            <div className="lg:col-span-6 space-y-4 text-left">
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight">
                About Nirghos ERP
              </h2>

              {/* Orange Horizontal Accent Line */}
              <div className="w-16 h-1 bg-[#f25c05] rounded-full my-3"></div>

              {/* Exact Description Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                Nirghos ERP Solutions Pvt. Ltd. provides absolute ERP, Desktop, Mobile application and Cloud Based Solutions for the Retailers, Distributors, and Manufacturers to enhance them with advanced technology and contains expertise of 25 years. We are accomplished to deliver quality software products and solutions. We have successfully served 5,000+ clients across 400+ cities, including major cities and small towns in Gujarat, Rajasthan, Maharashtra, Madhya Pradesh, Delhi, Hyderabad, and Haryana, supported by a strong team of 250+ employees.
              </p>

              {/* Blue "Know More" Button */}
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0060b9] hover:bg-[#004f9e] text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Know More
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR PRODUCTS SECTION (EXACT MATCH TO USER SCREENSHOT)                  */}
      {/* ========================================================================= */}
      <section id="our-products-section" className="py-14 lg:py-20 bg-gradient-to-b from-[#f9fbfe] via-white to-[#f9fbfe] relative overflow-hidden border-b border-slate-200/80">
        
        {/* Soft Background Grid Tiles Matching Screenshot */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Title & Orange Accent Underline */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Our Products
            </h2>
            <div className="w-16 h-1 bg-[#f25c05] rounded-full mx-auto mt-2.5"></div>
          </div>

          {/* 7 Horizontal Product Card Tabs (High-Res Vector Icons & Brand Logos) */}
          <div className="flex items-center justify-start lg:justify-center gap-2.5 sm:gap-3.5 overflow-x-auto pb-4 pt-1 px-1 scrollbar-none select-none">
            {erpProducts.map((prod) => {
              const isActive = activeErpProduct === prod.id;
              const IconComp = prod.icon;
              return (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => {
                    setActiveErpProduct(prod.id);
                    setProductSlideIndex(0);
                  }}
                  className={`h-14 sm:h-16 px-3.5 sm:px-4.5 rounded-2xl bg-white flex items-center gap-2.5 sm:gap-3 transition-all duration-200 transform shrink-0 cursor-pointer shadow-xs ${
                    isActive
                      ? 'border-2 border-[#0060b9] shadow-md shadow-blue-500/15 -translate-y-1 ring-2 ring-blue-500/10'
                      : 'border border-slate-200/90 hover:border-slate-300 hover:shadow-xs hover:bg-slate-50/50 hover:-translate-y-0.5'
                  }`}
                  aria-label={prod.name}
                >
                  {/* Clean Vector Icon Badge */}
                  <div 
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 shadow-2xs transition-transform"
                    style={{ backgroundColor: prod.iconBg, color: prod.iconColor }}
                  >
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                  </div>

                  {/* Stylized Logo Name & Category Tag */}
                  <div className="flex flex-col text-left">
                    {prod.renderLogo ? (
                      <div className="scale-95 origin-left">
                        {prod.renderLogo()}
                      </div>
                    ) : (
                      <span className={`text-xs sm:text-sm font-black whitespace-nowrap leading-tight ${
                        isActive ? 'text-[#0060b9]' : 'text-slate-800'
                      }`}>
                        {prod.name}
                      </span>
                    )}
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5 whitespace-nowrap">
                      {prod.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Main Active Product Showcase Box (Large Card Container) */}
          <div className="mt-4 bg-white rounded-3xl border border-sky-100/90 shadow-[0_20px_50px_-15px_rgba(0,96,185,0.08),0_0_1px_1px_rgba(0,0,0,0.03)] p-6 sm:p-10 lg:p-12 transition-all">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading, Description, Bullet Points & Explore More Button */}
              <div className="lg:col-span-6 space-y-5 text-left">
                
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-tight">
                  {currentProduct.heading}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {currentProduct.desc}
                </p>

                {/* 4 Feature Bullet Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {currentProduct.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Explore More Button */}
                <div className="pt-3 flex flex-wrap items-center gap-3.5">
                  <Link
                    to={currentProduct.link}
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0060b9] hover:bg-[#004f9e] text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    Explore More
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-300 hover:border-orange-300 hover:text-[#f25c05] bg-white text-slate-700 font-bold text-sm transition-all shadow-2xs cursor-pointer"
                  >
                    Request Live Demo
                  </button>
                </div>

              </div>

              {/* Right Column: Desktop iMac / Monitor Display & Pagination Dots */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                
                {/* Desktop Monitor Graphics */}
                <div className="relative w-full max-w-[480px] group">
                  <div className="relative rounded-2xl overflow-hidden drop-shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                    <img 
                      src="/products/monitor-gsoft.png" 
                      alt={currentProduct.monitorCaption} 
                      className="w-full h-auto object-contain select-none"
                    />
                  </div>
                </div>

                {/* Monitor Caption */}
                <span className="text-xs sm:text-sm font-bold text-slate-700 mt-4 text-center">
                  {currentProduct.slides[productSlideIndex] || currentProduct.monitorCaption}
                </span>

                {/* 3 Pagination Carousel Dots (Exact Match) */}
                <div className="flex items-center justify-center gap-2 mt-2.5">
                  {[0, 1, 2].map((dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setProductSlideIndex(dotIdx)}
                      className={`transition-all rounded-full cursor-pointer ${
                        productSlideIndex === dotIdx
                          ? 'w-6 h-2 bg-[#0060b9]'
                          : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR SERVICES SECTION (EXACT MATCH TO USER SCREENSHOT)                  */}
      {/* ========================================================================= */}
      <section id="our-services-section" className="py-14 lg:py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
        
        {/* Soft Background Accent Dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Title & Orange Accent Underline (Exact Match to Screenshot) */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-[#f25c05] rounded-full mx-auto mt-2.5"></div>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
              Comprehensive software development, digital commerce, and technical solutions engineered to extend and accelerate your Nirghos ERP ecosystem.
            </p>
          </div>

          {/* Service Cards Grid (Matching User Screenshot Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {displayedServices.map((service) => (
              <div 
                key={service.id}
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-2xl hover:border-sky-300 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5"
              >
                {/* Card Top: Subtitle/Tag + Title on Left, Blue Circular Arrow on Right */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="text-left">
                      <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider block">
                        {service.tag}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mt-0.5 group-hover:text-[#0060b9] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Circular Blue Action Button with ArrowUpRight */}
                    <div 
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0060b9] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#004f9e] group-hover:scale-110 group-hover:rotate-12 transition-all"
                      aria-label={`Explore ${service.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-left line-clamp-3 mb-4">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Image Container (Rounded Corners with Zoom on Hover) */}
                <div className="rounded-2xl overflow-hidden h-40 sm:h-44 w-full relative bg-slate-100 shadow-inner mt-2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Controls: Toggle All Services & Consultation Button */}
          <div className="mt-10 sm:mt-12 text-center flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setShowAllServices(!showAllServices)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 hover:border-[#0060b9] hover:text-[#0060b9] bg-white text-slate-700 font-bold text-sm transition-all shadow-2xs hover:shadow-sm cursor-pointer"
            >
              <span>{showAllServices ? 'Show Less Services' : 'View All Services (6)'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAllServices ? 'rotate-180' : ''}`} />
            </button>

            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#0060b9] hover:bg-[#004f9e] text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Schedule Free Service Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. INDUSTRIES SECTION (ALL 25 CATEGORIES WITH LIVE SEARCH & FILTERS) */}
      <section id="industries-section" className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative">
        
        {/* Ambient background glow behind cards */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-black tracking-wide uppercase border border-brand-200/80 shadow-xs">
            <Boxes className="w-3.5 h-3.5 text-brand-600" /> 25 Business Categories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Explore ERP Solutions by Industry
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Find the perfect ERP solution for your business. Every single industry comes equipped with its own purpose-built workflows, modules, and regulatory compliance standards.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none relative z-10">
          {industryCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAllIndustries(false);
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-navy-950 text-white shadow-xl shadow-navy-950/25 ring-2 ring-brand-500/40'
                  : 'bg-white text-slate-700 hover:text-navy-950 hover:bg-slate-50 border-2 border-slate-200/80 shadow-xs'
              }`}
            >
              {category}
              {category === 'All' ? ` (25)` : ''}
            </button>
          ))}
        </div>

        {/* Search Results Summary */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1 font-medium">
          <span>
            Displaying <strong>{displayedIndustries.length}</strong> of <strong>{filteredIndustries.length}</strong> industry blueprints
          </span>
          {selectedCategory !== 'All' && (
            <button 
              onClick={() => {
                setSelectedCategory('All');
                setShowAllIndustries(false);
              }} 
              className="text-brand-600 font-bold hover:underline"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Responsive Grid of 8 Cards (or All Cards when expanded) in 2 Lines (4 per row on lg+) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedIndustries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>

        {/* View All / Show Less Action Button Container */}
        {filteredIndustries.length > 8 && (
          <div className="text-center pt-10 relative z-10 flex flex-col items-center justify-center">
            <button
              onClick={() => {
                if (showAllIndustries) {
                  setShowAllIndustries(false);
                  document.getElementById('industries-section')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  setShowAllIndustries(true);
                }
              }}
              className={`group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-sm sm:text-base transition-all duration-300 shadow-xl cursor-pointer ${
                showAllIndustries
                  ? 'bg-white text-navy-950 border-2 border-slate-300 hover:border-brand-500 hover:shadow-2xl hover:-translate-y-0.5'
                  : 'bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 text-white border-2 border-brand-500/60 hover:border-brand-400 hover:shadow-brand-500/25 hover:-translate-y-1'
              }`}
            >
              <span>
                {showAllIndustries 
                  ? 'Show Fewer Industries (Show 8)' 
                  : `View All ${filteredIndustries.length} Industries`}
              </span>
              <div className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${
                showAllIndustries
                  ? 'bg-slate-100 text-slate-700 group-hover:bg-brand-500 group-hover:text-white'
                  : 'bg-brand-500/20 text-brand-300 border border-brand-400/40 group-hover:bg-brand-500 group-hover:text-white'
              }`}>
                {showAllIndustries ? (
                  <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                )}
              </div>
            </button>
            
            <p className="text-xs text-slate-500 font-medium mt-3">
              {showAllIndustries
                ? `Showing all ${filteredIndustries.length} specialized industry blueprints`
                : `Showing 8 of ${filteredIndustries.length} industry blueprints · Click to expand full catalog`}
            </p>
          </div>
        )}

        {filteredIndustries.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
            <Search className="w-12 h-12 text-slate-300 mx-auto" />
            <h4 className="text-lg font-bold text-navy-900">No industry matching "{searchQuery}"</h4>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Try searching for "Manufacturing", "Hospital", "Retail", "Pharma", "Textile" or reset your search query.
            </p>
            <button
              onClick={() => { 
                setSearchQuery(''); 
                setSelectedCategory('All'); 
                setShowAllIndustries(false);
              }}
              className="px-5 py-2.5 text-xs font-bold text-white bg-navy-900 rounded-xl"
            >
              Clear Filters
            </button>
          </div>
        )}

      </section>

      {/* 3. CORE ERP FEATURES SECTION */}
      <section id="features-section" className="bg-navy-950 text-white py-24 border-y border-navy-800 relative">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-400">
              Complete Enterprise Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Powerful Core Modules Built for Scalability
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every specialized industry configuration sits on top of our hardened, enterprise-grade core engine—ensuring seamless cross-departmental coordination.
            </p>
          </div>

          {/* Interactive Feature Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {coreFeatures.map((feat) => {
              const isActive = activeTabFeature === feat.id;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveTabFeature(feat.id)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-200 flex items-center gap-3 ${
                    isActive 
                      ? 'bg-brand-600 border-brand-500 text-white shadow-xl shadow-brand-600/30' 
                      : 'bg-navy-900/80 border-navy-800 text-slate-300 hover:bg-navy-850 hover:text-white'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-navy-800 text-brand-400'}`}>
                    <DynamicIcon name={feat.icon} className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs sm:text-sm font-bold truncate">{feat.name}</p>
                    <span className="text-[10px] text-slate-400 block truncate">{feat.tagline}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Feature Showcase Box */}
          <div className="bg-navy-900 rounded-3xl border border-navy-800 p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold">
                <DynamicIcon name={activeFeatureObj.icon} className="w-3.5 h-3.5" />
                <span>{activeFeatureObj.tagline}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activeFeatureObj.name}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeFeatureObj.description}
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Capabilities Included:
                </p>
                {activeFeatureObj.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-3">
                <Link
                  to="/features"
                  className="px-6 py-3 rounded-xl bg-brand-400 text-navy-950 font-bold text-xs sm:text-sm hover:brightness-110 transition flex items-center gap-1.5 shadow-sm"
                >
                  <span>Explore All 8 Features</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/dashboard"
                  className="px-6 py-3 rounded-xl bg-navy-800 text-white font-bold text-xs sm:text-sm hover:bg-navy-750 border border-navy-700 transition"
                >
                  Test in Demo Workspace
                </Link>
              </div>
            </div>

            {/* Visual Feature Dashboard Card Preview */}
            <div className="p-6 bg-navy-950 rounded-2xl border border-navy-800/90 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-400"></div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {activeFeatureObj.name} Telemetry
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">
                  {activeFeatureObj.id === 'roles' ? 'SOC2 TYPE II · ZERO TRUST' : 'SYNCHRONOUS REAL-TIME'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-navy-900 rounded-xl border border-navy-800">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">
                    {activeFeatureObj.id === 'roles' ? 'Security Encryption' : 'Process Velocity'}
                  </span>
                  <p className="text-lg font-bold text-white mt-0.5">
                    {activeFeatureObj.id === 'roles' ? 'AES-256' : '3.8x Faster'}
                  </p>
                  <span className="text-[10px] text-emerald-400 font-medium">
                    {activeFeatureObj.id === 'roles' ? 'End-to-End Encrypted' : 'Automatic reconcile'}
                  </span>
                </div>
                <div className="p-3.5 bg-navy-900 rounded-xl border border-navy-800">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">
                    {activeFeatureObj.id === 'roles' ? 'Access Control' : 'Audit Reliability'}
                  </span>
                  <p className="text-lg font-bold text-white mt-0.5">
                    {activeFeatureObj.id === 'roles' ? '100% RBAC' : '100%'}
                  </p>
                  <span className="text-[10px] text-brand-300 font-medium">
                    {activeFeatureObj.id === 'roles' ? 'FIDO2 / 2FA Enforced' : 'Double-entry verified'}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-navy-900/80 rounded-xl border border-navy-800 text-xs text-slate-300 space-y-2.5">
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>
                    {activeFeatureObj.id === 'roles' ? 'Zero-Trust Shield Status' : 'Workload Automation Status'}
                  </span>
                  <span className="text-brand-400 font-bold">
                    {activeFeatureObj.id === 'roles' ? '0 Threat Breaches' : '96% Completed'}
                  </span>
                </div>
                <div className="w-full bg-navy-950 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-brand-600 to-sky-400 h-full w-[100%] rounded-full"></div>
                </div>
                <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
                  {activeFeatureObj.id === 'roles'
                    ? 'Cryptographic SHA-256 audit ledger, granular field-level column masks, and branch-isolated security policies.'
                    : 'Seamlessly integrates with multi-entity ledgers, bank feeds, and mobile worker apps.'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. REAL CUSTOMER CASE STUDIES & TESTIMONIALS (Continuous Right-to-Left Infinite Slider) */}
      <section className="py-8 space-y-10">
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 text-center space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 border-2 border-brand-300 text-xs font-black uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-brand-600" />
            <span>ENTERPRISE TESTIMONIAL SHOWCASE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
            Trusted by Leaders Across 25 Industries
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Discover how leading organizations transitioned from fragmented legacy systems to Nirghos unified polymorphic ERP.
          </p>

          <div className="pt-1 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Live Continuous Stream • Hover Any Card to Pause</span>
            </span>
          </div>
        </div>

        {/* Continuous Right-to-Left Marquee Slider */}
        <div className="relative w-full overflow-hidden py-4">
          
          {/* Left & Right Soft Blur Faders */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Track */}
          <div className="animate-marquee-rtl flex items-stretch gap-6 pl-6">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div 
                key={idx} 
                className="w-[390px] sm:w-[430px] shrink-0 p-7 rounded-3xl bg-white border-2 border-slate-300/90 hover:border-brand-500 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08),0_4px_10px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_50px_-10px_rgba(37,99,235,0.22)] hover:-translate-y-2 hover:ring-4 hover:ring-brand-500/15 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group cursor-default"
              >
                {/* Top Highlight Accent Bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-500 via-indigo-500 to-sky-400 group-hover:h-2 transition-all duration-300"></div>

                <div className="space-y-4">
                  {/* Top Rating & Metric Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-xs" />
                      ))}
                    </div>
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border-2 border-emerald-300/90 shadow-2xs">
                      {t.metric}
                    </span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Bottom Author Profile */}
                <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-navy-950 via-slate-900 to-brand-700 text-white font-extrabold text-sm flex items-center justify-center border-2 border-slate-700 shadow-md group-hover:border-brand-400 group-hover:scale-105 transition-all shrink-0">
                      {t.initials}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-black text-navy-950 group-hover:text-brand-600 transition-colors truncate">
                        {t.author}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-semibold truncate">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 group-hover:bg-brand-50 group-hover:text-brand-700 group-hover:border-brand-200 transition-colors shrink-0">
                    {t.sector.split(' ')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* 5. ABOUT US SUMMARY SECTION (The Nirghos ERP Vision) */}
      <section id="about-section" className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="relative bg-white rounded-3xl border-2 border-slate-300/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12),0_10px_25px_-5px_rgba(15,23,42,0.06)] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center overflow-hidden">
          
          {/* Top Multi-Color Highlight Stripe */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-500 via-indigo-600 to-sky-400"></div>

          {/* Left Column: Vision Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-black tracking-wider uppercase border-2 border-brand-200 shadow-2xs">
              <Building2 className="w-4 h-4 text-brand-600" />
              <span>THE NIRGHOS ERP VISION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight leading-tight">
              One Unified Architecture. <br />
              <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Engineered for 25 Diverse Industries.
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Traditional ERP systems force businesses into a painful trade-off: either settle for rigid generic software that doesn't understand your trade, or spend fortunes on fragile custom modifications that break with every update.
            </p>

            {/* Breakthrough Callout Quote */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-50 via-brand-50/25 to-slate-50 border-2 border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold leading-relaxed shadow-xs">
              <span className="text-brand-600 font-extrabold">Nirghos ERP bridges that divide natively:</span> We combine an industrial-strength financial general ledger with 25 pre-engineered industry schemas. Whether you run a precision CNC plant, a 300-bed hospital, or an international import house, Nirghos speaks your exact native operational language.
            </div>

            {/* 3 Metric Stat Cards */}
            <div className="grid grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50/80 border-2 border-slate-200/90 text-center hover:border-brand-400 hover:bg-white hover:shadow-md transition-all">
                <div className="text-2xl sm:text-3xl font-black text-navy-950 font-mono">
                  <AnimatedCounter target={25} suffix="+" duration={1800} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-500 mt-0.5">Sectors</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50/80 border-2 border-slate-200/90 text-center hover:border-emerald-400 hover:bg-white hover:shadow-md transition-all">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">
                  <AnimatedCounter target={99.99} decimals={2} suffix="%" duration={2200} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-500 mt-0.5">Cloud SLA</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50/80 border-2 border-slate-200/90 text-center hover:border-indigo-400 hover:bg-white hover:shadow-md transition-all">
                <div className="text-2xl sm:text-3xl font-black text-indigo-600 font-mono">
                  <AnimatedCounter target={150} suffix="+" duration={2000} />
                </div>
                <div className="text-[10px] font-black uppercase tracking-wider text-slate-500 mt-0.5">Modules</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-navy-950 text-white font-extrabold text-xs sm:text-sm hover:bg-brand-600 transition-all shadow-md active:scale-95 group cursor-pointer"
              >
                <span>Explore Full Company Story & Architecture</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Architecture Pillar Showcase */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-3xl bg-white border-2 border-slate-300/90 hover:border-brand-500 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-500/25 group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                  PILLAR #01 • 100% NATIVE
                </span>
              </div>
              <div>
                <h4 className="text-base font-black text-navy-950 group-hover:text-brand-600 transition-colors">
                  Multi-Industry Taxonomy
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                  Deeply specific terminology, fields, and compliance templates configured for every vertical right out of the box.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {['Shopfloor Kiosks', 'Hospital EMR', 'POS Registers', 'Transit LRs'].map((pill, idx) => (
                  <span key={idx} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-3xl bg-white border-2 border-slate-300/90 hover:border-indigo-500 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
                  <Landmark className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  PILLAR #02 • FINANCIAL CORE
                </span>
              </div>
              <div>
                <h4 className="text-base font-black text-navy-950 group-hover:text-indigo-600 transition-colors">
                  Zero-Compromise Financial Integrity
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                  Real-time double-entry general ledgers, multi-currency conversion, and automated GST/VAT statutory filings.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {['Immutable Ledger', 'Automated GST / VAT', '3-Way Match'].map((pill, idx) => (
                  <span key={idx} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-3xl bg-white border-2 border-slate-300/90 hover:border-emerald-500 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  PILLAR #03 • BANK-GRADE
                </span>
              </div>
              <div>
                <h4 className="text-base font-black text-navy-950 group-hover:text-emerald-600 transition-colors">
                  Enterprise Security & Tenant Isolation
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                  Role-based access control (RBAC), immutable cryptographic audit logs, and continuous bank-grade data encryption.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {['SOC 2 Ready', 'AES-256 Cloud', 'Granular RBAC'].map((pill, idx) => (
                  <span key={idx} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION STRIP */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white p-8 sm:p-14 text-center border border-navy-800 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-400">
              Transform Your Organization Today
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ready to See Nirghos ERP in Action?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Launch our interactive demo workspace pre-configured with realistic data for your industry, or talk with an enterprise solution architect.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/dashboard"
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-black text-navy-950 bg-gradient-to-r from-brand-300 via-brand-400 to-sky-300 hover:brightness-110 shadow-lg shadow-brand-400/25 flex items-center justify-center gap-2 transition text-sm"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Launch Interactive Demo</span>
              </Link>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-bold text-white bg-navy-850 hover:bg-navy-800 border border-navy-700 transition text-sm"
              >
                Schedule Architecture Call
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Booking Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type="book-demo"
      />

    </div>
  );
};

export default Home;
