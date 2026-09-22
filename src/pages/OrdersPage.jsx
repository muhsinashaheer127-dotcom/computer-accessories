import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Package, Calendar, MapPin, CreditCard, ChevronRight, Truck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { formatPrice } from '../utils/formatters';

export const OrdersPage = () => {
  const { orders } = useAuth();
  const navigate = useNavigate();

  if (!orders || orders.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-4 px-4 bg-slate-50 dark:bg-[#090d16]">
        <div className="w-16 h-16 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-400 shadow-sm">
          <Package className="w-8 h-8" />
        </div>
        <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">No Orders Placed Yet</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
          You haven't ordered any products yet. Browse our collection of computer accessories and technology solutions.
        </p>
        <button
          onClick={() => navigate('/shop')}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-xs font-semibold text-white shadow-sm transition-colors"
        >
          Explore Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] py-10 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex items-center justify-between">
          <div>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Order History
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Track and review all your purchases.
            </p>
          </div>
          <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 rounded-full font-semibold text-xs text-blue-600 dark:text-blue-400">
            {orders.length} {orders.length === 1 ? 'Order' : 'Orders'}
          </span>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-6 space-y-6 shadow-sm"
            >
              {/* Order Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-900 dark:text-white text-sm">Order #{order.id}</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                        order.status === 'Delivered'
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                          : 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    Placed on {new Date(order.date).toLocaleDateString('en-AE', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-slate-500 dark:text-slate-400 text-xs">Total:</span>
                  <p className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    {formatPrice(order.totalAmount)}
                  </p>
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-contain bg-white dark:bg-slate-800 rounded-xl p-1 border border-slate-200 dark:border-slate-700 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.id}`}
                        className="font-semibold text-xs text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-1"
                      >
                        {item.name}
                      </Link>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-sm text-slate-900 dark:text-white">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Shipping & Payment Meta */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs border-t border-slate-100 dark:border-slate-700">
                <div className="flex items-start gap-2 text-slate-500 dark:text-slate-400">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block">Delivery Address</span>
                    <span>{order.shippingAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-slate-500 dark:text-slate-400">
                  <CreditCard className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block">Payment</span>
                    <span>{order.paymentMethod}</span>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <Truck className="w-4 h-4" /> Priority Express Delivery
                </div>

                <button
                  onClick={() => navigate('/shop')}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1 transition-colors"
                >
                  Buy Again <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
