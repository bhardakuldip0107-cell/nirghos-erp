import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowUpRight, 
  CheckCircle,
  FileText
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';

export const Footer = () => {
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | null
  const { isAuthenticated, profile } = useDemo();

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-800/80 pt-16 pb-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Top Company & Value Proposition Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-navy-800">
          
          {/* 1. Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg">
                <div className="grid grid-cols-2 gap-1 p-2">
                  <div className="w-2 h-2 rounded-sm bg-white"></div>
                  <div className="w-2 h-2 rounded-sm bg-brand-200"></div>
                  <div className="w-2 h-2 rounded-sm bg-brand-200"></div>
                  <div className="w-2 h-2 rounded-sm bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  Nirghos<span className="text-brand-400">ERP</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                  One Platform. Every Business.
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pr-2">
              Nirghos ERP is the modern multi-industry enterprise platform with specialized pre-configured workflows for 25 sectors.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 bg-navy-900 px-3 py-1.5 rounded-lg border border-navy-800 self-start">
                <ShieldCheck className="w-4 h-4 text-brand-400" /> ISO 27001 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 bg-navy-900 px-3 py-1.5 rounded-lg border border-navy-800 self-start">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> 99.99% Cloud SLA
              </span>
            </div>
          </div>

          {/* 2. Platform & Solutions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Platform & Solution
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-brand-400 transition">Homepage</Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-brand-400 transition">All 25 Industries</Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-brand-400 transition">Core ERP Modules</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-400 transition">About Nirghos</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-400 transition">Contact & Support</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-brand-400 font-semibold hover:text-brand-300 transition flex items-center gap-1">
                  Demo Dashboard <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Main Services (Key Industries) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-400"></span>
              <span>Services</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/industries/manufacturing" className="hover:text-brand-400 transition">Manufacturing & Fabrication</Link>
              </li>
              <li>
                <Link to="/industries/trading" className="hover:text-brand-400 transition">Trading & Wholesale</Link>
              </li>
              <li>
                <Link to="/industries/retail" className="hover:text-brand-400 transition">Retail Shops & POS</Link>
              </li>
              <li>
                <Link to="/industries/hospital" className="hover:text-brand-400 transition">Hospitals & Clinics</Link>
              </li>
              <li>
                <Link to="/industries/construction" className="hover:text-brand-400 transition">Construction & Real Estate</Link>
              </li>
              <li>
                <Link to="/industries/it-software" className="hover:text-brand-400 transition">IT & Software Companies</Link>
              </li>
              <li>
                <Link to="/industries/logistics" className="hover:text-brand-400 transition">Logistics & Transport</Link>
              </li>
              <li className="pt-1.5">
                <Link to="/industries" className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center gap-1">
                  View All 25 Services <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Core Modules */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Core Modules
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><Link to="/features" className="hover:text-brand-400 transition">HRMS & Global Payroll</Link></li>
              <li><Link to="/features" className="hover:text-brand-400 transition">CRM & Sales Pipeline</Link></li>
              <li><Link to="/features" className="hover:text-brand-400 transition">Inventory & Warehouse</Link></li>
              <li><Link to="/features" className="hover:text-brand-400 transition">Finance & Ledger</Link></li>
              <li><Link to="/features" className="hover:text-brand-400 transition">Procurement & 3-Way Match</Link></li>
              <li><Link to="/features" className="hover:text-brand-400 transition">Business Intelligence BI</Link></li>
              <li><Link to="/features" className="hover:text-brand-400 transition">Granular RBAC Security</Link></li>
            </ul>
          </div>

          {/* 5. Contact Information Placeholders */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Global Support
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>Enterprise Tech Blvd, Silicon District</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>+1 (800) 647-4467</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span>enterprise@nirghoserp.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-brand-400 shrink-0" />
                <span>www.nirghoserp.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Nirghos ERP Platforms, Inc. All rights reserved. "One Platform. Every Business." is a registered trademark.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <Link to="/login" className="hover:text-white transition">
              Customer Portal
            </Link>
            <span>•</span>
            <Link to="/register" className="hover:text-white transition">
              Free Trial
            </Link>
          </div>
        </div>

      </div>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white text-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-600" />
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions of Service'}
              </h3>
              <button 
                onClick={() => setLegalModal(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-semibold"
              >
                Close
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto text-xs text-slate-600 space-y-3 pr-2">
              <p>
                <strong>1. Overview:</strong> Nirghos ERP provides multi-industry enterprise management software designed to safeguard enterprise data with end-to-end encryption, strict confidentiality, and tenant isolation.
              </p>
              <p>
                <strong>2. Data Protection & Sovereignty:</strong> Customer financial records, employee biometric logs, patient medical charts, and trade secrets remain solely owned by the client organization. Nirghos ERP never sells, monetizes, or shares organizational data with third parties.
              </p>
              <p>
                <strong>3. Service Availability SLA:</strong> Enterprise subscriptions include 99.99% uptime assurance with automated geo-redundant backups, real-time failover, and dedicated SLA response windows.
              </p>
              <p>
                <strong>4. Compliance Standards:</strong> Built to meet ISO/IEC 27001, SOC 2 Type II, GDPR, HIPAA, and regional GST/VAT statutory invoicing specifications.
              </p>
            </div>
            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-navy-900 text-white rounded-lg text-xs font-semibold hover:bg-navy-800 transition"
              >
                I Understand & Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

