import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const GamingSetupBanner = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0d1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-slate-800 border border-slate-800/80 dark:border-slate-700/60">

          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1400&q=85"
              alt="Premium workspace setup"
              className="w-full h-full object-cover object-center opacity-30 dark:opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 p-10 sm:p-14">

            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-3 py-1.5">
                <span className="text-xs font-semibold text-blue-400 tracking-wide uppercase">Workspace Collection</span>
              </div>

              <div className="space-y-3">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-snug tracking-tight">
                  Upgrade Your<br />
                  <span className="text-blue-400">Workspace.</span>
                </h2>
                <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                  Thoughtfully designed technology for a cleaner, smarter and more productive working environment.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-md"
                >
                  Explore Workspace <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all"
                >
                  View All Products
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
                {[
                  { val: '2,500+', label: 'Products' },
                  { val: '150+', label: 'Brands' },
                  { val: '4.9★', label: 'Avg. Rating' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-bold text-white">{s.val}</p>
                    <p className="text-xs text-slate-400">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Image Showcase */}
            <div className="hidden md:flex items-center justify-end gap-4">
              <div className="space-y-4">
                {[
                  { img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80', label: 'Keyboards' },
                  { img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=300&q=80', label: 'Mice' },
                ].map(({ img, label }) => (
                  <div key={label} className="relative w-44 h-32 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <img src={img} alt={label} className="w-full h-full object-cover" />
                    <span className="absolute bottom-2 left-2 text-xs font-semibold text-white bg-black/40 px-2 py-0.5 rounded-full">{label}</span>
                  </div>
                ))}
              </div>
              <div className="w-44 h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80"
                  alt="Headset"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
