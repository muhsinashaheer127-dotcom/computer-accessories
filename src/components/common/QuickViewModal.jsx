import React, { useState } from 'react';
import { X, ShoppingBag, Heart, Minus, Plus, Truck, ShieldCheck, RotateCcw, Star } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { RatingStars } from './RatingStars';
import { formatPrice } from '../../utils/formatters';
import { Link } from 'react-router-dom';

export const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useShop();
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const isWishlisted = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    setQuickViewProduct(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={() => setQuickViewProduct(null)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-8 flex items-center justify-center min-h-[300px]">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="max-h-72 w-full object-contain"
            />
            {quickViewProduct.discount > 0 && (
              <span className="absolute top-4 left-4 px-2.5 py-1 bg-blue-600 text-white text-xs font-semibold rounded-lg">
                -{quickViewProduct.discount}% OFF
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col gap-5">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{quickViewProduct.brand}</p>
              <h2 className="font-heading font-bold text-xl text-slate-900 dark:text-white leading-snug">
                {quickViewProduct.name}
              </h2>
              <RatingStars rating={quickViewProduct.rating} reviewsCount={quickViewProduct.reviews} />
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
              {quickViewProduct.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                {formatPrice(quickViewProduct.price)}
              </span>
              {quickViewProduct.originalPrice && (
                <span className="text-sm text-slate-400 dark:text-slate-500 line-through">
                  {formatPrice(quickViewProduct.originalPrice)}
                </span>
              )}
            </div>

            {/* Stock */}
            <div className="text-sm">
              {quickViewProduct.stock > 5 ? (
                <span className="text-green-600 dark:text-green-400 font-medium">● In Stock</span>
              ) : quickViewProduct.stock > 0 ? (
                <span className="text-amber-600 dark:text-amber-400 font-medium">● Only {quickViewProduct.stock} left</span>
              ) : (
                <span className="text-red-500 font-medium">● Out of Stock</span>
              )}
            </div>

            {/* Quantity + Actions */}
            <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white border-x border-slate-200 dark:border-slate-700 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => toggleWishlist(quickViewProduct)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                    isWishlisted
                      ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700/60 text-red-500'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-red-200 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={quickViewProduct.stock === 0}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 dark:disabled:bg-slate-700 text-white disabled:text-slate-400 font-semibold transition-all shadow-sm text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                {quickViewProduct.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>

              <Link
                to={`/product/${quickViewProduct.id}`}
                onClick={() => setQuickViewProduct(null)}
                className="block text-center text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                View full details →
              </Link>
            </div>

            {/* Trust Bullets */}
            <div className="flex flex-col gap-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4">
              {[
                { icon: Truck, label: 'Free express delivery across UAE on orders above AED 150' },
                { icon: ShieldCheck, label: 'Official UAE warranty & 100% genuine products' },
                { icon: RotateCcw, label: '14-day hassle-free return policy' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
