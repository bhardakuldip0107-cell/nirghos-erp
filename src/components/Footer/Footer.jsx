import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  FileText,
  X,
  Building,
  Heart
} from 'lucide-react';

export const Footer = () => {
  const [legalModal, setLegalModal] = useState(null); // 'privacy' | 'terms' | 'investor' | null

  return (
    <footer className="bg-[#f8fafc] text-slate-600 border-t border-slate-200/80 pt-14 pb-8 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* TOP SECTION: 4 COLUMNS (LOGO, SOLUTION, COMPANY, MOBILE APP)              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10">
          
          {/* Column 1: Brand Logo, Tagline, Socials (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group focus:outline-none">
              <img 
                src="/nirghos-logo-nav.png" 
                alt="NIRGHOS ERP Official Logo" 
                className="h-9 sm:h-10 w-auto object-contain drop-shadow-xs group-hover:scale-105 transition-transform" 
              />
              <span className="text-[#0284c7] text-[10px] font-black uppercase px-1.5 py-0.5 rounded bg-sky-100 border border-sky-200 tracking-wider">
                ERP
              </span>
            </Link>

            <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
              Intelligent software for retailers, MSMEs &amp; enterprises to simplify operations, automate workflows and grow with confidence.
            </p>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-2.5 pt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-700 hover:text-[#0284c7] hover:border-[#0284c7] hover:shadow-xs transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-700 hover:text-[#0284c7] hover:border-[#0284c7] hover:shadow-xs transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-700 hover:text-[#0284c7] hover:border-[#0284c7] hover:shadow-xs transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-700 hover:text-[#0284c7] hover:border-[#0284c7] hover:shadow-xs transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-2xs flex items-center justify-center text-slate-700 hover:text-[#0284c7] hover:border-[#0284c7] hover:shadow-xs transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions & Products (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">Products</h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600">
              <li>
                <Link to="/ai-solutions" className="text-[#0284c7] font-bold hover:underline flex items-center gap-1">
                  <span>AI Solutions</span>
                  <span className="text-[9px] bg-sky-100 text-[#0284c7] px-1 rounded">NEW</span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#0284c7] font-semibold transition-colors">Pricing Plans</Link>
              </li>
              <li>
                <Link to="/industries/retail" className="hover:text-[#0284c7] transition-colors">Supermarket POS</Link>
              </li>
              <li>
                <Link to="/industries/gems-jewellery" className="hover:text-[#0284c7] transition-colors">Jewellery &amp; Bullion ERP</Link>
              </li>
              <li>
                <Link to="/industries/textile" className="hover:text-[#0284c7] transition-colors">Apparel &amp; Footwear ERP</Link>
              </li>
              <li>
                <Link to="/industries/manufacturing" className="hover:text-[#0284c7] transition-colors">Manufacturing BOM</Link>
              </li>
              <li>
                <Link to="/industries/trading" className="hover:text-[#0284c7] transition-colors">Multi-Godown WMS</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (Span 3) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">Company</h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600">
              <li>
                <Link to="/about" className="hover:text-[#0284c7] transition-colors">About Nirghos</Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#0284c7] transition-colors">Browse 25 Industries</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-[#0284c7] transition-colors">Client Testimonials</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-[#0284c7] transition-colors">ERP Insights &amp; Blogs</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#0284c7] transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0284c7] transition-colors">Contact Sales</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get Nirghos Mobile App (Span 4, with Left Divider) */}
          <div className="lg:col-span-4 lg:border-l lg:border-slate-200/80 lg:pl-8 xl:pl-10 space-y-3.5">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">Get Nirghos Mobile App</h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Manage your business on the go with Nirghos mobile app.
            </p>

            {/* Store Badges (Exact styling from screenshot) */}
            <div className="flex flex-col gap-2.5 pt-1">
              {/* Google Play Store Badge */}
              <a
                href="#google-play"
                onClick={(e) => { e.preventDefault(); alert("Nirghos ERP Mobile App is available on Google Play Store."); }}
                className="w-48 bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-3 py-2 flex items-center gap-2.5 transition border border-slate-800 shadow-2xs group cursor-pointer"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 512 512">
                  <path fill="#4285F4" d="M32.5 16.5C30.6 18.5 29.5 21.6 29.5 25.8V486.2c0 4.2 1.1 7.3 3 9.3l237.3-247.9L32.5 16.5z"/>
                  <path fill="#FBBC04" d="M375.4 349.3L269.8 247.6 32.5 495.5c3.3 1.8 7.3 2 11.2-.2l331.7-146z"/>
                  <path fill="#EA4335" d="M375.4 162.7L43.7 16.7C39.8 14.5 35.8 14.7 32.5 16.5l237.3 231.1 105.6-84.9z"/>
                  <path fill="#34A853" d="M482.5 237.9c12.7 7.2 12.7 19 0 26.2l-107.1 59.4-105.6-75.9 105.6-75.9 107.1 66.2z"/>
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] uppercase tracking-wider text-slate-300 font-medium leading-none">GET IT ON</span>
                  <span className="text-sm font-bold leading-tight font-sans text-white">Google Play</span>
                </div>
              </a>

              {/* Apple App Store Badge */}
              <a
                href="#app-store"
                onClick={(e) => { e.preventDefault(); alert("Nirghos ERP Mobile App is available on Apple App Store."); }}
                className="w-48 bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-3 py-2 flex items-center gap-2.5 transition border border-slate-800 shadow-2xs group cursor-pointer"
              >
                <svg className="w-5 h-5 shrink-0 fill-white" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.58-7.77-11.64-14.19-5.99-9.46-10.77-20.15-14.34-32.08-3.57-11.93-5.35-23.3-5.35-34.12 0-14.79 3.59-27.18 10.77-37.16 7.18-9.98 16.27-15.06 27.27-15.24 4.8 0 10.15 1.25 16.04 3.76 5.89 2.51 9.8 3.86 11.73 4.07 2.14-.34 6.27-1.74 12.39-4.21 6.12-2.47 11.37-3.59 15.75-3.35 15.22 1.01 26.68 6.64 34.39 16.89-13.38 8.16-19.92 19.38-19.61 33.67.31 11.39 4.67 20.89 13.08 28.5 3.86 3.56 8.35 6.21 13.48 7.96-2.93 8.76-6.66 17.58-11.19 26.47zM119.22 33.51c0-7.85 2.82-15.25 8.46-22.18 5.64-6.93 12.65-11.02 21.03-12.27.15 1.08.23 2.17.23 3.26 0 7.85-2.99 15.48-8.97 22.88-5.98 7.4-13.08 11.62-21.3 12.66-.45-1.44-.67-2.88-.67-4.35z"/>
                </svg>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] text-slate-300 font-medium leading-none">Available on the</span>
                  <span className="text-sm font-bold leading-tight font-sans text-white">App Store</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MIDDLE FLOATING WHITE BAR: CONTACT PILLS (EMAIL & PHONE)                 */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-2xl sm:rounded-full border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] px-6 sm:px-8 py-3.5 sm:py-4 my-6 flex items-center justify-center">
          
          {/* Email & Phone Action Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-[13px] font-semibold text-slate-700">
            <a 
              href="mailto:infinitysofttech@gmail.com" 
              className="flex items-center gap-2.5 hover:text-[#0284c7] transition group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0284c7] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium text-slate-800 group-hover:text-[#0284c7] transition">infinitysofttech@gmail.com</span>
            </a>

            <div className="hidden sm:block w-px h-5 bg-slate-200"></div>

            <a 
              href="tel:+919409259294" 
              className="flex items-center gap-2.5 hover:text-[#0284c7] transition group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0284c7] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium text-slate-800 group-hover:text-[#0284c7] transition">+91 94092 59294</span>
            </a>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM SECTION: LEGAL LINKS, MADE WITH HEART, COPYRIGHT                   */}
        {/* ========================================================================= */}
        <div className="pt-4 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          
          {/* Left: Legal Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setLegalModal('investor')}
              className="hover:text-slate-800 transition underline-offset-4 hover:underline cursor-pointer"
            >
              Investor Relations
            </button>
            <span className="text-slate-300">|</span>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-800 transition underline-offset-4 hover:underline cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <span className="text-slate-300">|</span>
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-800 transition underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>

          {/* Center: Made with Heart */}
          <div className="flex items-center gap-1.5 text-slate-500 font-medium">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>from India</span>
          </div>

          {/* Right: Copyright */}
          <div className="text-slate-500">
            © {new Date().getFullYear()} Infinity Soft Tech Pvt. Ltd.
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE LEGAL MODAL                                                   */}
      {/* ========================================================================= */}
      {legalModal && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setLegalModal(null)}
        >
          <div 
            className="bg-white text-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0284c7]" />
                {legalModal === 'privacy' && 'Privacy Policy'}
                {legalModal === 'terms' && 'Terms & Conditions of Service'}
                {legalModal === 'investor' && 'Investor Relations & Governance'}
              </h3>
              <button 
                type="button"
                onClick={() => setLegalModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto text-xs text-slate-600 space-y-3 pr-2 leading-relaxed">
              {legalModal === 'privacy' && (
                <>
                  <p>
                    <strong>1. Overview:</strong> Nirghos ERP Solutions Pvt. Ltd. is committed to protecting the privacy, confidentiality, and integrity of organizational and customer records.
                  </p>
                  <p>
                    <strong>2. Data Protection & Sovereignty:</strong> Customer financial records, employee biometric logs, inventory counts, and trade data remain solely owned by the client organization. Nirghos ERP utilizes military-grade 256-bit AES encryption and never monetizes or shares organizational data with third parties.
                  </p>
                  <p>
                    <strong>3. Compliance Standards:</strong> Built to adhere to ISO/IEC 27001, SOC 2 Type II, GDPR, and Indian statutory tax filing standards.
                  </p>
                </>
              )}

              {legalModal === 'terms' && (
                <>
                  <p>
                    <strong>1. Service Level Agreement (SLA):</strong> Nirghos ERP provides 99.99% high-availability uptime assurance with automated geo-redundant backups, real-time failover, and continuous monitoring.
                  </p>
                  <p>
                    <strong>2. Licensing & Multi-Branch Access:</strong> Licenses are issued per enterprise tenant with role-based access control (RBAC), multi-location synchronization, and automated updates.
                  </p>
                  <p>
                    <strong>3. Support & Updates:</strong> Active subscribers receive 24/7 technical support, automated statutory GST updates, and regular feature enhancements.
                  </p>
                </>
              )}

              {legalModal === 'investor' && (
                <>
                  <p>
                    <strong>1. Corporate Governance:</strong> Nirghos ERP Solutions Pvt. Ltd. maintains rigorous corporate standards with audited financial reporting, robust cyber-defense frameworks, and board-level risk management.
                  </p>
                  <p>
                    <strong>2. Growth & Ecosystem:</strong> Powering thousands of retail counters, manufacturing plants, and supply-chain logistics hubs across India with expanding enterprise cloud market share.
                  </p>
                  <p>
                    <strong>3. Investor Inquiries:</strong> Qualified institutional investors and enterprise partners may reach our finance desk at <strong>investors@nirghoserp.com</strong>.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2 text-right border-t border-slate-100">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
