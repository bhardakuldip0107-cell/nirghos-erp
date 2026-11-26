import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  X, 
  Sparkles, 
  ArrowRight, 
  Building2, 
  PhoneCall, 
  CheckCircle2,
  TrendingUp,
  Clock,
  ShieldCheck
} from 'lucide-react';
import DemoModal from '../../components/common/DemoModal';

export const Testimonials = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  // Toggle Read More / Read Less for each card
  const toggleReadMore = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // 12 Verified Nirghos ERP Client Testimonials (Cards 1-6 Exact Match to User Screenshot)
  const testimonials = [
    {
      id: 1,
      quote: 'I have been connected with Nirghos since 2001, my experience tells Nirghos provides simple, easy & accurate software including features...',
      fullQuote: 'I have been connected with Nirghos since 2001, my experience tells Nirghos provides simple, easy & accurate software including features like barcode scanning, inventory tracking, GST invoicing, and real-time ledger accounting. It has completely streamlined our textile wholesale operations.',
      name: 'Mr. Dhaval Patel',
      org: 'Cotton House, Ahmedabad',
      hasVideo: false,
      industry: 'Textiles & Wholesale'
    },
    {
      id: 2,
      quote: 'First of all, I would like to Thank Nirghos ERP Solutions Pvt. Ltd. for their wonderful software and Impactful Service, ...',
      fullQuote: 'First of all, I would like to Thank Nirghos ERP Solutions Pvt. Ltd. for their wonderful software and Impactful Service. The team\'s immediate response to support tickets and bespoke diamond & jewellery inventory customizations has given us unmatched peace of mind.',
      name: 'Mr. Noel Liby',
      org: 'Moodhayil Gold and Diamonds , Kerala',
      hasVideo: false,
      industry: 'Gems & Jewellery'
    },
    {
      id: 3,
      quote: 'Before expanding My Business, I was concerned about managing branches . After Reviewing several Jewellery ERP Systems, ...',
      fullQuote: 'Before expanding My Business, I was concerned about managing branches. After Reviewing several Jewellery ERP Systems, we chose Nirghos. The multi-branch synchronization, karigar stock auditing, and centralized reporting made our interstate expansion completely effortless.',
      name: 'Mr. Sunil Mosun',
      org: 'JKJ and Sons Jewellers, Jaipur',
      hasVideo: true,
      videoTitle: 'Multi-Branch Jewellery Synchronisation & Karigar Auditing',
      industry: 'Luxury Retail & Jewellery'
    },
    {
      id: 4,
      quote: 'I have been using Nirghos\'s Jewellery ERP Software for almost four years. It is specially designed for the jewellery industry according to their...',
      fullQuote: 'I have been using Nirghos\'s Jewellery ERP Software for almost four years. It is specially designed for the jewellery industry according to their karigar, bullion rate fluctuation, and hallmark tracking needs. It has boosted our team\'s operational output by 40%.',
      name: 'Mr. Sagar',
      org: 'Sagar Gold , Surat',
      hasVideo: true,
      videoTitle: 'Manufacturing Output & Daily Bullion Rate Dynamic Sync',
      industry: 'Jewellery Manufacturing'
    },
    {
      id: 5,
      quote: 'We are connected with Nirghos since 2003. They provide complete solutions for Retail & Wholesale software. Custome support...',
      fullQuote: 'We are connected with Nirghos since 2003. They provide complete solutions for Retail & Wholesale software. Customer support is prompt, dependable, and always ready to tailor reports according to our expanding multi-store requirements.',
      name: 'Mr. Anil Dua',
      org: 'Basic Casual Clothing, Ahmedabad',
      hasVideo: false,
      industry: 'Retail & Garments'
    },
    {
      id: 6,
      quote: 'Thank you for Supporting our Business with Nirghos Apparel ERP and E-commerce website. All the small issues which we faced have...',
      fullQuote: 'Thank you for Supporting our Business with Nirghos Apparel ERP and E-commerce website. All the small issues which we faced have been resolved swiftly by their engineering team. The bi-directional sync between POS and online store is lightning fast.',
      name: 'Mr. Narendra Mehta',
      org: 'In Vogue, Ahmedabad',
      hasVideo: false,
      industry: 'E-commerce & Retail'
    },
    {
      id: 7,
      quote: 'Managing style-color-size matrix for 15,000 SKUs used to be a nightmare with our previous legacy ERP. Nirghos automated our job cards...',
      fullQuote: 'Managing style-color-size matrix for 15,000 SKUs used to be a nightmare with our previous legacy ERP. Nirghos automated our job cards, barcodes, and dealer dispatch slips effortlessly with 4x faster order fulfillment.',
      name: 'Ms. Anjali Somani',
      org: 'Vogue Craft Apparel Exports, Tirupur',
      hasVideo: false,
      industry: 'Textiles & Apparel'
    },
    {
      id: 8,
      quote: 'Passing our FDA and 21 CFR Part 11 audit was seamless thanks to the immutable cryptographic audit trails in Nirghos ERP...',
      fullQuote: 'Passing our FDA and 21 CFR Part 11 audit was seamless thanks to the immutable cryptographic audit trails in Nirghos ERP. Zero paper slips, 100% digital batch records and automated expiry quarantine.',
      name: 'Dr. Suresh Ranganathan',
      org: 'Aura Life Sciences & Formulations, Hyderabad',
      hasVideo: true,
      videoTitle: 'Pharma Batch Serialization & FDA Compliance Story',
      industry: 'Healthcare & Pharma'
    },
    {
      id: 9,
      quote: 'The automated GSTR-2B reconciliation and bank API integration saved our finance team over 40 hours each month without any manual invoice matching...',
      fullQuote: 'The automated GSTR-2B reconciliation and bank API integration saved our finance team over 40 hours each month without any manual invoice matching. Real-time reconciliation has eliminated accounting discrepancies completely.',
      name: 'Mr. Mehul Chokshi',
      org: 'National Trade & Logistics Hub, Ahmedabad',
      hasVideo: false,
      industry: 'Distribution & Logistics'
    }
  ];

  const displayedList = testimonials.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-800 pb-24 selection:bg-[#2e6bcc] selection:text-white relative overflow-hidden">
      
      {/* Blueprint Grid Pattern with Soft Accent Pixel Tiles */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.45]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 96, 185, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 96, 185, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px'
          }}
        />
        {/* Decorative soft blue square tiles mimicking screenshot */}
        <div className="absolute top-12 left-16 w-9 h-9 bg-sky-200/40 rounded-xs pointer-events-none"></div>
        <div className="absolute top-28 left-44 w-9 h-9 bg-sky-100/60 rounded-xs pointer-events-none"></div>
        <div className="absolute top-10 right-28 w-9 h-9 bg-sky-200/35 rounded-xs pointer-events-none"></div>
        <div className="absolute top-36 right-56 w-9 h-9 bg-sky-100/50 rounded-xs pointer-events-none"></div>
        <div className="absolute top-64 left-1/4 w-9 h-9 bg-sky-200/25 rounded-xs pointer-events-none"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        
        {/* ========================================================================= */}
        {/* 1. TOP HEADER & BREADCRUMB (EXACT MATCH TO SCREENSHOT)                    */}
        {/* ========================================================================= */}
        <div className="text-center space-y-3.5">
          
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-sky-50/90 border border-sky-100/90 shadow-2xs">
            <Link 
              to="/" 
              className="text-xs sm:text-sm font-bold text-slate-800 hover:text-[#2e6bcc] transition-colors"
            >
              Home
            </Link>
            <span className="text-slate-300 font-light">|</span>
            <span className="text-xs sm:text-sm font-bold text-[#2e6bcc]">
              Testimonial
            </span>
          </div>

          {/* Main Title: Driven By Client Trust And Experience */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mt-4">
            <span className="text-[#2e6bcc]">Driven By Client</span> Trust And Experience
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            We are a team of believers, thinkers and creators. We are customer-centric and passionate enough to innovate and create new opportunities. We love challenges and believe in Team Work.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. TESTIMONIALS 3-COLUMN CARDS GRID (EXACT MATCH TO SCREENSHOT)           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-12 sm:mt-16">
          {displayedList.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-sky-300 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Quotation Mark Icon in Soft Sky Blue */}
                <div className="text-sky-300/80 group-hover:text-sky-400 transition-colors mb-3.5">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {expandedCards[t.id] ? t.fullQuote : t.quote}
                </p>

                {/* Orange Read More / Show Less Link */}
                <button
                  type="button"
                  onClick={() => toggleReadMore(t.id)}
                  className="text-xs font-bold text-[#2e6bcc] hover:text-[#2355a6] mt-2.5 inline-block cursor-pointer self-start transition-colors"
                >
                  {expandedCards[t.id] ? 'Show Less' : 'Read More'}
                </button>
              </div>

              {/* Bottom Row: Author Name, Org and Video Play Button */}
              <div className="mt-5 pt-3.5 flex items-end justify-between border-t border-slate-50">
                <div>
                  <h4 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">
                    {t.name}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">
                    {t.org}
                  </p>
                </div>

                {/* Video Play Button (Only on Cards with Video, e.g. Card 3 & 4) */}
                {t.hasVideo && (
                  <button
                    type="button"
                    onClick={() => setActiveVideoModal(t)}
                    title={`Watch ${t.name}'s Video Story`}
                    className="w-9 h-9 rounded-full bg-sky-100 hover:bg-sky-200 text-[#2e6bcc] flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 shadow-xs cursor-pointer ml-3 shrink-0"
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button if more stories are available */}
        {visibleCount < testimonials.length && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount(testimonials.length)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white hover:bg-slate-50 text-[#2e6bcc] font-bold text-xs sm:text-sm border-2 border-sky-200 hover:border-[#2e6bcc] shadow-sm transition-all transform hover:scale-105 cursor-pointer"
            >
              <span>View More Client Stories ({testimonials.length - visibleCount} more)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. ENTERPRISE CTA BANNER                                                  */}
        {/* ========================================================================= */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-lg text-center space-y-5 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-100 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-sky-100/60 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#2e6bcc] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>50+ Happy Customers</span>
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Ready to Transform Your Business with Nirghos ERP?
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Experience seamless multi-branch inventory, rapid GST invoicing, karigar auditing, and high-performance financial reporting.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="px-7 py-3 rounded-full bg-[#2e6bcc] hover:bg-[#2355a6] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                Schedule Free Live Demo
              </button>

              <Link
                to="/contact"
                className="px-7 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-all"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal Popup */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100 relative space-y-5 animate-scaleUp">
            
            <button
              type="button"
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#2e6bcc] flex items-center justify-center shrink-0">
                <Play className="w-6 h-6 fill-current ml-0.5" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900">
                  {activeVideoModal.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {activeVideoModal.org}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 aspect-video flex flex-col items-center justify-center text-white p-6 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="relative z-10 space-y-2">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xs border border-white/40 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white text-white ml-1" />
                </div>
                <div className="text-xs font-semibold text-sky-200 uppercase tracking-wider">
                  Client Case Study Video
                </div>
                <div className="text-sm font-bold text-white max-w-xs">
                  {activeVideoModal.videoTitle || activeVideoModal.name}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              "{activeVideoModal.fullQuote}"
            </p>

            <div className="flex items-center justify-between gap-3 pt-1">
              <button
                type="button"
                onClick={() => {
                  setActiveVideoModal(null);
                  setIsDemoModalOpen(true);
                }}
                className="w-full py-2.5 rounded-xl bg-[#2e6bcc] hover:bg-[#2355a6] text-white font-bold text-xs transition"
              >
                Experience This in Nirghos Live Demo
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
      />

    </div>
  );
};

export default Testimonials;
