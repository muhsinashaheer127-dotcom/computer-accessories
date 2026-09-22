import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  ArrowLeft
} from 'lucide-react';

export const AdminSidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Product Catalog', path: '/admin/products', icon: Package },
    { name: 'Orders', path: '/admin/orders', icon: ShoppingBag },
    { name: 'Customers', path: '/admin/users', icon: Users },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-5 space-y-6 flex flex-col justify-between shrink-0 min-h-full self-stretch">
      <div className="space-y-6">
        
        {/* Brand Admin Logo */}
        <div className="flex items-center gap-2.5 px-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
            <span className="font-heading font-bold text-sm">T</span>
          </div>
          <div>
            <h2 className="font-heading font-bold text-base text-slate-900 dark:text-white">Tech<span className="text-blue-600">Verse</span></h2>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Administration</p>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="space-y-1 text-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Back to Store */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
        <Link
          to="/"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Return to Store
        </Link>
      </div>
    </aside>
  );
};
