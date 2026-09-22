import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Shield, Cpu, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const HeroSection = () => {
  const { setSelectedCategory } = useShop();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#08090e] dark:via-[#0d0e1a] dark:to-[#08090e] transition-colors duration-300">

      {/* Background Neon Glowing Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/40 text-purple-700 dark:text-purple-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 animate-pulse" />
              <span>PREMIUM COMPUTER ACCESSORIES</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-orbitron font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-slate-900 dark:text-white uppercase leading-[1.05]">
              UPGRADE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-300 dark:to-blue-400">
                DIGITAL EXPERIENCE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Premium computer accessories designed for work, creativity and everyday productivity.
              Discover reliable technology, thoughtful design and smarter solutions for your digital setup.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                to="/shop"
                onClick={() => setSelectedCategory('all')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-orbitron font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-xl shadow-purple-950/30 hover:scale-105 transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5" /> SHOP ACCESSORIES
              </Link>

              <Link
                to="/shop"
                onClick={() => setSelectedCategory('all')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-orbitron font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm backdrop-blur-md hover:scale-105 transition-all duration-300"
              >
                EXPLORE PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Specs Metrics */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left">
              <div>
                <span className="font-orbitron font-bold text-xl sm:text-2xl text-purple-600 dark:text-purple-400 block">PREMIUM</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-rajdhani font-semibold">QUALITY</span>
              </div>
              <div>
                <span className="font-orbitron font-bold text-xl sm:text-2xl text-blue-600 dark:text-blue-400 block">SMART</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-rajdhani font-semibold">DESIGN</span>
              </div>
              <div>
                <span className="font-orbitron font-bold text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400 block">100%</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-rajdhani font-semibold">GENUINE</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image Setup Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-3xl p-3 bg-gradient-to-b from-purple-100/60 via-slate-100/50 to-blue-100/60 dark:from-purple-500/20 dark:via-slate-800/30 dark:to-blue-500/20 border border-purple-200 dark:border-purple-500/30 shadow-2xl backdrop-blur-xl group">
              <img
                src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=80"
                alt="Tech Setup Laptop"
                className="w-full h-auto rounded-2xl object-cover shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Floating Spec Badge 1 */}
              <div className="absolute -top-4 -left-4 bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-purple-500/40 backdrop-blur-md rounded-2xl p-3 shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">SMART ACCESSORIES</p>
                  <p className="text-xs font-extrabold text-slate-900 dark:text-white">Designed for Every Setup</p>
                </div>
              </div>

              {/* Floating Spec Badge 2 */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-blue-500/40 backdrop-blur-md rounded-2xl p-3 shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">TRUSTED QUALITY</p>
                  <p className="text-xs font-extrabold text-slate-900 dark:text-white">Warranty Included</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
