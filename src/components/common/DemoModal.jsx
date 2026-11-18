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
  User,
  DollarSign,
  Activity,
  CreditCard,
  Tag,
  Landmark,
  Receipt,
  FileSpreadsheet,
  Lock,
  Filter,
  ArrowDownToLine,
  BadgeCheck
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

  // Transaction form state - Clean initial state without hardcoded values
  const [txnForm, setTxnForm] = useState({
    entity: '',
    type: '',
    amount: '',
    status: '',
    method: '',
    category: '',
    refNumber: ''
  });

  // Export configuration state
  const [exportConfig, setExportConfig] = useState({
    scope: 'gl-all',
    range: 'current-fy',
    includeAuditHash: true
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
      showToast('Please enter party/counterparty name and amount.', 'error');
      return;
    }
    addTransaction({
      ...txnForm,
      type: txnForm.type || 'Sales Invoice',
      status: txnForm.status || 'Paid',
      method: txnForm.method || 'Direct Bank Wire',
      category: txnForm.category || 'Commercial'
    });
    showToast(`Transaction for "${txnForm.entity}" successfully posted to General Ledger!`, 'success');
    setTxnForm({
      entity: '',
      type: '',
      amount: '',
      status: '',
      method: '',
      category: '',
      refNumber: ''
    });
    onClose();
  };

  const handleExport = (format) => {
    const scopeNames = {
      'gl-all': 'General Ledger & Chart of Accounts',
      'pnl': 'P&L and Balance Sheet',
      'aging': 'AR & AP Aging Ledger',
      'tax': 'GST & Tax Compliance Pack',
      'stock': 'Inventory Valuation & Batch Trace'
    };
    const scopeLabel = scopeNames[exportConfig.scope] || 'Enterprise Dataset';
    showToast(`Generating ${format.toUpperCase()} export for ${scopeLabel}... Download started!`, 'success');
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/75 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.35)] border-2 border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Multi-Color Accent Gradient Line */}
        <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${
          type === 'new-txn' 
            ? 'from-emerald-500 via-teal-500 to-brand-500' 
            : type === 'export'
            ? 'from-brand-500 via-indigo-600 to-sky-400'
            : 'from-brand-500 via-indigo-600 to-sky-400'
        }`}></div>

        {/* Ambient Subtle Background Glow */}
        <div className={`absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none ${
          type === 'new-txn' ? 'bg-emerald-500/10' : 'bg-brand-500/10'
        }`}></div>

        {/* Modal Header */}
        <div className="flex items-start justify-between px-6 sm:px-8 pt-7 pb-5 border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white relative z-10">
          <div className="space-y-1.5">
            {type === 'book-demo' && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200/80 text-[11px] font-black uppercase tracking-wider shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>Enterprise Consultation Desk</span>
              </div>
            )}
            {type === 'new-txn' && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-[11px] font-black uppercase tracking-wider shadow-2xs">
                <Landmark className="w-3.5 h-3.5 text-emerald-600" />
                <span>General Ledger Real-Time Gateway</span>
              </div>
            )}
            {type === 'export' && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200/80 text-[11px] font-black uppercase tracking-wider shadow-2xs">
                <Download className="w-3.5 h-3.5 text-brand-600" />
                <span>Compliance & Audit Export Engine</span>
              </div>
            )}

            <h3 className="text-xl sm:text-2xl font-black text-navy-950 tracking-tight">
              {type === 'book-demo' && 'Schedule a Personalized Live Demo'}
              {type === 'new-txn' && 'Record New ERP Transaction'}
              {type === 'export' && 'Export Enterprise Reports'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              {type === 'book-demo' && 'Experience tailored workflows for your industry in a live 30-minute interactive session.'}
              {type === 'new-txn' && 'Post journal vouchers, sales invoices, or purchase orders directly to double-entry general ledger.'}
              {type === 'export' && 'Download compliance statements, P&L statements, and cryptographic audit sheets in bank-grade formats.'}
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

        {/* Value Perks Micro-Strip for Book Demo */}
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

        {/* Live Ledger Telemetry Micro-Strip for New Transaction */}
        {type === 'new-txn' && (
          <div className="px-6 sm:px-8 py-3 bg-gradient-to-r from-emerald-50/80 via-teal-50/40 to-brand-50/50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold text-slate-600">
            <div className="flex items-center gap-1.5 text-navy-900 font-extrabold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Double-Entry Reconciled</span>
            </div>
            <div className="flex items-center gap-1.5 text-navy-900 font-extrabold">
              <Zap className="w-3.5 h-3.5 text-brand-600" />
              <span>Sub-Second P&L Posting</span>
            </div>
            <div className="flex items-center gap-1.5 text-navy-900 font-extrabold">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>SHA-256 Audit Stream</span>
            </div>
          </div>
        )}

        {/* Live Export Telemetry Micro-Strip for Export */}
        {type === 'export' && (
          <div className="px-6 sm:px-8 py-3 bg-gradient-to-r from-brand-50/70 via-indigo-50/40 to-sky-50/50 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold text-slate-600">
            <div className="flex items-center gap-1.5 text-navy-900 font-extrabold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>SOC-2 & ISO 27001 Reconciled</span>
            </div>
            <div className="flex items-center gap-1.5 text-navy-900 font-extrabold">
              <Zap className="w-3.5 h-3.5 text-brand-600" />
              <span>Sub-Second Stream Generation</span>
            </div>
            <div className="flex items-center gap-1.5 text-navy-900 font-extrabold">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
              <span>SHA-256 Tamper-Proof Seal</span>
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
              {/* Row 1: Entity Name & Voucher Reference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    Entity / Client / Vendor <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="e.g. Apex Industrial Works Ltd"
                    value={txnForm.entity}
                    onChange={(e) => setTxnForm({ ...txnForm, entity: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 placeholder:text-slate-400 font-medium bg-slate-50/50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center gap-1.5">
                    <Receipt className="w-3.5 h-3.5 text-slate-400" />
                    Voucher / Reference #
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="e.g. INV-2026-9042"
                    value={txnForm.refNumber}
                    onChange={(e) => setTxnForm({ ...txnForm, refNumber: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 placeholder:text-slate-400 font-medium bg-slate-50/50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 2: Transaction Type & Amount */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-slate-400" />
                    Transaction Type <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={txnForm.type}
                    onChange={(e) => setTxnForm({ ...txnForm, type: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 font-medium bg-slate-50/50 focus:bg-white cursor-pointer"
                  >
                    <option value="">-- Select Transaction Voucher --</option>
                    <option value="Sales Invoice">Sales Invoice (Accounts Receivable)</option>
                    <option value="Purchase Order">Purchase Order (Accounts Payable)</option>
                    <option value="Dispatch Challan">Dispatch Challan (Stock Outward)</option>
                    <option value="Receipt Voucher">Receipt Voucher (Bank Inward)</option>
                    <option value="Payment Voucher">Payment Voucher (Supplier Disbursement)</option>
                    <option value="Service Retainer">Service Retainer (Revenue Recognition)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                    Amount ($ USD / ₹ INR) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    autoComplete="off"
                    placeholder="e.g. 25000"
                    value={txnForm.amount}
                    onChange={(e) => setTxnForm({ ...txnForm, amount: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 placeholder:text-slate-400 font-medium bg-slate-50/50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 3: Settlement Status & Payment Method */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Settlement Status
                  </label>
                  <select
                    value={txnForm.status}
                    onChange={(e) => setTxnForm({ ...txnForm, status: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 font-medium bg-slate-50/50 focus:bg-white cursor-pointer"
                  >
                    <option value="">-- Select Status --</option>
                    <option value="Paid">Paid / Reconciled</option>
                    <option value="Processing">Processing / In Transit</option>
                    <option value="Pending">Pending Approval (Credit Term)</option>
                    <option value="Overdue">Overdue Notice</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-slate-400" />
                    Payment / Settlement Method
                  </label>
                  <select
                    value={txnForm.method}
                    onChange={(e) => setTxnForm({ ...txnForm, method: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 font-medium bg-slate-50/50 focus:bg-white cursor-pointer"
                  >
                    <option value="">-- Select Payment Method --</option>
                    <option value="Direct Bank Wire">Direct Bank Wire (RTGS / NEFT)</option>
                    <option value="Credit Term (30 Days)">Corporate Credit Term (30 Days)</option>
                    <option value="Online Payment Gateway">Online Payment Gateway</option>
                    <option value="Letter of Credit">Letter of Credit (LC)</option>
                    <option value="Cheque / DD">Cheque / Demand Draft</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Department / Cost Center Allocation */}
              <div>
                <label className="block text-xs font-bold text-navy-900 mb-1.5 flex items-center gap-1.5">
                  <Landmark className="w-3.5 h-3.5 text-slate-400" />
                  Department / Cost Center Allocation
                </label>
                <select
                  value={txnForm.category}
                  onChange={(e) => setTxnForm({ ...txnForm, category: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 font-medium bg-slate-50/50 focus:bg-white cursor-pointer"
                >
                  <option value="">-- Select Cost Center --</option>
                  <option value="Commercial">Commercial Sales & Accounts Receivable</option>
                  <option value="Procurement">Raw Material Procurement & Inward</option>
                  <option value="Manufacturing">Manufacturing & Machine Routing</option>
                  <option value="Logistics">Fleet, Freight & Godown Transit</option>
                  <option value="Administrative">Corporate SG&A & Operational Overhead</option>
                </select>
              </div>

              {/* Real-Time Live General Ledger Preview Pod */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-navy-950 via-slate-900 to-navy-950 text-white border-2 border-slate-700/80 shadow-md space-y-2.5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
                
                <div className="flex items-center justify-between text-[11px] font-mono pb-2 border-b border-slate-800">
                  <span className="flex items-center gap-1.5 text-brand-300 font-bold">
                    <Activity className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
                    GENERAL LEDGER IMPACT PREVIEW
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-black border border-emerald-500/40">
                    ● REAL-TIME POSTING
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5 min-w-0 pr-3">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">
                      {txnForm.type || 'Transaction Voucher'} • {txnForm.category || 'General Ledger'}
                    </span>
                    <h5 className="text-sm font-bold text-white truncate">
                      {txnForm.entity || 'Counterparty / Client Name'}
                    </h5>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {txnForm.refNumber ? `REF: ${txnForm.refNumber}` : 'AUTO-VOUCHER #TXN-2026'} • {txnForm.method || 'Direct Wire'}
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">Double-Entry Amount</span>
                    <div className="text-lg sm:text-xl font-black font-mono text-emerald-400">
                      {txnForm.amount ? `$${Number(txnForm.amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : '$0.00'}
                    </div>
                  </div>
                </div>
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
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-500 text-white font-black text-sm tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border-2 border-emerald-400/30"
                >
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Post to General Ledger</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </form>
          )}

          {type === 'export' && (
            <div className="space-y-6">
              {/* Report Scope & Filter Controls */}
              <div className="p-4 rounded-2xl bg-slate-50/80 border-2 border-slate-200/90 space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-navy-950 flex items-center gap-1.5">
                    <Filter className="w-3.5 h-3.5 text-brand-600" />
                    Export Ledger Scope & Filters
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold flex items-center gap-1">
                    <BadgeCheck className="w-3 h-3 text-emerald-600" />
                    All 25 Modules Synced
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Report Module / Dataset</label>
                    <select
                      value={exportConfig.scope}
                      onChange={(e) => setExportConfig({ ...exportConfig, scope: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 font-bold bg-white cursor-pointer"
                    >
                      <option value="gl-all">General Ledger & Chart of Accounts</option>
                      <option value="pnl">Consolidated P&L & Balance Sheet</option>
                      <option value="aging">AR & AP Aging Ledger (30-60-90 Days)</option>
                      <option value="tax">GST, E-Way Bill & Tax Compliance Pack</option>
                      <option value="stock">Inventory Valuation & Batch Lot Drift</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Audit Fiscal Timeline</label>
                    <select
                      value={exportConfig.range}
                      onChange={(e) => setExportConfig({ ...exportConfig, range: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 font-bold bg-white cursor-pointer"
                    >
                      <option value="current-fy">Current Fiscal Year (2025-2026)</option>
                      <option value="q3">Current Quarter (Q3 Audited)</option>
                      <option value="30d">Last 30 Days (Rolling Operations)</option>
                      <option value="lifetime">Complete Lifetime Ledger Archive</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 3 High-Tech Download Format Pods */}
              <div className="space-y-2.5">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                  Select Bank-Grade Output Format
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {/* Excel Card */}
                  <div className="group relative p-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                        <FileSpreadsheet className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="text-sm font-black text-navy-950 group-hover:text-emerald-700 transition-colors">
                          Microsoft Excel
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          Multi-tab workbook with active formulas & pivot grids.
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                          .XLSX
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          Formulas Intact
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleExport('excel')}
                      className="mt-4 w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-black text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-emerald-200 group-hover:border-emerald-600 shadow-2xs group-hover:shadow-md"
                    >
                      <ArrowDownToLine className="w-3.5 h-3.5" />
                      <span>Export Excel</span>
                    </button>
                  </div>

                  {/* Audit PDF Card */}
                  <div className="group relative p-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-rose-50 border-2 border-rose-200 text-rose-600 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="text-sm font-black text-navy-950 group-hover:text-rose-700 transition-colors">
                          Audit PDF Statement
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          Official digitally signed statement for auditors & banks.
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-mono font-bold bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-200">
                          .PDF
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          Digital Seal
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleExport('pdf')}
                      className="mt-4 w-full py-2.5 rounded-xl bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white font-black text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-rose-200 group-hover:border-rose-600 shadow-2xs group-hover:shadow-md"
                    >
                      <ArrowDownToLine className="w-3.5 h-3.5" />
                      <span>Export PDF</span>
                    </button>
                  </div>

                  {/* Universal Raw CSV Card */}
                  <div className="group relative p-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-brand-500 hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 border-2 border-brand-200 text-brand-600 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all">
                        <Download className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="text-sm font-black text-navy-950 group-hover:text-brand-700 transition-colors">
                          Raw CSV / BI Feed
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                          Uncompressed rows ready for PowerBI, Tableau, or python.
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-mono font-bold bg-brand-50 text-brand-700 px-2 py-0.5 rounded border border-brand-200">
                          .CSV
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          Zero Truncation
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleExport('csv')}
                      className="mt-4 w-full py-2.5 rounded-xl bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white font-black text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-brand-200 group-hover:border-brand-600 shadow-2xs group-hover:shadow-md"
                    >
                      <ArrowDownToLine className="w-3.5 h-3.5" />
                      <span>Export CSV</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Security & Watermark Footer */}
              <div className="p-3.5 rounded-2xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono border border-slate-800 shadow-inner">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-slate-300 truncate">
                    Cryptographic Watermark • SHA-256 Checksum Envelope Attached
                  </span>
                </div>
                <span className="text-emerald-400 font-bold font-mono text-[10px] shrink-0">
                  100% Audit-Proof
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:text-navy-950 hover:bg-slate-100 rounded-xl transition cursor-pointer"
                >
                  Close Window
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
