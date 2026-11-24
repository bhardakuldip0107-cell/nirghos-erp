import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  ShoppingBag, 
  ArrowRight, 
  Play, 
  Activity, 
  Layers, 
  Users, 
  BarChart3, 
  ScanLine, 
  Cpu, 
  AlertCircle, 
  MessageSquare, 
  Clock, 
  Check, 
  Flame 
} from 'lucide-react';
import DemoModal from '../../components/common/DemoModal';

export const AISolutions = () => {
  const [activeTab, setActiveTab] = useState('cctv-vision');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [vinaQuery, setVinaQuery] = useState('Show me fast-moving items in Surat store with stock < 20');
  const [vinaResponse, setVinaResponse] = useState({
    answer: 'Found 3 items below threshold in Surat Supermarket:',
    items: [
      { name: 'Amul Taaza Milk 500ml', stock: '12 units', velocity: '45 units/day', reorder: 'Recommended Reorder: 100 units' },
      { name: 'Fortune Sunflower Oil 1L', stock: '8 units', velocity: '22 units/day', reorder: 'Recommended Reorder: 50 units' },
      { name: 'Aashirvaad Atta 5kg', stock: '15 units', velocity: '18 units/day', reorder: 'Recommended Reorder: 40 units' }
    ]
  });

  const aiFeatures = [
    {
      id: 'cctv-vision',
      title: 'In-Store CCTV Footfall & Heatmaps',
      badge: 'Zero Hardware Replacement',
      shortDesc: 'Connects directly to your existing IP / RTSP security cameras to provide real-time footfall and shopper heatmaps.',
      bullets: [
        'Bi-directional footfall counting (99.4% accuracy, filters out staff and carts)',
        'Live 2D dwell-time store heatmaps identifying high-conversion aisles',
        'Automatic queue threshold detector: alerts floor supervisor when queue > 4 shoppers',
        'Hourly store walk-in conversion rate vs counter bill generation'
      ]
    },
    {
      id: 'produce-vision',
      title: 'Zero-Barcode Produce Recognition',
      badge: 'Sub-Second Checkout',
      shortDesc: 'AI camera at checkout recognizes loose fruits, vegetables, and bakery items without manual cashier searches.',
      bullets: [
        'Recognizes over 500+ un-barcoded fresh items in under 150 milliseconds',
        'Instant weight capture from integrated digital scale with auto-price lookup',
        'Reduces cashier lookup errors and speeds up checkout by 40%',
        'Self-learning vision model adapts to local produce shapes and packaging'
      ]
    },
    {
      id: 'vina-copilot',
      title: 'VINA: Conversational Business Co-Pilot',
      badge: 'Enterprise LLM Intelligence',
      shortDesc: 'Natural language AI operator that analyzes millions of sales rows and speaks plain business insights.',
      bullets: [
        'Ask questions in English, Hindi, or Gujarati directly on mobile or web',
        'Auto-draft purchase orders based on 30-day moving sales velocity',
        'Predictive stockout warnings before high-demand festive weekends',
        'Cross-store dead inventory transfer recommendations'
      ]
    },
    {
      id: 'smart-cart',
      title: 'Smart Cart & Scan-As-You-Shop Kiosk',
      badge: 'Frictionless Retail',
      shortDesc: 'Empower shoppers to scan items directly into their trolley and bypass billing lines completely.',
      bullets: [
        'Tablet-mounted trolley system with integrated barcode ring scanner',
        'Weight-sensor validation prevents unscanned items from entering cart',
        'Dynamic in-cart promotion recommendations ("Add Coke for ₹20")',
        '1-Click UPI payment directly on cart screen with instant gate pass'
      ]
    }
  ];

  const handleSimulateVina = (queryText) => {
    setVinaQuery(queryText);
    if (queryText.includes('profit') || queryText.includes('margin')) {
      setVinaResponse({
        answer: 'Today’s Gross Margin Analysis across 12 outlets:',
        items: [
          { name: 'Jewellery Showroom (JSoft)', stock: '₹4.8L Sales', velocity: 'Margin: 24.2%', reorder: 'Top Category: 22K Bangles' },
          { name: 'Fashion Retail (GSoft)', stock: '₹1.9L Sales', velocity: 'Margin: 38.5%', reorder: 'Top Category: Summer Shirts' },
          { name: 'Supermarket Chain', stock: '₹3.1L Sales', velocity: 'Margin: 16.8%', reorder: 'Top Category: Dairy & Staples' }
        ]
      });
    } else {
      setVinaResponse({
        answer: 'Inventory Replenishment Analysis for Ahmedabad Central Hub:',
        items: [
          { name: 'Tata Tea Gold 500g', stock: '5 cartons remaining', velocity: 'Runout in 2 days', reorder: 'Draft PO #PO-8821 ready to approve' },
          { name: 'Surf Excel Quick Wash 2kg', stock: '2 cartons remaining', velocity: 'Runout in 1 day', reorder: 'Draft PO #PO-8822 ready to approve' }
        ]
      });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="pt-16 pb-14 sm:pt-20 sm:pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden border-b border-slate-800">
        
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-400/40 text-violet-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-violet-300 animate-pulse" />
            <span>AUTONOMOUS IN-STORE VISION & AI INTELLIGENCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Turn In-Store Cameras into <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-violet-400">
              Live Business Intelligence.
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            No expensive camera replacements. Nirghos AI connects to your existing store CCTV streams to count visitor footfalls, generate shopping heatmaps, and automate queue management.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-lg shadow-sky-500/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Schedule Live AI Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/pricing"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
            >
              View AI Pricing Add-on
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-slate-800 pt-8 text-left">
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-sky-400 tabular-nums">99.4%</span>
              <p className="text-xs text-slate-400 font-semibold mt-1">Footfall Count Accuracy</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums">150 ms</span>
              <p className="text-xs text-slate-400 font-semibold mt-1">Produce Vision Recognition</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-violet-400 tabular-nums">&lt; 2.1s</span>
              <p className="text-xs text-slate-400 font-semibold mt-1">Average Checkout Time</p>
            </div>
            <div className="p-3">
              <span className="text-2xl sm:text-3xl font-black text-amber-400 tabular-nums">-60%</span>
              <p className="text-xs text-slate-400 font-semibold mt-1">Shrinkage & Stock Pilferage</p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE FEATURE SELECTOR TABS                                      */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 scrollbar-none">
          {aiFeatures.map((f) => {
            const isActive = activeTab === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveTab(f.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#0284c7] text-white border-[#0284c7] shadow-lg shadow-sky-600/25'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span>{f.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Feature Showcase Canvas */}
        <div className="mt-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl">
          
          {/* TAB 1: CCTV VISION */}
          {activeTab === 'cctv-vision' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="px-3 py-1 rounded-full bg-sky-100 text-[#0284c7] text-xs font-bold uppercase tracking-wider">
                  Edge CCTV Stream Telemetry
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  In-Store Footfall Counting &amp; Shopper Heatmaps
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Transform any RTSP IP camera into a high-precision analytics sensor. The edge vision algorithm runs locally inside your store, processing video streams at 30 FPS without consuming cloud internet bandwidth.
                </p>
                <div className="space-y-2.5 pt-2">
                  {aiFeatures[0].bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual CCTV Feed Simulator */}
              <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-5 text-white shadow-2xl relative overflow-hidden border border-slate-800">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="font-bold tracking-wider text-slate-300">CAM-01 • ENTRANCE TRIPWIRE • 1080P 30FPS</span>
                  </div>
                  <span className="font-mono text-emerald-400">EDGE AI LIVE</span>
                </div>

                {/* Simulated Camera Blueprint */}
                <div className="relative mt-4 h-64 sm:h-72 bg-slate-950/80 rounded-xl overflow-hidden border border-slate-800/80 flex items-center justify-center">
                  
                  {/* Grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>

                  {/* Virtual Tripwire */}
                  <div className="absolute inset-y-0 left-1/2 w-0.5 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"></div>
                  <span className="absolute top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-[10px] font-mono">
                    COUNT TRIPWIRE
                  </span>

                  {/* Bounding Box Simulators */}
                  <div className="absolute top-16 left-1/4 p-2 border-2 border-sky-400 bg-sky-500/10 rounded">
                    <span className="text-[10px] font-mono bg-sky-500 text-white px-1 rounded block">Shopper #104 [IN]</span>
                  </div>
                  <div className="absolute bottom-16 right-1/4 p-2 border-2 border-violet-400 bg-violet-500/10 rounded">
                    <span className="text-[10px] font-mono bg-violet-500 text-white px-1 rounded block">Shopper #105 [OUT]</span>
                  </div>

                  {/* Heatmap Glow Overlay */}
                  <div className="absolute top-10 right-10 w-32 h-32 bg-red-500/25 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="absolute bottom-10 left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>
                </div>

                {/* Telemetry Counter Strip */}
                <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-800/70 border border-slate-700/60">
                    <span className="text-xs text-slate-400 font-semibold block">Total In</span>
                    <span className="text-xl font-black text-emerald-400">1,482</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/70 border border-slate-700/60">
                    <span className="text-xs text-slate-400 font-semibold block">Total Out</span>
                    <span className="text-xl font-black text-sky-400">1,310</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-800/70 border border-slate-700/60">
                    <span className="text-xs text-slate-400 font-semibold block">In-Store Dwell Avg</span>
                    <span className="text-xl font-black text-amber-400">14.6 min</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ZERO-BARCODE PRODUCE RECOGNITION */}
          {activeTab === 'produce-vision' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  Counter Vision Recognition
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  Zero-Barcode Produce &amp; Baked Item Recognition
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Eliminate cashier delays when selling fresh produce, fruits, vegetables, and loose bakery items. The top-down counter camera automatically classifies the item in 150ms and computes the price based on live scale weight.
                </p>
                <div className="space-y-2.5 pt-2">
                  {aiFeatures[1].bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Produce Recognition Simulator Card */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-xl space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <ScanLine className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-slate-800 text-sm">POS Counter #2 • Integrated Scale Sensor</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black">
                    CONFIDENCE: 99.1%
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs text-slate-500 font-semibold block">Detected Produce</span>
                    <span className="text-base font-black text-slate-900 mt-1 block">Shimla Apple (Red Delicious)</span>
                    <span className="text-[11px] text-slate-500">Rate: ₹140.00 / kg</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs text-slate-500 font-semibold block">Digital Scale Weight</span>
                    <span className="text-base font-black text-[#0284c7] mt-1 block">1.340 kg</span>
                    <span className="text-[11px] text-emerald-600 font-semibold">Port RS-232 Active</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200">
                    <span className="text-xs text-sky-700 font-semibold block">Auto-Calculated Amount</span>
                    <span className="text-xl font-black text-[#0284c7] mt-1 block">₹187.60</span>
                    <span className="text-[10px] text-sky-600 font-bold">1-Click Injected to Bill</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span>Alternate Suggestions: Washington Apple (12%), Pomegranate (0.2%)</span>
                  <button type="button" className="text-[#0284c7] font-bold hover:underline cursor-pointer">
                    Override Item
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: VINA CONVERSATIONAL CO-PILOT */}
          {activeTab === 'vina-copilot' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-wider">
                  Conversational Business AI
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  VINA: Your AI Retail Operations Co-Pilot
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Instead of digging through 50 complex spreadsheet reports, simply ask VINA in plain English or Gujarati. VINA analyzes live database rows, flags inventory bottlenecks, and drafts replenishment POs.
                </p>
                <div className="space-y-2.5 pt-2">
                  {aiFeatures[2].bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* VINA Interactive Chat Simulator */}
              <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 text-white shadow-2xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-violet-400" />
                    <span className="font-bold text-sm text-slate-200">VINA Co-Pilot Interactive Simulator</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-violet-900/60 border border-violet-500/40 text-violet-300">
                    Nirghos LLM Enterprise RAG
                  </span>
                </div>

                {/* Quick Prompts */}
                <div className="flex flex-wrap gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => handleSimulateVina('Show me fast-moving items in Surat store with stock < 20')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer transition-colors"
                  >
                    Low Stock in Surat?
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSimulateVina('Show profit margins across jewellery vs fashion stores')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer transition-colors"
                  >
                    Compare Margin by Store?
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSimulateVina('Draft replenishment purchase order for Ahmedabad Central')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer transition-colors"
                  >
                    Draft PO for Tea &amp; Detergent?
                  </button>
                </div>

                {/* Chat Bubble: User */}
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-200">
                  <span className="font-bold text-sky-400 block mb-0.5">Business Owner:</span>
                  {vinaQuery}
                </div>

                {/* Chat Bubble: VINA */}
                <div className="p-4 rounded-xl bg-violet-950/40 border border-violet-800/40 text-xs sm:text-sm text-slate-200 space-y-3">
                  <div className="flex items-center gap-1.5 font-bold text-violet-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>VINA Response:</span>
                  </div>
                  <p className="text-slate-300">{vinaResponse.answer}</p>
                  <div className="space-y-2">
                    {vinaResponse.items.map((it, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-bold text-white block">{it.name}</span>
                          <span className="text-[11px] text-slate-400">{it.velocity}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-mono text-amber-400 font-bold block">{it.stock}</span>
                          <span className="text-[10px] text-emerald-400 font-semibold">{it.reorder}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SMART CART & SELF-CHECKOUT */}
          {activeTab === 'smart-cart' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  Frictionless In-Store Shopping
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  Smart Cart &amp; Scan-As-You-Shop Kiosk
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Empower premium shoppers to scan items into their trolley with a ring barcode scanner, track running basket total in real time, and pay via UPI directly on the trolley tablet without joining cashier queues.
                </p>
                <div className="space-y-2.5 pt-2">
                  {aiFeatures[3].bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Smart Cart UI Preview */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#0284c7]" />
                    <span className="font-bold text-slate-900 text-sm">Smart Trolley #14 • Live Cart</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black">
                    WEIGHT VERIFIED: OK
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900 block">Cadbury Dairy Milk Silk 150g</span>
                      <span className="text-slate-500">Qty: 2 • ₹175 each</span>
                    </div>
                    <span className="font-black text-slate-900 text-sm">₹350.00</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900 block">Kellogg's Corn Flakes 500g</span>
                      <span className="text-slate-500">Qty: 1 • ₹210 each</span>
                    </div>
                    <span className="font-black text-slate-900 text-sm">₹210.00</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">Basket Total (2 Items)</span>
                    <span className="text-2xl font-black text-slate-900 block">₹560.00</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    Pay via UPI [V-Pay]
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. CTA BANNER                                                             */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Ready to Experience Nirghos AI in Your Stores?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Our AI deployment engineers conduct a free compatibility check with your existing store CCTV cameras and demonstrate live footfall counting in under 30 minutes.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-lg shadow-sky-500/25 transition-all cursor-pointer"
            >
              Book 1-on-1 AI Architecture Demo
            </button>
            <Link
              to="/pricing"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
            >
              Check Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type="book-demo"
        defaultIndustry="AI Vision & Smart Retail"
      />

    </div>
  );
};

export default AISolutions;
