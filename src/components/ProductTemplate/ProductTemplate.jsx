import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Check, Minus, Plus, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import DynamicIcon from '../common/DynamicIcon';
import { SectionHeading, AiBanner, IntegrationsHub, CtaBanner } from '../../pages/Home/sections/VasySections';

/*
 * Vasy-style product / industry landing page.
 * Section order mirrors vasy.ai product pages:
 * hero + device → problems → why us → AI banner → feature grid → dashboard tour →
 * stats → integrations → comparison → related segments → testimonial → FAQ → pricing band → CTA
 */

const Container = ({ children, className = '' }) => (
  <div className={`max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Icon = ({ name, className }) => <DynamicIcon name={name} className={className} />;

/* ----------------------------- Hero ------------------------------------- */

const Hero = ({ cfg }) => {
  const [c1, c2, c3, c4] = cfg.chips || [];
  const Chip = ({ chip, className }) =>
    chip ? (
      <div className={`hidden lg:flex flex-col items-center gap-1.5 text-center absolute ${className}`}>
        <span className="w-10 h-10 rounded-xl bg-white shadow-md border border-slate-100 text-[#0284c7] flex items-center justify-center">
          <Icon name={chip[0]} className="w-5 h-5" />
        </span>
        <span className="text-xs font-medium text-slate-600 max-w-[90px] leading-tight">{chip[1]}</span>
      </div>
    ) : null;

  return (
    <section className="relative pt-14 sm:pt-20 pb-10 bg-gradient-to-b from-sky-50/70 via-white to-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f033_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f033_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />
      <svg className="hidden lg:block absolute left-0 top-28 w-[320px] h-[180px] text-sky-200" viewBox="0 0 320 180" fill="none" aria-hidden="true">
        <path d="M0 40 C 80 10, 120 120, 200 90 S 300 150, 320 120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
      </svg>
      <svg className="hidden lg:block absolute right-0 top-24 w-[320px] h-[180px] text-sky-200" viewBox="0 0 320 180" fill="none" aria-hidden="true">
        <path d="M320 30 C 240 10, 200 120, 120 100 S 20 150, 0 120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
      </svg>

      <Container className="relative">
        <Chip chip={c1} className="left-[4%] top-6" />
        <Chip chip={c2} className="left-[13%] top-36" />
        <Chip chip={c3} className="right-[4%] top-4" />
        <Chip chip={c4} className="right-[13%] top-36" />

        <div className="text-center max-w-3xl mx-auto">
          {cfg.badge && (
            <span className="inline-flex items-center rounded-full bg-sky-100/80 text-[#0369a1] text-xs font-semibold tracking-wider uppercase px-3 py-1 mb-5">
              {cfg.badge}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-800 leading-[1.1]">
            {cfg.titleTop}
            <br />
            <span className="text-[#0ea5e9]">{cfg.titleAccent}</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-500 leading-relaxed">{cfg.subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={cfg.primary.onClick}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-sm font-semibold px-6 py-3.5 transition"
            >
              {cfg.primary.label} <ArrowRight className="w-4 h-4" />
            </button>
            {cfg.secondary &&
              (cfg.secondary.to ? (
                <Link
                  to={cfg.secondary.to}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#0ea5e9] text-[#0284c7] hover:bg-sky-50 text-sm font-semibold px-6 py-3.5 transition"
                >
                  {cfg.secondary.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={cfg.secondary.onClick}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#0ea5e9] text-[#0284c7] hover:bg-sky-50 text-sm font-semibold px-6 py-3.5 transition"
                >
                  {cfg.secondary.label}
                </button>
              ))}
          </div>
        </div>

        {/* Device mock */}
        <div className="relative mt-14 max-w-[980px] mx-auto">
          <div className="absolute -inset-x-10 top-10 bottom-0 bg-sky-200/40 blur-3xl rounded-full" />
          <div className="relative rounded-[26px] bg-slate-900 p-2.5 sm:p-3 shadow-[0_40px_80px_-30px_rgba(11,25,44,0.5)]">
            <div className="rounded-[18px] bg-white overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 bg-slate-50">
                <span className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <span className="w-5 h-5 rounded-md bg-[#0284c7] text-white text-[10px] flex items-center justify-center">N</span>
                  Nirghos · {cfg.productName}
                </span>
                <span className="text-[10px] rounded-full bg-emerald-50 text-emerald-600 px-2 py-0.5">● Live</span>
              </div>
              <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-[1fr_220px] gap-4 text-left">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {(cfg.kpis || []).slice(0, 4).map(([l, v, d]) => (
                      <div key={l} className="rounded-xl border border-slate-100 p-3">
                        <p className="text-[10px] text-slate-400 truncate">{l}</p>
                        <p className="text-base font-semibold text-slate-800 truncate">{v}</p>
                        <p className={`text-[10px] truncate ${String(d).startsWith('-') ? 'text-rose-500' : 'text-emerald-600'}`}>{d}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-[40px_1fr_70px_80px] text-[10px] uppercase tracking-wider text-slate-400 bg-slate-50 px-3 py-2">
                      <span>#</span>
                      <span>Item</span>
                      <span className="text-right">Qty</span>
                      <span className="text-right">Amount</span>
                    </div>
                    {['Item A – Premium', 'Item B – Standard', 'Item C – Pack of 6', 'Item D – Combo', 'Item E – Large'].map((n, i) => (
                      <div key={n} className="grid grid-cols-[40px_1fr_70px_80px] text-xs text-slate-600 px-3 py-2 border-t border-slate-50">
                        <span className="text-slate-400">{i + 1}</span>
                        <span className="truncate">{n}</span>
                        <span className="text-right">{[2, 1, 4, 1, 3][i]}</span>
                        <span className="text-right font-medium text-slate-800">₹{[1240, 860, 2160, 1499, 2970][i].toLocaleString('en-IN')}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex flex-col gap-3">
                  <div className="rounded-xl border border-slate-100 p-3 flex-1">
                    <p className="text-[11px] font-semibold text-slate-700">This week</p>
                    <div className="mt-3 h-24 flex items-end gap-1.5">
                      {[40, 55, 48, 70, 62, 85, 74].map((h, i) => (
                        <div key={i} className={`flex-1 self-end rounded-t ${i === 5 ? 'bg-[#0284c7]' : 'bg-sky-200'}`} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#0284c7] text-white p-3">
                    <p className="text-[10px] text-sky-100">Total</p>
                    <p className="text-lg font-semibold">₹8,729</p>
                    <p className="text-[10px] text-sky-100">UPI · Card · Cash</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {cfg.kpis?.[0] && (
            <div className="hidden xl:block absolute -left-24 bottom-8 rounded-xl bg-white shadow-xl border border-slate-100 px-4 py-3 text-left animate-float-slow">
              <p className="text-[10px] text-slate-400">{cfg.kpis[0][0]}</p>
              <p className="text-lg font-semibold text-slate-800">{cfg.kpis[0][1]}</p>
              <p className="text-[10px] text-emerald-600">{cfg.kpis[0][2]}</p>
            </div>
          )}
          <div className="hidden xl:flex absolute -right-24 top-10 rounded-xl bg-white shadow-xl border border-slate-100 px-4 py-3 items-center gap-3 animate-float-delayed">
            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Check className="w-4 h-4" />
            </span>
            <span className="text-left">
              <span className="block text-xs font-semibold text-slate-800">Real-time sync</span>
              <span className="block text-[10px] text-slate-400">Updated 2s ago</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ----------------------------- Problems --------------------------------- */

const Problems = ({ cfg }) => {
  const items = cfg.problems || [];
  if (!items.length) return null;
  const left = items.slice(0, 2);
  const right = items.slice(2, 4);
  const Card = ([icon, title, desc], align) => (
    <div key={title} className={`max-w-sm ${align === 'right' ? 'lg:text-right lg:ml-auto' : ''}`}>
      <span className={`w-12 h-12 rounded-2xl bg-sky-50 text-[#0284c7] flex items-center justify-center ${align === 'right' ? 'lg:ml-auto' : ''}`}>
        <Icon name={icon} className="w-6 h-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <SectionHeading title={cfg.problemsTitle} subtitle="Revealing common business challenges" />
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_300px_1fr] gap-10 items-center">
          <div className="space-y-12">{left.map((p) => Card(p, 'right'))}</div>
          <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-200 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-sky-50 to-white border border-sky-100 flex flex-col items-center justify-center text-center px-6 shadow-inner">
              <span className="text-5xl font-bold text-slate-900">
                N<span className="text-[#0ea5e9]">.</span>
              </span>
              <p className="mt-2 text-xs text-slate-500">One platform that solves them all</p>
            </div>
            {['-left-6 top-1/4', '-left-6 bottom-1/4', '-right-6 top-1/4', '-right-6 bottom-1/4'].map((pos, i) => (
              <span key={i} className={`hidden lg:block absolute ${pos} w-3 h-3 rounded-full bg-[#0ea5e9] ring-4 ring-sky-100`} />
            ))}
          </div>
          <div className="space-y-12">{right.map((p) => Card(p, 'left'))}</div>
        </div>
        <div className="mt-12 flex justify-center text-slate-300">
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </div>
      </Container>
    </section>
  );
};

/* ----------------------------- Why us ----------------------------------- */

const WhyUs = ({ cfg }) => {
  const [active, setActive] = useState(0);
  const items = cfg.why || [];
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <SectionHeading title={cfg.whyTitle} subtitle={cfg.whySub} />
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="relative rounded-[28px] bg-gradient-to-br from-[#0284c7] to-[#075985] p-8 overflow-hidden min-h-[360px] flex items-center justify-center">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full border border-white/20" />
            <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full border border-white/20" />
            <div key={active} className="relative w-full max-w-sm rounded-2xl bg-white shadow-2xl p-6 animate-fadeIn">
              <span className="text-[10px] font-mono tracking-widest text-[#0284c7]">0{active + 1} / 0{items.length}</span>
              <p className="mt-2 text-lg font-semibold text-slate-800">{items[active]?.[0]}</p>
              <div className="mt-5 space-y-2.5">
                {[82, 64, 91].map((w, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                      <span>{['Speed', 'Accuracy', 'Visibility'][i]}</span>
                      <span>{w}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-[#0ea5e9]" style={{ width: `${w}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-emerald-600 font-medium">✓ Powered by Nirghos {cfg.productName}</p>
            </div>
          </div>
          <div className="space-y-3">
            {items.map(([title, desc], i) => (
              <button
                key={title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`w-full text-left rounded-2xl border p-5 sm:p-6 transition ${
                  i === active ? 'border-[#0ea5e9]/40 bg-sky-50/60 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <p className="text-lg font-semibold text-slate-800">{title}</p>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{desc}</p>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ----------------------------- Feature grid ----------------------------- */

const FeatureGrid = ({ cfg }) => (
  <section className="py-16 sm:py-20 bg-white">
    <Container>
      <SectionHeading title={cfg.featuresTitle} subtitle={cfg.featuresSub} />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(cfg.features || []).map(([icon, title, desc]) => (
          <div
            key={title}
            className="group rounded-2xl border border-slate-200 border-l-4 border-l-slate-200 hover:border-l-[#0ea5e9] bg-white p-6 transition hover:shadow-card-hover"
          >
            <span className="w-11 h-11 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center group-hover:bg-[#0ea5e9] group-hover:text-white transition">
              <Icon name={icon} className="w-5 h-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-slate-800">{title}</h3>
            <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ----------------------------- Dashboard tour --------------------------- */

const Tour = ({ cfg }) => {
  const items = cfg.tour || [];
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!items.length) return undefined;
    const t = setTimeout(() => setI((x) => (x + 1) % items.length), 4000);
    return () => clearTimeout(t);
  }, [i, items.length]);
  if (!items.length) return null;
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/40 to-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-slate-800 leading-tight">
            {cfg.productName} Dashboard with
            <br />
            <span className="text-[#0ea5e9]">Real-Time Business Insights</span>
          </h2>
          <p className="mt-4 text-slate-500">Monitor sales, track stock and manage every location with real-time insights and alerts.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-8 items-center">
          <div className="space-y-2.5">
            {items.map(([icon, label], k) => (
              <button
                key={label}
                type="button"
                onClick={() => setI(k)}
                className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition ${
                  k === i ? 'border-[#0ea5e9] bg-white shadow-md text-slate-800 border-l-4' : 'border-slate-200 bg-white/60 text-slate-500 hover:text-slate-700'
                }`}
              >
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${k === i ? 'bg-[#0ea5e9] text-white' : 'bg-slate-100 text-slate-500'}`}>
                  <Icon name={icon} className="w-4 h-4" />
                </span>
                {label}
              </button>
            ))}
          </div>
          <div className="rounded-[24px] bg-white border border-slate-200 shadow-[0_30px_60px_-30px_rgba(11,25,44,0.35)] p-5">
            <div key={i} className="animate-fadeIn">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <span className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center">
                  <Icon name={items[i][0]} className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-slate-800">{items[i][1]}</p>
                  <p className="text-xs text-slate-400">Nirghos {cfg.productName} · Live</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {(cfg.kpis || []).slice(0, 3).map(([l, v]) => (
                  <div key={l} className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] text-slate-400 truncate">{l}</p>
                    <p className="text-sm font-semibold text-slate-800 truncate">{v}</p>
                  </div>
                ))}
              </div>
              <svg viewBox="0 0 400 120" className="mt-4 w-full h-32">
                <defs>
                  <linearGradient id="tourFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d={`M0 ${90 - i * 6} C 60 ${60 + i * 4}, 100 100, 160 ${70 - i * 3} S 260 ${30 + i * 5}, 320 ${50 - i * 2} S 380 20, 400 ${25 + i * 2} L400 120 L0 120 Z`}
                  fill="url(#tourFill)"
                />
                <path
                  d={`M0 ${90 - i * 6} C 60 ${60 + i * 4}, 100 100, 160 ${70 - i * 3} S 260 ${30 + i * 5}, 320 ${50 - i * 2} S 380 20, 400 ${25 + i * 2}`}
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ----------------------------- Stats ------------------------------------ */

const Stats = ({ cfg, onBook }) => (
  <section className="py-12 bg-white">
    <Container>
      <div className="rounded-[28px] border border-slate-200 bg-white shadow-sm p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {(cfg.stats || []).map(([v, l], i) => (
          <div key={l} className="text-center">
            <div className="relative w-24 h-24 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="44" fill="none" stroke="#e0f2fe" strokeWidth="6" />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={`${[210, 170, 240, 190][i % 4]} 400`}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[#0284c7]">
                <Icon name={['TrendingUp', 'Clock', 'Zap', 'ShieldCheck'][i % 4]} className="w-6 h-6" />
              </span>
            </div>
            <p className="mt-4 text-3xl font-semibold text-[#0369a1]">{v}</p>
            <p className="text-sm text-slate-500">{l}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={onBook}
          className="inline-flex items-center gap-2 rounded-xl bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-sm font-semibold px-6 py-3.5 transition"
        >
          Grow Your Business Now <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </Container>
  </section>
);

/* ----------------------------- Comparison ------------------------------- */

const defaultComparison = [
  ['Best for', 'Growing Indian businesses', 'Very small shops', 'Billing only'],
  ['Ease of use', 'Learn in a day', 'Easy but error-prone', 'Easy'],
  ['GST & e-invoice', 'Built-in, one click', 'Manual', 'Partial'],
  ['Multi-store & godowns', 'Unlimited, real-time', 'Not possible', 'Limited'],
  ['Inventory & accounts', 'Fully connected', 'Separate sheets', 'Separate software'],
  ['Reports & insights', 'Live dashboards + AI', 'Manual', 'Basic'],
  ['Support', '365-day local support', 'None', 'Email only']
];

const Comparison = ({ cfg }) => {
  const rows = cfg.comparison || defaultComparison;
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <SectionHeading
          title={`Why businesses choose Nirghos ${cfg.productName}`}
          subtitle="See how Nirghos compares with spreadsheets and basic billing software."
        />
        <div className="mt-12 overflow-x-auto rounded-3xl border border-slate-200">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr>
                <th className="text-left font-medium text-slate-500 px-6 py-5 w-[22%]">Metrics</th>
                <th className="px-6 py-5 bg-gradient-to-b from-[#0284c7] to-[#0ea5e9] text-white font-semibold rounded-t-2xl">Nirghos</th>
                <th className="px-6 py-5 font-medium text-slate-700">Manual / Excel</th>
                <th className="px-6 py-5 font-medium text-slate-700">Basic Billing Software</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([m, a, b, c]) => (
                <tr key={m} className="border-t border-slate-100">
                  <td className="px-6 py-4 font-medium text-slate-800">{m}</td>
                  <td className="px-6 py-4 text-center bg-sky-50/70 text-slate-800 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600" /> {a}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-slate-500">{b}</td>
                  <td className="px-6 py-4 text-center text-slate-500">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

/* ----------------------------- Related segments ------------------------- */

const Related = ({ cfg }) => {
  const r = cfg.related;
  const [page, setPage] = useState(0);
  if (!r?.items?.length) return null;
  const perPage = 3;
  const pages = Math.ceil(r.items.length / perPage);
  const visible = r.items.slice(page * perPage, page * perPage + perPage);
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/40 to-white">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-800">{r.title}</h2>
            {r.subtitle && <p className="mt-3 text-slate-500">{r.subtitle}</p>}
          </div>
          {pages > 1 && (
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => setPage((p) => (p - 1 + pages) % pages)}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:text-[#0284c7]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => setPage((p) => (p + 1) % pages)}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:text-[#0284c7]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        <div key={page} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 animate-fadeIn">
          {visible.map((it, k) => (
            <Link
              key={it.to}
              to={it.to}
              className={`group relative h-64 rounded-3xl overflow-hidden p-6 flex flex-col justify-end bg-gradient-to-br ${
                ['from-[#0B192C] to-[#0369a1]', 'from-[#132842] to-[#0284c7]', 'from-[#060e19] to-[#075985]'][k % 3]
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.35),transparent_55%)]" />
              <span className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-white/10 text-sky-200 flex items-center justify-center group-hover:scale-110 transition">
                <Icon name={it.icon} className="w-8 h-8" />
              </span>
              <p className="relative text-xs font-semibold tracking-widest text-sky-300 uppercase">{it.kicker}</p>
              <p className="relative mt-1 text-xl font-semibold text-white">{it.name}</p>
              {it.desc && <p className="relative mt-1 text-sm text-slate-300 line-clamp-2">{it.desc}</p>}
            </Link>
          ))}
        </div>
        {r.cta && (
          <div className="mt-10 flex justify-center">
            <Link
              to={r.cta.to}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-sm font-semibold px-6 py-3.5 transition"
            >
              {r.cta.label} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

/* ----------------------------- Testimonial ------------------------------ */

const Testimonial = ({ t }) =>
  t ? (
    <section className="py-12 bg-white">
      <Container>
        <div className="rounded-[32px] bg-slate-100/80 p-8 sm:p-12 max-w-5xl mx-auto">
          <div className="flex gap-1 text-[#0ea5e9]">
            {[...Array(5)].map((_, k) => (
              <Star key={k} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <p className="mt-5 text-xl sm:text-2xl text-slate-700 leading-relaxed">“{t.quote}”</p>
          <p className="mt-6 border-l-2 border-[#0284c7] pl-3 text-sm">
            <span className="font-semibold text-slate-800">{t.author}</span>
            <span className="text-slate-300 mx-2">|</span>
            <span className="text-slate-500">{t.role}</span>
          </p>
        </div>
      </Container>
    </section>
  ) : null;

/* ----------------------------- FAQ -------------------------------------- */

const Faq = ({ faqs }) => {
  const [open, setOpen] = useState(0);
  if (!faqs?.length) return null;
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-800">Frequently asked questions</h2>
          <p className="mt-3 text-slate-500">Everything you need to know before getting started.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0369a1]">
            Still have questions? Talk to us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className={`font-medium ${open === i ? 'text-[#0284c7]' : 'text-slate-800'}`}>{q}</span>
                <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600">
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              {open === i && <p className="pb-5 -mt-1 text-sm text-slate-500 leading-relaxed animate-fadeIn">{a}</p>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ----------------------------- Pricing band ----------------------------- */

const PricingBand = () => (
  <section className="bg-[#0B192C]">
    <Container className="py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
          Get Started with Smarter Business Management – At the Right Price
        </h2>
        <p className="mt-3 text-slate-400">Smart, simple and affordable — everything your business needs to grow faster and run smoother.</p>
        <Link
          to="/pricing"
          className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/40 text-white text-sm font-semibold px-6 py-3.5 hover:bg-white/10 transition"
        >
          Choose Your Plan <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="flex flex-wrap gap-3 lg:justify-end">
        {[
          ['Lite', '₹6,999'],
          ['Standard', '₹14,999'],
          ['Pro', '₹28,999']
        ].map(([n, p], i) => (
          <div key={n} className={`rounded-2xl px-6 py-5 min-w-[150px] ${i === 2 ? 'bg-[#0ea5e9] text-white' : 'bg-white/5 border border-white/10 text-white'}`}>
            <p className="text-xs uppercase tracking-widest opacity-70">{n}</p>
            <p className="mt-1 text-2xl font-semibold">{p}</p>
            <p className="text-xs opacity-70">per year</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

/* ----------------------------- Page ------------------------------------- */

export const ProductTemplate = ({ cfg, onBook }) => (
  <div className="bg-white text-slate-900">
    <Hero cfg={cfg} />
    <Problems cfg={cfg} />
    <WhyUs cfg={cfg} />
    <AiBanner onWatch={onBook} />
    <FeatureGrid cfg={cfg} />
    <Tour cfg={cfg} />
    <Stats cfg={cfg} onBook={onBook} />
    <IntegrationsHub />
    <Comparison cfg={cfg} />
    <Related cfg={cfg} />
    <Testimonial t={cfg.testimonial} />
    <Faq faqs={cfg.faqs} />
    <PricingBand />
    <CtaBanner onBook={onBook} />
  </div>
);

export default ProductTemplate;
