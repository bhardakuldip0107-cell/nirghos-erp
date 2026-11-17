import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  ArrowRight
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { demoPresetAccounts } from '../../data/mockData';

export const Login = () => {
  const { loginUser, registeredUsers, showToast } = useDemo();
  const navigate = useNavigate();

  // Clean, realistic form with zero default pre-filled values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      showToast('Please enter your work email.', 'error');
      return;
    }
    if (!password) {
      showToast('Please enter your password.', 'error');
      return;
    }

    const cleanEmail = email.trim().toLowerCase();
    const registeredMatch = (registeredUsers || []).find(
      u => u.email?.toLowerCase() === cleanEmail
    );
    const demoMatch = demoPresetAccounts.find(
      d => d.email?.toLowerCase() === cleanEmail
    );

    const userProfile = registeredMatch || demoMatch || {
      email: cleanEmail,
      industrySlug: 'manufacturing',
      businessName: cleanEmail.split('@')[1]?.split('.')[0]?.toUpperCase() + ' Operations' || 'Enterprise Workspace',
      ownerName: cleanEmail.split('@')[0]?.replace('.', ' ') || 'Enterprise User'
    };

    loginUser(userProfile);
    showToast(`Signed in successfully as ${userProfile.ownerName || userProfile.owner || 'User'}.`, 'success');
    navigate(`/dashboard?industry=${userProfile.industrySlug || 'manufacturing'}`);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      showToast('Please provide your work email.', 'error');
      return;
    }
    showToast(`Password reset link dispatched to ${forgotEmail}.`, 'success');
    setForgotModalOpen(false);
    setForgotEmail('');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      
      {/* Background ambient decorative glows and grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10 space-y-6">
        
        {/* Brand Logo & Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800 flex items-center justify-center shadow-lg shadow-brand-600/25 p-2.5 group-hover:scale-105 transition-transform border-2 border-brand-400/30">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2.5 h-2.5 rounded-xs bg-white"></div>
                <div className="w-2.5 h-2.5 rounded-xs bg-brand-200"></div>
                <div className="w-2.5 h-2.5 rounded-xs bg-brand-200"></div>
                <div className="w-2.5 h-2.5 rounded-xs bg-white"></div>
              </div>
            </div>
            <span className="text-2xl font-black text-navy-950">
              Nirghos<span className="text-brand-600">ERP</span>
            </span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">
            Sign In to Enterprise Workspace
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Enter your corporate credentials to access your ERP
          </p>
        </div>

        {/* Clean, Focused Login Form Card */}
        <div className="bg-white rounded-3xl border-2 border-slate-300/90 shadow-xl p-7 sm:p-9 space-y-5 relative overflow-hidden">
          
          {/* Signature Top Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-500 via-indigo-600 to-sky-400"></div>

          <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4 pt-1">
            
            {/* Work Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Work Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3.5 py-3 text-xs sm:text-sm font-semibold text-slate-900 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15 bg-slate-50/50 focus:bg-white transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setForgotModalOpen(true)}
                  className="text-xs text-brand-600 hover:text-brand-700 font-bold hover:underline cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="new-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-11 py-3 text-sm font-semibold text-slate-900 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15 bg-slate-50/50 focus:bg-white transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition cursor-pointer"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-brand-600" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 font-bold select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-2 border-slate-300 cursor-pointer"
                />
                <span>Remember this workstation</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl font-black text-white bg-navy-950 hover:bg-brand-600 shadow-xl shadow-navy-950/20 hover:shadow-brand-600/30 flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer text-sm"
            >
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4 text-brand-300" />
            </button>

          </form>

          {/* Switch to Register */}
          <div className="pt-3 text-center text-xs text-slate-500 border-t-2 border-slate-100 font-medium">
            Don't have an enterprise workspace?{' '}
            <Link to="/register" className="text-brand-600 hover:text-brand-700 font-bold hover:underline">
              Register New Workspace
            </Link>
          </div>

        </div>

      </div>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/75 backdrop-blur-sm animate-in fade-in">
          <div className="relative bg-white rounded-3xl max-w-md w-full p-7 sm:p-8 shadow-2xl border-2 border-slate-300 space-y-4 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-500 to-indigo-600"></div>

            <div className="space-y-1">
              <h3 className="text-xl font-black text-navy-950">Reset Your Password</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Enter your registered corporate work email to receive a password reset recovery link.
              </p>
            </div>

            <form onSubmit={handleForgotSubmit} className="space-y-4 pt-1">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Corporate Work Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm font-semibold rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setForgotModalOpen(false)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-navy-950 text-white font-extrabold text-xs rounded-xl hover:bg-brand-600 shadow-md transition cursor-pointer"
                >
                  Send Recovery Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Login;
