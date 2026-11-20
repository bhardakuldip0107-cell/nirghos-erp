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
  BadgeCheck,
  RotateCw
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { industriesData } from '../../data/industries';

export const DemoModal = ({ isOpen, onClose, type = 'book-demo', defaultIndustry = '' }) => {
  const { showToast, addTransaction } = useDemo();

  // Booking Form State - matching user's requested form fields
  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    industry: defaultIndustry || 'Apparels and Clothing',
    businessName: '',
    email: '',
    contactNo: '',
    state: '',
    city: '',
    additionalMessage: ''
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

  const isBookDemo = type === 'book-demo' || type === 'demo';

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.fullName || !bookingForm.email || !bookingForm.contactNo || !bookingForm.state || !bookingForm.city) {
      showToast('Please fill in all required fields marked with *', 'error');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      showToast(`Demo booked! Our enterprise specialist will contact ${bookingForm.fullName} at ${bookingForm.contactNo}.`, 'success');
      setSubmitted(false);
      onClose();
    }, 1600);
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

  // =========================================================================
  // 1. FREE ERP DEMO FORM (EXACT MATCH TO USER SCREENSHOT)
  // =========================================================================
  if (isBookDemo) {
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
        onClick={onClose}
      >
        <div 
          className="relative w-full max-w-[580px] bg-white rounded-3xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.4)] border border-slate-200/80 overflow-hidden p-6 sm:p-8 my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button at top right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Form Header */}
          <div className="text-center mb-6 pt-1">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Book your Free ERP Demo - Fill the details below!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Let&apos;s Collaborate and{' '}
              <span className="relative inline-block font-semibold text-slate-800">
                help you automate
                <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-sky-500 rounded-full"></span>
              </span>{' '}
              your business.
            </p>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-black text-slate-900">Demo Scheduled Successfully!</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Thank you, <strong className="text-slate-900">{bookingForm.fullName}</strong>. Our ERP specialist will contact you on <strong className="text-slate-900">{bookingForm.contactNo}</strong>.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              
              {/* Field 1: Full Name * */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter Name"
                  value={bookingForm.fullName}
                  onChange={(e) => setBookingForm({ ...bookingForm, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 placeholder-slate-400 bg-white text-slate-900"
                />
              </div>

              {/* Field 2 & 3: Industry * and Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Industry <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={bookingForm.industry}
                    onChange={(e) => setBookingForm({ ...bookingForm, industry: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 bg-white text-slate-900 cursor-pointer"
                  >
                    <option value="Apparels and Clothing">Apparels and Clothing</option>
                    <option value="Gems & Jewellery">Gems & Jewellery</option>
                    <option value="Footwear & Lifestyle">Footwear & Lifestyle</option>
                    <option value="Retail & Supermarket">Retail & Supermarket</option>
                    <option value="Manufacturing & Fabrication">Manufacturing & Fabrication</option>
                    <option value="Wholesale & Trading">Wholesale & Trading</option>
                    <option value="Food, Cafe & Restaurant">Food, Cafe & Restaurant</option>
                    <option value="Healthcare & Pharma">Healthcare & Pharma</option>
                    <option value="Automotive & Spare Parts">Automotive & Spare Parts</option>
                    <option value="Services & Technology">Services & Technology</option>
                    <option value="Other Business">Other Business</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Business Name"
                    value={bookingForm.businessName}
                    onChange={(e) => setBookingForm({ ...bookingForm, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 placeholder-slate-400 bg-white text-slate-900"
                  />
                </div>
              </div>

              {/* Field 4 & 5: Email ID * and Contact No. * */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter Email ID"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 placeholder-slate-400 bg-white text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Contact No. <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile number"
                    value={bookingForm.contactNo}
                    onChange={(e) => setBookingForm({ ...bookingForm, contactNo: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 placeholder-slate-400 bg-white text-slate-900"
                  />
                </div>
              </div>

              {/* Field 6 & 7: State * and City * */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter State"
                    value={bookingForm.state}
                    onChange={(e) => setBookingForm({ ...bookingForm, state: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 placeholder-slate-400 bg-white text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter City"
                    value={bookingForm.city}
                    onChange={(e) => setBookingForm({ ...bookingForm, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 placeholder-slate-400 bg-white text-slate-900"
                  />
                </div>
              </div>

              {/* Field 8: Additional Message */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Additional Message
                </label>
                <textarea
                  rows="3"
                  placeholder="Enter Query"
                  value={bookingForm.additionalMessage}
                  onChange={(e) => setBookingForm({ ...bookingForm, additionalMessage: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 placeholder-slate-400 bg-white text-slate-900 resize-none"
                ></textarea>
              </div>

              {/* Security / reCAPTCHA box (matching screenshot) */}
              <div className="flex items-center gap-2.5 border border-slate-200 rounded-md p-2 bg-slate-50/80 w-fit">
                <div className="px-2 py-1 rounded bg-[#1a73e8] text-white text-[10px] font-bold">
                  reCAPTCHA
                </div>
                <div className="text-[10px] text-slate-500 leading-tight">
                  <span className="font-semibold text-slate-700 block">protected by reCAPTCHA</span>
                  <span className="text-slate-400 hover:underline cursor-pointer">Privacy</span> - <span className="text-slate-400 hover:underline cursor-pointer">Terms</span>
                </div>
                <RotateCw className="w-3.5 h-3.5 text-slate-400 ml-1 cursor-pointer hover:text-slate-600" />
              </div>

              {/* Submit Button (Exact pill style from screenshot) */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#1e6cb7] hover:bg-[#185aa0] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer"
                >
                  Submit
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. NEW TRANSACTION & EXPORT REPORTS MODALS (FOR WORKSPACE USAGE)
  // =========================================================================
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
            : 'from-brand-500 via-indigo-600 to-sky-400'
        }`}></div>

        {/* Modal Header */}
        <div className="flex items-start justify-between px-6 sm:px-8 pt-7 pb-5 border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-white relative z-10">
          <div className="space-y-1.5">
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
              {type === 'new-txn' && 'Record New ERP Transaction'}
              {type === 'export' && 'Export Enterprise Reports'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
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

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8">
          {type === 'new-txn' && (
            <form onSubmit={handleTxnSubmit} className="space-y-4">
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
                    Total Value (USD) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="1"
                    required
                    placeholder="e.g. 14500.00"
                    value={txnForm.amount}
                    onChange={(e) => setTxnForm({ ...txnForm, amount: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border-2 border-slate-200 hover:border-slate-300 focus:outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 transition-all text-navy-950 placeholder:text-slate-400 font-medium bg-slate-50/50 focus:bg-white font-mono"
                  />
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
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm shadow-lg shadow-emerald-600/25 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>Post Entry to Ledger</span>
                </button>
              </div>
            </form>
          )}

          {type === 'export' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <button
                  onClick={() => handleExport('excel')}
                  className="p-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all text-left group"
                >
                  <FileSpreadsheet className="w-8 h-8 text-emerald-600 mb-2 group-hover:scale-110 transition-transform" />
                  <h5 className="font-bold text-sm text-navy-950">Excel Spreadsheet</h5>
                  <p className="text-[11px] text-slate-500 mt-1">Multi-tab workbook with formulas</p>
                </button>
                <button
                  onClick={() => handleExport('pdf')}
                  className="p-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-rose-500 hover:shadow-lg transition-all text-left group"
                >
                  <FileText className="w-8 h-8 text-rose-600 mb-2 group-hover:scale-110 transition-transform" />
                  <h5 className="font-bold text-sm text-navy-950">Print-Ready PDF</h5>
                  <p className="text-[11px] text-slate-500 mt-1">Bank-compliant certified statements</p>
                </button>
                <button
                  onClick={() => handleExport('csv')}
                  className="p-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-brand-500 hover:shadow-lg transition-all text-left group"
                >
                  <Download className="w-8 h-8 text-brand-600 mb-2 group-hover:scale-110 transition-transform" />
                  <h5 className="font-bold text-sm text-navy-950">Raw CSV Data</h5>
                  <p className="text-[11px] text-slate-500 mt-1">Ready for PowerBI and analytics</p>
                </button>
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
