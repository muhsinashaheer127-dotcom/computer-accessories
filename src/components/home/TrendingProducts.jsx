import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import { ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const TrendingProducts = () => {
  const { setSelectedCategory } = useShop();
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 8);

  return (
    <section className="py-20 bg-white dark:bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">Our Selection</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Featured Products
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base max-w-md">
              Carefully curated technology that meets the highest standards of performance and design.
            </p>
          </div>
          <Link
            to="/shop"
            onClick={() => setSelectedCategory('all')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all shrink-0"
          >
            View all products <ArrowRight className="w-4 h-4" />
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
