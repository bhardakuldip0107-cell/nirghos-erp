import React from 'react';
import { AlertTriangle, RefreshCw, Home, ShieldAlert } from 'lucide-react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[Nirghos ERP] Caught UI Exception:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleResetCache = () => {
    try {
      localStorage.removeItem('nirghos_demo_profile');
      localStorage.removeItem('nirghos_registered_users');
      localStorage.removeItem('nirghos_active_industry');
      localStorage.removeItem('nirghos_demo_auth');
      localStorage.removeItem('nirghos_demo_txns');
      localStorage.removeItem('nirghos_demo_notifs');
    } catch (e) {
      console.error(e);
    }
    window.location.href = '/';
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-navy-950 text-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-xl w-full bg-navy-900 border border-navy-800 rounded-3xl p-8 shadow-2xl relative z-10 space-y-6 text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center mx-auto shadow-inner">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                Workspace Recovery System
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                UI Render Safeguard Activated
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Nirghos ERP caught a rendering exception. You can reload the page or reset the local demo cache to restore flawless operation.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3.5 rounded-xl bg-navy-950/80 border border-navy-800 text-left text-xs text-rose-300 font-mono overflow-x-auto max-h-32">
                {this.state.error.toString()}
              </div>
            )}

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={this.handleReload}
                className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-navy-950 font-black text-xs shadow-lg transition flex items-center gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reload Page</span>
              </button>

              <button
                onClick={this.handleResetCache}
                className="px-6 py-3 rounded-xl bg-navy-850 hover:bg-navy-800 border border-navy-700 text-white font-bold text-xs transition flex items-center gap-2"
              >
                <span>Reset Demo Cache & Home</span>
              </button>

              <a
                href="/"
                className="px-5 py-3 rounded-xl text-slate-400 hover:text-white text-xs font-semibold transition flex items-center gap-1.5"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Homepage</span>
              </a>
            </div>

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

