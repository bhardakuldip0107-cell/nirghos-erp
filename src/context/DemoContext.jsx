import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultCompanyProfile, demoPresetAccounts, initialTransactions, initialNotifications } from '../data/mockData';
import { getIndustryBySlug } from '../data/industries';

const DemoContext = createContext();

// Helper to safely parse JSON from localStorage without throwing
const safeGetStorage = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    if (!saved || saved === 'undefined' || saved === 'null') {
      return fallback;
    }
    const parsed = JSON.parse(saved);
    return parsed !== null && parsed !== undefined ? parsed : fallback;
  } catch (err) {
    console.warn(`[DemoContext] Failed to parse localStorage key "${key}":`, err);
    return fallback;
  }
};

export const DemoProvider = ({ children }) => {
  // Saved registered user directory for multi-tenant simulation
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const data = safeGetStorage('nirghos_registered_users', demoPresetAccounts);
    return Array.isArray(data) ? data : demoPresetAccounts;
  });

  // Current active logged-in profile
  const [profile, setProfile] = useState(() => {
    const data = safeGetStorage('nirghos_demo_profile', defaultCompanyProfile);
    return (data && typeof data === 'object') ? { ...defaultCompanyProfile, ...data } : defaultCompanyProfile;
  });

  // Selected industry slug for dashboard context
  const [activeIndustrySlug, setActiveIndustrySlug] = useState(() => {
    const val = localStorage.getItem('nirghos_active_industry');
    return val && val !== 'undefined' && val !== 'null' ? val : 'manufacturing';
  });

  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('nirghos_demo_auth') === 'true';
  });

  // Transactions list
  const [transactions, setTransactions] = useState(() => {
    const data = safeGetStorage('nirghos_demo_txns', initialTransactions);
    return Array.isArray(data) ? data : initialTransactions;
  });

  // Notifications
  const [notifications, setNotifications] = useState(() => {
    const data = safeGetStorage('nirghos_demo_notifs', initialNotifications);
    return Array.isArray(data) ? data : initialNotifications;
  });

  // Toast alert
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const closeToast = () => setToast(null);

  // Sync to local storage safely
  useEffect(() => {
    try {
      localStorage.setItem('nirghos_registered_users', JSON.stringify(registeredUsers || []));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [registeredUsers]);

  useEffect(() => {
    try {
      if (profile) {
        localStorage.setItem('nirghos_demo_profile', JSON.stringify(profile));
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem('nirghos_active_industry', activeIndustrySlug || 'manufacturing');
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [activeIndustrySlug]);

  useEffect(() => {
    try {
      localStorage.setItem('nirghos_demo_auth', isAuthenticated ? 'true' : 'false');
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    try {
      localStorage.setItem('nirghos_demo_txns', JSON.stringify(transactions || []));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [transactions]);

  useEffect(() => {
    try {
      localStorage.setItem('nirghos_demo_notifs', JSON.stringify(notifications || []));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [notifications]);

  // Reset corrupted cache helper
  const resetDemoCache = () => {
    try {
      localStorage.removeItem('nirghos_demo_profile');
      localStorage.removeItem('nirghos_registered_users');
      localStorage.removeItem('nirghos_active_industry');
      localStorage.removeItem('nirghos_demo_auth');
      localStorage.removeItem('nirghos_demo_txns');
      localStorage.removeItem('nirghos_demo_notifs');
    } catch (e) {
      console.warn('Cache clear error:', e);
    }
    setRegisteredUsers(demoPresetAccounts);
    setProfile(defaultCompanyProfile);
    setActiveIndustrySlug('manufacturing');
    setIsAuthenticated(false);
    setTransactions(initialTransactions);
    setNotifications(initialNotifications);
    showToast('Demo cache reset to clean default state.', 'info');
  };

  // LOGIN: Match email to existing registered users or presets, or construct from parameters
  const loginUser = (loginData) => {
    let email = '';
    let industrySlug = 'manufacturing';
    let customBusinessName = '';
    let customOwnerName = '';

    if (typeof loginData === 'string') {
      email = loginData;
    } else if (typeof loginData === 'object' && loginData !== null) {
      email = loginData.email || '';
      industrySlug = loginData.industrySlug || loginData.slug || 'manufacturing';
      customBusinessName = loginData.businessName || '';
      customOwnerName = loginData.ownerName || '';
    }

    // 1. Look for matching registered user
    const userList = Array.isArray(registeredUsers) ? registeredUsers : demoPresetAccounts;
    const existing = userList.find(
      u => u.email?.toLowerCase() === email.toLowerCase()
    );

    // 2. Look for matching preset account
    const preset = demoPresetAccounts.find(
      p => p.email?.toLowerCase() === email.toLowerCase() || p.industrySlug === industrySlug
    );

    let targetProfile = null;

    if (existing) {
      const ind = getIndustryBySlug(existing.industrySlug || industrySlug);
      targetProfile = {
        name: existing.name || existing.businessName || 'My Enterprise Corp',
        owner: existing.owner || existing.ownerName || 'Account Administrator',
        email: existing.email || email,
        phone: existing.phone || '+91 98000 00000',
        industry: ind ? ind.name : existing.industryName || 'Manufacturing & Fabrication',
        slug: existing.industrySlug || industrySlug,
        plan: 'Enterprise Multi-Branch License',
        gstin: existing.gstin || '27AAACA1234F1Z8',
        currency: 'USD',
        currencySymbol: '$'
      };
    } else if (customBusinessName && customOwnerName) {
      const ind = getIndustryBySlug(industrySlug);
      targetProfile = {
        name: customBusinessName,
        owner: customOwnerName,
        email: email || 'admin@business.com',
        phone: '+91 84012 30372',
        industry: ind ? ind.name : 'Manufacturing & Fabrication',
        slug: industrySlug,
        plan: 'Enterprise Multi-Branch License',
        gstin: '27AAACA1234F1Z8',
        currency: 'USD',
        currencySymbol: '$'
      };
    } else if (preset && !customBusinessName) {
      targetProfile = {
        name: preset.name,
        owner: preset.owner,
        email: preset.email,
        phone: preset.phone,
        industry: preset.industryName,
        slug: preset.industrySlug,
        plan: 'Enterprise Multi-Branch License',
        gstin: '27AAACA1234F1Z8',
        currency: 'USD',
        currencySymbol: '$'
      };
    } else {
      const ind = getIndustryBySlug(industrySlug);
      targetProfile = {
        name: customBusinessName || `${ind ? ind.name.split(' ')[0] : 'Enterprise'} Solutions Ltd`,
        owner: customOwnerName || email.split('@')[0].replace('.', ' ').toUpperCase() || 'Administrator',
        email: email || 'admin@business.com',
        phone: '+91 84012 30372',
        industry: ind ? ind.name : 'Manufacturing & Fabrication',
        slug: industrySlug,
        plan: 'Enterprise Multi-Branch License',
        gstin: '27AAACA1234F1Z8',
        currency: 'USD',
        currencySymbol: '$'
      };
    }

    setProfile(targetProfile);
    setActiveIndustrySlug(targetProfile.slug);
    setIsAuthenticated(true);
    showToast(`Welcome ${targetProfile.owner}! Opened dashboard for "${targetProfile.name}" [${targetProfile.industry}].`, 'success');
    return targetProfile;
  };

  const logoutUser = () => {
    setIsAuthenticated(false);
    showToast('Signed out of ERP workstation.', 'info');
  };

  // REGISTER: Save exact details and automatically set session
  const registerUser = (userData) => {
    const ind = getIndustryBySlug(userData.industrySlug || 'manufacturing');
    
    const newAccount = {
      name: (userData.businessName || 'My Business Enterprise').trim(),
      businessName: (userData.businessName || 'My Business Enterprise').trim(),
      owner: (userData.ownerName || 'Business Owner').trim(),
      ownerName: (userData.ownerName || 'Business Owner').trim(),
      email: (userData.email || 'owner@business.com').trim(),
      phone: (userData.phone || '+91 98000 00000').trim(),
      industry: ind ? ind.name : 'Manufacturing & Fabrication',
      industryName: ind ? ind.name : 'Manufacturing & Fabrication',
      industrySlug: userData.industrySlug || 'manufacturing',
      slug: userData.industrySlug || 'manufacturing',
      plan: 'Growth Trial (14 Days Free)',
      gstin: '27AAACA1234F1Z8',
      currency: 'USD',
      currencySymbol: '$'
    };

    // Append to registeredUsers
    setRegisteredUsers(prev => {
      const arr = Array.isArray(prev) ? prev : demoPresetAccounts;
      return [newAccount, ...arr.filter(u => u.email !== newAccount.email)];
    });
    setProfile(newAccount);
    setActiveIndustrySlug(newAccount.slug);
    setIsAuthenticated(true);
    showToast(`Registration complete! Welcome ${newAccount.owner} to ${newAccount.name} Workspace.`, 'success');
    return newAccount;
  };

  const addTransaction = (txnData) => {
    const newTxn = {
      id: `TXN-${Math.floor(1000 + Math.random() * 9000)}`,
      entity: txnData.entity || `${profile?.name || 'Enterprise'} Client`,
      type: txnData.type || 'Sales Invoice',
      amount: parseFloat(txnData.amount) || 12500,
      date: new Date().toISOString().split('T')[0],
      status: txnData.status || 'Paid',
      method: txnData.method || 'Direct Bank Wire',
      category: txnData.category || 'Commercial'
    };
    setTransactions(prev => [newTxn, ...(Array.isArray(prev) ? prev : [])]);
    showToast(`Voucher ${newTxn.id} recorded in ${profile?.name || 'Company'} ledger!`, 'success');
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => (Array.isArray(prev) ? prev : []).map(n => ({ ...n, read: true })));
    showToast('All notifications marked as read.', 'info');
  };

  return (
    <DemoContext.Provider
      value={{
        profile: profile || defaultCompanyProfile,
        setProfile,
        registeredUsers: Array.isArray(registeredUsers) ? registeredUsers : demoPresetAccounts,
        activeIndustrySlug: activeIndustrySlug || 'manufacturing',
        setActiveIndustrySlug,
        isAuthenticated,
        loginUser,
        logoutUser,
        registerUser,
        transactions: Array.isArray(transactions) ? transactions : initialTransactions,
        addTransaction,
        notifications: Array.isArray(notifications) ? notifications : initialNotifications,
        markAllNotificationsRead,
        resetDemoCache,
        toast,
        showToast,
        closeToast
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};

export default DemoContext;