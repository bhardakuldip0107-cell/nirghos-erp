import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Layers
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { industriesData } from '../../data/industries';

export const Register = () => {
  const { registerUser, showToast } = useDemo();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const urlIndustry = searchParams.get('industry') || '';

  // Clean registration form with zero default pre-filled values
  const [formData, setFormData] = useState({
    businessName: '',
    industrySlug: urlIndustry,
    ownerName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (urlIndustry) {
      setFormData(prev => ({ ...prev, industrySlug: urlIndustry }));
    }
  }, [urlIndustry]);

  const validate = () => {
    const errs = {};
    if (!formData.businessName.trim()) errs.businessName = 'Business name is required';
    if (!formData.industrySlug) errs.industrySlug = 'Please select an industry sector';
    if (!formData.ownerName.trim()) errs.ownerName = 'Administrator name is required';
    if (!formData.email.trim()) {
      errs.email = 'Corporate work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid work email format';
    }
    if (!formData.password) {
      errs.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match';
    }
    if (!agreeTerms) {
      errs.terms = 'Please accept the Terms of Service';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast('Please correct the highlighted form errors.', 'error');
      return;
    }

    setErrors({});
    registerUser(formData);
    showToast(`Enterprise Workspace created for "${formData.businessName}". Welcome!`, 'success');
    navigate(`/dashboard?industry=${formData.industrySlug}`);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      
      {/* Background ambient decorative glows and grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-xl relative z-10 space-y-6">
        
        {/* Brand Logo & Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <img 
              src="/nirghos-logo-nav.png" 
              alt="Nirghos ERP" 
              className="h-11 sm:h-12 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform" 
            />
            <span className="text-brand-600 text-xs font-black uppercase px-2 py-0.5 rounded bg-sky-100 border border-sky-200 tracking-wider">
              ERP
            </span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">
            Register Your Business Workspace
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Start your free 14-day enterprise trial. No credit card required.
          </p>
        </div>

        {/* Clean, Focused Registration Form Card */}
        <div className="bg-white rounded-3xl border-2 border-slate-300/90 shadow-xl p-7 sm:p-9 space-y-5 relative overflow-hidden">
          
          {/* Signature Top Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-500 via-indigo-600 to-sky-400"></div>

          <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4 pt-1">
            
            {/* Row 1: Business Name & Industry Sector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Business / Company Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="e.g. Acme Industries Pvt Ltd"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className={`w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm font-semibold text-slate-900 rounded-xl border-2 bg-slate-50/50 focus:bg-white transition focus:outline-none focus:ring-4 ${
                      errors.businessName 
                        ? 'border-rose-400 focus:ring-rose-200' 
                        : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/15'
                    }`}
                  />
                </div>
                {errors.businessName && <p className="text-rose-500 text-[11px] font-bold mt-1">{errors.businessName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Primary Industry Sector <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.industrySlug}
                    onChange={(e) => setFormData({ ...formData, industrySlug: e.target.value })}
                    className={`w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm font-bold rounded-xl border-2 focus:outline-none focus:ring-4 transition cursor-pointer ${
                      errors.industrySlug 
                        ? 'border-rose-400 focus:ring-rose-200 bg-white text-slate-900' 
                        : formData.industrySlug
                          ? 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/15 bg-white text-slate-900'
                          : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/15 bg-slate-50/50 text-slate-400'
                    }`}
                  >
                    <option value="">Select Industry Sector (25 Available)</option>
                    {industriesData.map((ind) => (
                      <option key={ind.slug} value={ind.slug} className="text-slate-900">
                        {ind.id}. {ind.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.industrySlug && <p className="text-rose-500 text-[11px] font-bold mt-1">{errors.industrySlug}</p>}
              </div>
            </div>

            {/* Row 2: Owner / Admin Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Owner / Administrator Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className={`w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm font-semibold text-slate-900 rounded-xl border-2 bg-slate-50/50 focus:bg-white transition focus:outline-none focus:ring-4 ${
                      errors.ownerName 
                        ? 'border-rose-400 focus:ring-rose-200' 
                        : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/15'
                    }`}
                  />
                </div>
                {errors.ownerName && <p className="text-rose-500 text-[11px] font-bold mt-1">{errors.ownerName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Phone / Mobile Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    autoComplete="off"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm font-semibold text-slate-900 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15 bg-slate-50/50 focus:bg-white transition"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Corporate Work Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Corporate Work Email Address <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="rajesh@acmeindustries.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm font-semibold text-slate-900 rounded-xl border-2 bg-slate-50/50 focus:bg-white transition focus:outline-none focus:ring-4 ${
                    errors.email 
                      ? 'border-rose-400 focus:ring-rose-200' 
                      : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/15'
                  }`}
                />
              </div>
              {errors.email && <p className="text-rose-500 text-[11px] font-bold mt-1">{errors.email}</p>}
            </div>

            {/* Row 4: Password & Confirm Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Password <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="new-password"
                    placeholder="At least 6 characters"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={`w-full pl-10 pr-10 py-3 text-xs sm:text-sm font-semibold text-slate-900 rounded-xl border-2 bg-slate-50/50 focus:bg-white transition focus:outline-none focus:ring-4 ${
                      errors.password 
                        ? 'border-rose-400 focus:ring-rose-200' 
                        : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/15'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-brand-600" />}
                  </button>
                </div>
                {errors.password && <p className="text-rose-500 text-[11px] font-bold mt-1">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Confirm Password <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    autoComplete="new-password"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className={`w-full pl-10 pr-10 py-3 text-xs sm:text-sm font-semibold text-slate-900 rounded-xl border-2 bg-slate-50/50 focus:bg-white transition focus:outline-none focus:ring-4 ${
                      errors.confirmPassword 
                        ? 'border-rose-400 focus:ring-rose-200' 
                        : 'border-slate-200 focus:border-brand-500 focus:ring-brand-500/15'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-brand-600" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-rose-500 text-[11px] font-bold mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600 font-semibold select-none">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded text-brand-600 focus:ring-brand-500 border-2 border-slate-300 cursor-pointer"
                />
                <span>
                  I agree to the <span className="text-brand-600 font-bold">Terms of Service</span> and <span className="text-brand-600 font-bold">Privacy Policy</span>.
                </span>
              </label>
              {errors.terms && <p className="text-rose-500 text-[11px] font-bold mt-1 pl-6">{errors.terms}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl font-black text-white bg-navy-950 hover:bg-brand-600 shadow-xl shadow-navy-950/20 hover:shadow-brand-600/30 flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer text-sm"
            >
              <span>Create Enterprise Workspace</span>
              <ArrowRight className="w-4 h-4 text-brand-300" />
            </button>

          </form>

          {/* Switch to Login */}
          <div className="pt-3 text-center text-xs text-slate-500 border-t-2 border-slate-100 font-medium">
            Already have an enterprise account?{' '}
            <Link to="/login" className="text-brand-600 hover:text-brand-700 font-bold hover:underline">
              Sign In
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;
