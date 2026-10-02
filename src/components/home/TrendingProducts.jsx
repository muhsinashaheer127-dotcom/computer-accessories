import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { TechBackground } from './TechBackground';

export const TrendingProducts = () => {
  const { setSelectedCategory } = useShop();
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 8);

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#050a10] relative overflow-hidden">
      <TechBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Featured Products
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base max-w-md">
              Carefully curated technology that meets the highest standards
            </p>
          </div>
          <Link
            to="/shop"
            onClick={() => setSelectedCategory('all')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
          >
            View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
