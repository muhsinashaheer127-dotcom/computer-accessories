import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ServiceFeatures } from '../components/home/ServiceFeatures';
import { FeaturedCategories } from '../components/home/FeaturedCategories';
import { TrendingProducts } from '../components/home/TrendingProducts';
import { GamingSetupBanner } from '../components/home/GamingSetupBanner';
import { SpecialDeals } from '../components/home/SpecialDeals';
import { BrandsSection } from '../components/home/BrandsSection';
import { NewsletterSection } from '../components/home/NewsletterSection';

export const HomePage = () => {
  return (
    <div className="tech-homepage space-y-0">
      <HeroSection />
      <ServiceFeatures />
      <FeaturedCategories />
      <TrendingProducts />
      <GamingSetupBanner />
      <SpecialDeals />
      <BrandsSection />
      <NewsletterSection />
    </div>
  );
};
