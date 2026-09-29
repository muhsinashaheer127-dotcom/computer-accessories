import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones, Star, Award } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Genuine Products',
    desc: 'Authentic technology from trusted, authorised brand partners.',
    color: 'blue',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Reliable shipping across all 7 Emirates. Free on orders above AED 150.',
    color: 'indigo',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    desc: 'Simple 14-day return and exchange process, no questions asked.',
    color: 'blue',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    desc: 'Our tech specialists in Dubai help you choose the right setup for your needs.',
    color: 'indigo',
  },
  {
    icon: Star,
    title: 'Top-Rated Store',
    desc: 'Over 50,000 happy customers across the UAE and a 4.9-star rating.',
    color: 'blue',
  },
  {
    icon: Award,
    title: 'Official UAE Warranty',
    desc: 'All products backed by official UAE manufacturer warranty for peace of mind.',
    color: 'indigo',
  },
];

export const ServiceFeatures = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <p className="text-xs font-semibold tracking-widest text-amber-500 uppercase">Our Promise</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Why Shop with BURAQA STAR?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto">
            We're committed to providing you with the best technology shopping experience in the UAE.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="group flex gap-5 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/60 hover:border-blue-200 dark:hover:border-blue-700/60 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-200"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-slate-900 dark:text-white text-base">{title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
