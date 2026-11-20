import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  LayoutDashboard, 
  Sparkles,
  Info,
  PhoneCall,
  HeartHandshake,
  Users,
  FileText,
  CalendarCheck,
  MessageSquareQuote,
  Building2,
  Shirt,
  Gem,
  Store,
  Truck,
  Cpu,
  MessageSquare,
  Smartphone,
  Cloud,
  Headphones,
  TrendingUp,
  Eye,
  Glasses,
  Zap,
  Briefcase,
  UtensilsCrossed,
  ShieldCheck
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import DemoModal from '../common/DemoModal';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'services' | 'explore' | 'ai' | null
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const headerNavRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const { isAuthenticated, profile, logoutUser } = useDemo();
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerNavRef.current && !headerNavRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };
    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDropdown]);

  // Safe hover debounce
  const handleMouseEnter = (menuKey) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  const handleToggle = (menuKey, e) => {
    e.preventDefault();
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveDropdown(prev => prev === menuKey ? null : menuKey);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. Explore Nirghos Dropdown Items (Exact 4-column card grid from screenshot)
  const exploreCards = [
    {
      title: 'About Us',
      desc: 'Nirghos ERP Solutions Pvt. Ltd. helps Businesses thrive with modern AI automation.',
      icon: Info,
      path: '/about'
    },
    {
      title: 'Contact Us',
      desc: 'Nirghos ERP Solutions Provides Exact Answers and 24/7 dedicated enterprise support.',
      icon: PhoneCall,
      path: '/contact'
    },
    {
      title: 'Life @ Nirghos ERP',
      desc: 'We bring passion to our work and energy to every business milestone we build.',
      icon: HeartHandshake,
      path: '/life'
    },
    {
      title: 'Team Nirghos',
      desc: 'We are a team of believers, thinkers, and software creators revolutionizing ERP.',
      icon: Users,
      path: '/team'
    },
    {
      title: 'Blogs',
      desc: 'Explore the latest business trends, ERP updates, GST rules, and AI innovations.',
      icon: FileText,
      path: '/blogs'
    },
    {
      title: "Nirghos's Events",
      desc: 'Where Technology meets Memorable Experiences, ERP summits, and innovation days.',
      icon: CalendarCheck,
      path: '/events'
    },
    {
      title: 'Testimonials',
      desc: 'Every testimonial represents a relationship built on trust, scale, and high ROI.',
      icon: MessageSquareQuote,
      path: '/testimonials'
    }
  ];

  // 2. Products Dropdown Items (Specialized Industry Suites)
  const productsCards = [
    {
      title: 'G-Soft Apparel & Lifestyle ERP',
      desc: 'Style-Color-Size matrix, barcode scanning, digital job cards & wholesale order booking.',
      icon: Shirt,
      path: '/industries/textile-garment'
    },
    {
      title: 'J-Soft Jewellery & Bullion ERP',
      desc: 'Hallmark & HUID tracking, Karigar wastage, metal rate-cut & certified bullion ledger.',
      icon: Gem,
      path: '/industries/gems-jewelry'
    },
    {
      title: 'Nirghos Chatbox (WhatsApp ERP)',
      desc: 'Automated GST invoice dispatch, payment reminder bots & customer WhatsApp catalog.',
      icon: MessageSquare,
      path: '/features'
    },
    {
      title: 'Retail POS & Supermarket ERP',
      desc: 'Sub-second touchscreen checkout, barcode billing, loyalty points & table order maps.',
      icon: Store,
      path: '/industries/retail-supermarket'
    },
    {
      title: 'Core Enterprise ERP Suite',
      desc: 'HRMS, Payroll, double-entry General Ledger, multi-branch inventory & CRM pipeline.',
      icon: Cpu,
      path: '/features'
    },
    {
      title: 'Wholesale & Distribution ERP',
      desc: 'Inter-branch stock transfers, automated credit limits, transporter E-way bill & dispatch.',
      icon: Truck,
      path: '/industries/wholesale-trading'
    },
    {
      title: 'Food, Cafe & Restaurant ERP',
      desc: 'KOT kitchen display, recipe costing, table reservations & omnichannel delivery sync.',
      icon: UtensilsCrossed,
      path: '/industries/hospitality-tourism'
    },
    {
      title: 'Browse All 25 Industries',
      desc: 'Explore the complete directory of sector-specific live modules and workflows.',
      icon: Building2,
      path: '/industries'
    }
  ];

  // 3. Services Dropdown Items
  const servicesCards = [
    {
      title: 'B2B & B2C Mobile Applications',
      desc: 'Native iOS & Android apps for sales reps, wholesale order booking & customer portals.',
      icon: Smartphone,
      path: '/features'
    },
    {
      title: 'Digital Marketing & Growth',
      desc: 'Take your business to the next level with ROI-focused digital marketing and SEO.',
      icon: TrendingUp,
      path: '/features'
    },
    {
      title: 'Custom ERP Implementation',
      desc: 'End-to-end enterprise blueprinting, legacy data migration & personalized rollout.',
      icon: Briefcase,
      path: '/contact'
    },
    {
      title: 'Cloud & API Integration Hub',
      desc: 'Real-time sync with GST Portal, E-way bill, Tally, bank payment gateways & Shopify.',
      icon: Cloud,
      path: '/features'
    },
    {
      title: '24/7 Enterprise Support & SLA',
      desc: 'Dedicated technical architect desk, SOC2 audited security, and 99.99% uptime guarantee.',
      icon: Headphones,
      path: '/contact'
    },
    {
      title: 'WhatsApp Automation & CRM',
      desc: 'Turn WhatsApp into an automated sales and support engine for your customers.',
      icon: MessageSquare,
      path: '/features'
    }
  ];

  // 4. AI Tools Dropdown Items
  const aiToolsCards = [
    {
      title: 'Nirghos Vision (AI Cam 360)',
      desc: 'AI CCTV video analytics: Footfall counting, dwell time, peak hours & store heatmaps.',
      icon: Eye,
      path: '/features'
    },
    {
      title: 'AI Product Photoshoot Studio',
      desc: 'Generate photorealistic apparel & jewellery models without expensive physical shoots.',
      icon: Sparkles,
      path: '/features'
    },
    {
      title: 'AI Virtual 3D Try-On',
      desc: 'Realistic interactive product visualization for rings, necklaces, watches & fashion garments.',
      icon: Glasses,
      path: '/features'
    },
    {
      title: 'Predictive Demand & Forecasting',
      desc: 'Machine learning algorithms forecasting replenishment schedules, stockouts & cash flow.',
      icon: TrendingUp,
      path: '/features'
    }
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200' 
          : 'bg-white border-b border-slate-200 text-slate-800'
      }`}>
        
        {/* ========================================================================= */}
        {/* 1. TOP ANNOUNCEMENT BANNER (Electric Sky Gradient from Screenshot)        */}
        {/* ========================================================================= */}
        <div className="w-full bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#0284c7] text-white py-2 px-4 text-center select-none shadow-xs">
          <div className="w-full max-w-[1750px] mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wide">
            <span>&ldquo;Nirghos E Barcode Solutions Pvt. Ltd.&rdquo; is now &ldquo;Nirghos ERP Solutions Pvt. Ltd.&rdquo;</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN NAVIGATION BAR                                                    */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 relative" ref={headerNavRef}>
          <div className="flex items-center justify-between h-20">
            
            {/* Logo on Left */}
            <Link to="/" className="flex items-center gap-2.5 group focus:outline-none shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-sky-500 to-brand-500 flex items-center justify-center shadow-md shadow-brand-500/25 group-hover:scale-105 transition-all">
                <span className="text-white font-black text-xl italic tracking-tighter">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900 flex items-center">
                  Nirghos<span className="text-[#0284c7] ml-0.5 text-xs font-black uppercase px-1.5 py-0.5 rounded bg-sky-100 border border-sky-200">ERP</span>
                </span>
              </div>
            </Link>

            {/* Center Nav Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              
              {/* Home */}
              <NavLink
                to="/"
                end
                className={({ isActive }) => `px-3.5 py-2 text-sm font-semibold transition-all relative ${
                  isActive 
                    ? 'text-[#0284c7] font-bold border-b-2 border-[#0284c7]' 
                    : 'text-slate-700 hover:text-[#0284c7]'
                }`}
              >
                Home
              </NavLink>

              {/* Products ▾ */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={(e) => handleToggle('products', e)}
                  className={`px-3.5 py-2 text-sm font-semibold transition-all flex items-center gap-1 cursor-pointer relative ${
                    activeDropdown === 'products'
                      ? 'text-[#0284c7] font-bold border-b-2 border-[#0284c7]' 
                      : 'text-slate-700 hover:text-[#0284c7]'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-[#0284c7]' : 'text-slate-500'}`} />
                </button>
              </div>

              {/* Services ▾ */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={(e) => handleToggle('services', e)}
                  className={`px-3.5 py-2 text-sm font-semibold transition-all flex items-center gap-1 cursor-pointer relative ${
                    activeDropdown === 'services'
                      ? 'text-[#0284c7] font-bold border-b-2 border-[#0284c7]' 
                      : 'text-slate-700 hover:text-[#0284c7]'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180 text-[#0284c7]' : 'text-slate-500'}`} />
                </button>
              </div>

              {/* ✨ AI Tools */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('ai')}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to="/features"
                  className={({ isActive }) => `px-3.5 py-2 text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer relative ${
                    isActive || activeDropdown === 'ai'
                      ? 'text-sky-600 font-bold border-b-2 border-sky-500' 
                      : 'text-slate-700 hover:text-sky-600'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-sky-500 animate-pulse" />
                  <span>AI Tools</span>
                </NavLink>
              </div>

              {/* Explore Nirghos ▾ (Contains About Us, Contact Us, Life, Team, Blogs, Events, Testimonials) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('explore')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={(e) => handleToggle('explore', e)}
                  className={`px-3.5 py-2 text-sm font-semibold transition-all flex items-center gap-1 cursor-pointer relative ${
                    activeDropdown === 'explore' || ['/about', '/contact', '/life', '/team', '/blogs', '/events', '/testimonials'].includes(location.pathname)
                      ? 'text-[#0284c7] font-bold border-b-2 border-[#0284c7]' 
                      : 'text-slate-700 hover:text-[#0284c7]'
                  }`}
                >
                  <span>Explore Nirghos</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'explore' ? 'rotate-180 text-[#0284c7]' : 'text-slate-500'}`} />
                </button>
              </div>

              {/* Join Our Team */}
              <NavLink
                to="/careers"
                className={({ isActive }) => `px-3.5 py-2 text-sm font-semibold transition-all relative ${
                  isActive 
                    ? 'text-[#0284c7] font-bold border-b-2 border-[#0284c7]' 
                    : 'text-slate-700 hover:text-[#0284c7]'
                }`}
              >
                Join Our Team
              </NavLink>

            </nav>

            {/* Right Action: Orange Pill "Get Demo" Button */}
            <div className="hidden md:flex items-center gap-3.5">
              
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <Link
                    to="/dashboard"
                    className="px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>{profile?.name?.split(' ')[0] || 'My ERP'}</span>
                  </Link>
                  <button
                    onClick={logoutUser}
                    className="text-xs text-slate-500 hover:text-rose-600 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-3 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition"
                >
                  Sign In
                </Link>
              )}

              {/* ORANGE PILL GET DEMO BUTTON (Exact match to screenshot) */}
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="px-6 py-2.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                Get Demo
              </button>

            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="px-4 py-1.5 rounded-full bg-[#0284c7] text-white font-bold text-xs shadow-sm"
              >
                Get Demo
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* 3. MEGA DROPDOWN CONTAINERS (Horizontal 4-Column Card Grid)               */}
          {/* ========================================================================= */}

          {/* A. Explore Nirghos Dropdown (Exact 4-Column Card Grid from Screenshot) */}
          {activeDropdown === 'explore' && (
            <div 
              className="absolute top-full left-0 right-0 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              onMouseEnter={() => handleMouseEnter('explore')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-200/90 p-5 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {exploreCards.map((card) => {
                    const CardIcon = card.icon;
                    return (
                      <Link
                        key={card.title}
                        to={card.path}
                        onClick={() => setActiveDropdown(null)}
                        className="p-4 rounded-xl bg-white hover:bg-slate-50/90 border border-slate-200/80 hover:border-slate-300 transition-all flex items-start gap-3.5 group shadow-2xs hover:shadow-sm"
                      >
                        <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <CardIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#0284c7] transition-colors leading-tight">
                            {card.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                            {card.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* B. Products Dropdown (Horizontal 4-Column Card Grid) */}
          {activeDropdown === 'products' && (
            <div 
              className="absolute top-full left-0 right-0 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-200/90 p-5 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {productsCards.map((card) => {
                    const CardIcon = card.icon;
                    return (
                      <Link
                        key={card.title}
                        to={card.path}
                        onClick={() => setActiveDropdown(null)}
                        className="p-4 rounded-xl bg-white hover:bg-slate-50/90 border border-slate-200/80 hover:border-slate-300 transition-all flex items-start gap-3.5 group shadow-2xs hover:shadow-sm"
                      >
                        <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] border border-sky-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <CardIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#0284c7] transition-colors leading-tight">
                            {card.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                            {card.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* C. Services Dropdown (Horizontal Card Grid) */}
          {activeDropdown === 'services' && (
            <div 
              className="absolute top-full left-0 right-0 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-200/90 p-5 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {servicesCards.map((card) => {
                    const CardIcon = card.icon;
                    return (
                      <Link
                        key={card.title}
                        to={card.path}
                        onClick={() => setActiveDropdown(null)}
                        className="p-4 rounded-xl bg-white hover:bg-slate-50/90 border border-slate-200/80 hover:border-slate-300 transition-all flex items-start gap-3.5 group shadow-2xs hover:shadow-sm"
                      >
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <CardIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#0284c7] transition-colors leading-tight">
                            {card.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                            {card.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* D. AI Tools Dropdown (Horizontal Card Grid) */}
          {activeDropdown === 'ai' && (
            <div 
              className="absolute top-full left-0 right-0 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              onMouseEnter={() => handleMouseEnter('ai')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-200/90 p-5 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {aiToolsCards.map((card) => {
                    const CardIcon = card.icon;
                    return (
                      <Link
                        key={card.title}
                        to={card.path}
                        onClick={() => setActiveDropdown(null)}
                        className="p-4 rounded-xl bg-white hover:bg-sky-50/60 border border-slate-200/80 hover:border-sky-300 transition-all flex items-start gap-3.5 group shadow-2xs hover:shadow-sm"
                      >
                        <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <CardIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors leading-tight">
                            {card.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                            {card.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* ========================================================================= */}
        {/* MOBILE DRAWER MENU                                                        */}
        {/* ========================================================================= */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-sm font-bold transition ${
                  isActive ? 'bg-sky-50 text-[#0284c7]' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                Home
              </NavLink>

              <NavLink
                to="/features"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-bold text-sky-600 hover:bg-slate-100 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span>AI Tools (Vision & Analytics)</span>
              </NavLink>

              <div className="pt-2 pb-1 px-4 text-[11px] font-black uppercase tracking-wider text-slate-400">
                Products & Suites
              </div>
              {productsCards.slice(0, 4).map((p) => (
                <Link
                  key={p.title}
                  to={p.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                >
                  {p.title}
                </Link>
              ))}

              <div className="pt-2 pb-1 px-4 text-[11px] font-black uppercase tracking-wider text-slate-400">
                Explore Nirghos
              </div>
              {exploreCards.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  {item.title}
                </Link>
              ))}
              <Link
                to="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Join Our Team
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => { setIsDemoModalOpen(true); setMobileMenuOpen(false); }}
                className="w-full py-3 rounded-full bg-[#0284c7] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Get Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs text-center flex items-center justify-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4 text-slate-700" /> Open Interactive Workspace
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* INTEGRATED "BOOK YOUR FREE ERP DEMO" MODAL                                */}
      {/* ========================================================================= */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type="book-demo"
      />
    </>
  );
};

export default Header;
