import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Sparkles, ArrowRight, ChevronDown, ChevronRight, Search, Plus, Minus, ShieldCheck, Layers } from 'lucide-react';
import DemoModal from '../../components/common/DemoModal';

const planKeys = ['mini', 'lite', 'starter', 'pro', 'elite', 'hybrid'];
const planIdToKey = {
  mini: 'mini',
  lite: 'lite',
  starter: 'starter',
  pro: 'pro',
  elite: 'elite',
  hybrid: 'hybrid'
};

const Cell = ({ v }) => {
  if (v === true) return <Check className="w-4 h-4 text-[#0284c7] mx-auto" />;
  if (v === false) return <X className="w-3.5 h-3.5 text-slate-300 mx-auto" />;
  return <span className="text-[11px] font-semibold text-[#0284c7]">{v}</span>;
};

const SubNav = () => (
  <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-20 z-30">
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between gap-4 text-sm text-slate-600">
      <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider hidden sm:inline">
        Nirghos ERP Pricing
      </span>
      <div className="flex items-center gap-6 ml-auto">
        {[
          ['Plans', '#plans'],
          ['Add-Ons', '#addons'],
          ['Compare', '#compare'],
          ['Notes', '#notes'],
          ['FAQs', '#faqs']
        ].map(([l, h]) => (
          <a key={l} href={h} className="hover:text-[#0284c7] font-medium transition">
            {l}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'annual' | 'multi-year'
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [query, setQuery] = useState('');
  const [onlyDiff, setOnlyDiff] = useState(false);
  const [expanded, setExpanded] = useState({ 0: true });

  const discountMultiplier = billingCycle === 'multi-year' ? 0.8 : 1.0;

  const pricingPlans = [
    {
      id: 'mini',
      name: 'Mini',
      tagline: 'Core retail billing, basic inventory & banking to get your single counter started.',
      price: Math.round(5999 * discountMultiplier),
      originalPrice: '₹7,499',
      badge: null,
      highlight: false,
      capacity: '1 Admin (HO) • 0 Extra Users',
      features: [
        'Fast Barcode & Touch POS Billing',
        'Core Inventory & Low-Stock Alerts',
        'Basic Banking & Cash Drawer Logs',
        'Thermal Receipt & Barcode Printing',
        'Standard Ticket Support'
      ]
    },
    {
      id: 'lite',
      name: 'Lite',
      tagline: 'Micro-retailers & solo shops expanding digitally with CRM, loyalty & GST.',
      price: Math.round(12999 * discountMultiplier),
      originalPrice: '₹15,999',
      badge: null,
      highlight: false,
      capacity: '1 Admin (HO) • 0 Extra Users',
      features: [
        'Everything in Mini, plus:',
        'WhatsApp & SMS Digital Invoices',
        'Payment Gateways & Dynamic UPI QR',
        'CRM, Loyalty Points & Gift Cards',
        'GST Summaries (GSTR-1/3B) & API Access'
      ]
    },
    {
      id: 'starter',
      name: 'Starter',
      tagline: 'Full platform for growing retail stores with manufacturing & online commerce.',
      price: Math.round(23999 * discountMultiplier),
      originalPrice: '₹28,999',
      badge: 'Best Seller',
      highlight: false,
      capacity: '1 Admin + 2 Users',
      features: [
        'Everything in Lite, plus:',
        'Manufacturing BOM & Work Orders',
        'Online Store & Omnichannel Hooks',
        'Self-Checkout & Smart Preview',
        'Weigh-Scale & Apparel Matrix Sync'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      tagline: 'Most chosen suite for growing retail chains & multi-outlet operations.',
      price: Math.round(29999 * discountMultiplier),
      originalPrice: '₹35,999',
      badge: 'Most Chosen',
      highlight: true,
      capacity: '1 Admin (HO) + 1 Outlet + 8 Users',
      features: [
        'Everything in Starter, plus:',
        'Central Multi-Outlet Reporting Console',
        'Inter-Branch Stock Transfers (STN)',
        '1-Click Govt E-Invoicing & E-Way Bills',
        'Dedicated Account Manager & Priority SLA'
      ]
    },
    {
      id: 'elite',
      name: 'E-Lite',
      tagline: 'High-capacity retail & wholesale operations scaled for larger teams.',
      price: Math.round(32999 * discountMultiplier),
      originalPrice: '₹39,999',
      badge: 'High Capacity',
      highlight: false,
      capacity: '1 Admin + 19 Users',
      features: [
        'Everything in Pro, plus:',
        '19 Concurrent Billing & Back-Office Users',
        'Batch, Lot & FEFO Expiry Management',
        'Automated Bank Statement Reconciliation',
        'Custom Role Permissions & Audit Logs'
      ]
    },
    {
      id: 'hybrid',
      name: 'Hybrid',
      tagline: 'High-volume enterprises managing online & offline concurrent billing.',
      price: Math.round(39999 * discountMultiplier),
      originalPrice: '₹47,999',
      badge: 'Enterprise',
      highlight: false,
      capacity: '1 Admin + 19 Users • Online + Offline',
      features: [
        'Everything in E-Lite, plus:',
        'High-Volume Concurrent Online/Offline Sync',
        'Omnichannel 2-Way Sync (Shopify/Amazon)',
        'Custom REST APIs, Webhooks & ERP Bridge',
        'On-Site Deployment & 24/7 Enterprise SLA'
      ]
    }
  ];

  const oneTimeAddons = [
    {
      title: 'Implementation & Training',
      price: '₹10,000',
      unit: '/ outlet (one-time)',
      desc: 'End-to-end store onboarding, SKU master import from Tally/Busy/Excel, hardware setup & staff training.'
    },
    {
      title: 'Hybrid POS Offline Engine',
      price: '₹25,000',
      unit: '/ outlet (one-time)',
      desc: 'Zero-downtime local offline billing server that syncs automatically with cloud once internet reconnects.'
    },
    {
      title: 'Nirghos AI Vision & VINA Suite',
      price: '₹12,000',
      unit: '/ store / year',
      desc: 'CCTV footfall counting, dwell-time heatmaps, zero-barcode produce recognition & VINA AI Co-Pilot.'
    }
  ];

  const featureMatrix = [
    { category: 'Point of Sale (POS) & Hardware', features: [
      { name: 'Touch & Keyboard Barcode Checkout', mini: true, lite: true, starter: true, pro: true, elite: true, hybrid: true },
      { name: 'Thermal Printer & Scanner Integration', mini: true, lite: true, starter: true, pro: true, elite: true, hybrid: true },
      { name: 'Payment Gateways & Dynamic UPI QR', mini: false, lite: true, starter: true, pro: true, elite: true, hybrid: true },
      { name: 'Self-Checkout & Smart Preview', mini: false, lite: false, starter: true, pro: true, elite: true, hybrid: true },
      { name: 'Weigh-Scale RS-232/USB Auto-Reading', mini: false, lite: false, starter: true, pro: true, elite: true, hybrid: true },
      { name: 'Hybrid Online + Offline Concurrent Sync', mini: false, lite: false, starter: false, pro: false, elite: false, hybrid: true }
    ]},
    { category: 'Inventory, Manufacturing & Multi-Store', features: [
      { name: 'Real-Time Stock & Low-Stock Alerts', mini: true, lite: true, starter: true, pro: true, elite: true, hybrid: true },
      { name: 'Style-Color-Size Apparel Matrix', mini: false, lite: false, starter: true, pro: true, elite: true, hybrid: true },
      { name: 'Manufacturing BOM & Work Orders', mini: false, lite: false, starter: true, pro: true, elite: true, hybrid: true },
      { name: 'Multi-Outlet Reporting & STN Transfers', mini: false, lite: false, starter: false, pro: true, elite: true, hybrid: true },
      { name: 'Batch, Lot & FEFO Expiry Tracking', mini: false, lite: false, starter: false, pro: true, elite: true, hybrid: true },
      { name: '19 Concurrent Users Included', mini: false, lite: false, starter: false, pro: false, elite: true, hybrid: true }
    ]},
    { category: 'Accounting, GST, CRM & Omnichannel', features: [
      { name: 'Basic Banking & Cash Reconciliation', mini: true, lite: true, starter: true, pro: true, elite: true, hybrid: true },
      { name: 'CRM, Loyalty Points & WhatsApp Bills', mini: false, lite: true, starter: true, pro: true, elite: true, hybrid: true },
      { name: 'GST Filing (GSTR-1/3B) & API Access', mini: false, lite: true, starter: true, pro: true, elite: true, hybrid: true },
      { name: 'Online Commerce Storefront Hooks', mini: false, lite: false, starter: true, pro: true, elite: true, hybrid: true },
      { name: '1-Click Govt E-Invoicing (IRN) & E-Way', mini: false, lite: false, starter: false, pro: true, elite: true, hybrid: true },
      { name: 'AI Vision CCTV & VINA Co-Pilot', mini: false, lite: false, starter: 'Add-On', pro: 'Add-On', elite: 'Add-On', hybrid: 'Add-On' }
    ]}
  ];

  const pricingFaqs = [
    {
      q: 'How does the Nirghos subscription license work?',
      a: 'All 6 plans (Mini through Hybrid) are billed annually or multi-yearly with an extra 20% discount on multi-year commitments. Your subscription covers continuous GST updates, automated cloud backups, and technical support.'
    },
    {
      q: 'What is included in the Hybrid POS add-on?',
      a: 'The Hybrid POS engine (included in Hybrid or available as a ₹25,000/outlet one-time add-on) ensures 100% uninterrupted billing even when internet disconnects, auto-syncing all invoices back to your central cloud.'
    },
    {
      q: 'What hardware is compatible with Nirghos POS?',
      a: 'Nirghos runs smoothly on any Windows PC, touch POS terminal, or Android tablet and connects natively with ESC/POS thermal printers, 1D/2D barcode scanners, digital weighing scales, and Pine Labs / Paytm terminals.'
    },
    {
      q: 'Can I upgrade from Mini or Lite to Starter or Pro later?',
      a: 'Yes! You can seamlessly upgrade your plan or add extra outlets and users at any time with prorated billing and zero data loss.'
    },
    {
      q: 'Do you provide data migration from Tally, Busy, or Excel?',
      a: 'Yes, our Implementation & Training package includes complete migration of your item masters, customer/vendor ledgers, and opening stock within 24–48 hours.'
    }
  ];

  const handleBookDemo = (planId) => {
    setSelectedPlan(planId);
    setIsDemoModalOpen(true);
  };

  const filteredMatrix = useMemo(() => {
    const q = query.trim().toLowerCase();
    return featureMatrix
      .map((cat) => ({
        ...cat,
        features: cat.features.filter((f) => {
          const matches = !q || f.name.toLowerCase().includes(q) || cat.category.toLowerCase().includes(q);
          const vals = planKeys.map((k) => String(f[k]));
          const differs = new Set(vals).size > 1;
          return matches && (!onlyDiff || differs);
        })
      }))
      .filter((cat) => cat.features.length);
  }, [query, onlyDiff]);

  const totalFeatures = featureMatrix.reduce((n, c) => n + c.features.length, 0);
  const shownFeatures = filteredMatrix.reduce((n, c) => n + c.features.length, 0);
  const allExpanded = filteredMatrix.every((_, i) => expanded[i]);

  const toggleAll = () => {
    if (allExpanded) setExpanded({});
    else setExpanded(Object.fromEntries(filteredMatrix.map((_, i) => [i, true])));
  };

  const selectedKey = planIdToKey[selectedPlan];

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <SubNav />

      {/* Vasy.ai Style Light Sky Hero */}
      <section className="relative bg-gradient-to-b from-sky-50/80 via-white to-white border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-[#0284c7] text-xs font-bold uppercase tracking-wider mb-5 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse"></span>
            <span>Transparent Subscription Packages</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-slate-900 leading-[1.12] max-w-3xl mx-auto">
            Upgrade your business with our{' '}
            <span className="text-[#0284c7]">affordable plans</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From single retail counters to high-volume omnichannel chains — pick the exact Nirghos ERP plan built for your scale.
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-32">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
              {[
                ['annual', 'Annual Billing'],
                ['multi-year', 'Multi-Year (Save 20%)']
              ].map(([id, l]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setBillingCycle(id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
                    billingCycle === id
                      ? 'bg-[#0284c7] text-white shadow-sm shadow-sky-500/25'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <p className="text-sm text-slate-500">
              Commit multi-year &amp; <span className="text-[#0284c7] font-semibold">save an extra 20%</span>.
            </p>
          </div>
          <p className="text-xs text-slate-400">Click any plan card to highlight it in the comparison table below.</p>
        </div>

        {/* 6-Plan Responsive Grid (Vasy.ai 6 Tiers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => {
            const isHighlighted = plan.highlight;
            const isSel = plan.id === selectedPlan;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative flex flex-col rounded-3xl p-6 sm:p-7 cursor-pointer transition-all duration-300 hover-lift-glow ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-[#0B192C] to-[#0f2440] text-white border-2 border-[#0284c7] shadow-xl shadow-sky-900/15'
                    : isSel
                    ? 'bg-white border-2 border-[#0284c7] shadow-lg shadow-sky-500/10'
                    : 'bg-white border border-slate-200/90 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-lg font-bold tracking-tight ${isHighlighted ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </span>
                  {plan.badge && (
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${
                        isHighlighted
                          ? 'bg-[#0ea5e9] text-white'
                          : 'bg-sky-50 text-[#0284c7] border border-sky-200'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight">
                    ₹{plan.price.toLocaleString('en-IN')}
                  </span>
                  <span className={`text-sm line-through ${isHighlighted ? 'text-slate-400' : 'text-slate-400'}`}>
                    {plan.originalPrice}
                  </span>
                  <span className={`text-xs font-medium ${isHighlighted ? 'text-sky-300' : 'text-slate-500'}`}>
                    / year
                  </span>
                </div>

                <p className={`mt-3 text-sm leading-relaxed ${isHighlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                  {plan.tagline}
                </p>

                <div
                  className={`mt-4 py-2.5 px-3.5 rounded-xl text-xs font-semibold ${
                    isHighlighted
                      ? 'bg-white/10 text-sky-200 border border-white/10'
                      : 'bg-sky-50/70 text-[#0284c7] border border-sky-100'
                  }`}
                >
                  Includes: {plan.capacity}
                </div>

                <ul className="mt-5 space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${isHighlighted ? 'text-slate-200' : 'text-slate-600'}`}>
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isHighlighted ? 'text-sky-400' : 'text-[#0284c7]'}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookDemo(plan.id);
                  }}
                  className={`mt-6 w-full rounded-full py-3 text-sm font-bold transition cursor-pointer ${
                    isHighlighted
                      ? 'bg-[#0ea5e9] hover:bg-[#38bdf8] text-white shadow-md shadow-sky-500/25'
                      : 'bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-sm shadow-sky-500/20'
                  }`}
                >
                  {plan.id === 'hybrid' ? 'Talk to Sales' : `Choose ${plan.name}`}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Setup & Add-On Modules */}
      <section id="addons" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="mb-6">
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#0284c7] uppercase font-bold">Optional Setup &amp; AI Add-ons</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-900">Scale with Hybrid POS, Onboarding &amp; AI Vision</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {oneTimeAddons.map((addon) => (
            <div
              key={addon.title}
              className="rounded-3xl bg-slate-50/80 border border-slate-200/80 p-6 flex flex-col justify-between hover-lift-glow"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0284c7] bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
                  <Sparkles className="w-3 h-3" /> Add-On
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{addon.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{addon.desc}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-200 flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-slate-900">{addon.price}</span>
                <span className="text-xs font-medium text-slate-500">{addon.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compare Table */}
      <section id="compare" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-14 scroll-mt-32">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[#0284c7] uppercase font-bold">Feature availability</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What each plan includes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-500 w-64 bg-white">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search feature or module..."
                className="w-full outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
              />
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
              <button
                type="button"
                role="switch"
                aria-checked={onlyDiff}
                onClick={() => setOnlyDiff((v) => !v)}
                className={`w-9 h-5 rounded-full relative transition ${onlyDiff ? 'bg-[#0284c7]' : 'bg-slate-200'}`}
              >
                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${onlyDiff ? 'left-[18px]' : 'left-0.5'}`} />
              </button>
              Only show differences
            </label>
            <button
              type="button"
              onClick={toggleAll}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-[#0284c7] hover:text-[#0284c7] transition cursor-pointer"
            >
              {allExpanded ? 'Collapse all' : 'Expand all'}
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-5 font-mono text-[10px] tracking-wider uppercase text-slate-400">
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#0284c7]" /> Included</span>
          <span className="flex items-center gap-1.5"><span className="text-[#0284c7] font-bold">Add-On</span> Chargeable add-on</span>
          <span className="flex items-center gap-1.5"><X className="w-3.5 h-3.5" /> Not available</span>
          <span>Showing {shownFeatures} of {totalFeatures}</span>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[880px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left font-mono text-[10px] tracking-wider uppercase text-slate-500 py-3.5 px-4">Modules &amp; features</th>
                {pricingPlans.map((p) => (
                  <th
                    key={p.id}
                    className={`w-[11%] py-3.5 font-semibold text-center ${
                      planIdToKey[p.id] === selectedKey ? 'bg-sky-50 text-[#0284c7]' : 'text-slate-700'
                    }`}
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            {filteredMatrix.map((cat, ci) => {
              const open = !!expanded[ci] || !!query;
              return (
                <tbody key={cat.category}>
                  <tr
                    className="border-b border-slate-200 bg-slate-50/70 hover:bg-slate-100/70 cursor-pointer"
                    onClick={() => setExpanded((e) => ({ ...e, [ci]: !e[ci] }))}
                  >
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      <span className="inline-flex items-center gap-2">
                        {open ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
                        {cat.category}
                        <span className="font-mono text-[10px] text-slate-400 ml-1">{cat.features.length}</span>
                      </span>
                    </td>
                    {planKeys.map((k) => {
                      const inc = cat.features.filter((f) => f[k] === true).length;
                      const all = inc === cat.features.length;
                      return (
                        <td key={k} className={`text-center ${k === selectedKey ? 'bg-sky-50/70' : ''}`}>
                          {all ? (
                            <Check className="w-4 h-4 text-[#0284c7] mx-auto" />
                          ) : inc === 0 ? (
                            <X className="w-3.5 h-3.5 text-slate-300 mx-auto" />
                          ) : (
                            <span className="font-mono text-[11px] text-slate-500">
                              {inc}/{cat.features.length}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                  {open &&
                    cat.features.map((f) => (
                      <tr key={f.name} className="border-b border-slate-100 hover:bg-slate-50/40">
                        <td className="py-3 pl-10 pr-4 text-slate-600">{f.name}</td>
                        {planKeys.map((k) => (
                          <td key={k} className={`text-center ${k === selectedKey ? 'bg-sky-50/50' : ''}`}>
                            <Cell v={f[k]} />
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              );
            })}
          </table>
          {!filteredMatrix.length && <p className="py-10 text-center text-sm text-slate-400">No features match “{query}”.</p>}
        </div>
      </section>

      {/* Notes */}
      <section id="notes" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-32">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[#0284c7] uppercase font-bold">Before you buy</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Notes on what is in the price</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
          {[
            [
              'Included in every plan',
              ['Free software updates and statutory GST changes', 'Automated cloud data backups', 'Technical support as per your selected tier']
            ],
            [
              'Adding outlets & users',
              ['Additional branch / store: ₹5,999 per store per year', 'Additional billing counter / user: ₹2,999 per user per year', 'Add at any time with prorated billing']
            ],
            [
              'Billing options',
              ['Annual plans are billed once a year', 'Multi-year plans get an extra 20% discount', 'Seamless upgrade whenever your business grows']
            ],
            [
              'Optional setup & AI add-ons',
              ['Implementation & Training: ₹10,000 / outlet (one-time)', 'Hybrid POS Offline Engine: ₹25,000 / outlet (one-time)', 'AI Vision & VINA Suite: ₹12,000 / store / year']
            ]
          ].map(([title, items]) => (
            <div key={title}>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400 pb-3 border-b border-slate-200">{title}</p>
              <ul className="mt-4 space-y-2.5">
                {items.map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] mt-2 shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-32 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10">
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-[#0284c7] uppercase font-bold">FAQs</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Questions about pricing</h2>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0284c7] hover:text-[#0369a1]">
            Talk to our sales team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {pricingFaqs.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
                aria-expanded={openFaqIndex === i}
              >
                <span className={`font-medium ${openFaqIndex === i ? 'text-[#0284c7]' : 'text-slate-800'}`}>{f.q}</span>
                <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  {openFaqIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              {openFaqIndex === i && <p className="pb-5 text-sm text-slate-500 leading-relaxed animate-fadeIn">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner (Vasy.ai Sky Gradient) */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-[32px] bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#0284c7] px-6 py-12 sm:px-12 flex flex-wrap items-center justify-between gap-6 shadow-xl shadow-sky-500/20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Not sure which plan fits?</h2>
            <p className="mt-2 text-sky-50">Our experts will recommend the right plan for your business in a free demo.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#0284c7] font-bold px-7 py-3.5 hover:bg-sky-50 transition cursor-pointer shadow-sm"
            >
              Book a Free Demo <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/contact" className="inline-flex items-center rounded-full border border-white/60 text-white font-semibold px-7 py-3.5 hover:bg-white/10 transition">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type="book-demo"
        defaultIndustry="Retail Supermarket & Multi-Store"
      />
    </div>
  );
};

export default Pricing;
