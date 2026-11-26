import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Lock, ShieldCheck, Zap } from 'lucide-react';
import DynamicIcon from '../common/DynamicIcon';
import { useDemo } from '../../context/DemoContext';

export const IndustryCard = ({ industry }) => {
  if (!industry) return null;

  const { isAuthenticated, profile } = useDemo();

  // Determine dynamic routing behavior based on authentication & registered industry
  const isRegisteredIndustry = isAuthenticated && profile?.slug === industry.slug;

  const targetUrl = `/industries/${industry.slug}`;

  const buttonText = isRegisteredIndustry
    ? `Open My ${profile?.name?.split(' ')[0] || industry.name.split(' ')[0]} Workspace`
    : `Explore ${industry.name} Details`;

  // Category-specific creative color themes, glow shadows, borders & top stripes
  const categoryThemes = {
    'Industrial & Manufacturing': {
      borderHover: 'hover:border-amber-500 hover:shadow-[0_25px_60px_-12px_rgba(245,158,11,0.30)]',
      badge: 'bg-amber-50 text-amber-900 border-2 border-amber-300 shadow-xs',
      dot: 'bg-amber-500',
      stripe: 'from-amber-500 via-orange-500 to-amber-400',
      iconHover: 'group-hover:from-amber-600 group-hover:to-orange-500 group-hover:border-amber-400',
      chipHover: 'group-hover:bg-amber-50 group-hover:text-amber-900 group-hover:border-amber-300'
    },
    'Trade & Commerce': {
      borderHover: 'hover:border-blue-500 hover:shadow-[0_25px_60px_-12px_rgba(59,130,246,0.30)]',
      badge: 'bg-blue-50 text-blue-900 border-2 border-blue-300 shadow-xs',
      dot: 'bg-blue-500',
      stripe: 'from-blue-600 via-indigo-500 to-sky-400',
      iconHover: 'group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:border-blue-400',
      chipHover: 'group-hover:bg-blue-50 group-hover:text-blue-900 group-hover:border-blue-300'
    },
    'Healthcare & Life Sciences': {
      borderHover: 'hover:border-emerald-500 hover:shadow-[0_25px_60px_-12px_rgba(16,185,129,0.30)]',
      badge: 'bg-emerald-50 text-emerald-900 border-2 border-emerald-300 shadow-xs',
      dot: 'bg-emerald-500',
      stripe: 'from-emerald-600 via-teal-500 to-emerald-400',
      iconHover: 'group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:border-emerald-400',
      chipHover: 'group-hover:bg-emerald-50 group-hover:text-emerald-900 group-hover:border-emerald-300'
    },
    'Institutional & Hospitality': {
      borderHover: 'hover:border-purple-500 hover:shadow-[0_25px_60px_-12px_rgba(168,85,247,0.30)]',
      badge: 'bg-purple-50 text-purple-900 border-2 border-purple-300 shadow-xs',
      dot: 'bg-purple-500',
      stripe: 'from-purple-600 via-fuchsia-500 to-pink-400',
      iconHover: 'group-hover:from-purple-600 group-hover:to-fuchsia-600 group-hover:border-purple-400',
      chipHover: 'group-hover:bg-purple-50 group-hover:text-purple-900 group-hover:border-purple-300'
    },
    'Services & Technology': {
      borderHover: 'hover:border-sky-500 hover:shadow-[0_25px_60px_-12px_rgba(69,130,230,0.30)]',
      badge: 'bg-sky-50 text-sky-900 border-2 border-sky-300 shadow-xs',
      dot: 'bg-sky-500',
      stripe: 'from-sky-600 via-cyan-500 to-blue-400',
      iconHover: 'group-hover:from-sky-600 group-hover:to-cyan-600 group-hover:border-sky-400',
      chipHover: 'group-hover:bg-sky-50 group-hover:text-sky-900 group-hover:border-sky-300'
    },
    'Energy & Resources': {
      borderHover: 'hover:border-rose-500 hover:shadow-[0_25px_60px_-12px_rgba(244,63,94,0.30)]',
      badge: 'bg-rose-50 text-rose-900 border-2 border-rose-300 shadow-xs',
      dot: 'bg-rose-500',
      stripe: 'from-rose-600 via-red-500 to-amber-500',
      iconHover: 'group-hover:from-rose-600 group-hover:to-rose-600 group-hover:border-rose-400',
      chipHover: 'group-hover:bg-rose-50 group-hover:text-rose-900 group-hover:border-rose-300'
    },
  };

  const theme = categoryThemes[industry.category] || {
    borderHover: 'hover:border-brand-500 hover:shadow-[0_25px_60px_-12px_rgba(59,130,246,0.30)]',
    badge: 'bg-slate-50 text-slate-800 border-2 border-slate-300 shadow-xs',
    dot: 'bg-slate-500',
    stripe: 'from-navy-950 via-brand-600 to-sky-400',
    iconHover: 'group-hover:from-brand-600 group-hover:to-sky-600 group-hover:border-brand-400',
    chipHover: 'group-hover:bg-brand-50 group-hover:text-brand-800 group-hover:border-brand-200'
  };

  return (
    <div className={`group relative bg-white rounded-3xl border-2 transition-all duration-300 hover:-translate-y-2.5 flex flex-col justify-between overflow-hidden shadow-[0_10px_35px_-5px_rgba(15,23,42,0.12),0_4px_12px_-2px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_65px_-12px_rgba(15,23,42,0.25)] ${
      isRegisteredIndustry 
        ? 'border-2 border-emerald-500 shadow-2xl shadow-emerald-500/30 ring-4 ring-emerald-500/25' 
        : `border-slate-300/90 ${theme.borderHover}`
    }`}>
      
      {/* Ambient background glow orb inside card */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-brand-500/10 to-sky-500/15 rounded-full blur-2xl group-hover:scale-150 group-hover:from-brand-500/20 transition-all duration-500 pointer-events-none"></div>

      {/* Top Creative Accent Gradient Band */}
      <div className={`h-3 w-full bg-gradient-to-r transition-all duration-300 ${
        isRegisteredIndustry
          ? 'from-emerald-500 via-teal-400 to-brand-500 h-3.5'
          : `${theme.stripe} group-hover:h-3.5`
      }`}></div>

      <div className="p-6 sm:p-7 flex-1 flex flex-col relative z-10">
        
        {/* Header: 3D Elevated Icon Pod, Sector ID, and Category Badge */}
        <div className="flex items-start justify-between gap-2 mb-5">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg p-3.5 border-2 ${
            isRegisteredIndustry
              ? 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white border-emerald-400 shadow-emerald-600/30 scale-105'
              : `bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-brand-300 border-navy-700 shadow-navy-950/30 ${theme.iconHover} group-hover:text-white group-hover:scale-110 group-hover:shadow-xl`
          }`}>
            <DynamicIcon name={industry.icon} className="w-7 h-7 transition-transform group-hover:rotate-3" />
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span className="text-[11px] font-mono font-black px-2.5 py-0.5 rounded-lg bg-navy-950 text-brand-300 border-2 border-navy-800 shadow-xs">
              #{industry?.id ? industry.id.toString().padStart(2, '0') : '01'}
            </span>
            <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border-2 ${theme.badge} flex items-center gap-1.5 shadow-sm`}>
              <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} animate-pulse shrink-0`}></span>
              <span className="truncate max-w-[130px]">{industry.category}</span>
            </span>
          </div>
        </div>

        {/* Title & Tenant Status */}
        <div className="mb-2.5">
          {isRegisteredIndustry && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border-2 border-emerald-300 mb-2 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> YOUR REGISTERED TENANT
            </span>
          )}
          {isAuthenticated && !isRegisteredIndustry && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500 border border-slate-200 mb-2">
              <Lock className="w-2.5 h-2.5 text-slate-400" /> Registered to: {profile?.industry?.split(' ')[0]}
            </span>
          )}
          <Link to={targetUrl} className="block">
            <h3 className="text-xl font-black text-navy-950 group-hover:text-brand-600 transition-colors duration-200 leading-snug tracking-tight">
              {industry.name}
            </h3>
          </Link>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-5 line-clamp-3 flex-1 font-normal">
          {industry.shortDesc}
        </p>

        {/* Micro Module Preview Pills for Visual Richness */}
        {industry.modules && industry.modules.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-slate-100 mb-4">
            {industry.modules.slice(0, 3).map((mod, i) => (
              <span
                key={i}
                className={`text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/90 transition-colors shadow-2xs ${theme.chipHover}`}
              >
                {mod.code || mod.name.slice(0, 3).toUpperCase()} • {mod.name.split(' ')[0]}
              </span>
            ))}
            {industry.modules.length > 3 && (
              <span className="text-[10px] font-extrabold px-2 py-1 rounded-lg bg-navy-50 text-brand-700 border border-brand-200 shadow-2xs">
                +{industry.modules.length - 3} More
              </span>
            )}
          </div>
        )}

        {/* Dynamic Highlight Badge */}
        <div className="pt-2 border-t border-slate-100/80 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5 font-bold text-slate-700 group-hover:text-brand-700 transition">
            <CheckCircle2 className={`w-3.5 h-3.5 ${isRegisteredIndustry ? 'text-emerald-600' : 'text-emerald-500'} shrink-0`} />
            {industry.modules ? `${industry.modules.length} Custom Modules` : 'Enterprise Suite'}
          </span>
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
            {!isAuthenticated ? 'Trial Ready' : (isRegisteredIndustry ? 'Live Workspace' : 'Configured')}
          </span>
        </div>
      </div>

      {/* Explore Button Creative Footer */}
      <div className={`px-6 py-4 border-t-2 transition-all duration-300 ${
        isRegisteredIndustry
          ? 'bg-emerald-50/80 border-emerald-200 group-hover:bg-emerald-100/80'
          : 'bg-gradient-to-r from-slate-50 via-slate-50 to-slate-100/90 border-slate-300/80 group-hover:from-brand-50 group-hover:via-sky-50/70 group-hover:to-brand-50'
      }`}>
        <Link
          to={targetUrl}
          className={`w-full inline-flex items-center justify-between text-xs font-black transition ${
            isRegisteredIndustry 
              ? 'text-emerald-800' 
              : 'text-navy-950 group-hover:text-brand-700'
          }`}
        >
          <span className="truncate pr-2">{buttonText}</span>
          <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 ${
            isRegisteredIndustry
              ? 'bg-emerald-600 text-white border-emerald-500 shadow-emerald-500/30'
              : 'bg-white border-slate-300 group-hover:border-brand-500 group-hover:bg-gradient-to-tr group-hover:from-brand-600 group-hover:to-sky-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-500/30'
          }`}>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </Link>
      </div>

    </div>
  );
};

export default IndustryCard;
