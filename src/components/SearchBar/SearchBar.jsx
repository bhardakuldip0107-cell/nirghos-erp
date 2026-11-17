import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { industriesData } from '../../data/industries';
import DynamicIcon from '../common/DynamicIcon';
import { useDemo } from '../../context/DemoContext';

export const SearchBar = ({ 
  placeholder = "Search 25 industries (e.g. Manufacturing, Hospital, Retail, Pharma)...",
  onSearchChange,
  showDropdown = true,
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { isAuthenticated, profile } = useDemo();

  // Filter industries matching query
  const filtered = query.trim() === '' ? [] : industriesData.filter((ind) => {
    const q = query.toLowerCase();
    return (
      ind.name.toLowerCase().includes(q) ||
      ind.shortDesc.toLowerCase().includes(q) ||
      ind.category.toLowerCase().includes(q) ||
      ind.modules.some(m => m.name.toLowerCase().includes(q))
    );
  }).slice(0, 6);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setIsOpen(true);
    if (onSearchChange) {
      onSearchChange(val);
    }
  };

  const handleClear = () => {
    setQuery('');
    setIsOpen(false);
    if (onSearchChange) {
      onSearchChange('');
    }
  };

  const handleSelectIndustry = (slug) => {
    setIsOpen(false);
    if (!isAuthenticated) {
      navigate(`/register?industry=${slug}`);
    } else {
      navigate(`/industries/${profile?.slug || 'manufacturing'}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && filtered.length > 0) {
      handleSelectIndustry(filtered[0].slug);
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-slate-400">
          <Search className="w-5 h-5 text-brand-500" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3.5 bg-white text-slate-900 placeholder:text-slate-400 rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-200/40 focus:outline-none focus:ring-4 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm sm:text-base font-normal"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown */}
      {showDropdown && isOpen && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="p-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between px-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" /> Matching ERP Solutions ({filtered.length})
            </span>
            <span className="text-[11px] text-slate-400">Press Enter to select</span>
          </div>
          <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
            {filtered.map((ind) => (
              <button
                key={ind.slug}
                onClick={() => handleSelectIndustry(ind.slug)}
                className="w-full p-3.5 text-left hover:bg-brand-50/60 transition flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-brand-600 group-hover:text-white text-navy-800 flex items-center justify-center transition">
                    <DynamicIcon name={ind.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-navy-900 group-hover:text-brand-600 transition">
                      {ind.name}
                    </h5>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {ind.shortDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-brand-100 group-hover:text-brand-700 font-medium">
                    {ind.category}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

