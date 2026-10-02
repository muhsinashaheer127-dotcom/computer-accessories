import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/products';
import { useShop } from '../../context/ShopContext';
import { ArrowRight } from 'lucide-react';
import { TechBackground } from './TechBackground';

const CATEGORY_IMAGES = {
  laptops: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80',
  desktops: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80',
  gaming: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
  monitors: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80',
  keyboards: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80',
  mice: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80',
  headsets: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
  components: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80',
  gpu: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=600&q=80',
  storage: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80',
};

const CATEGORY_DESCRIPTIONS = {
  laptops: 'Ultra-thin laptops for work & creativity',
  desktops: 'Powerful workstations & PC builds',
  gaming: 'Performance gear for competitive play',
  monitors: 'Crystal-clear displays for any task',
  keyboards: 'Mechanical & membrane keyboards',
  mice: 'Precision wireless & wired mice',
  headsets: 'Immersive audio for work & leisure',
  components: 'CPU, RAM, motherboards & more',
  gpu: 'High-performance graphics cards',
  storage: 'SSDs, HDDs & portable drives',
};

export const FeaturedCategories = () => {
  const { setSelectedCategory } = useShop();

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#050a10] relative overflow-hidden">
      <TechBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Browse Categories
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              Find exactly what you need for your setup
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

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.slice(0, 10).map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              onClick={() => setSelectedCategory(cat.id)}
              className="group bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 dark:hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]"
            >
              <div className="relative h-32 mb-3 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <img
                  src={CATEGORY_IMAGES[cat.id] || cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500 ease-out"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{cat.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                {CATEGORY_DESCRIPTIONS[cat.id] || `${cat.count} products`}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
