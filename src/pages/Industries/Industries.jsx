import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Boxes, 
  Search, 
  ArrowRight, 
  Filter, 
  Sparkles, 
  CheckCircle2, 
  SlidersHorizontal,
  ChevronRight,
  Layers
} from 'lucide-react';
import { industriesData, industryCategories } from '../../data/industries';
import IndustryCard from '../../components/IndustryCard/IndustryCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useDemo } from '../../context/DemoContext';

export const Industries = () => {
  const { isAuthenticated, profile } = useDemo();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('id'); // 'id' | 'name' | 'category'

  // Filter and sort industries
  const filteredIndustries = useMemo(() => {
    const list = industriesData
      .filter((ind) => {
        const matchesCategory = selectedCategory === 'All' || ind.category === selectedCategory;
        const matchesSearch = searchQuery.trim() === '' || 
          ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ind.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ind.modules?.some(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'category') return a.category.localeCompare(b.category);
        return a.id - b.id;
      });

    // If registered, pin their registered category to the top of the grid!
    if (isAuthenticated && profile?.slug) {
      return [...list].sort((a, b) => {
        if (a.slug === profile.slug) return -1;
        if (b.slug === profile.slug) return 1;
        return 0;
      });
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy, isAuthenticated, profile?.slug]);

  return (
    <div className="space-y-16 pb-28">
      
      {/* Top Banner Header (Vasy.ai Clean Light Sky Theme) */}
      <section className="bg-gradient-to-b from-sky-50/80 via-white to-white pt-14 pb-16 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-grid-pattern pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-sky-200/25 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
            <Link to="/" className="hover:text-[#0284c7] transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0284c7] font-semibold">Industry Solutions Directory</span>
          </div>

          <div className="max-w-3xl space-y-4 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-[#0284c7] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Full Directory of 25 Specialized Verticals</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              Tailored ERP Blueprints for{' '}
              <span className="text-[#0284c7]">Every Business</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Browse our complete library of 25 dedicated industry ERP engines. Each solution is pre-packaged with distinct master databases, customized Bill of Materials, sector-specific workflows, and localized compliance rules.
            </p>
          </div>

          {/* Quick Search in Banner */}
          <div className="mt-8 max-w-2xl">
            <SearchBar 
              placeholder="Search by industry name, keyword, or module (e.g. POS, BOM, EHR, KOT)..."
              onSearchChange={(q) => setSearchQuery(q)}
            />
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-8">
        
        {/* Dynamic Context Header for Registered vs Unregistered */}
        {isAuthenticated ? (
          <div className="p-6 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border-2 border-emerald-500/40 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden">
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-black text-xl shadow-inner shrink-0">
                ✓
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                    Your Registered Industry Tenant
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">• {profile?.owner}</span>
                </div>
                <h3 className="text-xl font-black text-white">
                  {profile?.name} — {profile?.industry}
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">
                  Your enterprise account is customized exclusively for {profile?.industry}. All domain ledger charts, catalogs, and biometric roles reflect this category.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 relative z-10">
              <Link
                to={`/industries/${profile?.slug || 'manufacturing'}`}
                className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-black text-xs shadow-lg shadow-emerald-500/20 transition flex items-center gap-2"
              >
                <span>Launch {profile?.industry?.split(' ')[0]} Suite</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-blue-50/90 via-indigo-50/80 to-brand-50 border-2 border-brand-400 text-brand-950 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-[0_15px_40px_-8px_rgba(37,99,235,0.25)] ring-4 ring-brand-500/15 overflow-hidden">
            {/* Ambient decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-400/15 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-600 via-sky-500 to-brand-400 text-white flex items-center justify-center shadow-lg shadow-brand-500/35 shrink-0 border-2 border-white/60">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div>
                <span className="inline-block text-[10px] font-black uppercase tracking-wider text-brand-700 bg-brand-100/90 px-2.5 py-0.5 rounded-full border border-brand-300 mb-1 shadow-2xs">
                  14-Day Free Dedicated Workspace
                </span>
                <p className="font-extrabold text-navy-950 text-sm sm:text-base leading-snug">
                  Click any industry category below to open the registration form and start your free 14-day dedicated workspace.
                </p>
              </div>
            </div>
            
            <Link 
              to="/register" 
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-700 to-navy-950 hover:from-brand-500 hover:to-navy-900 text-white font-black text-xs shadow-xl shadow-brand-600/30 transition-all duration-200 shrink-0 flex items-center gap-2 transform hover:scale-105 active:scale-95 border border-brand-300/40 relative z-10"
            >
              <span>Register Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Controls: Category Filter Tabs & Sorting Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 sm:p-5 bg-white rounded-3xl border-2 border-slate-200/90 shadow-xl shadow-slate-200/70">
          
          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 md:pb-0">
            {industryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#0284c7] text-white border-[#0284c7] shadow-md shadow-sky-500/25'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-sky-300 hover:text-[#0284c7]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sorting Dropdown & Counter */}
          <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
            <span className="text-xs text-slate-500 font-semibold">
              <strong>{filteredIndustries.length}</strong> of 25 Solutions
            </span>

            <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-bold text-navy-900 focus:outline-none cursor-pointer"
              >
                <option value="id">Official Number (1-25)</option>
                <option value="name">Alphabetical (A-Z)</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

        </div>

        {/* 25 Industries Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredIndustries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>

        {/* Empty State */}
        {filteredIndustries.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
            <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-navy-900">No Industries Found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              No business vertical matched your criteria "{searchQuery}". Try clearing filters or search terms.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-6 py-2.5 rounded-xl bg-navy-900 text-white text-xs font-bold hover:bg-navy-800 transition"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>

    </div>
  );
};

export default Industries;
