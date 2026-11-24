import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ProductTemplate from '../../components/ProductTemplate/ProductTemplate';
import DemoModal from '../../components/common/DemoModal';
import { getProductBySlug } from '../../data/products';
import { industriesData } from '../../data/industries';

export const ProductDetails = () => {
  const { slug } = useParams();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const product = getProductBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!product) return <Navigate to="/features" replace />;

  const openDemo = () => setIsDemoOpen(true);

  const cfg = {
    productName: product.name,
    titleTop: product.titleTop,
    titleAccent: product.titleAccent,
    subtitle: product.subtitle,
    primary: { label: 'Schedule a Demo', onClick: openDemo },
    secondary: { label: 'Explore Features', to: '/features' },
    chips: product.chips,
    kpis: product.kpis,
    problemsTitle: `Common problems businesses face and how Nirghos ${product.name} solves them`,
    problems: product.problems,
    whyTitle: `Why Nirghos is the best ${product.name} software`,
    whySub: `The complete ${product.name.toLowerCase()} solution for your business challenges`,
    why: product.why,
    featuresTitle: product.featuresTitle,
    featuresSub: product.featuresSub,
    features: product.features,
    tour: product.tour,
    stats: product.stats,
    related: {
      title: `${product.name} for industries we serve`,
      subtitle: `Nirghos offers ${product.name.toLowerCase()} tailored for every business — from a single outlet to multi-city chains.`,
      items: product.industries
        .map((s) => industriesData.find((i) => i.slug === s))
        .filter(Boolean)
        .map((i) => ({ to: `/industries/${i.slug}`, name: i.name, desc: i.shortDesc, icon: i.icon, kicker: i.category })),
      cta: { label: 'Discover Your Business Segment', to: '/industries' }
    },
    faqs: product.faqs
  };

  return (
    <>
      <ProductTemplate cfg={cfg} onBook={openDemo} />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} type="book-demo" />
    </>
  );
};

export default ProductDetails;
