import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Minus, CheckCircle2 } from 'lucide-react';
import DemoModal from '../../components/common/DemoModal';

const SubNav = () => (
  <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-20 z-30">
    <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between gap-4 text-sm text-slate-600">
      <span className="text-xs font-bold text-nirghos-primary uppercase tracking-wider hidden sm:inline">
        Nirghos ERP Pricing
      </span>
      <div className="flex items-center gap-6 ml-auto">
        {[
          ['Included', '#notes'],
          ['FAQs', '#faqs']
        ].map(([l, h]) => (
          <a key={l} href={h} className="hover:text-nirghos-primary font-medium transition">
            {l}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export const Pricing = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const pricingFaqs = [
    {
      q: 'How does the Nirghos ERP licensing work?',
      a: 'Nirghos ERP offers flexible annual and multi-year custom subscriptions tailored to your store count, user seats, and industry modules — with an extra 20% discount on multi-year commitments.'
    },
    {
      q: 'Does Nirghos work offline if internet goes down?',
      a: 'Yes! Our Hybrid POS offline engine ensures 100% uninterrupted billing even when internet disconnects, auto-syncing all invoices back to your central cloud once reconnected.'
    },
    {
      q: 'What hardware is compatible with Nirghos POS?',
      a: 'Nirghos runs smoothly on any Windows PC, touch POS terminal, or Android tablet and connects natively with ESC/POS thermal printers, 1D/2D barcode scanners, digital weighing scales, and Pine Labs / Paytm terminals.'
    },
    {
      q: 'Can I add extra outlets or users later as we grow?',
      a: 'Yes! You can seamlessly add extra outlets, warehouses, and billing users at any time with prorated billing and zero data loss.'
    },
    {
      q: 'Do you provide data migration from Tally, Busy, or Excel?',
      a: 'Yes, our onboarding team handles complete migration of your item masters, customer/vendor ledgers, and opening stock within 24–48 hours.'
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <SubNav />

      {/* Vasy.ai Style Light Sky Hero with Custom Quote CTA */}
      <section className="relative bg-gradient-to-b from-sky-50/80 via-white to-white border-b border-slate-200/80 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-nirghos-primary text-xs font-bold uppercase tracking-wider mb-5 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-nirghos-gradient animate-pulse"></span>
            <span>Tailored Enterprise Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-slate-900 leading-[1.12] max-w-3xl mx-auto">
            Custom ERP pricing built for{' '}
            <span className="text-nirghos-primary">your exact scale</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every retail store, warehouse, and manufacturing plant has unique workflows. Book a quick consultation and get a transparent quote customized for your outlets and modules.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-nirghos-gradient hover:opacity-95 text-white font-bold px-8 py-3.5 shadow-lg shadow-sky-500/25 transition cursor-pointer"
            >
              <span>Request Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-50 text-nirghos-primary border-2 border-nirghos-primary font-bold px-7 py-3.5 transition"
            >
              Talk to Sales
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-nirghos-primary" /> Zero hidden setup surprises</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-nirghos-primary" /> Multi-year commitment discounts</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-nirghos-primary" /> Free Tally / Excel data migration</span>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section id="notes" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-14 scroll-mt-32">
        <p className="font-mono text-[11px] tracking-[0.2em] text-nirghos-primary uppercase font-bold">Before you buy</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What is included with Nirghos ERP</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
          {[
            [
              'Included in every deployment',
              ['Free software updates and statutory GST changes', 'Automated cloud data backups', 'Dedicated technical support']
            ],
            [
              'Scalable outlets & users',
              ['Add branches, godowns, and POS counters anytime', 'Prorated billing as your team expands', 'Centralized head-office multi-branch visibility']
            ],
            [
              'Flexible billing options',
              ['Annual & multi-year subscription options', 'Extra savings on multi-year commitments', 'Seamless module upgrades whenever your business grows']
            ],
            [
              'Onboarding & migration',
              ['End-to-end store setup and staff training', 'Fast SKU & ledger import from Tally, Busy, or Excel', 'Custom reports, barcode formats, and API integrations']
            ]
          ].map(([title, items]) => (
            <div key={title}>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-400 pb-3 border-b border-slate-200">{title}</p>
              <ul className="mt-4 space-y-2.5">
                {items.map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-nirghos-gradient mt-2 shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-32 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10">
        <div>
          <p className="font-mono text-[11px] tracking-[0.2em] text-nirghos-primary uppercase font-bold">FAQs</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Questions about pricing</h2>
          <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-nirghos-primary hover:text-nirghos-primary-hover">
            Talk to our sales team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {pricingFaqs.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
                aria-expanded={openFaqIndex === i}
              >
                <span className={`font-medium ${openFaqIndex === i ? 'text-nirghos-primary' : 'text-slate-800'}`}>{f.q}</span>
                <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                  {openFaqIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              {openFaqIndex === i && <p className="pb-5 text-sm text-slate-500 leading-relaxed animate-fadeIn">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner (Vasy.ai Sky Gradient) */}
      <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-[32px] bg-nirghos-gradient px-6 py-12 sm:px-12 flex flex-wrap items-center justify-between gap-6 shadow-xl shadow-sky-500/20">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Need a custom quote for your business?</h2>
            <p className="mt-2 text-sky-50">Our experts will recommend the ideal Nirghos ERP setup in a free live demo.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-white text-nirghos-primary font-bold px-7 py-3.5 hover:bg-sky-50 transition cursor-pointer shadow-sm"
            >
              Book a Free Demo <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/contact" className="inline-flex items-center rounded-full border border-white/60 text-white font-semibold px-7 py-3.5 hover:bg-white/10 transition">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type="book-demo"
        defaultIndustry="Retail Supermarket & Multi-Store"
      />
    </div>
  );
};

export default Pricing;
