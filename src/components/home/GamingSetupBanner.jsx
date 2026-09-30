import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const GamingSetupBanner = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#050a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 rounded-full px-4 py-2 border border-slate-200 dark:border-slate-700">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Workspace Collection</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight">
                Build Your Perfect{' '}
                <span className="bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent">
                  Workspace
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Discover premium accessories designed for productivity, comfort, and style. Transform your workspace into an environment that inspires.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Explore Collection <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-300 font-semibold rounded-xl transition-all"
                >
                  View All Products
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                {[
                  { val: '2,500+', label: 'Products' },
                  { val: '150+', label: 'Brands' },
                  { val: '4.9★', label: 'Rating' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{s.val}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Images */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80"
                      alt="Keyboard"
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80"
                      alt="Monitor"
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80"
                      alt="Headset"
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80"
                      alt="Display"
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
