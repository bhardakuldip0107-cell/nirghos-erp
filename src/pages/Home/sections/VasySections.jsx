import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Building2,
  Star,
  Headphones,
  Cloud,
  ShieldCheck,
  Lock,
  Factory,
  Store,
  Boxes,
  Landmark,
  Truck,
  ClipboardCheck,
  FileBadge,
  CalendarCog,
  ShoppingCart,
  Warehouse,
  ScanBarcode,
  Package,
  Tag,
  Receipt,
  Users,
  BarChart3,
  LayoutDashboard,
  Network,
  Gauge,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  TrendingUp,
  FileText,
  Zap,
  Play,
  Smartphone,
  Monitor,
  Wallet,
  MessageCircle,
  Globe,
  HeartPulse,
  Hotel,
  Cpu,
  Leaf,
  Search,
  Bell,
  CreditCard,
  Gift,
  QrCode,
  WifiOff
} from 'lucide-react';
import DynamicIcon from '../../../components/common/DynamicIcon';
import { industriesData, industryCategories } from '../../../data/industries';

/* ------------------------------------------------------------------------- */
/* Shared building blocks                                                     */
/* ------------------------------------------------------------------------- */

const Container = ({ children, className = '' }) => (
  <div className={`max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export const SectionHeading = ({ title, subtitle, highlight, className = '' }) => (
  <div className={`text-center max-w-4xl mx-auto ${className}`}>
    <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-semibold tracking-tight text-slate-800 leading-[1.15]">
      {highlight ? (
        <>
          <span className="text-[#0ea5e9]">{highlight}</span> {title}
        </>
      ) : (
        title
      )}
    </h2>
    {subtitle && (
      <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">{subtitle}</p>
    )}
  </div>
);

const pad = (n) => String(n).padStart(2, '0');

const Counter = ({ current, total, className = '' }) => (
  <span className={`font-mono text-[11px] tracking-widest text-slate-400 ${className}`}>
    {pad(current)} / {pad(total)}
  </span>
);

const RoundNav = ({ onPrev, onNext, size = 'md' }) => {
  const s = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        aria-label="Previous"
        className={`${s} rounded-full bg-white border border-slate-200 text-slate-700 hover:border-[#0284c7] hover:text-[#0284c7] flex items-center justify-center transition shadow-sm`}
      >
        <ArrowLeft className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next"
        className={`${s} rounded-full bg-white border border-slate-200 text-slate-700 hover:border-[#0284c7] hover:text-[#0284c7] flex items-center justify-center transition shadow-sm`}
      >
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

/* ------------------------------------------------------------------------- */
/* 1. Trust strip (below hero marquee)                                        */
/* ------------------------------------------------------------------------- */

const trustItems = [
  { icon: Building2, value: '50+', label: 'Trusted Clients' },
  { icon: Star, value: '4.8', suffix: '/5', label: 'Google Rating' },
  { icon: Headphones, value: '365-Day', label: 'Support' },
  { icon: Cloud, value: 'Cloud + Offline', label: 'ERP & POS' },
  { icon: ShieldCheck, value: 'GST · E-Invoice', label: 'Compliance' },
  { icon: Lock, value: '25+ Years', label: 'Experience' }
];

export const TrustStrip = () => (
  <Container className="relative z-10 mt-6">
    <div className="bg-white/90 backdrop-blur rounded-2xl border border-slate-200/80 shadow-[0_8px_30px_-12px_rgba(2,132,199,0.18)] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
      {trustItems.map(({ icon: Icon, value, suffix, label }) => (
        <div key={label} className="flex items-center gap-3 px-4 py-4 text-left">
          <span className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
            <Icon className="w-[18px] h-[18px]" />
          </span>
          <div className="min-w-0">
            <p className="text-[15px] font-semibold text-slate-800 leading-tight truncate">
              {value}
              {suffix && <span className="text-xs text-[#0284c7]">{suffix}</span>}
            </p>
            <p className="text-xs text-slate-500">{label}</p>
          </div>
        </div>
      ))}
    </div>
  </Container>
);

/* ------------------------------------------------------------------------- */
/* 2. Product dashboard preview (tilted, like vasy hero)                      */
/* ------------------------------------------------------------------------- */

const bars = [38, 52, 44, 63, 58, 72, 49, 66, 81, 70, 92, 78];

export const DashboardPreview = () => (
  <Container className="relative mt-14 sm:mt-16">
    <div className="absolute inset-x-10 top-10 bottom-0 bg-sky-200/40 blur-3xl rounded-full pointer-events-none" />
    <div className="relative mx-auto max-w-[1080px] [perspective:2000px]">
      <div className="rounded-[28px] bg-white border border-slate-200 shadow-[0_40px_80px_-30px_rgba(11,25,44,0.35)] overflow-hidden [transform:rotateX(14deg)] origin-top transition-transform duration-700 hover:[transform:rotateX(0deg)]">
        <div className="grid grid-cols-12 min-h-[440px] text-left">
          {/* Sidebar */}
          <aside className="hidden md:flex col-span-3 lg:col-span-2 flex-col gap-1 border-r border-slate-100 bg-slate-50/60 p-4">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-7 rounded-lg bg-[#0284c7] text-white text-xs font-bold flex items-center justify-center">N</span>
              <span className="font-semibold text-slate-800 text-sm">Nirghos</span>
            </div>
            {[
              [LayoutDashboard, 'Dashboard', true],
              [Receipt, 'Billing / POS'],
              [Boxes, 'Inventory'],
              [ShoppingCart, 'Purchase'],
              [Landmark, 'Accounts'],
              [Users, 'CRM'],
              [Factory, 'Production'],
              [BarChart3, 'Reports']
            ].map(([Icon, l, active]) => (
              <div
                key={l}
                className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs ${
                  active ? 'bg-sky-100 text-[#0284c7] font-semibold' : 'text-slate-500'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {l}
              </div>
            ))}
          </aside>

          {/* Main */}
          <div className="col-span-12 md:col-span-9 lg:col-span-10 p-5 sm:p-6 space-y-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-800">Good morning, Admin 👋</p>
                <p className="text-[11px] text-slate-400">Here is what is happening across your business today</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-[11px] text-slate-400 w-44">
                  <Search className="w-3.5 h-3.5" /> Search anything…
                </div>
                <span className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400">
                  <Bell className="w-3.5 h-3.5" />
                </span>
                <span className="rounded-lg bg-[#0284c7] text-white text-[11px] font-semibold px-3 py-2">+ New Invoice</span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                ['Today Sales', '₹4,82,350', '+12.4%'],
                ['Orders', '1,286', '+8.1%'],
                ['Stock Value', '₹1.42 Cr', '+2.3%'],
                ['Receivables', '₹18.6 L', '-4.2%']
              ].map(([l, v, d]) => (
                <div key={l} className="rounded-xl border border-slate-100 bg-gradient-to-b from-white to-slate-50/60 p-3.5">
                  <p className="text-[11px] text-slate-400">{l}</p>
                  <p className="text-base sm:text-lg font-semibold text-slate-800 mt-0.5">{v}</p>
                  <p className={`text-[11px] font-medium ${d.startsWith('-') ? 'text-rose-500' : 'text-emerald-600'}`}>{d} vs yesterday</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <div className="lg:col-span-2 rounded-xl border border-slate-100 p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-semibold text-slate-700">Revenue overview</p>
                  <span className="text-[10px] rounded-full bg-sky-50 text-[#0284c7] px-2 py-0.5">Last 12 months</span>
                </div>
                <div className="h-36 flex items-end gap-2">
                  {bars.map((h, i) => (
                    <div key={i} className="flex-1 h-full flex flex-col justify-end">
                      <div
                        className={`rounded-t-md ${i === 10 ? 'bg-[#0284c7]' : 'bg-sky-200/80'}`}
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-slate-100 p-4 flex flex-col">
                <p className="text-xs font-semibold text-slate-700">Business health score</p>
                <div className="flex-1 flex items-center justify-center py-2">
                  <svg viewBox="0 0 120 70" className="w-40">
                    <path d="M10 62 A50 50 0 0 1 110 62" fill="none" stroke="#e2e8f0" strokeWidth="10" strokeLinecap="round" />
                    <path d="M10 62 A50 50 0 0 1 96 28" fill="none" stroke="#0ea5e9" strokeWidth="10" strokeLinecap="round" />
                    <text x="60" y="58" textAnchor="middle" className="fill-slate-800" fontSize="18" fontWeight="600">86</text>
                  </svg>
                </div>
                <p className="text-[11px] text-center text-emerald-600 font-medium">Healthy · 3 insights to review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

/* ------------------------------------------------------------------------- */
/* 3. Solving business challenges across sectors                              */
/* ------------------------------------------------------------------------- */

const sectorIcons = {
  'Industrial & Manufacturing': Factory,
  'Trade & Commerce': Store,
  'Healthcare & Life Sciences': HeartPulse,
  'Institutional & Hospitality': Hotel,
  'Services & Technology': Cpu,
  'Energy & Resources': Leaf
};

const SECTOR_PAGE_SIZE = 4;

const sectorImages = {
  'Industrial & Manufacturing': '/sectors/industrial-manufacturing.jpg',
  'Trade & Commerce': '/sectors/trade-commerce.jpg',
  'Healthcare & Life Sciences': '/sectors/healthcare-life-sciences.jpg',
  'Institutional & Hospitality': '/sectors/institutional-hospitality.jpg',
  'Services & Technology': '/sectors/services-technology.jpg',
  'Energy & Resources': '/sectors/energy-resources.jpg'
};

export const SectorsSection = () => {
  const sectors = industryCategories.filter((c) => c !== 'All');
  const [activeSector, setActiveSector] = useState('Trade & Commerce');
  const [page, setPage] = useState(0);

  const list = useMemo(() => industriesData.filter((i) => i.category === activeSector), [activeSector]);
  const pages = Math.max(1, Math.ceil(list.length / SECTOR_PAGE_SIZE));
  const visible = list.slice(page * SECTOR_PAGE_SIZE, page * SECTOR_PAGE_SIZE + SECTOR_PAGE_SIZE);
  const featured = visible[0] || list[0];
  const SectorIcon = sectorIcons[activeSector] || Store;

  const selectSector = (s) => {
    setActiveSector(s);
    setPage(0);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-sky-50/40 to-white">
      <Container>
        <SectionHeading
          title="Solving business challenges across sectors"
          subtitle="Whether it's retail, wholesale or manufacturing, Nirghos ERP is the right fit for all"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
          {/* Sector tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1">
            {sectors.map((s) => {
              const Icon = sectorIcons[s] || Store;
              const active = s === activeSector;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => selectSector(s)}
                  className={`shrink-0 flex items-center gap-3 rounded-xl px-4 py-3.5 text-left text-[15px] transition ${
                    active ? 'bg-sky-100/70 text-[#0284c7] font-semibold' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="whitespace-nowrap lg:whitespace-normal">{s}</span>
                </button>
              );
            })}
          </div>

          {/* Content card */}
          <div className="rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_50px_-25px_rgba(11,25,44,0.2)] p-5 sm:p-8 grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-8">
            <div>
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-800">{activeSector}</h3>
                <div className="flex items-center gap-4">
                  <Counter current={page + 1} total={pages} />
                  <RoundNav
                    onPrev={() => setPage((p) => (p - 1 + pages) % pages)}
                    onNext={() => setPage((p) => (p + 1) % pages)}
                  />
                </div>
              </div>

              <div key={`${activeSector}-${page}`} className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                {visible.map((ind) => (
                  <Link
                    key={ind.slug}
                    to={`/industries/${ind.slug}`}
                    className="group rounded-2xl border border-slate-200 p-5 hover:border-[#0284c7]/50 hover:shadow-card-hover transition bg-white"
                  >
                    <span className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 group-hover:text-[#0284c7] group-hover:bg-sky-50 flex items-center justify-center transition">
                      <DynamicIcon name={ind.icon} className="w-[18px] h-[18px]" />
                    </span>
                    <p className="mt-4 font-semibold text-slate-800 flex items-center gap-1">
                      {ind.name}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#0284c7] transition" />
                    </p>
                    <p className="mt-1.5 text-sm text-slate-500 leading-relaxed line-clamp-2">{ind.shortDesc}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Visual + CTA */}
            <div className="flex flex-col gap-3 xl:pt-16">
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50 border border-slate-200/80 h-60 overflow-hidden group">
                <img
                  key={activeSector}
                  src={sectorImages[activeSector] || '/sectors/industrial-manufacturing.jpg'}
                  alt={`${activeSector} ERP illustration`}
                  className="w-full h-full object-cover animate-fadeIn group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
                {featured && (
                  <span className="absolute top-3 right-3 rounded-full bg-[#0284c7]/95 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 shadow-md">
                    {featured.name.split('&')[0].trim()}
                  </span>
                )}
                {featured?.stats?.[0] && (
                  <span className="absolute bottom-3 left-3 rounded-xl bg-white/95 backdrop-blur-xs text-[11px] px-3 py-1.5 shadow-md border border-slate-100 animate-float-delayed">
                    <span className="font-semibold text-emerald-600">{featured.stats[0].value}</span>{' '}
                    <span className="text-slate-600">{featured.stats[0].label}</span>
                  </span>
                )}
              </div>
              <Link
                to="/industries"
                className="group rounded-2xl bg-[#0284c7] hover:bg-[#0369a1] text-white px-5 py-4 flex items-center gap-3 transition"
              >
                <span className="w-10 h-10 rounded-xl bg-white text-[#0284c7] flex items-center justify-center shrink-0">
                  <SectorIcon className="w-5 h-5" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold truncate">Explore {activeSector.split('&')[0].trim()} Solutions</span>
                  <span className="block text-xs text-sky-100">Manage your business smarter</span>
                </span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ------------------------------------------------------------------------- */
/* 4. ERP for Manufacturers / Retailers                                       */
/* ------------------------------------------------------------------------- */

const erpTracks = {
  manufacturers: {
    tab: 'ERP for Manufacturers',
    tabSub: 'From a single plant to multi-unit factories.',
    icon: Factory,
    title: 'ERP for Manufacturers',
    desc: 'Nirghos is a trusted manufacturing ERP for Indian factories and production units. We connect production, materials, quality, warehouse and finance on one platform, so you plan better, waste less and dispatch on time.',
    quote: 'Nirghos is a complete ERP for manufacturing companies, from a single plant to multi-unit factories.',
    stats: [
      ['250+', 'member engineering team'],
      ['25+', 'years of ERP expertise']
    ],
    cta: { label: 'See all manufacturing ERP features', to: '/industries/manufacturing' },
    nodes: [
      [Factory, 'Production'],
      [Boxes, 'Materials'],
      [ClipboardCheck, 'Quality'],
      [Warehouse, 'Warehouse'],
      [Landmark, 'Finance'],
      [Truck, 'Dispatch']
    ],
    offersTitle: 'Our manufacturing ERP offers',
    offers: [
      [Factory, 'Production planning & management'],
      [Network, 'Bills of materials (BOM)'],
      [Boxes, 'Raw materials management'],
      [Gauge, 'Job work & WIP status'],
      [ClipboardCheck, 'Quality control management'],
      [FileBadge, 'Test certificate management'],
      [CalendarCog, 'Plant maintenance & schedules'],
      [ShoppingCart, 'Procurement & vendor management'],
      [Warehouse, 'Warehouse management'],
      [ScanBarcode, 'Barcode / RFID management'],
      [Truck, 'Packaging & transportation'],
      [Tag, 'Asset management'],
      [Receipt, 'GST accounting & finance'],
      [Users, 'Human resource & payroll'],
      [BarChart3, 'Production, dispatch & quality reports'],
      [LayoutDashboard, 'Business intelligence dashboards']
    ],
    industries: ['manufacturing', 'textile', 'chemical', 'food-beverage', 'automobile', 'electronics', 'furniture', 'printing'],
    note: 'Our manufacturing ERP team has 250+ members and 25+ years of experience. We serve textile, chemical, food & beverage, automobile, electronics, furniture and packaging manufacturers.'
  },
  retailers: {
    tab: 'ERP for Retailers & Small Businesses',
    tabSub: 'Simple for a small business, powerful enough to scale.',
    icon: Store,
    title: 'ERP for Retailers & Small Businesses',
    desc: 'From a single counter to a multi-store chain, Nirghos brings billing, inventory, purchase, accounts and customer loyalty into one simple system that your staff can learn in a day.',
    quote: 'Nirghos is a complete retail ERP, from a single shop to a multi-city store chain.',
    stats: [
      ['50+', 'businesses served'],
      ['400+', 'cities across India']
    ],
    cta: { label: 'See all retail ERP features', to: '/industries/retail' },
    nodes: [
      [Receipt, 'POS Billing'],
      [Boxes, 'Inventory'],
      [Users, 'CRM'],
      [ShoppingCart, 'Purchase'],
      [Landmark, 'Accounts'],
      [Globe, 'E-commerce']
    ],
    offersTitle: 'Our retail ERP offers',
    offers: [
      [Receipt, 'Fast POS billing'],
      [ScanBarcode, 'Barcode & label printing'],
      [Boxes, 'Multi-store inventory'],
      [Warehouse, 'Godown & stock transfer'],
      [ShoppingCart, 'Purchase & supplier management'],
      [Users, 'Customer CRM & loyalty'],
      [Gift, 'Schemes, offers & coupons'],
      [CreditCard, 'UPI & card payments'],
      [Landmark, 'GST accounting & e-invoice'],
      [Wallet, 'Credit & outstanding tracking'],
      [Globe, 'Online store sync'],
      [Smartphone, 'Owner mobile app'],
      [MessageCircle, 'WhatsApp bills & alerts'],
      [QrCode, 'QR & digital catalogues'],
      [Users, 'Staff & salesman commission'],
      [BarChart3, 'Sales & profit reports']
    ],
    industries: ['retail', 'trading', 'jewellery', 'textile', 'pharma', 'hotel-restaurant', 'logistics'],
    note: 'Retail stores, supermarkets, jewellers, garment shops, pharmacies, restaurants and distributors run their daily business on Nirghos.'
  }
};

const HubDiagram = ({ nodes }) => {
  const left = nodes.slice(0, 3);
  const right = nodes.slice(3, 6);
  const Node = ([Icon, label]) => (
    <div key={label} className="flex items-center gap-2 rounded-xl bg-white border border-slate-100 shadow-sm px-3 py-2.5 text-xs font-medium text-slate-700 w-[132px]">
      <Icon className="w-4 h-4 text-[#0284c7] shrink-0" />
      <span className="truncate">{label}</span>
    </div>
  );
  return (
    <div className="relative rounded-2xl bg-slate-50 border border-slate-100 p-6 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 260" preserveAspectRatio="none">
        {[50, 130, 210].map((y) => (
          <React.Fragment key={y}>
            <path d={`M140 ${y} C 170 ${y}, 170 130, 200 130`} fill="none" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="3 4" className="animate-dash-flow" />
            <path d={`M260 ${y} C 230 ${y}, 230 130, 200 130`} fill="none" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="3 4" className="animate-dash-flow" />
          </React.Fragment>
        ))}
        <circle cx="200" cy="130" r="58" fill="none" stroke="#bae6fd" strokeWidth="1" />
      </svg>
      <div className="relative flex items-center justify-between gap-2 min-h-[230px]">
        <div className="flex flex-col justify-between h-[230px]">{left.map(Node)}</div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white shadow-xl border border-slate-100 flex items-center justify-center animate-pulse-glow">
          <img src="/nirghos-icon.png" alt="Nirghos Hub" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
        </div>
        <div className="flex flex-col justify-between h-[230px]">{right.map(Node)}</div>
      </div>
    </div>
  );
};

export const ErpForSection = () => {
  const [track, setTrack] = useState('manufacturers');
  const data = erpTracks[track];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        <SectionHeading
          title="ERP for Indian Manufacturers, Retailers, and Small Businesses"
          subtitle="Automate daily workflows, meet GST compliance, manage stock, stores, warehouses, factories and staff, and scale your business faster with one trusted ERP partner."
        />

        {/* Track switch */}
        <div className="mt-10 rounded-3xl bg-slate-100/80 p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          {Object.entries(erpTracks).map(([key, t]) => {
            const Icon = t.icon;
            const active = key === track;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setTrack(key)}
                className={`flex items-center gap-4 rounded-2xl px-4 sm:px-5 py-4 text-left transition ${
                  active ? 'bg-white shadow-md' : 'hover:bg-white/60'
                }`}
              >
                <span
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    active ? 'bg-[#0ea5e9] text-white' : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className={`block text-base sm:text-lg font-semibold ${active ? 'text-[#0369a1]' : 'text-slate-800'}`}>{t.tab}</span>
                  <span className="block text-xs sm:text-sm text-slate-500">{t.tabSub}</span>
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    active ? 'bg-[#0ea5e9] text-white' : 'bg-white text-slate-500'
                  }`}
                >
                  {active ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail card */}
        <div key={track} className="mt-8 rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_60px_-30px_rgba(11,25,44,0.25)] p-6 sm:p-10 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800">{data.title}</h3>
              <p className="mt-4 text-slate-500 leading-relaxed">{data.desc}</p>
              <p className="mt-5 border-l-2 border-[#0284c7] pl-4 text-sm font-medium text-slate-700">{data.quote}</p>
              <div className="mt-6 flex gap-12">
                {data.stats.map(([v, l]) => (
                  <div key={l}>
                    <p className="text-3xl font-semibold text-[#0369a1]">{v}</p>
                    <p className="text-xs text-slate-500 mt-1">{l}</p>
                  </div>
                ))}
              </div>
              <Link
                to={data.cta.to}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-sm font-semibold px-5 py-3.5 transition"
              >
                {data.cta.label} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <HubDiagram nodes={data.nodes} />
          </div>

          <h4 className="mt-12 font-semibold text-slate-800">{data.offersTitle}</h4>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {data.offers.map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-3 rounded-xl bg-slate-50 hover:bg-sky-50 px-4 py-3.5 text-sm text-slate-700 transition">
                <span className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center shrink-0 text-slate-700">
                  <Icon className="w-4 h-4" />
                </span>
                {label}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase">Industries we serve</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {data.industries.map((slug) => {
                  const ind = industriesData.find((i) => i.slug === slug);
                  if (!ind) return null;
                  return (
                    <Link
                      key={slug}
                      to={`/industries/${slug}`}
                      className="rounded-full bg-white border border-slate-200 px-3.5 py-1.5 text-sm text-slate-700 hover:border-[#0284c7] hover:text-[#0284c7] transition"
                    >
                      {ind.name.split('&')[0].trim()}
                    </Link>
                  );
                })}
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">{data.note}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ------------------------------------------------------------------------- */
/* 5. Go beyond with smart-store features                                     */
/* ------------------------------------------------------------------------- */

const smartFeatures = [
  {
    group: 'POS',
    slides: [
      { icon: Monitor, title: 'Image Based POS', desc: 'Product images on the billing screen make it easy for cashiers to identify items and bill faster, even without barcodes.' },
      { icon: ScanBarcode, title: 'Barcode & Scale Billing', desc: 'Scan barcodes, weigh loose items on connected scales and print GST invoices in seconds during rush hours.' },
      { icon: WifiOff, title: 'Offline Billing', desc: 'Keep billing even when the internet drops. Nirghos syncs every bill to the cloud as soon as you are back online.' }
    ]
  },
  {
    group: 'Inventory',
    slides: [
      { icon: Boxes, title: 'Multi-Location Stock', desc: 'See live stock across stores, godowns and online channels, and transfer stock between them with one click.' },
      { icon: TrendingUp, title: 'AI Reorder Suggestions', desc: 'Nirghos studies your sales and suggests what to reorder and when, so you never run out of fast movers.' },
      { icon: Package, title: 'Batch & Expiry Tracking', desc: 'Track batches, serial numbers and expiry dates, with alerts before stock goes bad.' }
    ]
  },
  {
    group: 'CRM',
    slides: [
      { icon: Gift, title: 'Loyalty & Rewards', desc: 'Points, tiers and personalised offers that bring customers back to your store again and again.' },
      { icon: MessageCircle, title: 'WhatsApp Marketing', desc: 'Send digital bills, birthday wishes and offer campaigns straight to your customers on WhatsApp.' }
    ]
  },
  {
    group: 'E-Commerce',
    slides: [
      { icon: Globe, title: 'Your Own Online Store', desc: 'Launch a branded online store connected to your ERP, with live stock, prices and orders in one place.' },
      { icon: Truck, title: 'Marketplace & Shipping Sync', desc: 'Sync orders from marketplaces and ship with integrated courier partners without manual entry.' }
    ]
  },
  {
    group: 'Mobile App',
    slides: [
      { icon: Smartphone, title: 'Owner Dashboard App', desc: 'Check sales, stock and outstanding from your phone, anywhere, any time.' },
      { icon: FileText, title: 'Salesman Order Booking', desc: 'Field staff book orders, collect payments and check customer ledgers on the go.' }
    ]
  }
];

const smartFeatureImages = {
  POS: '/sectors/trade-commerce.jpg',
  Inventory: '/sectors/healthcare-life-sciences.jpg',
  CRM: '/sectors/institutional-hospitality.jpg',
  'E-Commerce': '/sectors/services-technology.jpg',
  'Mobile App': '/sectors/industrial-manufacturing.jpg'
};

export const SmartStoreFeatures = () => {
  const [g, setG] = useState(0);
  const [s, setS] = useState(0);
  const group = smartFeatures[g];
  const slide = group.slides[s];
  const Icon = slide.icon;

  const next = () => {
    if (s + 1 < group.slides.length) setS(s + 1);
    else {
      setG((g + 1) % smartFeatures.length);
      setS(0);
    }
  };
  const prev = () => {
    if (s > 0) setS(s - 1);
    else {
      const pg = (g - 1 + smartFeatures.length) % smartFeatures.length;
      setG(pg);
      setS(smartFeatures[pg].slides.length - 1);
    }
  };

  useEffect(() => {
    const t = setTimeout(next, 5000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [g, s]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-sky-50/30 to-white">
      <Container>
        <SectionHeading
          title="Go beyond with smart-store features"
          subtitle="Turn every store visit into a great experience. Take your business to the next level."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] gap-10 items-center">
          <div className="flex lg:flex-col gap-4 lg:gap-1 overflow-x-auto">
            {smartFeatures.map((f, i) => (
              <button
                key={f.group}
                type="button"
                onClick={() => {
                  setG(i);
                  setS(0);
                }}
                className={`shrink-0 text-left text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight transition-colors ${
                  i === g ? 'text-[#0ea5e9]' : 'text-slate-200 hover:text-slate-300'
                }`}
              >
                {f.group}
              </button>
            ))}
          </div>

          <div className="relative rounded-3xl bg-slate-100/70 border border-slate-200/70 p-6 sm:p-8 min-h-[360px] flex gap-5">
            <div className="hidden sm:flex flex-col items-center gap-2">
              <span className="font-mono text-[11px] text-slate-500">{pad(s + 1)}</span>
              <div className="w-px flex-1 bg-slate-300 relative">
                <div
                  className="absolute top-0 left-0 w-px bg-[#0284c7] transition-all duration-500"
                  style={{ height: `${((s + 1) / group.slides.length) * 100}%` }}
                />
              </div>
              <span className="font-mono text-[11px] text-slate-400">{pad(group.slides.length)}</span>
            </div>

            <div key={`${g}-${s}`} className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 animate-fadeIn">
              <div className="flex flex-col">
                <span className="self-start rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0369a1] shadow-sm">{group.group}</span>
                <div className="mt-auto pt-10">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800">{slide.title}</h3>
                  <p className="mt-3 text-slate-500 leading-relaxed max-w-md">{slide.desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg bg-white group">
                  <img
                    src={smartFeatureImages[group.group] || '/sectors/trade-commerce.jpg'}
                    alt={slide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur-xs px-3 py-2 shadow-md border border-slate-100">
                    <span className="w-7 h-7 rounded-lg bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-semibold text-slate-800 truncate">{slide.title}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-5 right-5">
              <RoundNav onPrev={prev} onNext={next} size="sm" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-sm font-semibold px-6 py-3.5 transition"
          >
            Try Nirghos Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

/* ------------------------------------------------------------------------- */
/* 6. Nirghos AI banner                                                       */
/* ------------------------------------------------------------------------- */

export const AiBanner = ({ onWatch }) => (
  <section className="py-10 sm:py-14 bg-white">
    <Container>
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#060e19] via-[#0B192C] to-[#075985] px-6 py-10 sm:px-12 sm:py-14">
        <div className="absolute -right-24 -top-24 w-[520px] h-[520px] rounded-full border border-sky-400/20" />
        <div className="absolute -right-10 -top-10 w-[380px] h-[380px] rounded-full border border-sky-400/20" />
        <div className="absolute right-0 bottom-0 w-[480px] h-[300px] bg-sky-500/20 blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white">
              <Sparkles className="w-4 h-4 text-sky-300" /> Introducing <span className="text-sky-300">Nirghos AI</span>
            </span>
            <h2 className="mt-6 text-4xl sm:text-6xl font-semibold text-white tracking-tight">
              Meet <span className="text-sky-300">Nirghos AI.</span>
            </h2>
            <p className="mt-3 text-xl sm:text-3xl font-semibold text-white">the intelligence layer of your ERP.</p>
            <p className="mt-5 text-slate-300 text-base sm:text-lg">Ask questions. Get insights. Know what needs attention.</p>

            <div className="mt-8 flex flex-wrap gap-y-4 divide-x divide-white/10">
              {[
                [BarChart3, 'Predict', "what's next"],
                [FileText, 'Stay updated', 'every day'],
                [Zap, 'Make smarter', 'business decisions']
              ].map(([I, a, b]) => (
                <div key={a} className="flex items-center gap-3 px-4 first:pl-0">
                  <span className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center">
                    <I className="w-5 h-5" />
                  </span>
                  <span className="text-sm text-slate-200 leading-tight">
                    {a}
                    <br />
                    {b}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/ai-solutions"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 font-medium px-6 py-3.5 hover:bg-sky-50 transition"
              >
                Explore Nirghos AI <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={onWatch}
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 text-white font-medium px-6 py-3.5 hover:bg-white/10 transition"
              >
                <Play className="w-4 h-4 fill-current" /> Watch Overview
              </button>
            </div>
          </div>

          {/* AI chat mock */}
          <div className="relative">
            <div className="rounded-2xl bg-white shadow-2xl p-5 max-w-md ml-auto">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-800">
                  <Sparkles className="w-4 h-4 text-[#0284c7]" /> Nirghos AI
                </span>
                <span className="text-[10px] rounded-full bg-emerald-50 text-emerald-600 px-2 py-0.5">Online</span>
              </div>
              <p className="mt-4 text-sm font-medium text-slate-800">Good morning 👋</p>
              <p className="text-xs text-slate-400">How can I help you today?</p>
              <div className="mt-4 ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-[#0284c7] text-white text-xs px-3.5 py-2.5">
                Which products should I reorder this week?
              </div>
              <div className="mt-3 rounded-2xl rounded-bl-sm bg-slate-50 border border-slate-100 text-xs text-slate-600 px-3.5 py-3 space-y-2">
                <p>Based on the last 30 days of sales, 3 items will run out before Friday:</p>
                {[
                  ['Basmati Rice 5kg', '120 units'],
                  ['Cotton Kurta – M', '45 units'],
                  ['Gold Chain 22K', '8 pcs']
                ].map(([n, q]) => (
                  <div key={n} className="flex justify-between rounded-lg bg-white border border-slate-100 px-2.5 py-1.5">
                    <span className="text-slate-700">{n}</span>
                    <span className="font-semibold text-[#0284c7]">{q}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  ['Revenue', '₹24.8L', '+18%'],
                  ['Profit', '₹6.1L', '+9%'],
                  ['Orders', '1,245', '+12%']
                ].map(([l, v, d]) => (
                  <div key={l} className="rounded-xl border border-slate-100 p-2.5">
                    <p className="text-[10px] text-slate-400">{l}</p>
                    <p className="text-sm font-semibold text-slate-800">{v}</p>
                    <p className="text-[10px] text-emerald-600">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

/* ------------------------------------------------------------------------- */
/* 7. Integration partners hub                                                */
/* ------------------------------------------------------------------------- */

const integrationNodes = [
  { name: 'Razorpay', logo: '/integrations/razorpay-logo.png', cat: 'Payments', side: 'L' },
  { name: 'Paytm', logo: '/integrations/paytm-logo.png', cat: 'Payments', side: 'L' },
  { name: 'Pine Labs', logo: '/integrations/pinelabs-logo.png', cat: 'Payments', side: 'L' },
  { name: 'HDFC Bank', logo: '/integrations/hdfc-logo.png', cat: 'Banking', side: 'L' },
  { name: 'Shopify', logo: '/integrations/shopify-logo.png', cat: 'E-commerce', side: 'L' },
  { name: 'WooCommerce', logo: '/integrations/woocommerce-logo.png', cat: 'E-commerce', side: 'L' },
  { name: 'WhatsApp API', text: 'WhatsApp Business', cat: 'Messaging', side: 'R' },
  { name: 'Tally Prime', logo: '/integrations/tally-logo.png', cat: 'Accounting', side: 'R' },
  { name: 'Barcode & Scale', text: 'Weigh-Scale & POS', cat: 'Hardware', side: 'R' },
  { name: 'Thermal Print', text: 'ESC/POS Printers', cat: 'Hardware', side: 'R' },
  { name: 'E-way Bill', text: 'NIC E-Way Bill', cat: 'Compliance', side: 'R' },
  { name: 'E-Invoice', text: 'GST E-Invoice (IRN)', cat: 'Compliance', side: 'R' }
];

export const IntegrationsHub = () => {
  const cats = useMemo(() => {
    const m = {};
    integrationNodes.forEach((n) => (m[n.cat] = (m[n.cat] || 0) + 1));
    return Object.entries(m);
  }, []);
  const [active, setActive] = useState(cats[0][0]);

  useEffect(() => {
    const t = setTimeout(() => {
      const i = cats.findIndex(([c]) => c === active);
      setActive(cats[(i + 1) % cats.length][0]);
    }, 3500);
    return () => clearTimeout(t);
  }, [active, cats]);

  const left = integrationNodes.filter((n) => n.side === 'L');
  const right = integrationNodes.filter((n) => n.side === 'R');

  const NodeCard = (n) => {
    const on = n.cat === active;
    return (
      <div
        key={n.name}
        className={`h-14 rounded-xl bg-white border flex items-center justify-center px-3 transition-all duration-500 ${
          on ? 'border-sky-300 shadow-lg opacity-100 scale-100' : 'border-slate-100 opacity-60 grayscale scale-95'
        }`}
      >
        {n.logo ? (
          <img src={n.logo} alt={n.name} className="max-h-8 max-w-[110px] object-contain" />
        ) : (
          <span className="text-xs font-semibold text-slate-700 flex items-center gap-1">
            <FileBadge className="w-3.5 h-3.5 text-[#0284c7]" /> {n.text}
          </span>
        )}
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Our integration partners"
          subtitle="Connect Nirghos ERP seamlessly with payment gateways, banks, WhatsApp Business, barcode & weigh-scale hardware, online stores and GST portals"
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase mb-4">
              {active} · {pad(cats.find(([c]) => c === active)[1])} partners
            </p>
            <div className="flex lg:flex-col gap-1 overflow-x-auto">
              {cats.map(([c, n]) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={`shrink-0 flex items-center justify-between gap-6 border-l-2 px-4 py-3 text-left text-[17px] transition ${
                    c === active ? 'border-[#0ea5e9] text-[#0284c7] font-medium' : 'border-slate-200 text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {c}
                  <span className="font-mono text-[11px]">{pad(n)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl bg-slate-50 border border-slate-100 p-5 sm:p-8 overflow-hidden">
            <div className="grid grid-cols-[1fr_auto_1fr] gap-4 sm:gap-10 items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{left.map(NodeCard)}</div>

              <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-sky-100/60 animate-ping [animation-duration:3s]" />
                <div className="absolute inset-2 rounded-full bg-sky-100" />
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-xl flex items-center justify-center border border-sky-100">
                  <img src="/nirghos-icon.png" alt="Nirghos ERP" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{right.map(NodeCard)}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ------------------------------------------------------------------------- */
/* 8. Happy clients wall                                                      */
/* ------------------------------------------------------------------------- */

const OrbitStatCircle = ({ value, label, sublabel, orbitClass }) => (
  <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-sky-400/75 bg-sky-50/50 flex items-center justify-center shadow-sm mx-auto">
    <div className={`absolute inset-0 pointer-events-none ${orbitClass}`}>
      <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#0284c7] shadow-[0_0_10px_rgba(2,132,199,0.75)] ring-4 ring-sky-200/60" />
    </div>
    <div className="relative z-10 text-center px-3">
      <p className="text-2xl sm:text-3xl font-bold text-[#0284c7] tracking-tight">{value}</p>
      <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-1 leading-tight">{label}</p>
      {sublabel && <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 leading-tight">{sublabel}</p>}
    </div>
  </div>
);

export const ClientsWall = () => (
  <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
    <Container>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-[52px] font-semibold tracking-tight text-slate-800 leading-[1.15]">
        <span className="text-[#0ea5e9]">50+</span> businesses
        <br />
        happy clients who make us
      </h2>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-8 items-center">
        {/* Left 2 Orbiting Stat Circles */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-14">
          <OrbitStatCircle
            value="50"
            label="Total Clients"
            sublabel="(Gujarat & Nearby States)"
            orbitClass="animate-orbit-1"
          />
          <OrbitStatCircle value="4.8+" label="Google Rating" orbitClass="animate-orbit-2" />
        </div>

        {/* Center Gujarat & Nearby States Map */}
        <div className="flex justify-center">
          <img
            src="/gujarat-clients-map.png"
            alt="Nirghos ERP Gujarat & Nearby States Client Map"
            className="w-full max-w-[520px] h-auto object-contain animate-fadeIn drop-shadow-sm"
          />
        </div>

        {/* Right 2 Orbiting Stat Circles */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-14">
          <OrbitStatCircle value="25+" label="Employees" orbitClass="animate-orbit-3" />
          <OrbitStatCircle value="4" label="States / UTs Covered" orbitClass="animate-orbit-4" />
        </div>
      </div>
    </Container>
  </section>
);

/* ------------------------------------------------------------------------- */
/* 9. Testimonial stories slider                                              */
/* ------------------------------------------------------------------------- */

const storyGradients = [
  'from-[#0B192C] via-[#075985] to-[#0ea5e9]',
  'from-[#132842] via-[#0369a1] to-[#38bdf8]',
  'from-[#060e19] via-[#1E3E62] to-[#0284c7]'
];

export const TestimonialStories = ({ testimonials, onPlay }) => {
  const [i, setI] = useState(0);
  const total = testimonials.length;
  const t = testimonials[i];

  useEffect(() => {
    const id = setTimeout(() => setI((x) => (x + 1) % total), 7000);
    return () => clearTimeout(id);
  }, [i, total]);

  if (!t) return null;
  const initials = t.name.replace(/^(Mr|Mrs|Ms|Dr)\.?\s*/i, '').split(' ').map((p) => p[0]).join('').slice(0, 2);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <SectionHeading title="Stories from our customers" subtitle="Real businesses, real results with Nirghos ERP." />

        <div className="mt-12 rounded-[32px] bg-slate-100/80 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div key={`q${i}`} className="animate-fadeIn">
            <div className="flex gap-1 text-[#0ea5e9]">
              {[...Array(5)].map((_, k) => (
                <Star key={k} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 text-lg sm:text-xl text-slate-700 leading-relaxed">“{t.fullQuote || t.quote}”</p>
            <p className="mt-5 border-l-2 border-[#0284c7] pl-3 text-sm">
              <span className="font-semibold text-slate-800">{t.name}</span>
              <span className="text-slate-300 mx-2">|</span>
              <span className="text-slate-500">{t.org}</span>
            </p>
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous story"
                  onClick={() => setI((i - 1 + total) % total)}
                  className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-slate-700 hover:text-[#0284c7]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next story"
                  onClick={() => setI((i + 1) % total)}
                  className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-slate-700 hover:text-[#0284c7]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-3xl font-light text-slate-800">
                {pad(i + 1)} <span className="text-slate-400">/ {pad(total)}</span>
              </p>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-2 shadow-xl">
            <div
              key={`v${i}`}
              className={`relative aspect-[4/3] rounded-[22px] overflow-hidden bg-gradient-to-br ${storyGradients[i % storyGradients.length]} flex items-center justify-center animate-fadeIn`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
              <span className="absolute top-6 left-6 text-white/90 text-6xl font-semibold tracking-tight">{initials}</span>
              {t.hasVideo ? (
                <button
                  type="button"
                  onClick={() => onPlay?.(t)}
                  aria-label={`Play ${t.name} story`}
                  className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl ring-8 ring-white/20 hover:scale-105 transition"
                >
                  <Play className="w-7 h-7 text-[#0ea5e9] fill-current ml-1" />
                </button>
              ) : (
                <span className="relative text-white text-7xl font-serif opacity-40">“</span>
              )}
              <div className="absolute left-4 bottom-4 rounded-xl bg-white/90 backdrop-blur px-4 py-3">
                <p className="font-mono text-[11px] tracking-widest text-[#0284c7]">
                  STORY {pad(i + 1)} / {pad(total)}
                </p>
                <p className="font-semibold text-slate-800">{t.org.split(',')[0]}</p>
                <p className="text-xs text-slate-500">{t.org.split(',').slice(1).join(',').trim() || 'India'}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ------------------------------------------------------------------------- */
/* 10. Blue CTA banner                                                        */
/* ------------------------------------------------------------------------- */

export const CtaBanner = ({ onBook }) => (
  <section className="py-10 sm:py-14 bg-white">
    <Container>
      <div className="relative overflow-hidden rounded-[32px] bg-[#0ea5e9] px-6 py-12 sm:px-12 sm:py-16">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/20" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-white/20" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
              Simplify, Automate & Grow with Nirghos ERP
            </h2>
            <p className="mt-4 text-sky-50 text-base sm:text-lg max-w-lg">
              See how Nirghos can run your billing, stock, accounts and teams from one place. Book a free demo with our experts today.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onBook}
                className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0369a1] font-semibold px-6 py-3.5 hover:bg-sky-50 transition"
              >
                Book a Free Demo <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-xl border border-white/50 text-white font-semibold px-6 py-3.5 hover:bg-white/10 transition"
              >
                View Pricing
              </Link>
            </div>
          </div>

          <div className="relative h-64 hidden lg:block">
            <div className="absolute right-10 top-0 w-80 h-60 rounded-3xl bg-white/25 rotate-[-6deg]" />
            <div className="absolute right-6 top-4 w-80 h-60 rounded-3xl bg-white shadow-2xl rotate-[-3deg] p-5">
              <p className="text-xs text-slate-400">Today’s sales</p>
              <p className="text-2xl font-semibold text-slate-800">₹4,82,350</p>
              <div className="mt-4 h-24 flex items-end gap-1.5">
                {bars.map((h, k) => (
                  <div key={k} className={`flex-1 self-end rounded-t ${k === 10 ? 'bg-[#0284c7]' : 'bg-sky-200'}`} style={{ height: `${h}%` }} />
                ))}
              </div>
              <p className="mt-3 text-[11px] text-emerald-600 font-medium">+12.4% vs yesterday</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

/* ------------------------------------------------------------------------- */
/* 11. Explore Nirghos (sitemap card above footer)                            */
/* ------------------------------------------------------------------------- */

const exploreCols = [
  {
    title: 'Solutions',
    links: [
      ['POS Billing', '/products/pos'],
      ['Cloud ERP', '/products/erp'],
      ['Accounting & GST', '/products/accounting'],
      ['Inventory', '/products/inventory'],
      ['CRM & Loyalty', '/products/crm'],
      ['Omnichannel', '/products/omnichannel'],
      ['AI Solutions', '/ai-solutions']
    ]
  },
  {
    title: 'Industries',
    links: industriesData.slice(0, 6).map((i) => [i.name, `/industries/${i.slug}`])
  },
  {
    title: 'Resources',
    links: [
      ['Blogs', '/blogs'],
      ['Events', '/events'],
      ['Testimonials', '/testimonials'],
      ['Pricing', '/pricing']
    ]
  },
  {
    title: 'Company',
    links: [
      ['About Us', '/about'],
      ['Our Team', '/team'],
      ['Life at Nirghos', '/life'],
      ['Careers', '/careers'],
      ['Contact Us', '/contact']
    ]
  }
];

export const ExploreNirghos = ({ onBook }) => (
  <section className="pb-14 bg-white">
    <Container>
      <div className="rounded-[32px] bg-slate-100/80 p-6 sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800">Explore Nirghos</h3>
            <p className="mt-1 text-slate-500">Solutions, industries, features and resources, all in one place.</p>
          </div>
          <button type="button" onClick={onBook} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0369a1] hover:gap-2.5 transition-all">
            Book a demo <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {exploreCols.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-[11px] tracking-[0.2em] text-slate-400 uppercase">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map(([l, to]) => (
                  <li key={l}>
                    <Link to={to} className="text-sm text-slate-600 hover:text-[#0284c7] transition">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);
