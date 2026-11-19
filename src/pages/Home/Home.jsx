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
  Truck
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
    <div className="space-y-28 pb-24 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (EXACT MATCH TO USER'S SCREENSHOT)                        */}
      {/* ========================================================================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-[#fffcf8] via-white to-slate-50/60 border-b border-slate-200/80 overflow-hidden text-center">
        
        {/* Soft Warm Ambient Radial Glow Accents */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[550px] h-[380px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[380px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>

        {/* Faint dot matrix patterns on corners (matching screenshot) */}
        <div className="absolute bottom-6 right-8 w-36 h-28 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-75 pointer-events-none"></div>
        <div className="absolute bottom-6 left-8 w-36 h-28 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40 pointer-events-none"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
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

          {/* ========================================================================= */}
          {/* CONTINUOUS RIGHT-TO-LEFT CLIENT BRAND LOGOS SLIDER (EXACT MATCH)           */}
          {/* ========================================================================= */}
          <div className="pt-6 pb-2 w-full relative">
            {/* Overflow wrapper with gradient fade masks */}
            <div className="overflow-hidden relative py-3">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

              {/* Slider Track Moving Right-to-Left */}
              <div className="animate-marquee-rtl flex items-center gap-3.5 sm:gap-4 hover:[animation-play-state:paused]">
                {[...brandLogos, ...brandLogos].map((brand, idx) => (
                  <div
                    key={`${brand.id}-${idx}`}
                    className="w-44 h-18 sm:w-52 sm:h-22 bg-white rounded-2xl border border-sky-100/90 hover:border-orange-300 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-all flex items-center justify-center px-4 py-2 shrink-0 select-none group cursor-pointer"
                    onClick={() => setIsDemoModalOpen(true)}
                  >
                    {brand.render()}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Search bar & quick category exploration */}
          <div className="max-w-2xl mx-auto pt-8">
            <SearchBar 
              onSearchChange={(q) => setSearchQuery(q)}
              placeholder="Search specialized industry ERPs (e.g. Apparel, Jewellery, Footwear, Manufacturing, Healthcare)..."
            />
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3.5 text-xs text-slate-500">
              <span className="font-bold text-slate-700">Quick Blueprints:</span>
              {['textile', 'manufacturing', 'retail', 'hospital', 'trading', 'construction'].map(slug => {
                const item = industriesData.find(i => i.slug === slug);
                return (
                  <Link 
                    key={slug} 
                    to={`/industries/${slug}`}
                    className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-orange-50 hover:border-orange-200 hover:text-[#f25c05] transition text-[11px] font-semibold text-slate-700 shadow-2xs"
                  >
                    {item?.name.split('&')[0]}
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DYNAMIC HERO DASHBOARD SIMULATOR BOX                                  */}
      {/* ========================================================================= */}
      <section className="relative pt-6 pb-20 bg-navy-950 text-white border-b border-navy-800/80 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-grid-pattern"></div>
        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          <div className="mt-8 relative max-w-[1440px] mx-auto">
            
            {/* Interactive Sector Switcher Tabs on top of the preview */}
            <div className="flex items-center justify-center gap-2 pb-3 overflow-x-auto scrollbar-none">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline">
                Live Simulator:
              </span>
              {[
                { id: 'manufacturing', label: 'Manufacturing', icon: 'Factory' },
                { id: 'hospital', label: 'Hospital', icon: 'Hospital' },
                { id: 'retail', label: 'Retail POS', icon: 'Store' },
                { id: 'logistics', label: 'Logistics', icon: 'Truck' },
                { id: 'it-software', label: 'IT Software', icon: 'Code2' }
              ].map(sec => (
                <button
                  key={sec.id}
                  onClick={() => setHeroSector(sec.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
                    heroSector === sec.id
                      ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                      : 'bg-navy-900/90 text-slate-400 hover:text-white hover:bg-navy-850 border border-navy-800'
                  }`}
                >
                  <DynamicIcon name={sec.icon} className="w-3.5 h-3.5" />
                  <span>{sec.label}</span>
                </button>
              ))}
            </div>

            {/* Dashboard Mock Window Container */}
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950 border border-navy-700/80 shadow-2xl backdrop-blur-xl">
              
              {/* Window controls bar */}
              <div className="px-5 py-3.5 bg-navy-950/95 rounded-t-2xl border-b border-navy-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="ml-3 text-xs font-mono text-slate-400">nirghos.enterprise.cloud/workspace/{heroSector}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    {currentHeroPreview.title}
                  </span>
                  <Link 
                    to={`/dashboard?industry=${heroSector}`}
                    className="px-3 py-1 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold flex items-center gap-1 transition shadow-xs"
                  >
                    Launch Full View <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Mock Dashboard Body */}
              <div className="p-5 sm:p-6 bg-slate-900/95 rounded-b-2xl text-slate-200 space-y-5 animate-in fade-in duration-300">
                
                {/* 4 Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800/90 shadow-inner">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">{currentHeroPreview.stat1.label}</span>
                    <div className="text-xl sm:text-2xl font-black text-white mt-1">{currentHeroPreview.stat1.val}</div>
                    <span className="text-xs text-emerald-400 font-semibold">{currentHeroPreview.stat1.sub}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800/90 shadow-inner">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">{currentHeroPreview.stat2.label}</span>
                    <div className="text-xl sm:text-2xl font-black text-white mt-1">{currentHeroPreview.stat2.val}</div>
                    <span className="text-xs text-brand-300 font-semibold">{currentHeroPreview.stat2.sub}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800/90 shadow-inner">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">{currentHeroPreview.stat3.label}</span>
                    <div className="text-xl sm:text-2xl font-black text-white mt-1">{currentHeroPreview.stat3.val}</div>
                    <span className="text-xs text-sky-400 font-semibold">{currentHeroPreview.stat3.sub}</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800/90 shadow-inner">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">{currentHeroPreview.stat4.label}</span>
                    <div className="text-xl sm:text-2xl font-black text-white mt-1">{currentHeroPreview.stat4.val}</div>
                    <span className="text-xs text-emerald-400 font-semibold">{currentHeroPreview.stat4.sub}</span>
                  </div>
                </div>

                {/* Split Graphic Visual: Bar simulation & Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Revenue Curve Simulation */}
                  <div className="lg:col-span-2 p-5 rounded-2xl bg-navy-950 border border-navy-800">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                          Real-Time Operational Cash Flow & Billing Stream
                        </span>
                        <p className="text-[11px] text-slate-400">Synchronous double-entry accounting ledger</p>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        AUDITED OK
                      </span>
                    </div>

                    {/* Chart Bars */}
                    <div className="h-32 flex items-end justify-between gap-2 pt-2 px-1">
                      {[38, 48, 62, 54, 72, 85, 78, 88, 95, 90, 96, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                          <div 
                            style={{ height: `${h}%` }} 
                            className="w-full bg-gradient-to-t from-brand-700 via-brand-500 to-sky-400 rounded-t-sm group-hover:brightness-125 transition-all shadow-xs"
                          ></div>
                          <span className="text-[9px] text-slate-500 font-mono">
                            {['J','F','M','A','M','J','J','A','S','O','N','D'][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Active Sector Modules List */}
                  <div className="p-5 rounded-2xl bg-navy-950 border border-navy-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Active Sector Modules
                      </span>
                      <span className="text-[10px] text-brand-400 font-mono">5 ONLINE</span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      {currentHeroPreview.modules.map((m, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-navy-900/70 border border-navy-850 hover:border-brand-500/40 transition">
                          <span className="flex items-center gap-2 text-slate-300 font-medium text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            {m}
                          </span>
                          <span className="text-[10px] text-emerald-400 font-mono">Active</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Enterprise Compliance Marquee Strip */}
          <div className="mt-14 pt-8 border-t border-navy-800/80 flex flex-wrap items-center justify-between gap-6 text-xs text-slate-400 max-w-[1440px] mx-auto">
            <span className="font-semibold text-slate-400">Enterprise Standards Certified:</span>
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-400" /> ISO/IEC 27001
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-400" /> SOC 2 Type II
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-400" /> FDA 21 CFR Part 11
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-400" /> HIPAA / EMR Compliant
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-400" /> GST / VAT Ready
              </span>
            </div>
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
