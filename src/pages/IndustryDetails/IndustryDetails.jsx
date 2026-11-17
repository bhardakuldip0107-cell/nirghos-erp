import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  LayoutDashboard, 
  Building2, 
  Calendar,
  Zap,
  ArrowLeft,
  Activity,
  FileCheck,
  Check,
  Cpu,
  BarChart3,
  ExternalLink,
  Sliders,
  X,
  Play,
  Star,
  Award,
  Calculator,
  ChevronDown,
  ChevronUp,
  Clock,
  Boxes,
  Wrench,
  Gauge,
  Factory,
  FileSpreadsheet,
  Download,
  PhoneCall,
  Server,
  Lock,
  ArrowUpRight,
  Radio,
  CheckCheck,
  Truck,
  Warehouse,
  MapPin,
  ArrowRightLeft,
  PackageCheck
} from 'lucide-react';
import { getIndustryBySlug, getRelatedIndustries, industriesData } from '../../data/industries';
import { getIndustryLandingData } from '../../data/industryLandingData';
import { useDemo } from '../../context/DemoContext';
import IndustryCard from '../../components/IndustryCard/IndustryCard';
import DemoModal from '../../components/common/DemoModal';
import DynamicIcon from '../../components/common/DynamicIcon';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';

export const IndustryDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, profile, setActiveIndustrySlug, showToast } = useDemo();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedModuleModal, setSelectedModuleModal] = useState(null);

  const industry = getIndustryBySlug(slug);

  // Load bespoke landing page configuration for this specific industry
  const landingData = industry ? getIndustryLandingData(slug, industry) : null;

  // Website Interactive Capabilities Tab State
  const [activeTourTab, setActiveTourTab] = useState(landingData?.tourTabs?.[0]?.id || 'tab-0');

  // Website Interactive ROI Calculator State
  const [slider1, setSlider1] = useState(landingData?.calculator?.slider1?.defaultVal || 24000);
  const [slider2, setSlider2] = useState(landingData?.calculator?.slider2?.defaultVal || 16);
  const [slider3, setSlider3] = useState(landingData?.calculator?.slider3?.defaultVal || 6.5);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Whenever slug changes, reset tab and sliders to the new industry's defaults
  useEffect(() => {
    if (industry && landingData) {
      if (landingData.tourTabs && landingData.tourTabs.length > 0) {
        setActiveTourTab(landingData.tourTabs[0].id);
      }
      if (landingData.calculator) {
        setSlider1(landingData.calculator.slider1.defaultVal);
        setSlider2(landingData.calculator.slider2.defaultVal);
        setSlider3(landingData.calculator.slider3.defaultVal);
      }
      setOpenFaq(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [slug]);

  // Fallback if slug not found
  if (!industry || !landingData) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
          <Layers className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-black text-navy-950">Industry Solution Not Found</h2>
        <p className="text-slate-600 max-w-md mx-auto">
          The requested industry blueprint "{slug}" is not available in our directory.
        </p>
        <Link
          to="/industries"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 text-white font-bold text-sm hover:bg-navy-800 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Browse All 25 Industries
        </Link>
      </div>
    );
  }

  const relatedIndustries = getRelatedIndustries(industry.relatedSlugs || []);

  const handleLaunchDemo = () => {
    setActiveIndustrySlug(industry.slug);
    navigate(`/dashboard?industry=${industry.slug}`);
  };

  // Dynamic ROI calculation metrics based on industry archetype
  const calcType = landingData.calculator?.type || 'generic';
  let estimatedAnnualSavings = 0;
  let savingsLabel = 'Estimated Annual Operational Savings';
  let metricLiftLabel = 'Operational Efficiency Lift';
  let estimatedLift = 32;
  let estimatedPaybackMonths = '3.5';

  if (calcType === 'manufacturing') {
    estimatedAnnualSavings = Math.round(slider1 * 12 * (slider3 / 100) * 0.42 * 32);
    savingsLabel = 'Estimated Annual Scrap Cost Savings';
    metricLiftLabel = 'Plant OEE Lift';
    estimatedLift = Math.min(38, Math.round(18 + slider3 * 1.6));
    estimatedPaybackMonths = (18000 / Math.max(100, estimatedAnnualSavings / 12)).toFixed(1);
  } else if (calcType === 'trading') {
    estimatedAnnualSavings = Math.round(slider1 * 12 * 0.084);
    savingsLabel = 'Estimated Dead Stock & Working Capital Freed';
    metricLiftLabel = 'Fulfillment Velocity Lift';
    estimatedLift = Math.min(35, Math.round(16 + slider2 * 3.2));
    estimatedPaybackMonths = (20000 / Math.max(100, estimatedAnnualSavings / 12)).toFixed(1);
  } else if (calcType === 'retail') {
    estimatedAnnualSavings = Math.round(slider1 * 12 * (slider3 / 100) * 0.88);
    savingsLabel = 'Estimated Annual Shrinkage & Loss Prevented';
    metricLiftLabel = 'Checkout Throughput Lift';
    estimatedLift = Math.min(48, Math.round(24 + slider2 * 3.5));
    estimatedPaybackMonths = (14000 / Math.max(100, estimatedAnnualSavings / 12)).toFixed(1);
  } else if (calcType === 'hospital') {
    estimatedAnnualSavings = Math.round(slider1 * 1200 * 12 * 0.072);
    savingsLabel = 'Estimated Annual Revenue Leakage Recovered';
    metricLiftLabel = 'Bed Turnover Acceleration';
    estimatedLift = Math.min(42, Math.round(22 + (slider3 / 100) * 16));
    estimatedPaybackMonths = (26000 / Math.max(100, estimatedAnnualSavings / 12)).toFixed(1);
  } else if (calcType === 'education') {
    estimatedAnnualSavings = Math.round(slider1 * slider2 * (slider3 / 100) * 0.78);
    savingsLabel = 'Estimated Annual Overdue Fees Recovered';
    metricLiftLabel = 'Administrative Time Saved';
    estimatedLift = Math.min(52, Math.round(30 + slider3 * 1.6));
    estimatedPaybackMonths = (12000 / Math.max(100, estimatedAnnualSavings / 12)).toFixed(1);
  } else if (calcType === 'construction') {
    estimatedAnnualSavings = Math.round(slider1 * (slider3 / 100) * 0.68);
    savingsLabel = 'Estimated BoQ Wastage Budget Protected';
    metricLiftLabel = 'Milestone Delivery Speed';
    estimatedLift = Math.min(36, Math.round(16 + slider2 * 2.8));
    estimatedPaybackMonths = (32000 / Math.max(100, estimatedAnnualSavings / 12)).toFixed(1);
  } else {
    estimatedAnnualSavings = Math.round(slider1 * 12 * (slider3 / 100) * 0.62);
    savingsLabel = 'Estimated Annual Operational Cost Savings';
    metricLiftLabel = 'Process Efficiency Lift';
    estimatedLift = Math.min(38, Math.round(18 + slider3 * 1.5));
    estimatedPaybackMonths = (18000 / Math.max(100, estimatedAnnualSavings / 12)).toFixed(1);
  }

  // Tour Tab content
  const activeTabContent = landingData.tourTabs.find(t => t.id === activeTourTab) || landingData.tourTabs[0];

  return (
    <div className="bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-white">

      {/* ======================================================== */}
      {/* 1. WEBSITE HERO BANNER (Top-Tier SaaS Product Landing Page) */}
      {/* ======================================================== */}
      <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-14 pb-24 px-4 sm:px-6 lg:px-10 xl:px-12 overflow-hidden border-b border-navy-800">
        
        {/* Modern radial glow effects & ambient grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-brand-600/20 via-sky-500/20 to-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative max-w-[1600px] w-full mx-auto space-y-12">
          
          {/* Breadcrumb Navigation Bar */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/industries" className="hover:text-white transition">ERP Blueprints</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-400 font-bold">{industry.name}</span>
          </div>

          {/* Hero Main Copy */}
          <div className="text-center max-w-5xl mx-auto space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-500/15 to-emerald-500/15 border border-brand-400/30 text-brand-300 text-xs font-black uppercase tracking-widest shadow-lg">
              <Sparkles className="w-4 h-4 text-brand-400 animate-pulse" />
              <span>Enterprise {industry.name} Cloud Platform</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="hidden sm:inline text-emerald-400 font-bold">{landingData.complianceBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              {landingData.headline}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-4xl mx-auto">
              {landingData.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-400 via-sky-400 to-brand-300 hover:brightness-110 text-navy-950 font-black text-sm transition shadow-xl shadow-brand-500/25 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{landingData.consultationBtnText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleLaunchDemo}
                className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 hover:border-white/40 transition flex items-center gap-2.5 backdrop-blur-md cursor-pointer"
              >
                <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>{landingData.demoBtnText}</span>
              </button>
            </div>

            {/* Social Proof Micro-Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white font-bold">4.9 / 5</span>
                <span>{landingData.socialProofText}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Data Silos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-brand-400" />
                <span>14-Day Production Go-Live</span>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* 1.1 INTERACTIVE LIVE DASHBOARD MOCKUP SHOWCASE */}
          {/* ======================================================== */}
          <div className="max-w-[1550px] w-full mx-auto pt-4">
            <div className="rounded-3xl bg-navy-950/90 border-2 border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-2xl overflow-hidden">
              
              {/* Window Title Bar */}
              <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">
                    {landingData.mockupUrl}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1.5 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{landingData.mockupStatus}</span>
                  </span>
                </div>
              </div>

              {/* Inside Mockup Screen */}
              <div className="p-6 sm:p-8 space-y-6 bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950">
                
                {/* 4 Live Telemetry KPI Tiles */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {landingData.kpiTiles.map((kpi, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-navy-900/90 border border-slate-800 space-y-1">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">{kpi.label}</span>
                      <div className={`text-2xl sm:text-3xl font-black font-mono ${kpi.color}`}>{kpi.value}</div>
                      <span className="text-[10px] text-slate-400 font-semibold block">{kpi.note}</span>
                    </div>
                  ))}
                </div>

                {/* Live Activity Stations Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                  {landingData.stations.map((st, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800/90 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-brand-400 font-bold block">{st.code}</span>
                        <p className="text-xs font-bold text-white mt-0.5">{st.title}</p>
                        <span className="text-[10px] text-slate-400">{st.subtitle}</span>
                      </div>
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase border ${st.statusColor}`}>
                        {st.status}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. ENTERPRISE LOGO TRUST STRIP (Creative UI Showcase) */}
      {/* ======================================================== */}
      <section className="py-20 bg-gradient-to-b from-slate-100/80 via-white to-slate-100/80 border-b-2 border-slate-300/80">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-10">
          
          <div className="flex flex-col items-center justify-center text-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 border-2 border-brand-300 text-xs font-black uppercase tracking-wider shadow-sm">
              <ShieldCheck className="w-4 h-4 text-brand-600" />
              <span>VERIFIED ENTERPRISE CLIENT ECOSYSTEM</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-navy-950 tracking-tight max-w-4xl leading-tight">
              {landingData.trustTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl leading-relaxed">
              Leading organizations rely on Nirghos ERP dedicated industry instances for zero-downtime operations, automated compliance, and real-time ledger intelligence.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {landingData.trustClients.map((client, idx) => (
              <div 
                key={idx} 
                className="group relative pt-6 pb-4 px-4 rounded-2xl bg-white border-2 border-slate-300/90 hover:border-brand-500 shadow-[0_8px_20px_-4px_rgba(15,23,42,0.1),0_4px_8px_-2px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_35px_-5px_rgba(37,99,235,0.22)] hover:ring-4 hover:ring-brand-500/15 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-between text-center gap-3 cursor-default overflow-hidden"
              >
                {/* Top Highlight Gradient Stripe */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-500 via-indigo-500 to-cyan-500 group-hover:h-2 transition-all duration-300"></div>

                {/* Node Index Badge */}
                <span className="absolute top-2.5 right-3 text-[9px] font-mono font-extrabold text-slate-400 group-hover:text-brand-600 transition-colors">
                  #{String(idx + 1).padStart(2, '0')}
                </span>

                {/* 3D Icon Pod */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-50 via-brand-50/30 to-indigo-50/50 group-hover:from-brand-600 group-hover:to-indigo-600 text-brand-600 group-hover:text-white flex items-center justify-center border-2 border-slate-200 group-hover:border-brand-400 transition-all duration-300 shadow-md group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-500/30">
                  <Building2 className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>

                {/* Client Company Name */}
                <div className="space-y-1 w-full">
                  <h4 className="text-xs sm:text-sm font-black text-navy-950 group-hover:text-brand-600 tracking-tight transition-colors line-clamp-1" title={client}>
                    {client}
                  </h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Enterprise Node
                  </p>
                </div>

                {/* Live Verified Tenant Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border-2 border-emerald-300/90 text-[10px] font-extrabold text-emerald-800 shadow-2xs group-hover:bg-emerald-100 group-hover:border-emerald-400 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Verified Tenant</span>
                </div>

                {/* Bottom SLA Telemetry Bar */}
                <div className="w-full pt-2.5 border-t-2 border-slate-100 flex items-center justify-between text-[10px] font-extrabold text-slate-500">
                  <span className="flex items-center gap-1 text-slate-400">
                    <Server className="w-3 h-3 text-brand-500" /> Tier-4
                  </span>
                  <span className="text-emerald-600 font-mono font-black">99.99% SLA</span>
                </div>
              </div>
            ))}
          </div>

          {/* 4 SLA Commitment Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-6 border-t-2 border-slate-200/90">
            {[
              { icon: CheckCircle2, text: '99.99% Cloud SLA Commitment', desc: 'Guaranteed mission-critical uptime', color: 'text-emerald-600', border: 'border-emerald-200' },
              { icon: Server, text: 'Dedicated Hybrid Edge Nodes', desc: 'Low-latency on-premise synchrony', color: 'text-brand-600', border: 'border-brand-200' },
              { icon: Lock, text: 'Bank-Grade AES-256 Encryption', desc: 'End-to-end encrypted ledger data', color: 'text-indigo-600', border: 'border-indigo-200' },
              { icon: ShieldCheck, text: 'Zero Data Vendor Lock-in', desc: 'Daily automated offsite SQL backups', color: 'text-teal-600', border: 'border-teal-200' },
            ].map((item, i) => (
              <div 
                key={i} 
                className="px-4 py-3 rounded-2xl bg-white border-2 border-slate-300/90 shadow-sm hover:border-brand-500 hover:shadow-md transition-all flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-50 group-hover:bg-brand-50 border border-slate-200 group-hover:border-brand-200 flex items-center justify-center shrink-0 transition-colors">
                  <item.icon className={`w-4 h-4 ${item.color} shrink-0`} />
                </div>
                <div>
                  <span className="text-xs font-black text-navy-950 block group-hover:text-brand-600 transition-colors">
                    {item.text}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500 block">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. INTERACTIVE PRODUCT CAPABILITY TOUR (SaaS Product Tabs) */}
      {/* ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1600px] w-full mx-auto space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200 text-xs font-black uppercase tracking-widest inline-block shadow-xs">
            Product Capabilities Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
            Engineered Specifically for {industry.name}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Explore how Nirghos streamlines every critical operational workflow from initial intake to settlement and general ledger.
          </p>
        </div>

        {/* Horizontal Tour Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2.5 overflow-x-auto pb-3 scrollbar-none">
          {landingData.tourTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTourTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTourTab(tab.id)}
                className={`group px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-black whitespace-nowrap transition-all duration-300 flex items-center gap-2.5 cursor-pointer border-2 ${
                  isActive
                    ? 'bg-navy-950 text-white border-navy-950 shadow-xl shadow-navy-950/25 ring-4 ring-brand-500/20 scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-300/90 hover:border-brand-300 hover:bg-slate-50 shadow-xs'
                }`}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                  isActive ? 'bg-brand-500/20 text-brand-300' : 'bg-slate-100 text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-600'
                }`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Detail Interactive Showcase Card */}
        {activeTabContent && (
          <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-slate-300/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12),0_0_0_1px_rgba(15,23,42,0.04)] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Top Multi-Color Accent Gradient Line */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-500 via-indigo-600 to-sky-400"></div>

            {/* Ambient Background Glows */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Left Column: Deep Feature Explanation & Capabilities */}
            <div className="lg:col-span-7 space-y-6 relative z-10">
              
              {/* Dual Header Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white border border-slate-700/80 text-[11px] font-mono font-bold shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="tracking-wide">
                    {activeTabContent.id === 'godown' || activeTabContent.title.toLowerCase().includes('inter-branch') || activeTabContent.title.toLowerCase().includes('lot valuation') || activeTabContent.title.toLowerCase().includes('stock transfer')
                      ? 'MULTI-GODOWN TRANSIT & VALUATION ENGINE'
                      : activeTabContent.id === 'shopfloor' || activeTabContent.title.toLowerCase().includes('cnc')
                      ? 'SUB-SECOND CNC TELEMETRY ENGINE'
                      : 'SUB-SECOND TELEMETRY ENGINE'}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-50 text-brand-700 border-2 border-brand-200/90 text-xs font-black shadow-2xs">
                  <Zap className="w-3.5 h-3.5 text-brand-600" />
                  <span>{activeTabContent.badge}</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 tracking-tight leading-tight">
                  {activeTabContent.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {activeTabContent.desc}
                </p>
              </div>

              {/* Upgraded 4 Capability Micro-Cards (2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {activeTabContent.bullets.map((b, i) => (
                  <div
                    key={i}
                    className="group relative p-4 rounded-2xl bg-slate-50/90 hover:bg-white border-2 border-slate-200/90 hover:border-brand-500 shadow-2xs hover:shadow-lg hover:shadow-brand-500/10 hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3.5 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-brand-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-400/40 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-all shadow-2xs group-hover:scale-110">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className="text-[10px] font-mono font-black text-slate-400 group-hover:text-brand-600 transition-colors uppercase tracking-wider block">
                        CAPABILITY #0{i + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-navy-950 font-bold leading-snug group-hover:text-brand-950 transition-colors">
                        {b}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* High-Impact Metric Callout Pod */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-50/80 via-slate-50 to-indigo-50/60 border-2 border-brand-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4 mt-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-brand-500/25 shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-950 font-mono tracking-tight flex items-center gap-1">
                      {(() => {
                        const rawMetric = activeTabContent.metric || '';
                        const match = rawMetric.match(/([+\-]?)([\d.]+)(.*)/);
                        if (match) {
                          const prefix = match[1];
                          const num = parseFloat(match[2]);
                          const suffix = match[3];
                          const decimals = match[2].includes('.') ? match[2].split('.')[1].length : 0;
                          return (
                            <AnimatedCounter
                              target={num}
                              decimals={decimals}
                              prefix={prefix}
                              suffix={suffix}
                              className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-brand-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent font-mono tracking-tight"
                            />
                          );
                        }
                        return (
                          <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-brand-600 to-indigo-600 bg-clip-text text-transparent font-mono tracking-tight">
                            {rawMetric}
                          </span>
                        );
                      })()}
                    </div>
                    <div className="text-xs text-slate-600 font-extrabold uppercase tracking-wider">
                      {activeTabContent.metricLabel}
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-[11px] font-bold text-slate-600 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Industrial Benchmark</span>
                </div>
              </div>

            </div>

            {/* Right Column: Live Telemetry Preview Cockpit */}
            <div className="lg:col-span-5 relative z-10">
              <div className="rounded-3xl bg-gradient-to-br from-navy-950 via-slate-900 to-navy-950 text-white p-6 sm:p-8 border-2 border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] space-y-5 relative overflow-hidden ring-1 ring-white/10">
                {/* Ambient Glows */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-brand-500/25 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>

                {/* Cockpit Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/90 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-500/20 to-indigo-500/30 border border-brand-400/40 text-brand-400 flex items-center justify-center shadow-inner">
                      <Cpu className="w-5 h-5 text-brand-400 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-black text-white tracking-tight flex items-center gap-2">
                        <span>{activeTabContent.previewHeading}</span>
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">{activeTabContent.previewSub}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>TELEMETRY ON</span>
                  </div>
                </div>

                {/* Real-Time Live Execution Module Preview */}
                {activeTabContent.id === 'shopfloor' || activeTabContent.title.toLowerCase().includes('cnc') || activeTabContent.title.toLowerCase().includes('job card') ? (
                  /* Specialized High-Tech CNC Spindle & Digital Job Card Cockpit */
                  <div className="p-4 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-inner space-y-3 relative z-10">
                    {/* Top Active Job Card & RFID Badge */}
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <div className="flex items-center gap-1.5 text-brand-300 font-bold">
                        <Activity className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
                        <span>JOB CARD: #JC-2026-9041</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-black border border-emerald-500/40 tracking-wider">
                        ● IN EXECUTION
                      </span>
                    </div>

                    {/* Component & Operation Details */}
                    <div className="flex items-center justify-between text-xs text-white">
                      <div className="font-bold truncate pr-2">
                        <span>Aero Turbofan Flange</span>
                        <span className="text-[10px] font-mono text-slate-400 ml-1.5 font-normal">(Grade-5 Ti)</span>
                      </div>
                      <span className="text-xs font-mono font-extrabold text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20 shrink-0">
                        Op 03/06 • 5-Axis
                      </span>
                    </div>

                    {/* Live Spindle Load Meter */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                          <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                          Spindle Speed: 12,400 RPM
                        </span>
                        <span className="text-emerald-400 font-black">82% OPTIMAL LOAD</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-800 p-0.5 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-brand-400 rounded-full w-[82%] shadow-sm shadow-emerald-500/50"></div>
                      </div>
                    </div>

                    {/* Micro G-Code Stream & Operator Chip */}
                    <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-slate-400 border-t border-slate-800/80">
                      <span className="truncate pr-2">
                        G-Code: <span className="text-slate-300">N0421 [G01 X142.50 Y80.25 F1850]</span>
                      </span>
                      <span className="text-sky-300 shrink-0 font-bold">RFID: OP-402</span>
                    </div>
                  </div>
                ) : activeTabContent.id === 'godown' || activeTabContent.title.toLowerCase().includes('inter-branch') || activeTabContent.title.toLowerCase().includes('lot valuation') || activeTabContent.title.toLowerCase().includes('godown') ? (
                  /* Specialized High-Tech Multi-Godown Inter-Branch Stock Transfer & Lot Valuation Cockpit */
                  <div className="p-4 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-inner space-y-3 relative z-10">
                    {/* Top Transfer Challan & Status Badge */}
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                        <ArrowRightLeft className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                        <span>TRANSFER CHALLAN: #ST-2026-8840</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[10px] font-black border border-amber-500/40 tracking-wider">
                        ● IN-TRANSIT (ETA 1h 45m)
                      </span>
                    </div>

                    {/* Visual Route with GPS & Moving Fleet Progress */}
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                          <span className="font-bold">Ahmedabad Hub [WH-01]</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="font-bold">Surat Hub [WH-04]</span>
                        </div>
                      </div>
                      <div className="relative py-0.5">
                        <div className="w-full h-1.5 rounded-full bg-slate-800 relative overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-brand-500 via-amber-400 to-emerald-400 rounded-full w-[68%]"></div>
                        </div>
                        <div className="flex items-center justify-between pt-1.5 text-[10px] font-mono text-slate-400">
                          <span className="flex items-center gap-1 text-amber-300 font-bold">
                            <Truck className="w-3 h-3 text-amber-400 animate-bounce" />
                            GJ-01-AX-9921 • Live GPS
                          </span>
                          <span className="text-emerald-400 font-bold">E-Way Bill #EW-9948271</span>
                        </div>
                      </div>
                    </div>

                    {/* Lot-Wise FIFO Valuation & SKU Matrix */}
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="font-bold text-white truncate pr-2">
                          <span>Industrial Brass Valves 2"</span>
                          <span className="text-[10px] font-mono text-slate-400 ml-1.5 font-normal">(SKU #BV-200)</span>
                        </div>
                        <span className="text-[11px] font-mono font-black text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20 shrink-0">
                          850 Units
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800/80 text-[10px] font-mono">
                        <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-0.5">
                          <span className="text-slate-400 block text-[9px] uppercase tracking-wider">Lot Valuation (FIFO)</span>
                          <span className="text-emerald-400 font-black text-xs block">₹3,57,000.00</span>
                          <span className="text-slate-400 text-[9px] block">@ ₹420.00/unit</span>
                        </div>
                        <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 space-y-0.5">
                          <span className="text-slate-400 block text-[9px] uppercase tracking-wider">Batch & Expiry Trace</span>
                          <span className="text-cyan-300 font-black text-xs block">LOT-2026-0492</span>
                          <span className="text-slate-400 text-[9px] block">EXP: Dec 2028 (Audit OK)</span>
                        </div>
                      </div>
                    </div>

                    {/* Live Godown Capacity Meter */}
                    <div className="space-y-1.5 pt-0.5">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                          <Warehouse className="w-3.5 h-3.5 text-brand-400" />
                          Rack & Bin Space Utilization
                        </span>
                        <span className="text-emerald-400 font-black">91.4% OPTIMAL FILL</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 p-0.5 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-brand-500 via-indigo-500 to-emerald-400 rounded-full w-[91.4%] shadow-sm shadow-emerald-500/40"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Universal High-Tech Telemetry Stream for Other Capabilities */
                  <div className="p-4 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-inner space-y-3 relative z-10">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="flex items-center gap-1.5 text-brand-300 font-bold">
                        <Activity className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
                        <span>REAL-TIME DISPATCH ENGINE</span>
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-black border border-emerald-500/40">
                        ● 100% SYNCHRONIZED
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs text-white font-bold">
                        <span>Operational Integrity Index</span>
                        <span className="text-emerald-400 font-mono">99.98% OK</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-brand-500 via-indigo-500 to-emerald-400 rounded-full w-[94%]"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800/80">
                      <span>Latency: <strong className="text-slate-200">2.4ms</strong></span>
                      <span>Ledger Sync: <strong className="text-emerald-400">Zero Drift</strong></span>
                    </div>
                  </div>
                )}

                {/* 4 Quick Stat Gauges */}
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {activeTabContent.stats.map((s, i) => (
                    <div 
                      key={i} 
                      className="group/stat p-3.5 rounded-2xl bg-navy-900/90 hover:bg-navy-800/90 border border-slate-700/80 hover:border-brand-500/50 transition-all duration-200 space-y-1 shadow-inner relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                          {s.label}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400/40 group-hover/stat:bg-brand-400 transition-colors"></span>
                      </div>
                      <div className={`text-xl sm:text-2xl font-black font-mono tracking-tight ${s.color}`}>
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status Bar */}
                <div className="p-3.5 rounded-2xl bg-navy-900/60 border border-slate-800 text-xs text-slate-300 flex items-center justify-between relative z-10">
                  <span className="flex items-center gap-2 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate">
                      {activeTabContent.id === 'godown' || activeTabContent.title.toLowerCase().includes('inter-branch') || activeTabContent.title.toLowerCase().includes('lot valuation')
                        ? '50+ Godown Network Synced • Zero Ledger Drift'
                        : activeTabContent.id === 'shopfloor' || activeTabContent.title.toLowerCase().includes('cnc')
                        ? 'MQTT Protocol v3.1.1 Synced • Edge Active'
                        : 'Edge IoT Gateway Sync • 0 Latency'}
                    </span>
                  </span>
                  <span className="text-emerald-400 font-bold font-mono text-[11px] shrink-0">
                    {activeTabContent.id === 'godown' || activeTabContent.title.toLowerCase().includes('inter-branch') ? 'FIFO Active' : 'Edge Active'}
                  </span>
                </div>

                {/* Launch Live Demo CTA Button */}
                <button
                  onClick={handleLaunchDemo}
                  className="group w-full py-4 rounded-2xl bg-gradient-to-r from-brand-500 via-indigo-600 to-brand-600 hover:from-brand-400 hover:via-indigo-500 hover:to-brand-500 text-white font-black text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer border-2 border-brand-400/30 relative z-10"
                >
                  <LayoutDashboard className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                  <span>
                    {activeTabContent.id === 'godown' || activeTabContent.title.toLowerCase().includes('inter-branch')
                      ? 'Simulate Multi-Godown Transfer in Demo'
                      : 'Simulate in Live Interactive Demo'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        )}

      </section>

      {/* ======================================================== */}
      {/* 4. MODULAR CLOUD APPS (Website Grid) */}
      {/* ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-[1600px] w-full mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3.5 py-1 rounded-full bg-brand-50 text-brand-700 border-2 border-brand-200 text-xs font-black uppercase tracking-widest inline-block shadow-2xs">
              Complete Modular Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
              {industry.modules?.length || 8} Pre-Engineered Modules for {industry.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Every engine includes customized master schemas, specialized formulas, and localized regulatory compliance out of the box.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industry.modules?.map((mod, idx) => (
              <div 
                key={idx}
                className="group relative bg-white rounded-3xl border-2 border-slate-300/90 hover:border-brand-500 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.10),0_4px_10px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_22px_45px_-8px_rgba(37,99,235,0.22)] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-2.5"
              >
                {/* Top Accent Gradient Line */}
                <div className="h-2.5 w-full bg-gradient-to-r from-navy-950 via-brand-600 to-sky-400 group-hover:from-brand-500 group-hover:to-sky-300 group-hover:h-3 transition-all duration-300"></div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-brand-300 border-2 border-navy-700 shadow-md group-hover:from-brand-600 group-hover:to-sky-500 group-hover:text-white group-hover:border-brand-400 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-brand-500/30 flex items-center justify-center transition-all duration-300 p-3">
                      <DynamicIcon name={mod.icon} className="w-6 h-6 transition-transform group-hover:rotate-3" />
                    </div>
                    <span className="text-xs font-mono font-black px-3 py-1 rounded-lg bg-navy-950 text-brand-300 border-2 border-navy-800 shadow-xs">
                      {mod.code}
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-navy-950 group-hover:text-brand-600 transition-colors mb-2 leading-snug">
                    {mod.name}
                  </h4>

                  <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed mb-5 flex-1">
                    {mod.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-3.5 border-t border-slate-100 text-[10px] font-bold">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border-2 border-slate-200/90 shadow-2xs">
                      Pre-Configured
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border-2 border-emerald-300/80 shadow-2xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Real-Time Sync
                    </span>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 py-4 bg-slate-50/90 border-t-2 border-slate-200/90 group-hover:bg-brand-50/60 transition-colors flex items-center justify-between text-xs">
                  <span className="font-extrabold text-emerald-700 flex items-center gap-1.5 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Ready to Deploy
                  </span>
                  <button
                    onClick={() => setSelectedModuleModal(mod)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-navy-950 to-brand-900 text-white font-black text-xs hover:from-brand-600 hover:to-sky-600 shadow-md shadow-navy-950/20 group-hover:shadow-brand-500/30 flex items-center gap-1.5 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Simulate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. INTERACTIVE ROI & SAVINGS CALCULATOR */}
      {/* ======================================================== */}
      {landingData.calculator && (
        <section className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1600px] w-full mx-auto space-y-12">
          
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-navy-950 via-slate-900 to-navy-950 text-white border-2 border-slate-800 shadow-2xl relative overflow-hidden">
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left: Interactive Input Sliders */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 mb-3">
                    <Calculator className="w-3.5 h-3.5" /> {landingData.calculator.badge}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                    {landingData.calculator.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                    {landingData.calculator.desc}
                  </p>
                </div>

                {/* Slider 1 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-300 uppercase tracking-wider">{landingData.calculator.slider1.label}:</span>
                    <span className="text-brand-300 font-mono text-base">{slider1.toLocaleString()} {landingData.calculator.slider1.unit}</span>
                  </div>
                  <input
                    type="range"
                    min={landingData.calculator.slider1.min}
                    max={landingData.calculator.slider1.max}
                    step={landingData.calculator.slider1.step}
                    value={slider1}
                    onChange={(e) => setSlider1(Number(e.target.value))}
                    className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-brand-400"
                  />
                </div>

                {/* Slider 2 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-300 uppercase tracking-wider">{landingData.calculator.slider2.label}:</span>
                    <span className="text-cyan-300 font-mono text-base">{slider2.toLocaleString()} {landingData.calculator.slider2.unit}</span>
                  </div>
                  <input
                    type="range"
                    min={landingData.calculator.slider2.min}
                    max={landingData.calculator.slider2.max}
                    step={landingData.calculator.slider2.step}
                    value={slider2}
                    onChange={(e) => setSlider2(Number(e.target.value))}
                    className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                {/* Slider 3 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-300 uppercase tracking-wider">{landingData.calculator.slider3.label}:</span>
                    <span className="text-amber-300 font-mono text-base">{slider3.toLocaleString()} {landingData.calculator.slider3.unit}</span>
                  </div>
                  <input
                    type="range"
                    min={landingData.calculator.slider3.min}
                    max={landingData.calculator.slider3.max}
                    step={landingData.calculator.slider3.step}
                    value={slider3}
                    onChange={(e) => setSlider3(Number(e.target.value))}
                    className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>
              </div>

              {/* Right: Real-time Calculated ROI Output Cards */}
              <div className="lg:col-span-5 bg-navy-900/95 rounded-3xl border-2 border-slate-700/80 p-7 sm:p-8 space-y-6 shadow-xl">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Projected Operational Impact</span>
                
                <div className="space-y-1">
                  <span className="text-xs text-slate-300 font-medium">{savingsLabel}</span>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                    ${estimatedAnnualSavings.toLocaleString()}
                    <span className="text-xs text-slate-400 font-sans font-bold"> / yr</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                  <div className="p-3.5 rounded-2xl bg-navy-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">{metricLiftLabel}</span>
                    <div className="text-2xl font-black text-brand-300 font-mono">+{estimatedLift}%</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-navy-950 border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Payback Timeline</span>
                    <div className="text-2xl font-black text-amber-300 font-mono">{estimatedPaybackMonths} Mo</div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                  * Projections calculated from verified cross-industry benchmarks across 500+ active enterprise deployments.
                </p>

                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-400 to-sky-400 text-navy-950 font-black text-xs hover:brightness-110 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Custom Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </section>
      )}

      {/* ======================================================== */}
      {/* 6. VERIFIED CUSTOMER TESTIMONIAL CASE STUDY */}
      {/* ======================================================== */}
      {landingData.testimonial && (
        <section className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 bg-slate-100/70 border-b-2 border-slate-200">
          <div className="max-w-[1200px] w-full mx-auto p-10 sm:p-14 rounded-3xl bg-white border-2 border-slate-300/90 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.12)] relative overflow-hidden text-center space-y-6">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-1.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
                <span className="ml-2 text-xs font-black text-amber-900 tracking-wider uppercase bg-amber-50 px-3 py-1 rounded-full border-2 border-amber-300 shadow-2xs">
                  Verified Enterprise Case Study
                </span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-black text-navy-950 leading-relaxed tracking-tight">
                "{landingData.testimonial.quote}"
              </blockquote>

              <div className="pt-4 flex items-center justify-center gap-4">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-brand-600 via-sky-500 to-brand-400 text-white font-black text-base flex items-center justify-center shadow-lg shadow-brand-500/30 border-2 border-white shrink-0">
                  {landingData.testimonial.author.slice(0, 2).toUpperCase()}
                </div>
                <div className="text-left">
                  <p className="font-black text-navy-950 text-base leading-snug flex items-center gap-1.5">
                    {landingData.testimonial.author}
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 inline shrink-0" />
                  </p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-0.5">
                    {landingData.testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ Accordion) */}
      {/* ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1400px] w-full mx-auto space-y-8">
        
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 border-2 border-slate-300 text-xs font-black uppercase tracking-widest inline-block shadow-2xs">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
            Common Answers for {industry.name} Leaders
          </h2>
        </div>

        <div className="space-y-4 pt-4">
          {landingData.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className={`bg-white rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-brand-500 shadow-lg shadow-brand-500/10 ring-2 ring-brand-500/10' : 'border-slate-300/80 shadow-xs hover:border-slate-400'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-black text-navy-950 text-sm sm:text-base hover:text-brand-600 transition cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-brand-600" /> : <ChevronDown className="w-4 h-4 text-slate-600" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* ======================================================== */}
      {/* 8. HIGH-CONVERTING BOTTOM WEBSITE CTA */}
      {/* ======================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1600px] w-full mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white p-10 sm:p-16 text-center border-2 border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-brand-400 bg-brand-500/10 px-4 py-1.5 rounded-full border border-brand-500/20 inline-block">
              Rapid 14-Day Production Go-Live Guarantee
            </span>

            <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {landingData.ctaHeadline}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {landingData.ctaSub}
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-300 via-brand-400 to-sky-300 text-navy-950 font-black text-sm hover:brightness-110 shadow-xl shadow-brand-500/25 transition cursor-pointer"
              >
                Schedule Architecture Call
              </button>

              <button
                onClick={handleLaunchDemo}
                className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition cursor-pointer"
              >
                Launch Live Interactive Workspace
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Module Simulation Detail Modal */}
      {selectedModuleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold">
                  <DynamicIcon name={selectedModuleModal.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-navy-950">{selectedModuleModal.name}</h4>
                  <span className="text-[10px] font-mono font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                    Module Code: {selectedModuleModal.code}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedModuleModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedModuleModal.desc}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
              <span className="font-bold text-navy-900 block">Active Architecture Capabilities:</span>
              <ul className="space-y-1.5 text-slate-600 text-[11px]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Real-time double-entry ledger integration
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Granular RBAC permissions enforcement
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Multi-branch cloud synchronicity
                </li>
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedModuleModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedModuleModal(null);
                  handleLaunchDemo();
                }}
                className="px-5 py-2.5 rounded-xl bg-navy-950 text-white font-bold text-xs hover:bg-navy-900 shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <LayoutDashboard className="w-3.5 h-3.5 text-brand-400" />
                <span>Launch in Live Demo</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type="book-demo"
        defaultIndustry={industry.name}
      />

    </div>
  );
};

export default IndustryDetails;
