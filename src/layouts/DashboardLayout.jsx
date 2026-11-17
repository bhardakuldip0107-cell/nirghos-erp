import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  Bell, 
  Plus, 
  Search, 
  User, 
  ExternalLink, 
  Check, 
  Download,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import Sidebar from '../components/Sidebar/Sidebar';
import Toast from '../components/common/Toast';
import DemoModal from '../components/common/DemoModal';
import { useDemo } from '../context/DemoContext';
import { getIndustryBySlug } from '../data/industries';
import DynamicIcon from '../components/common/DynamicIcon';

export const DashboardLayout = ({ children, activeTab, setActiveTab }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // 'new-txn' | 'export' | null

  const { 
    profile, 
    activeIndustrySlug, 
    notifications, 
    markAllNotificationsRead 
  } = useDemo();

  const currentIndustry = getIndustryBySlug(activeIndustrySlug) || { name: 'Manufacturing & Fabrication', icon: 'Factory' };
  const safeNotifs = Array.isArray(notifications) ? notifications : [];
  const unreadCount = safeNotifs.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      
      {/* Sidebar Component */}
      <Sidebar 
        isMobileOpen={isMobileOpen} 
        setIsMobileOpen={setIsMobileOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <div className="lg:pl-72 flex flex-col flex-1">
        
        {/* Top Workspace Header Bar */}
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Left: Mobile hamburger & breadcrumbs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="p-2 rounded-xl text-slate-600 hover:text-navy-900 hover:bg-slate-100 lg:hidden transition"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="font-bold text-slate-400 hidden sm:inline">Workspace</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 hidden sm:inline" />
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-navy-950 text-white font-black text-xs border border-navy-800 shadow-xs">
                <DynamicIcon name={currentIndustry.icon} className="w-3.5 h-3.5 text-brand-400" />
                <span className="truncate max-w-[150px] sm:max-w-[220px]">{currentIndustry.name}</span>
              </div>
            </div>
          </div>

          {/* Right: Quick actions, notifications, user avatar */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Quick Action Button: Record Txn */}
            <button
              onClick={() => setModalType('new-txn')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 text-white text-xs font-black shadow-md shadow-brand-500/20 transition"
            >
              <Plus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Transaction</span>
            </button>

            {/* Export Report */}
            <button
              onClick={() => setModalType('export')}
              className="p-2 rounded-lg text-slate-600 hover:text-navy-900 hover:bg-slate-100 border border-slate-200 transition"
              title="Export Report"
            >
              <Download className="w-4 h-4" />
            </button>

            {/* Notification Bell with Popup Drawer */}
            <div className="relative">
              <button
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                className="relative p-2 rounded-lg text-slate-600 hover:text-navy-900 hover:bg-slate-100 border border-slate-200 transition"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white"></span>
                )}
              </button>

              {/* Notification Popover */}
              {isNotifOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 animate-in fade-in">
                  <div className="p-3.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy-900">
                      Notifications ({unreadCount} new)
                    </span>
                    <button
                      onClick={markAllNotificationsRead}
                      className="text-[11px] font-semibold text-brand-600 hover:text-brand-800"
                    >
                      Mark all read
                    </button>
                  </div>

                  <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                    {safeNotifs.map((notif) => (
                      <div 
                        key={notif.id} 
                        className={`p-3.5 text-xs transition ${notif.read ? 'bg-white opacity-70' : 'bg-brand-50/30'}`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-navy-900">{notif.title}</span>
                          <span className="text-[10px] text-slate-400">{notif.time}</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{notif.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 bg-slate-50 border-t text-center">
                    <button
                      onClick={() => setIsNotifOpen(false)}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Avatar Pill */}
            <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
              <div className="w-9 h-9 rounded-xl bg-navy-950 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                {profile?.owner?.split(' ').map(n => n[0]).join('').slice(0, 2) || 'AD'}
              </div>
              <div className="hidden xl:block text-left text-xs">
                <p className="font-extrabold text-navy-950 leading-tight">{profile?.owner || 'Administrator'}</p>
                <span className="text-[10px] text-brand-600 font-bold block truncate max-w-[140px]">
                  {profile?.name || 'Workspace'}
                </span>
              </div>
            </div>

          </div>
        </header>

        {/* Dashboard Workspace Body */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1">
          {children}
        </main>
      </div>

      {/* Global Modals & Toasts */}
      <DemoModal 
        isOpen={!!modalType}
        onClose={() => setModalType(null)}
        type={modalType || 'new-txn'}
        defaultIndustry={currentIndustry.name}
      />
      <Toast />
    </div>
  );
};

export default DashboardLayout;

