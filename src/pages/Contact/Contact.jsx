import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ChevronRight, 
  HelpCircle,
  ChevronDown,
  Building2,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  Headphones,
  Check
} from 'lucide-react';
import { industriesData } from '../../data/industries';
import { useDemo } from '../../context/DemoContext';

export const Contact = () => {
  const { showToast } = useDemo();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'How fast can our company go live with Nirghos ERP?',
      a: 'Because Nirghos ERP comes with 25 pre-configured industry blueprints, standard implementation takes between 7 to 14 days, compared to 6-12 months with traditional legacy ERP suites.'
    },
    {
      q: 'Can we migrate data from our existing legacy system or spreadsheets?',
      a: 'Yes. Our automated migration wizards allow seamless bulk import of customer ledgers, supplier masters, inventory SKU catalogs, opening stock balances, and employee payroll profiles via Excel, CSV, or direct database sync.'
    },
    {
      q: 'Is our data hosted on secure dedicated tenant databases?',
      a: 'Absolutely. Every client organization operates within isolated encrypted environments with SOC 2 Type II compliance, daily automated backups, and 99.99% cloud uptime SLAs.'
    },
    {
      q: 'Can we switch or add another industry module later as our business diversifies?',
      a: 'Yes. The unified polymorphic architecture allows you to activate additional industry modules (for example, adding Retail POS to an existing Manufacturing setup) with one click.'
    }
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a message or inquiry details';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast('Please complete the required form fields.', 'error');
      return;
    }

    setErrors({});
    setSubmitted(true);
    showToast(`Thank you, ${formData.name}! Your enterprise inquiry has been received. Our team will contact ${formData.email}.`, 'success');
  };

  return (
    <div className="space-y-20 pb-28">
      
      {/* Banner */}
      <section className="bg-navy-950 text-white pt-14 pb-28 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-grid-pattern pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-400 font-semibold">Contact & Support</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>We Are Here to Assist Your Business</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Connect With Our ERP Architects
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              Have questions about how Nirghos ERP adapts to your specific business sector? Our industry specialists are ready to discuss your workflows, customization needs, and pricing.
            </p>

            {/* 3 Executive Architecture Confidence Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl">
              <div className="px-5 py-3 rounded-2xl bg-navy-900/90 border-2 border-slate-700/80 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-400/40 text-brand-300 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-brand-300" />
                </div>
                <div>
                  <span className="text-xs font-black text-white block">&lt; 4-Hour SLA Reply</span>
                  <span className="text-[10px] text-slate-400 block">Dedicated Industry Engineer</span>
                </div>
              </div>

              <div className="px-5 py-3 rounded-2xl bg-navy-900/90 border-2 border-slate-700/80 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <span className="text-xs font-black text-white block">100% Confidential NDA</span>
                  <span className="text-[10px] text-slate-400 block">Strict Enterprise Privacy</span>
                </div>
              </div>

              <div className="px-5 py-3 rounded-2xl bg-navy-900/90 border-2 border-slate-700/80 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 flex items-center justify-center shrink-0">
                  <Headphones className="w-4 h-4 text-indigo-300" />
                </div>
                <div>
                  <span className="text-xs font-black text-white block">Direct Architect Desk</span>
                  <span className="text-[10px] text-slate-400 block">No Generic Call Centers</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Grid: Contact Form & Info Details */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-slate-300/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12),0_10px_25px_-5px_rgba(15,23,42,0.06)] p-8 sm:p-12 relative overflow-hidden">
            
            {/* Top Multi-Color Gradient Stripe */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-500 via-indigo-600 to-sky-400"></div>

            {submitted ? (
              <div className="py-14 text-center space-y-4 animate-in fade-in">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner border-2 border-emerald-300 p-4">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-navy-950">Inquiry Submitted Successfully</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed font-normal">
                  Thank you for reaching out. A dedicated industry solution engineer for <strong>{formData.industry}</strong> has been notified and will respond to <strong>{formData.email}</strong> within 4 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        industry: 'Manufacturing & Fabrication',
                        subject: 'Enterprise Inquiry',
                        message: ''
                      });
                    }}
                    className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white font-extrabold text-xs shadow-lg shadow-brand-600/30 transition border border-brand-400/30 cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b-2 border-slate-100 pb-5 mb-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-black uppercase tracking-wider border border-brand-200 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                    <span>DIRECT CONSULTATION DESK</span>
                  </div>
                  <h3 className="text-2xl font-black text-navy-950">Send Us an Enterprise Inquiry</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                    Fill out the form below to receive a personalized blueprint consultation and enterprise pricing proposal.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-extrabold text-navy-950 mb-1.5 uppercase tracking-wider">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm font-semibold transition focus:outline-none ${
                        errors.name 
                          ? 'border-rose-400 focus:ring-4 focus:ring-rose-200 bg-rose-50/20' 
                          : 'border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 bg-white'
                      }`}
                    />
                    {errors.name && <p className="text-rose-500 text-[11px] font-bold mt-1.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-navy-950 mb-1.5 uppercase tracking-wider">
                      Business Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border-2 text-sm font-semibold transition focus:outline-none ${
                        errors.email 
                          ? 'border-rose-400 focus:ring-4 focus:ring-rose-200 bg-rose-50/20' 
                          : 'border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 bg-white'
                      }`}
                    />
                    {errors.email && <p className="text-rose-500 text-[11px] font-bold mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-extrabold text-navy-950 mb-1.5 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 text-sm font-semibold transition focus:outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-navy-950 mb-1.5 uppercase tracking-wider">
                      Relevant Industry (All 25 Available)
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 bg-white text-sm font-bold text-navy-950 transition focus:outline-none cursor-pointer"
                    >
                      <option value="">Select Relevant Industry (25 Available)</option>
                      {industriesData.map((ind) => (
                        <option key={ind.slug} value={ind.name}>{ind.id}. {ind.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-navy-950 mb-1.5 uppercase tracking-wider">
                    Your Requirements & Operational Scope <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your team size, plant/branch count, current bottlenecks, and target go-live timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border-2 text-sm font-semibold transition focus:outline-none ${
                      errors.message 
                        ? 'border-rose-400 focus:ring-4 focus:ring-rose-200 bg-rose-50/20' 
                        : 'border-slate-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 bg-white'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-rose-500 text-[11px] font-bold mt-1.5">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl font-black text-white bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-700 hover:from-brand-500 hover:to-brand-600 shadow-xl shadow-brand-600/30 flex items-center justify-center gap-2.5 transition active:scale-95 border border-brand-400/30 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4 text-brand-300" />
                  <span>Submit Enterprise Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Support Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-gradient-to-br from-navy-950 via-slate-900 to-navy-950 text-white rounded-3xl p-8 sm:p-10 border-2 border-slate-800 shadow-2xl space-y-6 relative overflow-hidden ring-1 ring-white/10">
              {/* Top Glow Ambient Line */}
              <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-brand-400 to-transparent"></div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-xl font-black text-white">
                  Corporate Headquarters
                </h3>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30 font-mono font-bold">
                  GLOBAL DISPATCH
                </span>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="p-4 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/70 shadow-sm transition-all flex items-start gap-3.5 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500/20 to-indigo-500/20 border border-brand-400/40 text-brand-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-white text-xs sm:text-sm">Nirghos Technologies Inc.</h5>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Tower 4, Enterprise Tech Park, Electronics City, Bangalore, 560100
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/70 shadow-sm transition-all flex items-start gap-3.5 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500/20 to-indigo-500/20 border border-brand-400/40 text-brand-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-white text-xs sm:text-sm">Direct Phone Desks</h5>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed font-mono">
                      Toll-Free: +1 (800) 647-4467 <br />
                      Direct Desk: +91 80 4000 9000
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/70 shadow-sm transition-all flex items-start gap-3.5 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500/20 to-indigo-500/20 border border-brand-400/40 text-brand-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-white text-xs sm:text-sm">Official Inquiries</h5>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Inquiries: <span className="text-brand-300 font-semibold">sales@nirghoserp.com</span> <br />
                      Support: <span className="text-brand-300 font-semibold">helpdesk@nirghoserp.com</span>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/70 shadow-sm transition-all flex items-start gap-3.5 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500/20 to-indigo-500/20 border border-brand-400/40 text-brand-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Clock className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-white text-xs sm:text-sm">Support Availability</h5>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Monday to Friday: 24/7 Monitoring <br />
                      Weekend: Priority Critical SLA Support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Product Walkthrough Card */}
            <div className="group relative p-7 bg-white rounded-3xl border-2 border-slate-300/90 hover:border-brand-500 shadow-[0_8px_20px_-4px_rgba(15,23,42,0.08)] hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden space-y-3">
              {/* Top Accent Gradient */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-black text-navy-950 text-base">Prefer a Direct Product Walkthrough?</h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                You don't have to wait for an email. Test drive our full ERP dashboard immediately using our pre-populated mock environment.
              </p>
              
              <div className="pt-2">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-black transition-all shadow-md group-hover:bg-brand-600"
                >
                  <span>Launch Demo ERP Workspace</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="relative mt-16 bg-white rounded-3xl border-2 border-slate-300/90 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.1),0_8px_20px_-4px_rgba(15,23,42,0.05)] p-8 sm:p-12 space-y-8 overflow-hidden">
          {/* Top Multi-Color Gradient Bar */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-500 via-indigo-600 to-cyan-500"></div>

          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-black uppercase tracking-wider text-brand-600 px-3 py-1 rounded-full bg-brand-50 border border-brand-200">
              Got Questions?
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-navy-950 tracking-tight">Frequently Asked Questions</h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Everything you need to know about our implementation timeline, migration, and data security.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3.5">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i} 
                  className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-slate-50/80 border-brand-500 shadow-md ring-4 ring-brand-500/10' 
                      : 'bg-white border-slate-300/90 hover:border-brand-400 hover:bg-slate-50/40 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left font-bold text-sm sm:text-base text-navy-950 transition gap-4 cursor-pointer"
                  >
                    <span className="font-extrabold flex items-center gap-3.5">
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-mono font-black shrink-0 border ${
                        isOpen ? 'bg-brand-600 text-white border-brand-400' : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}>
                        Q{i + 1}
                      </span>
                      <span className={isOpen ? 'text-brand-600 font-black' : 'text-navy-950 font-bold'}>{faq.q}</span>
                    </span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-brand-50 text-brand-600 rotate-180 border border-brand-200' : 'bg-slate-100 text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-200/70">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Contact;
