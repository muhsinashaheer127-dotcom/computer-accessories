import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../data/products';
import { useShop } from '../../context/ShopContext';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-20 bg-slate-50 dark:bg-[#0d1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">Browse</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Shop by Category
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base max-w-md">
              Explore our full range of premium computer accessories and technology.
            </p>
          </div>
          <Link
            to="/shop"
            onClick={() => setSelectedCategory('all')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all shrink-0"
          >
            View all categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.slice(0, 10).map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              onClick={() => setSelectedCategory(cat.id)}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-200 dark:hover:border-blue-700/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-slate-900/60"
            >
              {/* Product Image */}
              <div className="relative h-36 overflow-hidden bg-slate-100 dark:bg-slate-700/50">
                <img
                  src={CATEGORY_IMAGES[cat.id] || cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Label */}
              <div className="p-3">
                <p className="font-semibold text-sm text-slate-900 dark:text-white">{cat.name}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                  {CATEGORY_DESCRIPTIONS[cat.id] || `${cat.count} products`}
                </p>
                <span className="text-[11px] text-blue-600 dark:text-blue-400 font-medium mt-1 block">
                  {cat.count} items →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
