import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Sparkles, 
  ChevronRight, 
  ArrowRight, 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Mail, 
  Send, 
  TrendingUp,
  Cpu,
  ShieldCheck,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';

export const Blogs = () => {
  const { showToast } = useDemo();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    'All',
    'ERP Architecture',
    'AI & Automation',
    'GST & Compliance',
    'Supply Chain',
    'Manufacturing'
  ];

  const blogPosts = [
    {
      id: 101,
      title: 'Business In 2027: Why AI, Automation and Smart ERP Are Non-Negotiable',
      slug: 'business-2027-ai-automation-smart-erp',
      category: 'AI & Automation',
      author: 'Himanshi M Kumawat',
      role: 'Enterprise AI & Automation Lead',
      date: 'November 16, 2026',
      readTime: '5 min read',
      summary: 'Explore how generative ERP interfaces, autonomous reconciliation bots, and predictive demand analytics give forward-thinking enterprises an unbeatable edge heading into 2027.',
      featured: true,
      tag: 'AI in ERP',
      image: '/blogs/blog-card-1.png'
    },
    {
      id: 102,
      title: 'AI Video Analytics for Retail: What Your CCTV Cameras Can Tell You',
      slug: 'ai-video-analytics-retail-cctv-cameras',
      category: 'AI & Automation',
      author: 'Himanshi M Kumawat',
      role: 'Retail Intelligence Specialist',
      date: 'November 03, 2026',
      readTime: '6 min read',
      summary: 'Turn existing security cameras into high-precision business intelligence tools. Measure store footfalls, customer dwell time heatmaps, and checkout queue delays in real time.',
      featured: false,
      tag: 'AI Video Analytics',
      image: '/blogs/blog-card-2.png'
    },
    {
      id: 103,
      title: 'An Integrated Payroll, HRMS, CRM, and Enterprise Automation Solution',
      slug: 'integrated-payroll-hrms-crm-automation',
      category: 'ERP Architecture',
      author: 'Himanshi M Kumawat',
      role: 'HRMS Solutions Consultant',
      date: 'October 29, 2026',
      readTime: '4 min read',
      summary: 'Why fragmented HR and sales spreadsheets hold companies back, and how Nirghos Unified Workspace synchronizes biometric attendance, payroll taxes, and sales pipelines seamlessly.',
      featured: false,
      tag: 'HRMS & CRM',
      image: '/blogs/blog-card-3.png'
    },
    {
      id: 1,
      title: 'How Autonomous AI Document Parsing Cuts Vendor Invoice Processing by 85%',
      slug: 'ai-document-parsing-invoice-processing',
      category: 'AI & Automation',
      author: 'Sneha Kulkarni',
      role: 'Principal AI Research Lead',
      date: 'November 15, 2026',
      readTime: '6 min read',
      summary: 'Explore how deep learning OCR models trained on messy multi-language Indian tax invoices extract line-items, taxes, and HSN codes into ERP ledgers with zero manual typing.',
      featured: true,
      tag: 'Machine Learning'
    },
    {
      id: 2,
      title: 'E-Invoicing and 2-Way GST Reconciliation: Complete 2026 Enterprise Guide',
      slug: 'e-invoicing-gst-reconciliation-guide',
      category: 'GST & Compliance',
      author: 'Chirag Dave',
      role: 'Staff Financial Core Engineer',
      date: 'November 10, 2026',
      readTime: '8 min read',
      summary: 'Step-by-step architectural breakdown of automated GSTR-2B matching, ITC claim protection, and real-time E-Way Bill generation directly through ERP APIs.',
      featured: false,
      tag: 'Compliance'
    },
    {
      id: 3,
      title: 'Migrating 100,000 SKUs from Legacy Monoliths in Under 14 Days',
      slug: 'migrating-100k-skus-under-14-days',
      category: 'ERP Architecture',
      author: 'Vikram Patel',
      role: 'Head of Global Implementations',
      date: 'November 04, 2026',
      readTime: '5 min read',
      summary: 'Why traditional 18-month ERP implementations fail, and how polymorphic schema templates allow seamless opening balance migrations without shutting down plants.',
      featured: false,
      tag: 'Cloud Migration'
    },
    {
      id: 4,
      title: 'Why Multi-Plant Manufacturing Demands Polymorphic Bill of Materials (BOM)',
      slug: 'multi-plant-manufacturing-polymorphic-bom',
      category: 'Manufacturing',
      author: 'Rajesh Sharma',
      role: 'Founder & CEO',
      date: 'October 28, 2026',
      readTime: '7 min read',
      summary: 'How multi-level BOM formulas dynamically adjust scrap percentages, labor hours, and sub-assembly batch routing across diverse factory lines.',
      featured: false,
      tag: 'Industrial ERP'
    },
    {
      id: 5,
      title: 'Pharma 21 CFR Part 11 Electronic Records: Built-in vs Bolt-on Architecture',
      slug: 'pharma-21-cfr-part-11-electronic-records',
      category: 'ERP Architecture',
      author: 'Dr. Ananya Sen',
      role: 'VP of Industry Solutions',
      date: 'October 21, 2026',
      readTime: '9 min read',
      summary: 'Understanding the technical differences between immutable cryptographic audit logs and external plugin wrappers when facing US-FDA clinical audits.',
      featured: false,
      tag: 'Healthcare'
    },
    {
      id: 6,
      title: 'Predictive Inventory Stock-outs Using Lightweight Local Machine Learning',
      slug: 'predictive-inventory-stockouts-machine-learning',
      category: 'Supply Chain',
      author: 'Kuldip Bharda',
      role: 'Co-Founder & CTO',
      date: 'October 14, 2026',
      readTime: '6 min read',
      summary: 'Using seasonal moving averages and vendor lead-time probabilities to trigger purchase orders before raw material shortages stall production.',
      featured: false,
      tag: 'Forecasting'
    },
    {
      id: 7,
      title: 'Textile & Apparel ERP: Overcoming the Style-Color-Size Matrix Complexity',
      slug: 'textile-apparel-erp-matrix-complexity',
      category: 'Manufacturing',
      author: 'Pooja Mehta',
      role: 'Lead Solutions Consultant',
      date: 'October 08, 2026',
      readTime: '5 min read',
      summary: 'Managing hundreds of variations per garment style with single-click barcode generation, job worker rate slips, and real-time fabric shrinkage tracking.',
      featured: false,
      tag: 'Apparel Suite'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    setSubscribed(true);
    showToast(`Thank you! ${newsletterEmail} has been subscribed to Nirghos Insights.`, 'success');
    setNewsletterEmail('');
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const featuredPost = blogPosts.find(p => p.featured);

  return (
    <div className="space-y-20 pb-28">
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER                                                            */}
      {/* ========================================================================= */}
      <section className="bg-gradient-to-br from-[#071328] via-[#0B1B3D] to-[#071328] text-white pt-14 pb-24 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-grid-pattern pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#0284c7]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-5">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#0284c7] font-semibold">Blogs & Articles</span>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0284c7]/15 border border-[#0284c7]/30 text-[#0284c7] text-xs font-black uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Nirghos ERP Insights</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Engineering, ERP Innovation & <span className="text-[#0284c7]">Business Trends.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore the latest business trends, ERP updates, GST rules, and AI innovations. Deep architectural guides and actionable playbooks from our engineering specialists.
            </p>

            {/* Live Search Bar */}
            <div className="pt-2 max-w-xl">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles on AI, GST, supply chain, architecture..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:bg-white/15 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED LEAD ARTICLE                                                  */}
      {/* ========================================================================= */}
      {featuredPost && selectedCategory === 'All' && searchQuery === '' && (
        <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 -mt-10 relative z-10">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-sky-50 text-[#0284c7] border border-sky-200 font-mono font-bold text-xs uppercase tracking-wider">
                  Featured Article
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{featuredPost.readTime}</span>
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{featuredPost.date}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 hover:text-[#0284c7] transition-colors leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {featuredPost.summary}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white font-black text-xs flex items-center justify-center">
                    SK
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{featuredPost.author}</div>
                    <div className="text-[11px] text-slate-500">{featuredPost.role}</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => showToast(`Opening article: ${featuredPost.title}`, 'info')}
                  className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-[#0284c7] text-white font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl p-6 border border-blue-100 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="font-black text-slate-900 text-base">Key Technical Takeaway</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Local vision transformers extract unstructured receipt tables into standardized double-entry JSON payloads in under 120ms without sending data to third-party APIs.
              </p>
              <div className="pt-2 text-xs font-bold text-blue-600">
                100% On-Premise & Cloud Compliant →
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 3. CATEGORY FILTERS & ARTICLES GRID                                       */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 space-y-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-200 pb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Latest Published Articles
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Showing {filteredPosts.length} articles across technology and industry practice
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0284c7] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px] border border-slate-200">
                    {post.category}
                  </span>
                  <span className="text-slate-400 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>

                <button
                  type="button"
                  onClick={() => showToast(`Opening article: ${post.title}`, 'info')}
                  className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-[#0284c7] font-bold text-xs transition border border-slate-200 hover:border-sky-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 4. NEWSLETTER SUBSCRIPTION BOX                                            */}
      {/* ========================================================================= */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-navy-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-xl">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-[#0284c7] px-3.5 py-1 rounded-full bg-white/10 border border-white/20">
              Stay Informed
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Get Enterprise Insights in Your Inbox
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Join 10,000+ business leaders receiving our monthly breakdown of GST updates, AI architectures, and supply chain strategies.
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 max-w-md">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>You are subscribed to Nirghos ERP Monthly Insights!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  placeholder="Enter your corporate email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#0284c7] w-full"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs shadow-md transition-all shrink-0 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blogs;
