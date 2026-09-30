import React from 'react';
import { BRANDS } from '../../data/products';

export const BrandsSection = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-[#050a10] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Trusted Brands
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
            Authentic products from the world's leading technology brands
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-3">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-500/50 transition-all duration-200"
            >
              <span className="font-display font-semibold text-xs text-slate-600 dark:text-slate-400 text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
