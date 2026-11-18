import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Download,
  Sparkles,
  ShieldCheck,
  Clock,
  Zap,
  Building2,
  Users,
  ArrowRight,
  Phone,
  Mail,
  User
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { industriesData } from '../../data/industries';

export const DemoModal = ({ isOpen, onClose, type = 'book-demo', defaultIndustry = '' }) => {
  const { showToast, addTransaction } = useDemo();

  // Booking Form State - Clean initial state without default preset strings
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    industry: defaultIndustry || '',
    teamSize: '',
    preferredDate: '',
    notes: ''
  });

  // Transaction form state
  const [txnForm, setTxnForm] = useState({
    entity: '',
    type: 'Sales Invoice',
    amount: '',
    status: 'Paid',
    method: 'Direct Bank Wire',
    category: 'Commercial'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.email) {
      showToast('Please provide your name and work email.', 'error');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      showToast(`Demo booked! Our enterprise specialist will contact ${bookingForm.email}.`, 'success');
      setSubmitted(false);
      onClose();
    }, 1400);
  };

  const handleTxnSubmit = (e) => {
    e.preventDefault();
    if (!txnForm.entity || !txnForm.amount) {
      showToast('Please enter party name and amount.', 'error');
      return;
    }
    addTransaction(txnForm);
    onClose();
  };

  const handleExport = (format) => {
    showToast(`Generating ${format.toUpperCase()} export file for Nirghos ERP... Download started!`, 'success');
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/75 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.35)] border-2 border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Multi-Color Accent Gradient Line */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-500 via-indigo-600 to-sky-400"></div>

        {/* Ambient Subtle Background Glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Modal Header */}
        <div className="flex items-start justify-between px-6 sm:px-8 pt-7 pb-5 border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white relative z-10">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200/80 text-[11px] font-black uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Enterprise Consultation Desk</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-navy-950 tracking-tight">
              {type === 'book-demo' && 'Schedule a Personalized Live Demo'}
              {type === 'new-txn' && 'Record New ERP Transaction'}
              {type === 'export' && 'Export Enterprise Reports'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              {type === 'book-demo' && 'Experience tailored workflows for your industry in a live 30-minute interactive session.'}
              {type === 'new-txn' && 'Add an entry to the live demonstration ledger and verify instant double-entry sync.'}
              {type === 'export' && 'Download compliance statements, P&L statements, and cryptographic audit sheets.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl text-slate-400 hover:text-navy-950 hover:bg-slate-100 flex items-center justify-center transition border border-transparent hover:border-slate-200 cursor-pointer shrink-0 ml-4 mt-0.5"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Value Perks Micro-Strip (for Book Demo) */}
        {type === 'book-demo' && (
          <div className="px-6 sm:px-8 py-3 bg-gradient-to-r from-brand-50/70 via-indigo-50/40 to-sky-50/50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold text-slate-600">
            <div className="flex items-center gap-1.5 text-navy-900 font-extrabold">
              <Clock className="w-3.5 h-3.5 text-brand-600" />
              <span>30-Min Live Tailored Walkthrough</span>
            </div>
            <div className="flex items-center gap-1.5 text-navy-900 font-extrabold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero Commitment Required</span>
            </div>
            <div className="flex items-center gap-1.5 text-navy-900 font-extrabold">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Live Telemetry Sandbox</span>
            </div>
          </div>
        )}

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8">
          {type === 'book-demo' && (
            submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20 border-2 border-emerald-300 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-2xl font-black text-navy-950 tracking-tight">Personalized Demo Scheduled!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you! A calendar invite link and meeting credentials have been dispatched to <strong className="text-navy-950">{bookingForm.email}</strong>.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Priority Session Assigned • Nirghos Solutions Engineering Desk</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      autoComplete="off"
                      placeholder="e.g. Sarah Jenkins"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 placeholder:text-slate-400 font-medium bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      autoComplete="off"
                      placeholder="sarah@company.com"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 placeholder:text-slate-400 font-medium bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Row 2: Phone and Industry Vertical */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      autoComplete="off"
                      placeholder="+91 98765 43210"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 placeholder:text-slate-400 font-medium bg-slate-50/50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      Your Industry Vertical
                    </label>
                    <select
                      value={bookingForm.industry}
                      onChange={(e) => setBookingForm({ ...bookingForm, industry: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 font-medium bg-slate-50/50 focus:bg-white cursor-pointer"
                    >
                      <option value="">-- Select Industry Sector --</option>
                      {industriesData.map((ind) => (
                        <option key={ind.slug} value={ind.name}>{ind.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Company Scale and Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      Company Scale
                    </label>
                    <select
                      value={bookingForm.teamSize}
                      onChange={(e) => setBookingForm({ ...bookingForm, teamSize: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 font-medium bg-slate-50/50 focus:bg-white cursor-pointer"
                    >
                      <option value="">-- Select Organization Size --</option>
                      <option value="1-15">1-15 Employees (Startup / Boutique)</option>
                      <option value="16-50">16-50 Employees (Mid-size Enterprise)</option>
                      <option value="51-200">51-200 Employees (Growing Scale)</option>
                      <option value="200+">200+ Employees (Large Conglomerate)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      Preferred Demo Date
                    </label>
                    <input
                      type="date"
                      value={bookingForm.preferredDate}
                      onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 font-medium bg-slate-50/50 focus:bg-white cursor-pointer"
                    />
                  </div>
                </div>

                {/* Row 4: Optional Specific Requirements */}
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      Specific Workflow Focus or Requirements
                    </span>
                    <span className="text-[10px] text-slate-400 font-normal">Optional</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="e.g. Multi-warehouse sync, CNC spindle tracking, or GST E-Way automation"
                    value={bookingForm.notes}
                    onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 placeholder:text-slate-400 font-medium bg-slate-50/50 focus:bg-white"
                  />
                </div>

                {/* Footer Actions */}
                <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-navy-950 hover:bg-slate-100 rounded-xl transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 via-indigo-600 to-brand-600 hover:from-brand-600 hover:via-indigo-700 hover:to-brand-700 text-white font-black text-sm tracking-wide shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border-2 border-brand-400/30"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Confirm Demo Booking</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </form>
            )
          )}

          {type === 'new-txn' && (
            <form onSubmit={handleTxnSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-navy-900 mb-1.5">Entity / Client / Vendor *</label>
                <input
                  type="text"
                  required
                  autoComplete="off"
                  placeholder="e.g. Apex Industrial Works"
                  value={txnForm.entity}
                  onChange={(e) => setTxnForm({ ...txnForm, entity: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 placeholder:text-slate-400 font-medium bg-slate-50/50 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1.5">Transaction Type</label>
                  <select
                    value={txnForm.type}
                    onChange={(e) => setTxnForm({ ...txnForm, type: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 font-medium bg-slate-50/50 focus:bg-white cursor-pointer"
                  >
                    <option value="Sales Invoice">Sales Invoice</option>
                    <option value="Purchase Order">Purchase Order</option>
                    <option value="Dispatch Challan">Dispatch Challan</option>
                    <option value="Service Retainer">Service Retainer</option>
                    <option value="Receipt Voucher">Receipt Voucher</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1.5">Amount ($ USD) *</label>
                  <input
                    type="number"
                    required
                    placeholder="15000"
                    value={txnForm.amount}
                    onChange={(e) => setTxnForm({ ...txnForm, amount: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 placeholder:text-slate-400 font-medium bg-slate-50/50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1.5">Status</label>
                  <select
                    value={txnForm.status}
                    onChange={(e) => setTxnForm({ ...txnForm, status: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 font-medium bg-slate-50/50 focus:bg-white cursor-pointer"
                  >
                    <option value="Paid">Paid</option>
                    <option value="Processing">Processing</option>
                    <option value="Pending">Pending</option>
                    <option value="Overdue">Overdue</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1.5">Payment Method</label>
                  <select
                    value={txnForm.method}
                    onChange={(e) => setTxnForm({ ...txnForm, method: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 font-medium bg-slate-50/50 focus:bg-white cursor-pointer"
                  >
                    <option value="Direct Bank Wire">Direct Bank Wire</option>
                    <option value="Credit Term (30 Days)">Credit Term (30 Days)</option>
                    <option value="Online Payment Gateway">Online Payment Gateway</option>
                    <option value="Letter of Credit">Letter of Credit</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-navy-950 hover:bg-slate-100 rounded-xl transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 via-indigo-600 to-brand-600 hover:from-brand-600 hover:via-indigo-700 hover:to-brand-700 text-white font-black text-sm tracking-wide shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border-2 border-brand-400/30"
                >
                  Save Transaction
                </button>
              </div>
            </form>
          )}

          {type === 'export' && (
            <div className="space-y-5">
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Choose the desired format to export filtered transactions, ledger entries, and KPI analytics:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <button
                  onClick={() => handleExport('excel')}
                  className="p-5 border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 rounded-2xl flex flex-col items-center justify-center text-center transition-all group cursor-pointer shadow-xs hover:shadow-md"
                >
                  <FileText className="w-8 h-8 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-black text-navy-950">Microsoft Excel</span>
                  <span className="text-[11px] text-slate-500 mt-0.5">.xlsx spreadsheet</span>
                </button>

                <button
                  onClick={() => handleExport('pdf')}
                  className="p-5 border-2 border-slate-200 hover:border-rose-500 hover:bg-rose-50/30 rounded-2xl flex flex-col items-center justify-center text-center transition-all group cursor-pointer shadow-xs hover:shadow-md"
                >
                  <Download className="w-8 h-8 text-rose-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-black text-navy-950">Audit PDF</span>
                  <span className="text-[11px] text-slate-500 mt-0.5">Official statement</span>
                </button>

                <button
                  onClick={() => handleExport('csv')}
                  className="p-5 border-2 border-slate-200 hover:border-brand-500 hover:bg-brand-50/30 rounded-2xl flex flex-col items-center justify-center text-center transition-all group cursor-pointer shadow-xs hover:shadow-md"
                >
                  <FileText className="w-8 h-8 text-brand-600 mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-black text-navy-950">Raw CSV</span>
                  <span className="text-[11px] text-slate-500 mt-0.5">Universal raw data</span>
                </button>
              </div>
              <div className="text-right pt-2 border-t border-slate-100">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-navy-950 hover:bg-slate-100 rounded-xl transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
