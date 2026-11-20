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
      {/* Modern Attractive Capsule Search Bar */}
      <div className="relative flex items-center p-1.5 sm:p-2 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border-2 border-sky-200/90 hover:border-[#0284c7] focus-within:border-[#0284c7] focus-within:ring-4 focus-within:ring-orange-500/15 shadow-[0_12px_40px_-8px_rgba(242,92,5,0.18),0_2px_8px_rgba(0,0,0,0.04)] transition-all">
        
        {/* Left Gradient Icon Badge */}
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-full bg-gradient-to-tr from-[#0284c7] to-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/30 ml-0.5">
          <Search className="w-5 h-5 stroke-[2.5]" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder={placeholder}
          className="flex-1 px-3 sm:px-4 py-2 bg-transparent text-slate-800 placeholder:text-slate-400 focus:outline-none text-sm sm:text-base font-semibold min-w-0"
        />

        {/* Clear Button */}
        {query && (
          <button
            onClick={handleClear}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition mr-1.5 cursor-pointer"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Right Explore Button */}
        <button
          type="button"
          onClick={() => {
            if (query.trim() && filtered.length > 0) {
              handleSelectIndustry(filtered[0].slug);
            } else {
              navigate('/industries');
            }
          }}
          className="px-4 sm:px-6 py-2.5 rounded-xl sm:rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 shrink-0 cursor-pointer"
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>

      {/* Autocomplete Dropdown */}
      {showDropdown && isOpen && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between px-4">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" /> Matching ERP Blueprints ({filtered.length})
            </span>
            <span className="text-[11px] text-slate-400 font-medium">Press Enter to select</span>
          </div>
          <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
            {filtered.map((ind) => (
              <button
                key={ind.slug}
                onClick={() => handleSelectIndustry(ind.slug)}
                className="w-full p-3.5 text-left hover:bg-sky-50/70 transition flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 group-hover:bg-[#0284c7] group-hover:text-white text-[#0284c7] flex items-center justify-center transition shrink-0 shadow-2xs">
                    <DynamicIcon name={ind.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
                      {ind.name}
                    </h5>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {ind.shortDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-sky-100 group-hover:text-[#0284c7] font-semibold">
                    {ind.category}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0284c7] group-hover:translate-x-1 transition-transform" />
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

