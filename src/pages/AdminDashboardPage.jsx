import React from 'react';
import { AdminSidebar } from '../components/admin/AdminSidebar';
import { 
  TrendingUp, 
  ShoppingBag, 
  Users, 
  Package, 
  AlertTriangle, 
  ArrowUpRight
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatters';

export const AdminDashboardPage = () => {
  const lowStockProducts = PRODUCTS.filter((p) => p.stock <= 5);

  const mockRecentOrders = [
    { id: 'ORD-99120', customer: 'Tariq Mansoor', amount: 8499, status: 'Processing', date: 'Just now' },
    { id: 'ORD-99119', customer: 'Sarah Al-Hashemi', amount: 649, status: 'Delivered', date: '2 hrs ago' },
    { id: 'ORD-99118', customer: 'Rashid Khan', amount: 4499, status: 'Shipped', date: '5 hrs ago' },
    { id: 'ORD-99117', customer: 'Layla Mahmoud', amount: 449, status: 'Delivered', date: '1 day ago' },
  ];

  return (
    <div className="flex-1 min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-[#090d16] flex text-slate-900 dark:text-slate-100 transition-colors">
      <AdminSidebar />

      <main className="flex-1 p-6 sm:p-10 space-y-8 overflow-y-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Dashboard Overview
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Sales performance, inventory notifications, and order updates.
            </p>
          </div>
          <Link
            to="/admin/products"
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold text-xs text-white shadow-sm transition-colors w-fit"
          >
            + Add Product
          </Link>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Total Revenue</span>
              <div className="w-8 h-8 bg-blue-50 dark:bg-blue-950/40 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <p className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">AED 148,590</p>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
              <ArrowUpRight className="w-3.5 h-3.5" /> +18.4% this month
            </span>
          </div>

          <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Total Orders</span>
              <div className="w-8 h-8 bg-blue-50 dark:bg-blue-950/40 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
            </div>
            <p className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">128</p>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
              <ArrowUpRight className="w-3.5 h-3.5" /> +12% order volume
            </span>
          </div>

          <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Customers</span>
              <div className="w-8 h-8 bg-blue-50 dark:bg-blue-950/40 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <p className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">942</p>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
              <ArrowUpRight className="w-3.5 h-3.5" /> +45 new signups
            </span>
          </div>

          <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Catalog Size</span>
              <div className="w-8 h-8 bg-blue-50 dark:bg-blue-950/40 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Package className="w-4 h-4" />
              </div>
            </div>
            <p className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">{PRODUCTS.length}</p>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Across 10 Categories
            </span>
          </div>

        </div>

        {/* Dashboard Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Recent Orders Table Left */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-4">
              <h3 className="font-heading font-semibold text-base text-slate-900 dark:text-white">Recent Customer Orders</h3>
              <Link to="/admin/orders" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                View All Orders →
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="uppercase text-slate-400 font-semibold border-b border-slate-100 dark:border-slate-700">
                  <tr>
                    <th className="pb-3">Order ID</th>
                    <th className="pb-3">Customer</th>
                    <th className="pb-3">Amount</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700 font-medium">
                  {mockRecentOrders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="py-3 font-mono text-blue-600 dark:text-blue-400 font-semibold">{ord.id}</td>
                      <td className="py-3 text-slate-900 dark:text-white">{ord.customer}</td>
                      <td className="py-3 font-semibold text-slate-900 dark:text-white">{formatPrice(ord.amount)}</td>
                      <td className="py-3">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                            ord.status === 'Delivered'
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                              : ord.status === 'Shipped'
                              ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                              : 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                          }`}
                        >
                          {ord.status}
                        </span>
                      </td>
                      <td className="py-3 text-slate-500 dark:text-slate-400">{ord.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Low Stock Warning Right */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-4 text-amber-600 dark:text-amber-400 font-semibold text-sm">
              <AlertTriangle className="w-4 h-4" /> Low Inventory Alerts ({lowStockProducts.length})
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
              {lowStockProducts.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 text-xs">
                  <div className="flex items-center gap-3 min-w-0">
                    <img src={p.image} alt="" className="w-10 h-10 object-contain rounded-lg bg-white dark:bg-slate-800 p-1 shrink-0 border border-slate-200 dark:border-slate-700" />
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900 dark:text-white truncate">{p.name}</p>
                      <p className="text-[10px] text-slate-400 uppercase">{p.brand}</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 rounded-md font-semibold text-[11px] shrink-0">
                    {p.stock} left
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};
