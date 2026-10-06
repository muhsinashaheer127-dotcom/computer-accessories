import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Star, Truck, ShieldCheck } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const HeroSection = () => {
  const { setSelectedCategory } = useShop();

  return (
    <section className="bg-white dark:bg-[#050a10] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Trusted by 10,000+ customers</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
              Premium{' '}
              <span className="text-cyan-600 dark:text-cyan-400">Computer</span>
              <br />
              Accessories
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl">
              Elevate your workspace with premium-quality accessories. Fast shipping across UAE, genuine products, and exceptional customer service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/shop"
                onClick={() => setSelectedCategory('all')}
                className="w-full sm:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop Now
              </Link>

              <Link
                to="/shop"
                onClick={() => setSelectedCategory('all')}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-300 font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                View Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-200 dark:border-slate-800">
              {[
                { icon: Truck, label: 'Free Shipping', sub: 'Orders AED 200+' },
                { icon: ShieldCheck, label: '1 Year Warranty', sub: 'On All Products' },
                { icon: Star, label: '4.9 Rating', sub: 'Customer Reviews' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  <p className="font-semibold text-sm text-slate-900 dark:text-white">{item.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80"
                alt="Premium Computer Setup"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
