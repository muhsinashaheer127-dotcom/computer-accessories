import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { RatingStars } from '../components/common/RatingStars';
import { ProductCard } from '../components/common/ProductCard';
import { 
  ShoppingBag, 
  Heart, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  ChevronRight, 
  Check, 
  Zap, 
  Minus,
  Plus,
  Award
} from 'lucide-react';
import { formatPrice } from '../utils/formatters';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, toggleWishlist, isInWishlist } = useShop();

  const product = products.find((p) => p.id === id) || products[0];
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specs');

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
        <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-2">Product Not Found</h2>
        <Link to="/shop" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
          Back to Catalog →
        </Link>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);
  const images = product.additionalImages?.length ? product.additionalImages : [product.image];

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8 overflow-hidden">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link to="/shop" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="capitalize">{product.category}</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-slate-900 dark:text-slate-200 font-medium truncate">{product.name}</span>
        </nav>

        {/* Product Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Left: Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] w-full rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 p-8 flex items-center justify-center overflow-hidden shadow-sm">
              {product.discount > 0 && (
                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg shadow-sm">
                  -{product.discount}% OFF
                </span>
              )}
              <img
                src={selectedImage || product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border p-2 flex items-center justify-center shrink-0 transition-all ${
                      (selectedImage || product.image) === img
                        ? 'border-amber-500 ring-2 ring-amber-500/30'
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <img src={img} alt="" className="max-h-full max-w-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  {product.brand}
                </span>
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/50">
                  <Check className="w-3.5 h-3.5" /> In Stock ({product.stock} units)
                </span>
              </div>

              <h1 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-tight">
                {product.name}
              </h1>

              {/* Ratings */}
              <div className="flex items-center gap-2">
                <RatingStars rating={product.rating} reviewsCount={product.reviews} size="md" />
              </div>

              {/* Price Display */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-baseline gap-3">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-slate-400 dark:text-slate-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold ml-auto">
                    Save {formatPrice(product.originalPrice - product.price)}
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity & CTA Buttons */}
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Quantity:</span>
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-slate-900 dark:text-white font-semibold text-sm border-x border-slate-200 dark:border-slate-700">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="py-3 px-6 rounded-xl bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm disabled:opacity-50"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>

                <button
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                  className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Zap className="w-4 h-4" /> Buy Now
                </button>
              </div>

              <button
                onClick={() => toggleWishlist(product)}
                className={`w-full py-2.5 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                  isWishlisted
                    ? 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                {isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
              </button>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-3 pt-3 text-center">
                <div className="p-3 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/60">
                  <Truck className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                  <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 block">UAE Express</span>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/60">
                  <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                  <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 block">UAE Warranty</span>
                </div>
                <div className="p-3 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700/60">
                  <RotateCcw className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                  <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 block">14-Day Return</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Specs & Features Tabs */}
        <div className="mb-16 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-6 border-b border-slate-200 dark:border-slate-700 pb-4 mb-6">
            <button
              onClick={() => setActiveTab('specs')}
              className={`font-semibold text-sm transition-colors relative pb-4 -mb-4 ${
                activeTab === 'specs' 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Technical Specifications
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`font-semibold text-sm transition-colors relative pb-4 -mb-4 ${
                activeTab === 'features' 
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              Key Highlights
            </button>
          </div>

          {activeTab === 'specs' && product.specifications && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div key={key} className="p-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-xl flex justify-between">
                  <span className="font-medium text-slate-500 dark:text-slate-400">{key}:</span>
                  <span className="text-slate-900 dark:text-slate-200 font-semibold text-right">{val}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'features' && product.features && (
            <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-300">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-xl">
                  <Award className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="mb-8">
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Recommendations</p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight mt-1">
                Related Products
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
