import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Target, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Globe2, 
  Layers, 
  ChevronRight,
  TrendingUp,
  Cpu,
  Award,
  Calendar,
  Lock,
  Zap,
  PhoneCall,
  Check,
  FileCheck,
  Briefcase,
  Play
} from 'lucide-react';
import AnimatedCounter from '../../components/common/AnimatedCounter';
import DemoModal from '../../components/common/DemoModal';

export const About = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Executive Leadership Team
  const leadershipTeam = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & Chief Executive Officer',
      exp: '20+ Years in Enterprise ERP & Industrial Automation',
      bio: 'Former principal ERP architect who led enterprise digital transformations across manufacturing, textiles, and global retail supply chains before founding Nirghos ERP.',
      avatarBg: 'from-orange-500 to-amber-600',
      initials: 'RS'
    },
    {
      name: 'Kuldip Bharda',
      role: 'Co-Founder & Chief Technology Officer',
      exp: 'Deeptech Systems Architect & AI Specialist',
      bio: 'Specialist in distributed polymorphic databases, AI vision for document processing, and ultra-high-availability financial ledgers designed for mission-critical operations.',
      avatarBg: 'from-blue-600 to-indigo-700',
      initials: 'KB'
    },
    {
      name: 'Dr. Ananya Sen',
      role: 'VP of Industry Solutions & Compliance',
      exp: '15+ Years in Pharma & Healthcare Regulation',
      bio: 'Oversees 21 CFR Part 11 validation, clinical audit trails, ISO 27001 certifications, and industry-tailored regulatory frameworks across our 25 industry modules.',
      avatarBg: 'from-emerald-600 to-teal-700',
      initials: 'AS'
    },
    {
      name: 'Vikram Patel',
      role: 'Head of Global Implementations & Success',
      exp: 'Over 200 Successful Enterprise ERP Go-Lives',
      bio: 'Dedicated to achieving the industry-leading <14-day average go-live time, ensuring zero downtime and 100% data fidelity during migration from legacy ERPs.',
      avatarBg: 'from-purple-600 to-violet-800',
      initials: 'VP'
    }
  ];

  // Company Milestones
  const milestones = [
    {
      year: '2020',
      title: 'Foundation & Core Ledger Engine',
      description: 'Engineered an immutable, double-entry financial core with native GST compliance and multi-tenant security architecture.'
    },
    {
      year: '2022',
      title: '25 Industry Blueprints Rollout',
      description: 'Expanded specialized workflows for Manufacturing, Textiles, Gems & Jewellery, Healthcare, EPC, and Chemical processing.'
    },
    {
      year: '2024',
      title: 'Nirghos AI Intelligence Suite',
      description: 'Integrated real-time OCR invoice parsing, predictive stock replenishment, and autonomous reconciliation algorithms.'
    },
    {
      year: '2026',
      title: 'Next-Gen Enterprise Cloud',
      description: 'Serving 500+ high-growth enterprises worldwide with 99.99% uptime SLA, multi-currency support, and instantaneous mobile sync.'
    }
  ];

  // Enterprise Certifications
  const certifications = [
    {
      title: 'ISO 27001:2022',
      desc: 'Information Security Management System Certified',
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      title: 'ISO 9001:2015',
      desc: 'Quality Management Standards & Process Excellence',
      icon: Award,
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      title: 'SOC 2 Type II',
      desc: 'Rigorous Independent Security & Confidentiality Audit',
      icon: Lock,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
    },
    {
      title: 'GST & E-Invoicing Authorized',
      desc: 'Real-time GSTN, E-Way Bill & Automated Tax Reconciliation',
      icon: FileCheck,
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      title: '21 CFR Part 11 Compliant',
      desc: 'FDA Validated Electronic Records & Digital Signatures',
      icon: CheckCircle2,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200'
    },
    {
      title: '99.99% Uptime Cloud SLA',
      desc: 'Multi-Region Failover & Automated Encrypted Backups',
      icon: Zap,
      color: 'text-rose-600 bg-rose-50 border-rose-200'
    }
  ];

  return (
    <div className="space-y-16 pb-28">
      
      {/* ========================================================================= */}
      {/* 1. HERO & ABOUT ALPHA SECTION (EXACT MATCH TO USER SCREENSHOT)            */}
      {/* ========================================================================= */}
      <section className="pt-8 pb-8 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-8 font-medium">
            <Link to="/" className="hover:text-[#f25c05] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-bold">About Us</span>
          </div>

          {/* Exact 2-Column Layout from Screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Team Image with Floating 25+ Year Experience & Play Button */}
            <div className="lg:col-span-6 relative pb-8 sm:pb-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl bg-slate-50 group">
                <img 
                  src="/about-team.jpg" 
                  alt="Alpha ERP Solutions Leadership Team" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating 25+ Year Experience & Video Play Card */}
              <div className="absolute -bottom-2 sm:-bottom-4 left-4 sm:left-6 right-4 sm:right-auto sm:w-80 bg-white rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.12),0_0_1px_1px_rgba(0,0,0,0.05)] border border-slate-100 p-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  {/* Orange Award Ribbon Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-[#f25c05] flex items-center justify-center shrink-0">
                    <Award className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
                      25+
                    </span>
                    <span className="text-xs font-semibold text-slate-500 mt-1">
                      Year Experience
                    </span>
                  </div>
                </div>

                {/* Sky Blue Circular Play Button */}
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-11 h-11 rounded-full bg-sky-100 hover:bg-sky-200 text-sky-600 flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 shadow-sm cursor-pointer ml-3 shrink-0"
                  title="Watch Company Overview / Schedule Demo"
                  aria-label="Play video"
                >
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </button>
              </div>
            </div>

            {/* Right Column: About Alpha, Line, Text, Know More Button */}
            <div className="lg:col-span-6 space-y-4 text-left">
              
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight">
                About Alpha
              </h1>

              {/* Orange Horizontal Accent Line */}
              <div className="w-16 h-1 bg-[#f25c05] rounded-full my-3"></div>

              {/* Exact Description Paragraph */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                Alpha ERP Solutions Pvt. Ltd. provides absolute ERP, Desktop, Mobile application and Cloud Based Solutions for the Retailers, Distributors, and Manufacturers to enhance them with advanced technology and contains expertise of 25 years. We are accomplished to deliver quality software products and solutions. We have successfully served 5,000+ clients across 400+ cities, including major cities and small towns in Gujarat, Rajasthan, Maharashtra, Madhya Pradesh, Delhi, Hyderabad, and Haryana, supported by a strong team of 250+ employees.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0060b9] hover:bg-[#004f9e] text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Book Free Demo
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-bold text-sm transition-all"
                >
                  Contact Us
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE PROBLEM WE SOLVE & PLATFORM BY THE NUMBERS                         */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#f25c05] text-xs font-extrabold uppercase tracking-wider border border-orange-200">
              <Building2 className="w-3.5 h-3.5" /> The Problem We Solve
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Why Multi-Industry Enterprises Struggle With Legacy ERPs
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              For decades, enterprises have faced a costly dilemma. Traditional monolithic ERP software treats a multi-specialty hospital ward, an apparel garment plant, a high-precision diamond manufacturing bench, and an EPC project site as if they were identical retail shops.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To compensate, companies either stitch together 10 different fragmented third-party apps or spend millions on fragile custom code that breaks every time the vendor pushes a system patch.
            </p>

            <div className="p-6 rounded-3xl bg-orange-50/70 border border-orange-200 text-slate-900 space-y-2">
              <h4 className="font-extrabold text-sm flex items-center gap-2 text-[#f25c05]">
                <Sparkles className="w-4 h-4" /> The Nirghos ERP Native Architecture
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                We engineered a modular polymorphic data layer that natively injects specialized industry taxonomies, bill of materials calculations, multi-stage batch tracing, and regional compliance standards directly on top of an immutable double-entry financial core.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/industries"
                className="px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition flex items-center gap-2 shadow-sm"
              >
                <span>Browse All 25 Industries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-2xl border border-slate-300 text-slate-700 hover:text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-slate-500" />
                <span>Talk to Solutions Expert</span>
              </Link>
            </div>
          </div>

          {/* Right Stats & Highlights Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#071328] to-[#0B1B3D] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl space-y-6">
            <h3 className="text-xl font-black border-b border-slate-800 pb-4 flex items-center justify-between">
              <span>Platform by the Numbers</span>
              <span className="text-xs font-mono font-bold text-[#f25c05] uppercase tracking-wider">Verified Scale</span>
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#050e1f] border border-slate-800">
                <div className="text-3xl font-black text-[#f25c05] font-mono">
                  <AnimatedCounter target={25} suffix="+" duration={1800} />
                </div>
                <div className="text-xs text-slate-400 mt-1 font-semibold">Industry Blueprints</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#050e1f] border border-slate-800">
                <div className="text-3xl font-black text-sky-400 font-mono">
                  <AnimatedCounter target={150} suffix="+" duration={2000} />
                </div>
                <div className="text-xs text-slate-400 mt-1 font-semibold">Modular Microservices</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#050e1f] border border-slate-800">
                <div className="text-3xl font-black text-emerald-400 font-mono">
                  <AnimatedCounter target={99.99} decimals={2} suffix="%" duration={2200} />
                </div>
                <div className="text-xs text-slate-400 mt-1 font-semibold">Cloud SLA Uptime</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#050e1f] border border-slate-800">
                <div className="text-3xl font-black text-amber-400 font-mono">
                  &lt; <AnimatedCounter target={14} suffix=" Days" duration={1600} />
                </div>
                <div className="text-xs text-slate-400 mt-1 font-semibold">Avg Go-Live Time</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#050e1f]/80 border border-slate-800/80 space-y-2 text-xs">
              <span className="font-extrabold text-[#f25c05] uppercase tracking-wider block">
                Enterprise Assurance
              </span>
              <p className="text-slate-300 leading-relaxed font-normal">
                End-to-end ISO 27001 data protection, automated daily encrypted backups, SOC 2 Type II audit conformity, and GSTN auto-filing APIs built-in.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE ARCHITECTURAL PRINCIPLES (4 PILLARS)                              */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 py-24 border-y border-slate-200 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-14 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-[#f25c05] border border-orange-200 text-xs font-black uppercase tracking-wider shadow-xs">
              <Sparkles className="w-4 h-4 text-[#f25c05]" />
              <span>Guiding Engineering Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Our Core Architectural Values
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Every architectural decision in Nirghos ERP is anchored in four non-negotiable principles, ensuring zero legacy bloat, enterprise-grade security, and maximum operational velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Radical Domain Specificity */}
            <div className="bg-white rounded-3xl p-7 border-2 border-slate-200 hover:border-[#f25c05] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#f25c05] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">
                  PILLAR // 01
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#f25c05] transition-colors">
                  Radical Domain Specificity
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We never force you to bend unique business operations to fit generic software. Our polymorphic data schema natively adapts to your industry workflows.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>25 Built-in Industry Blueprints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Zero bespoke custom code debt</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-[#f25c05]">
                100% Native Blueprints
              </div>
            </div>

            {/* Card 2: Uncompromising Data Integrity */}
            <div className="bg-white rounded-3xl p-7 border-2 border-slate-200 hover:border-indigo-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">
                  PILLAR // 02
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Uncompromising Integrity
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Double-entry financial ledgers, immutable audit logs, and strict RBAC protect your enterprise from internal errors and compliance liabilities.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Immutable general ledger entries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>AES-256 military grade encryption</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-indigo-600">
                SOC 2 & ISO 27001 Ready
              </div>
            </div>

            {/* Card 3: Lightning Speed to Value */}
            <div className="bg-white rounded-3xl p-7 border-2 border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">
                  PILLAR // 03
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Lightning Speed to Value
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  With turnkey industry templates, automated master-data ingestion, and guided setup, deployments take under 14 days rather than months.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>&lt; 14 Days average go-live time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Instant legacy data migration tool</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-600">
                &lt; 14-Day Deployment SLA
              </div>
            </div>

            {/* Card 4: AI & Autonomous Intelligence */}
            <div className="bg-white rounded-3xl p-7 border-2 border-slate-200 hover:border-sky-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">
                  PILLAR // 04
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                  AI-First Autonomous Core
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deeply embedded OCR for invoice parsing, predictive stock out alerting, and automated GST reconciliation save thousands of labor hours.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Zero manual invoice typing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Autonomous cashflow forecasting</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-sky-600">
                Embedded Machine Learning
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR MILESTONES & JOURNEY TIMELINE                                      */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-black uppercase tracking-wider border border-slate-300">
            <Calendar className="w-3.5 h-3.5 text-[#f25c05]" />
            <span>Our Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Key Milestones in Our Evolution
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From our initial release to powering mission-critical operations for over 500 enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item, idx) => (
            <div 
              key={item.year}
              className="relative p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-[#f25c05] font-mono font-black text-sm border border-orange-200">
                {item.year}
              </div>
              <h4 className="text-base font-black text-slate-900">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXECUTIVE LEADERSHIP TEAM                                              */}
      {/* ========================================================================= */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-[#f25c05] text-xs font-black uppercase tracking-wider border border-orange-200">
              <Users className="w-3.5 h-3.5 text-[#f25c05]" />
              <span>Leadership & Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Meet the Leaders Behind Nirghos ERP
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A leadership team combining over 60 years of collective experience across enterprise software, industrial automation, and deep tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member) => (
              <div 
                key={member.name}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Avatar with Initials */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.avatarBg} text-white font-black text-xl flex items-center justify-center shadow-md`}>
                    {member.initials}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-[#f25c05] mt-0.5">
                      {member.role}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-400 mt-1">
                      {member.exp}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                  <span className="flex items-center gap-1.5 text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Executive</span>
                  </span>
                  <span className="text-[#f25c05] hover:underline cursor-pointer">
                    Connect →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ENTERPRISE CERTIFICATIONS & COMPLIANCE                                 */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-black uppercase tracking-wider border border-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Enterprise Security & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Certified to the Highest Global Standards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Your sensitive enterprise data is safeguarded by bank-grade encryption and audited security practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div 
                key={cert.title}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${cert.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-black text-slate-900">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CAREERS TEASER                                                         */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-navy-950 to-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-300 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-[#f25c05]" />
              <span>Join Our Mission</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              Help Build the Next Era of Enterprise Intelligence
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We are expanding across Engineering, AI Research, ERP Solutions Consulting, and Product Design. Explore our open positions and make a tangible global impact.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <Link
              to="/careers"
              className="px-6 py-3.5 rounded-full bg-[#f25c05] hover:bg-[#d94f00] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>View Open Roles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CALL TO ACTION (CTA) BANNER                                            */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="text-center p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-orange-50 to-white border-2 border-orange-200 space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#f25c05] font-extrabold text-xs uppercase tracking-wider border border-orange-200 shadow-xs">
            <Sparkles className="w-4 h-4" />
            <span>Ready for Next-Generation ERP?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto">
            Experience Nirghos ERP Tailored to Your Exact Industry
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Schedule a personalized walkthrough with our solution architects. See how our pre-configured blueprints can modernize your operations in less than 14 days.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="px-8 py-4 rounded-full bg-[#f25c05] hover:bg-[#d94f00] text-white font-black text-sm shadow-xl shadow-orange-500/25 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <span>Book Your Free ERP Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-white text-slate-800 font-bold text-sm border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-slate-600" />
              <span>Contact Our Experts</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTEGRATED "BOOK YOUR FREE ERP DEMO" MODAL                                */}
      {/* ========================================================================= */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type="book-demo"
      />

    </div>
  );
};

export default About;
