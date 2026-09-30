import React from 'react';
import { CATEGORIES, BRANDS } from '../../data/products';
import { useShop } from '../../context/ShopContext';
import { RotateCcw, Filter } from 'lucide-react';
import { formatPrice } from '../../utils/formatters';

export const ProductFilters = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    priceRange,
    setPriceRange,
    inStockOnly,
    setInStockOnly,
    resetFilters
  } = useShop();

  return (
    <div className="space-y-6 text-sm">
      {/* Filter Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5">
        <h3 className="font-display font-bold text-base text-slate-100 flex items-center gap-2">
          <Filter className="w-4 h-4 text-cyan-400" /> Filters
        </h3>
        <button
          onClick={resetFilters}
          className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* Category Filter */}
      <div>
        <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-slate-500 mb-3">
          Category
        </h4>
        <div className="space-y-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/25'
                : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/25'
                  : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] text-slate-700 font-mono">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-slate-500 mb-3">
          Brand
        </h4>
        <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
          <button
            onClick={() => setSelectedBrand('all')}
            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedBrand === 'all'
                ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/25'
                : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            All Brands
          </button>
          {BRANDS.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedBrand(b.name)}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedBrand.toLowerCase() === b.name.toLowerCase()
                  ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/25'
                  : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-slate-500">
            Max Price
          </h4>
          <span className="font-display font-bold text-xs text-cyan-400">
            {formatPrice(priceRange[1])}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="15000"
          step="250"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full accent-cyan-500 cursor-pointer"
          style={{ background: 'transparent' }}
        />
        <div className="flex justify-between text-[10px] text-slate-600 mt-1">
          <span>AED 0</span>
          <span>AED 15,000</span>
        </div>
      </div>

      {/* Stock Availability Toggle */}
      <div className="pt-1">
        <label className="flex items-center justify-between cursor-pointer p-3 bg-white/3 border border-white/5 hover:border-cyan-500/20 rounded-xl transition-colors">
          <span className="text-xs font-semibold text-slate-400">In Stock Only</span>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="w-4 h-4 rounded accent-cyan-500"
          />
        </label>
      </div>
    </div>
  );
};
