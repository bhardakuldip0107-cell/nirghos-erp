import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  ArrowUpRight, 
  ArrowRight,
  Download, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Calendar, 
  DollarSign, 
  Boxes, 
  Users, 
  Layers, 
  ChevronRight, 
  FileText,
  Building2,
  RefreshCw,
  Sparkles,
  ExternalLink,
  Sliders,
  Check,
  X,
  ShieldCheck,
  Activity,
  Zap,
  BarChart3,
  User,
  Phone,
  Mail,
  Fingerprint,
  BadgeCheck,
  UserPlus,
  Trash2,
  Edit3,
  Coins
} from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCard from '../../components/DashboardCard/DashboardCard';
import DemoModal from '../../components/common/DemoModal';
import DynamicIcon from '../../components/common/DynamicIcon';
import { useDemo } from '../../context/DemoContext';
import { 
  getIndustryBySlug, 
  industriesData 
} from '../../data/industries';
import { 
  monthlySalesData, 
  industryKpis, 
  defaultKpis, 
  quickActionItems,
  getInventoryForIndustry,
  getStaffForIndustry
} from '../../data/mockData';

const moduleColorPresets = [
  {
    stripe: 'from-blue-600 via-sky-500 to-cyan-400',
    iconGradient: 'from-blue-600 via-sky-600 to-blue-700 shadow-lg shadow-blue-500/30',
    codeBadge: 'bg-blue-50 text-blue-700 border-blue-200',
    accentBorder: 'hover:border-blue-500',
    cardShadow: 'shadow-[0_10px_28px_-4px_rgba(37,99,235,0.15),0_6px_14px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_55px_-10px_rgba(37,99,235,0.32)]',
    btnHover: 'hover:bg-blue-600'
  },
  {
    stripe: 'from-indigo-600 via-purple-500 to-violet-400',
    iconGradient: 'from-indigo-600 via-purple-600 to-indigo-800 shadow-lg shadow-indigo-500/30',
    codeBadge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    accentBorder: 'hover:border-indigo-500',
    cardShadow: 'shadow-[0_10px_28px_-4px_rgba(79,70,229,0.15),0_6px_14px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_55px_-10px_rgba(79,70,229,0.32)]',
    btnHover: 'hover:bg-indigo-600'
  },
  {
    stripe: 'from-emerald-600 via-teal-500 to-emerald-400',
    iconGradient: 'from-emerald-600 via-teal-600 to-emerald-800 shadow-lg shadow-emerald-500/30',
    codeBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    accentBorder: 'hover:border-emerald-500',
    cardShadow: 'shadow-[0_10px_28px_-4px_rgba(16,185,129,0.15),0_6px_14px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_55px_-10px_rgba(16,185,129,0.32)]',
    btnHover: 'hover:bg-emerald-600'
  },
  {
    stripe: 'from-violet-600 via-fuchsia-500 to-pink-400',
    iconGradient: 'from-violet-600 via-fuchsia-600 to-purple-800 shadow-lg shadow-violet-500/30',
    codeBadge: 'bg-violet-50 text-violet-700 border-violet-200',
    accentBorder: 'hover:border-violet-500',
    cardShadow: 'shadow-[0_10px_28px_-4px_rgba(168,85,247,0.15),0_6px_14px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_55px_-10px_rgba(168,85,247,0.32)]',
    btnHover: 'hover:bg-violet-600'
  },
  {
    stripe: 'from-amber-500 via-orange-500 to-amber-400',
    iconGradient: 'from-amber-500 via-orange-600 to-amber-700 shadow-lg shadow-amber-500/30',
    codeBadge: 'bg-amber-50 text-amber-700 border-amber-200',
    accentBorder: 'hover:border-amber-500',
    cardShadow: 'shadow-[0_10px_28px_-4px_rgba(245,158,11,0.15),0_6px_14px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_55px_-10px_rgba(245,158,11,0.32)]',
    btnHover: 'hover:bg-amber-600'
  },
  {
    stripe: 'from-rose-600 via-pink-500 to-rose-400',
    iconGradient: 'from-rose-600 via-pink-600 to-rose-800 shadow-lg shadow-rose-500/30',
    codeBadge: 'bg-rose-50 text-rose-700 border-rose-200',
    accentBorder: 'hover:border-rose-500',
    cardShadow: 'shadow-[0_10px_28px_-4px_rgba(244,63,94,0.15),0_6px_14px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_55px_-10px_rgba(244,63,94,0.32)]',
    btnHover: 'hover:bg-rose-600'
  },
  {
    stripe: 'from-cyan-600 via-teal-500 to-sky-400',
    iconGradient: 'from-cyan-600 via-teal-600 to-sky-800 shadow-lg shadow-cyan-500/30',
    codeBadge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    accentBorder: 'hover:border-cyan-500',
    cardShadow: 'shadow-[0_10px_28px_-4px_rgba(6,182,212,0.15),0_6px_14px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_55px_-10px_rgba(6,182,212,0.32)]',
    btnHover: 'hover:bg-cyan-600'
  },
  {
    stripe: 'from-slate-700 via-navy-800 to-slate-900',
    iconGradient: 'from-navy-900 via-slate-800 to-navy-950 shadow-lg shadow-slate-500/30',
    codeBadge: 'bg-slate-100 text-slate-800 border-slate-300',
    accentBorder: 'hover:border-slate-500',
    cardShadow: 'shadow-[0_10px_28px_-4px_rgba(15,23,42,0.18),0_6px_14px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_55px_-10px_rgba(15,23,42,0.35)]',
    btnHover: 'hover:bg-brand-600'
  }
];

export const Dashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { 
    isAuthenticated,
    profile, 
    setProfile, 
    activeIndustrySlug, 
    setActiveIndustrySlug, 
    transactions, 
    showToast 
  } = useDemo();

  const [activeTab, setActiveTab] = useState(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['overview', 'modules', 'transactions', 'inventory', 'workforce', 'analytics', 'settings'].includes(tabParam)) {
      return tabParam;
    }
    return 'overview';
  });

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      next.set('tab', tabId);
      return next;
    }, { replace: true });
  };

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['overview', 'modules', 'transactions', 'inventory', 'workforce', 'analytics', 'settings'].includes(tabParam)) {
      if (tabParam !== activeTab) {
        setActiveTab(tabParam);
      }
    }
  }, [searchParams]);

  const [modalType, setModalType] = useState(null);
  const [txnSearch, setTxnSearch] = useState('');
  const [txnStatusFilter, setTxnStatusFilter] = useState('All');
  const [invSearch, setInvSearch] = useState('');
  const [invStatusFilter, setInvStatusFilter] = useState('All');
  const [staffSearch, setStaffSearch] = useState('');
  const [staffStatusFilter, setStaffStatusFilter] = useState('All');
  const [chartRange, setChartRange] = useState('12m'); // '6m' | '12m'
  const [activeModulePreview, setActiveModulePreview] = useState(null);

  // Sync active industry with query param or profile
  useEffect(() => {
    const industryParam = searchParams.get('industry');
    if (industryParam) {
      const match = getIndustryBySlug(industryParam);
      if (match && match.slug !== activeIndustrySlug) {
        setActiveIndustrySlug(industryParam);
        return;
      }
    } else if (isAuthenticated && profile?.slug) {
      if (activeIndustrySlug !== profile.slug) {
        setActiveIndustrySlug(profile.slug);
      }
    }
  }, [isAuthenticated, profile?.slug, searchParams, activeIndustrySlug, setActiveIndustrySlug]);

  const currentIndustry = getIndustryBySlug(activeIndustrySlug) || industriesData[0];
  const customKpi = (activeIndustrySlug && industryKpis[activeIndustrySlug]) || industryKpis.manufacturing || defaultKpis;

  // Dynamically generated sector inventory and staff tailored to this exact business!
  const dynamicInventory = getInventoryForIndustry(activeIndustrySlug);

  // Workforce Staff dynamic state with full Add, Remove, and Salary management
  const [staffList, setStaffList] = useState(() => getStaffForIndustry(activeIndustrySlug));
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const [editingSalaryEmp, setEditingSalaryEmp] = useState(null);
  const [salaryInput, setSalaryInput] = useState('');
  const [newEmployeeForm, setNewEmployeeForm] = useState({
    name: '',
    dept: '',
    role: '',
    salary: 8500,
    shift: 'Morning',
    status: 'Present',
    checkIn: '08:50 AM'
  });

  // Sync staff list when active industry changes
  useEffect(() => {
    setStaffList(getStaffForIndustry(activeIndustrySlug));
  }, [activeIndustrySlug]);

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (!newEmployeeForm.name.trim()) {
      showToast('Please enter employee name.', 'error');
      return;
    }
    const prefix = (activeIndustrySlug || 'emp').slice(0, 3).toUpperCase();
    const newId = `${prefix}-EMP-0${staffList.length + 1}`;
    const newEmp = {
      id: newId,
      name: newEmployeeForm.name.trim(),
      dept: newEmployeeForm.dept.trim() || 'Engineering & Operations',
      role: newEmployeeForm.role.trim() || 'Senior Sector Specialist',
      salary: Number(newEmployeeForm.salary) || 8500,
      status: newEmployeeForm.status || 'Present',
      checkIn: newEmployeeForm.status === 'Present' ? (newEmployeeForm.checkIn || '08:55 AM') : (newEmployeeForm.status === 'Late' ? '09:40 AM' : '-')
    };
    setStaffList(prev => [newEmp, ...prev]);
    setIsAddEmployeeModalOpen(false);
    setNewEmployeeForm({
      name: '',
      dept: '',
      role: '',
      salary: 8500,
      shift: 'Morning',
      status: 'Present',
      checkIn: '08:50 AM'
    });
    showToast(`Employee ${newEmp.name} (${newEmp.id}) onboarded successfully! Monthly salary $${newEmp.salary.toLocaleString()} added to payroll.`, 'success');
  };

  const handleRemoveEmployee = (empId, empName) => {
    setStaffList(prev => prev.filter(emp => emp.id !== empId));
    showToast(`Employee ${empName} (${empId}) removed from muster. Payroll re-adjusted.`, 'info');
  };

  const handleSaveSalary = (e) => {
    e.preventDefault();
    if (!editingSalaryEmp) return;
    const numSalary = Number(salaryInput);
    if (isNaN(numSalary) || numSalary < 0) {
      showToast('Please enter a valid salary amount.', 'error');
      return;
    }
    setStaffList(prev => prev.map(emp => emp.id === editingSalaryEmp.id ? { ...emp, salary: numSalary } : emp));
    showToast(`Salary for ${editingSalaryEmp.name} updated to $${numSalary.toLocaleString()}/mo.`, 'success');
    setEditingSalaryEmp(null);
  };

  const handleToggleAttendance = (empId, currentStatus) => {
    const cycle = { Present: 'Late', Late: 'On Leave', 'On Leave': 'Present' };
    const nextStatus = cycle[currentStatus] || 'Present';
    const checkIn = nextStatus === 'Present' ? '08:50 AM' : (nextStatus === 'Late' ? '09:40 AM' : '-');
    setStaffList(prev => prev.map(emp => emp.id === empId ? { ...emp, status: nextStatus, checkIn } : emp));
    showToast(`Attendance status for ${empId} set to "${nextStatus}".`, 'info');
  };

  const dynamicStaff = staffList;
  const totalMonthlyPayroll = staffList.reduce((acc, curr) => acc + (Number(curr.salary) || 0), 0);
  const morningPresentCount = staffList.filter(s => s.status === 'Present').length;
  const onLeaveCount = staffList.filter(s => s.status === 'On Leave').length;

  // Safe transactions array
  const safeTransactions = Array.isArray(transactions) ? transactions : [];

  // Filtered transactions for the ledger
  const filteredTransactions = safeTransactions.filter((t) => {
    const matchesSearch = (t.entity || '').toLowerCase().includes(txnSearch.toLowerCase()) ||
      (t.id || '').toLowerCase().includes(txnSearch.toLowerCase()) ||
      (t.type || '').toLowerCase().includes(txnSearch.toLowerCase());
    const matchesStatus = txnStatusFilter === 'All' || t.status === txnStatusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalLedgerSum = safeTransactions.reduce((acc, curr) => acc + (curr.amount || 0), 0);
  const paidSum = safeTransactions.filter(t => t.status === 'Paid').reduce((acc, curr) => acc + (curr.amount || 0), 0);
  const processingSum = safeTransactions.filter(t => t.status === 'Processing').reduce((acc, curr) => acc + (curr.amount || 0), 0);
  const pendingSum = safeTransactions.filter(t => t.status === 'Pending').reduce((acc, curr) => acc + (curr.amount || 0), 0);
  const overdueSum = safeTransactions.filter(t => t.status === 'Overdue').reduce((acc, curr) => acc + (curr.amount || 0), 0);
  const filteredSum = filteredTransactions.reduce((acc, curr) => acc + (curr.amount || 0), 0);

  // Filtered inventory items for stock catalog
  const filteredInventory = dynamicInventory.filter(item => {
    const matchesSearch = 
      (item.name || '').toLowerCase().includes(invSearch.toLowerCase()) ||
      (item.sku || '').toLowerCase().includes(invSearch.toLowerCase()) ||
      (item.category || '').toLowerCase().includes(invSearch.toLowerCase());
    const matchesStatus = invStatusFilter === 'All' || item.status === invStatusFilter;
    return matchesSearch && matchesStatus;
  });

  // Filtered staff muster for workforce HRMS
  const filteredStaff = dynamicStaff.filter(emp => {
    const matchesSearch = 
      (emp.name || '').toLowerCase().includes(staffSearch.toLowerCase()) ||
      (emp.id || '').toLowerCase().includes(staffSearch.toLowerCase()) ||
      (emp.dept || '').toLowerCase().includes(staffSearch.toLowerCase()) ||
      (emp.role || '').toLowerCase().includes(staffSearch.toLowerCase());
    const matchesStatus = staffStatusFilter === 'All' || emp.status === staffStatusFilter;
    return matchesSearch && matchesStatus;
  });

  // Settings form local state (synced with profile)
  const [settingsForm, setSettingsForm] = useState({
    name: profile?.name || 'Apex Global Enterprises',
    owner: profile?.owner || 'Vikram Malhotra',
    email: profile?.email || 'vikram.m@apexglobal.com',
    phone: profile?.phone || '+91 84012 30372',
    currency: profile?.currency || 'USD',
    gstin: profile?.gstin || '27AAACA1234F1Z8'
  });

  useEffect(() => {
    if (profile) {
      setSettingsForm({
        name: profile.name || '',
        owner: profile.owner || '',
        email: profile.email || '',
        phone: profile.phone || '',
        currency: profile.currency || 'USD',
        gstin: profile.gstin || '27AAACA1234F1Z8'
      });
    }
  }, [profile]);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setProfile(prev => ({
      ...prev,
      ...settingsForm
    }));
    showToast('Company profile and workstation settings updated successfully.', 'success');
  };

  const displayedChartData = chartRange === '6m' ? monthlySalesData.slice(6) : monthlySalesData;
  const maxRevenue = Math.max(...displayedChartData.map(d => d.revenue));

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={handleTabChange}>
      
      {/* Dynamic Industry & User Announcement Banner */}
      <div className="relative mb-8 rounded-3xl bg-gradient-to-br from-navy-950 via-slate-950 to-navy-900 text-white p-6 sm:p-7 border-2 border-slate-700/80 shadow-2xl shadow-navy-950/30 overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Top glowing ambient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-sky-400 to-emerald-400"></div>

        {/* Ambient background glows */}
        <div className="absolute right-0 top-0 -mr-16 -mt-16 w-80 h-80 bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/3 bottom-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex items-start sm:items-center gap-4 sm:gap-5 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 via-brand-600 to-indigo-700 text-white flex items-center justify-center shrink-0 shadow-xl shadow-brand-500/30 ring-4 ring-white/10 p-3.5 group-hover:scale-105 transition-transform duration-300">
            <DynamicIcon name={currentIndustry.icon} className="w-8 h-8 text-white drop-shadow-md" />
          </div>
          <div className="space-y-2">
            
            {/* Top status badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] sm:text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Active Enterprise Workspace</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-[10px] font-black uppercase tracking-wider">
                {currentIndustry.category || 'Specialized Vertical'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-navy-800 text-slate-300 border border-navy-700 font-mono text-[10px] font-bold hidden sm:inline-block">
                Engine v4.8
              </span>
            </div>

            {/* Entity Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight flex flex-wrap items-center gap-x-2">
              <span className="text-white drop-shadow-sm">{profile.name}</span>
              <span className="text-slate-500 font-light">—</span>
              <span className="bg-gradient-to-r from-brand-300 via-sky-300 to-indigo-200 bg-clip-text text-transparent">
                {currentIndustry.name} ERP
              </span>
            </h1>

            {/* Micro metadata row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-300 pt-0.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-navy-900/90 border border-navy-800 text-slate-300 text-[11px]">
                <User className="w-3.5 h-3.5 text-brand-400" />
                <span>Admin: <strong className="text-white font-bold">{profile.owner}</strong></span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-navy-900/90 border border-navy-800 text-slate-300 text-[11px]">
                <Mail className="w-3.5 h-3.5 text-brand-400" />
                <span className="truncate max-w-[200px]">{profile.email}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-navy-900/90 border border-navy-800 text-emerald-400 font-bold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profile.plan || 'Growth Trial (14 Days Free)'}</span>
              </span>
            </div>

          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3 shrink-0 relative z-10 pt-2 lg:pt-0 border-t lg:border-t-0 border-navy-800">
          <Link
            to={`/industries/${currentIndustry.slug}`}
            className="px-4 py-2.5 rounded-2xl bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs border border-navy-700 shadow-md hover:border-slate-500 transition flex items-center gap-2 cursor-pointer"
          >
            <span>View Architecture</span>
            <ExternalLink className="w-3.5 h-3.5 text-brand-400" />
          </Link>
          <button
            onClick={() => setModalType('new-txn')}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-brand-300 via-brand-400 to-sky-300 hover:brightness-110 text-navy-950 text-xs font-black transition-all duration-200 flex items-center gap-2 shadow-lg shadow-brand-500/25 hover:scale-[1.02] cursor-pointer"
          >
            <Plus className="w-4 h-4 text-navy-950 font-black" />
            <span>New Transaction</span>
          </button>
        </div>
      </div>

      {/* TAB 1: DASHBOARD OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          
          {/* Top 4 KPI Cards (Dynamic to Selected Industry) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <DashboardCard
              title={customKpi.stat1.label}
              value={customKpi.stat1.value}
              change={customKpi.stat1.change}
              note={customKpi.stat1.note}
              icon="DollarSign"
              iconBg="bg-emerald-50 text-emerald-600 border-emerald-100"
            />
            <DashboardCard
              title={customKpi.stat2.label}
              value={customKpi.stat2.value}
              change={customKpi.stat2.change}
              note={customKpi.stat2.note}
              icon="Users"
              iconBg="bg-brand-50 text-brand-600 border-brand-100"
            />
            <DashboardCard
              title={customKpi.stat3.label}
              value={customKpi.stat3.value}
              change={customKpi.stat3.change}
              note={customKpi.stat3.note}
              icon="TrendingUp"
              iconBg="bg-indigo-50 text-indigo-600 border-indigo-100"
            />
            <DashboardCard
              title={customKpi.stat4.label}
              value={customKpi.stat4.value}
              change={customKpi.stat4.change}
              note={customKpi.stat4.note}
              icon="Boxes"
              iconBg="bg-amber-50 text-amber-600 border-amber-100"
            />
          </div>

          {/* User Organization Info Card Banner */}
          <div className="relative bg-white rounded-3xl p-6 border-2 border-slate-300 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.1),0_4px_8px_-2px_rgba(0,0,0,0.04)] flex flex-wrap items-center justify-between gap-5 overflow-hidden">
            {/* Subtle top indicator */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-sky-400"></div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 border-2 border-brand-200 flex items-center justify-center font-black text-sm shadow-2xs">
                {profile.owner?.split(' ').map(n => n[0]).join('').slice(0, 2) || 'AD'}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-black text-navy-950">{profile.name}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-slate-100 text-slate-800 font-bold font-mono border-2 border-slate-300">
                    GSTIN: {profile.gstin || '27AAACA1234F1Z8'}
                  </span>
                </div>
                <div className="text-xs text-slate-500 flex flex-wrap items-center gap-2.5 mt-1 font-medium">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-brand-500" /> {profile.owner}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-brand-500" /> {profile.email}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-brand-500" /> {profile.phone || '+91 98000 00000'}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setActiveTab('settings');
                  showToast('Viewing company profile and settings.', 'info');
                }}
                className="px-4 py-2 rounded-xl border-2 border-slate-300 text-navy-950 text-xs font-black hover:bg-slate-50 hover:border-slate-400 transition shadow-2xs cursor-pointer"
              >
                Edit Entity Settings
              </button>
            </div>
          </div>

          {/* Quick Action Bar Shortcuts */}
          <div className="bg-white rounded-3xl p-5 border-2 border-slate-300 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.1),0_4px_8px_-2px_rgba(0,0,0,0.04)] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 border-2 border-slate-300 text-slate-700 font-black text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-brand-600" />
              <span>Operational Shortcuts:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => setModalType('new-txn')}
                className="px-4 py-2 rounded-xl bg-navy-950 hover:bg-brand-600 text-white text-xs font-black transition flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 text-brand-400" />
                <span>Create Invoice</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('inventory');
                  showToast(`Opened ${profile.name} Inventory & Catalog.`, 'info');
                }}
                className="px-4 py-2 rounded-xl bg-white border-2 border-slate-300 text-navy-950 text-xs font-black hover:bg-slate-50 hover:border-slate-400 transition shadow-2xs cursor-pointer"
              >
                Stock Reorder
              </button>
              <button
                onClick={() => {
                  setActiveTab('modules');
                  showToast(`Loaded ${currentIndustry.modules.length} specialized modules for ${currentIndustry.name}.`, 'info');
                }}
                className="px-4 py-2 rounded-xl bg-white border-2 border-slate-300 text-navy-950 text-xs font-black hover:bg-slate-50 hover:border-slate-400 transition shadow-2xs cursor-pointer"
              >
                Sector Modules ({currentIndustry.modules?.length})
              </button>
              <button
                onClick={() => setModalType('export')}
                className="px-4 py-2 rounded-xl bg-white border-2 border-slate-300 text-navy-950 text-xs font-black hover:bg-slate-50 hover:border-slate-400 transition shadow-2xs flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-brand-600" />
                <span>Export P&L</span>
              </button>
            </div>
          </div>

          {/* Middle Row: Revenue Chart & Industry Modules Quick Launcher */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Sales & Revenue Interactive Bar Visualizer */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-7 sm:p-8 border-2 border-slate-300 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.1),0_4px_12px_-2px_rgba(0,0,0,0.04)] space-y-6 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 via-sky-400 to-indigo-500"></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-slate-200">
                <div>
                  <h3 className="text-lg font-black text-navy-950">
                    Annual Financial Revenue & Operating Cost
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    Monthly billing stream synchronized with double-entry general ledger
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <span className="w-3 h-3 rounded-sm bg-brand-600 inline-block shadow-xs"></span> Revenue
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <span className="w-3 h-3 rounded-sm bg-slate-300 inline-block"></span> Expense
                  </span>
                  <div className="flex rounded-xl border-2 border-slate-300 p-0.5 bg-slate-100">
                    <button
                      onClick={() => setChartRange('6m')}
                      className={`px-3 py-1 rounded-lg text-xs font-black transition ${
                        chartRange === '6m' ? 'bg-white text-navy-950 shadow-xs border border-slate-200' : 'text-slate-500'
                      }`}
                    >
                      6M
                    </button>
                    <button
                      onClick={() => setChartRange('12m')}
                      className={`px-3 py-1 rounded-lg text-xs font-black transition ${
                        chartRange === '12m' ? 'bg-white text-navy-950 shadow-xs border border-slate-200' : 'text-slate-500'
                      }`}
                    >
                      12M
                    </button>
                  </div>
                </div>
              </div>

              {/* Chart Visualizer */}
              <div className="h-64 flex items-end justify-between gap-2.5 pt-6 px-2">
                {displayedChartData.map((item, idx) => {
                  const revHeight = (item.revenue / maxRevenue) * 100;
                  const expHeight = (item.expenses / maxRevenue) * 100;
                  return (
                     <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group relative">
                      {/* Tooltip on Hover */}
                      <div className="absolute -top-14 bg-navy-950 text-white text-[11px] py-1.5 px-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-20 border-2 border-navy-800 font-bold">
                        <span>{item.month}:</span> Rev ${(item.revenue / 1000).toFixed(0)}k | Margin ${(item.profit / 1000).toFixed(0)}k
                      </div>

                      <div className="w-full flex items-end justify-center gap-1 h-44">
                        <div 
                          style={{ height: `${revHeight}%` }} 
                          className="w-full max-w-[16px] bg-gradient-to-t from-brand-700 to-sky-400 rounded-t-md group-hover:brightness-110 transition-all shadow-xs"
                        ></div>
                        <div 
                          style={{ height: `${expHeight}%` }} 
                          className="w-full max-w-[16px] bg-slate-200 rounded-t-md group-hover:bg-slate-300 transition-all"
                        ></div>
                      </div>

                      <span className="text-[11px] font-mono font-bold text-slate-500">
                        {item.month}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                <span className="font-black text-emerald-700 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-600" /> Average EBITDA Margin Realization: +38.4%
                </span>
                <span className="text-slate-500 font-bold">100% Tax Audit Compliant</span>
              </div>
            </div>

            {/* Right: Active Industry Dedicated Modules Showcase */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-7 border-2 border-slate-300 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.1),0_4px_12px_-2px_rgba(0,0,0,0.04)] flex flex-col justify-between overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 to-violet-500"></div>

              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-slate-200">
                  <div>
                    <h3 className="text-base font-black text-navy-950">
                      Sector Modules
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Tailored for {currentIndustry.name}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('modules')}
                    className="text-xs font-black text-brand-600 hover:text-brand-800 cursor-pointer"
                  >
                    View All →
                  </button>
                </div>

                <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                  {currentIndustry.modules?.slice(0, 5).map((mod, i) => (
                    <div 
                      key={i}
                      className="p-3.5 rounded-2xl bg-slate-50 border-2 border-slate-200 flex items-center justify-between hover:bg-brand-50/70 hover:border-brand-400 transition cursor-pointer shadow-2xs"
                      onClick={() => setActiveModulePreview(mod)}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-xl bg-navy-900 text-white flex items-center justify-center shrink-0 font-bold shadow-2xs">
                          <DynamicIcon name={mod.icon} className="w-4 h-4 text-brand-400" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-black text-navy-950 truncate">{mod.name}</p>
                          <span className="text-[10px] text-slate-400 font-mono font-bold block truncate">{mod.code} Module</span>
                        </div>
                      </div>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-black border border-emerald-300 shrink-0">
                        Active
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t-2 border-slate-200">
                <button
                  onClick={() => setActiveTab('modules')}
                  className="w-full py-3.5 rounded-2xl bg-navy-950 hover:bg-brand-600 text-white text-xs font-black transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Launch Sector Module Studio</span>
                  <ChevronRight className="w-3.5 h-3.5 text-brand-400" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Table: Recent Transactions */}
          <div className="bg-white rounded-3xl border-2 border-slate-300 shadow-[0_16px_40px_-6px_rgba(15,23,42,0.14),0_6px_16px_-2px_rgba(0,0,0,0.06)] overflow-hidden">
            
            <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b-2 border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-black text-navy-950">
                  {profile.name} — Recent Ledger Transactions
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  Synchronous multi-branch receivables, payments, and purchase vouchers
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Search */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search ledger entries..."
                    value={txnSearch}
                    onChange={(e) => setTxnSearch(e.target.value)}
                    className="pl-9 pr-3.5 py-2 text-xs font-semibold rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-500 w-44 sm:w-56 bg-white"
                  />
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-bold">
                  <span>Status:</span>
                  <select
                    value={txnStatusFilter}
                    onChange={(e) => setTxnStatusFilter(e.target.value)}
                    className="text-xs font-black text-navy-900 border-2 border-slate-300 rounded-xl px-3 py-1.5 bg-white focus:outline-none cursor-pointer"
                  >
                    <option value="All">All Statuses</option>
                    <option value="Paid">Paid</option>
                    <option value="Processing">Processing</option>
                    <option value="Pending">Pending</option>
                    <option value="Overdue">Overdue</option>
                  </select>
                </div>

                <button
                  onClick={() => setModalType('new-txn')}
                  className="px-4 py-2 rounded-xl bg-navy-950 hover:bg-brand-600 text-white text-xs font-black transition flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5 text-brand-400" />
                  <span>Record Entry</span>
                </button>
              </div>
            </div>

            {/* Table with Explicit Visible Border Lines */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-300 text-navy-950 font-black uppercase text-[11px] tracking-wider">
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">Transaction ID</th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap min-w-[180px]">Entity / Customer</th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">Voucher Type</th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">Amount</th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">Date</th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">Status</th>
                    <th className="py-4 px-5 text-right whitespace-nowrap">Settlement Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-slate-300 bg-white">
                  {filteredTransactions.map((txn) => {
                    const statusColors = {
                      Paid: 'bg-emerald-100 text-emerald-900 border-2 border-emerald-400',
                      Processing: 'bg-sky-100 text-sky-900 border-2 border-sky-400',
                      Pending: 'bg-amber-100 text-amber-900 border-2 border-amber-400',
                      Overdue: 'bg-rose-100 text-rose-900 border-2 border-rose-400'
                    };

                    return (
                      <tr key={txn.id} className="hover:bg-brand-50/70 even:bg-slate-50/70 transition-colors">
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap font-mono font-black">
                          <span className="px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 border-2 border-brand-200 inline-block shadow-2xs">
                            {txn.id}
                          </span>
                        </td>
                        <td className="py-4 px-5 border-r-2 border-slate-300">
                          <div className="font-black text-navy-950 text-sm">{txn.entity}</div>
                        </td>
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded-xl bg-slate-100 text-slate-800 font-extrabold text-[11px] border-2 border-slate-300 inline-block shadow-2xs">
                            {txn.type}
                          </span>
                        </td>
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <div className="font-mono font-black text-sm text-navy-950">
                            ${txn.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </div>
                        </td>
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap font-medium text-slate-600">
                          <div className="flex items-center gap-1.5 font-bold">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{txn.date}</span>
                          </div>
                        </td>
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs ${statusColors[txn.status] || statusColors.Paid}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                            <span>{txn.status}</span>
                          </span>
                        </td>
                        <td className="py-4 px-5 text-right whitespace-nowrap">
                          <span className="font-extrabold text-slate-800 text-xs bg-slate-100 px-3 py-1.5 rounded-xl border-2 border-slate-300 inline-block">
                            {txn.method}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredTransactions.length === 0 && (
                <div className="py-14 text-center text-slate-400 text-xs font-bold">
                  No transactions match your search or status filter.
                </div>
              )}
            </div>

            <div className="p-5 bg-slate-100 border-t-2 border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-bold text-slate-700">
              <span className="font-black px-3 py-1 rounded-xl bg-white border-2 border-slate-300 text-navy-950">
                Showing {filteredTransactions.length} of {safeTransactions.length} total entries
              </span>
              <button 
                onClick={() => setModalType('export')}
                className="font-black text-brand-700 hover:text-brand-900 flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border-2 border-slate-300 hover:border-brand-500 transition shadow-2xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-brand-600" /> 
                <span>Export Ledger CSV</span>
              </button>
            </div>

          </div>

        </div>
      )}

      {/* TAB 2: INDUSTRY-SPECIFIC MODULES VIEW */}
      {activeTab === 'modules' && (
        <div className="space-y-8">
          
          {/* Header Panel */}
          <div className="relative bg-gradient-to-br from-white via-slate-50/70 to-white rounded-3xl p-7 sm:p-9 border-2 border-slate-200/90 shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-6 overflow-hidden">
            {/* Top gradient stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 via-sky-400 to-indigo-500"></div>

            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200/80 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                  {profile.name} • Dedicated Domain Suite
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-xs font-black flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  {currentIndustry.modules?.length} / {currentIndustry.modules?.length} Operational Engines Active
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">
                {currentIndustry.name} ERP Functional Suite
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed font-normal">
                Specialized enterprise micro-engines pre-configured with industry ledger charts, domain formulas, and regulatory compliance workflows for <strong>{currentIndustry.name}</strong>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => {
                  showToast(`All ${currentIndustry.modules?.length} module schemas synced with real-time double-entry core!`, 'success');
                }}
                className="px-6 py-3 rounded-2xl bg-navy-950 hover:bg-brand-600 text-white font-black text-xs shadow-lg shadow-navy-950/20 hover:shadow-brand-500/25 transition-all duration-200 flex items-center gap-2.5 group cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500 text-brand-400" />
                <span>Sync Module Schemas</span>
              </button>
            </div>
          </div>

          {/* 8 Module Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentIndustry.modules?.map((mod, i) => {
              const theme = moduleColorPresets[i % moduleColorPresets.length];
              const featureTags = mod.desc 
                ? mod.desc.split(',').map(s => s.trim().replace(/^and\s+/i, '').replace(/\.$/, '')).filter(Boolean).slice(0, 3)
                : ['Automated Ledger', 'Real-Time Sync', 'Audit Trail'];

              return (
                <div 
                  key={i}
                  onClick={() => setActiveModulePreview(mod)}
                  className={`relative bg-gradient-to-b from-white via-white to-slate-50/60 rounded-3xl p-6 sm:p-7 border-2 border-slate-200/80 ${theme.accentBorder} ${theme.cardShadow} transition-all duration-300 hover:-translate-y-2.5 flex flex-col justify-between group overflow-hidden cursor-pointer`}
                >
                  {/* Top glowing stripe */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${theme.stripe}`}></div>

                  <div>
                    {/* Header: 3D Icon Pod & Code Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${theme.iconGradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 ring-4 ring-slate-100`}>
                        <DynamicIcon name={mod.icon} className="w-7 h-7 text-white drop-shadow-sm" />
                      </div>

                      <span className={`text-[11px] font-mono font-black px-3 py-1.5 rounded-xl border ${theme.codeBadge} tracking-wider shadow-2xs`}>
                        {mod.code}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-navy-950 group-hover:text-brand-600 transition-colors leading-snug mb-2.5">
                      {mod.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                      {mod.desc}
                    </p>

                    {/* Micro Feature Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {featureTags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-[10px] font-bold text-slate-600 bg-slate-100/90 group-hover:bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200/80 transition-colors truncate max-w-[170px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Status & Launch Studio Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                        Online
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveModulePreview(mod)}
                      className={`px-4 py-2 rounded-xl bg-navy-950 ${theme.btnHover} text-white font-black text-xs shadow-md transition-all duration-200 flex items-center gap-1.5 group-hover:shadow-lg group-hover:translate-x-0.5 cursor-pointer`}
                    >
                      <span>Launch Studio</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: TRANSACTIONS & FULL LEDGER */}
      {activeTab === 'transactions' && (
        <div className="space-y-8">
          
          {/* 1. Top General Ledger Control Panel */}
          <div className="relative bg-white rounded-3xl p-7 sm:p-9 border-2 border-slate-300 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.12),0_6px_14px_-2px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Top Glowing Ambient Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-brand-500"></div>

            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border-2 border-emerald-300 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Double-Entry Balanced Ledger
                </span>
                <span className="px-3 py-0.5 rounded-full bg-slate-100 text-slate-800 border-2 border-slate-300 text-[11px] font-black uppercase">
                  FY 2025-2026 Audit Ready
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200 font-mono text-[11px] font-bold">
                  Currency: {profile?.currency || 'USD'} ($)
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">
                {profile.name} — General Ledger
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed font-normal">
                Real-time double-entry journal records, synchronized sales receipts, vendor payables, and chart of accounts balance verification for <strong>{currentIndustry.name}</strong>.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setModalType('export')}
                className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-navy-950 font-black text-xs border-2 border-slate-300 shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-brand-600" />
                <span>Export Audit Pack</span>
              </button>
              <button
                onClick={() => setModalType('new-txn')}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-400 via-brand-500 to-sky-400 hover:brightness-110 text-navy-950 font-black text-xs shadow-lg shadow-brand-500/25 transition flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <Plus className="w-4 h-4 text-navy-950 font-black" />
                <span>Record Voucher</span>
              </button>
            </div>
          </div>

          {/* 2. Four Prominent Ledger Summary Cards with Strong Visible Borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Stat 1: Total Ledger */}
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-300 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.1),0_4px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-slate-400 transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">Gross Ledger Volume</span>
                <div className="w-10 h-10 rounded-2xl bg-navy-50 text-navy-900 border-2 border-slate-200 flex items-center justify-center font-bold shadow-2xs">
                  <DollarSign className="w-5 h-5 text-brand-600" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-navy-950 font-mono tracking-tight">
                  ${totalLedgerSum.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-bold text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>{safeTransactions.length} Total Registered Entries</span>
                </div>
              </div>
            </div>

            {/* Stat 2: Paid Inflow */}
            <div className="bg-white rounded-3xl p-6 border-2 border-emerald-300 shadow-[0_8px_24px_-4px_rgba(16,185,129,0.14)] hover:shadow-xl hover:border-emerald-500 transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-800">Settled Receipts (Paid)</span>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 border-2 border-emerald-200 flex items-center justify-center font-bold shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-950 font-mono tracking-tight">
                  ${paidSum.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-black text-emerald-700">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-300">
                    {safeTransactions.filter(t => t.status === 'Paid').length} Vouchers Cleared
                  </span>
                </div>
              </div>
            </div>

            {/* Stat 3: Processing */}
            <div className="bg-white rounded-3xl p-6 border-2 border-sky-300 shadow-[0_8px_24px_-4px_rgb(var(--brand-electric-rgb)/0.14)] hover:shadow-xl hover:border-sky-500 transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-sky-800">Bank Clearance In-Flight</span>
                <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-700 border-2 border-sky-200 flex items-center justify-center font-bold shadow-2xs">
                  <RefreshCw className="w-5 h-5 text-sky-600" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-sky-950 font-mono tracking-tight">
                  ${processingSum.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-black text-sky-700">
                  <span className="px-2 py-0.5 rounded-full bg-sky-100 border border-sky-300">
                    {safeTransactions.filter(t => t.status === 'Processing').length} Batch Clearing
                  </span>
                </div>
              </div>
            </div>

            {/* Stat 4: Pending / Overdue */}
            <div className="bg-white rounded-3xl p-6 border-2 border-rose-300 shadow-[0_8px_24px_-4px_rgba(244,63,94,0.14)] hover:shadow-xl hover:border-rose-500 transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-rose-800">Pending & Receivables</span>
                <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-700 border-2 border-rose-200 flex items-center justify-center font-bold shadow-2xs">
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-rose-950 font-mono tracking-tight">
                  ${(pendingSum + overdueSum).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </div>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-black text-rose-700">
                  <span className="px-2 py-0.5 rounded-full bg-rose-100 border border-rose-300">
                    {safeTransactions.filter(t => t.status === 'Overdue' || t.status === 'Pending').length} Vouchers Open
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* 3. The General Ledger Table with High-Visibility Crisp Border Lines */}
          <div className="bg-white rounded-3xl border-2 border-slate-300 shadow-[0_16px_40px_-6px_rgba(15,23,42,0.14),0_6px_16px_-2px_rgba(0,0,0,0.06)] overflow-hidden">
            
            {/* Filter and Search Bar Container */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b-2 border-slate-300 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search voucher ID, entity name, or type..."
                  value={txnSearch}
                  onChange={(e) => setTxnSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-2xl border-2 border-slate-300 focus:outline-none focus:border-brand-500 bg-white shadow-2xs placeholder:text-slate-400"
                />
              </div>

              {/* Status Filter Tab Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500 mr-1 hidden sm:inline">
                  Filter By:
                </span>
                {[
                  { id: 'All', label: 'All Entries', count: safeTransactions.length },
                  { id: 'Paid', label: 'Paid', count: safeTransactions.filter(t => t.status === 'Paid').length },
                  { id: 'Processing', label: 'Processing', count: safeTransactions.filter(t => t.status === 'Processing').length },
                  { id: 'Pending', label: 'Pending', count: safeTransactions.filter(t => t.status === 'Pending').length },
                  { id: 'Overdue', label: 'Overdue', count: safeTransactions.filter(t => t.status === 'Overdue').length }
                ].map(filter => {
                  const isActive = txnStatusFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setTxnStatusFilter(filter.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border-2 ${
                        isActive
                          ? 'bg-navy-950 text-white border-navy-950 shadow-md'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-100'
                      }`}
                    >
                      <span>{filter.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                        isActive ? 'bg-brand-500 text-navy-950' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {filter.count}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* General Ledger Table with Explicit Visible Border Lines */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                
                {/* Table Header: Crisp 2px Bottom Border and Column Dividers */}
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-300 text-navy-950 font-black uppercase text-[11px] tracking-wider">
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                      Voucher ID
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap min-w-[180px]">
                      Account / Entity Name
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                      Voucher Type
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                      Ledger Category
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                      Credit / Inflow Amount
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                      Posting Date
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                      Audit Status
                    </th>
                    <th className="py-4 px-5 text-right whitespace-nowrap">
                      Settlement Mode
                    </th>
                  </tr>
                </thead>

                {/* Table Body: 2px Row Dividers and High-Contrast Column Borders */}
                <tbody className="divide-y-2 divide-slate-300 bg-white">
                  {filteredTransactions.map((t) => {
                    const statusTheme = {
                      Paid: 'bg-emerald-100 text-emerald-900 border-2 border-emerald-400',
                      Processing: 'bg-sky-100 text-sky-900 border-2 border-sky-400',
                      Pending: 'bg-amber-100 text-amber-900 border-2 border-amber-400',
                      Overdue: 'bg-rose-100 text-rose-900 border-2 border-rose-400'
                    }[t.status] || 'bg-slate-100 text-slate-800 border-2 border-slate-300';

                    return (
                      <tr 
                        key={t.id} 
                        className="hover:bg-brand-50/70 even:bg-slate-50/70 transition-colors"
                      >
                        {/* 1. Voucher ID */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap font-mono font-black">
                          <span className="px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 border-2 border-brand-200 inline-block shadow-2xs">
                            {t.id}
                          </span>
                        </td>

                        {/* 2. Entity */}
                        <td className="py-4 px-5 border-r-2 border-slate-300">
                          <div className="font-black text-navy-950 text-sm leading-snug">
                            {t.entity}
                          </div>
                          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">
                            Verified Customer Account
                          </span>
                        </td>

                        {/* 3. Voucher Type */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <span className="px-3 py-1 rounded-xl bg-slate-100 font-extrabold text-[11px] text-slate-800 border-2 border-slate-300 inline-block shadow-2xs">
                            {t.type}
                          </span>
                        </td>

                        {/* 4. Category */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <span className="font-bold text-slate-700 text-xs">
                            {t.category}
                          </span>
                        </td>

                        {/* 5. Amount */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <div className="font-mono font-black text-sm text-navy-950 tracking-tight">
                            ${t.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                          </div>
                          <span className="text-[10px] font-black text-emerald-600 block mt-0.5">
                            + CR Double-Entry
                          </span>
                        </td>

                        {/* 6. Posting Date */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <div className="flex items-center gap-1.5 text-slate-600 font-bold text-xs">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{t.date}</span>
                          </div>
                        </td>

                        {/* 7. Audit Status */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs ${statusTheme}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                            <span>{t.status}</span>
                          </span>
                        </td>

                        {/* 8. Settlement Mode */}
                        <td className="py-4 px-5 text-right whitespace-nowrap">
                          <span className="font-extrabold text-slate-800 text-xs bg-slate-100 px-3 py-1.5 rounded-xl border-2 border-slate-300 inline-block">
                            {t.method}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredTransactions.length === 0 && (
                <div className="py-16 text-center text-slate-500 space-y-2">
                  <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="font-bold text-sm text-navy-950">No Vouchers Found</p>
                  <p className="text-xs text-slate-400">Try adjusting your search query or status filter.</p>
                </div>
              )}
            </div>

            {/* 4. Table Summary Footer with Strong Border Divider */}
            <div className="p-5 bg-slate-100 border-t-2 border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-xl bg-white border-2 border-slate-300 text-navy-950 font-black">
                  Showing {filteredTransactions.length} of {safeTransactions.length} Vouchers
                </span>
                <span className="text-slate-500 font-semibold hidden sm:inline">
                  Filtered Balance: <strong className="text-navy-950 font-mono font-black">${filteredSum.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong>
                </span>
              </div>

              <button 
                onClick={() => setModalType('export')}
                className="font-black text-brand-700 hover:text-brand-900 flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border-2 border-slate-300 hover:border-brand-500 transition shadow-2xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-brand-600" />
                <span>Export Ledger CSV Manifest</span>
              </button>
            </div>

          </div>

        </div>
      )}

      {/* TAB 4: PRODUCTS & INVENTORY (Dynamically tailored to this user's sector!) */}
      {activeTab === 'inventory' && (
        <div className="space-y-8">
          
          {/* 1. Top Stock Catalog Control Panel */}
          <div className="relative bg-white rounded-3xl p-7 sm:p-9 border-2 border-slate-300 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.12),0_6px_14px_-2px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Top Amber-Brand Accent Stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-brand-500 to-sky-400"></div>

            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 border-2 border-amber-300 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
                  <Boxes className="w-4 h-4 text-amber-600" />
                  {profile.name} • Asset & Stock Matrix
                </span>
                <span className="px-3 py-0.5 rounded-full bg-slate-100 text-slate-800 border-2 border-slate-300 text-[11px] font-black uppercase">
                  FIFO Valuation Audited
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200 font-mono text-[11px] font-bold">
                  Godown Network: 100% Online
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">
                {currentIndustry.name} Stock Catalog
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed font-normal">
                Real-time stock valuation across specialized <strong>{currentIndustry.name}</strong> depots, automated reorder thresholds, batch/serial tracking, and real-time inventory ledger integration.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => showToast(`Stock audit manifest initiated for ${profile.name}. Scanning RFID tags & barcodes...`, 'info')}
                className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 text-navy-950 font-black text-xs border-2 border-slate-300 shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 text-brand-600" />
                <span>Run Stock Audit</span>
              </button>
              <button
                onClick={() => setModalType('new-txn')}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-400 via-brand-500 to-sky-400 hover:brightness-110 text-navy-950 font-black text-xs shadow-lg shadow-brand-500/25 transition flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <Plus className="w-4 h-4 text-navy-950 font-black" />
                <span>Add Stock Item</span>
              </button>
            </div>
          </div>

          {/* 2. Four Prominent Inventory Metric Cards with Strong Visible Borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Card 1: Total SKUs */}
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-300 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.1),0_4px_8px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-slate-400 transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">Domain Catalog SKUs</span>
                <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-700 border-2 border-brand-200 flex items-center justify-center font-bold shadow-2xs">
                  <Boxes className="w-5 h-5 text-brand-600" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-navy-950 font-mono tracking-tight">
                  {dynamicInventory.length * 840} SKUs
                </div>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-bold text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>98.2% In-Stock Ratio</span>
                </div>
              </div>
            </div>

            {/* Card 2: Total Asset Valuation */}
            <div className="bg-white rounded-3xl p-6 border-2 border-emerald-300 shadow-[0_8px_24px_-4px_rgba(16,185,129,0.14)] hover:shadow-xl hover:border-emerald-500 transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-800">Total Stock Valuation</span>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 border-2 border-emerald-200 flex items-center justify-center font-bold shadow-2xs">
                  <DollarSign className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-950 font-mono tracking-tight">
                  $1,980,500.00
                </div>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-black text-emerald-700">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 border border-emerald-300">
                    FIFO Real-Time Asset Basis
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Low Stock Alerts */}
            <div className="bg-white rounded-3xl p-6 border-2 border-amber-300 shadow-[0_8px_24px_-4px_rgba(245,158,11,0.14)] hover:shadow-xl hover:border-amber-500 transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-amber-800">Critical Reorder Alerts</span>
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 border-2 border-amber-200 flex items-center justify-center font-bold shadow-2xs">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-950 font-mono tracking-tight">
                  {dynamicInventory.filter(i => i.status === 'Low Stock').length} Items Critical
                </div>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-black text-amber-700">
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 border border-amber-300">
                    Automatic POs Drafted
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4: Optimal Inventory */}
            <div className="bg-white rounded-3xl p-6 border-2 border-sky-300 shadow-[0_8px_24px_-4px_rgb(var(--brand-electric-rgb)/0.14)] hover:shadow-xl hover:border-sky-500 transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-sky-800">Optimal Stock Health</span>
                <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-700 border-2 border-sky-200 flex items-center justify-center font-bold shadow-2xs">
                  <CheckCircle2 className="w-5 h-5 text-sky-600" />
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-sky-950 font-mono tracking-tight">
                  {dynamicInventory.filter(i => i.status === 'Optimal').length} SKUs Ready
                </div>
                <div className="mt-2 flex items-center gap-2 text-[11px] font-black text-sky-700">
                  <span className="px-2 py-0.5 rounded-full bg-sky-100 border border-sky-300">
                    Zero Stockout Risk
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* 3. Stock Catalog Table with High-Visibility Crisp Border Lines */}
          <div className="bg-white rounded-3xl border-2 border-slate-300 shadow-[0_16px_40px_-6px_rgba(15,23,42,0.14),0_6px_16px_-2px_rgba(0,0,0,0.06)] overflow-hidden">
            
            {/* Filter and Search Bar Container */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b-2 border-slate-300 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search by SKU code, item name, or category..."
                  value={invSearch}
                  onChange={(e) => setInvSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-2xl border-2 border-slate-300 focus:outline-none focus:border-brand-500 bg-white shadow-2xs placeholder:text-slate-400"
                />
              </div>

              {/* Status Filter Tab Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500 mr-1 hidden sm:inline">
                  Filter Health:
                </span>
                {[
                  { id: 'All', label: 'All Items', count: dynamicInventory.length },
                  { id: 'Optimal', label: 'Optimal Stock', count: dynamicInventory.filter(i => i.status === 'Optimal').length },
                  { id: 'Low Stock', label: 'Low Stock Alerts', count: dynamicInventory.filter(i => i.status === 'Low Stock').length }
                ].map(filter => {
                  const isActive = invStatusFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setInvStatusFilter(filter.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border-2 ${
                        isActive
                          ? 'bg-navy-950 text-white border-navy-950 shadow-md'
                          : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-100'
                      }`}
                    >
                      <span>{filter.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                        isActive ? 'bg-brand-500 text-navy-950' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {filter.count}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Stock Catalog Table with Explicit Visible Border Lines */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                
                {/* Table Header: Crisp 2px Bottom Border and Column Dividers */}
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-300 text-navy-950 font-black uppercase text-[11px] tracking-wider">
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                      SKU Code
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap min-w-[220px]">
                      Domain Item & Description
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                      Inventory Category
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                      Available Stock
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                      Reorder Threshold
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                      Unit Valuation
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                      Stock Status
                    </th>
                    <th className="py-4 px-5 text-right whitespace-nowrap">
                      Quick Action
                    </th>
                  </tr>
                </thead>

                {/* Table Body: 2px Row Dividers and High-Contrast Column Borders */}
                <tbody className="divide-y-2 divide-slate-300 bg-white">
                  {filteredInventory.map((item, idx) => {
                    const statusTheme = item.status === 'Optimal'
                      ? 'bg-emerald-100 text-emerald-900 border-2 border-emerald-400'
                      : 'bg-amber-100 text-amber-900 border-2 border-amber-400';

                    return (
                      <tr 
                        key={idx} 
                        className="hover:bg-brand-50/70 even:bg-slate-50/70 transition-colors"
                      >
                        {/* 1. SKU Code */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap font-mono font-black">
                          <span className="px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 border-2 border-brand-200 inline-block shadow-2xs">
                            {item.sku}
                          </span>
                        </td>

                        {/* 2. Item Name & Details */}
                        <td className="py-4 px-5 border-r-2 border-slate-300">
                          <div className="font-black text-navy-950 text-sm leading-snug">
                            {item.name}
                          </div>
                          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">
                            Warehouse Depot Lot #0{idx + 1} • Barcode Verified
                          </span>
                        </td>

                        {/* 3. Category */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <span className="px-3 py-1 rounded-xl bg-slate-100 font-extrabold text-[11px] text-slate-800 border-2 border-slate-300 inline-block shadow-2xs">
                            {item.category}
                          </span>
                        </td>

                        {/* 4. Available Stock */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <div className="font-mono font-black text-sm text-navy-950 tracking-tight">
                            {item.stock} Units
                          </div>
                          <span className="text-[10px] font-bold text-slate-500 block mt-0.5">
                            Available in Bin A-{idx + 1}
                          </span>
                        </td>

                        {/* 5. Reorder Level */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <div className="font-mono font-extrabold text-xs text-slate-700">
                            {item.reorder || 10} Units
                          </div>
                          <span className="text-[10px] text-slate-400">Trigger Threshold</span>
                        </td>

                        {/* 6. Unit Price */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <div className="font-mono font-black text-xs text-navy-950">
                            {item.unitPrice}
                          </div>
                          <span className="text-[10px] text-slate-400">Standard Cost</span>
                        </td>

                        {/* 7. Stock Status */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-2xs ${statusTheme}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                            <span>{item.status}</span>
                          </span>
                        </td>

                        {/* 8. Quick Action */}
                        <td className="py-4 px-5 text-right whitespace-nowrap">
                          <button
                            onClick={() => showToast(`Drafting Reorder Manifest for ${item.name} (${item.sku})...`, 'info')}
                            className="px-3.5 py-1.5 rounded-xl bg-navy-950 hover:bg-brand-600 text-white font-extrabold text-xs transition shadow-2xs cursor-pointer inline-flex items-center gap-1.5"
                          >
                            <span>Reorder</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {filteredInventory.length === 0 && (
                <div className="py-16 text-center text-slate-500 space-y-2">
                  <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="font-bold text-sm text-navy-950">No Inventory Items Found</p>
                  <p className="text-xs text-slate-400">Try adjusting your SKU search query or health filter.</p>
                </div>
              )}
            </div>

            {/* 4. Table Summary Footer with Strong Border Divider */}
            <div className="p-5 bg-slate-100 border-t-2 border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-xl bg-white border-2 border-slate-300 text-navy-950 font-black">
                  Showing {filteredInventory.length} of {dynamicInventory.length} Catalog Items
                </span>
                <span className="text-slate-500 font-semibold hidden sm:inline">
                  Warehouse Status: <strong className="text-emerald-700 font-bold">100% Synced & Audited</strong>
                </span>
              </div>

              <button 
                onClick={() => showToast(`Exporting inventory sheet for ${currentIndustry.name}...`, 'success')}
                className="font-black text-brand-700 hover:text-brand-900 flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border-2 border-slate-300 hover:border-brand-500 transition shadow-2xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-brand-600" />
                <span>Export Inventory Sheet (CSV)</span>
              </button>
            </div>

          </div>

        </div>
      )}

      {/* TAB 5: WORKFORCE & HRMS (Dynamically tailored to this user's sector!) */}
      {activeTab === 'workforce' && (
        <div className="space-y-8">
          
          {/* Workforce Suite Header Card */}
          <div className="relative bg-white rounded-3xl p-7 sm:p-9 border-2 border-slate-400 shadow-[0_12px_36px_-4px_rgba(15,23,42,0.16),0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 ring-1 ring-slate-900/5">
            
            {/* Top glowing accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-400"></div>

            {/* Ambient background glows */}
            <div className="absolute right-0 top-0 -mr-16 -mt-16 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute left-1/3 bottom-0 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-3 relative z-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-violet-100 text-violet-900 border-2 border-violet-400 text-[11px] font-black uppercase tracking-wider shadow-xs">
                  {profile.name} Human Capital
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-950 border-2 border-emerald-500 text-[11px] font-black uppercase tracking-wider flex items-center gap-2 shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Biometric Cloud Live</span>
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-950 border-2 border-sky-400 text-[11px] font-black uppercase tracking-wider hidden sm:inline-flex items-center gap-1.5 shadow-xs">
                  <Fingerprint className="w-4 h-4 text-sky-700" />
                  <span>ISO 27001 Access Audit</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight leading-tight">
                {currentIndustry.name} Workforce & Biometric Muster
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-bold flex flex-wrap items-center gap-2">
                <span>Enterprise Human Capital Management</span>
                <span className="text-slate-400">•</span>
                <span>Active Shift Muster Synced</span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-700 font-black">Gate Roster: 100% Online</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 relative z-10">
              <button
                onClick={() => setIsAddEmployeeModalOpen(true)}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:brightness-110 text-white font-black text-xs transition-all shadow-md shadow-emerald-500/25 flex items-center gap-2 cursor-pointer border-2 border-emerald-500/80"
              >
                <UserPlus className="w-4 h-4 text-white" />
                <span>+ Add Employee</span>
              </button>

              <button
                onClick={() => showToast(`Biometric gate controller synced successfully. ${staffList.length} employee muster records re-validated.`, 'success')}
                className="px-5 py-2.5 rounded-2xl bg-white hover:bg-slate-100 text-navy-950 font-black text-xs border-2 border-slate-400 hover:border-slate-600 transition-all flex items-center gap-2 shadow-xs cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 text-slate-700" />
                <span>Sync Biometric Gate</span>
              </button>

              <button
                onClick={() => showToast(`Monthly statutory payroll calculated for ${profile.name} ($${totalMonthlyPayroll.toLocaleString()}). Direct bank disbursement file generated with zero tax leakage.`, 'success')}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-brand-600 hover:brightness-110 text-white font-black text-xs transition-all shadow-md shadow-violet-500/30 flex items-center gap-2 cursor-pointer border-2 border-violet-700/50"
              >
                <DollarSign className="w-4 h-4 text-white" />
                <span>Generate Monthly Payroll (${(totalMonthlyPayroll / 1000).toFixed(1)}k)</span>
              </button>
            </div>
          </div>

          {/* 4 Elevated Metric Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Morning Shift Present */}
            <div className="p-6 rounded-3xl bg-white border-2 border-emerald-500 ring-2 ring-emerald-400/20 shadow-[0_10px_28px_-4px_rgba(16,185,129,0.22)] relative overflow-hidden group hover:border-emerald-600 transition-all">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400"></div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-emerald-900 uppercase tracking-wider">
                  Morning Shift Present
                </span>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 border-2 border-emerald-400 flex items-center justify-center font-black shadow-xs">
                  <Users className="w-6 h-6 text-emerald-700" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight font-mono">
                {morningPresentCount} Present
              </p>
              <div className="flex items-center gap-1.5 mt-2.5 text-[11px] font-black text-emerald-950 bg-emerald-100/90 px-3 py-1 rounded-xl border-2 border-emerald-300 w-fit shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>Biometric Verified Gate In</span>
              </div>
            </div>

            {/* 2. Total Workforce Staff */}
            <div className="p-6 rounded-3xl bg-white border-2 border-brand-500 ring-2 ring-brand-400/20 shadow-[0_10px_28px_-4px_rgba(37,99,235,0.22)] relative overflow-hidden group hover:border-brand-600 transition-all">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-600 to-sky-400"></div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-brand-900 uppercase tracking-wider">
                  Active Staff on Roster
                </span>
                <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-900 border-2 border-brand-400 flex items-center justify-center font-black shadow-xs">
                  <Clock className="w-6 h-6 text-brand-700" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight font-mono">
                {staffList.length} Personnel
              </p>
              <div className="flex items-center gap-1.5 mt-2.5 text-[11px] font-black text-brand-950 bg-brand-100/90 px-3 py-1 rounded-xl border-2 border-brand-300 w-fit shadow-2xs">
                <BadgeCheck className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                <span>Roster Managed & Active</span>
              </div>
            </div>

            {/* 3. Approved Leaves & Out of Office */}
            <div className="p-6 rounded-3xl bg-white border-2 border-amber-500 ring-2 ring-amber-400/20 shadow-[0_10px_28px_-4px_rgba(245,158,11,0.22)] relative overflow-hidden group hover:border-amber-600 transition-all">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-orange-400"></div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-amber-900 uppercase tracking-wider">
                  Approved Leaves & OOO
                </span>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 border-2 border-amber-400 flex items-center justify-center font-black shadow-xs">
                  <Calendar className="w-6 h-6 text-amber-700" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight font-mono">
                {onLeaveCount} Personnel
              </p>
              <div className="flex items-center gap-1.5 mt-2.5 text-[11px] font-black text-amber-950 bg-amber-100/90 px-3 py-1 rounded-xl border-2 border-amber-300 w-fit shadow-2xs">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Paid Leave Quota Tracked</span>
              </div>
            </div>

            {/* 4. Monthly Payroll */}
            <div className="p-6 rounded-3xl bg-white border-2 border-violet-500 ring-2 ring-violet-400/20 shadow-[0_10px_28px_-4px_rgba(139,92,246,0.22)] relative overflow-hidden group hover:border-violet-600 transition-all">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-600 to-indigo-500"></div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-violet-900 uppercase tracking-wider">
                  Monthly Statutory Payroll
                </span>
                <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-900 border-2 border-violet-400 flex items-center justify-center font-black shadow-xs">
                  <DollarSign className="w-6 h-6 text-violet-700" />
                </div>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight font-mono">
                ${totalMonthlyPayroll.toLocaleString()}
              </p>
              <div className="flex items-center gap-1.5 mt-2.5 text-[11px] font-black text-violet-950 bg-violet-100/90 px-3 py-1 rounded-xl border-2 border-violet-300 w-fit shadow-2xs">
                <Check className="w-3.5 h-3.5 text-violet-700 shrink-0" />
                <span>Live CTC Auto-Calculated</span>
              </div>
            </div>

          </div>

          {/* Biometric Muster Roll Table Container with High-Contrast 2px Visible Borders */}
          <div className="bg-white rounded-3xl border-2 border-slate-400 shadow-[0_16px_40px_-6px_rgba(15,23,42,0.18),0_4px_16px_rgba(0,0,0,0.08)] overflow-hidden">
            
            {/* Container Header */}
            <div className="p-6 sm:p-7 border-b-2 border-slate-400 bg-gradient-to-r from-slate-100 via-white to-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <h3 className="font-black text-navy-950 text-base sm:text-lg">
                    Biometric Muster Roll — {profile.name} ({currentIndustry.name})
                  </h3>
                </div>
                <p className="text-xs text-slate-500 font-semibold mt-1">
                  Real-time biometric punch verification, shift roster assignment, and attendance & salary ledger
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsAddEmployeeModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>+ Add Employee</span>
                </button>
                <span className="px-3.5 py-1.5 rounded-xl bg-emerald-100 border-2 border-emerald-400 text-emerald-950 text-xs font-black flex items-center gap-1.5 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Bio-Sync Active (Port 4370)</span>
                </span>
              </div>
            </div>

            {/* Search and Status Filters */}
            <div className="p-4 sm:p-5 bg-slate-100/95 border-b-2 border-slate-400 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search input with 2px solid border */}
              <div className="relative flex-1 min-w-[280px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={staffSearch}
                  onChange={(e) => setStaffSearch(e.target.value)}
                  placeholder="Search by employee name, ID, department, or designation..."
                  className="w-full pl-10 pr-9 py-2.5 text-xs font-bold bg-white rounded-xl border-2 border-slate-400 focus:border-brand-600 focus:outline-none placeholder:text-slate-500 shadow-2xs"
                />
                {staffSearch && (
                  <button 
                    onClick={() => setStaffSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Status Filter Tabs with 2px borders and counter chips */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {[
                  { id: 'All', label: 'All Personnel', count: dynamicStaff.length },
                  { id: 'Present', label: 'Present', count: dynamicStaff.filter(s => s.status === 'Present').length },
                  { id: 'Late', label: 'Late Punch', count: dynamicStaff.filter(s => s.status === 'Late').length },
                  { id: 'On Leave', label: 'On Leave', count: dynamicStaff.filter(s => s.status === 'On Leave').length }
                ].map(filter => {
                  const isActive = staffStatusFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      onClick={() => setStaffStatusFilter(filter.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border-2 ${
                        isActive
                          ? 'bg-navy-950 text-white border-navy-950 shadow-md'
                          : 'bg-white text-slate-800 border-slate-400 hover:border-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <span>{filter.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                        isActive ? 'bg-brand-500 text-navy-950' : 'bg-slate-200 text-slate-800'
                      }`}>
                        {filter.count}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Muster Roll Table with Explicit Visible 2px Border Lines on Columns and Rows */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                
                {/* Table Header: Crisp 2px Bottom Border and Column Dividers */}
                <thead>
                  <tr className="bg-slate-200 border-b-2 border-slate-400 text-navy-950 font-black uppercase text-[11px] tracking-wider">
                    <th className="py-4 px-5 border-r-2 border-slate-400 whitespace-nowrap">
                      Emp ID
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-400 whitespace-nowrap min-w-[220px]">
                      Employee & Identity
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-400 whitespace-nowrap">
                      Department
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-400 whitespace-nowrap min-w-[180px]">
                      Designation & Role
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-400 whitespace-nowrap min-w-[140px]">
                      Monthly Salary (CTC)
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-400 whitespace-nowrap">
                      Gate Punch In
                    </th>
                    <th className="py-4 px-5 border-r-2 border-slate-400 whitespace-nowrap">
                      Biometric Status
                    </th>
                    <th className="py-4 px-5 text-right whitespace-nowrap min-w-[160px]">
                      Actions & Options
                    </th>
                  </tr>
                </thead>

                {/* Table Body: 2px Row Dividers and High-Contrast Column Borders */}
                <tbody className="divide-y-2 divide-slate-300 bg-white">
                  {filteredStaff.map((emp, idx) => {
                    const statusTheme = emp.status === 'Present'
                      ? 'bg-emerald-100 text-emerald-950 border-2 border-emerald-500 shadow-xs'
                      : emp.status === 'Late'
                      ? 'bg-amber-100 text-amber-950 border-2 border-amber-500 shadow-xs'
                      : 'bg-rose-100 text-rose-950 border-2 border-rose-500 shadow-xs';

                    const avatarInitials = emp.name
                      ? emp.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
                      : 'EM';

                    return (
                      <tr 
                        key={emp.id || idx} 
                        className="hover:bg-brand-50/80 even:bg-slate-50/90 transition-colors"
                      >
                        {/* 1. Emp ID */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap font-mono font-black">
                          <span className="px-3 py-1 rounded-xl bg-brand-50 text-brand-800 border-2 border-brand-300 inline-block shadow-2xs">
                            {emp.id}
                          </span>
                        </td>

                        {/* 2. Employee Name & Identity */}
                        <td className="py-4 px-5 border-r-2 border-slate-300">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-navy-950 to-slate-800 text-white font-black text-xs flex items-center justify-center shrink-0 border-2 border-slate-400 shadow-xs">
                              {avatarInitials}
                            </div>
                            <div>
                              <div className="font-black text-navy-950 text-sm leading-snug">
                                {emp.name}
                              </div>
                              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">
                                RFID Badge Linked • Shift Morning
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* 3. Department */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <span className="px-3 py-1.5 rounded-xl bg-slate-100 font-black text-[11px] text-slate-900 border-2 border-slate-400/80 inline-block shadow-2xs">
                            {emp.dept}
                          </span>
                        </td>

                        {/* 4. Designation & Sector Role */}
                        <td className="py-4 px-5 border-r-2 border-slate-300">
                          <span className="font-black text-navy-950 text-xs block">
                            {emp.role}
                          </span>
                          <span className="text-[10px] text-brand-700 font-black mt-0.5 inline-block">
                            {currentIndustry.name} Verified
                          </span>
                        </td>

                        {/* 5. Monthly Salary (CTC) */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-800 border-2 border-emerald-300 font-black text-xs font-mono inline-flex items-center gap-1 shadow-2xs">
                              <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{(emp.salary || 7500).toLocaleString()}/mo</span>
                            </span>
                            <button
                              onClick={() => {
                                setEditingSalaryEmp(emp);
                                setSalaryInput(String(emp.salary || 7500));
                              }}
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-violet-100 text-slate-600 hover:text-violet-700 border border-slate-300 hover:border-violet-300 transition cursor-pointer"
                              title="Edit Monthly Salary"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>

                        {/* 6. Gate Punch In */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap font-mono">
                          {emp.checkIn === '-' ? (
                            <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-500 border-2 border-slate-300 font-bold inline-block">
                              No Punch Today
                            </span>
                          ) : (
                            <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-900 border-2 border-slate-300 font-black inline-flex items-center gap-1.5 shadow-2xs">
                              <Clock className="w-3.5 h-3.5 text-slate-600" />
                              <span>{emp.checkIn}</span>
                            </span>
                          )}
                        </td>

                        {/* 7. Biometric Status Badge (Interactive Toggle) */}
                        <td className="py-4 px-5 border-r-2 border-slate-300 whitespace-nowrap">
                          <button
                            onClick={() => handleToggleAttendance(emp.id, emp.status)}
                            className={`px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider inline-flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer ${statusTheme}`}
                            title="Click to toggle attendance status"
                          >
                            <span className={`w-2 h-2 rounded-full ${
                              emp.status === 'Present' ? 'bg-emerald-600' : emp.status === 'Late' ? 'bg-amber-600' : 'bg-rose-600'
                            }`}></span>
                            <span>{emp.status}</span>
                          </button>
                        </td>

                        {/* 8. Action Buttons (Inspect, Edit Salary, Remove) */}
                        <td className="py-4 px-5 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setEditingSalaryEmp(emp);
                                setSalaryInput(String(emp.salary || 7500));
                              }}
                              className="px-2.5 py-1.5 rounded-xl bg-white text-navy-950 font-black text-xs border-2 border-slate-300 hover:border-violet-500 hover:bg-violet-50 hover:text-violet-700 transition shadow-2xs cursor-pointer inline-flex items-center gap-1"
                              title="Edit Salary"
                            >
                              <DollarSign className="w-3.5 h-3.5 text-violet-600" />
                              <span className="hidden sm:inline">Salary</span>
                            </button>

                            <button
                              onClick={() => handleRemoveEmployee(emp.id, emp.name)}
                              className="px-2.5 py-1.5 rounded-xl bg-white text-rose-600 hover:text-white font-black text-xs border-2 border-slate-300 hover:border-rose-600 hover:bg-rose-600 transition shadow-2xs cursor-pointer inline-flex items-center gap-1"
                              title={`Remove ${emp.name} from muster`}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Remove</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  {filteredStaff.length === 0 && (
                    <tr>
                      <td colSpan="8" className="py-12 text-center bg-slate-50">
                        <Users className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm font-black text-navy-950">No staff members match the selected criteria</p>
                        <p className="text-xs text-slate-500 font-bold mt-1">Try resetting the search filter or onboard a new employee</p>
                        <div className="flex items-center justify-center gap-3 mt-4">
                          <button
                            onClick={() => { setStaffSearch(''); setStaffStatusFilter('All'); }}
                            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-black text-xs transition cursor-pointer"
                          >
                            Reset Filters
                          </button>
                          <button
                            onClick={() => setIsAddEmployeeModalOpen(true)}
                            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition shadow-sm cursor-pointer flex items-center gap-1.5"
                          >
                            <UserPlus className="w-3.5 h-3.5" />
                            <span>+ Add Employee Now</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Bottom Action & Summary Bar */}
            <div className="p-5 bg-slate-200 border-t-2 border-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-bold">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-xl bg-white border-2 border-slate-400 text-navy-950 font-black shadow-2xs">
                  Showing {filteredStaff.length} of {dynamicStaff.length} Active Personnel
                </span>
                <span className="text-slate-600 font-bold hidden sm:inline">
                  Hardware Node: <strong className="text-emerald-800 font-black">ZK-Teco Biometric Hub #01 (Online)</strong>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsAddEmployeeModalOpen(true)}
                  className="font-black text-emerald-800 hover:text-emerald-950 flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border-2 border-slate-400 hover:border-emerald-600 transition shadow-2xs cursor-pointer"
                >
                  <UserPlus className="w-4 h-4 text-emerald-700" />
                  <span>Onboard New Employee</span>
                </button>

                <button 
                  onClick={() => showToast(`Exporting Biometric Muster Sheet for ${currentIndustry.name}... Direct CSV downloaded.`, 'success')}
                  className="font-black text-brand-800 hover:text-brand-950 flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border-2 border-slate-400 hover:border-brand-600 transition shadow-2xs cursor-pointer"
                >
                  <Download className="w-4 h-4 text-brand-700" />
                  <span>Export Muster Sheet (CSV)</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* TAB 6: REPORTS & ANALYTICS */}
      {activeTab === 'analytics' && (
        <div className="space-y-8">
          
          {/* Header Card */}
          <div className="relative bg-white rounded-3xl p-7 sm:p-9 border-2 border-slate-300 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.12),0_6px_14px_-2px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-brand-500"></div>
            
            <div className="space-y-2 relative z-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border-2 border-emerald-200 text-[11px] font-black uppercase tracking-wider shadow-2xs">
                  {profile.name} Financial Performance
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-50 text-brand-700 border-2 border-brand-200 text-[11px] font-black uppercase tracking-wider shadow-2xs">
                  Statutory Audit Ready
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight leading-tight">
                Executive BI & Operational Analytics
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold">
                Real-time EBITDA calculations, cash flow forecasting, and statutory tax reconciliation
              </p>
            </div>

            <button
              onClick={() => setModalType('export')}
              className="px-5 py-2.5 rounded-2xl bg-navy-950 hover:bg-navy-900 text-white font-black text-xs transition flex items-center gap-2 shadow-lg shadow-navy-950/20 cursor-pointer shrink-0"
            >
              <Download className="w-4 h-4 text-brand-400" />
              <span>Export Full Audit Pack</span>
            </button>
          </div>

          {/* 2 Elevated Cards with 2px borders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Profit & Loss Card */}
            <div className="p-7 bg-white rounded-3xl border-2 border-slate-300 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.1)] relative overflow-hidden space-y-5">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-indigo-500"></div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-black text-navy-950 text-base">{profile.name} — Profit & Loss Summary</h4>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Q4 FY2026-27 Double-Entry Aggregation</p>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-brand-50 text-brand-700 border-2 border-brand-200 text-[10px] font-black uppercase">
                  Audited
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-3 border-b-2 border-slate-100">
                  <span className="text-slate-600 font-bold">Gross Invoiced Revenue</span>
                  <span className="font-black text-navy-950 text-sm">$3,480,200.00</span>
                </div>
                <div className="flex justify-between py-3 border-b-2 border-slate-100">
                  <span className="text-slate-600 font-bold">Cost of Goods Sold (COGS)</span>
                  <span className="font-black text-rose-600 text-sm">-$1,840,500.00</span>
                </div>
                <div className="flex justify-between py-3 border-b-2 border-slate-100">
                  <span className="text-slate-600 font-bold">Operating Expenses (OPEX)</span>
                  <span className="font-black text-rose-600 text-sm">-$620,000.00</span>
                </div>
                <div className="flex justify-between py-4 font-black text-sm bg-emerald-50/70 px-4 rounded-2xl border-2 border-emerald-300 shadow-2xs">
                  <span className="text-navy-950">Net EBITDA Margin</span>
                  <span className="text-emerald-700 font-black">+$1,019,700.00 (29.3%)</span>
                </div>
              </div>
            </div>

            {/* Tax Card */}
            <div className="p-7 bg-white rounded-3xl border-2 border-slate-300 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.1)] relative overflow-hidden space-y-5">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-black text-navy-950 text-base">Statutory Tax & Regulatory Status</h4>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Government Portals Integration Engine</p>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border-2 border-emerald-200 text-[10px] font-black uppercase">
                  100% Compliant
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="font-black text-navy-950 text-sm">GST / VAT Monthly Return</p>
                    <span className="text-[11px] text-slate-500 font-semibold block mt-0.5">
                      GSTIN: {profile.gstin || '27AAACA1234F1Z8'} • Period: Oct 2026
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black border-2 border-emerald-400 text-xs shadow-2xs">
                    Verified OK
                  </span>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="font-black text-navy-950 text-sm">Employee PF / ESI Remittance</p>
                    <span className="text-[11px] text-slate-500 font-semibold block mt-0.5">
                      Biometric muster reconciliation complete • Direct Challan
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-black border-2 border-emerald-400 text-xs shadow-2xs">
                    Challan Generated
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* TAB 7: SETTINGS & SYSTEM CONFIG */}
      {activeTab === 'settings' && (
        <div className="space-y-8">
          <div className="relative bg-white rounded-3xl p-7 sm:p-9 border-2 border-slate-300 shadow-[0_12px_32px_-4px_rgba(15,23,42,0.12),0_6px_14px_-2px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 via-sky-400 to-indigo-500"></div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-950">
              {profile.name} — Enterprise Settings
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              Configure organizational details, taxation registration, currency standards, and sector presets.
            </p>
          </div>

          <form onSubmit={handleSaveSettings} className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-slate-300 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.1)] space-y-6 max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-navy-950 mb-1.5">Company Legal Entity Name</label>
                <input
                  type="text"
                  value={settingsForm.name}
                  onChange={(e) => setSettingsForm({ ...settingsForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-500 font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-navy-950 mb-1.5">System Administrator Name</label>
                <input
                  type="text"
                  value={settingsForm.owner}
                  onChange={(e) => setSettingsForm({ ...settingsForm, owner: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-500 font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-navy-950 mb-1.5">Official Work Email</label>
                <input
                  type="email"
                  value={settingsForm.email}
                  onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-500 font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-navy-950 mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  value={settingsForm.phone}
                  onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-500 font-bold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-navy-950 mb-1.5">GSTIN / Corporate Tax ID</label>
                <input
                  type="text"
                  value={settingsForm.gstin}
                  onChange={(e) => setSettingsForm({ ...settingsForm, gstin: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-500 font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-navy-950 mb-1.5">Base Currency</label>
                <select
                  value={settingsForm.currency}
                  onChange={(e) => setSettingsForm({ ...settingsForm, currency: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-500 bg-white"
                >
                  <option value="USD">USD ($)</option>
                  <option value="INR">INR (₹)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="AED">AED (د.إ)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-navy-950 mb-1.5">
                Active Industry Preset for This Session (All 25 Available)
              </label>
              <select
                value={activeIndustrySlug}
                onChange={(e) => setActiveIndustrySlug(e.target.value)}
                className="w-full px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl border-2 border-slate-300 focus:outline-none focus:border-brand-500 bg-white"
              >
                {industriesData.map((ind) => (
                  <option key={ind.slug} value={ind.slug}>
                    {ind.id}. {ind.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-7 py-3 rounded-2xl bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-xs shadow-lg shadow-navy-950/20 transition cursor-pointer"
              >
                Save {profile.name} Settings
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Module Studio Preview Modal */}
      {activeModulePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
                  <DynamicIcon name={activeModulePreview.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-navy-950">{activeModulePreview.name}</h3>
                  <span className="text-[11px] font-mono font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                    Module Code: {activeModulePreview.code} • {profile.name}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setActiveModulePreview(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {activeModulePreview.desc}
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs">
              <span className="font-bold text-navy-950 block">Operational Controls Active for {profile.name}:</span>
              <ul className="space-y-1.5 text-slate-600 text-[11px]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Real-time double-entry ledger integration
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Multi-branch database synchronicity
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Granular field-level RBAC enforcement
                </li>
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModulePreview(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveModulePreview(null);
                  showToast(`Module [${activeModulePreview.code}] initialized for ${profile.name}.`, 'success');
                }}
                className="px-5 py-2.5 rounded-xl bg-navy-950 text-white font-bold text-xs hover:bg-navy-900 shadow-sm"
              >
                Execute Module Routine
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Employee Modal */}
      {isAddEmployeeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl border-2 border-slate-400 shadow-2xl w-full max-w-lg p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b-2 border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 border-2 border-emerald-400 flex items-center justify-center font-black">
                  <UserPlus className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-navy-950 leading-tight">
                    Onboard New Staff Employee
                  </h3>
                  <p className="text-xs text-slate-500 font-bold">
                    Add employee record, assign biometric RFID & monthly CTC
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAddEmployeeModalOpen(false)}
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer border border-slate-300 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleAddEmployee} className="space-y-4">
              {/* Employee Full Name */}
              <div>
                <label className="block text-xs font-black text-navy-950 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={newEmployeeForm.name}
                  onChange={(e) => setNewEmployeeForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-400 font-bold text-xs focus:border-brand-600 focus:outline-none bg-slate-50 focus:bg-white"
                />
              </div>

              {/* Department & Role (2 columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-navy-950 uppercase tracking-wider mb-1.5">
                    Department
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Engineering & IT"
                    value={newEmployeeForm.dept}
                    onChange={(e) => setNewEmployeeForm(prev => ({ ...prev, dept: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-400 font-bold text-xs focus:border-brand-600 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-navy-950 uppercase tracking-wider mb-1.5">
                    Designation / Role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack Architect"
                    value={newEmployeeForm.role}
                    onChange={(e) => setNewEmployeeForm(prev => ({ ...prev, role: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-400 font-bold text-xs focus:border-brand-600 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Monthly Salary ($) */}
              <div>
                <label className="block text-xs font-black text-navy-950 uppercase tracking-wider mb-1.5">
                  Monthly Base Salary ($ CTC) *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 font-black text-sm">$</span>
                  <input
                    type="number"
                    min="500"
                    step="100"
                    required
                    placeholder="9500"
                    value={newEmployeeForm.salary}
                    onChange={(e) => setNewEmployeeForm(prev => ({ ...prev, salary: e.target.value }))}
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-slate-400 font-black text-xs focus:border-brand-600 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
                <p className="text-[10px] text-slate-500 font-semibold mt-1">
                  Automatically integrated with double-entry payroll ledger & tax withholding
                </p>
              </div>

              {/* Shift & Initial Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-navy-950 uppercase tracking-wider mb-1.5">
                    Assigned Shift
                  </label>
                  <select
                    value={newEmployeeForm.shift}
                    onChange={(e) => setNewEmployeeForm(prev => ({ ...prev, shift: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-400 font-bold text-xs focus:border-brand-600 focus:outline-none bg-slate-50 focus:bg-white"
                  >
                    <option value="Morning">Morning Shift (09:00 AM)</option>
                    <option value="Evening">Evening Shift (02:00 PM)</option>
                    <option value="Night">Night Shift (10:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black text-navy-950 uppercase tracking-wider mb-1.5">
                    Biometric Status
                  </label>
                  <select
                    value={newEmployeeForm.status}
                    onChange={(e) => setNewEmployeeForm(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-400 font-bold text-xs focus:border-brand-600 focus:outline-none bg-slate-50 focus:bg-white"
                  >
                    <option value="Present">Present (Biometric In)</option>
                    <option value="Late">Late Punch</option>
                    <option value="On Leave">On Approved Leave</option>
                  </select>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="pt-4 border-t-2 border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddEmployeeModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border-2 border-slate-300 font-black text-xs text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white font-black text-xs transition shadow-md shadow-emerald-500/25 flex items-center gap-2 cursor-pointer border-2 border-emerald-500/80"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Onboard to Muster</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Salary Modal */}
      {editingSalaryEmp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl border-2 border-slate-400 shadow-2xl w-full max-w-md p-6 sm:p-7 space-y-5 relative">
            <div className="flex items-center justify-between pb-3 border-b-2 border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-violet-100 text-violet-800 border-2 border-violet-400 flex items-center justify-center font-black">
                  <DollarSign className="w-5 h-5 text-violet-700" />
                </div>
                <div>
                  <h3 className="text-base font-black text-navy-950 leading-tight">
                    Adjust Monthly CTC
                  </h3>
                  <p className="text-xs text-slate-500 font-bold">
                    {editingSalaryEmp.name} ({editingSalaryEmp.id})
                  </p>
                </div>
              </div>
              <button
                onClick={() => setEditingSalaryEmp(null)}
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer border border-slate-300 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveSalary} className="space-y-4">
              <div>
                <label className="block text-xs font-black text-navy-950 uppercase tracking-wider mb-1.5">
                  Monthly Base Salary ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 font-black text-sm">$</span>
                  <input
                    type="number"
                    min="0"
                    step="100"
                    required
                    value={salaryInput}
                    onChange={(e) => setSalaryInput(e.target.value)}
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border-2 border-slate-400 font-black text-sm focus:border-brand-600 focus:outline-none bg-slate-50 focus:bg-white"
                  />
                </div>
                <p className="text-[11px] text-slate-500 font-semibold mt-1.5">
                  Role: <span className="font-black text-navy-950">{editingSalaryEmp.role}</span> • Dept: <span className="font-black text-navy-950">{editingSalaryEmp.dept}</span>
                </p>
              </div>

              <div className="pt-3 border-t-2 border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingSalaryEmp(null)}
                  className="px-4 py-2 rounded-xl border-2 border-slate-300 font-black text-xs text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-110 text-white font-black text-xs transition shadow-md shadow-violet-500/25 flex items-center gap-2 cursor-pointer border-2 border-violet-500/80"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Demo Modal for Actions */}
      <DemoModal
        isOpen={!!modalType}
        onClose={() => setModalType(null)}
        type={modalType || 'new-txn'}
        defaultIndustry={currentIndustry.name}
      />

    </DashboardLayout>
  );
};

export default Dashboard;
