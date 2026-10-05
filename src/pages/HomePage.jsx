import React, { lazy, Suspense } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServiceFeatures } from '../components/home/ServiceFeatures';
import { FeaturedCategories } from '../components/home/FeaturedCategories';

// Lazy load components that are below the fold
const TrendingProducts = lazy(() => import('../components/home/TrendingProducts'));
const GamingSetupBanner = lazy(() => import('../components/home/GamingSetupBanner'));
const SpecialDeals = lazy(() => import('../components/home/SpecialDeals'));
const BrandsSection = lazy(() => import('../components/home/BrandsSection'));
const NewsletterSection = lazy(() => import('../components/home/NewsletterSection'));

// Loading skeleton
const SectionSkeleton = () => (
  <div className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-lg mb-8 w-1/3 animate-pulse" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse" />
        ))}
      </div>
    </div>
  </div>
);

export const HomePage = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <ServiceFeatures />
      <FeaturedCategories />
      <Suspense fallback={<SectionSkeleton />}>
        <TrendingProducts />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <GamingSetupBanner />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <SpecialDeals />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <BrandsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <NewsletterSection />
      </Suspense>
    </div>
  );
};
