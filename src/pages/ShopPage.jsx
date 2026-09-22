import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/common/ProductCard';
import { CATEGORIES, BRANDS } from '../data/products';
import { SlidersHorizontal, ChevronRight, Search, X, ChevronDown, Grid2X2, List } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

export const ShopPage = () => {
  const { categoryParam } = useParams();
  const {
    products, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory,
    selectedBrand, setSelectedBrand, priceRange, setPriceRange,
    inStockOnly, setInStockOnly, sortBy, setSortBy, resetFilters
  } = useShop();

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const activeCategory = categoryParam || selectedCategory;

  const filteredProducts = products.filter((p) => {
    if (searchQuery.trim() && !p.name.toLowerCase().includes(searchQuery.toLowerCase()) && !p.brand.toLowerCase().includes(searchQuery.toLowerCase()) && !p.category.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (activeCategory !== 'all' && p.category !== activeCategory) return false;
    if (selectedBrand !== 'all' && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) return false;
    if (p.price > priceRange[1]) return false;
    if (inStockOnly && p.stock <= 0) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'newest') return b.id.localeCompare(a.id);
    return b.reviews - a.reviews;
  });

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Category</h4>
        <div className="space-y-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <span>All Products</span>
            <span className="text-xs opacity-70">{products.length}</span>
          </button>
          {CATEGORIES.map((cat) => {
            const count = products.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-xs opacity-70">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Brand Filter */}
      <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-5">
        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Brand</h4>
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
        >
          <option value="all">All Brands</option>
          {BRANDS.map((b) => (
            <option key={b.id} value={b.name}>{b.name}</option>
          ))}
        </select>
      </div>

      {/* Price Filter */}
      <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-5">
        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Max Price</h4>
        <input
          type="range"
          min={0}
          max={15000}
          step={250}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full accent-blue-600"
        />
        <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
          <span>AED 0</span>
          <span className="text-blue-600 dark:text-blue-400 font-semibold">{formatPrice(priceRange[1])}</span>
          <span>AED 15,000</span>
        </div>
      </div>

      {/* Availability */}
      <div className="border-t border-slate-100 dark:border-slate-800 pt-5">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="w-4 h-4 rounded accent-blue-600"
          />
          <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">In Stock Only</span>
        </label>
      </div>

      {/* Reset */}
      <button
        onClick={resetFilters}
        className="w-full py-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700/60 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
      >
        Reset All Filters
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 dark:text-white font-medium">Shop</span>
          {activeCategory !== 'all' && (
            <>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 dark:text-white font-medium capitalize">{CATEGORIES.find((c) => c.id === activeCategory)?.name || activeCategory}</span>
            </>
          )}
        </nav>

        {/* Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              {activeCategory === 'all' ? 'All Products' : (CATEGORIES.find((c) => c.id === activeCategory)?.name || activeCategory)}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Showing <span className="font-semibold text-slate-700 dark:text-slate-200">{sortedProducts.length}</span> products
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-blue-200 dark:hover:border-blue-700 transition-colors shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Filters
            </button>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:border-blue-500 transition-colors shadow-sm"
            >
              <option value="popularity">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Best Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Desktop Sidebar */}
          <div className="hidden lg:block col-span-1 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 h-fit sticky top-24 shadow-sm">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-5">Filters</h3>
            <FilterSidebar />
          </div>

          {/* Product Grid */}
          <div className="col-span-1 lg:col-span-3">
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-3xl gap-4 text-center px-6">
                <Search className="w-12 h-12 text-slate-300 dark:text-slate-600" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white">No products found</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                    Try adjusting your filters or search query to discover more products.
                  </p>
                </div>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex justify-start bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-xs bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full overflow-y-auto p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-slate-900 dark:text-white">Filters</h3>
              <button onClick={() => setIsMobileFilterOpen(false)} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}
    </div>
  );
};
