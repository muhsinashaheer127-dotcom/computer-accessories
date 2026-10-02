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

  const navLinkClass = (path) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
      location.pathname === path
        ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 font-semibold shadow-md shadow-cyan-500/20'
        : 'text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:scale-105 hover:shadow-md'
    }`;

  return (
    <>
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-50/95 dark:bg-[#050a10]/95 backdrop-blur-xl border-b border-cyan-500/20 dark:border-cyan-500/10 shadow-lg shadow-cyan-500/5'
          : 'bg-slate-50/80 dark:bg-[#050a10]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5'
      }`}>
        {/* Top accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-6">

            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <img
                src="/logo-emblem.png"
                alt="BURAQA STAR"
                className="h-9 w-auto object-contain drop-shadow-sm group-hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.8)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors group-hover:tracking-wide">
                  BURAQA <span className="text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300">STAR</span>
                </span>
                <span className="text-[9px] font-medium text-slate-500 tracking-widest uppercase mt-0.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Computer Trading LLC
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1 flex-1">
              <Link to="/" className={navLinkClass('/')}>Home</Link>
              <Link
                to="/shop"
                onClick={() => setSelectedCategory('all')}
                className={navLinkClass('/shop')}
              >
                Shop
              </Link>

              {/* Categories Dropdown */}
              <div className="relative group">
                <Link
                  to="/shop"
                  onClick={() => setSelectedCategory('all')}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                >
                  Categories
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                <div className="absolute left-0 top-full mt-0 w-56 bg-white dark:bg-[#070d18] border border-slate-200 dark:border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/10 p-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 group-hover:translate-y-1">
                  {categories.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.cat}
                        to="/shop"
                        onClick={() => setSelectedCategory(item.cat)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-600 dark:text-slate-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-200 hover:scale-105 hover:translate-x-1 group/item"
                      >
                        <Icon className="w-4 h-4 text-slate-400 dark:text-slate-600 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors group-hover/item:scale-110 group-hover/item:rotate-12" />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link to="/about" className={navLinkClass('/about')}>About</Link>
              <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5 ml-auto">

              {isAdmin && isAdminRoute && (
                <Link
                  to="/"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 mr-1 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Back to Site
                </Link>
              )}

              {isAdmin && !isAdminRoute && (
                <Link
                  to="/admin"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-2 mr-1 rounded-xl text-sm font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20 hover:bg-cyan-200 dark:hover:bg-cyan-500/20 transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Admin Panel
                </Link>
              )}

              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-xl text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-cyan-500/20"
                title="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-md hover:shadow-cyan-500/20"
                title="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-cyan-400" /> : <Moon className="w-5 h-5 text-cyan-600" />}
              </button>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="relative p-2 rounded-xl text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-cyan-500/20"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-cyan-500 text-slate-950 font-black text-[10px] rounded-full flex items-center justify-center shadow-sm shadow-cyan-500/50 animate-pulse">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 rounded-xl text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-cyan-500/20"
                title="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-cyan-500 text-slate-950 font-black text-[10px] rounded-full flex items-center justify-center shadow-sm shadow-cyan-500/50 animate-pulse">
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
                      className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                    >
                      <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-full object-cover ring-2 ring-cyan-400 dark:ring-cyan-500/40" />
                      <ChevronDown className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
                    </button>

                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#070d18] border border-slate-200 dark:border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/10 py-2 z-50">
                        <div className="px-4 py-2 border-b border-slate-200 dark:border-white/5 mb-1">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{user.name}</p>
                          <p className="text-xs text-slate-500 truncate">{user.email}</p>
                        </div>
                        <Link to="/profile" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-200 hover:scale-105 hover:translate-x-1">
                          <User className="w-4 h-4 transition-transform hover:scale-110" /> My Profile
                        </Link>
                        <Link to="/orders" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-200 hover:scale-105 hover:translate-x-1">
                          <Package className="w-4 h-4 transition-transform hover:scale-110" /> My Orders
                        </Link>
                        {isAdmin && (
                          <Link to="/admin" onClick={() => setIsUserMenuOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-cyan-600 dark:text-cyan-400 font-medium hover:bg-cyan-100 dark:hover:bg-cyan-500/10 transition-all duration-200 hover:scale-105 hover:translate-x-1">
                            <LayoutDashboard className="w-4 h-4 transition-transform hover:scale-110" /> Admin Panel
                          </Link>
                        )}
                        <div className="border-t border-slate-200 dark:border-white/5 mt-1 pt-1">
                          <button
                            onClick={() => { logout(); setIsUserMenuOpen(false); }}
                            className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-red-500 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-500/10 transition-all duration-200 hover:scale-105"
                          >
                            <LogOut className="w-4 h-4 transition-transform hover:scale-110" /> Sign Out
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-0.5 hover:scale-105"
                  >
                    <User className="w-4 h-4 transition-transform hover:scale-110" />
                    <span className="hidden sm:inline">Sign In</span>
                  </Link>
                )}
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-cyan-500/10 transition-all ml-1"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-white/5 bg-slate-50/98 dark:bg-[#050a10]/98 backdrop-blur-xl px-4 py-4 space-y-1">
            {isAdmin && isAdminRoute && (
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 mb-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <ArrowLeft className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Back to Site
              </Link>
            )}
            {isAdmin && !isAdminRoute && (
              <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 mb-2 rounded-xl text-sm font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-500/20">
                <LayoutDashboard className="w-4 h-4" /> Admin Panel
              </Link>
            )}
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-300">Home</Link>
            <Link to="/shop" onClick={() => { setSelectedCategory('all'); setIsMobileMenuOpen(false); }} className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-cyan-600 dark:hover:text-cyan-300">All Products</Link>
            <div className="pt-2 border-t border-slate-200 dark:border-white/5 grid grid-cols-2 gap-1">
              {categories.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.cat}
                    to="/shop"
                    onClick={() => { setSelectedCategory(item.cat); setIsMobileMenuOpen(false); }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-slate-500 dark:text-slate-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300"
                  >
                    <Icon className="w-4 h-4 text-slate-400 dark:text-slate-600" /> {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex items-center justify-between gap-2">
              <div className="flex gap-2">
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5">About</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5">Contact</Link>
              </div>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
              >
                {isDark ? <Sun className="w-4 h-4 text-cyan-400" /> : <Moon className="w-4 h-4 text-cyan-600" />}
                <span>{isDark ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/90 dark:bg-[#020408]/90 backdrop-blur-md" onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}>
          <div className="max-w-2xl mx-auto mt-20 px-4" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white dark:bg-[#070d18] rounded-2xl shadow-2xl shadow-cyan-500/10 border border-slate-200 dark:border-cyan-500/20 overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-cyan-300 dark:border-cyan-500/50 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-cyan-300 dark:border-cyan-500/50 rounded-br-2xl" />
              <form onSubmit={handleSearchSubmit} className="flex items-center px-4 py-3 border-b border-slate-200 dark:border-white/5">
                <Search className="w-5 h-5 text-cyan-500/60 shrink-0" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search for laptops, monitors, keyboards..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 ml-3 bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none text-base"
                />
                <button type="button" onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} className="text-slate-400 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-300 ml-3">
                  <X className="w-5 h-5" />
                </button>
              </form>

              {searchResults.length > 0 && (
                <div className="py-2 max-h-80 overflow-y-auto">
                  {searchResults.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => { navigate(`/product/${item.id}`); setIsSearchOpen(false); setSearchQuery(''); }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-cyan-100 dark:hover:bg-cyan-500/5 cursor-pointer transition-colors"
                    >
                      <img src={item.image} alt="" className="w-10 h-10 object-contain rounded-lg bg-slate-100 dark:bg-white/5 p-1" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200 truncate">{item.name}</p>
                        <p className="text-xs text-slate-500">{item.brand} · {formatPrice(item.price)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {searchQuery.trim() && searchResults.length === 0 && (
                <div className="py-10 text-center text-sm text-slate-500">
                  No results for "<span className="text-cyan-600 dark:text-cyan-400">{searchQuery}</span>"
                </div>
              )}

              {!searchQuery.trim() && (
                <div className="px-4 py-3 text-xs text-slate-400 dark:text-slate-600">
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
