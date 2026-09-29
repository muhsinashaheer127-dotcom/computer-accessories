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
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/15 dark:bg-amber-500/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-yellow-500/10 dark:bg-amber-600/15 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(245, 158, 11, 0.4) 1px, transparent 1px)`,
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>BURAQA STAR COMPUTER TRADING LLC</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-orbitron font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-slate-900 dark:text-white uppercase leading-[1.05]">
              UPGRADE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-450 to-yellow-400 dark:from-amber-350">
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
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-orbitron font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20 hover:scale-105 transition-all duration-300"
              >
                <ShoppingBag className="w-5 h-5 text-slate-950" /> SHOP ACCESSORIES
              </Link>

              <Link
                to="/shop"
                onClick={() => setSelectedCategory('all')}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-500 text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400 font-orbitron font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm backdrop-blur-md hover:scale-105 transition-all duration-300"
              >
                EXPLORE PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Specs Metrics */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left">
              <div>
                <span className="font-orbitron font-bold text-xl sm:text-2xl text-amber-500 dark:text-amber-400 block">PREMIUM</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase font-rajdhani font-semibold">QUALITY</span>
              </div>
              <div>
                <span className="font-orbitron font-bold text-xl sm:text-2xl text-amber-600 dark:text-amber-300 block">SMART</span>
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
            <div className="relative z-10 rounded-3xl p-3 bg-gradient-to-b from-amber-100/60 via-slate-100/50 to-amber-100/60 dark:from-amber-500/20 dark:via-slate-800/30 dark:to-amber-500/10 border border-amber-200 dark:border-amber-500/30 shadow-2xl backdrop-blur-xl group">
              <img
                src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1000&q=80"
                alt="Tech Setup Laptop"
                className="w-full h-auto rounded-2xl object-cover shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Floating Spec Badge 1 */}
              <div className="absolute -top-4 -left-4 bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-amber-500/40 backdrop-blur-md rounded-2xl p-3 shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase">SMART ACCESSORIES</p>
                  <p className="text-xs font-extrabold text-slate-900 dark:text-white">Designed for Every Setup</p>
                </div>
              </div>

              {/* Floating Spec Badge 2 */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-amber-500/40 backdrop-blur-md rounded-2xl p-3 shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400">
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
