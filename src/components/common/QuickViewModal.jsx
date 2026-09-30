import React, { useState } from 'react';
import { X, ShoppingBag, Heart, Minus, Plus, Truck, ShieldCheck, RotateCcw } from 'lucide-react';
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
      <div className="absolute inset-0 bg-[#020408]/90 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative w-full max-w-3xl bg-[#070d18] border border-cyan-500/15 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-l border-t border-cyan-500/30 rounded-tl-3xl" />
        <div className="absolute top-0 right-0 w-6 h-6 border-r border-t border-cyan-500/30 rounded-tr-3xl" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-l border-b border-violet-500/20 rounded-bl-3xl" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-r border-b border-violet-500/20 rounded-br-3xl" />

        {/* Close */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative bg-[#050a10] p-8 flex items-center justify-center min-h-[300px]">
            {/* Grid overlay */}
            <div className="absolute inset-0 grid-bg opacity-50" />
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="max-h-72 w-full object-contain relative z-10"
            />
            {quickViewProduct.discount > 0 && (
              <span className="absolute top-4 left-4 px-2.5 py-1 bg-cyan-500 text-slate-950 text-xs font-bold rounded-lg shadow-sm shadow-cyan-500/30 z-20">
                -{quickViewProduct.discount}% OFF
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col gap-5">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-cyan-400/80 uppercase tracking-widest">{quickViewProduct.brand}</p>
              <h2 className="font-display font-bold text-xl text-white leading-snug">
                {quickViewProduct.name}
              </h2>
              <RatingStars rating={quickViewProduct.rating} reviewsCount={quickViewProduct.reviews} />
            </div>

            <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
              {quickViewProduct.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-white font-display">
                {formatPrice(quickViewProduct.price)}
              </span>
              {quickViewProduct.originalPrice && (
                <span className="text-sm text-slate-600 line-through">
                  {formatPrice(quickViewProduct.originalPrice)}
                </span>
              )}
            </div>

            {/* Stock */}
            <div className="text-sm">
              {quickViewProduct.stock > 5 ? (
                <span className="text-emerald-400 font-medium">● In Stock</span>
              ) : quickViewProduct.stock > 0 ? (
                <span className="text-amber-400 font-medium">● Only {quickViewProduct.stock} left</span>
              ) : (
                <span className="text-red-400 font-medium">● Out of Stock</span>
              )}
            </div>

            {/* Quantity + Actions */}
            <div className="space-y-3 pt-2 border-t border-white/5">
              <div className="flex items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-slate-500 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-sm font-semibold text-white border-x border-white/10 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-slate-500 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => toggleWishlist(quickViewProduct)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                    isWishlisted
                      ? 'bg-red-500/10 border-red-500/30 text-red-400'
                      : 'border-white/10 text-slate-500 hover:border-red-500/30 hover:text-red-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-400' : ''}`} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={quickViewProduct.stock === 0}
                className="relative w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:bg-white/5 text-slate-950 font-bold disabled:text-slate-600 transition-all shadow-lg shadow-cyan-500/20 text-sm overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <ShoppingBag className="w-4 h-4" />
                {quickViewProduct.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>

              <Link
                to={`/product/${quickViewProduct.id}`}
                onClick={() => setQuickViewProduct(null)}
                className="block text-center text-sm text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
              >
                View full details →
              </Link>
            </div>

            {/* Trust Bullets */}
            <div className="flex flex-col gap-2 text-xs text-slate-600 border-t border-white/5 pt-4">
              {[
                { icon: Truck, label: 'Free express delivery across UAE on orders above AED 150', color: 'text-cyan-500' },
                { icon: ShieldCheck, label: 'Official UAE warranty & 100% genuine products', color: 'text-violet-400' },
                { icon: RotateCcw, label: '14-day hassle-free return policy', color: 'text-emerald-400' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className={`w-3.5 h-3.5 ${color} shrink-0`} />
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
