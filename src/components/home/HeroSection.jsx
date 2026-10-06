import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Star, Truck, ShieldCheck } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { TechBackground } from './TechBackground';

export const HeroSection = () => {
  const { setSelectedCategory } = useShop();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/30 to-slate-100 dark:from-[#0f1629] dark:via-cyan-950/20 dark:to-[#0f1629]">
      {/* Tech Background */}
      <TechBackground />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 dark:from-slate-900/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[90vh] py-16 lg:py-24">

          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Trusted by 10,000+ customers</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-slate-900 dark:text-white leading-tight">
              Premium{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                  Computer
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9"/>
                      <stop offset="50%" stopColor="#0ea5e9"/>
                      <stop offset="100%" stopColor="#14b8a6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Accessories
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              Elevate your workspace with premium-quality accessories. Fast shipping across UAE, genuine products, and exceptional customer service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/shop"
                onClick={() => setSelectedCategory('all')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
                Shop Now
              </Link>

              <Link
                to="/shop"
                onClick={() => setSelectedCategory('all')}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-300 font-semibold rounded-xl transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2 group"
              >
                View Catalog <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-200 dark:border-slate-800">
              {[
                { icon: Truck, label: 'Free Shipping', sub: 'Orders AED 200+' },
                { icon: ShieldCheck, label: '1 Year Warranty', sub: 'On All Products' },
                { icon: Star, label: '4.9 Rating', sub: 'Customer Reviews' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-center cursor-pointer group"
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/30 group-hover:shadow-lg group-hover:shadow-cyan-500/20">
                    <item.icon className="w-5 h-5 text-slate-700 dark:text-slate-300 transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                  </div>
                  <p className="font-semibold text-sm text-slate-900 dark:text-white transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400">{item.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 transition-colors group-hover:text-slate-600 dark:group-hover:text-slate-300">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-black/30">
                <img
                  src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium Computer Setup"
                  className="w-full h-auto object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating Product Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-800 max-w-[200px] cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center transition-colors hover:bg-cyan-200 dark:hover:bg-cyan-800/50">
                    <ShoppingBag className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900 dark:text-white">2,500+</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Products</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Deal Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-2xl px-5 py-3 shadow-lg cursor-pointer hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300"
              >
                <p className="text-white font-bold text-sm">Up to 30% OFF</p>
                <p className="text-white/80 text-xs">Limited Time</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
