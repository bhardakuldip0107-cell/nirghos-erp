import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Heart, 
  Zap, 
  ShieldCheck, 
  GraduationCap, 
  DollarSign, 
  Search, 
  Send, 
  X, 
  Building2, 
  ChevronRight,
  TrendingUp,
  Cpu,
  Coffee,
  Globe2
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';

export const Careers = () => {
  const { showToast } = useDemo();
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Application Modal state
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [applyForm, setApplyForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    currentCompany: '',
    portfolioUrl: '',
    noticePeriod: '30 Days',
    resumeUrl: '',
    coverNote: ''
  });

  const departments = [
    'All',
    'Engineering & AI',
    'ERP Implementation',
    'Product & Design',
    'Sales & Growth'
  ];

  const jobsList = [
    {
      id: 'job-1',
      title: 'Senior Full-Stack ERP Engineer',
      dept: 'Engineering & AI',
      location: 'Ahmedabad (Hybrid)',
      type: 'Full-Time',
      experience: '3 - 6 Years',
      salary: '₹14 - 24 LPA + ESOPs',
      desc: 'Architect high-throughput double-entry general ledger engines, multi-tenant database partitioning, and sub-second inventory APIs using React, Node.js, and PostgreSQL.',
      skills: ['React.js', 'Node.js', 'PostgreSQL', 'Redis', 'Microservices Architecture'],
      urgency: 'Immediate'
    },
    {
      id: 'job-2',
      title: 'AI Computer Vision & Retail Analytics Specialist',
      dept: 'Engineering & AI',
      location: 'Ahmedabad / Remote',
      type: 'Full-Time',
      experience: '2 - 5 Years',
      salary: '₹12 - 20 LPA',
      desc: 'Lead the Nirghos Vision (AlphaCam 360) CCTV video intelligence pipeline: real-time footfall counting, customer dwell time heatmaps, and edge AI video inference for retail showrooms.',
      skills: ['Python', 'OpenCV', 'PyTorch / TensorFlow', 'YOLO / DeepSort', 'Docker'],
      urgency: 'New'
    },
    {
      id: 'job-3',
      title: 'ERP Solutions Architect (Apparel & Lifestyle Suite)',
      dept: 'ERP Implementation',
      location: 'Ahmedabad / Surat',
      type: 'Full-Time',
      experience: '3 - 7 Years',
      salary: '₹10 - 18 LPA',
      desc: 'Spearhead client blueprinting, Style-Color-Size matrix setup, and digital job card tracking for large garment manufacturers and apparel distributors across Gujarat.',
      skills: ['Apparel ERP', 'Barcoding & RFID', 'Production Planning (PP)', 'GST Compliance'],
      urgency: 'Hot'
    },
    {
      id: 'job-4',
      title: 'Jewellery ERP Implementation Consultant',
      dept: 'ERP Implementation',
      location: 'Ahmedabad / Mumbai',
      type: 'Full-Time',
      experience: '2 - 6 Years',
      salary: '₹9 - 16 LPA',
      desc: 'Work directly with bullion and jewellery showroom owners to configure Hallmark HUID workflows, Karigar loss/wastage management, and live gold/silver rate-cut ledgers.',
      skills: ['Jewellery Domain', 'Hallmarking HUID', 'Karigar Accounting', 'Bullion Ledger'],
      urgency: null
    },
    {
      id: 'job-5',
      title: 'Lead UI/UX Product Designer (Enterprise Systems)',
      dept: 'Product & Design',
      location: 'Ahmedabad (Hybrid)',
      type: 'Full-Time',
      experience: '3 - 6 Years',
      salary: '₹12 - 22 LPA',
      desc: 'Own the Nirghos Design System. Transform dense ERP data, cashier POS touchscreens, and executive telemetry dashboards into intuitive, joyful, lightning-fast web and mobile user interfaces.',
      skills: ['Figma', 'Enterprise Design Systems', 'User Research', 'Interactive Prototyping'],
      urgency: 'New'
    },
    {
      id: 'job-6',
      title: 'Enterprise Account Executive (SaaS Sales)',
      dept: 'Sales & Growth',
      location: 'Ahmedabad / Delhi NCR',
      type: 'Full-Time',
      experience: '2 - 5 Years',
      salary: '₹8 - 15 LPA + Uncapped Incentive',
      desc: 'Engage founders, managing directors, and CFOs of growing mid-market enterprises. Deliver tailored consultative ERP demos, manage pipeline, and close 6-figure SaaS subscriptions.',
      skills: ['B2B SaaS Sales', 'ERP Consultative Selling', 'CRM Pipeline', 'Executive Communication'],
      urgency: 'Immediate'
    },
    {
      id: 'job-7',
      title: 'WhatsApp Business API & Automation Specialist',
      dept: 'Engineering & AI',
      location: 'Ahmedabad / Remote',
      type: 'Full-Time',
      experience: '1 - 3 Years',
      salary: '₹7 - 12 LPA',
      desc: 'Build high-reliability automated WhatsApp workflows: instantaneous GST invoice dispatch, interactive payment reminder bots, and catalog browsing using Meta Cloud API webhooks.',
      skills: ['WhatsApp Cloud API', 'Webhooks', 'Node.js', 'REST APIs', 'Bot Frameworks'],
      urgency: null
    }
  ];

  const filteredJobs = jobsList.filter(job => {
    const matchesDept = selectedDepartment === 'All' || job.dept === selectedDepartment;
    const matchesSearch = !searchQuery.trim() || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.desc.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  const handleOpenApplyModal = (job) => {
    setSelectedJob(job);
    setIsSubmitted(false);
    setIsApplyModalOpen(true);
  };

  const handleCloseApplyModal = () => {
    setIsApplyModalOpen(false);
    setSelectedJob(null);
    setIsSubmitted(false);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!applyForm.fullName || !applyForm.email || !applyForm.phone || !applyForm.portfolioUrl) {
      showToast('Please fill in all mandatory fields.', 'error');
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      showToast(`Application submitted! Our recruitment team will review your profile for ${selectedJob?.title || 'the role'}.`, 'success');
      setTimeout(() => {
        handleCloseApplyModal();
        setApplyForm({
          fullName: '',
          email: '',
          phone: '',
          experience: '',
          currentCompany: '',
          portfolioUrl: '',
          noticePeriod: '30 Days',
          resumeUrl: '',
          coverNote: ''
        });
      }, 1000);
    }, 1200);
  };

  return (
    <div className="space-y-16 pb-24 bg-slate-50/60 min-h-screen">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-b from-navy-950 via-slate-950 to-navy-950 text-white pt-14 pb-20 border-b border-navy-800 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#f25c05] font-semibold">Join Our Team</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 text-[#f25c05] border border-orange-500/30 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#f25c05]" />
              <span>We&apos;re Hiring • 7 Open Roles</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Build the Future of <span className="bg-gradient-to-r from-brand-400 via-sky-300 to-[#f25c05] bg-clip-text text-transparent">Enterprise AI & ERP</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              At Nirghos Technologies, we engineer mission-critical cloud ERP suites, AI retail vision, and automated commerce tools that power thousands of apparel, jewellery, manufacturing, and commerce enterprises across India.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a 
                href="#open-roles" 
                className="px-6 py-3 rounded-full bg-[#f25c05] hover:bg-[#d94f00] text-white font-extrabold text-sm shadow-lg shadow-orange-500/25 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#culture" 
                className="px-6 py-3 rounded-full bg-navy-850 hover:bg-navy-800 text-slate-200 hover:text-white font-bold text-sm border border-navy-700/80 transition-all flex items-center gap-2"
              >
                <span>Our Culture & Perks</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-8 border-t border-navy-800/80">
            <div className="p-4 rounded-2xl bg-navy-900/60 border border-navy-800/80">
              <p className="text-2xl sm:text-3xl font-black text-white">50+</p>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">Minds Building Nirghos</p>
            </div>
            <div className="p-4 rounded-2xl bg-navy-900/60 border border-navy-800/80">
              <p className="text-2xl sm:text-3xl font-black text-[#f25c05]">₹1,000Cr+</p>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">Client GMV Handled</p>
            </div>
            <div className="p-4 rounded-2xl bg-navy-900/60 border border-navy-800/80">
              <p className="text-2xl sm:text-3xl font-black text-brand-400">100%</p>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">Health & ESOP Options</p>
            </div>
            <div className="p-4 rounded-2xl bg-navy-900/60 border border-navy-800/80">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">4.9 / 5</p>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">Culture & Work Life Rating</p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHY WORK WITH US (PERKS & CULTURE)                                     */}
      {/* ========================================================================= */}
      <section id="culture" className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#f25c05]">Culture & Benefits</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why You&apos;ll Love Working at Team Nirghos
          </h2>
          <p className="text-sm text-slate-600">
            We offer more than just a job. We offer ownership, cutting-edge engineering problems, and an environment where high performers thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
              Cutting-Edge Tech Stack
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Work with React, Vite, Node.js, Python AI/ML pipelines, Edge computer vision, and high-frequency PostgreSQL clustering. Zero legacy bloat.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f25c05] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#f25c05] transition-colors">
              Massive Real-World Impact
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Your code will directly drive factory floors, jewellery showrooms, and retail stores doing billions in commerce every day across India.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
              Top-Tier Compensation & ESOPs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              We reward talent aggressively with top-percentile salary bands, transparent performance bonuses, and long-term equity participation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
              ₹50,000 Learning Budget
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Annual reimbursement for books, specialized technical courses, cloud certifications, and tickets to top developer conferences.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Comprehensive Family Health
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Full medical insurance covering you, your spouse, and parents, plus 100% paid wellness and mental health consultation access.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-500/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
              Vibrant Office & Hybrid Flexibility
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Modern headquarters in Ahmedabad with unlimited premium coffee, catered snacks, team outings, and flexible hybrid remote policies.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OPEN POSITIONS SECTION                                                 */}
      {/* ========================================================================= */}
      <section id="open-roles" className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 pt-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#f25c05]">Explore Opportunities</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-1">
              Current Open Positions ({filteredJobs.length})
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Find your next career chapter and apply in under 2 minutes.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search roles, skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-xs sm:text-sm bg-white"
            />
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedDepartment === dept
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Jobs List Grid */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#f25c05]/60 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
              >
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-700 font-bold text-xs border border-sky-200">
                      {job.dept}
                    </span>
                    {job.urgency && (
                      <span className="px-2 py-0.5 rounded-md bg-orange-50 text-[#f25c05] font-black text-[10px] uppercase border border-orange-200">
                        {job.urgency}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#f25c05] transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed max-w-4xl">
                      {job.desc}
                    </p>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {job.skills.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Metadata Strip */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      {job.experience}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5 text-slate-700">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                      {job.salary}
                    </span>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="shrink-0 flex items-center">
                  <button
                    onClick={() => handleOpenApplyModal(job)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-900 hover:bg-[#f25c05] text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-md"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-16 text-center bg-white rounded-2xl border border-slate-200">
              <p className="text-base font-bold text-slate-800">No positions match your search filters</p>
              <p className="text-xs text-slate-500 mt-1">Try resetting the department filter or search query.</p>
              <button
                onClick={() => { setSelectedDepartment('All'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-[#f25c05] underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 4. HIRING PROCESS (TRANSPARENT 4 STEPS)                                   */}
      {/* ========================================================================= */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 pt-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#f25c05]">Zero Guesswork</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our 4-Step Transparent Hiring Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We respect your time. From first application to final offer takes an average of 7 to 10 days.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 relative space-y-2">
              <span className="text-3xl font-black text-[#f25c05]">01</span>
              <h4 className="text-base font-bold text-slate-900">Application Review</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our talent team reviews your GitHub, LinkedIn, or portfolio within 24-48 business hours.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 relative space-y-2">
              <span className="text-3xl font-black text-brand-600">02</span>
              <h4 className="text-base font-bold text-slate-900">Culture & Intro Call</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A 30-minute friendly video conversation to understand your career aspirations and mutual fit.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 relative space-y-2">
              <span className="text-3xl font-black text-emerald-600">03</span>
              <h4 className="text-base font-bold text-slate-900">Practical Deep-Dive</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A live coding challenge or ERP case study discussion focused on solving realistic business problems.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 relative space-y-2">
              <span className="text-3xl font-black text-purple-600">04</span>
              <h4 className="text-base font-bold text-slate-900">Offer & Welcome</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transparent salary breakdown, equity paperwork, and welcoming you aboard Team Nirghos!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. GENERAL INQUIRY BANNER                                                 */}
      {/* ========================================================================= */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 text-white border border-navy-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Don&apos;t see your exact role listed?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We are constantly seeking outstanding builders, engineers, and product minds. Email your resume and introduction directly to our recruitment desk.
            </p>
          </div>
          <a
            href="mailto:careers@nirghoserp.com"
            className="px-6 py-3 rounded-full bg-white text-navy-950 font-extrabold text-sm hover:bg-slate-100 transition-all shadow-md shrink-0 text-center"
          >
            Email: careers@nirghoserp.com
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INTERACTIVE JOB APPLICATION MODAL                                      */}
      {/* ========================================================================= */}
      {isApplyModalOpen && selectedJob && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
          onClick={handleCloseApplyModal}
        >
          <div 
            className="relative w-full max-w-[580px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden p-6 sm:p-8 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseApplyModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6 pt-1">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#f25c05] px-2 py-0.5 rounded bg-orange-50 border border-orange-200">
                {selectedJob.dept}
              </span>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-2">
                Apply for: {selectedJob.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {selectedJob.location} • {selectedJob.experience} • {selectedJob.type}
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900">Application Submitted!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
                    Thank you, <strong className="text-slate-900">{applyForm.fullName}</strong>. Our recruiting team will review your profile and reach out on <strong className="text-slate-900">{applyForm.phone}</strong>.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Patel"
                    value={applyForm.fullName}
                    onChange={(e) => setApplyForm({ ...applyForm, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-900"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={applyForm.email}
                      onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={applyForm.phone}
                      onChange={(e) => setApplyForm({ ...applyForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-900"
                    />
                  </div>
                </div>

                {/* Experience & Notice Period */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Total Experience <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 4 Years"
                      value={applyForm.experience}
                      onChange={(e) => setApplyForm({ ...applyForm, experience: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Notice Period
                    </label>
                    <select
                      value={applyForm.noticePeriod}
                      onChange={(e) => setApplyForm({ ...applyForm, noticePeriod: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 bg-white text-slate-900 cursor-pointer"
                    >
                      <option value="Immediate">Immediate Joiner</option>
                      <option value="15 Days">15 Days</option>
                      <option value="30 Days">30 Days (1 Month)</option>
                      <option value="60 Days">60 Days (2 Months)</option>
                      <option value="Serving Notice">Serving Notice</option>
                    </select>
                  </div>
                </div>

                {/* Portfolio / LinkedIn & Resume Link */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      LinkedIn / GitHub URL <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://linkedin.com/in/..."
                      value={applyForm.portfolioUrl}
                      onChange={(e) => setApplyForm({ ...applyForm, portfolioUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Resume Drive Link
                    </label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/..."
                      value={applyForm.resumeUrl}
                      onChange={(e) => setApplyForm({ ...applyForm, resumeUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-900"
                    />
                  </div>
                </div>

                {/* Cover note */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Why do you want to join Team Nirghos?
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Briefly tell us what excites you about this role..."
                    value={applyForm.coverNote}
                    onChange={(e) => setApplyForm({ ...applyForm, coverNote: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-900 resize-none"
                  ></textarea>
                </div>

                {/* Submit Application Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#f25c05] hover:bg-[#d94f00] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default Careers;
