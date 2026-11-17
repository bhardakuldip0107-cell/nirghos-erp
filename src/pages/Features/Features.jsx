import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  LayoutDashboard, 
  ShieldCheck, 
  Layers, 
  ChevronRight,
  Database,
  Lock,
  Workflow,
  Globe2,
  Check,
  Zap,
  Cpu,
  KeyRound,
  Fingerprint,
  UserCheck,
  FileCheck,
  Terminal,
  Activity,
  Shield,
  Eye,
  TrendingUp,
  BarChart3,
  Boxes,
  Landmark,
  ShoppingCart,
  Users,
  Target
} from 'lucide-react';
import { coreFeatures } from '../../data/modules';
import DynamicIcon from '../../components/common/DynamicIcon';

export const Features = () => {
  const [activeTab, setActiveTab] = useState(coreFeatures[0].id);
  const currentFeature = coreFeatures.find(f => f.id === activeTab) || coreFeatures[0];

  const moduleShortLabels = {
    hrms: 'HRMS',
    crm: 'CRM',
    inventory: 'Inventory',
    finance: 'Finance',
    sales: 'Sales',
    purchase: 'Purchase',
    analytics: 'Reports & BI',
    roles: 'User & Roles'
  };

  const renderModuleCockpit = (tabId) => {
    switch (tabId) {
      case 'roles':
        return (
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider text-slate-200">
                  Zero-Trust RBAC & Shield Engine
                </span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30 font-mono font-bold">
                SOC2 TYPE II · ISO 27001
              </span>
            </div>

            {/* 3 Role Hierarchy Cards */}
            <div className="space-y-2.5">
              {/* Super Admin */}
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-indigo-500/40 hover:border-indigo-400 shadow-md transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 flex items-center justify-center">
                      <KeyRound className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-white block">Super Administrator</span>
                      <span className="text-[10px] text-indigo-300 font-mono">Level 5 · Cluster Root</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                    FIDO2 Hardware Key
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Full schema migration, multi-company tenant switching, and cryptographic master key rotation.
                </p>
              </div>

              {/* Branch / Operations Lead */}
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-cyan-500/40 hover:border-cyan-400 shadow-md transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center">
                      <UserCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-white block">Plant & Branch Manager</span>
                      <span className="text-[10px] text-cyan-300 font-mono">Level 3 · Operational Scope</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    Biometric 2FA Active
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Order approvals, stock dispatch release, price-tier overrides, and department user management.
                </p>
              </div>

              {/* Statutory Auditor */}
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-emerald-500/40 hover:border-emerald-400 shadow-md transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center">
                      <FileCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-black text-white block">Statutory Compliance Auditor</span>
                      <span className="text-[10px] text-emerald-300 font-mono">Level 2 · Read-Only Immutable</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    Zero Write Access
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Audit ledger inspection, GST reconciliation reports, and continuous read-only statutory verification.
                </p>
              </div>
            </div>

            {/* Live Cryptographic Audit Stream (Terminal Pod) */}
            <div className="p-3.5 rounded-2xl bg-black/70 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-300 flex items-center gap-1.5 pl-2">
                    <Terminal className="w-3 h-3 text-cyan-400" /> LIVE AUDIT STREAM
                  </span>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 font-bold">CHAIN: VERIFIED</span>
              </div>

              <div className="font-mono text-[10px] space-y-1 text-slate-300">
                <div className="flex items-start gap-1.5 text-slate-400">
                  <span className="text-cyan-400">15:42:01</span>
                  <span>[AUTH]</span>
                  <span className="text-slate-200">admin@nirghos.com</span>
                  <span className="text-emerald-400">FIDO2 WebAuthn PASS</span>
                </div>
                <div className="flex items-start gap-1.5 text-slate-400">
                  <span className="text-cyan-400">15:42:04</span>
                  <span>[RBAC]</span>
                  <span className="text-slate-200">challan_dispatch.release</span>
                  <span className="text-cyan-300">POLICY_PASS (L3)</span>
                </div>
                <div className="flex items-start gap-1.5 text-slate-400 truncate">
                  <span className="text-cyan-400">15:42:09</span>
                  <span>[SEAL]</span>
                  <span className="text-amber-300">Block #94827 SHA-256</span>
                  <span className="text-slate-400 truncate">e3b0c442...98f</span>
                </div>
              </div>
            </div>

            {/* Footer Telemetry */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-cyan-400" /> AES-256 GCM Field Encryption
              </span>
              <span className="text-emerald-400 font-bold">0 Active Threats</span>
            </div>
          </div>
        );

      case 'hrms':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider text-slate-200">
                  Workforce & Talent Engine
                </span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30 font-mono font-bold">
                1,420 ACTIVE STAFF
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Fingerprint className="w-4 h-4 text-brand-400" /> Biometric Geofenced Sync
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    98.6% On-Time
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Instant clock-in logs mapped to plant gates and GPS geofences.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-brand-400" /> 1-Click Payroll Batch
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    Automated TDS / PF
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Disburse salaries with automated tax calculations and instant bank upload slips.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-brand-400" /> Overtime & Leave Approval
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    WhatsApp Bot
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Shift managers approve overtime requests directly from mobile notifications.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-brand-400" /> HRMS Subsystem v2.8</span>
              <span className="text-emerald-400 font-bold">Zero Paperwork SLA</span>
            </div>
          </div>
        );

      case 'crm':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider text-slate-200">
                  Lead-to-Cash Pipeline Radar
                </span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30 font-mono font-bold">
                ₹4.8 Cr PIPELINE
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Target className="w-4 h-4 text-brand-400" /> Multi-Source Lead Capture
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Sub-Second Sync
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Auto-ingest leads from Indiamart, WhatsApp, Website forms & trade shows.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-brand-400" /> 1-Click Quote-to-Invoice
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Instant PDF
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Generate customized branded quotations with GST calculation in 15 seconds.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-brand-400" /> Automated Follow-Up Sequences
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    WhatsApp & Email
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Keep prospects engaged with smart follow-up triggers and reminder alerts.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-brand-400" /> Deal Velocity Engine</span>
              <span className="text-emerald-400 font-bold">94% Closing Rate</span>
            </div>
          </div>
        );

      case 'inventory':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider text-slate-200">
                  Warehouse & Stock Radar
                </span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30 font-mono font-bold">
                8 DEPOTS · 99.9% ACCURACY
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-brand-400" /> Batch & Lot Tracking
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    QR / Barcode
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Track expiry, heat numbers, and exact warehouse bin allocations in real-time.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-brand-400" /> Predictive Reorder Triggers
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    Auto PO Draft
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Automatic reorder alerts when safety stock dips below lead-time thresholds.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-brand-400" /> Inter-Warehouse Transfers
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    In-Transit Tracking
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Digital delivery challans and gate pass verification for multi-branch transit.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-brand-400" /> Bin Allocation Engine</span>
              <span className="text-emerald-400 font-bold">Zero Stockout SLA</span>
            </div>
          </div>
        );

      case 'finance':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider text-slate-200">
                  Double-Entry Ledger Engine
                </span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30 font-mono font-bold">
                100% AUDIT RECONCILED
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-brand-400" /> Automated Bank Feed Sync
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    AI Reconciliation
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Direct integration with leading banks for instant statement matching.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-brand-400" /> GST / VAT E-Invoice Gateway
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    IRN & QR Auto-Seal
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Generate government-compliant e-invoices with IRN and QR code automatically.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-brand-400" /> Instant P&L and Balance Sheet
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Real-Time GAAP
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Live financial health metrics with drill-down to individual journal vouchers.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-brand-400" /> Multi-Currency Ledger</span>
              <span className="text-emerald-400 font-bold">Zero Ledger Discrepancy</span>
            </div>
          </div>
        );

      case 'sales':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider text-slate-200">
                  Sales Dispatch & Pricing Hub
                </span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30 font-mono font-bold">
                10,000+ ORDERS / MO
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-brand-400" /> Dynamic Tiered Price Books
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Client Specific
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Wholesale, retail, and distributor pricing applied automatically upon checkout.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-brand-400" /> Delivery Challans & E-Way Bills
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    NIC Portal API
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">One-click E-Way Bill generation directly synced with government logistics servers.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Lock className="w-4 h-4 text-brand-400" /> Credit Limit Guard & Locks
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Auto-Lock Dispatch
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Halts dispatch automatically if customer ledger crosses approved credit limits.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-brand-400" /> Order Processing Core</span>
              <span className="text-emerald-400 font-bold">Sub-Second Processing</span>
            </div>
          </div>
        );

      case 'purchase':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider text-slate-200">
                  Procurement & 3-Way Match
                </span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30 font-mono font-bold">
                14% COST SAVINGS
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-brand-400" /> Multi-Vendor RFQ Comparison
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Rate Matrix
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Side-by-side quote comparison matrix with delivery lead-time scoring.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-brand-400" /> 3-Way Invoice Validation
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    PO vs GRN vs Bill
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Strict automated checks prevent payment for unordered or unverified items.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-brand-400" /> Vendor SLA & On-Time Score
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Automated Rating
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Automatic supplier scorecard based on rejection rates and fulfillment timeliness.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-brand-400" /> Sourcing Engine v2.8</span>
              <span className="text-emerald-400 font-bold">Zero Fraud Guarantee</span>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-wider text-slate-200">
                  Executive Decision Intelligence
                </span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30 font-mono font-bold">
                SUB-SECOND BI
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-brand-400" /> Real-Time Cash Flow Forecasting
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Predictive AI
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Anticipate liquidity positions and payment liabilities 30-90 days in advance.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-brand-400" /> Multi-Branch Drill-Down BI
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    Zero Query Lag
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Filter profitability by product line, sales territory, branch, or customer segment.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/90 border-2 border-slate-800 hover:border-brand-500/50 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-white flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-brand-400" /> Daily CXO Morning Briefs
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Auto PDF / Email
                  </span>
                </div>
                <p className="text-slate-400 text-[11px]">Automated 8:00 AM summary emails delivered directly to leadership devices.</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-brand-400" /> Analytics Cluster v2.8</span>
              <span className="text-emerald-400 font-bold">Live Data Streams</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
            <span className="text-brand-400 font-semibold">Core ERP Architecture</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>Standard Enterprise Foundation</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Enterprise Core Modules Engine
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              Every specialized industry solution in Nirghos ERP is anchored by our high-performance core engine. Explore the core modules that power modern operations, eliminate data silos, and automate financial reconciliation.
            </p>

            {/* 3 Metric Cards Under Heading */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 max-w-3xl">
              <div className="px-5 py-3 rounded-2xl bg-navy-900/90 border-2 border-slate-700/80 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-400/40 text-brand-300 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  8
                </div>
                <div>
                  <span className="text-xs font-black text-white block">Core Engine Modules</span>
                  <span className="text-[10px] text-slate-400 block">100% Native Architecture</span>
                </div>
              </div>

              <div className="px-5 py-3 rounded-2xl bg-navy-900/90 border-2 border-slate-700/80 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-black text-white block">Double-Entry Ledger</span>
                  <span className="text-[10px] text-slate-400 block">Immutable Audit Trails</span>
                </div>
              </div>

              <div className="px-5 py-3 rounded-2xl bg-navy-900/90 border-2 border-slate-700/80 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-cyan-300" />
                </div>
                <div>
                  <span className="text-xs font-black text-white block">Sub-Second Sync</span>
                  <span className="text-[10px] text-slate-400 block">Zero Latency Data Hooks</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Feature Tabs & In-depth View */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-12 -mt-12 relative z-20">
        
        {/* Navigation Selector Bar (High-Tech Module Switcher Card) */}
        <div className="relative bg-slate-100/90 p-3.5 rounded-3xl border-2 border-slate-300 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15),0_8px_20px_-4px_rgba(0,0,0,0.06)] ring-4 ring-slate-900/5 overflow-hidden">
          {/* Top Accent Gradient Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-500 via-indigo-500 to-sky-400"></div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pt-1">
            {coreFeatures.map((feat) => {
              const isActive = activeTab === feat.id;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveTab(feat.id)}
                  className={`group relative p-4 rounded-2xl text-center transition-all duration-300 flex flex-col items-center justify-center gap-2.5 cursor-pointer border-2 ${
                    isActive 
                      ? 'bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white border-brand-500 shadow-xl shadow-navy-950/25 ring-4 ring-brand-500/20 scale-[1.03]' 
                      : 'bg-white text-slate-700 border-slate-300 hover:border-brand-500 hover:bg-slate-50 hover:text-navy-950 shadow-sm hover:shadow-md hover:-translate-y-0.5'
                  }`}
                >
                  {/* Active Top Mini Accent */}
                  {isActive && (
                    <div className="absolute top-0 inset-x-4 h-1 bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400 rounded-full"></div>
                  )}

                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border-2 ${
                    isActive
                      ? 'bg-brand-500/20 text-brand-300 border-brand-400/50 shadow-md'
                      : 'bg-slate-50 text-slate-600 border-slate-300 shadow-2xs group-hover:scale-105 group-hover:border-brand-400 group-hover:text-brand-600 group-hover:bg-brand-50/50'
                  }`}>
                    <DynamicIcon 
                      name={feat.icon} 
                      className={`w-5 h-5 ${isActive ? 'text-brand-300 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]' : 'text-slate-600 group-hover:text-brand-600'}`} 
                    />
                  </div>
                  
                  <div className="w-full text-center">
                    <span className="text-xs font-black block truncate leading-tight group-hover:text-brand-600 transition-colors">
                      {moduleShortLabels[feat.id] || feat.name.split(' ')[0]}
                    </span>
                    <span className={`text-[9px] font-extrabold block uppercase tracking-wider mt-0.5 ${
                      isActive ? 'text-brand-400' : 'text-slate-400 group-hover:text-slate-500'
                    }`}>
                      {isActive ? 'Active' : (feat.id === 'roles' ? 'Security' : 'Module')}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Module Detail Canvas (Hero Showcase) */}
        <div className="relative bg-white rounded-3xl border-2 border-slate-300/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12),0_10px_25px_-5px_rgba(15,23,42,0.06)] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center overflow-hidden">
          
          {/* Top Ambient Highlight Gradient Bar */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-500 via-indigo-600 to-sky-400"></div>

          {/* Left Column: Module Deep Dive */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800 text-white flex items-center justify-center shadow-lg shadow-brand-600/30 border-2 border-brand-400/40 shrink-0">
                <DynamicIcon name={currentFeature.icon} className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 border-2 border-brand-200 text-xs font-black uppercase tracking-wider shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                  <span>{currentFeature.tagline}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-navy-950 tracking-tight">
                  {currentFeature.name}
                </h2>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {currentFeature.description}
            </p>

            {/* If User & Role Management is active: Add Enterprise Security Guarantee Pod */}
            {currentFeature.id === 'roles' && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 text-white border-2 border-brand-500/40 shadow-xl space-y-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-brand-400" />
                    <span className="text-xs font-black uppercase tracking-wider text-white">
                      Zero-Trust Security & Compliance Matrix
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    100% AUDIT READY
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-400/30 transition-colors">
                    <span className="text-[9px] text-slate-400 block font-semibold uppercase">Encryption</span>
                    <span className="text-xs font-black text-brand-300">AES-256 Bit</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors">
                    <span className="text-[9px] text-slate-400 block font-semibold uppercase">Authentication</span>
                    <span className="text-xs font-black text-cyan-300">FIDO2 / 2FA</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/30 transition-colors">
                    <span className="text-[9px] text-slate-400 block font-semibold uppercase">Audit Chain</span>
                    <span className="text-xs font-black text-emerald-300">SHA-256 Hash</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-colors">
                    <span className="text-[9px] text-slate-400 block font-semibold uppercase">Compliance</span>
                    <span className="text-xs font-black text-amber-300">SOC2 Type II</span>
                  </div>
                </div>
              </div>
            )}

            {/* Capabilities Micro-Cards Grid */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                  <span>Functional Highlights & Capabilities:</span>
                </h4>
                <span className="text-[11px] font-mono font-bold text-slate-400">
                  {currentFeature.capabilities.length} Core Features
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentFeature.capabilities.map((cap, i) => (
                  <div 
                    key={i} 
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border-2 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all group cursor-default ${
                      currentFeature.id === 'roles'
                        ? 'bg-gradient-to-br from-slate-50 via-sky-50/20 to-white border-slate-200/90 hover:border-brand-500'
                        : 'bg-gradient-to-br from-slate-50 via-white to-slate-50/80 border-slate-200/90 hover:border-brand-500'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <Check className="w-3 h-3 text-emerald-700 group-hover:text-white transition-colors" />
                    </div>
                    <div className="w-full">
                      <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-brand-600 transition-colors leading-snug block">
                        {cap}
                      </span>
                      {currentFeature.id === 'roles' && (
                        <span className="text-[10px] font-mono text-cyan-700 font-extrabold mt-1 block">
                          {i === 0 && '• Column & Field Masking'}
                          {i === 1 && '• Multi-Company Isolation'}
                          {i === 2 && '• Immutable Cryptographic Chain'}
                          {i === 3 && '• WebAuthn & Hardware Keys'}
                          {i === 4 && '• Multi-Cloud Geo-Redundant'}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 border-t-2 border-slate-100 flex flex-wrap items-center gap-4">
              <Link
                to="/dashboard"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-brand-600/30 flex items-center gap-2 border border-brand-400/30 active:scale-95"
              >
                <LayoutDashboard className="w-4 h-4 text-brand-300" />
                <span>Test in Live Interactive Demo</span>
              </Link>
              <Link
                to="/industries"
                className="px-6 py-3.5 rounded-2xl bg-white border-2 border-slate-300/90 text-slate-700 hover:text-navy-950 hover:border-slate-400 font-extrabold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-1.5"
              >
                <span>View 25 Industry Blueprints</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic Live Module Cockpit */}
          <div className="lg:col-span-5 bg-gradient-to-br from-navy-950 via-slate-900 to-navy-950 rounded-3xl p-6 sm:p-7 text-white border-2 border-slate-800 shadow-2xl relative overflow-hidden ring-1 ring-white/10">
            {/* Ambient Glow Orb */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              {renderModuleCockpit(activeTab)}
            </div>
          </div>

        </div>

        {/* All 8 Core Modules Cards Grid */}
        <div className="space-y-10 pt-10">
          <div className="text-center max-w-3xl mx-auto space-y-3.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 border-2 border-brand-300 text-xs font-black uppercase tracking-wider shadow-2xs">
              <Layers className="w-4 h-4 text-brand-600" />
              <span>ENTERPRISE ARCHITECTURE SUITE</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-black text-navy-950 tracking-tight">
              Overview of All 8 Core Modules
            </h3>
            <p className="text-xs sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Every specialized industry blueprint connects directly to these 8 native cloud engines with zero data latency. Click any card to inspect its live capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((f, idx) => {
              const isCardActive = activeTab === f.id;
              return (
                <div 
                  key={f.id}
                  onClick={() => {
                    setActiveTab(f.id);
                    window.scrollTo({ top: 360, behavior: 'smooth' });
                  }}
                  className={`group relative p-7 rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden ${
                    isCardActive
                      ? 'bg-gradient-to-b from-navy-950 via-slate-900 to-navy-950 text-white border-brand-400 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.3)] ring-4 ring-brand-500/20 -translate-y-2'
                      : 'bg-white text-slate-800 border-slate-300 hover:border-brand-500 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08),0_4px_10px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_45px_-10px_rgba(37,99,235,0.22)] hover:-translate-y-2.5 hover:ring-4 hover:ring-brand-500/15'
                  }`}
                >
                  {/* Top Ambient Highlight Gradient Stripe */}
                  <div className={`absolute top-0 inset-x-0 h-1.5 transition-all duration-300 ${
                    isCardActive
                      ? 'h-2 bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400'
                      : 'bg-gradient-to-r from-brand-500 via-indigo-500 to-sky-400 opacity-80 group-hover:opacity-100 group-hover:h-2'
                  }`}></div>

                  <div>
                    {/* Icon & Index Row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold transition-all duration-300 border-2 ${
                        isCardActive 
                          ? 'bg-gradient-to-br from-brand-500 to-brand-700 text-white border-brand-300 shadow-lg shadow-brand-500/40 scale-105' 
                          : f.id === 'roles'
                            ? 'bg-gradient-to-br from-cyan-900 via-slate-900 to-navy-950 text-cyan-300 border-cyan-500/40 group-hover:from-cyan-600 group-hover:to-brand-700 group-hover:text-white group-hover:border-cyan-300 group-hover:scale-110 shadow-md'
                            : 'bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200/80 text-navy-950 border-slate-300 group-hover:from-brand-600 group-hover:to-brand-800 group-hover:text-white group-hover:border-brand-400 group-hover:scale-110 shadow-md group-hover:shadow-brand-500/30'
                      }`}>
                        <DynamicIcon name={f.icon} className="w-7 h-7" />
                      </div>
                      
                      <div className="flex items-center gap-1.5">
                        {isCardActive && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        )}
                        {f.id === 'roles' && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-700 border border-cyan-400/30">
                            SOC2
                          </span>
                        )}
                        <span className={`text-[11px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full border-2 ${
                          isCardActive
                            ? 'bg-brand-500/20 text-brand-300 border-brand-400/50'
                            : 'bg-slate-100 text-slate-500 border-slate-300 group-hover:bg-brand-50 group-hover:text-brand-700 group-hover:border-brand-300'
                        }`}>
                          #0{idx + 1}
                        </span>
                      </div>
                    </div>

                    <span className={`text-[10px] font-black uppercase tracking-wider block mb-1.5 ${
                      isCardActive ? 'text-brand-300' : 'text-brand-600'
                    }`}>
                      {f.tagline}
                    </span>

                    <h4 className={`text-xl font-black mb-2.5 tracking-tight ${
                      isCardActive ? 'text-white' : 'text-navy-950 group-hover:text-brand-600 transition-colors'
                    }`}>
                      {f.name}
                    </h4>

                    <p className={`text-xs leading-relaxed line-clamp-3 mb-4 font-medium ${
                      isCardActive ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {f.description}
                    </p>

                    {/* 2 Feature Capabilities Preview Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-5">
                      {f.capabilities.slice(0, 2).map((cap, i) => (
                        <span 
                          key={i} 
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border truncate max-w-full ${
                            isCardActive 
                              ? 'bg-navy-900/90 text-brand-300 border-navy-700' 
                              : 'bg-slate-50 text-slate-600 border-slate-200 group-hover:bg-brand-50/70 group-hover:text-brand-700 group-hover:border-brand-200'
                          }`}
                        >
                          ✓ {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Inspect Action Row */}
                  <div className={`pt-3.5 border-t-2 text-xs font-bold flex items-center justify-between transition-colors ${
                    isCardActive 
                      ? 'border-slate-800 text-brand-300' 
                      : 'border-slate-100 text-slate-500 group-hover:text-brand-600'
                  }`}>
                    <span className="font-extrabold flex items-center gap-1.5">
                      <span>{isCardActive ? 'Currently Active' : 'Inspect Details'}</span>
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isCardActive ? 'text-brand-300' : 'group-hover:translate-x-1.5 text-slate-400 group-hover:text-brand-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Features;
