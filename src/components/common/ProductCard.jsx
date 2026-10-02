import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { useToast } from '../../context/ToastContext';
import { RatingStars } from './RatingStars';
import { formatPrice } from '../../utils/formatters';

export const ProductCard = ({ product, showDealBadge }) => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();
  const [isHovered, setIsHovered] = React.useState(false);
  const wishlisted = isInWishlist(product.id);

  const hasDiscount = product.discount > 0 && product.originalPrice;

  return (
    <div
      className="group relative flex flex-col bg-white dark:bg-[#070d18] border border-slate-200 dark:border-white/5 hover:border-cyan-500/40 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Image Container */}
      <div className="relative overflow-hidden bg-slate-100 dark:bg-[#050a10] aspect-[4/3]">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          />
        </Link>

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-[#070d18]/40 via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {hasDiscount && (
            <span className="px-2 py-0.5 bg-cyan-500 text-slate-950 text-[11px] font-bold rounded-md shadow-sm shadow-cyan-500/30">
              -{product.discount}%
            </span>
          )}
          {showDealBadge && (
            <span className="px-2 py-0.5 bg-violet-600 text-white text-[11px] font-semibold rounded-md shadow-sm shadow-violet-500/30">
              DEAL
            </span>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <span className="px-2 py-0.5 bg-amber-500/80 text-slate-950 text-[11px] font-semibold rounded-md">
              Low Stock
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(product)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
            wishlisted
              ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 hover:scale-110'
              : 'bg-slate-900/80 dark:bg-[#050a10]/80 text-slate-500 border border-slate-200 dark:border-white/10 hover:text-red-400 hover:border-red-500/30 hover:bg-slate-900/90 dark:hover:bg-[#050a10]/90 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 hover:scale-110'
          }`}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-red-400' : ''}`} />
        </button>

        {/* Quick View Button */}
        {isHovered && (
          <button
            onClick={() => setQuickViewProduct(product)}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-slate-900/95 dark:bg-[#050a10]/95 border border-cyan-500/30 rounded-xl text-xs font-semibold text-cyan-300 shadow-lg shadow-cyan-500/20 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-400 hover:shadow-cyan-500/40 transition-all duration-300 backdrop-blur-sm hover:scale-105"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 space-y-3">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-500/80 uppercase tracking-widest">{product.brand}</p>
          <Link to={`/product/${product.id}`} className="group/title">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug line-clamp-2 group-hover/title:text-cyan-600 dark:group-hover/title:text-cyan-300 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <RatingStars rating={product.rating} size="xs" />
          <span className="text-xs text-slate-500 dark:text-slate-600">({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-base font-bold text-slate-900 dark:text-white font-display">
            {formatPrice(product.price)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-slate-500 dark:text-slate-600 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="text-xs">
          {product.stock > 5 ? (
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">● In Stock</span>
          ) : product.stock > 0 ? (
            <span className="text-amber-600 dark:text-amber-400 font-medium">● Only {product.stock} left</span>
          ) : (
            <span className="text-red-600 dark:text-red-400 font-medium">● Out of Stock</span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product, 1)}
          disabled={product.stock === 0}
          className="relative w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-100 dark:disabled:bg-white/5 text-slate-950 font-bold disabled:text-slate-400 dark:disabled:text-slate-600 text-sm transition-all duration-300 disabled:cursor-not-allowed shadow-md hover:shadow-xl hover:shadow-cyan-500/30 overflow-hidden group/btn hover:-translate-y-0.5 hover:scale-[1.02]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 disabled:hidden" />
          <ShoppingBag className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};
