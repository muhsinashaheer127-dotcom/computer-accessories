import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Search, ShoppingBag, Heart, User, Menu, X, ChevronDown, ArrowLeft,
  LogOut, Package, LayoutDashboard, Sun, Moon, Laptop, Monitor,
  Keyboard, Mouse, Headphones, Cpu, HardDrive, Zap
} from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { formatPrice } from '../../utils/formatters';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartCount, wishlist, searchQuery, setSearchQuery, products, setSelectedCategory } = useShop();
  const { user, isAdmin, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
    setIsCategoryMenuOpen(false);
  }, [location.pathname]);

  const searchResults = searchQuery.trim() === ''
    ? []
    : products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/shop');
      setIsSearchOpen(false);
    }
  };

  const isAdminRoute = location.pathname.startsWith('/admin');

  const categories = [
    { name: 'Laptops', cat: 'laptops', icon: Laptop },
    { name: 'Monitors', cat: 'monitors', icon: Monitor },
    { name: 'Keyboards', cat: 'keyboards', icon: Keyboard },
    { name: 'Mice', cat: 'mice', icon: Mouse },
    { name: 'Headsets', cat: 'headsets', icon: Headphones },
    { name: 'Components', cat: 'components', icon: Cpu },
    { name: 'Storage', cat: 'storage', icon: HardDrive },
    { name: 'Deals', cat: 'all', icon: Zap },
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-xl shadow-sm border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-white dark:bg-[#090d16] border-b border-slate-200/50 dark:border-slate-800/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-6">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm font-heading">T</span>
              </div>
              <span className="font-heading font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                Tech<span className="text-blue-600">Verse</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1 flex-1">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                Home
              </Link>
              <Link
                to="/shop"
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === '/shop'
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                Shop
              </Link>

              {/* Categories Dropdown */}
              <div className="relative" onMouseEnter={() => setIsCategoryMenuOpen(true)} onMouseLeave={() => setIsCategoryMenuOpen(false)}>
                <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors">
                  Categories
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCategoryMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCategoryMenuOpen && (
                  <div className="absolute left-0 top-full mt-1 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-xl p-2 z-50">
                    {categories.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.cat}
                          to="/shop"
                          onClick={() => setSelectedCategory(item.cat)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <Icon className="w-4 h-4 text-slate-400" />
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5 ml-auto">

              {isAdmin && isAdminRoute && (
                <Link
                  to="/"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 mr-1 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Back to Site
                </Link>
              )}

              {isAdmin && !isAdminRoute && (
                <Link
                  to="/admin"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 mr-1 rounded-xl text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Admin Panel
                </Link>
              )}

              {/* UAE Badge */}
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 mr-1 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                <span className="text-xs">🇦🇪</span>
                <span>UAE · AED</span>
              </div>

              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                title="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                title="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="relative p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-blue-600 text-white font-bold text-[10px] rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                title="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-blue-600 text-white font-bold text-[10px] rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* User */}
              <div className="relative">
                {user ? (
                  <>
                    <button
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                    >
                      <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700" />
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
                    </button>

                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-xl py-2 z-50">
                        <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800 mb-1">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{user.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
                        </div>
                        <Link to="/profile" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600">
                          <User className="w-4 h-4 text-slate-400" /> My Profile
                        </Link>
                        <Link to="/orders" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600">
                          <Package className="w-4 h-4 text-slate-400" /> My Orders
                        </Link>
                        {isAdmin && (
                          <Link to="/admin" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20">
                            <LayoutDashboard className="w-4 h-4" /> Admin Panel
                          </Link>
                        )}
                        <div className="border-t border-slate-100 dark:border-slate-800 mt-1 pt-1">
                          <button
                            onClick={() => { logout(); setIsUserMenuOpen(false); }}
                            className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10"
                          >
                            <LogOut className="w-4 h-4" /> Sign Out
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-sm"
                  >
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">Sign In</span>
                  </Link>
                )}
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors ml-1"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#090d16] px-4 py-4 space-y-1">
            {isAdmin && isAdminRoute && (
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 mb-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              >
                <ArrowLeft className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Back to Site
              </Link>
            )}
            {isAdmin && !isAdminRoute && (
              <Link
                to="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 mb-2 rounded-xl text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800"
              >
                <LayoutDashboard className="w-4 h-4" /> Admin Panel
              </Link>
            )}
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600">Home</Link>
            <Link to="/shop" onClick={() => { setSelectedCategory('all'); setIsMobileMenuOpen(false); }} className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600">All Products</Link>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-1">
              {categories.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.cat}
                    to="/shop"
                    onClick={() => { setSelectedCategory(item.cat); setIsMobileMenuOpen(false); }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600"
                  >
                    <Icon className="w-4 h-4 text-slate-400" /> {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
              <div className="flex gap-2">
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">About</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">Contact</Link>
              </div>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-600" />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}>
          <div className="max-w-2xl mx-auto mt-20 px-4" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <form onSubmit={handleSearchSubmit} className="flex items-center px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search for laptops, monitors, keyboards..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 ml-3 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none text-base"
                />
                <button type="button" onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 ml-3">
                  <X className="w-5 h-5" />
                </button>
              </form>

              {searchResults.length > 0 && (
                <div className="py-2 max-h-80 overflow-y-auto">
                  {searchResults.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => { navigate(`/product/${item.id}`); setIsSearchOpen(false); setSearchQuery(''); }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 cursor-pointer transition-colors"
                    >
                      <img src={item.image} alt="" className="w-10 h-10 object-contain rounded-lg bg-slate-100 dark:bg-slate-800 p-1" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{item.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{item.brand} · {formatPrice(item.price)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {searchQuery.trim() && searchResults.length === 0 && (
                <div className="py-10 text-center text-sm text-slate-400">
                  No products found for "<span className="text-slate-600 dark:text-slate-200">{searchQuery}</span>"
                </div>
              )}

              {!searchQuery.trim() && (
                <div className="px-4 py-3 text-xs text-slate-400 dark:text-slate-500">
                  Start typing to search across all products, brands and categories.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
