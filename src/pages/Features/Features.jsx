import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import DynamicIcon from '../../components/common/DynamicIcon';
import DemoModal from '../../components/common/DemoModal';
import { products } from '../../data/products';
import {
  SectionHeading,
  TrustStrip,
  SmartStoreFeatures,
  AiBanner,
  IntegrationsHub,
  CtaBanner
} from '../Home/sections/VasySections';

const Container = ({ children, className = '' }) => (
  <div className={`max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export const Features = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [active, setActive] = useState(products[0].slug);
  const current = products.find((p) => p.slug === active) || products[0];
  const openDemo = () => setIsDemoOpen(true);

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative pt-14 sm:pt-20 pb-12 bg-gradient-to-b from-sky-50/70 via-white to-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f033_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f033_1px,transparent_1px)] bg-[size:56px_56px] pointer-events-none" />
        <Container className="relative text-center">
          <span className="inline-flex rounded-full bg-sky-100/80 text-[#2355a6] text-xs font-semibold tracking-wider uppercase px-3 py-1">
            Features
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-800 leading-[1.1]">
            Every module your business needs,
            <br />
            <span className="text-[#4582e6]">in one connected platform</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-500">
            POS, ERP, accounting, inventory, CRM and online commerce — built to work together so your data flows everywhere instantly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={openDemo}
              className="inline-flex items-center gap-2 rounded-xl bg-[#4582e6] hover:bg-[#2e6bcc] text-white text-sm font-semibold px-6 py-3.5 transition"
            >
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-[#4582e6] text-[#2e6bcc] hover:bg-sky-50 text-sm font-semibold px-6 py-3.5 transition"
            >
              View Pricing
            </Link>
          </div>
        </Container>
        <TrustStrip />
      </section>

      {/* Product cards */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Explore Nirghos products" subtitle="Pick a product to see how it works for your business." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-7 hover:border-[#4582e6]/50 hover:shadow-card-hover transition flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-sky-50 text-[#2e6bcc] flex items-center justify-center group-hover:bg-[#4582e6] group-hover:text-white transition">
                    <DynamicIcon name={p.icon} className="w-6 h-6" />
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#2e6bcc] transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-800">{p.menuTitle}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.shortDesc}</p>
                <ul className="mt-5 space-y-2 flex-1">
                  {p.features.slice(0, 4).map(([, t]) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-[#2e6bcc]" /> {t}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2355a6]">
                  View more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* All features by product */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-sky-50/40 to-white">
        <Container>
          <SectionHeading title="All features at a glance" subtitle="Comprehensive modules and features to make your stores and business units smart and automated." />
          <div className="mt-10 rounded-2xl bg-slate-100/80 p-1.5 flex gap-1 overflow-x-auto">
            {products.map((p) => (
              <button
                key={p.slug}
                type="button"
                onClick={() => setActive(p.slug)}
                className={`flex-1 shrink-0 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-medium transition ${
                  p.slug === active ? 'bg-[#4582e6] text-white shadow' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
          <div key={active} className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 animate-fadeIn">
            {current.features.map(([icon, t, d]) => (
              <div key={t} className="rounded-2xl bg-white border border-slate-200 p-5">
                <span className="w-9 h-9 rounded-lg bg-sky-50 text-[#2e6bcc] flex items-center justify-center">
                  <DynamicIcon name={icon} className="w-[18px] h-[18px]" />
                </span>
                <p className="mt-3 font-semibold text-slate-800">{t}</p>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to={`/products/${current.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#2e6bcc] hover:bg-[#2355a6] text-white text-sm font-semibold px-6 py-3.5 transition"
            >
              Explore {current.menuTitle} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      <SmartStoreFeatures />
      <AiBanner onWatch={openDemo} />
      <IntegrationsHub />
      <CtaBanner onBook={openDemo} />

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} type="book-demo" />
    </div>
  );
};

export default Features;
