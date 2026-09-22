import React, { useState } from 'react';
import { AdminSidebar } from '../components/admin/AdminSidebar';
import { Eye, X } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/formatters';

export const AdminOrdersPage = () => {
  const { addToast } = useToast();

  const [orders, setOrders] = useState([
    {
      id: 'ORD-99120',
      customer: 'Tariq Mansoor',
      email: 'tariq.mansoor@gmail.com',
      date: '2026-09-09T21:10:00Z',
      totalAmount: 8499,
      paymentMethod: 'Apple Pay',
      status: 'Processing',
      shippingAddress: 'Villa 14, Palm Jumeirah, Dubai - UAE',
      items: [
        { id: 'prod-1', name: 'ASUS ROG Strix SCAR 18 Performance Laptop', price: 8499, quantity: 1 }
      ]
    },
    {
      id: 'ORD-99119',
      customer: 'Sarah Al-Hashemi',
      email: 'sarah.hashemi@outlook.com',
      date: '2026-09-09T18:45:00Z',
      totalAmount: 649,
      paymentMethod: 'Credit Card',
      status: 'Delivered',
      shippingAddress: 'Apartment 204, Al Reem Island, Abu Dhabi - UAE',
      items: [
        { id: 'prod-2', name: 'Razer BlackWidow V4 Pro Mechanical Keyboard', price: 649, quantity: 1 }
      ]
    },
    {
      id: 'ORD-99118',
      customer: 'Rashid Khan',
      email: 'rashid.khan@yahoo.com',
      date: '2026-09-09T14:20:00Z',
      totalAmount: 4499,
      paymentMethod: 'Tabby (Pay in 4)',
      status: 'Shipped',
      shippingAddress: 'Building 5, Al Majaz 2, Sharjah - UAE',
      items: [
        { id: 'prod-4', name: 'Samsung Odyssey OLED G9 49" Curved Dual QHD Monitor', price: 4499, quantity: 1 }
      ]
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
    addToast(`Order ${orderId} updated to status "${newStatus}"`, 'success');
  };

  return (
    <div className="flex-1 min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-[#090d16] flex text-slate-900 dark:text-slate-100 transition-colors">
      <AdminSidebar />

      <main className="flex-1 p-6 sm:p-10 space-y-6 overflow-y-auto">
        
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            Customer Orders
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Track customer purchases, update order dispatch status, and inspect shipping information.
          </p>
        </div>

        {/* Orders Table */}
        <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-6 overflow-x-auto shadow-sm space-y-4">
          <table className="w-full text-left text-xs">
            <thead className="uppercase text-slate-400 font-semibold border-b border-slate-100 dark:border-slate-700">
              <tr>
                <th className="pb-3">Order ID</th>
                <th className="pb-3">Customer</th>
                <th className="pb-3">Total</th>
                <th className="pb-3">Payment</th>
                <th className="pb-3">Status</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700 font-medium">
              {orders.map((o) => (
                <tr key={o.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="py-3.5 font-mono text-blue-600 dark:text-blue-400 font-semibold">{o.id}</td>
                  <td className="py-3.5">
                    <p className="text-slate-900 dark:text-white font-semibold">{o.customer}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{o.email}</p>
                  </td>
                  <td className="py-3.5 font-semibold text-slate-900 dark:text-white">
                    {formatPrice(o.totalAmount)}
                  </td>
                  <td className="py-3.5 text-slate-500 dark:text-slate-400">{o.paymentMethod}</td>
                  <td className="py-3.5">
                    <select
                      value={o.status}
                      onChange={(e) => handleStatusChange(o.id, e.target.value)}
                      className={`px-2.5 py-1 rounded-xl text-xs font-semibold cursor-pointer focus:outline-none ${
                        o.status === 'Delivered'
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                          : o.status === 'Shipped'
                          ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                          : 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                      }`}
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="py-3.5 text-right">
                    <button
                      onClick={() => setSelectedOrder(o)}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 ml-auto transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal for Order Details */}
        {selectedOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                  Order Details — #{selectedOrder.id}
                </h3>
                <button onClick={() => setSelectedOrder(null)} className="text-slate-400 hover:text-slate-700 dark:hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 font-medium block">Customer</span>
                  <span className="text-slate-900 dark:text-white font-semibold">{selectedOrder.customer} ({selectedOrder.email})</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 font-medium block">Shipping Address</span>
                  <span className="text-slate-700 dark:text-slate-300">{selectedOrder.shippingAddress}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 font-medium block mb-1">Purchased Items</span>
                  <div className="space-y-2 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                    {selectedOrder.items.map((it) => (
                      <div key={it.id} className="flex justify-between text-slate-800 dark:text-slate-200 font-medium">
                        <span>{it.name} (Qty: {it.quantity})</span>
                        <span className="font-semibold text-slate-900 dark:text-white">{formatPrice(it.price * it.quantity)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700 flex justify-end">
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-xs font-semibold text-white shadow-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};
