import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { useToast } from '../../context/ToastContext';
import { RatingStars } from './RatingStars';
import { formatPrice } from '../../utils/formatters';

export const ProductCard = ({ product, showDealBadge }) => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const wishlisted = isInWishlist(product.id);

  const hasDiscount = product.discount > 0 && product.originalPrice;

  return (
    <div
      className="group relative flex flex-col bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-2xl overflow-hidden hover:border-blue-200 dark:hover:border-blue-700/60 hover:shadow-lg dark:hover:shadow-slate-900/60 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-700/30 aspect-[4/3]">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {hasDiscount && (
            <span className="px-2 py-0.5 bg-blue-600 text-white text-[11px] font-semibold rounded-md">
              -{product.discount}%
            </span>
          )}
          {showDealBadge && (
            <span className="px-2 py-0.5 bg-red-500 text-white text-[11px] font-semibold rounded-md">
              DEAL
            </span>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <span className="px-2 py-0.5 bg-amber-500 text-white text-[11px] font-semibold rounded-md">
              Low Stock
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(product)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
            wishlisted
              ? 'bg-red-50 dark:bg-red-900/30 text-red-500 border border-red-200 dark:border-red-700/60'
              : 'bg-white dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-600 hover:text-red-500 hover:border-red-200 opacity-0 group-hover:opacity-100'
          }`}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-red-500' : ''}`} />
        </button>

        {/* Quick View Button */}
        {isHovered && (
          <button
            onClick={() => setQuickViewProduct(product)}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-md hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            <Eye className="w-3.5 h-3.5" /> Quick View
          </button>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 space-y-3">
        <div className="space-y-1">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">{product.brand}</p>
          <Link to={`/product/${product.id}`} className="group/title">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover/title:text-blue-600 dark:group-hover/title:text-blue-400 transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <RatingStars rating={product.rating} size="xs" />
          <span className="text-xs text-slate-500 dark:text-slate-400">({product.reviews.toLocaleString()})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-base font-bold text-slate-900 dark:text-white">
            {formatPrice(product.price)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-slate-400 dark:text-slate-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="text-xs">
          {product.stock > 5 ? (
            <span className="text-green-600 dark:text-green-400 font-medium">● In Stock</span>
          ) : product.stock > 0 ? (
            <span className="text-amber-600 dark:text-amber-400 font-medium">● Only {product.stock} left</span>
          ) : (
            <span className="text-red-500 font-medium">● Out of Stock</span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart(product, 1)}
          disabled={product.stock === 0}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 dark:disabled:bg-slate-700 text-white disabled:text-slate-400 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
        >
          <ShoppingBag className="w-4 h-4" />
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};
