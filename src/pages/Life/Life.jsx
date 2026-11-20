import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  Sparkles, 
  Coffee, 
  Smile, 
  Users, 
  Award, 
  PartyPopper, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Sun, 
  Laptop, 
  Zap, 
  Compass, 
  Camera, 
  ShieldCheck,
  Heart,
  Globe2
} from 'lucide-react';
import DemoModal from '../../components/common/DemoModal';

export const Life = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const galleryItems = [
    {
      id: 1,
      category: 'Celebrations',
      title: 'Annual Innovation Gala & Hackathon Awards',
      tag: 'Annual Event',
      desc: 'Recognizing breakthroughs in autonomous AI and double-entry financial ledger architecture.',
      date: 'October 2026',
      icon: PartyPopper,
      badgeColor: 'bg-sky-50 text-[#0284c7] border-sky-200'
    },
    {
      id: 2,
      category: 'Culture',
      title: 'Monthly Tech Sprints & Demo Days',
      tag: 'Engineering Spirit',
      desc: 'Cross-functional teams demoing new polymorphic data models and UX micro-interactions.',
      date: 'Monthly Feature',
      icon: Laptop,
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      id: 3,
      category: 'Wellbeing',
      title: 'Wellness & Mindfulness Fridays',
      tag: 'Health & Balance',
      desc: 'Yoga sessions, mental health workshops, and guided meditation for sustainable high performance.',
      date: 'Every Friday',
      icon: Smile,
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    {
      id: 4,
      category: 'Outings',
      title: 'Monsoon Team Retreat in the Western Ghats',
      tag: 'Team Adventure',
      desc: 'Three days of trekking, campfire strategizing, and celebrating 500+ successful enterprise go-lives.',
      date: 'August 2026',
      icon: Compass,
      badgeColor: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      id: 5,
      category: 'Celebrations',
      title: 'Diwali & Cultural Festival Carnival',
      tag: 'Festival Joy',
      desc: 'Traditional sweets, rangoli competitions, family visits, and cultural celebrations across our hubs.',
      date: 'November 2026',
      icon: Sun,
      badgeColor: 'bg-amber-50 text-amber-600 border-amber-200'
    },
    {
      id: 6,
      category: 'Culture',
      title: 'Women in Enterprise Tech Mentorship',
      tag: 'Inclusion & Leadership',
      desc: 'Nurturing future engineering leaders through dedicated mentorship and technical fellowships.',
      date: 'Ongoing Initiative',
      icon: Heart,
      badgeColor: 'bg-rose-50 text-rose-600 border-rose-200'
    }
  ];

  const filteredItems = activeTab === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const perks = [
    {
      title: 'Flexible & Hybrid Synergy',
      desc: 'Work from our state-of-the-art innovation hubs in Bangalore & Surat, or collaborate flexibly from home.',
      icon: Laptop
    },
    {
      title: 'Comprehensive Healthcare',
      desc: 'Premium health insurance for you, your spouse, children, and parents, plus annual executive health checkups.',
      icon: ShieldCheck
    },
    {
      title: 'Continuous Learning Stipend',
      desc: '₹50,000 annual learning budget for technical certifications, conferences, books, and deep tech courses.',
      icon: Award
    },
    {
      title: 'Gourmet Cafes & Healthy Fuel',
      desc: 'Fresh artisan coffee, healthy snacks, cold-pressed juices, and fully stocked pantry in all offices.',
      icon: Coffee
    },
    {
      title: 'Generous Parental Leave',
      desc: 'Generous paid maternity & paternity leaves with supportive reintegration programs for new parents.',
      icon: HeartHandshake
    },
    {
      title: 'Quarterly Profit & Equity Bonus',
      desc: 'Meaningful stock options (ESOPs) and performance rewards ensuring every team member shares our scale.',
      icon: Zap
    }
  ];

  return (
    <div className="space-y-20 pb-28">
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER                                                            */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-br from-[#071328] via-[#0B1B3D] to-[#071328] text-white pt-14 pb-24 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-grid-pattern pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#0284c7]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-5">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#0284c7] font-semibold">Life @ Nirghos ERP</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0284c7]/15 border border-[#0284c7]/30 text-[#0284c7] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Life @ Nirghos ERP</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Where Deep Passion Meets <span className="text-[#0284c7]">Unstoppable Energy.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We bring passion to our work and energy to every business milestone we build. At Nirghos ERP, we believe exceptional software is built by energized, empowered, and genuinely happy people.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/careers"
                className="px-6 py-3.5 rounded-full bg-[#0284c7] text-white font-bold text-sm hover:bg-[#0369a1] shadow-lg shadow-orange-500/25 transition-all flex items-center gap-2"
              >
                <span>Join Our Growing Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/team"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <span>Meet Team Nirghos</span>
                <Users className="w-4 h-4 text-slate-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR CULTURE PILLARS                                                    */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-[#0284c7] px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200">
            Our DNA
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            The Principles That Define Everyday Life
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No corporate bureaucracy. No micromanagement. Just brilliant minds solving difficult enterprise challenges with freedom and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Radical Ownership</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every engineer, consultant, and designer has full autonomy over their projects. You are trusted to make big decisions that directly impact thousands of enterprises.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Empathy-First Collaboration</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We succeed as one unified unit. Knowledge is freely shared, mentorship happens daily, and failure is treated as a collaborative learning opportunity.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-900">Work-Life Harmony</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Great engineering requires a clear, rested mind. We advocate strict work-hour boundaries, regular breaks, and wellness initiatives that recharge your soul.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LIFE IN ACTION - MOMENTS & GALLERY                                     */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-10">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0284c7] mb-2">
                <Camera className="w-4 h-4" />
                <span>Life in Action</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900">
                Moments, Milestones & Celebrations
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              {['All', 'Celebrations', 'Culture', 'Wellbeing', 'Outings'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-[#0284c7] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                        <Icon className="w-6 h-6 text-[#0284c7]" />
                      </div>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-slate-900 leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span>{item.date}</span>
                    <span className="text-[#0284c7] font-bold">#LifeAtNirghos</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PERKS & WELLBEING                                                      */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-600 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
            Perks & Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How We Take Care of Our People
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From comprehensive family coverage to generous learning stipends, we invest in your long-term holistic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <div 
                key={perk.title}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0 border border-sky-100">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base font-black text-slate-900">
                    {perk.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CTA SECTION                                                            */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-slate-900 via-navy-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-xl">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-[#0284c7] px-3.5 py-1 rounded-full bg-white/10 border border-white/20">
              Join Our Tribe
            </span>
            <h3 className="text-2xl sm:text-4xl font-black">
              Ready to Do the Best Work of Your Life?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We are actively looking for creative engineers, ERP specialists, and customer advocates to shape the future of enterprise software.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap items-center gap-4">
            <Link
              to="/careers"
              className="px-8 py-4 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Explore Open Roles</span>
              <ArrowRight className="w-4 h-4" />
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

export default Life;
