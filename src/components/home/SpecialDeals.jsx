import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

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
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg w-12 h-12 flex items-center justify-center">
      <span className="font-display font-bold text-xl text-slate-900 dark:text-white tabular-nums">{value}</span>
    </div>
    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">{label}</span>
  </div>
);

export const SpecialDeals = () => {
  const dealProducts = PRODUCTS.filter((p) => p.isDeal).slice(0, 4);
  const [h, m, s] = useCountdown(12);

  return (
    <section className="py-16 bg-white dark:bg-[#050a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <div className="space-y-2">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Special Deals
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">Limited time offers on premium products</p>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>Ends in</span>
            </div>
            <div className="flex items-center gap-2">
              <TimeUnit value={h} label="Hrs" />
              <span className="text-slate-400 font-bold text-lg">:</span>
              <TimeUnit value={m} label="Min" />
              <span className="text-slate-400 font-bold text-lg">:</span>
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            View all deals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
