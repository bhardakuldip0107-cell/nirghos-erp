import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Boxes, 
  Receipt, 
  BarChart3, 
  Users, 
  Settings, 
  Layers, 
  ChevronRight, 
  LogOut, 
  ShieldCheck, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { useDemo } from '../../context/DemoContext';
import { industriesData, getIndustryBySlug } from '../../data/industries';
import DynamicIcon from '../common/DynamicIcon';

export const Sidebar = ({ isMobileOpen, setIsMobileOpen, activeTab, setActiveTab }) => {
  const { isAuthenticated, profile, activeIndustrySlug, setActiveIndustrySlug, logoutUser } = useDemo();
  const currentIndustry = getIndustryBySlug(activeIndustrySlug) || industriesData[0];
  const navigate = useNavigate();

  const menuItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: 'LayoutDashboard' },
    { id: 'modules', label: 'Industry Modules', icon: 'Layers', badge: currentIndustry.modules?.length || 8 },
    { id: 'transactions', label: 'Transactions & Ledger', icon: 'Receipt' },
    { id: 'inventory', label: 'Products & Inventory', icon: 'Boxes' },
    { id: 'workforce', label: 'Workforce & HRMS', icon: 'Users' },
    { id: 'analytics', label: 'Reports & Analytics', icon: 'BarChart3' },
    { id: 'settings', label: 'Profile & Settings', icon: 'Settings' }
  ];

  const handleIndustryChange = (e) => {
    const slug = e.target.value;
    setActiveIndustrySlug(slug);
  };

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 z-40 bg-navy-950/70 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Main Sidebar Aside */}
      <aside className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-navy-950 text-slate-300 border-r border-navy-800/80 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Brand Header */}
        <div className="p-5 border-b border-navy-800 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/nirghos-icon.png" 
              alt="Nirghos ERP" 
              className="w-10 h-10 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" 
            />
            <div>
              <span className="text-xl font-extrabold text-white tracking-tight flex items-center">
                NIRGHOS<span className="text-brand-400 ml-1">ERP</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                Workspace
              </span>
            </div>
          </Link>

          <Link
            to="/"
            title="Return to Public Site"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-navy-850 transition text-xs"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        {/* Dynamic Industry Switcher Box */}
        <div className="p-4 mx-3 my-3 rounded-xl bg-navy-900 border border-navy-800/80 shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${
              isAuthenticated ? 'text-emerald-400' : 'text-brand-400'
            }`}>
              <DynamicIcon name={currentIndustry.icon} className={`w-3 h-3 ${isAuthenticated ? 'text-emerald-400' : ''}`} />
              {isAuthenticated ? 'Registered Enterprise' : 'Active Industry Context'}
            </span>
            <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
              isAuthenticated ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' : 'bg-navy-800 text-slate-400'
            }`}>
              {isAuthenticated ? 'Tenant Active' : '25 Ready'}
            </span>
          </div>

          <div className="relative">
            {isAuthenticated ? (
              <div className="w-full text-xs font-bold text-white bg-navy-950 border border-emerald-500/40 rounded-lg px-2.5 py-2 flex items-center justify-between shadow-xs">
                <span className="truncate">{currentIndustry.name}</span>
                <span className="text-[9px] text-emerald-400 font-extrabold uppercase bg-emerald-950/80 px-1 rounded">Active</span>
              </div>
            ) : (
              <>
                <select
                  value={activeIndustrySlug}
                  onChange={handleIndustryChange}
                  className="w-full text-xs font-semibold text-white bg-navy-950 border border-navy-700 rounded-lg px-2.5 py-2 pr-7 appearance-none focus:outline-none focus:border-brand-500 cursor-pointer"
                >
                  {industriesData.map((ind) => (
                    <option key={ind.slug} value={ind.slug}>
                      {ind.id}. {ind.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </>
            )}
          </div>

          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
            <span className="truncate">{currentIndustry.category}</span>
            <Link 
              to={`/industries/${currentIndustry.slug}`}
              className="text-brand-400 hover:underline shrink-0 text-[10px] font-medium"
            >
              View Specs →
            </Link>
          </div>
        </div>

        {/* Navigation Menu Links */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Main Management
          </div>

          {menuItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-r from-brand-600 to-sky-600 text-white shadow-lg shadow-brand-600/30 font-black' 
                    : 'text-slate-300 hover:bg-navy-850 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <DynamicIcon 
                    name={item.icon} 
                    className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} 
                  />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-brand-700 text-brand-100' : 'bg-navy-800 text-slate-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom User Profile Section */}
        <div className="p-4 border-t border-navy-800 bg-navy-950/70">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/40 flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                {profile?.owner?.split(' ').map(n => n[0]).join('').slice(0, 2) || 'AD'}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-black text-white truncate">
                  {profile?.owner || 'Administrator'}
                </p>
                <p className="text-[10px] text-brand-300 font-semibold truncate">
                  {profile?.name || 'Enterprise Workspace'}
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="Logout session"
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-navy-850 transition"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          <div className="px-2.5 py-1.5 rounded-lg bg-navy-900 border border-navy-800/80 flex items-center justify-between text-[10px] text-slate-400 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Tenant Active
            </span>
            <span className="text-brand-300 font-bold truncate max-w-[100px]">{profile?.slug || 'manufacturing'}</span>
          </div>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;

