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
  TrendingUp,
  Eye,
  Glasses,
  Zap,
  UtensilsCrossed,
  ShieldCheck,
  Boxes,
  Factory,
  Pill,
  Hotel,
  Globe,
  ScanLine,
  ShoppingBag
} from 'lucide-react';
import DemoModal from '../common/DemoModal';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'products' | 'explore' | 'ai' | null
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const headerNavRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

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

  // 2. Products Dropdown Items (Nirghos Core Products & Enterprise Suites)
  const productsCards = [
    {
      title: 'Nirghos POS Billing',
      badge: 'Smart POS',
      desc: 'Sub-second touchscreen checkout, barcode scanning, weigh-scale sync & dynamic UPI QR.',
      icon: Store,
      path: '/products/pos'
    },
    {
      title: 'Enterprise Cloud ERP',
      badge: 'Enterprise Core',
      desc: 'Central multi-department synchronization, branch management & real-time telemetry.',
      icon: Cpu,
      path: '/products/erp'
    },
    {
      title: 'Financial Accounting & GST',
      badge: 'GST Compliance',
      desc: 'Automated double-entry general ledger, bank reconciliation & 1-click GSTR-1/3B filing.',
      icon: ShieldCheck,
      path: '/products/accounting'
    },
    {
      title: 'Multi-Godown Inventory (WMS)',
      badge: 'Inventory & WMS',
      desc: 'Live multi-warehouse stock, batch/lot FEFO expiry tracking & automated reorder triggers.',
      icon: Boxes,
      path: '/products/inventory'
    },
    {
      title: 'CRM & Customer Loyalty',
      badge: 'CRM & Marketing',
      desc: 'Automated WhatsApp digital invoices, reward points passbook & customer retention campaigns.',
      icon: Users,
      path: '/products/crm'
    },
    {
      title: 'Trading & Wholesale ERP',
      badge: 'Wholesale & B2B',
      desc: 'Multi-warehouse distribution, tier pricing, customer credit control & automated e-way bills.',
      icon: Truck,
      path: '/industries/trading'
    },
    {
      title: 'Manufacturing & Fabrication',
      badge: 'Plant & Production',
      desc: 'Multi-level BOM engineering, shop floor tracking, machine OEE & scrap reduction.',
      icon: Factory,
      path: '/industries/manufacturing'
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
        {/* 2. MAIN NAVIGATION BAR                                                    */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1750px] mx-auto px-4 sm:px-6 lg:px-8 relative" ref={headerNavRef}>
          <div className="flex items-center justify-between h-20">
            
            {/* Official Logo on Left */}
            <Link to="/" className="flex items-center gap-2 group focus:outline-none shrink-0" title="Nirghos ERP Homepage">
              <img 
                src="/nirghos-logo-nav.png" 
                alt="NIRGHOS ERP Official Logo" 
                className="h-9 sm:h-10 md:h-11 w-auto object-contain drop-shadow-xs group-hover:scale-105 transition-transform" 
              />
              <span className="text-nirghos-primary text-[10px] sm:text-[11px] font-black uppercase px-1.5 py-0.5 rounded bg-sky-100 border border-sky-200 tracking-wider">
                ERP
              </span>
            </Link>

            {/* Center Nav Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              
              {/* Home */}
              <NavLink
                to="/"
                end
                className={({ isActive }) => `px-3 py-2 text-sm font-semibold transition-all relative ${
                  isActive 
                    ? 'text-nirghos-primary font-bold border-b-2 border-nirghos-primary' 
                    : 'text-slate-700 hover:text-nirghos-primary'
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
                  className={`px-3 py-2 text-sm font-semibold transition-all flex items-center gap-1 cursor-pointer relative ${
                    activeDropdown === 'products'
                      ? 'text-nirghos-primary font-bold border-b-2 border-nirghos-primary' 
                      : 'text-slate-700 hover:text-nirghos-primary'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-nirghos-primary' : 'text-slate-500'}`} />
                </button>
              </div>

              {/* Industries */}
              <NavLink
                to="/industries"
                className={({ isActive }) => `px-3 py-2 text-sm font-semibold transition-all relative ${
                  isActive 
                    ? 'text-nirghos-primary font-bold border-b-2 border-nirghos-primary' 
                    : 'text-slate-700 hover:text-nirghos-primary'
                }`}
              >
                Industries
              </NavLink>

              {/* Company / Explore Nirghos ▾ */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('explore')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={(e) => handleToggle('explore', e)}
                  className={`px-3 py-2 text-sm font-semibold transition-all flex items-center gap-1 cursor-pointer relative ${
                    activeDropdown === 'explore' || ['/about', '/contact', '/life', '/team', '/blogs', '/events', '/testimonials'].includes(location.pathname)
                      ? 'text-nirghos-primary font-bold border-b-2 border-nirghos-primary' 
                      : 'text-slate-700 hover:text-nirghos-primary'
                  }`}
                >
                  <span>About</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'explore' ? 'rotate-180 text-nirghos-primary' : 'text-slate-500'}`} />
                </button>
              </div>

            </nav>

            {/* Right Action: Book a Demo Button */}
            <div className="hidden md:flex items-center gap-3.5">
              {/* BOOK A DEMO BUTTON (vasy.ai style glowing cyan button) */}
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-nirghos-primary to-nirghos-electric hover:from-nirghos-primary-hover hover:to-nirghos-primary text-white font-bold text-sm shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="px-4 py-1.5 rounded-full bg-nirghos-gradient text-white font-bold text-xs shadow-sm"
              >
                Book Demo
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
                          {card.badge && (
                            <span className="text-[9px] font-black uppercase tracking-wider text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100 inline-block mb-1">
                              {card.badge}
                            </span>
                          )}
                          <h4 className="text-sm font-bold text-slate-800 group-hover:text-nirghos-primary transition-colors leading-tight">
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
                        <div className="w-10 h-10 rounded-xl bg-sky-50 text-nirghos-primary border border-sky-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <CardIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          {card.badge && (
                            <span className="text-[9px] font-black uppercase tracking-wider text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100 inline-block mb-1">
                              {card.badge}
                            </span>
                          )}
                          <h4 className="text-sm font-bold text-slate-800 group-hover:text-nirghos-primary transition-colors leading-tight">
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
                  isActive ? 'bg-sky-50 text-nirghos-primary' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                Home
              </NavLink>

              <NavLink
                to="/industries"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-sm font-bold transition ${
                  isActive ? 'bg-sky-50 text-nirghos-primary' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                Industries (25 Verticals)
              </NavLink>

              <div className="pt-2 pb-1 px-4 text-[11px] font-black uppercase tracking-wider text-slate-400">
                Products & Suites
              </div>
              {productsCards.map((p) => (
                <Link
                  key={p.title}
                  to={p.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-between"
                >
                  <span>{p.title}</span>
                  {p.badge && (
                    <span className="text-[9px] font-bold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100">
                      {p.badge}
                    </span>
                  )}
                </Link>
              ))}

              <div className="pt-2 pb-1 px-4 text-[11px] font-black uppercase tracking-wider text-slate-400">
                About & Explore
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
                className="w-full py-3 rounded-full bg-gradient-to-r from-nirghos-primary to-nirghos-electric text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book a Demo</span>
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
