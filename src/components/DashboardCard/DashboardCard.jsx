import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import DynamicIcon from '../common/DynamicIcon';

export const DashboardCard = ({ 
  title, 
  value, 
  change, 
  isPositive = true, 
  note, 
  icon = "Activity",
  iconBg = "bg-brand-50 text-brand-600 border-brand-200" 
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-white to-slate-50/70 rounded-3xl p-6 border-2 border-slate-300 hover:border-brand-500 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.1),0_4px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
      
      {/* Top subtle highlight shimmer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-1">
            Live Metric
          </span>
          <span className="text-xs font-black text-navy-950 block">
            {title}
          </span>
        </div>
        <div className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 ${iconBg}`}>
          <DynamicIcon name={icon} className="w-6 h-6" />
        </div>
      </div>

      <div className="pt-3 border-t-2 border-slate-200">
        <div className="text-3xl font-black text-navy-950 tracking-tight font-mono group-hover:text-brand-600 transition-colors">
          {value}
        </div>

        <div className="flex items-center gap-2 mt-2.5">
          {change && (
            <span className={`inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-0.5 rounded-full border-2 shadow-2xs ${
              isPositive 
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                : 'bg-rose-50 text-rose-800 border-rose-300'
            }`}>
              {isPositive ? (
                <TrendingUp className="w-3 h-3 text-emerald-600" />
              ) : (
                <TrendingDown className="w-3 h-3 text-rose-600" />
              )}
              {change}
            </span>
          )}
          {note && (
            <span className="text-[11px] font-semibold text-slate-500 truncate">
              {note}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;

