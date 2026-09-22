import React from 'react';
import { ShieldCheck, Cpu, Award, Users, Headphones, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Banner */}
        <div className="relative rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 p-8 sm:p-16 text-center overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> About TechVerse
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
              Premium Technology. <span className="text-blue-600 dark:text-blue-400">Smarter Setup.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              TechVerse is the United Arab Emirates' dedicated technology destination for professional workspace accessories, high-performance computing devices, and thoughtfully engineered peripherals. Headquartered in Dubai, we serve professionals and modern businesses across all 7 Emirates.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { label: 'Happy Customers', val: '50,000+' },
            { label: 'Curated Products', val: '2,500+' },
            { label: 'Emirates Covered', val: '7 of 7' },
            { label: 'Customer Rating', val: '4.9 / 5' }
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 text-center space-y-1.5 shadow-sm">
              <p className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">{stat.val}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white">100% Genuine Products</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              We partner directly with leading brands including Apple, Dell, Lenovo, HP, Logitech, and Samsung to provide genuine hardware with official UAE warranties.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white">Expert Consultation</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Our Dubai-based setup specialists help professionals, creators, and engineers design ergonomic, efficient, and high-performance working environments.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white">Rapid UAE Fulfillment</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Modern distribution hub in Dubai ensures same-day dispatch, transparent live tracking, and reliable delivery across all 7 Emirates.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 dark:bg-slate-800 border border-slate-800 dark:border-slate-700 rounded-3xl p-8 sm:p-14 text-center space-y-6">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
            Transform Your Workspace Today
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Discover precision mechanical keyboards, high-resolution displays, wireless mice, and workspace audio solutions.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all"
          >
            Explore Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
