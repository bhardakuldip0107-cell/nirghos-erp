import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Layers } from 'lucide-react';
import ProductTemplate from '../../components/ProductTemplate/ProductTemplate';
import DemoModal from '../../components/common/DemoModal';
import { useDemo } from '../../context/DemoContext';
import { getIndustryBySlug, getRelatedIndustries, industriesData } from '../../data/industries';
import { getIndustryLandingData } from '../../data/industryLandingData';

const problemIcons = ['AlertTriangle', 'Boxes', 'Calculator', 'BarChart3'];

export const IndustryDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { setActiveIndustrySlug } = useDemo();
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const industry = getIndustryBySlug(slug);
  const landing = industry ? getIndustryLandingData(slug, industry) : null;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!industry || !landing) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
          <Layers className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-semibold text-slate-800">Industry solution not found</h2>
        <p className="text-slate-500 max-w-md mx-auto">The requested industry "{slug}" is not available in our directory.</p>
        <Link
          to="/industries"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-nirghos-gradient text-white font-semibold text-sm hover:opacity-95 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Browse all industries
        </Link>
      </div>
    );
  }

  const openDemo = () => setIsDemoOpen(true);
  const launchWorkspace = () => {
    setActiveIndustrySlug(industry.slug);
    navigate(`/dashboard?industry=${industry.slug}`);
  };

  const shortName = industry.name.split('&')[0].trim();
  const related = getRelatedIndustries(industry.relatedSlugs || []);
  const relatedList = related.length
    ? related
    : industriesData.filter((i) => i.category === industry.category && i.slug !== industry.slug).slice(0, 6);

  const cfg = {
    badge: industry.category,
    productName: `${shortName} ERP`,
    titleTop: industry.name,
    titleAccent: 'ERP Software',
    subtitle: `${industry.tagline} ${industry.shortDesc}`,
    primary: { label: 'Schedule a Demo', onClick: openDemo },
    secondary: { label: 'Try Live Workspace', onClick: launchWorkspace },
    chips: (industry.modules || []).slice(0, 4).map((m) => [m.icon, m.name]),
    kpis: (industry.stats || []).map((s) => [s.label, s.value, 'Industry benchmark']),
    problemsTitle: `Common challenges in ${industry.name} and how Nirghos solves them`,
    problems: (industry.keyFeatures || []).slice(0, 4).map((f, i) => [problemIcons[i], f.title, f.desc]),
    whyTitle: `Why Nirghos is the best ERP for ${industry.name}`,
    whySub: industry.fullDesc,
    why: (industry.benefits || []).map((b) => {
      const [head, ...rest] = b.split(' ');
      return [`${head} ${rest.slice(0, 3).join(' ')}`.replace(/[.,]$/, ''), b];
    }),
    featuresTitle: `Everything you need to run your ${shortName.toLowerCase()} business`,
    featuresSub: `${industry.modules?.length || 0} ready modules, built for ${industry.name.toLowerCase()} workflows.`,
    features: (industry.modules || []).map((m) => [m.icon, m.name, m.desc]),
    tour: (landing.tourTabs || []).slice(0, 5).map((t, i) => [['Gauge', 'Layers', 'ShieldCheck', 'Boxes', 'BarChart3'][i], t.label]),
    stats: (industry.stats || []).map((s) => [s.value, s.label]),
    related: {
      title: 'Related industries we serve',
      subtitle: 'Explore Nirghos solutions for businesses similar to yours.',
      items: relatedList.map((i) => ({ to: `/industries/${i.slug}`, name: i.name, desc: i.shortDesc, icon: i.icon, kicker: i.category })),
      cta: { label: 'Browse All Industries', to: '/industries' }
    },
    testimonial: landing.testimonial,
    faqs: (landing.faqs || []).map((f) => [f.q, f.a])
  };

  return (
    <>
      <ProductTemplate cfg={cfg} onBook={openDemo} />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} type="book-demo" defaultIndustry={industry.name} />
    </>
  );
};

export default IndustryDetails;
