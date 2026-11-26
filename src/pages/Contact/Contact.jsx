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
  Check,
  RotateCw,
  MessageSquare
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';

export const Contact = () => {
  const { showToast } = useDemo();

  // Form State matching screenshot
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    query: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'How fast will someone respond to my query?',
      a: 'Our enterprise solutions team responds to all queries within 2 to 4 business hours. For emergency or critical support, our desk is active 24/7.'
    },
    {
      q: 'Can we schedule a live one-on-one demo for our specific industry?',
      a: 'Yes! Nirghos ERP provides 25 specialized industry blueprints. During the demo, our solution architects will show you the exact modules tailored to your operations.'
    },
    {
      q: 'Can we migrate existing data from spreadsheets or legacy ERPs?',
      a: 'Absolutely. We provide automated bulk migration wizards for customer masters, supplier ledgers, stock inventory, and double-entry general ledgers with 100% data verification.'
    },
    {
      q: 'Is there any commitment required before the trial or demo?',
      a: 'None whatsoever. You can book a free demo, test drive the interactive sandbox workspace, and review the architectural blueprint with zero upfront commitment.'
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
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile number is required';
    }
    if (!formData.query.trim()) {
      errs.query = 'Please enter your query';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast('Please fill all required fields.', 'error');
      return;
    }

    const ticketId = `NRG-${Math.floor(100000 + Math.random() * 900000)}`;
    const submission = {
      ...formData,
      ticketId,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setErrors({});
    setSubmittedData(submission);
    setSubmitted(true);
    showToast(`Thank you, ${formData.name}! Your message has been sent successfully.`, 'success');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 pb-28">
      
      {/* ========================================================================= */}
      {/* 1. TOP SUBTLE HEADER WITH BACKGROUND GRID                                 */}
      {/* ========================================================================= */}
      <section className="pt-10 pb-8 px-4 relative overflow-hidden bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px]">
        <div className="max-w-[1200px] mx-auto text-center space-y-2">
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mb-2 font-medium">
            <Link to="/" className="hover:text-nirghos-primary transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-bold">Contact Us</span>
          </div>

          {/* Exact Top text from screenshot */}
          <h2 className="text-sm sm:text-base font-medium text-slate-700 tracking-tight max-w-3xl mx-auto">
            Nirghos ERP Solutions Provides Exact Answers for ERP Solutions Required by your Business.
          </h2>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN CENTERED CARD (EXACT MATCH TO USER SCREENSHOT)                   */}
      {/* ========================================================================= */}
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08),0_0_1px_1px_rgba(0,0,0,0.05)] border border-slate-100 p-6 sm:p-10 md:p-12 transition-all">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ------------------------------------------------------------------ */}
            {/* LEFT COLUMN: Support Specialist Illustration (Exact Match)          */}
            {/* ------------------------------------------------------------------ */}
            <div className="md:col-span-5 flex flex-col items-center justify-center select-none">
              <svg 
                viewBox="0 0 500 450" 
                className="w-full max-w-[340px] md:max-w-full h-auto drop-shadow-xs" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Soft Blue Cloud/Circle Backdrop */}
                <ellipse cx="250" cy="240" rx="190" ry="170" fill="#EBF5FF" />
                <circle cx="340" cy="120" r="45" fill="#E1EFFE" />
                
                {/* Desk */}
                <rect x="70" y="340" width="360" height="12" rx="6" fill="#4B5563" />
                <rect x="60" y="352" width="380" height="4" fill="#374151" />
                
                {/* Potted Plant on Left */}
                <path d="M100 340 L105 315 L125 315 L130 340 Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
                <path d="M108 315 Q100 280 115 270 Q118 295 116 315" fill="#34D399" />
                <path d="M116 315 Q135 275 125 260 Q120 290 120 315" fill="#10B981" />
                <path d="M112 315 Q90 295 100 285 Q110 300 114 315" fill="#059669" />
                
                {/* Floating UI Elements */}
                {/* 1. Speech bubble on Left with 3 dots */}
                <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                  <rect x="75" y="190" width="70" height="42" rx="12" fill="#FFFFFF" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.07))" />
                  <polygon points="120,232 130,244 132,232" fill="#FFFFFF" />
                  <circle cx="95" cy="211" r="3.5" fill="#3B82F6" />
                  <circle cx="110" cy="211" r="3.5" fill="#3B82F6" />
                  <circle cx="125" cy="211" r="3.5" fill="#3B82F6" />
                </g>

                {/* 2. Top-Right Big Blue Chat Card */}
                <g>
                  <rect x="290" y="80" width="130" height="75" rx="14" fill="#3B82F6" />
                  <polygon points="310,155 305,168 322,155" fill="#3B82F6" />
                  <rect x="306" y="96" width="70" height="7" rx="3.5" fill="#FFFFFF" />
                  <rect x="306" y="110" width="98" height="6" rx="3" fill="#BFDBFE" />
                  <rect x="306" y="122" width="55" height="6" rx="3" fill="#BFDBFE" />
                </g>

                {/* 3. Floating Red/Orange Email with Notification badge */}
                <g>
                  <rect x="310" y="180" width="34" height="26" rx="5" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="2" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.05))" />
                  <path d="M312 182 L327 195 L342 182" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="342" cy="180" r="7" fill="#EF4444" />
                  <text x="342" y="183" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">1</text>
                </g>

                {/* 4. Password pill */}
                <g>
                  <rect x="360" y="170" width="55" height="20" rx="10" fill="#1E3A8A" />
                  <text x="387" y="183" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" letterSpacing="1">*****</text>
                </g>

                {/* 5. Phone call bubble */}
                <g>
                  <rect x="355" y="205" width="46" height="34" rx="10" fill="#60A5FA" />
                  <path d="M370 216 C370 226 380 230 384 227 L381 224 L378 225 C376 223 374 221 372 219 L374 216 Z" fill="#FFFFFF" />
                  <path d="M380 215 Q384 217 386 221" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </g>

                {/* Person - Customer Support Specialist */}
                {/* Body / Blazer */}
                <path d="M190 340 L195 270 Q205 240 240 240 Q275 240 285 270 L290 340 Z" fill="#1E3A8A" />
                {/* White Collar / Shirt */}
                <polygon points="230,240 240,270 250,240" fill="#FFFFFF" />
                <polygon points="236,250 240,285 244,250" fill="#EF4444" />

                {/* Head / Neck */}
                <rect x="233" y="220" width="14" height="22" fill="#FBCFE8" />
                <ellipse cx="240" cy="180" rx="22" ry="26" fill="#FBCFE8" />

                {/* Hair */}
                <path d="M218 175 Q220 150 240 150 Q260 150 262 175 Q255 160 240 162 Q225 160 218 175 Z" fill="#0F172A" />

                {/* Headset */}
                <path d="M216 180 Q216 152 240 152 Q264 152 264 180" fill="none" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
                <rect x="213" y="174" width="7" height="15" rx="3.5" fill="#3B82F6" />
                <rect x="260" y="174" width="7" height="15" rx="3.5" fill="#3B82F6" />
                {/* Microphone */}
                <path d="M218 185 Q220 200 236 200" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="237" cy="200" r="3" fill="#EF4444" />

                {/* Face Features */}
                <circle cx="233" cy="178" r="2" fill="#0F172A" />
                <circle cx="247" cy="178" r="2" fill="#0F172A" />
                <path d="M236 188 Q240 193 244 188" fill="none" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />

                {/* Laptop on Desk */}
                <path d="M200 340 L280 340 L275 334 L205 334 Z" fill="#94A3B8" />
                <path d="M210 334 L270 334 L285 275 L225 275 Z" fill="#CBD5E1" stroke="#64748B" strokeWidth="1" />
                <path d="M213 331 L267 331 L281 278 L227 278 Z" fill="#F8FAFC" />
                <circle cx="254" cy="304" r="5" fill="#3B82F6" />
              </svg>
            </div>

            {/* ------------------------------------------------------------------ */}
            {/* RIGHT COLUMN: Form & Submitted Details                             */}
            {/* ------------------------------------------------------------------ */}
            <div className="md:col-span-7 space-y-5">
              
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Send us a Message
              </h1>

              {submitted && submittedData ? (
                /* Detail Show Section When Form is Submitted */
                <div className="bg-emerald-50/80 border-2 border-emerald-300 rounded-2xl p-6 space-y-4 animate-in fade-in zoom-in-95">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black shadow-md">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Message Received Successfully!</h3>
                      <p className="text-xs text-slate-600">Our customer support specialist will connect with you shortly.</p>
                    </div>
                  </div>

                  {/* Details Card */}
                  <div className="bg-white rounded-xl p-4 border border-emerald-200 space-y-2.5 text-xs shadow-xs">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-slate-500 font-semibold">Reference Ticket ID:</span>
                      <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {submittedData.ticketId}
                      </span>
                    </div>

                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-slate-500 font-semibold">Full Name:</span>
                      <span className="font-bold text-slate-800">{submittedData.name}</span>
                    </div>

                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-slate-500 font-semibold">Email Address:</span>
                      <span className="font-bold text-slate-800">{submittedData.email}</span>
                    </div>

                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-slate-500 font-semibold">Mobile Number:</span>
                      <span className="font-bold text-slate-800">{submittedData.mobile}</span>
                    </div>

                    <div className="flex flex-col pt-1">
                      <span className="text-slate-500 font-semibold mb-1">Your Query:</span>
                      <p className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 font-medium leading-relaxed">
                        {submittedData.query}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setSubmittedData(null);
                      setFormData({ name: '', email: '', mobile: '', query: '' });
                    }}
                    className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-sm cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Contact Form Matching User Screenshot */
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full Name * */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-medium transition focus:outline-none ${
                        errors.name 
                          ? 'border-red-400 bg-red-50/20 focus:ring-1 focus:ring-red-400' 
                          : 'border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.name}</p>}
                  </div>

                  {/* Email * */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-medium transition focus:outline-none ${
                        errors.email 
                          ? 'border-red-400 bg-red-50/20 focus:ring-1 focus:ring-red-400' 
                          : 'border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.email}</p>}
                  </div>

                  {/* Mobile No. * */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Mobile No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Mobile number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-medium transition focus:outline-none ${
                        errors.mobile 
                          ? 'border-red-400 bg-red-50/20 focus:ring-1 focus:ring-red-400' 
                          : 'border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white'
                      }`}
                    />
                    {errors.mobile && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.mobile}</p>}
                  </div>

                  {/* Query * */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Query <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Enter Query"
                      value={formData.query}
                      onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-medium transition focus:outline-none resize-y ${
                        errors.query 
                          ? 'border-red-400 bg-red-50/20 focus:ring-1 focus:ring-red-400' 
                          : 'border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white'
                      }`}
                    ></textarea>
                    {errors.query && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.query}</p>}
                  </div>

                  {/* reCAPTCHA Badge (Matching screenshot) */}
                  <div className="pt-1">
                    <div className="inline-flex items-center gap-3 px-3 py-2 rounded-md border border-slate-300 bg-[#f9fafb] shadow-2xs">
                      <div className="w-24 py-1.5 px-2 bg-[#1a73e8] text-white text-[9px] font-bold rounded flex items-center justify-center tracking-tight leading-tight">
                        protected by reCAPTCHA
                      </div>
                      <RotateCw className="w-5 h-5 text-slate-400" />
                    </div>
                  </div>

                  {/* Blue Submit Button (Matching screenshot) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#1976d2] hover:bg-[#1565c0] text-white font-bold text-sm shadow-md transition-all active:scale-[0.99] cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. CORPORATE CONTACT DETAILS & SUPPORT CHANNELS ("detaail show thai")      */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 space-y-10">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-nirghos-primary px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200">
            Enterprise Reach
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Our Corporate Contact Channels
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Connect directly with our solutions consultants, enterprise support engineers, and leadership team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Address */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-nirghos-primary flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Head Office</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nirghos ERP Solutions Pvt. Ltd.<br />
              Enterprise Tech Park, Bangalore & Ring Road, Surat, Gujarat.
            </p>
          </div>

          {/* Card 2: Phone */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Direct Phone Desks</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Sales: +91 98765 43210<br />
              Toll-Free: 1800-200-6474
            </p>
          </div>

          {/* Card 3: Email */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Email Inquiries</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              contact@nirghoserp.com<br />
              support@nirghoserp.com
            </p>
          </div>

          {/* Card 4: Hours */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Support Availability</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mon - Sat: 9:30 AM – 7:00 PM<br />
              Cloud Uptime: 24/7/365
            </p>
          </div>

        </div>

        {/* ------------------------------------------------------------------ */}
        {/* FAQs Accordion                                                     */}
        {/* ------------------------------------------------------------------ */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-nirghos-primary" />
            <h4 className="font-black text-lg text-slate-900">Frequently Asked Questions</h4>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i} 
                  className={`rounded-xl border transition-all ${
                    isOpen ? 'bg-sky-50/30 border-sky-200' : 'bg-slate-50/50 border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-4 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180 text-nirghos-primary' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </section>

    </div>
  );
};

export default Contact;
