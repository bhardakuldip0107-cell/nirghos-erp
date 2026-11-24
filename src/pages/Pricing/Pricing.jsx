import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Sparkles, ArrowRight, ChevronDown, ChevronRight, Search, Plus, Minus } from 'lucide-react';
import DemoModal from '../../components/common/DemoModal';

const planKeys = ['lite', 'std', 'pro', 'ent'];
const planIdToKey = { lite: 'lite', standard: 'std', pro: 'pro', enterprise: 'ent' };

const Cell = ({ v }) => {
  if (v === true) return <Check className="w-4 h-4 text-slate-800 mx-auto" />;
  if (v === false) return <X className="w-3.5 h-3.5 text-slate-300 mx-auto" />;
  return <span className="text-[11px] font-medium text-[#0284c7]">{v}</span>;
};

const SubNav = () => (
  <div className="bg-white border-b border-slate-200">
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-end gap-6 text-sm text-slate-600">
      {[
        ['Plans', '#plans'],
        ['Compare', '#compare'],
        ['Notes', '#notes'],
        ['FAQs', '#faqs']
      ].map(([l, h]) => (
        <a key={l} href={h} className="hover:text-[#0284c7] transition">
          {l}
        </a>
      ))}
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

  const discountMultiplier = billingCycle === 'multi-year' ? 0.8 : 1.0; // 20% extra discount on multi-year

  const pricingPlans = [
    {
      id: 'lite',
      name: 'Nirghos Lite',
      tagline: 'Ideal for single retail counters, grocery kiosks & small boutiques',
      price: Math.round(6999 * discountMultiplier),
      period: '/ year',
      originalPrice: '₹8,999',
      badge: null,
      popular: false,
      color: 'slate',
      capacity: '1 Counter Admin • 1 Store Location',
      features: [
        'High-Speed Barcode POS Billing (Touch & Keyboard)',
        'Full Offline-First Billing with Auto Cloud Sync',
        'Basic Inventory Tracking & Stock Alerts',
        'Digital WhatsApp & SMS Customer Invoices',
        'Daily Shift Cash Drawer Reconciliation',
        'Thermal Receipt Printer & Barcode Scanner Driver',
        'Email & Standard WhatsApp Ticket Support'
      ],
      notIncluded: [
        'Multi-Store Central Sync',
        'Weigh-Scale Direct RS-232 Port Reading',
        'Government 1-Click E-Invoicing & E-Way Bills',
        'Manufacturing BOM & Production Routing',
        'In-Store CCTV AI Vision Analytics'
      ]
    },
    {
      id: 'standard',
      name: 'Nirghos Standard',
      tagline: 'Best for supermarkets, apparel stores & jewellery showrooms',
      price: Math.round(14999 * discountMultiplier),
      period: '/ year',
      originalPrice: '₹18,999',
      badge: 'Most Popular for Single Store',
      popular: false,
      color: 'sky',
      capacity: '3 Users • 1 Store • Multi-Counter',
      features: [
        'Everything in Lite, plus:',
        'Industry-Specific Module (Jewellery, Apparel OR Supermarket)',
        'Digital Weigh-Scale Serial Port Auto-Reading (0.001g)',
        'Style-Color-Size Apparel Matrix Billing Grid',
        'Promotional Schemes: BOGO, Tier Discounts & Bundles',
        'Customer Loyalty Points & Digital Passbook CRM',
        'Automated GST Summaries (GSTR-1, GSTR-3B Exports)',
        'Customer-Facing Display (CFD) with Dynamic UPI QR',
        'Priority Phone & Remote AnyDesk Support'
      ],
      notIncluded: [
        'Multi-Store Central Inventory Replication',
        'Automated Inter-Store Stock Transfers (STN)',
        'Manufacturing BOM & Work Orders',
        'In-Store CCTV AI Vision Analytics'
      ]
    },
    {
      id: 'pro',
      name: 'Nirghos Multi-Store Pro',
      tagline: 'Tailored for expanding retail chains, supermarkets & wholesale distributors',
      price: Math.round(28999 * discountMultiplier),
      period: '/ year',
      originalPrice: '₹34,999',
      badge: 'Recommended for Retail Chains',
      popular: true,
      color: 'brand',
      capacity: '8 Users • 2 Branches Included (Add-on available)',
      features: [
        'Everything in Standard, plus:',
        'Central Head-Office Multi-Store Management Console',
        'Real-Time Inter-Branch Stock Transfers (STN / GRN)',
        'Automated Customer Credit Limit & Ageing Ledger Control',
        '1-Click Govt E-Invoicing (IRN generation) & E-Way Bills',
        'Automated Bank Statement Reconciliation (HDFC, ICICI, SBI)',
        'Batch, Lot & FEFO Expiry Tracking (Pharma & Food Ready)',
        'Nirghos Smart Business Owner Analytics Mobile App',
        'Dedicated Enterprise Account Manager & 24/7 SLA'
      ],
      notIncluded: [
        'Discrete Factory Assembly BOM Engine',
        'In-Store CCTV AI Vision Analytics'
      ]
    },
    {
      id: 'enterprise',
      name: 'Nirghos Enterprise Cloud',
      tagline: 'Complete ERP suite for large retail chains, pharma & manufacturing plants',
      price: Math.round(44999 * discountMultiplier),
      period: '/ year',
      originalPrice: '₹54,999',
      badge: 'Full Enterprise ERP',
      popular: false,
      color: 'indigo',
      capacity: '20 Users • Multi-Branch & Multi-Godown',
      features: [
        'Everything in Multi-Store Pro, plus:',
        'Multi-Level Engineering Bill of Materials (BOM)',
        'Shop Floor Work Orders, Routing & Machine OEE Tracking',
        'Tamper-Proof 21 CFR Part 11 Audit Trail & e-Signatures',
        'Omnichannel 2-Way Sync (Shopify, WooCommerce, Amazon)',
        'Custom REST APIs, Webhooks & ERP Bridge Integration',
        'Custom Field Schema & Report Template Designer',
        'On-Premise Server OR Private Dedicated Cloud Hosting',
        'On-Site Deployment Engineers, Staff Training & Dedicated SLA'
      ],
      notIncluded: [
        'In-Store CCTV AI Vision Cameras (Available as Add-On)'
      ]
    }
  ];

  const aiAddon = {
    name: 'Nirghos AI Vision & Smart Retail Suite',
    tagline: 'Convert existing store CCTV cameras into live footfall counters & dwell-time heatmaps',
    price: 12000,
    period: '/ store / year',
    features: [
      'Edge AI Footfall Counting (In vs Out with 99.4% accuracy)',
      'In-Store Dwell-Time Heatmaps & Cold Aisle Analytics',
      'Checkout Counter Queue Length Alerts (>4 shoppers in line)',
      'Zero-Barcode Produce Recognition for loose produce billing',
      'VINA: Conversational Natural Language AI Business Co-Pilot',
      'Smart Cart & Self-Checkout Kiosk Integration'
    ]
  };

  const featureMatrix = [
    { category: 'Point of Sale (POS) Billing', features: [
      { name: 'Touch & Keyboard Barcode Checkout', lite: true, std: true, pro: true, ent: true },
      { name: '100% Offline-First Billing Resilience', lite: true, std: true, pro: true, ent: true },
      { name: 'Digital Weigh-Scale Port Sync (RS-232/USB)', lite: false, std: true, pro: true, ent: true },
      { name: 'Dynamic V-Pay UPI QR on Customer Screen', lite: true, std: true, pro: true, ent: true },
      { name: 'Hold / Recall Multiple Parked Carts', lite: true, std: true, pro: true, ent: true },
      { name: 'Loose Produce Zero-Barcode Image Recognition', lite: false, std: false, pro: false, ent: 'Add-On' }
    ]},
    { category: 'Multi-Store Inventory & WMS', features: [
      { name: 'Real-time Stock Ledger & Low-Stock Alerts', lite: true, std: true, pro: true, ent: true },
      { name: 'Style-Color-Size Apparel Matrix Grid', lite: false, std: true, pro: true, ent: true },
      { name: 'Batch, Lot & FEFO Expiry Enforcement', lite: false, std: false, pro: true, ent: true },
      { name: 'Inter-Branch Stock Transfer (STN) Workflows', lite: false, std: false, pro: true, ent: true },
      { name: 'Automated Purchase Reorder Quantity Planning', lite: false, std: false, pro: true, ent: true },
      { name: 'Warehouse Mobile Cycle Counting App (V-Audit)', lite: false, std: false, pro: true, ent: true }
    ]},
    { category: 'Taxation, GST & Accounting', features: [
      { name: 'GST Compliant Invoicing & Tax Calculation', lite: true, std: true, pro: true, ent: true },
      { name: '1-Click GSTR-1 & GSTR-3B Export Summaries', lite: false, std: true, pro: true, ent: true },
      { name: 'NIC Portal E-Invoicing (IRN generation) with QR', lite: false, std: false, pro: true, ent: true },
      { name: 'Automated E-Way Bill Generation (>₹50k)', lite: false, std: false, pro: true, ent: true },
      { name: 'Automated Bank Feeds & Statement Reconciliation', lite: false, std: false, pro: true, ent: true },
      { name: 'Double-Entry General Ledger, Daybook & P&L', lite: false, std: false, pro: true, ent: true }
    ]},
    { category: 'Industry Suites & Manufacturing', features: [
      { name: 'Gems & Jewellery Bullion Recalculation', lite: false, std: true, pro: true, ent: true },
      { name: 'Apparel & Fashion Matrix Barcode Hang-Tags', lite: false, std: true, pro: true, ent: true },
      { name: 'Multi-Level Engineering Bill of Materials (BOM)', lite: false, std: false, pro: false, ent: true },
      { name: 'Shop Floor Job Card Routing & Machine OEE', lite: false, std: false, pro: false, ent: true },
      { name: '21 CFR Part 11 Compliance & eBMR Audit Trails', lite: false, std: false, pro: false, ent: true }
    ]}
  ];

  const pricingFaqs = [
    {
      q: 'How does the Nirghos license work?',
      a: 'All plans are subscription-based, billed annually or multi-yearly. Your license includes free software updates, continuous statutory GST changes, automated cloud data backups, and technical support.'
    },
    {
      q: 'What happens if my internet connection goes down?',
      a: 'Nirghos ERP features a military-grade offline-first architecture. Your cashiers can continue scanning, weighing, billing, and printing receipts uninterrupted. When internet returns, all offline bills synchronize automatically with your central cloud database without duplicates.'
    },
    {
      q: 'What hardware do I need to run Nirghos POS?',
      a: 'Nirghos works seamlessly with any standard Windows PC, POS terminal, touch all-in-one machine, or Android tablet. It integrates with any ESC/POS thermal printer (58mm/80mm), 1D/2D barcode scanner, digital weighing scale (CAS, Essae, Toledo), and card swipe machine (Pine Labs, Paytm).'
    },
    {
      q: 'Can I add extra branches or users as my retail business grows?',
      a: 'Yes, absolutely! You can add extra branches for ₹5,999/store/year and extra billing counters for ₹2,999/user/year at any time with prorated billing.'
    },
    {
      q: 'Do you offer data migration from Tally, Busy, or Excel?',
      a: 'Yes! Our deployment team provides automated import tools to migrate your existing customer directory, vendor balances, item master SKUs, and opening stock balances into Nirghos within 24 to 48 hours.'
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
  }, [featureMatrix, query, onlyDiff]);

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

      {/* Hero */}
      <section className="bg-[#0B192C] text-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <p className="font-mono text-[11px] tracking-[0.25em] text-sky-400 uppercase">Subscription packages</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
            Upgrade your business with our affordable plans
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl">
            No matter how big or small your business is, Nirghos works seamlessly at every scale — from a single counter to a multi-plant enterprise.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-28">
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex rounded-full border border-slate-200 p-1">
            {[
              ['annual', 'Annual'],
              ['multi-year', 'Multi-year']
            ].map(([id, l]) => (
              <button
                key={id}
                type="button"
                onClick={() => setBillingCycle(id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  billingCycle === id ? 'bg-[#0B192C] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Commit for multiple years and <span className="text-[#0284c7] font-medium underline underline-offset-2">save an extra 20%</span>.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-slate-200 overflow-hidden">
          {pricingPlans.map((plan, i) => {
            const dark = plan.popular;
            const isSel = plan.id === selectedPlan;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative flex flex-col p-6 cursor-pointer transition ${
                  dark ? 'bg-[#0B192C] text-white' : 'bg-white'
                } ${i > 0 ? 'border-t sm:border-t-0 lg:border-l border-slate-200' : ''} ${isSel && !dark ? 'ring-2 ring-inset ring-[#0ea5e9]' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-[11px] tracking-[0.2em] uppercase ${dark ? 'text-slate-300' : 'text-slate-500'}`}>
                    {plan.name.replace('Nirghos ', '')}
                  </span>
                  {plan.badge && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        dark ? 'bg-white text-[#0B192C]' : 'border border-slate-200 text-slate-500'
                      }`}
                    >
                      {plan.popular ? 'Most chosen' : plan.badge.split(' ').slice(0, 2).join(' ')}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-3xl font-semibold">
                  ₹{plan.price.toLocaleString('en-IN')}
                  <span className={`ml-2 text-sm line-through font-normal ${dark ? 'text-slate-500' : 'text-slate-400'}`}>{plan.originalPrice}</span>
                </p>
                <p className={`font-mono text-[11px] tracking-widest uppercase ${dark ? 'text-slate-400' : 'text-slate-400'}`}>per year</p>
                <p className={`mt-4 text-sm leading-relaxed flex-1 ${dark ? 'text-slate-300' : 'text-slate-500'}`}>{plan.tagline}</p>
                <p
                  className={`mt-5 pt-4 border-t font-mono text-[10px] tracking-wider uppercase ${
                    dark ? 'border-white/10 text-slate-400' : 'border-slate-100 text-slate-400'
                  }`}
                >
                  Includes {plan.capacity}
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookDemo(plan.id);
                  }}
                  className={`mt-4 w-full rounded-lg py-3 text-sm font-semibold transition ${
                    dark ? 'bg-[#38bdf8] text-[#0B192C] hover:bg-sky-300' : plan.id === 'enterprise' ? 'bg-[#0B192C] text-white hover:bg-[#132842]' : 'bg-[#0B192C] text-white hover:bg-[#132842]'
                  }`}
                >
                  {plan.id === 'enterprise' ? 'Talk to sales' : 'Select'}
                </button>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-slate-400">Select a plan to follow it down the comparison table.</p>

        {/* Plan feature lists */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <div key={plan.id}>
              <p className="text-sm font-semibold text-slate-800">{plan.name}</p>
              <ul className="mt-3 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Compare */}
      <section id="compare" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-14 scroll-mt-28">
        <p className="font-mono text-[11px] tracking-[0.25em] text-sky-500 uppercase">Feature availability</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-800">What each plan includes</h2>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-500 w-60">
              <Search className="w-4 h-4" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a feature or module"
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
            <button type="button" onClick={toggleAll} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium hover:border-slate-300">
              {allExpanded ? 'Collapse all' : 'Expand all'}
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-5 font-mono text-[10px] tracking-wider uppercase text-slate-400">
          <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-slate-700" /> Included</span>
          <span className="flex items-center gap-1.5"><span className="text-[#0284c7]">Add-On</span> Chargeable add-on</span>
          <span className="flex items-center gap-1.5"><X className="w-3.5 h-3.5" /> Not available</span>
          <span>Showing {shownFeatures} of {totalFeatures}</span>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="border-b-2 border-slate-800">
                <th className="text-left font-mono text-[10px] tracking-wider uppercase text-slate-400 py-3">Modules and features</th>
                {pricingPlans.map((p) => (
                  <th
                    key={p.id}
                    className={`w-[14%] py-3 font-medium ${planIdToKey[p.id] === selectedKey ? 'bg-sky-50 text-[#0284c7]' : 'text-slate-700'}`}
                  >
                    {p.name.replace('Nirghos ', '')}
                  </th>
                ))}
              </tr>
            </thead>
            {filteredMatrix.map((cat, ci) => {
              const open = !!expanded[ci] || !!query;
              return (
                <tbody key={cat.category}>
                  <tr
                    className="border-b border-slate-200 bg-slate-50/60 hover:bg-slate-100/70 cursor-pointer"
                    onClick={() => setExpanded((e) => ({ ...e, [ci]: !e[ci] }))}
                  >
                    <td className="py-3.5 font-medium text-slate-800">
                      <span className="inline-flex items-center gap-2">
                        {open ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
                        {cat.category}
                        <span className="font-mono text-[10px] text-slate-400 ml-2">{cat.features.length}</span>
                      </span>
                    </td>
                    {planKeys.map((k) => {
                      const inc = cat.features.filter((f) => f[k] === true).length;
                      const all = inc === cat.features.length;
                      return (
                        <td key={k} className={`text-center ${k === selectedKey ? 'bg-sky-50' : ''}`}>
                          {all ? (
                            <Check className="w-4 h-4 text-slate-800 mx-auto" />
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
                      <tr key={f.name} className="border-b border-slate-100">
                        <td className="py-3 pl-8 text-slate-600">{f.name}</td>
                        {planKeys.map((k) => (
                          <td key={k} className={`text-center ${k === selectedKey ? 'bg-sky-50' : ''}`}>
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

      {/* AI add-on */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#060e19] via-[#0B192C] to-[#075985] p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 text-white">
          <div>
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" /> Optional add-on
            </span>
            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold">{aiAddon.name}</h3>
            <p className="mt-2 text-slate-300">{aiAddon.tagline}</p>
            <p className="mt-5 text-3xl font-semibold">
              ₹{aiAddon.price.toLocaleString('en-IN')}
              <span className="text-sm font-normal text-slate-400"> {aiAddon.period}</span>
            </p>
          </div>
          <ul className="space-y-2.5">
            {aiAddon.features.map((f) => (
              <li key={f} className="flex gap-2 text-sm text-slate-200">
                <Check className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Notes */}
      <section id="notes" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-14 scroll-mt-28">
        <p className="font-mono text-[11px] tracking-[0.25em] text-sky-500 uppercase">Before you buy</p>
        <h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-slate-800">Notes on what is in the price</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
          {[
            [
              'Included in every plan',
              ['Free software updates and statutory GST changes', 'Automated cloud data backups', 'Technical support as per your plan']
            ],
            [
              'Adding outlets and users',
              ['Additional branch / store: ₹5,999 per store per year', 'Additional billing counter / user: ₹2,999 per user per year', 'Add at any time with prorated billing']
            ],
            [
              'Billing options',
              ['Annual plans are billed once a year', 'Multi-year plans get an extra 20% discount', 'Upgrade to a higher plan whenever you grow']
            ],
            [
              'Add-ons',
              [`${aiAddon.name}: ₹${aiAddon.price.toLocaleString('en-IN')} ${aiAddon.period}`, 'Data migration from Tally, Busy or Excel by our deployment team', 'Custom reports, formats and integrations on request']
            ]
          ].map(([title, items]) => (
            <div key={title}>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400 pb-3 border-b border-slate-200">{title}</p>
              <ul className="mt-4 space-y-2.5">
                {items.map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-14 scroll-mt-28 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10">
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] text-sky-500 uppercase">FAQs</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-800">Questions about pricing</h2>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0369a1]">
            Talk to our sales team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {pricingFaqs.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
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

      {/* CTA */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-[32px] bg-[#0ea5e9] px-6 py-12 sm:px-12 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Not sure which plan fits?</h2>
            <p className="mt-2 text-sky-50">Our experts will recommend the right plan for your business in a free demo.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0369a1] font-semibold px-6 py-3.5 hover:bg-sky-50 transition"
            >
              Book a Free Demo <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/contact" className="inline-flex items-center rounded-xl border border-white/50 text-white font-semibold px-6 py-3.5 hover:bg-white/10 transition">
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
