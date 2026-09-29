import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { useToast } from '../context/ToastContext';
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Minus, Plus } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

export const CartPage = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, cartSubtotal, clearCart } = useShop();
  const { addToast } = useToast();
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const code = couponCode.toUpperCase();
    if (code === 'BURAQA10' || code === 'TECHVERSE10') {
      setDiscountPercent(10);
      addToast('Coupon "BURAQA10" applied! 10% discount added.', 'success');
    } else {
      addToast('Invalid coupon code. Try "BURAQA10"', 'error');
    }
  };

  const discountAmount = Math.round((cartSubtotal * discountPercent) / 100);
  const shippingFee = cartSubtotal >= 150 || cart.length === 0 ? 0 : 20;
  const grandTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-sm w-full text-center space-y-6 py-16">
          <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl flex items-center justify-center mx-auto">
            <ShoppingBag className="w-9 h-9 text-slate-400 dark:text-slate-500" />
          </div>
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">Your Cart is Empty</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Browse our premium technology range and add some products to your cart.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all"
          >
            Browse Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Shopping Cart
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
          </div>
          <button
            onClick={clearCart}
            className="text-sm text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors font-medium"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl hover:border-blue-200 dark:hover:border-blue-700/60 transition-all"
              >
                {/* Image */}
                <Link to={`/product/${item.id}`} className="w-20 h-20 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-2 shrink-0">
                  <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">{item.brand}</p>
                  <Link to={`/product/${item.id}`} className="block mt-0.5">
                    <h3 className="font-semibold text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">{formatPrice(item.price)}</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white border-x border-slate-200 dark:border-slate-700 min-w-[2.5rem] text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Subtotal + Delete */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:gap-2 w-full sm:w-auto">
                  <span className="font-bold text-sm text-slate-900 dark:text-white">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-6 space-y-5 sticky top-24 shadow-sm">
              <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4">
                Order Summary
              </h3>

              {/* Coupon */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-blue-500 rounded-xl py-2.5 px-3 pl-9 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none uppercase font-mono"
                  />
                </div>
                <button type="submit" className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors">Apply</button>
              </form>
              {discountPercent === 0 && (
                <p className="text-xs text-slate-400 dark:text-slate-500">Try: <span className="font-mono text-amber-500 font-semibold">BURAQA10</span></p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-3 text-sm border-t border-slate-100 dark:border-slate-800 pt-4">
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900 dark:text-white">{formatPrice(cartSubtotal)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-400 font-medium">
                    <span>Discount ({discountPercent}%)</span>
                    <span>- {formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Delivery</span>
                  <span className={shippingFee === 0 ? 'text-green-600 dark:text-green-400 font-semibold' : 'font-medium text-slate-900 dark:text-white'}>
                    {shippingFee === 0 ? 'Free' : formatPrice(shippingFee)}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-baseline justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-white">Total</span>
                <span className="font-bold text-2xl text-slate-900 dark:text-white">{formatPrice(grandTotal)}</span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md text-sm"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                Secure SSL Encrypted Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
