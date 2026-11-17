import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  Layers, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  LayoutDashboard, 
  Sparkles,
  ShieldCheck,
  PhoneCall,
  Search,
  ExternalLink
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { industriesData, industryCategories } from '../../data/industries';
import DynamicIcon from '../common/DynamicIcon';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [activeMegaCategory, setActiveMegaCategory] = useState('All');
  const [searchMegaQuery, setSearchMegaQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  
  const erpDropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const { isAuthenticated, profile, logoutUser } = useDemo();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setIndustriesDropdownOpen(false);
  }, [location.pathname]);

  // Close ERP dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (erpDropdownRef.current && !erpDropdownRef.current.contains(event.target)) {
        setIndustriesDropdownOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIndustriesDropdownOpen(false);
      }
    };
    if (industriesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [industriesDropdownOpen]);

  // Safe debounce for hover so moving cursor to dropdown never abruptly closes it
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIndustriesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIndustriesDropdownOpen(false);
    }, 350);
  };

  const handleErpToggle = (e) => {
    e.preventDefault();
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIndustriesDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'ERP', path: '/industries', hasDropdown: true },
    { name: 'Features', path: '/features' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const megaFilteredIndustries = industriesData.filter(i => {
    const matchesCategory = activeMegaCategory === 'All' || i.category === activeMegaCategory;
    const matchesSearch = !searchMegaQuery.trim() || 
      i.name.toLowerCase().includes(searchMegaQuery.toLowerCase()) || 
      i.category.toLowerCase().includes(searchMegaQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-navy-950/95 backdrop-blur-xl shadow-2xl border-b border-navy-800/80' 
        : 'bg-navy-950 border-b border-navy-800/50 text-white'
    }`}>
      {/* Top micro announcement bar */}
      <div className="hidden lg:block bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border-b border-navy-800/40 py-1.5 px-6 text-xs text-slate-300">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-500/20 text-brand-300 border border-brand-500/30 shimmer-badge">
              <Sparkles className="w-3 h-3 text-brand-300" /> NEW v2.8 RELEASE
            </span>
            <span className="text-slate-300">Unified Multi-Industry Architecture • Zero Code Silos</span>
          </div>
          <div className="flex items-center gap-5 text-slate-300 text-xs">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              99.99% Cloud SLA
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400" /> ISO 27001 & SOC2 Certified
            </span>
            <span className="text-slate-700">|</span>
            <Link to="/contact" className="hover:text-brand-300 transition flex items-center gap-1 font-medium">
              <PhoneCall className="w-3 h-3 text-slate-400" /> Enterprise Desk: +1 (800) NIRGHOS
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-600 via-sky-500 to-brand-400 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:scale-105 group-hover:shadow-brand-500/50 transition-all duration-300 border border-white/20">
              <div className="grid grid-cols-2 gap-1 p-2">
                <div className="w-2 h-2 rounded-xs bg-white shadow-xs"></div>
                <div className="w-2 h-2 rounded-xs bg-brand-200"></div>
                <div className="w-2 h-2 rounded-xs bg-brand-200"></div>
                <div className="w-2 h-2 rounded-xs bg-white shadow-xs"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white flex items-center gap-0.5">
                Nirghos<span className="bg-gradient-to-r from-brand-400 to-sky-300 bg-clip-text text-transparent">ERP</span>
              </span>
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 -mt-1">
                One Platform. Every Business.
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    ref={erpDropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={handleErpToggle}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                        industriesDropdownOpen || location.pathname.startsWith('/industries')
                          ? 'text-brand-300 bg-navy-850/95 border-brand-500/60 shadow-lg shadow-brand-500/20' 
                          : 'text-slate-300 hover:text-white hover:bg-navy-850/80 border-transparent hover:border-navy-700/80'
                      }`}
                    >
                      <Layers className={`w-4 h-4 transition-colors ${industriesDropdownOpen ? 'text-brand-400' : 'text-slate-400'}`} />
                      <span>{link.name}</span>
                      <span className="px-1.5 py-0.5 rounded-md bg-brand-500/20 text-brand-300 text-[10px] font-black border border-brand-500/30">
                        25
                      </span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${industriesDropdownOpen ? 'rotate-180 text-brand-400' : 'text-slate-400'}`} />
                    </button>

                    {/* Mega Dropdown for Industries */}
                    {industriesDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="w-[920px] lg:w-[980px] bg-gradient-to-b from-navy-950 via-slate-950 to-navy-950 border-2 border-brand-500/30 rounded-3xl shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85),0_0_50px_-10px_rgba(37,99,235,0.25)] p-6 sm:p-7 backdrop-blur-2xl ring-1 ring-white/10 relative overflow-hidden">
                          
                          {/* Top Glow Ambient Line */}
                          <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-brand-400 to-transparent"></div>

                          {/* Header Bar */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-navy-800/90">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span className="text-xs font-black uppercase tracking-wider bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                                  {isAuthenticated ? `Active Tenant: ${profile?.industry}` : '25 Specialized ERP Blueprints'}
                                </span>
                              </div>
                              <p className="text-xs text-slate-400 mt-0.5">
                                {isAuthenticated 
                                  ? `Signed in as ${profile?.name}. Workspace locked to your registered sector.` 
                                  : 'Select any industry category to explore its tailored live modules and cloud blueprint.'}
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              {/* Search Box inside Mega Dropdown */}
                              <div className="relative">
                                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                                <input
                                  type="text"
                                  value={searchMegaQuery}
                                  onChange={(e) => setSearchMegaQuery(e.target.value)}
                                  placeholder="Search 25 industries..."
                                  className="pl-8 pr-7 py-1.5 rounded-xl bg-navy-900 border border-navy-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400/30 w-48 transition-all"
                                />
                                {searchMegaQuery && (
                                  <button 
                                    onClick={() => setSearchMegaQuery('')}
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold"
                                    title="Clear search"
                                  >
                                    ×
                                  </button>
                                )}
                              </div>

                              <Link 
                                to="/industries"
                                onClick={() => setIndustriesDropdownOpen(false)}
                                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-xs font-bold text-white flex items-center gap-1.5 shadow-md shadow-brand-600/30 transition border border-brand-400/40 shrink-0"
                              >
                                <span>Directory</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>

                          {/* Category Filter Pills */}
                          <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-3.5 border-b border-navy-800/80 scrollbar-none">
                            {industryCategories.map((cat) => (
                              <button
                                key={cat}
                                onClick={() => {
                                  setActiveMegaCategory(cat);
                                  setSearchMegaQuery('');
                                }}
                                className={`px-3 py-1.5 rounded-xl text-[11px] font-extrabold whitespace-nowrap transition-all border ${
                                  activeMegaCategory === cat
                                    ? 'bg-gradient-to-r from-brand-600 to-blue-600 text-white border-brand-400 shadow-md shadow-brand-600/30'
                                    : 'bg-navy-900/90 text-slate-400 hover:text-white hover:bg-navy-850 border-navy-800/90'
                                }`}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>

                          {/* Grid of Industry Cards */}
                          <div className="grid grid-cols-3 gap-3 max-h-[350px] overflow-y-auto pr-1.5 scrollbar-thin scrollbar-thumb-navy-700 scrollbar-track-navy-900">
                            {megaFilteredIndustries.length > 0 ? (
                              megaFilteredIndustries.map((ind) => {
                                const isUserSector = isAuthenticated && profile?.slug === ind.slug;
                                const itemUrl = `/industries/${ind.slug}`;

                                return (
                                  <Link
                                    key={ind.slug}
                                    to={itemUrl}
                                    onClick={() => {
                                      setIndustriesDropdownOpen(false);
                                      setMobileMenuOpen(false);
                                    }}
                                    className={`p-3.5 rounded-2xl border-2 transition-all duration-200 group flex items-start gap-3 relative overflow-hidden ${
                                      isUserSector 
                                        ? 'bg-emerald-950/40 border-emerald-500/60 hover:bg-emerald-900/50 hover:border-emerald-400 shadow-md' 
                                        : 'bg-navy-900/70 hover:bg-navy-850/90 border-navy-800/90 hover:border-brand-500/80 hover:shadow-lg hover:shadow-brand-500/15 hover:-translate-y-0.5'
                                    }`}
                                  >
                                    {/* Top Mini Accent Stripe on Hover */}
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 text-xs font-bold border ${
                                      isUserSector 
                                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-600/30' 
                                        : 'bg-navy-800/90 text-brand-400 border-navy-700/80 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white group-hover:border-brand-400 group-hover:scale-105 shadow-xs'
                                    }`}>
                                      <DynamicIcon name={ind.icon} className="w-5 h-5 transition-transform group-hover:scale-110" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between gap-1">
                                        <p className="text-xs font-black text-slate-100 group-hover:text-brand-300 truncate">
                                          {ind.name}
                                        </p>
                                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 shrink-0" />
                                      </div>
                                      <div className="flex items-center justify-between gap-1 mt-0.5">
                                        <span className="text-[10px] font-semibold text-slate-400 group-hover:text-slate-300 truncate">
                                          {ind.category}
                                        </span>
                                        {isUserSector ? (
                                          <span className="text-[9px] font-black text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-500/40">
                                            Registered
                                          </span>
                                        ) : (
                                          <span className="text-[9px] font-bold text-slate-500 group-hover:text-brand-400 transition-colors">
                                            Dedicated ERP
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })
                            ) : (
                              <div className="col-span-3 py-10 text-center text-slate-400 text-xs space-y-1">
                                <p className="font-bold text-slate-300">No industries match "{searchMegaQuery}"</p>
                                <button 
                                  onClick={() => { setSearchMegaQuery(''); setActiveMegaCategory('All'); }}
                                  className="text-brand-400 underline font-semibold"
                                >
                                  Clear search filters
                                </button>
                              </div>
                            )}
                          </div>

                          {/* Dropdown Footer Strip */}
                          <div className="mt-4 pt-3.5 border-t border-navy-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1.5 text-slate-300 font-semibold text-[11px]">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 14-Day Free Dedicated Trial
                              </span>
                              <span className="hidden sm:inline text-slate-700">•</span>
                              <span className="hidden sm:inline text-[11px] text-slate-300 font-semibold">
                                Zero Credit Card Required
                              </span>
                            </div>
                            <Link
                              to="/contact"
                              onClick={() => setIndustriesDropdownOpen(false)}
                              className="text-[11px] font-bold text-brand-400 hover:text-brand-300 flex items-center gap-1 group self-start sm:self-auto"
                            >
                              <span>Need Custom Enterprise Setup? Talk to Architect</span>
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>

                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive 
                      ? 'text-brand-400 bg-navy-850/90 font-bold shadow-inner' 
                      : 'text-slate-300 hover:text-white hover:bg-navy-850/60'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Right Actions (Auth / Dashboard) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/dashboard"
              className="px-4 py-2 text-xs font-bold text-brand-300 hover:text-white bg-navy-850 hover:bg-navy-800 border border-navy-700/80 rounded-xl flex items-center gap-1.5 transition shadow-xs"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-brand-400" />
              <span>Interactive Workspace</span>
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link
                  to="/dashboard"
                  className="px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-sky-600 hover:brightness-110 rounded-xl shadow-lg shadow-brand-600/30 flex items-center gap-2 transition"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{profile?.name?.split(' ')[0] || 'My ERP'}</span>
                </Link>
                <button
                  onClick={logoutUser}
                  className="px-3 py-2 text-xs font-semibold text-slate-400 hover:text-rose-400 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <Link
                  to="/login"
                  className="px-4 py-2.5 text-xs font-bold text-slate-200 hover:text-white hover:bg-navy-850 rounded-xl transition"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2.5 text-xs font-extrabold text-navy-950 bg-gradient-to-r from-brand-300 via-brand-400 to-sky-300 hover:brightness-110 rounded-xl shadow-lg shadow-brand-500/30 flex items-center gap-1.5 transition transform active:scale-95"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/dashboard"
              className="p-2 rounded-xl bg-navy-850 text-brand-400 border border-navy-700 text-xs font-bold"
            >
              <LayoutDashboard className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-navy-850 text-slate-300 hover:text-white hover:bg-navy-800 border border-navy-700 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-xl border-b border-navy-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-sm font-bold transition ${
                  isActive ? 'bg-brand-600 text-white font-bold' : 'text-slate-300 hover:bg-navy-850 hover:text-white'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-xs font-bold text-brand-400 uppercase tracking-wider"
            >
              Browse All 25 Industries Directory →
            </Link>
          </div>

          <div className="pt-3 border-t border-navy-800 flex flex-col gap-2">
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-brand-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md shadow-brand-600/30"
            >
              <LayoutDashboard className="w-4 h-4" /> Open Live ERP Workspace
            </Link>
            {!isAuthenticated ? (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 rounded-xl border border-navy-700 bg-navy-850 text-white font-bold text-center text-xs"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 rounded-xl bg-brand-400 text-navy-950 font-extrabold text-center text-xs shadow-md"
                >
                  Get Started
                </Link>
              </div>
            ) : (
              <button
                onClick={() => { logoutUser(); setMobileMenuOpen(false); }}
                className="w-full py-2 text-center text-xs text-slate-400 hover:text-white"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
