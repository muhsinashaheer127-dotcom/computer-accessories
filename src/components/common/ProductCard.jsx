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
      className="group relative flex flex-col bg-white dark:bg-[#0f1629] border border-slate-200 dark:border-white/5 hover:border-cyan-500/40 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Deal Badge */}
      {showDealBadge && hasDiscount && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          -{product.discount}%
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </Link>

        {/* Quick Actions */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={() => toggleWishlist(product.id)}
            className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            title={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={`w-4 h-4 ${wishlisted ? 'fill-red-500 text-red-500' : 'text-slate-600 dark:text-slate-400'}`} />
          </button>
          <button
            onClick={() => setQuickViewProduct(product)}
            className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            title="Quick view"
          >
            <Eye className="w-4 h-4 text-slate-600 dark:text-slate-400" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <Link to={`/product/${product.id}`} className="flex-1">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{product.brand}</p>
          <h3 className="font-semibold text-sm text-slate-900 dark:text-white mb-2 line-clamp-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 mb-2">
            <RatingStars rating={product.rating} size="sm" />
            <span className="text-xs text-slate-500 dark:text-slate-400">({product.reviews})</span>
          </div>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          {hasDiscount ? (
            <>
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                {formatPrice(product.price)}
              </span>
              <span className="text-sm text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            </>
          ) : (
            <span className="font-bold text-lg text-slate-900 dark:text-white">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => {
            addToCart(product);
          }}
          className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
