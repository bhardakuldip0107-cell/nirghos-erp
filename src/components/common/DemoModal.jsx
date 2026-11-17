import React, { useState } from 'react';
import { X, Send, CheckCircle2, Calendar, FileText, Download } from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { industriesData } from '../../data/industries';

export const DemoModal = ({ isOpen, onClose, type = 'book-demo', defaultIndustry = '' }) => {
  const { showToast, addTransaction } = useDemo();

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    industry: defaultIndustry || 'Manufacturing & Fabrication',
    teamSize: '20-100',
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
    }, 1200);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div>
            <h3 className="text-lg font-bold text-navy-900">
              {type === 'book-demo' && 'Schedule a Personalized Live Demo'}
              {type === 'new-txn' && 'Record New ERP Transaction'}
              {type === 'export' && 'Export Enterprise Reports'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {type === 'book-demo' && 'Explore tailored workflows for your industry in 30 minutes'}
              {type === 'new-txn' && 'Add an entry to the live demonstration ledger'}
              {type === 'export' && 'Download compliance statements, P&L, and audit sheets'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {type === 'book-demo' && (
            submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-navy-900">Demo Scheduled!</h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you! An invite link has been dispatched to your email. Get ready to experience Nirghos ERP.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Industry</label>
                    <select
                      value={bookingForm.industry}
                      onChange={(e) => setBookingForm({ ...bookingForm, industry: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white transition"
                    >
                      {industriesData.map((ind) => (
                        <option key={ind.slug} value={ind.name}>{ind.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company Size</label>
                    <select
                      value={bookingForm.teamSize}
                      onChange={(e) => setBookingForm({ ...bookingForm, teamSize: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white transition"
                    >
                      <option value="1-15">1-15 Employees (Startup)</option>
                      <option value="16-50">16-50 Employees (Mid-size)</option>
                      <option value="51-200">51-200 Employees (Growing)</option>
                      <option value="200+">200+ Employees (Enterprise)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={bookingForm.preferredDate}
                      onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition"
                    />
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 rounded-lg shadow-sm flex items-center gap-2 transition"
                  >
                    <Calendar className="w-4 h-4 text-brand-400" />
                    Confirm Demo Booking
                  </button>
                </div>
              </form>
            )
          )}

          {type === 'new-txn' && (
            <form onSubmit={handleTxnSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Entity / Client / Vendor *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Industrial Works"
                  value={txnForm.entity}
                  onChange={(e) => setTxnForm({ ...txnForm, entity: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Transaction Type</label>
                  <select
                    value={txnForm.type}
                    onChange={(e) => setTxnForm({ ...txnForm, type: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
                  >
                    <option value="Sales Invoice">Sales Invoice</option>
                    <option value="Purchase Order">Purchase Order</option>
                    <option value="Dispatch Challan">Dispatch Challan</option>
                    <option value="Service Retainer">Service Retainer</option>
                    <option value="Receipt Voucher">Receipt Voucher</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Amount ($ USD) *</label>
                  <input
                    type="number"
                    required
                    placeholder="15000"
                    value={txnForm.amount}
                    onChange={(e) => setTxnForm({ ...txnForm, amount: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Status</label>
                  <select
                    value={txnForm.status}
                    onChange={(e) => setTxnForm({ ...txnForm, status: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
                  >
                    <option value="Paid">Paid</option>
                    <option value="Processing">Processing</option>
                    <option value="Pending">Pending</option>
                    <option value="Overdue">Overdue</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Payment Method</label>
                  <select
                    value={txnForm.method}
                    onChange={(e) => setTxnForm({ ...txnForm, method: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
                  >
                    <option value="Direct Bank Wire">Direct Bank Wire</option>
                    <option value="Credit Term (30 Days)">Credit Term (30 Days)</option>
                    <option value="Online Payment Gateway">Online Payment Gateway</option>
                    <option value="Letter of Credit">Letter of Credit</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg shadow-sm flex items-center gap-2 transition"
                >
                  Save Transaction
                </button>
              </div>
            </form>
          )}

          {type === 'export' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Choose the desired format to export filtered transactions, ledger entries, and KPI analytics:
              </p>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handleExport('excel')}
                  className="p-4 border rounded-xl hover:border-brand-500 hover:bg-brand-50/50 flex flex-col items-center justify-center text-center transition group"
                >
                  <FileText className="w-8 h-8 text-emerald-600 mb-2 group-hover:scale-110 transition" />
                  <span className="text-sm font-semibold text-navy-900">Microsoft Excel</span>
                  <span className="text-[11px] text-slate-500">.xlsx format</span>
                </button>

                <button
                  onClick={() => handleExport('pdf')}
                  className="p-4 border rounded-xl hover:border-brand-500 hover:bg-brand-50/50 flex flex-col items-center justify-center text-center transition group"
                >
                  <Download className="w-8 h-8 text-rose-600 mb-2 group-hover:scale-110 transition" />
                  <span className="text-sm font-semibold text-navy-900">Audit PDF</span>
                  <span className="text-[11px] text-slate-500">Official statement</span>
                </button>

                <button
                  onClick={() => handleExport('csv')}
                  className="p-4 border rounded-xl hover:border-brand-500 hover:bg-brand-50/50 flex flex-col items-center justify-center text-center transition group"
                >
                  <FileText className="w-8 h-8 text-brand-600 mb-2 group-hover:scale-110 transition" />
                  <span className="text-sm font-semibold text-navy-900">Raw CSV</span>
                  <span className="text-[11px] text-slate-500">Universal data</span>
                </button>
              </div>
              <div className="text-right pt-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-slate-600 hover:text-slate-800"
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

