import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarCheck, 
  Sparkles, 
  ChevronRight, 
  ArrowRight, 
  MapPin, 
  Clock, 
  Users, 
  Video, 
  Award, 
  Building2, 
  CheckCircle2, 
  ExternalLink,
  PhoneCall,
  Calendar
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import DemoModal from '../../components/common/DemoModal';

export const Events = () => {
  const { showToast } = useDemo();
  const [selectedTab, setSelectedTab] = useState('All');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [registeredEvent, setRegisteredEvent] = useState(null);

  const eventsList = [
    {
      id: 101,
      title: 'Nirghos Event : A New Identity . A New Era',
      category: 'Conferences & Summits',
      date: 'May 20, 2024',
      time: '04:00 PM - 09:30 PM IST',
      location: 'Ahmedabad Management Association (AMA) – JB Auditorium, Ahmedabad, Gujarat',
      mode: 'In-Person Grand Unveiling',
      type: 'Brand Evolution Event',
      desc: 'Nirghos E Barcode Solutions Private Limited completed 25 successful years and officially unveiled its new identity: Nirghos ERP Solutions Pvt. Ltd., marking a full transition to cloud-driven enterprise solutions with founders Narendra Lunagaria and Nitesh Lunagaria.',
      speakers: ['Narendra Lunagaria (Founder)', 'Nitesh Lunagaria (Founder)', 'Leading Industry Guests'],
      seatsLeft: 'Completed • 400+ Attended',
      featured: true,
      image: '/events/event-card-1.png'
    },
    {
      id: 102,
      title: 'Business Solution Summit 2026',
      category: 'Conferences & Summits',
      date: 'February 16, 2026',
      time: '10:00 AM - 05:00 PM IST',
      location: 'Hotel Sayaji Convention Center, Raipur, Chhattisgarh',
      mode: 'In-Person Summit',
      type: 'Regional Enterprise Summit',
      desc: 'Industry leaders and trade heads joined the traditional lamp-lighting inaugural ceremony to explore cloud synchronization, GST e-invoicing compliance, and multi-branch retail POS architectures.',
      speakers: ['Leadership Team', 'Regional Trade Delegates'],
      seatsLeft: 'Completed • 250+ Attended',
      featured: false,
      image: '/events/event-card-2.png'
    },
    {
      id: 103,
      title: 'ERP Summit 2024',
      category: 'Conferences & Summits',
      date: 'July 15, 2024',
      time: '02:00 PM - 07:30 PM IST',
      location: 'Surat International Exhibition & Convention Centre (SIECC), Surat, Gujarat',
      mode: 'In-Person Industrial Summit',
      type: 'Industrial Transformation',
      desc: 'A packed auditorium of 400+ diamond, textile, and manufacturing business owners gathered to discuss rapid digital transformation, custom barcodes, and zero-defect ERP implementations.',
      speakers: ['Industry Experts', 'Keynote Speakers'],
      seatsLeft: 'Completed • 400+ Attended',
      featured: false,
      image: '/events/event-card-3.png'
    },
    {
      id: 1,
      title: 'Nirghos Enterprise Summit 2026: The Autonomous Cloud ERP Era',
      category: 'Conferences & Summits',
      date: 'December 12, 2026',
      time: '10:00 AM - 5:30 PM IST',
      location: 'BIEC Convention Center, Bengaluru & Virtual Live Stream',
      mode: 'Hybrid (In-Person & Live Stream)',
      type: 'Annual Flagship Summit',
      desc: 'Join 1,200+ enterprise leaders, CIOs, and industry heads to experience live reveals of Nirghos AI 3.0, polymorphic manufacturing engines, and real-time GST reconciliation benchmarks.',
      speakers: ['Rajesh Sharma (CEO)', 'Kuldip Bharda (CTO)', 'Dr. Ananya Sen (VP Compliance)'],
      seatsLeft: '48 Passes Remaining',
      featured: true
    },
    {
      id: 2,
      title: 'National Manufacturing & Supply Chain Tech Expo',
      category: 'Conferences & Summits',
      date: 'December 19, 2026',
      time: '09:30 AM - 06:00 PM IST',
      location: 'Bombay Exhibition Centre, Mumbai (Booth Hall 4, Stand B-12)',
      mode: 'In-Person Expo',
      type: 'Industrial Exhibition',
      desc: 'Live interactive demonstrations of Nirghos Discrete & Process Manufacturing ERP, multi-level BOM costing, barcode dispatch stations, and automated machine telemetry.',
      speakers: ['Vikram Patel (Head of Implementations)'],
      seatsLeft: 'Open Registration',
      featured: false
    },
    {
      id: 3,
      title: 'Masterclass: Automated GSTR-2B Matching & E-Invoicing at Scale',
      category: 'Virtual Webinars',
      date: 'January 08, 2027',
      time: '03:00 PM - 04:30 PM IST',
      location: 'Live Zoom Interactive Webinar',
      mode: 'Virtual Webinar',
      type: 'Tax & Finance Workshop',
      desc: 'Practical walkthrough for CFOs and finance controllers on automating 100% ITC claims, resolving vendor GST mismatch penalties, and filing E-Way bills directly via API.',
      speakers: ['Chirag Dave (Staff Financial Core Engineer)'],
      seatsLeft: 'Virtual (Unlimited)',
      featured: false
    },
    {
      id: 4,
      title: 'Gems & Jewellery ERP Innovation Day',
      category: 'Workshops',
      date: 'January 16, 2027',
      time: '11:00 AM - 04:00 PM IST',
      location: 'Surat Diamond Bourse (SDB) Conference Auditorium, Surat',
      mode: 'In-Person Workshop',
      type: 'Industry Focus Day',
      desc: 'Specialized deep-dive into precious metal loss tracking, karigar labor slips, daily metal rate recalculation, and hallmarking compliance on the Nirghos Jewelry Suite.',
      speakers: ['Rajesh Sharma (CEO)', 'Pooja Mehta (Lead Consultant)'],
      seatsLeft: '32 Seats Left',
      featured: false
    },
    {
      id: 5,
      title: 'Healthcare & Clinical ERP Security & 21 CFR Part 11 Roundtable',
      category: 'Virtual Webinars',
      date: 'January 24, 2027',
      time: '04:00 PM - 05:30 PM IST',
      location: 'Virtual Roundtable via Nirghos Meet',
      mode: 'Virtual Webinar',
      type: 'Executive Roundtable',
      desc: 'Exploring immutable electronic records, digital signatures, patient privacy safeguards, and clinical batch validation for multi-specialty hospitals and pharma plants.',
      speakers: ['Dr. Ananya Sen (VP Compliance)'],
      seatsLeft: 'Exclusive Invite',
      featured: false
    },
    {
      id: 6,
      title: 'Textile Automation & Dyeing Batch Traceability Hands-On Camp',
      category: 'Workshops',
      date: 'February 05, 2027',
      time: '10:00 AM - 03:00 PM IST',
      location: 'Ahmedabad Management Association (AMA), Ahmedabad',
      mode: 'Hands-on Bootcamp',
      type: 'Technical Bootcamp',
      desc: 'Live deployment session on setting up grey fabric inspection, dyeing formulation recipes, roll-wise QR tagging, and wholesale dispatch workflows.',
      speakers: ['Pooja Mehta (Lead Consultant)', 'Vikram Patel (Head of Implementations)'],
      seatsLeft: '20 Seats Left',
      featured: false
    }
  ];

  const tabs = ['All', 'Conferences & Summits', 'Virtual Webinars', 'Workshops'];

  const filteredEvents = selectedTab === 'All'
    ? eventsList
    : eventsList.filter(e => e.category === selectedTab);

  const handleRegister = (event) => {
    setRegisteredEvent(event);
    showToast(`Pass reserved for "${event.title}"! Confirmation sent.`, 'success');
  };

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
            <span className="text-[#f25c05] font-semibold">Nirghos's Events</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f25c05]/15 border border-[#f25c05]/30 text-[#f25c05] text-xs font-black uppercase tracking-wider">
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Events & Summits</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Where Technology Meets <span className="text-[#f25c05]">Memorable Experiences.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Where technology meets memorable experiences, ERP summits, and innovation days. Connect with enterprise peers, explore live blueprint demonstrations, and learn directly from industry architects.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleRegister(eventsList[0])}
                className="px-6 py-3.5 rounded-full bg-[#f25c05] text-white font-bold text-sm hover:bg-[#d94f00] shadow-lg shadow-orange-500/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Reserve Free Summit Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book 1-on-1 Walkthrough</span>
                <Sparkles className="w-4 h-4 text-[#f25c05]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED FLAGSHIP SUMMIT BANNER                                        */}
      {/* ========================================================================= */}
      {eventsList[0] && selectedTab === 'All' && (
        <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 -mt-10 relative z-10">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-orange-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#f25c05] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-xs">
                  Flagship Event
                </span>
                <span className="px-3 py-1 rounded-full bg-orange-50 text-[#f25c05] border border-orange-200 text-xs font-bold">
                  {eventsList[0].seatsLeft}
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{eventsList[0].date}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                {eventsList[0].title}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {eventsList[0].desc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-semibold">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#f25c05]" />
                  <span>{eventsList[0].location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#f25c05]" />
                  <span>{eventsList[0].time}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleRegister(eventsList[0])}
                  className="px-6 py-3 rounded-full bg-slate-900 hover:bg-[#f25c05] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Register Free Ticket</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-xs text-slate-500">
                  Keynote Speakers: <span className="font-bold text-slate-800">Rajesh Sharma, Kuldip Bharda</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black">Why Attend Nirghos Summit?</h3>
              <ul className="space-y-2 text-xs text-orange-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Live demonstration of 25 industry modules</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Direct architectural Q&A with core engineers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Exclusive early access to Nirghos AI 3.0</span>
                </li>
              </ul>
              <div className="pt-2 text-[11px] font-mono uppercase tracking-wider text-orange-200">
                100% Free for Enterprise Leaders
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 3. EVENT CALENDAR & DIRECTORY WITH CATEGORY TABS                          */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-200 pb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Upcoming Schedule & Workshops
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select an event below to reserve your pass or join live online
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedTab === tab
                    ? 'bg-[#f25c05] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-orange-50 text-[#f25c05] font-bold text-[11px] border border-orange-200">
                    {evt.mode}
                  </span>
                  <span className="text-slate-500 font-semibold text-[11px]">
                    {evt.seatsLeft}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#f25c05] transition-colors leading-snug">
                  {evt.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {evt.desc}
                </p>

                <div className="pt-2 space-y-1.5 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#f25c05] shrink-0" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium truncate max-w-[150px]">
                  {evt.type}
                </span>

                <button
                  type="button"
                  onClick={() => handleRegister(evt)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#f25c05] text-white font-bold text-xs transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span>RSVP Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 4. HOST AN EVENT / PARTNER CALLOUT                                        */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-navy-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-xl">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-[#f25c05] px-3.5 py-1 rounded-full bg-white/10 border border-white/20">
              Co-Host or Sponsor
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Want Nirghos at Your Industry Summit?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We frequently sponsor and deliver technical keynotes at trade associations, manufacturing forums, and business clusters across India and globally.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-[#f25c05] hover:bg-[#d94f00] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Events Team</span>
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

export default Events;
