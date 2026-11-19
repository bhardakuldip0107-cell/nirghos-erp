import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquareQuote, 
  Sparkles, 
  ChevronRight, 
  ArrowRight, 
  Star, 
  Building2, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Users,
  Quote,
  PhoneCall
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import DemoModal from '../../components/common/DemoModal';
import AnimatedCounter from '../../components/common/AnimatedCounter';

export const Testimonials = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const testimonialsList = [
    {
      id: 1,
      quote: 'Before Nirghos ERP, our manufacturing plant was losing roughly 7% of raw steel to untracked scrap. Their polymorphic BOM calculation gave us batch-level precision in less than two weeks.',
      author: 'Harsh Vardhan Singhania',
      designation: 'Managing Director',
      company: 'Apex Precision Forgings Ltd.',
      industry: 'Manufacturing',
      location: 'Pune, Maharashtra',
      roiMetric: '7% Scrap Reduction',
      rating: 5,
      avatarBg: 'from-orange-500 to-amber-600',
      initials: 'HS'
    },
    {
      id: 2,
      quote: 'Managing style-color-size matrix for 15,000 SKUs used to be a nightmare with our previous legacy ERP. Nirghos automated our job cards, barcodes, and dealer dispatch slips effortlessly.',
      author: 'Anjali Somani',
      designation: 'Chief Operating Officer',
      company: 'Vogue Craft Apparel Exports',
      industry: 'Textiles & Apparel',
      location: 'Tirupur, Tamil Nadu',
      roiMetric: '4x Faster Order Dispatch',
      rating: 5,
      avatarBg: 'from-blue-600 to-indigo-700',
      initials: 'AS'
    },
    {
      id: 3,
      quote: 'In diamond manufacturing, even 0.01 cent of untracked weight loss is unacceptable. Nirghos provided karigar-wise issue, return, loss tracking, and daily metal rate auto-updating seamlessly.',
      author: 'Bhavik Zaveri',
      designation: 'Partner & Head of Production',
      company: 'Zaveri & Sons Diamond Corp.',
      industry: 'Gems & Jewellery',
      location: 'Surat, Gujarat',
      roiMetric: '99.98% Precious Metal Audit Precision',
      rating: 5,
      avatarBg: 'from-emerald-600 to-teal-700',
      initials: 'BZ'
    },
    {
      id: 4,
      quote: 'Passing our US-FDA and 21 CFR Part 11 audit was seamless thanks to the immutable cryptographic audit trails in Nirghos ERP. Zero paper slips, 100% digital batch records.',
      author: 'Dr. Suresh Ranganathan',
      designation: 'VP of Quality & Regulatory Affairs',
      company: 'Aura Life Sciences & Formulations',
      industry: 'Healthcare & Pharma',
      location: 'Hyderabad, Telangana',
      roiMetric: '100% Audit Compliance',
      rating: 5,
      avatarBg: 'from-purple-600 to-violet-800',
      initials: 'SR'
    },
    {
      id: 5,
      quote: 'We migrated 80,000 distributor SKUs and past customer balances in just 10 days. The automated GSTR-2B matching alone saves our accounting team 40 hours every single month.',
      author: 'Mehul Chokshi',
      designation: 'Chief Financial Officer',
      company: 'National Trade & Logistics Hub',
      industry: 'Distribution & Retail',
      location: 'Ahmedabad, Gujarat',
      roiMetric: '40 Hours Saved Every Month',
      rating: 5,
      avatarBg: 'from-rose-500 to-pink-600',
      initials: 'MC'
    },
    {
      id: 6,
      quote: 'Having real-time mobile visibility into plant maintenance, boiler pressure telemetry, and chemical raw material silos has cut unexpected machine downtime to near zero.',
      author: 'Kavita Menon',
      designation: 'Plant Operations Head',
      company: 'SynthoChem Polymers Ltd.',
      industry: 'Manufacturing',
      location: 'Vadodara, Gujarat',
      roiMetric: 'Zero Unplanned Downtime',
      rating: 5,
      avatarBg: 'from-sky-600 to-cyan-700',
      initials: 'KM'
    },
    {
      id: 7,
      quote: 'We run 28 retail retail outlets and an online store. Nirghos keeps our inventory in sync within 500 milliseconds. Customer checkout is 3x faster with integrated UPI & POS.',
      author: 'Rohit Bansal',
      designation: 'Founder & Retail Director',
      company: 'Urban Threads Department Stores',
      industry: 'Distribution & Retail',
      location: 'Bengaluru, Karnataka',
      roiMetric: '500ms Multi-Store Sync',
      rating: 5,
      avatarBg: 'from-amber-500 to-orange-600',
      initials: 'RB'
    },
    {
      id: 8,
      quote: 'What impressed me most was the speed of implementation. Other ERP vendors quoted us 12 to 18 months. Nirghos had our three EPC project sites completely live in 12 days.',
      author: 'Alok Mukherjee',
      designation: 'Director of Infrastructure Projects',
      company: 'Apex Infrastructure & EPC Projects',
      industry: 'Manufacturing',
      location: 'Kolkata, West Bengal',
      roiMetric: 'Go-Live in 12 Days',
      rating: 5,
      avatarBg: 'from-indigo-600 to-blue-700',
      initials: 'AM'
    }
  ];

  const industries = ['All', 'Manufacturing', 'Textiles & Apparel', 'Gems & Jewellery', 'Healthcare & Pharma', 'Distribution & Retail'];

  const filteredTestimonials = selectedIndustry === 'All'
    ? testimonialsList
    : testimonialsList.filter(t => t.industry === selectedIndustry);

  return (
    <div className="space-y-20 pb-28">
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER                                                            */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-br from-[#071328] via-[#0B1B3D] to-[#071328] text-white pt-14 pb-24 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-grid-pattern pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#f25c05]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-5">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#f25c05] font-semibold">Testimonials</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f25c05]/15 border border-[#f25c05]/30 text-[#f25c05] text-xs font-black uppercase tracking-wider">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Customer Stories & Trust</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Relationships Built on <span className="text-[#f25c05]">Trust, Scale & ROI.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every testimonial represents a relationship built on trust, scale, and high ROI. Discover how 500+ enterprises across 25 industries modernised operations and eliminated reconciliation bottlenecks.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="px-6 py-3.5 rounded-full bg-[#f25c05] text-white font-bold text-sm hover:bg-[#d94f00] shadow-lg shadow-orange-500/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Free ERP Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/industries"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Browse 25 Industry Blueprints</span>
                <Building2 className="w-4 h-4 text-slate-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SCALE & VERIFIED ROI STATS                                             */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 -mt-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl">
          <div className="text-center p-4 border-r last:border-none border-slate-100">
            <div className="text-3xl sm:text-4xl font-black text-[#f25c05] font-mono">
              <AnimatedCounter target={40} suffix="%" duration={1600} />
            </div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Average OpEx Reduction</div>
          </div>
          <div className="text-center p-4 border-r last:border-none border-slate-100">
            <div className="text-3xl sm:text-4xl font-black text-sky-600 font-mono">
              &lt; <AnimatedCounter target={14} suffix=" Days" duration={1800} />
            </div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Average Go-Live Time</div>
          </div>
          <div className="text-center p-4 border-r last:border-none border-slate-100">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">
              <AnimatedCounter target={99.99} decimals={2} suffix="%" duration={2000} />
            </div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Cloud SLA Uptime</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-black text-amber-500 font-mono">
              4.9 / 5.0
            </div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Average Enterprise CSAT</div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TESTIMONIALS DIRECTORY WITH INDUSTRY FILTERS                           */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-200 pb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Verified Enterprise Experiences
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Read how business leaders transformed their daily manufacturing, sales, and accounting operations
            </p>
          </div>

          {/* Industry Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            {industries.map((ind) => (
              <button
                key={ind}
                type="button"
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedIndustry === ind
                    ? 'bg-[#f25c05] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-4">
                {/* Top Meta: Stars & Industry */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200">
                    {t.industry}
                  </span>
                </div>

                {/* Tangible ROI Highlight Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-orange-50 text-[#f25c05] border border-orange-200 text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{t.roiMetric}</span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Company Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.avatarBg} text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm`}>
                  {t.initials}
                </div>

                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-slate-900">
                    {t.author}
                  </h4>
                  <div className="text-[11px] font-medium text-[#f25c05]">
                    {t.designation}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {t.company} • <span className="text-slate-400">{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 4. CALL TO ACTION (CTA)                                                   */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-orange-50 to-white border-2 border-orange-200 space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#f25c05] font-extrabold text-xs uppercase tracking-wider border border-orange-200 shadow-xs">
            <Sparkles className="w-4 h-4" />
            <span>Ready to Scale Your Enterprise?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto">
            Become Our Next Enterprise Success Story
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Experience how our pre-configured 25 industry blueprints can replace your fragmented software and accelerate your business in less than 14 days.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-4 rounded-full bg-[#f25c05] hover:bg-[#d94f00] text-white font-black text-sm shadow-xl shadow-orange-500/25 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>Schedule Free ERP Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-white text-slate-800 font-bold text-sm border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-slate-600" />
              <span>Contact Solutions Experts</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type="book-demo"
      />

    </div>
  );
};

export default Testimonials;
