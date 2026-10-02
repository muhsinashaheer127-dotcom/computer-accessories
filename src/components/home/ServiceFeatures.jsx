import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones, Star, Award } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Genuine Products',
    desc: 'Authentic technology from trusted, authorised brand partners.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Reliable shipping across all 7 Emirates. Free on orders above AED 150.',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    desc: 'Simple 14-day return and exchange process, no questions asked.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    desc: 'Our tech specialists in Dubai help you choose the right setup for your needs.',
  },
  {
    icon: Star,
    title: 'Top-Rated Store',
    desc: 'Over 50,000 happy customers across the UAE and a 4.9-star rating.',
  },
  {
    icon: Award,
    title: 'Official UAE Warranty',
    desc: 'All products backed by official UAE manufacturer warranty for peace of mind.',
  },
];

export const ServiceFeatures = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#050a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto">
            We're committed to providing you with the best technology shopping experience in the UAE
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/50 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
