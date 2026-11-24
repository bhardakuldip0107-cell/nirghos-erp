import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Store, 
  Building2, 
  Cpu, 
  Boxes, 
  Award, 
  Eye, 
  PhoneCall,
  Flame,
  CheckCircle2
} from 'lucide-react';
import DemoModal from '../../components/common/DemoModal';

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'annual' | 'multi-year'
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Nirghos Multi-Store Pro');

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

  const handleBookDemo = (planName) => {
    setSelectedPlan(planName);
    setIsDemoModalOpen(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      
      {/* ========================================================================= */}
      {/* 1. HERO HEADER                                                            */}
      {/* ========================================================================= */}
      <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 bg-gradient-to-b from-white via-sky-50/40 to-slate-50 relative overflow-hidden border-b border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-[#0284c7] text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>TRANSPARENT, ENTERPRISE-GRADE PRICING</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Scale Your Business with <span className="text-[#0284c7]">Predictable Pricing.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From single retail counters to 100+ multi-store chains and manufacturing plants. Choose the plan that fits your growth stage with zero hidden fees.
          </p>

          {/* Billing Cycle Switcher Toggle */}
          <div className="mt-8 sm:mt-10 inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-[#0284c7] text-white shadow-md shadow-sky-500/25'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annual Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('multi-year')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                billingCycle === 'multi-year'
                  ? 'bg-[#0284c7] text-white shadow-md shadow-sky-500/25'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>3-Year Enterprise</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-black tracking-wide">
                SAVE 20%
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PRICING CARDS 4-COLUMN GRID                                            */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#0284c7] via-[#0369a1] to-[#075985] text-white shadow-2xl shadow-sky-600/30 scale-100 xl:-translate-y-2 border-2 border-sky-300 animate-border-breathe'
                  : 'bg-white border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:border-sky-300 hover-lift-glow'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black tracking-wider shadow-md uppercase whitespace-nowrap ${
                  plan.popular 
                    ? 'bg-amber-400 text-slate-950 border border-amber-300 shadow-amber-400/30 animate-pulse' 
                    : 'bg-sky-100 text-[#0284c7] border border-sky-300'
                }`}>
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Plan Header */}
                <h3 className={`text-xl sm:text-2xl font-black ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${plan.popular ? 'text-sky-100' : 'text-slate-500'}`}>
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="mt-5 pb-5 border-b border-slate-200/40">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black tabular-nums tracking-tight">
                      ₹{plan.price.toLocaleString('en-IN')}
                    </span>
                    <span className={`text-xs font-semibold ${plan.popular ? 'text-sky-200' : 'text-slate-500'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs line-through ${plan.popular ? 'text-sky-300' : 'text-slate-400'}`}>
                      {plan.originalPrice}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-400">
                      + 18% GST Applicable
                    </span>
                  </div>
                  <div className={`mt-3 inline-block px-3 py-1 rounded-lg text-xs font-bold ${
                    plan.popular ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {plan.capacity}
                  </div>
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-3 text-xs sm:text-sm">
                  <p className={`font-black uppercase tracking-wider text-[11px] ${plan.popular ? 'text-sky-200' : 'text-slate-400'}`}>
                    What is Included:
                  </p>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-emerald-300' : 'text-emerald-600'}`} />
                      <span className={`leading-snug ${plan.popular ? 'text-slate-100' : 'text-slate-700'}`}>
                        {feat}
                      </span>
                    </div>
                  ))}

                  {/* Excluded Features for transparency */}
                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="pt-3 space-y-2 opacity-60">
                      {plan.notIncluded.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs">
                          <X className="w-3.5 h-3.5 shrink-0 mt-0.5 text-slate-400" />
                          <span className="line-through">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-slate-200/20">
                <button
                  type="button"
                  onClick={() => handleBookDemo(plan.name)}
                  className={`w-full py-3.5 px-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    plan.popular
                      ? 'bg-white text-[#0284c7] hover:bg-sky-50 shadow-black/10'
                      : 'bg-[#0284c7] text-white hover:bg-[#0369a1] shadow-sky-600/20'
                  }`}
                >
                  <span>Choose {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}

        </div>

        {/* ========================================================================= */}
        {/* 3. AI VISION ADD-ON BANNER (MATCHING VASY.AI'S SMART RETAIL HIGHLIGHT)     */}
        {/* ========================================================================= */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-slate-700">
          <div className="absolute right-0 top-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/40 text-violet-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Add-On Module</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                {aiAddon.name}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {aiAddon.tagline}. Compatible with all standard IP cameras. Includes VINA conversational business AI co-pilot and real-time checkout queue alerts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {aiAddon.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center lg:text-left flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Add-on Price</span>
                <div className="flex items-baseline justify-center lg:justify-start gap-1 mt-1">
                  <span className="text-3xl font-black text-white">₹{aiAddon.price.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-slate-300">{aiAddon.period}</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Works on top of Standard, Multi-Store Pro, or Enterprise Cloud plans.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/ai-solutions"
                  className="w-full py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-violet-600/30"
                >
                  <Eye className="w-4 h-4" />
                  <span>Explore AI Vision Features</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 4. DETAILED FEATURE COMPARISON TABLE                                      */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-t border-b border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Detailed Feature Comparison
            </h2>
            <div className="w-16 h-1 bg-[#0284c7] rounded-full mx-auto mt-2.5"></div>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Compare capabilities side-by-side to choose the exact plan your business requires.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-md">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-900 font-bold">
                  <th className="py-4 px-6 min-w-[280px]">Feature & Capability</th>
                  <th className="py-4 px-4 text-center min-w-[130px]">Lite (₹6.9k)</th>
                  <th className="py-4 px-4 text-center min-w-[130px]">Standard (₹14.9k)</th>
                  <th className="py-4 px-4 text-center min-w-[150px] bg-sky-50/80 text-[#0284c7] font-black">
                    Multi-Store Pro (₹28.9k)
                  </th>
                  <th className="py-4 px-4 text-center min-w-[140px]">Enterprise (₹44.9k)</th>
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((cat, cIdx) => (
                  <React.Fragment key={cIdx}>
                    <tr className="bg-slate-50/90 border-b border-slate-200">
                      <td colSpan={5} className="py-2.5 px-6 font-black text-xs text-[#0284c7] uppercase tracking-wider">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((f, fIdx) => (
                      <tr key={fIdx} className="border-b border-slate-200/60 hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 px-6 text-slate-700 font-medium">{f.name}</td>
                        <td className="py-3 px-4 text-center">
                          {typeof f.lite === 'boolean' ? (
                            f.lite ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />
                          ) : (
                            <span className="text-xs font-bold text-slate-500">{f.lite}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof f.std === 'boolean' ? (
                            f.std ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />
                          ) : (
                            <span className="text-xs font-bold text-slate-500">{f.std}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center bg-sky-50/40">
                          {typeof f.pro === 'boolean' ? (
                            f.pro ? <Check className="w-4 h-4 text-emerald-600 mx-auto font-bold" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />
                          ) : (
                            <span className="text-xs font-bold text-[#0284c7]">{f.pro}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof f.ent === 'boolean' ? (
                            f.ent ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <X className="w-4 h-4 text-slate-300 mx-auto" />
                          ) : (
                            <span className="text-xs font-bold text-violet-600">{f.ent}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PRICING FAQ ACCORDION                                                  */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Pricing Questions
          </h2>
          <div className="w-16 h-1 bg-[#0284c7] rounded-full mx-auto mt-2"></div>
        </div>

        <div className="space-y-4">
          {pricingFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-[#0284c7] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#0284c7] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FINAL ENTERPRISE CTA BANNER                                            */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#075985] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Have More than 50+ Stores or Unique Factory Workflows?
          </h2>
          <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
            Our Enterprise Architecture team crafts tailored multi-tenant deployments with custom API webhooks, SLA guarantees, and on-site training.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleBookDemo('Enterprise Custom')}
              className="px-8 py-3.5 rounded-full bg-white text-[#0284c7] font-bold text-sm hover:bg-sky-50 shadow-lg shadow-black/20 transition-all cursor-pointer"
            >
              Talk to Enterprise Solution Architect
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-sky-800/80 hover:bg-sky-800 text-white font-bold text-sm border border-sky-400/40 transition-all"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Modal Trigger */}
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
