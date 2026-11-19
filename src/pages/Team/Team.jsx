import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Sparkles, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  Mail, 
  Award,
  ShieldCheck,
  Zap,
  Building2
} from 'lucide-react';
import DemoModal from '../../components/common/DemoModal';

export const Team = () => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const teamMembers = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & Chief Executive Officer',
      dept: 'Leadership',
      exp: '20+ Years in Enterprise ERP',
      bio: 'Former principal ERP architect who led large-scale SAP and Oracle digital transformations across manufacturing and retail before founding Nirghos ERP.',
      avatarBg: 'from-orange-500 to-amber-600',
      initials: 'RS'
    },
    {
      name: 'Kuldip Bharda',
      role: 'Co-Founder & Chief Technology Officer',
      dept: 'Leadership',
      exp: 'Deeptech Systems & AI Pioneer',
      bio: 'Architected our polymorphic high-performance database layer, real-time OCR invoice parser, and double-entry financial core engine.',
      avatarBg: 'from-blue-600 to-indigo-700',
      initials: 'KB'
    },
    {
      name: 'Dr. Ananya Sen',
      role: 'VP of Industry Solutions & Compliance',
      dept: 'Leadership',
      exp: '15+ Years in Pharma & Healthcare',
      bio: 'Directs 21 CFR Part 11 validation, clinical audit trails, ISO 27001 data protection, and domain blueprints for our 25 industry modules.',
      avatarBg: 'from-emerald-600 to-teal-700',
      initials: 'AS'
    },
    {
      name: 'Vikram Patel',
      role: 'Head of Global Implementations',
      dept: 'ERP Implementation',
      exp: '200+ Enterprise Go-Lives',
      bio: 'Ensures our benchmark <14-day go-live standard across manufacturing, textile mills, and EPC engineering firms without business disruption.',
      avatarBg: 'from-purple-600 to-violet-800',
      initials: 'VP'
    },
    {
      name: 'Sneha Kulkarni',
      role: 'Principal AI & OCR Research Lead',
      dept: 'Engineering & AI',
      exp: 'Ex-Google Research Fellow',
      bio: 'Leads our Document AI lab, training localized multi-lingual vision models that achieve 99.8% field extraction accuracy on tax invoices and challans.',
      avatarBg: 'from-rose-500 to-pink-600',
      initials: 'SK'
    },
    {
      name: 'Amitav Roy',
      role: 'Senior Distributed Database Architect',
      dept: 'Engineering & AI',
      exp: '12+ Years High-Concurrency Systems',
      bio: 'Engineered the multi-tenant transactional engine guaranteeing zero cross-organization leakage and sub-10ms response times.',
      avatarBg: 'from-sky-600 to-cyan-700',
      initials: 'AR'
    },
    {
      name: 'Pooja Mehta',
      role: 'Lead ERP Solutions Consultant (Textiles & Retail)',
      dept: 'Customer Success & Consulting',
      exp: '10+ Years Domain Specialist',
      bio: 'Translates nuanced business logic—such as style-color-size matrices and dye-lot batch tracking—into seamless automated ERP workflows.',
      avatarBg: 'from-amber-500 to-orange-600',
      initials: 'PM'
    },
    {
      name: 'Rohan Desai',
      role: 'VP of Enterprise Sales & Partnerships',
      dept: 'Leadership',
      exp: 'Scaled B2B SaaS from $0 to $20M ARR',
      bio: 'Partners with mid-market enterprises and conglomerates to architect modern ERP modernization roadmaps that replace aging on-premise monoliths.',
      avatarBg: 'from-indigo-600 to-blue-700',
      initials: 'RD'
    },
    {
      name: 'Neha Joshi',
      role: 'Head of Product Design & UX',
      dept: 'Engineering & AI',
      exp: 'Red Dot Design Award Winner',
      bio: 'Reimagines enterprise UX so that shopfloor workers, accountants, and CEOs can navigate complex workflows with zero cognitive fatigue.',
      avatarBg: 'from-fuchsia-600 to-purple-700',
      initials: 'NJ'
    },
    {
      name: 'Chirag Dave',
      role: 'Staff GST & Financial Core Engineer',
      dept: 'Engineering & AI',
      exp: 'Author of Automated Tax Reconciliation Engine',
      bio: 'Manages direct integrations with GSTN, E-Way Bill portals, and automated 2-way reconciliations for Indian and global VAT jurisdictions.',
      avatarBg: 'from-emerald-600 to-green-700',
      initials: 'CD'
    },
    {
      name: 'Meera Nambiar',
      role: 'Customer Success Director',
      dept: 'Customer Success & Consulting',
      exp: '99.2% Retention Track Record',
      bio: 'Leads our 24/7 client operations desk, ensuring every client has dedicated domain experts on standby and proactive quarterly health checks.',
      avatarBg: 'from-teal-600 to-cyan-700',
      initials: 'MN'
    },
    {
      name: 'Hardik Solanki',
      role: 'Lead DevOps & Cloud Security Engineer',
      dept: 'Engineering & AI',
      exp: 'Kubernetes & SOC 2 Specialist',
      bio: 'Guarantees our 99.99% uptime cloud SLA with automated multi-region failovers, immutable backup snapshots, and zero-downtime updates.',
      avatarBg: 'from-violet-600 to-indigo-800',
      initials: 'HS'
    }
  ];

  const departments = ['All', 'Leadership', 'Engineering & AI', 'ERP Implementation', 'Customer Success & Consulting'];

  const filteredTeam = selectedDept === 'All'
    ? teamMembers
    : teamMembers.filter(m => m.dept === selectedDept);

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
            <span className="text-[#f25c05] font-semibold">Team Nirghos</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f25c05]/15 border border-[#f25c05]/30 text-[#f25c05] text-xs font-black uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Team Nirghos</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              A Team of <span className="text-[#f25c05]">Believers, Thinkers</span> & Creators.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We are a passionate collective of ERP architects, deeptech software engineers, industry domain veterans, and customer champions united by one audacious mission: making enterprise operations effortlessly intelligent.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/careers"
                className="px-6 py-3.5 rounded-full bg-[#f25c05] text-white font-bold text-sm hover:bg-[#d94f00] shadow-lg shadow-orange-500/25 transition-all flex items-center gap-2"
              >
                <span>Join Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Demo</span>
                <Sparkles className="w-4 h-4 text-[#f25c05]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TEAM STATS & OVERVIEW                                                  */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 -mt-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl">
          <div className="text-center p-4 border-r last:border-none border-slate-100">
            <div className="text-3xl sm:text-4xl font-black text-[#f25c05]">120+</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Engineers & Creators</div>
          </div>
          <div className="text-center p-4 border-r last:border-none border-slate-100">
            <div className="text-3xl sm:text-4xl font-black text-sky-600">25+</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Industry Blueprints</div>
          </div>
          <div className="text-center p-4 border-r last:border-none border-slate-100">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">40%</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Women in Leadership</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl sm:text-4xl font-black text-indigo-600">12+ Yrs</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Avg Enterprise Domain Exp</div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TEAM MEMBERS DIRECTORY WITH DEPT FILTERS                               */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-[#f25c05] mb-2">
              People Behind Nirghos
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Meet Our Specialists
            </h2>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-[#f25c05] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeam.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-4">
                {/* Initials Avatar */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.avatarBg} text-white font-black text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                  {member.initials}
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#f25c05] transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-bold text-[#f25c05] mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-0.5">
                    {member.exp}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">
                  {member.dept}
                </span>
                <span className="text-[#f25c05] font-bold hover:underline cursor-pointer flex items-center gap-1">
                  <span>Connect</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 4. CAREERS CALLOUT                                                        */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-slate-900 via-navy-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-xl">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-[#f25c05] px-3.5 py-1 rounded-full bg-white/10 border border-white/20">
              We Are Hiring
            </span>
            <h3 className="text-2xl sm:text-4xl font-black">
              Want to Build the Future of ERP With Us?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We are expanding across Engineering, Distributed Systems, AI Research, ERP Solutions Consulting, and Product Design.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/careers"
              className="px-8 py-4 rounded-full bg-[#f25c05] hover:bg-[#d94f00] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>View Open Roles</span>
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

export default Team;
