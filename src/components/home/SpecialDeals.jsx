import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import { Link } from 'react-router-dom';
import { Tag, Clock, ArrowRight } from 'lucide-react';

const useCountdown = (targetHours) => {
  const end = Date.now() + targetHours * 3600000;
  const [remaining, setRemaining] = useState(end - Date.now());
  useEffect(() => {
    const t = setInterval(() => setRemaining(end - Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  const s = Math.floor((remaining % 60000) / 1000);
  return [h, m, s].map((v) => String(v).padStart(2, '0'));
};

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl w-12 h-12 flex items-center justify-center shadow-sm">
      <span className="font-heading font-bold text-xl text-slate-900 dark:text-white tabular-nums">{value}</span>
    </div>
    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-1 uppercase tracking-wider">{label}</span>
  </div>
);

export const SpecialDeals = () => {
  const dealProducts = PRODUCTS.filter((p) => p.isDeal).slice(0, 4);
  const [h, m, s] = useCountdown(12);

  return (
    <section className="py-20 bg-white dark:bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <p className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">Limited Time</p>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Exclusive Deals
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base">Handpicked offers that won't last long.</p>
          </div>

          {/* Countdown */}
          <div className="flex flex-col items-start sm:items-end gap-2">
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>Ends in</span>
            </div>
            <div className="flex items-end gap-2">
              <TimeUnit value={h} label="Hrs" />
              <span className="text-slate-400 dark:text-slate-500 font-bold text-lg mb-3">:</span>
              <TimeUnit value={m} label="Min" />
              <span className="text-slate-400 dark:text-slate-500 font-bold text-lg mb-3">:</span>
              <TimeUnit value={s} label="Sec" />
            </div>
          </div>
        </div>

        {/* Deal Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} showDealBadge />
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
          >
            View all deals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
