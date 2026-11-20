import React, { useState, useRef, useEffect } from 'react';
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
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  X,
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
  ShoppingBag,
  Lightbulb,
  Rocket,
  FileText,
  Calendar,
  User,
  MapPin,
  Plus,
  Minus
} from 'lucide-react';
import { industriesData } from '../../data/industries';
import SearchBar from '../../components/SearchBar/SearchBar';
import DemoModal from '../../components/common/DemoModal';
import DynamicIcon from '../../components/common/DynamicIcon';
import AnimatedCounter from '../../components/common/AnimatedCounter';
import { useDemo } from '../../context/DemoContext';

export const Home = () => {
  const { isAuthenticated, profile } = useDemo();
  const [searchQuery, setSearchQuery] = useState('');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [sliderMode, setSliderMode] = useState('categories'); // 'categories' | 'brands'
  const [activeErpProduct, setActiveErpProduct] = useState('gsoft');
  const [productSlideIndex, setProductSlideIndex] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);
  const [testimonialSlideIndex, setTestimonialSlideIndex] = useState(0);
  const [activeStoryVideo, setActiveStoryVideo] = useState(null);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderTrackRef = useRef(null);
  const [cardStep, setCardStep] = useState(400);
  const [selectedPressModal, setSelectedPressModal] = useState(null);
  const [pressSlideIndex, setPressSlideIndex] = useState(0);
  const [selectedBlogModal, setSelectedBlogModal] = useState(null);
  const [selectedEventModal, setSelectedEventModal] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  // Measure card width + gap dynamically
  useEffect(() => {
    const updateCardStep = () => {
      if (sliderTrackRef.current) {
        const firstCard = sliderTrackRef.current.querySelector('.testimonial-card');
        if (firstCard) {
          const cardWidth = firstCard.getBoundingClientRect().width;
          const gap = window.innerWidth >= 640 ? 24 : 20;
          setCardStep(cardWidth + gap);
        }
      }
    };
    updateCardStep();
    window.addEventListener('resize', updateCardStep);
    return () => window.removeEventListener('resize', updateCardStep);
  }, []);

  // Auto-scroll testimonials slider every 4.5s (pauses on hover or drag)
  useEffect(() => {
    if (isTestimonialHovered || isDragging) return;
    const interval = setInterval(() => {
      setTestimonialSlideIndex((prev) => (prev + 1) % 6);
    }, 4500);
    return () => clearInterval(interval);
  }, [isTestimonialHovered, isDragging]);

  // Mouse / Touch Drag handlers for cursor sliding right-to-left and left-to-right
  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStartX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) {
      // Swiped Left -> Next Slide
      setTestimonialSlideIndex((prev) => (prev + 1) % 6);
    } else if (dragOffset > 50) {
      // Swiped Right -> Previous Slide
      setTestimonialSlideIndex((prev) => (prev === 0 ? 5 : prev - 1));
    }
    setDragOffset(0);
  };

  // Hero interactive sector switcher preview (defaults to registered sector if authenticated)
  const [heroSector, setHeroSector] = useState(profile?.slug || 'manufacturing');

  React.useEffect(() => {
    if (isAuthenticated && profile?.slug) {
      setHeroSector(profile.slug);
    }
  }, [isAuthenticated, profile?.slug]);

  const navigate = useNavigate();

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
    retail: { bg: 'bg-sky-50', text: 'text-[#0284c7]', border: 'border-sky-200', badge: 'POS & Billing' },
    construction: { bg: 'bg-yellow-50', text: 'text-yellow-800', border: 'border-yellow-200', badge: 'Real Estate & EPC' },
    automobile: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', badge: 'Auto & Spare Parts' },
    textile: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', badge: 'Apparel & Fabric' },
    pharma: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', badge: 'FDA & Batch Trace' },
    'food-beverage': { bg: 'bg-sky-50', text: 'text-[#0369a1]', border: 'border-sky-200', badge: 'Food & Processing' },
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
    ecommerce: { bg: 'bg-sky-50', text: 'text-[#0284c7]', border: 'border-sky-200', badge: 'Omnichannel D2C' },
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
          <span className="text-sm sm:text-base font-bold text-[#0284c7] leading-none">soft</span>
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
          <span className="text-sm sm:text-base font-bold text-[#0284c7] leading-none">soft</span>
          <span className="text-[9px] font-black uppercase px-1 py-0.2 rounded bg-sky-100 text-[#0284c7] border border-sky-200 ml-0.5">ERP</span>
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
      name: 'Nirghos BIZPRO',
      icon: Cpu,
      iconBg: '#dbeafe',
      iconColor: '#2563eb',
      badge: 'Trading & Distribution',
      renderLogo: () => (
        <div className="flex flex-col text-left font-sans">
          <span className="text-xs sm:text-sm font-black text-[#0284c7] leading-none">Nirghos</span>
          <span className="text-[9px] font-black uppercase tracking-wider text-slate-800 leading-none mt-0.5">BIZPRO</span>
        </div>
      ),
      heading: 'Trading, Distribution & Wholesale ERP',
      desc: 'Nirghos BIZPRO provides end-to-end supply chain distribution, multi-warehouse stock management, automated credit limits, e-way bill generation, and GST compliance for high-volume traders.',
      monitorCaption: 'Nirghos BIZPRO Supply Chain & Distribution Suite',
      slides: [
        'Nirghos BIZPRO Supply Chain & Distribution Suite',
        'Nirghos BIZPRO Multi-Warehouse Bin Control',
        'Nirghos BIZPRO Automated E-Way Bill & GST'
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
      name: 'Nirghos Omni',
      icon: Globe,
      iconBg: '#ccfbf1',
      iconColor: '#0d9488',
      badge: 'Omnichannel & Sync',
      renderLogo: () => (
        <div className="flex items-center gap-1 font-sans">
          <span className="text-xs sm:text-sm font-bold text-slate-500 leading-none">Nirghos</span>
          <span className="text-xs sm:text-sm font-black text-[#0d9488] leading-none">omni</span>
        </div>
      ),
      heading: 'Omnichannel Retail & E-Commerce Sync',
      desc: 'Unify your offline retail POS counters with online marketplaces (Amazon, Flipkart, Shopify, WooCommerce) in real time with central inventory sync, barcode dispatch, and returns management.',
      monitorCaption: 'Nirghos Omni E-Commerce Sync Control Center',
      slides: [
        'Nirghos Omni E-Commerce Sync Control Center',
        'Nirghos Omni Central Marketplace Inventory',
        'Nirghos Omni Automated Order Dispatch Hub'
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
      name: 'Nirghos CHATBOX',
      icon: MessageSquare,
      iconBg: '#d1fae5',
      iconColor: '#059669',
      badge: 'WhatsApp Automation',
      renderLogo: () => (
        <div className="flex flex-col text-left font-sans">
          <span className="text-[8px] font-bold text-slate-500 leading-none">Nirghos</span>
          <span className="text-xs sm:text-sm font-black text-[#059669] leading-none">CHATBOX</span>
        </div>
      ),
      heading: 'WhatsApp Automated Customer Engagement Hub',
      desc: 'Automate payment reminders, GST invoice PDFs, order dispatches, OTP confirmations, and promotional broadcast campaigns directly via official Meta WhatsApp Business API.',
      monitorCaption: 'Nirghos CHATBOX Smart WhatsApp Dispatch Engine',
      slides: [
        'Nirghos CHATBOX Smart WhatsApp Dispatch Engine',
        'Nirghos CHATBOX Automated Invoice Dispatcher',
        'Nirghos CHATBOX Customer Broadcast Campaigns'
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

  // 6 Verified Client Testimonials for Home Page Slider (Exact Match to User Screenshot)
  const homeTestimonials = [
    {
      id: 1,
      quote: "I have been connected with Nirghos since 2001, my experience tells Nirghos provides simple, easy & accurate software including features like inventory management, financial accounting management and...",
      fullQuote: "I have been connected with Nirghos since 2001, my experience tells Nirghos provides simple, easy & accurate software including features like inventory management, financial accounting management, GST compliance, and real-time ledger accounting. It has completely streamlined our textile wholesale operations.",
      name: "Mr. Dhaval Patel",
      org: "Cotton House, Ahmedabad",
      hasVideo: false
    },
    {
      id: 2,
      quote: "First of all, I would like to Thank Nirghos ERP Solutions Pvt. Ltd. for their wonderful software and Impactful Service , their service is very good and We actually very happy. Actually I have taken Demo...",
      fullQuote: "First of all, I would like to Thank Nirghos ERP Solutions Pvt. Ltd. for their wonderful software and Impactful Service , their service is very good and We actually very happy. Actually I have taken Demo, and the team's immediate response to support tickets and bespoke inventory customizations has given us unmatched peace of mind.",
      name: "Mr. Noel Liby",
      org: "Moodhayil Gold and Diamonds , Kerala",
      hasVideo: false
    },
    {
      id: 3,
      quote: "Before expanding My Business, I was concerned about managing branches . After Reviewing several Jewellery ERP Systems, J-Soft stood out of all by its advanced features & extreme support. Our...",
      fullQuote: "Before expanding My Business, I was concerned about managing branches . After Reviewing several Jewellery ERP Systems, J-Soft stood out of all by its advanced features & extreme support. Our multi-branch synchronization, karigar stock auditing, and centralized reporting made our interstate expansion completely effortless.",
      name: "Mr. Sunil Mosun",
      org: "JKJ and Sons Jewellers, Jaipur",
      hasVideo: true,
      videoTitle: "Multi-Branch Jewellery Synchronisation & Karigar Auditing"
    },
    {
      id: 4,
      quote: "I have been using Nirghos's JSoft ERP Software for almost four years. It is specially designed for the jewellery industry according to their requirements. If you are thinking of getting software, then JSoft ER...",
      fullQuote: "I have been using Nirghos's JSoft ERP Software for almost four years. It is specially designed for the jewellery industry according to their requirements. If you are thinking of getting software, then JSoft ERP is the top choice for hallmarking, bullion fluctuation and worker loss tracking.",
      name: "Mr. Sagar",
      org: "Sagar Gold , Surat",
      hasVideo: true,
      videoTitle: "Manufacturing Output & Daily Bullion Rate Dynamic Sync"
    },
    {
      id: 5,
      quote: "We are connected with Nirghos since 2003. They provide complete solutions for Retail & Wholesale software. Customer support is prompt, dependable, and always ready to tailor reports...",
      fullQuote: "We are connected with Nirghos since 2003. They provide complete solutions for Retail & Wholesale software. Customer support is prompt, dependable, and always ready to tailor reports according to our expanding multi-store requirements.",
      name: "Mr. Anil Dua",
      org: "Basic Casual Clothing, Ahmedabad",
      hasVideo: false
    },
    {
      id: 6,
      quote: "Thank you for Supporting our Business with Gsoft Extreme ERP and E-commerce website. All the small issues which we faced have been resolved swiftly by their engineering team...",
      fullQuote: "Thank you for Supporting our Business with Gsoft Extreme ERP and E-commerce website. All the small issues which we faced have been resolved swiftly by their engineering team. The bi-directional sync between POS and online store is lightning fast.",
      name: "Mr. Narendra Mehta",
      org: "In Vogue, Ahmedabad",
      hasVideo: false
    }
  ];

  // 10 Official Nirghos ERP API Integrations (Exact Match to User Screenshot)
  const apiIntegrations = [
    { id: 'woocommerce', name: 'WooCommerce', logo: '/integrations/woocommerce-logo.png' },
    { id: 'paytm', name: 'Paytm', logo: '/integrations/paytm-logo.png' },
    { id: 'fynd', name: 'Fynd', logo: '/integrations/fynd-logo.png' },
    { id: 'quicksell', name: 'QuickSell', logo: '/integrations/quicksell-logo.png' },
    { id: 'razorpay', name: 'Razorpay', logo: '/integrations/razorpay-logo.png' },
    { id: 'tally', name: 'Tally Prime', logo: '/integrations/tally-logo.png' },
    { id: 'sequel', name: 'Sequel 247', logo: '/integrations/sequel-logo.png' },
    { id: 'shopify', name: 'Shopify', logo: '/integrations/shopify-logo.png' },
    { id: 'pinelabs', name: 'Pine Labs', logo: '/integrations/pinelabs-logo.png' },
    { id: 'hdfc', name: 'HDFC Bank', logo: '/integrations/hdfc-logo.png' }
  ];

  // Press Release Media Coverage Articles (Exact Match to User Screenshot)
  const pressArticles = [
    {
      id: 1,
      type: 'video',
      source: 'Special Video Broadcast',
      sourceColor: 'text-rose-600',
      badge: 'Launch Ceremony',
      headline: 'New Identity, New Technology: Nirghos Evolve Held at AMA Ahmedabad',
      subtitle: 'નિર્ઘોસ ERP નો નવી ક્લાઉડ ટેકનોલોજી સાથે ભવ્ય શુભારંભ',
      image: '/press/nirghos-press-1.png',
      date: 'May 20, 2024',
      summary: 'Grand unveiling of Nirghos ERP Solutions Pvt. Ltd. at JB Auditorium, AMA. Industry leaders and partners joined founders Narendra Lunagaria and Nitesh Lunagaria to celebrate 25 years of technology innovation.',
      highlights: [
        'Unveiling of Next-Gen Cloud Architecture',
        '250+ Enterprise Clients Attended',
        'Live Demonstration of JSoft & GSoft ERP'
      ]
    },
    {
      id: 2,
      type: 'news',
      source: 'Times of Gujarat',
      sourceColor: 'text-sky-600',
      badge: 'Leading Daily',
      headline: "New Identity, New Technology, and a New Vision: 'Nirghos Evolve – A New Identity, A New Era' Held on May 20",
      subtitle: 'Nirghos ERP Transitions from Desktop to Next-Gen Cloud Platform',
      image: '/press/nirghos-press-2.png',
      date: 'May 21, 2024',
      summary: 'Times of Gujarat reports on Nirghos ERP completing 25 successful years in enterprise automation, rolling out AI-driven retail POS, multi-branch synchronization, and dedicated jewellery manufacturing suites.',
      highlights: [
        'Dedicated JSoft Jewellery Cloud Suite',
        'RFID Batch & Hallmark Precision Tracking',
        'Fast Pan-India Expansion to 400+ Cities'
      ]
    },
    {
      id: 3,
      type: 'portal',
      source: 'Gujarat Headline',
      sourceColor: 'text-blue-700',
      badge: "Gujarat's Leading News Channel",
      headline: 'Nirghos ERP Celebrates 25 Years of Enterprise Innovation & Unveils Brand Evolution',
      subtitle: 'Commitment to Shaping India’s Digital Economy through Intelligent ERP',
      image: '/press/nirghos-press-3.png',
      date: 'May 21, 2024',
      summary: 'In a grand event at Ahmedabad Management Association, Nirghos ERP Solutions Pvt. Ltd. announced its transition into cloud-driven enterprise systems with web reporting for Apparel, Lifestyle, and Footwear industries.',
      highlights: [
        'AI CCTV Video Analytics (AI Cam 360)',
        'Zero-Latency WhatsApp Cloud Invoicing',
        'Automated GST E-Invoicing & E-Way Bills'
      ]
    }
  ];

  // 3 Featured Blog Articles for Home Page (Exact Match to User Screenshot)
  const homeBlogPosts = [
    {
      id: 1,
      tag: 'AI in ERP',
      date: '16/11/2026',
      title: 'Business In 2027: Why AI, Automation and...',
      fullTitle: 'Business In 2027: Why AI, Automation and Smart ERP Are Non-Negotiable',
      author: 'Himanshi M Kumawat',
      image: '/blogs/blog-card-1.png',
      readTime: '5 min read',
      summary: 'Explore how generative ERP interfaces, autonomous reconciliation bots, and predictive demand analytics give forward-thinking enterprises an unbeatable edge heading into 2027.',
      keyTakeaways: [
        'Autonomous vendor invoice matching and zero-touch ledger entry',
        'Real-time cash flow predictions using multi-variate ML models',
        'Edge AI synchronization across multi-warehouse supply chains'
      ]
    },
    {
      id: 2,
      tag: 'AI in ERP, AI Video Analytics',
      date: '03/11/2026',
      title: 'AI Video Analytics for Retail: What Your...',
      fullTitle: 'AI Video Analytics for Retail: What Your CCTV Cameras Can Tell You',
      author: 'Himanshi M Kumawat',
      image: '/blogs/blog-card-2.png',
      readTime: '6 min read',
      summary: 'Turn existing security cameras into high-precision business intelligence tools. Measure store footfalls, customer dwell time heatmaps, and checkout queue delays in real time.',
      keyTakeaways: [
        'AI Cam 360: In-store customer journey & shelf engagement tracking',
        'Automatic queue threshold alerts to speed up counter billing',
        'Zero-hardware replacement: Seamless IP camera integration'
      ]
    },
    {
      id: 3,
      tag: 'HRMS & CRM',
      date: '29/10/2026',
      title: 'An Integrated Payroll, HRMS, CRM, and...',
      fullTitle: 'An Integrated Payroll, HRMS, CRM, and Enterprise Automation Solution',
      author: 'Himanshi M Kumawat',
      image: '/blogs/blog-card-3.png',
      readTime: '4 min read',
      summary: 'Why fragmented HR and sales spreadsheets hold companies back, and how Nirghos Unified Workspace synchronizes biometric attendance, payroll taxes, and sales pipelines seamlessly.',
      keyTakeaways: [
        'Automated PF, ESIC, PT, and TDS calculation with 1-click payslips',
        'Omni-channel CRM with WhatsApp notifications and lead tracking',
        'Employee self-service mobile portal for leaves and reimbursement'
      ]
    }
  ];

  // Corporate Events Data for Home Page (Matching User Screenshot with 100% Nirghos Branding)
  const homeCorporateEvents = [
    {
      id: 1,
      date: '20/05/2024',
      location: 'Ahmedabad, Gujarat',
      venue: 'Ahmedabad Management Association (AMA) – JB Auditorium',
      title: 'Nirghos Event : A New Identity . A New Era',
      fullTitle: 'Nirghos Corporate Event: Nirghos Evolve – A New Identity, A New Era (25 Years Milestone)',
      image: '/events/event-card-1.png',
      desc: 'Nirghos E Barcode Solutions celebrated 25 successful years and unveiled its new identity: Nirghos ERP Solutions Pvt. Ltd., showcasing cutting-edge cloud ERP advancements with founders Narendra Lunagaria and Nitesh Lunagaria.',
      highlights: [
        'Launch of Cloud ERP for Jewellers (JSoft ERP)',
        'AI, RFID Batch Automation & CCTV Analytics',
        'Web Reports for Apparel, Lifestyle & Footwear (GSoft ERP)'
      ]
    },
    {
      id: 2,
      date: '16/02/2026',
      location: 'Raipur, Chhattisgarh',
      venue: 'Hotel Sayaji Convention Center, Raipur',
      title: 'Business Solution Summit 2026',
      fullTitle: 'Business Solution Summit 2026: Modern Retail, Wholesale & Manufacturing Transformation',
      image: '/events/event-card-2.png',
      desc: 'Industry leaders and trade heads joined the traditional lamp-lighting inaugural ceremony to explore cloud synchronization, GST e-invoicing compliance, and multi-branch retail POS architectures.',
      highlights: [
        'Inaugural lamp lighting by distinguished industry delegates',
        'Offline-first POS with sub-second thermal billing demos',
        'Live warehouse godown multi-location stock routing'
      ]
    },
    {
      id: 3,
      date: '15/07/2024',
      location: 'Surat, Gujarat',
      venue: 'Surat International Exhibition & Convention Centre (SIECC)',
      title: 'ERP Summit 2024',
      fullTitle: 'ERP Summit 2024: Shaping Gujarat’s Enterprise Digital Highway',
      image: '/events/event-card-3.png',
      desc: 'A packed auditorium of 400+ diamond, textile, and manufacturing business owners gathered to discuss rapid digital transformation, custom barcodes, and zero-defect ERP implementations.',
      highlights: [
        'Specialized keynote for diamond and jewellery manufacturers',
        'Textile style-color-size matrix demo with dynamic karigar rates',
        'Panel discussion with Gujarat leading business pioneers'
      ]
    }
  ];

  // Frequently Asked Questions (FAQ) Data for Home Page (Matching User Screenshot with 100% Nirghos Details)
  const homeFaqs = [
    {
      id: 1,
      num: '1.',
      question: 'What is ERP, and how can it help my business?',
      answer: 'ERP (Enterprise Resource Planning) is an all-in-one software platform that unifies all your core departments—including inventory management, accounting & GST, sales billing, procurement, manufacturing, and customer relations—into a single synchronized real-time dashboard. Nirghos ERP eliminates manual paperwork, prevents stock discrepancies across multiple branches and godowns, and delivers live profit-and-loss insights so you can make confident, data-driven business decisions.'
    },
    {
      id: 2,
      num: '2.',
      question: 'How quickly can I implement your ERP system?',
      answer: 'Thanks to Nirghos ERP’s pre-configured industry blueprints and automated Excel import utilities, standard implementations typically go live in as little as 7 to 14 days. For large enterprise deployments with multi-branch synchronization and hardware integrations (RFID batch tags, barcode scanners, and biometric devices), our dedicated deployment engineers ensure complete opening balance migration, testing, and staff training within 2 to 3 weeks with zero business disruption.'
    },
    {
      id: 3,
      num: '3.',
      question: 'Can your ERP system be customized for my industry?',
      answer: 'Yes, 100%! Nirghos ERP provides dedicated, purpose-built editions out of the box: JSoft ERP tailored specifically for Jewellery retailers and manufacturers (with purity recalculation, karigar metal loss tracking, and hallmarking), GSoft ERP for Apparel, Footwear & Lifestyle (with style-color-size matrix billing and automated e-way bills), alongside customized suites for Discrete & Process Manufacturing, Supermarkets, and Wholesale Distribution.'
    },
    {
      id: 4,
      num: '4.',
      question: 'Will my existing data be safe during migration?',
      answer: 'Your data security and confidentiality are our highest priority. Nirghos ERP utilizes military-grade 256-bit AES encryption, automated daily off-site cloud backups, and ISO-27001 certified high-availability servers. Our technical team conducts thorough dry-run reconciliation checks, verifying every customer ledger, outstanding payment, and inventory SKU before the final switchover, ensuring 100% data integrity with zero data loss.'
    },
    {
      id: 5,
      num: '5.',
      question: 'Does your ERP system support mobile access?',
      answer: 'Yes! Nirghos ERP includes native, intuitive mobile apps for Android and iOS as well as cloud-based web portals. Business owners and field teams can track live sales counters, approve purchase orders, generate GST invoice PDFs, and monitor multi-branch stock levels in real time from any smartphone or tablet anywhere in the world.'
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
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[550px] h-[380px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none"></div>

        {/* Faint dot matrix patterns on corners */}
        <div className="absolute bottom-3 right-6 w-32 h-20 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-75 pointer-events-none"></div>
        <div className="absolute bottom-3 left-6 w-32 h-20 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40 pointer-events-none"></div>

        {/* Hero Headline and Trust Bar Container (Expanded to eliminate excessive side margins) */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 space-y-4">
          
          {/* Line 1: Trusted ERP Software (Orange) */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#0284c7] tracking-tight leading-tight">
            Trusted ERP Software
          </h2>

          {/* Line 2 & 3: For Apparel-Lifestyle, Footwear & Jewellery Businesses in India (Blue) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-[#0284c7] tracking-tight leading-[1.18]">
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
              className="px-8 py-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
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
                  ? 'bg-[#0284c7] text-white shadow-md shadow-orange-500/20 scale-105'
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
                  ? 'bg-[#0284c7] text-white shadow-md shadow-orange-500/20 scale-105'
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
                  bg: 'bg-sky-50',
                  text: 'text-[#0284c7]',
                  border: 'border-sky-200',
                  badge: 'Specialized ERP'
                };

                return (
                  <Link
                    key={`${ind.slug}-${idx}`}
                    to={`/industries/${ind.slug}`}
                    className="w-60 sm:w-72 h-20 sm:h-22 bg-white rounded-2xl border border-slate-200/90 hover:border-[#0284c7] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3.5 px-4 py-3 shrink-0 select-none group cursor-pointer"
                  >
                    {/* Category Logo Badge */}
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${theme.bg} ${theme.text} ${theme.border} border flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-[#0284c7] group-hover:text-white group-hover:border-[#0284c7] transition-all duration-200`}>
                      <DynamicIcon name={ind.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Category Name & Tag */}
                    <div className="flex flex-col min-w-0 text-left">
                      <span className="text-xs sm:text-sm font-black text-slate-800 group-hover:text-[#0284c7] transition-colors leading-tight truncate">
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
              <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
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
                className="px-3 py-1.5 rounded-full border border-slate-200/90 bg-white hover:border-[#0284c7] hover:bg-sky-50/60 hover:text-[#0284c7] transition-all text-xs font-bold text-slate-700 shadow-xs hover:shadow-sm hover:-translate-y-0.5 flex items-center gap-1.5 group cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] group-hover:scale-125 transition-transform"></span>
                <DynamicIcon name={item.icon} className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#0284c7] transition-colors" />
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
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 text-[#0284c7] flex items-center justify-center shrink-0">
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
              <div className="w-16 h-1 bg-[#0284c7] rounded-full my-3"></div>

              {/* Exact Description Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                Nirghos ERP Solutions Pvt. Ltd. provides absolute ERP, Desktop, Mobile application and Cloud Based Solutions for the Retailers, Distributors, and Manufacturers to enhance them with advanced technology and contains expertise of 25 years. We are accomplished to deliver quality software products and solutions. We have successfully served 5,000+ clients across 400+ cities, including major cities and small towns in Gujarat, Rajasthan, Maharashtra, Madhya Pradesh, Delhi, Hyderabad, and Haryana, supported by a strong team of 250+ employees.
              </p>

              {/* Blue "Know More" Button */}
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
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
            <div className="w-16 h-1 bg-[#0284c7] rounded-full mx-auto mt-2.5"></div>
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
                      ? 'border-2 border-[#0284c7] shadow-md shadow-blue-500/15 -translate-y-1 ring-2 ring-blue-500/10'
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
                        isActive ? 'text-[#0284c7]' : 'text-slate-800'
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
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    Explore More
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-300 hover:border-orange-300 hover:text-[#0284c7] bg-white text-slate-700 font-bold text-sm transition-all shadow-2xs cursor-pointer"
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
                          ? 'w-6 h-2 bg-[#0284c7]'
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
            <div className="w-16 h-1 bg-[#0284c7] rounded-full mx-auto mt-2.5"></div>
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
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug mt-0.5 group-hover:text-[#0284c7] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Circular Blue Action Button with ArrowUpRight */}
                    <div 
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0284c7] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#0369a1] group-hover:scale-110 group-hover:rotate-12 transition-all"
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 hover:border-[#0284c7] hover:text-[#0284c7] bg-white text-slate-700 font-bold text-sm transition-all shadow-2xs hover:shadow-sm cursor-pointer"
            >
              <span>{showAllServices ? 'Show Less Services' : 'View All Services (6)'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAllServices ? 'rotate-180' : ''}`} />
            </button>

            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Schedule Free Service Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY NIRGHOS SECTION (EXACT MATCH TO USER SCREENSHOT)                   */}
      {/* ========================================================================= */}
      <section id="why-nirghos-section" className="py-14 lg:py-20 bg-gradient-to-b from-white via-[#f8fbff] to-white relative overflow-hidden border-b border-slate-200/80">
        
        {/* Soft Background Grid Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header: Why Nirghos? & Orange Accent Underline (Exact Match to Screenshot) */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Why Nirghos?
            </h2>
            <div className="w-16 h-1 bg-[#0284c7] rounded-full mx-auto mt-2.5"></div>
          </div>

          {/* 2-Column Showcase: 4-Quadrant Blue Card on Left + Success Team Culture on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: 4-Quadrant Royal Blue Card with Center Lightbulb Badge */}
            <div className="lg:col-span-7 relative bg-gradient-to-br from-[#0066c0] via-[#0284c7] to-[#00509e] rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_-15px_rgba(0,96,185,0.25)] overflow-hidden flex flex-col justify-center min-h-[380px] sm:min-h-[440px]">
              
              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* White Cross Dividers Dividing 4 Quadrants */}
              <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 w-px bg-white/20 pointer-events-none"></div>
              <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-px bg-white/20 pointer-events-none"></div>

              {/* Center Lightbulb Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-[#0284c7] z-20 transition-transform duration-300 hover:scale-110">
                <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-[#0284c7] stroke-[2.4]" />
              </div>

              {/* 4 Quadrants Content Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-12 relative z-10 text-center">
                
                {/* Quadrant 1: Top-Left (360 Degree Solution) */}
                <div className="flex flex-col items-center justify-center p-2 sm:p-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center mb-3 shadow-inner">
                    <span className="text-white text-xs sm:text-sm font-black tracking-tight">360°</span>
                  </div>
                  <p className="text-white text-xs sm:text-[13px] font-medium leading-relaxed max-w-[210px]">
                    Having 360 Degree Solution for any of your Business Needs
                  </p>
                </div>

                {/* Quadrant 2: Top-Right (Customer Collaboration) */}
                <div className="flex flex-col items-center justify-center p-2 sm:p-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center mb-3 shadow-inner">
                    <Users className="w-5 h-5 text-white stroke-[2.2]" />
                  </div>
                  <p className="text-white text-xs sm:text-[13px] font-medium leading-relaxed max-w-[210px]">
                    Engage Customer for Long-Term Connection and Collaboration
                  </p>
                </div>

                {/* Quadrant 3: Bottom-Left (Employee Proficiency) */}
                <div className="flex flex-col items-center justify-center p-2 sm:p-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center mb-3 shadow-inner">
                    <Award className="w-5 h-5 text-white stroke-[2.2]" />
                  </div>
                  <p className="text-white text-xs sm:text-[13px] font-medium leading-relaxed max-w-[210px]">
                    Ensuring Proficiency of Employees helps Serve our Clients more Efficiently
                  </p>
                </div>

                {/* Quadrant 4: Bottom-Right (Latest Technology) */}
                <div className="flex flex-col items-center justify-center p-2 sm:p-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center mb-3 shadow-inner">
                    <Cpu className="w-5 h-5 text-white stroke-[2.2]" />
                  </div>
                  <p className="text-white text-xs sm:text-[13px] font-medium leading-relaxed max-w-[210px]">
                    We serve Latest Technology to have Best Features and a User Friendly System
                  </p>
                </div>

              </div>

            </div>

            {/* Right Column: Office Success Culture & Team Photo Card */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-50 group min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
              <img 
                src="/why-nirghos-team.jpg" 
                alt="Why Nirghos Team Culture and Success" 
                className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>

              {/* Floating Success Pill Badge at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-lg p-3 sm:p-3.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 text-[#0284c7] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                      Driven by Innovation
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500">
                      25+ Years of Industry Trust
                    </span>
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={() => setIsDemoModalOpen(true)}
                  className="px-4 py-2 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold transition-all shadow-xs cursor-pointer shrink-0"
                >
                  Join Us
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR PROUD STATISTICS SECTION (EXACT MATCH TO USER SCREENSHOT)          */}
      {/* ========================================================================= */}
      <section id="our-stats-section" className="py-14 lg:py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
        
        {/* Subtle Decorative Dot Matrix in Corners (Exact Match to Screenshot) */}
        <div className="absolute top-6 left-6 w-28 h-28 sm:w-36 sm:h-36 bg-[radial-gradient(#0284c7_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-6 right-6 w-28 h-28 sm:w-36 sm:h-36 bg-[radial-gradient(#0284c7_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-20 pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header: Our Proud Statistics & Orange Accent Underline */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Our Proud Statistics
            </h2>
            <div className="w-16 h-1 bg-[#0284c7] rounded-full mx-auto mt-2.5"></div>
          </div>

          {/* Statistics Showcase: 4 Circular Badges Flanking Center India Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-items-center">
            
            {/* Desktop Left Column (Stats 1 & 2) / Mobile Top Pair */}
            <div className="w-full lg:col-span-3 flex lg:flex-col items-center justify-around sm:justify-center gap-6 sm:gap-12 lg:gap-16 order-1">
              
              {/* Stat 1: 5,000+ Happy Clients */}
              <div className="relative group">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-sky-300/80 bg-white shadow-lg shadow-sky-500/5 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-[#0284c7] group-hover:shadow-xl">
                  
                  {/* Continuously Orbiting Satellite Blue Dot */}
                  <div className="absolute inset-0 pointer-events-none rounded-full animate-orbit-1">
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0284c7] ring-4 ring-white shadow-md">
                      <div className="w-full h-full rounded-full bg-sky-400 animate-ping opacity-60"></div>
                    </div>
                  </div>
                  
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0284c7] tracking-tight relative z-10">
                    <AnimatedCounter target={5000} suffix="+" duration={2200} />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 mt-1 whitespace-nowrap relative z-10">
                    Happy Clients
                  </span>
                </div>
              </div>

              {/* Stat 2: 4.8+ Google Rating (Desktop Only on Left) */}
              <div className="relative group hidden lg:block">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-sky-300/80 bg-white shadow-lg shadow-sky-500/5 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-[#0284c7] group-hover:shadow-xl">
                  
                  {/* Continuously Orbiting Satellite Blue Dot */}
                  <div className="absolute inset-0 pointer-events-none rounded-full animate-orbit-2">
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0284c7] ring-4 ring-white shadow-md">
                      <div className="w-full h-full rounded-full bg-sky-400 animate-ping opacity-60"></div>
                    </div>
                  </div>

                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0284c7] tracking-tight relative z-10">
                    <AnimatedCounter target={4.8} decimals={1} suffix="+" duration={2000} />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 mt-1 whitespace-nowrap relative z-10">
                    Google Rating
                  </span>
                </div>
              </div>

            </div>

            {/* Middle Column: India Map with Client Density Points & State Capitals */}
            <div className="w-full lg:col-span-6 flex items-center justify-center relative py-2 order-2">
              <div className="relative group max-w-[380px] sm:max-w-[460px] lg:max-w-[500px] w-full flex items-center justify-center">
                <img 
                  src="/stats/india-stats-map-hd.png" 
                  alt="Nirghos ERP Pan-India Client Statistics Map" 
                  className="w-full h-auto object-contain select-none transition-transform duration-500 group-hover:scale-[1.03] drop-shadow-md"
                />
              </div>
            </div>

            {/* Desktop Right Column (Stats 3 & 4) / Mobile Bottom Pair */}
            <div className="w-full lg:col-span-3 flex lg:flex-col items-center justify-around sm:justify-center gap-6 sm:gap-12 lg:gap-16 order-3">
              
              {/* Stat 3: 250+ Employees */}
              <div className="relative group">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-sky-300/80 bg-white shadow-lg shadow-sky-500/5 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-[#0284c7] group-hover:shadow-xl">
                  
                  {/* Continuously Orbiting Satellite Blue Dot */}
                  <div className="absolute inset-0 pointer-events-none rounded-full animate-orbit-3">
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0284c7] ring-4 ring-white shadow-md">
                      <div className="w-full h-full rounded-full bg-sky-400 animate-ping opacity-60"></div>
                    </div>
                  </div>

                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0284c7] tracking-tight relative z-10">
                    <AnimatedCounter target={250} suffix="+" duration={2000} />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 mt-1 whitespace-nowrap relative z-10">
                    Employees
                  </span>
                </div>
              </div>

              {/* Stat 4: 400+ Cities */}
              <div className="relative group hidden lg:block">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-sky-300/80 bg-white shadow-lg shadow-sky-500/5 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-[#0284c7] group-hover:shadow-xl">
                  
                  {/* Continuously Orbiting Satellite Blue Dot */}
                  <div className="absolute inset-0 pointer-events-none rounded-full animate-orbit-4">
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0284c7] ring-4 ring-white shadow-md">
                      <div className="w-full h-full rounded-full bg-sky-400 animate-ping opacity-60"></div>
                    </div>
                  </div>

                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0284c7] tracking-tight relative z-10">
                    <AnimatedCounter target={400} suffix="+" duration={2200} />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 mt-1 whitespace-nowrap relative z-10">
                    Cities
                  </span>
                </div>
              </div>

            </div>

            {/* Mobile / Tablet Bottom Pair (Google Rating & Cities visible on < lg screens) */}
            <div className="w-full flex lg:hidden items-center justify-around sm:justify-center gap-6 sm:gap-12 order-4">
              
              {/* Stat 2: 4.8+ Google Rating (Mobile) */}
              <div className="relative group">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-sky-300/80 bg-white shadow-lg shadow-sky-500/5 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-[#0284c7] group-hover:shadow-xl">
                  
                  {/* Continuously Orbiting Satellite Blue Dot */}
                  <div className="absolute inset-0 pointer-events-none rounded-full animate-orbit-2">
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0284c7] ring-4 ring-white shadow-md">
                      <div className="w-full h-full rounded-full bg-sky-400 animate-ping opacity-60"></div>
                    </div>
                  </div>

                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0284c7] tracking-tight relative z-10">
                    <AnimatedCounter target={4.8} decimals={1} suffix="+" duration={2000} />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 mt-1 whitespace-nowrap relative z-10">
                    Google Rating
                  </span>
                </div>
              </div>

              {/* Stat 4: 400+ Cities (Mobile) */}
              <div className="relative group">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-sky-300/80 bg-white shadow-lg shadow-sky-500/5 flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-[#0284c7] group-hover:shadow-xl">
                  
                  {/* Continuously Orbiting Satellite Blue Dot */}
                  <div className="absolute inset-0 pointer-events-none rounded-full animate-orbit-4">
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#0284c7] ring-4 ring-white shadow-md">
                      <div className="w-full h-full rounded-full bg-sky-400 animate-ping opacity-60"></div>
                    </div>
                  </div>

                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0284c7] tracking-tight relative z-10">
                    <AnimatedCounter target={400} suffix="+" duration={2200} />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 mt-1 whitespace-nowrap relative z-10">
                    Cities
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. API INTEGRATION & TRUSTED CUSTOMERS (EXACT MATCH TO USER SCREENSHOT)   */}
      {/* ========================================================================= */}
      <section id="api-integration-section" className="py-14 lg:py-20 bg-gradient-to-b from-white via-[#f9fbfe] to-white relative overflow-hidden border-b border-slate-200/80">
        
        {/* Soft Background Grid Tiles */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header: API Integration & Orange Accent Line */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              API Integration
            </h2>
            <div className="w-16 h-1 bg-[#0284c7] rounded-full mx-auto mt-2.5"></div>
            <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
              Connect Nirghos ERP natively with your essential e-commerce storefronts, payment gateways, accounting software, and banking APIs in real time.
            </p>
          </div>

          {/* 10 Partner Logos Box Container (5x2 Grid - Exact Match to User Screenshot) */}
          <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-[0_15px_40px_-15px_rgba(0,96,185,0.08),0_0_1px_1px_rgba(0,0,0,0.03)] p-5 sm:p-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4.5">
              {apiIntegrations.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => setIsDemoModalOpen(true)}
                  className="h-16 sm:h-20 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0284c7] shadow-2xs hover:shadow-md transition-all flex items-center justify-center p-3 sm:p-4 group cursor-pointer hover:-translate-y-0.5"
                  title={`${item.name} Integration for Nirghos ERP`}
                >
                  <img 
                    src={item.logo} 
                    alt={`${item.name} Integration`} 
                    className="max-h-9 sm:max-h-11 w-auto object-contain select-none transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted By 5,000+ Happy Customers & Full-Screen Drag/Swipe Testimonials Carousel */}
        <div className="mt-16 sm:mt-24 w-full">
          
          {/* Header Row: Title on Left, View All on Right */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div className="text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Trusted By <span className="text-[#0284c7]">5,000+</span> Happy <br className="hidden sm:inline" /> Customers
              </h3>
              <div className="w-16 h-1 bg-[#0284c7] rounded-full mt-2.5"></div>
            </div>

            {/* Orange "View All" Button */}
            <div>
              <Link
                to="/testimonials"
                className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 transition-all transform hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                View All
              </Link>
            </div>
          </div>

          {/* Full Screen Cursor-Draggable Testimonials Track (Right-to-Left / Left-to-Right by cursor swipe) */}
          <div 
            className="w-full relative overflow-hidden py-3 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={() => {
              if (isDragging) handleDragEnd();
              setIsTestimonialHovered(false);
            }}
            onMouseEnter={() => setIsTestimonialHovered(true)}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div 
              ref={sliderTrackRef}
              className="flex pl-4 sm:pl-8 lg:pl-16 pr-4 sm:pr-8 gap-5 sm:gap-6"
              style={{
                transform: `translateX(calc(-${testimonialSlideIndex * cardStep}px + ${dragOffset}px))`,
                transition: isDragging ? 'none' : 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1)',
                willChange: 'transform'
              }}
            >
              {[...homeTestimonials, ...homeTestimonials].map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  className="testimonial-card w-[290px] sm:w-[340px] lg:w-[380px] xl:w-[410px] shrink-0 bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-sky-300 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group pointer-events-auto"
                >
                  <div>
                    {/* Quotation Mark Icon in Soft Sky Blue */}
                    <div className="text-sky-300/80 group-hover:text-sky-400 transition-colors mb-3">
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Quote Text Excerpt */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {t.quote}
                    </p>

                    {/* Orange Read More Link */}
                    <Link
                      to="/testimonials"
                      onClick={(e) => {
                        if (Math.abs(dragOffset) > 8) e.preventDefault();
                      }}
                      className="text-xs font-bold text-[#0284c7] hover:text-[#0369a1] mt-2.5 inline-block cursor-pointer transition-colors"
                    >
                      Read More
                    </Link>
                  </div>

                  {/* Bottom Row: Author Name, Org and Video Play Button */}
                  <div className="mt-5 pt-3.5 flex items-end justify-between border-t border-slate-50">
                    <div className="min-w-0 pr-2">
                      <h4 className="text-sm sm:text-base font-black text-slate-900 tracking-tight truncate">
                        {t.name}
                      </h4>
                      <p className="text-xs font-medium text-slate-500 mt-0.5 truncate">
                        {t.org}
                      </p>
                    </div>

                    {/* Video Play Button (Only for Cards with Video: Mr. Sunil Mosun & Mr. Sagar) */}
                    {t.hasVideo && (
                      <button
                        type="button"
                        onClick={(e) => {
                          if (Math.abs(dragOffset) > 8) {
                            e.preventDefault();
                            return;
                          }
                          setActiveStoryVideo(t);
                        }}
                        title={`Watch ${t.name}'s Video Story`}
                        className="w-9 h-9 rounded-full bg-sky-100 hover:bg-sky-200 text-[#0284c7] flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 shadow-xs cursor-pointer shrink-0 ml-2"
                      >
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Pagination Dots (Exact Match to Screenshot: Active Blue Pill + Inactive Gray Circles) */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setTestimonialSlideIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  testimonialSlideIndex === idx
                    ? 'w-6 h-2 rounded-full bg-[#0284c7]'
                    : 'w-2 h-2 rounded-full bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* PRESS RELEASE SECTION (EXACT MATCH TO DESIGN - 100% NIRGHOS BRANDED)      */}
      {/* ========================================================================= */}
      <section id="press-release-section" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#060e19] via-[#0B192C] to-[#040810] text-white relative overflow-hidden">
        {/* Subtle white dot-grid overlay matching the screenshot */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none"></div>
        {/* Soft background light glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Press release
            </h2>
            <div className="w-16 h-1 bg-[#0284c7] rounded-full"></div>
          </div>

          {/* Ahmedabad, India & Paragraphs */}
          <div className="mt-8 space-y-4 text-slate-200 text-xs sm:text-sm lg:text-[15px] leading-relaxed">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Ahmedabad, India
            </h3>
            <p>
              <strong className="text-white">Nirghos E Barcode Solutions Private Limited</strong> celebrated a major milestone as it completed <strong className="text-white">25 successful years</strong> and stepped into a bold new chapter with the official unveiling of its new identity: <strong className="text-white">Nirghos ERP Solutions Pvt. Ltd.</strong> The announcement was made during <strong className="text-[#0284c7]">&ldquo;Nirghos Evolve &ndash; A New Identity, A New Era&rdquo;</strong> event held on May 20 at the Ahmedabad Management Association (AMA) &ndash; JB Auditorium, in the presence of industry guests, valued clients, partners, and company founders Narendra Lunagaria and Nitesh Lunagaria.
            </p>
            <p>
              As part of its evolution, the company showcased significant advancements in digital technology, marking a full transition from traditional desktop-based systems to modern, cloud-driven solutions. Nirghos ERP&apos;s product suite includes <strong className="text-white">JSoft ERP</strong> for jewellery businesses and <strong className="text-white">GSoft ERP</strong> for apparel, lifestyle &amp; footwear.
            </p>
          </div>

          {/* Key Highlights from Event */}
          <div className="mt-6 space-y-3">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Key Highlights from the Event
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-white/10 text-sky-300 flex items-center justify-center shrink-0">
                  <Rocket className="w-4 h-4" />
                </span>
                <span>Launch of Cloud ERP for Jewellers (Jsoft ERP)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-white/10 text-amber-300 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span>AI, Automation &amp; RFID Innovations</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-white/10 text-emerald-300 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </span>
                <span>Web Reports for Apparel, Lifestyle &amp; Footwear Industry: A Vision for a Smarter Digital Future (Gsoft ERP)</span>
              </li>
            </ul>
          </div>

          {/* Orange Highlight Quote Banner */}
          <div className="my-8 p-4 sm:p-5 rounded-2xl bg-[#0284c7] text-white flex items-center gap-3.5 sm:gap-4 shadow-xl">
            <div className="text-white/80 shrink-0">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm font-bold leading-relaxed">
              The Nirghos Evolve event reinforced the Company&apos;s Commitment to Shaping India&apos;s Digital Economy by Delivering Intelligent, Cutting-Edge ERP and Business Technology Solutions.
            </p>
          </div>

          {/* 3 Media Coverage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-8">
            {pressArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedPressModal(article)}
                className="bg-white text-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 hover:shadow-2xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer transform hover:-translate-y-1.5"
              >
                <div>
                  <div className="px-4 py-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                    <span className={`text-xs font-black tracking-tight ${article.sourceColor}`}>
                      {article.source}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                      {article.badge}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden flex items-center justify-center">
                    <img 
                      src={article.image} 
                      alt={article.headline} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    {article.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                          <Play className="w-5 h-5 fill-white ml-0.5" />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-2.5 left-3 right-3 text-left">
                      <span className="text-[10px] font-bold text-sky-200 bg-sky-950/70 px-2 py-0.5 rounded backdrop-blur-xs">
                        {article.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 space-y-2 text-left">
                    <h5 className="text-sm sm:text-base font-bold text-slate-900 leading-snug group-hover:text-[#0284c7] transition-colors line-clamp-2">
                      {article.headline}
                    </h5>
                    {article.subtitle && (
                      <p className="text-xs font-semibold text-slate-500 line-clamp-1">
                        {article.subtitle}
                      </p>
                    )}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-1">
                      {article.summary}
                    </p>
                  </div>
                </div>
                <div className="px-4 py-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0284c7] group-hover:text-[#0369a1]">
                  <span>Read Full Article</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* 10 Pagination Dots (Exact Match to Screenshot) */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((dot) => (
              <span
                key={dot}
                onClick={() => setPressSlideIndex(dot)}
                className={`transition-all duration-300 cursor-pointer ${
                  pressSlideIndex === dot
                    ? 'w-6 h-2 rounded-full bg-white shadow-xs'
                    : 'w-2 h-2 rounded-full bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. OUR BLOG - ERP INSIGHTS SECTION (EXACT MATCH TO USER SCREENSHOT)       */}
      {/* ========================================================================= */}
      <section id="home-blog-section" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#f8fbff] via-white to-slate-50 relative overflow-hidden border-b border-slate-100">
        {/* Soft background ambient light */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Title and View All Button */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Our Blog - ERP Insights
              </h2>
              <div className="w-14 h-1 bg-[#0284c7] rounded-full mt-2"></div>
            </div>
            
            <Link
              to="/blogs"
              className="self-start sm:self-auto inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
            >
              <span>View All</span>
            </Link>
          </div>

          {/* 3 Blog Cards Grid (Matching User Screenshot Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {homeBlogPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedBlogModal(post)}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group p-3.5 sm:p-4 hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  {/* Image Container with Rounded Corners Inside */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-3.5">
                    <img
                      src={post.image}
                      alt={post.fullTitle}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Meta Row: Tag and Date */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0284c7] font-semibold text-[11px] border border-sky-100/80">
                      {post.tag}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.date}</span>
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug line-clamp-2 mb-3">
                    {post.fullTitle}
                  </h3>
                </div>

                {/* Card Footer: Author and Read Post */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-600 font-medium text-[11px] sm:text-xs">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">{post.author}</span>
                  </div>

                  <span className="font-bold text-slate-800 group-hover:text-[#0284c7] flex items-center gap-1 transition-colors text-[11px] sm:text-xs shrink-0">
                    <span>Read Post</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. OUR CORPORATE EVENTS SECTION (EXACT MATCH TO USER SCREENSHOT)          */}
      {/* ========================================================================= */}
      <section id="corporate-events-section" className="pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 lg:pb-14 bg-gradient-to-br from-[#060e19] via-[#0B192C] to-[#040810] text-white relative overflow-hidden">
        {/* Subtle radial ambient glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-400/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Heading & Subheading */}
          <div className="space-y-3 mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our Corporate Events
            </h2>
            <div className="w-14 h-1 bg-white rounded-full mx-auto"></div>
            <p className="text-white/90 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed pt-1">
              Bringing Innovation, Ideas &amp; Industry Leaders Together. We craft corporate experiences where innovation meets collaboration, bringing leaders together to shape the future of business technology.
            </p>
          </div>

          {/* 3 Event Cards Grid (Exact Match to User Screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 text-left">
            {homeCorporateEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEventModal(event)}
                className="bg-white text-slate-800 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden flex flex-col justify-between group p-3.5 sm:p-4 hover:-translate-y-1.5 transition-all duration-300 border border-white/20 cursor-pointer"
              >
                <div>
                  {/* Top Image with Rounded Corners */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 mb-3.5">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Meta Row: Date & Location */}
                  <div className="flex items-center justify-between gap-2 text-[11px] font-medium text-slate-500 mb-2">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{event.date}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-500 truncate">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug line-clamp-2 my-2">
                    {event.title}
                  </h3>
                </div>

                {/* Footer Action: View Details */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs mt-3">
                  <span className="font-bold text-slate-800 group-hover:text-[#0284c7] flex items-center gap-1 transition-colors text-[11px] sm:text-xs">
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Orange "View All" Button */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <Link
              to="/events"
              className="px-8 py-2.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              <span>View All</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HAVE ANY QUESTIONS? (FAQ ACCORDION SECTION - 100% NIRGHOS DETAILS)       */}
      {/* ========================================================================= */}
      <section id="faq-section" className="!mt-0 py-8 sm:py-10 lg:py-12 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Heading, Bar, Description */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
                Have Any Questions?
              </h2>
              <div className="w-14 h-1 bg-[#0284c7] rounded-full"></div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1 max-w-md">
                Got ERP questions? Explore our FAQs to see how our solutions can support your business growth and daily operations.
              </p>
            </div>

            {/* Right Column: 5 Accordion Questions */}
            <div className="lg:col-span-7">
              <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
                {homeFaqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={faq.id} className="transition-colors">
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full py-3.5 sm:py-4 flex items-center justify-between text-left group transition-colors focus:outline-none"
                      >
                        <span className={`text-base sm:text-lg font-bold pr-4 flex items-baseline gap-2 transition-colors ${
                          isOpen ? 'text-[#0284c7]' : 'text-slate-900 group-hover:text-[#0284c7]'
                        }`}>
                          <span className="shrink-0">{faq.num}</span>
                          <span>{faq.question}</span>
                        </span>
                        <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                          isOpen 
                            ? 'text-[#0284c7] bg-sky-50' 
                            : 'text-slate-600 group-hover:text-[#0284c7] group-hover:bg-slate-100'
                        }`}>
                          {isOpen ? (
                            <Minus className="w-4 h-4 stroke-[2.5]" />
                          ) : (
                            <Plus className="w-4 h-4 stroke-[2.5]" />
                          )}
                        </span>
                      </button>

                      {/* Accordion Answer Content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? 'max-h-96 pb-3.5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                        }`}
                      >
                        <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed pl-6 sm:pl-7 pr-2">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Video Modal Popup for Client Story */}
      {activeStoryVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100 relative space-y-5 animate-scaleUp">
            <button
              type="button"
              onClick={() => setActiveStoryVideo(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">
                  {activeStoryVideo.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {activeStoryVideo.org}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 aspect-video flex flex-col items-center justify-center text-white p-6 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative z-10 space-y-2">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xs border border-white/40 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white text-white ml-1" />
                </div>
                <div className="text-xs font-semibold text-sky-200 uppercase tracking-wider">
                  Client Success Video Story
                </div>
                <div className="text-sm font-bold text-white max-w-xs">
                  {activeStoryVideo.videoTitle || activeStoryVideo.name}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              "{activeStoryVideo.fullQuote}"
            </p>

            <div className="flex items-center justify-between gap-3 pt-1">
              <button
                type="button"
                onClick={() => {
                  setActiveStoryVideo(null);
                  setIsDemoModalOpen(true);
                }}
                className="w-full py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs transition"
              >
                Experience This in Nirghos Live Demo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Press Article Modal */}
      {selectedPressModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn"
          onClick={() => setSelectedPressModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPressModal(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 ${selectedPressModal.sourceColor}`}>
                {selectedPressModal.source}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                {selectedPressModal.date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              {selectedPressModal.headline}
            </h3>

            {selectedPressModal.subtitle && (
              <p className="text-sm font-semibold text-sky-700 bg-sky-50 px-3.5 py-2 rounded-xl border border-sky-100">
                {selectedPressModal.subtitle}
              </p>
            )}

            <div className="rounded-2xl overflow-hidden aspect-video bg-slate-900 relative">
              <img 
                src={selectedPressModal.image} 
                alt={selectedPressModal.headline} 
                className="w-full h-full object-cover"
              />
              {selectedPressModal.type === 'video' && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl">
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <p>{selectedPressModal.summary}</p>
              
              {selectedPressModal.highlights && (
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 mt-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Key Highlights &amp; Insights
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedPressModal.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedPressModal(null);
                  setIsDemoModalOpen(true);
                }}
                className="w-full sm:flex-1 py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider transition shadow-md hover:shadow-lg text-center"
              >
                Schedule A Product Demo
              </button>
              <button
                type="button"
                onClick={() => setSelectedPressModal(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blog Article Quick Preview Modal */}
      {selectedBlogModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn"
          onClick={() => setSelectedBlogModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedBlogModal(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-50 text-[#0284c7] border border-sky-200">
                {selectedBlogModal.tag}
              </span>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {selectedBlogModal.date}
              </span>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {selectedBlogModal.readTime}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              {selectedBlogModal.fullTitle}
            </h3>

            <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
              <div className="w-7 h-7 rounded-full bg-sky-100 text-[#0284c7] font-bold flex items-center justify-center text-xs">
                {selectedBlogModal.author.slice(0, 2).toUpperCase()}
              </div>
              <span>By {selectedBlogModal.author}</span>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100">
              <img 
                src={selectedBlogModal.image} 
                alt={selectedBlogModal.fullTitle} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <p>{selectedBlogModal.summary}</p>

              {selectedBlogModal.keyTakeaways && (
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 mt-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Key Article Takeaways
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedBlogModal.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/blogs"
                onClick={() => setSelectedBlogModal(null)}
                className="w-full sm:flex-1 py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider transition shadow-md hover:shadow-lg text-center"
              >
                Read More on Nirghos Blogs →
              </Link>
              <button
                type="button"
                onClick={() => setSelectedBlogModal(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Corporate Event Detail Modal */}
      {selectedEventModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn"
          onClick={() => setSelectedEventModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedEventModal(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {selectedEventModal.date}
              </span>
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {selectedEventModal.location}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
              {selectedEventModal.fullTitle}
            </h3>

            <p className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 bg-sky-50 px-3.5 py-2 rounded-xl border border-sky-100">
              <span className="text-sky-900 font-bold">Venue:</span>
              <span className="text-sky-700">{selectedEventModal.venue}</span>
            </p>

            <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900">
              <img 
                src={selectedEventModal.image} 
                alt={selectedEventModal.fullTitle} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
              <p>{selectedEventModal.desc}</p>

              {selectedEventModal.highlights && (
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2 mt-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Key Highlights &amp; Inclusions
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedEventModal.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/events"
                onClick={() => setSelectedEventModal(null)}
                className="w-full sm:flex-1 py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs uppercase tracking-wider transition shadow-md hover:shadow-lg text-center"
              >
                Explore All Corporate Events →
              </Link>
              <button
                type="button"
                onClick={() => setSelectedEventModal(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
