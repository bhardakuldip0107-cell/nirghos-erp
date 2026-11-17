import React from 'react';
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
  Cpu
} from 'lucide-react';
import AnimatedCounter from '../../components/common/AnimatedCounter';

export const About = () => {
  return (
    <div className="space-y-20 pb-28">
      
      {/* Banner */}
      <section className="bg-navy-950 text-white pt-14 pb-24 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-grid-pattern pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-400 font-semibold">About Us</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>Our Mission & Vision</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              One Platform. Every Business.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Nirghos ERP was created with a single audacious mission: to solve the chronic mismatch between generic ERP software and the specialized operational realities of 25 distinct global industries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy-900 text-xs font-extrabold uppercase tracking-wider border border-navy-100">
              <Building2 className="w-3.5 h-3.5 text-brand-600" /> The Problem We Solve
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-navy-950 tracking-tight leading-tight">
              Why Multi-Industry Enterprises Struggle with Legacy ERPs
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              For decades, enterprises have faced a frustrating dilemma. Off-the-shelf software packages are often too generic—treating a surgical hospital ward, a chemical reactor, a jewelry manufacturing bench, and a logistics fleet as if they were identical retail stores.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To compensate, companies either stitch together 10 different fragmented apps or spend millions customizing monoliths that break every time an update is released.
            </p>

            <div className="p-6 rounded-3xl bg-brand-50/70 border border-brand-100 text-brand-950 space-y-2">
              <h4 className="font-extrabold text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-600" /> The Nirghos ERP Solution
              </h4>
              <p className="text-xs sm:text-sm text-brand-800 leading-relaxed font-medium">
                We engineered a modular polymorphic data layer that provides specialized industry taxonomies, bill of materials formulas, and regulatory compliance standards natively—on top of an immutable, double-entry financial core.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/industries"
                className="px-6 py-3.5 rounded-2xl bg-navy-950 text-white font-bold text-xs sm:text-sm hover:bg-navy-900 transition flex items-center gap-2 shadow-sm"
              >
                <span>Browse All 25 Industries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-2xl border border-slate-300 text-slate-700 hover:text-navy-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition"
              >
                Talk to Leadership
              </Link>
            </div>
          </div>

          {/* Right Stats & Highlights Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-navy-950 to-navy-900 text-white rounded-3xl p-8 sm:p-10 border border-navy-800 shadow-2xl space-y-6">
            <h3 className="text-xl font-black border-b border-navy-800 pb-4">
              Platform by the Numbers
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800">
                <div className="text-3xl font-black text-brand-400 font-mono">
                  <AnimatedCounter target={25} suffix="+" duration={1800} />
                </div>
                <div className="text-xs text-slate-400 mt-1 font-semibold">Industry Blueprints</div>
              </div>

              <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800">
                <div className="text-3xl font-black text-brand-400 font-mono">
                  <AnimatedCounter target={150} suffix="+" duration={2000} />
                </div>
                <div className="text-xs text-slate-400 mt-1 font-semibold">Domain Modules</div>
              </div>

              <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800">
                <div className="text-3xl font-black text-brand-400 font-mono">
                  <AnimatedCounter target={99.99} decimals={2} suffix="%" duration={2200} />
                </div>
                <div className="text-xs text-slate-400 mt-1 font-semibold">Cloud SLA Uptime</div>
              </div>

              <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800">
                <div className="text-3xl font-black text-brand-400 font-mono">
                  &lt; <AnimatedCounter target={14} suffix=" Days" duration={1600} />
                </div>
                <div className="text-xs text-slate-400 mt-1 font-semibold">Avg Go-Live Time</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-navy-950/80 border border-navy-800/80 space-y-2 text-xs">
              <span className="font-extrabold text-brand-300 uppercase tracking-wider block">
                Enterprise Certifications
              </span>
              <p className="text-slate-300 leading-relaxed font-normal">
                ISO 27001 Information Security, SOC 2 Type II, 21 CFR Part 11 Pharma validation, and regional GST/VAT compliance tested.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gradient-to-b from-slate-100/90 via-slate-50 to-slate-100/90 py-24 border-y-2 border-slate-300/80 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-14 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 border-2 border-brand-300 text-xs font-black uppercase tracking-wider shadow-xs">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span>Guiding Engineering Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight">
              Our Core Architectural Values
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Every architectural decision in Nirghos ERP is anchored in these three non-negotiable principles, ensuring zero legacy bloat and infinite operational reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Radical Domain Specificity */}
            <div className="group relative pt-8 pb-7 px-7 bg-white rounded-3xl border-2 border-slate-300/90 hover:border-brand-500 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.08),0_4px_10px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.25)] hover:ring-4 hover:ring-brand-500/15 hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-500 via-blue-500 to-indigo-600"></div>

              {/* Top Meta Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-blue-100/60 text-brand-600 border-2 border-brand-200 group-hover:from-brand-600 group-hover:to-blue-700 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-brand-500/30 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-105">
                  <Target className="w-7 h-7 transition-transform group-hover:rotate-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-mono font-black uppercase tracking-wider border border-slate-200 group-hover:bg-brand-50 group-hover:text-brand-700 group-hover:border-brand-200 transition-colors">
                  PILLAR // 01
                </span>
              </div>

              {/* Core Content */}
              <div className="space-y-3 py-4">
                <h3 className="text-xl font-black text-navy-950 group-hover:text-brand-600 transition-colors tracking-tight">
                  Radical Domain Specificity
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We never force a client to bend their unique operations to match generic software. Instead, our polymorphic data schema adapts directly to your exact industry workflows natively.
                </p>

                {/* Micro Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {[
                    '25 Pre-configured industry taxonomies',
                    'Zero fragile monkey-patching or plugins',
                    'Tailored screens for shopfloor, clinic & office'
                  ].map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Guarantee Badge */}
              <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between text-[11px] font-bold">
                <span className="text-slate-400 uppercase tracking-wider font-mono">Core Standard</span>
                <span className="px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 border border-brand-200 font-extrabold">
                  100% Native Architecture
                </span>
              </div>
            </div>

            {/* Card 2: Uncompromising Data Integrity */}
            <div className="group relative pt-8 pb-7 px-7 bg-white rounded-3xl border-2 border-slate-300/90 hover:border-indigo-500 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.08),0_4px_10px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_50px_-12px_rgba(99,102,241,0.25)] hover:ring-4 hover:ring-indigo-500/15 hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500"></div>

              {/* Top Meta Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-100/60 text-indigo-600 border-2 border-indigo-200 group-hover:from-indigo-600 group-hover:to-purple-700 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-indigo-500/30 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-105">
                  <ShieldCheck className="w-7 h-7 transition-transform group-hover:rotate-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-mono font-black uppercase tracking-wider border border-slate-200 group-hover:bg-indigo-50 group-hover:text-indigo-700 group-hover:border-indigo-200 transition-colors">
                  PILLAR // 02
                </span>
              </div>

              {/* Core Content */}
              <div className="space-y-3 py-4">
                <h3 className="text-xl font-black text-navy-950 group-hover:text-indigo-600 transition-colors tracking-tight">
                  Uncompromising Data Integrity
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Double-entry financial ledgers, immutable audit logs, and strict RBAC protect your enterprise from internal errors and external compliance liabilities automatically.
                </p>

                {/* Micro Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {[
                    'Immutable financial general ledgers',
                    'Cryptographic audit trail with SOC 2 compliance',
                    'Zero cross-tenant data contamination guarantee'
                  ].map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Guarantee Badge */}
              <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between text-[11px] font-bold">
                <span className="text-slate-400 uppercase tracking-wider font-mono">Security Model</span>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 font-extrabold">
                  AES-256 & SOC 2 Ready
                </span>
              </div>
            </div>

            {/* Card 3: Speed to Value */}
            <div className="group relative pt-8 pb-7 px-7 bg-white rounded-3xl border-2 border-slate-300/90 hover:border-emerald-500 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.08),0_4px_10px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.25)] hover:ring-4 hover:ring-emerald-500/15 hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>

              {/* Top Meta Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100/60 text-emerald-600 border-2 border-emerald-200 group-hover:from-emerald-600 group-hover:to-teal-700 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-emerald-500/30 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-105">
                  <TrendingUp className="w-7 h-7 transition-transform group-hover:rotate-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-mono font-black uppercase tracking-wider border border-slate-200 group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-200 transition-colors">
                  PILLAR // 03
                </span>
              </div>

              {/* Core Content */}
              <div className="space-y-3 py-4">
                <h3 className="text-xl font-black text-navy-950 group-hover:text-emerald-600 transition-colors tracking-tight">
                  Speed to Value
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  By pre-configuring industry logic, formulas, and chart of accounts, deployments take less than 14 days instead of 18-month consultative nightmares.
                </p>

                {/* Micro Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {[
                    'Turnkey pre-configured business templates',
                    '< 14 Days average enterprise go-live timeframe',
                    'Zero costly bespoke custom engineering needed'
                  ].map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Guarantee Badge */}
              <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between text-[11px] font-bold">
                <span className="text-slate-400 uppercase tracking-wider font-mono">Deployment SLA</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-extrabold">
                  &lt; 14-Day Go-Live
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
