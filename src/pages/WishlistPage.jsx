import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

export const WishlistPage = () => {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6 py-16">
          <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl flex items-center justify-center mx-auto text-slate-400">
            <Heart className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">Your Wishlist is Empty</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Save your favorite items here while browsing so you can easily review or purchase them later.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-all"
          >
            Explore Tech Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h1 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              My Wishlist
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {wishlist.length} saved product{wishlist.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-blue-200 dark:hover:border-blue-700/60 rounded-2xl p-4 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-700/30 p-3 mb-3 flex items-center justify-center">
                  <button
                    onClick={() => toggleWishlist(item)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-white dark:bg-slate-800 text-slate-400 hover:text-red-500 z-10 shadow-sm border border-slate-200 dark:border-slate-700 transition-colors"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                </div>

                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide block mb-1">
                  {item.brand}
                </span>

                <Link to={`/product/${item.id}`}>
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 line-clamp-2 mb-2 transition-colors">
                    {item.name}
                  </h3>
                </Link>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 mt-3 space-y-3">
                <div className="font-heading font-bold text-base text-slate-900 dark:text-white">
                  {formatPrice(item.price)}
                </div>

                <button
                  onClick={() => {
                    addToCart(item);
                    toggleWishlist(item);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-sm"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
