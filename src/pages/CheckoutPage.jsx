import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { useAuth } from '../context/AuthContext';
import { 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  CreditCard, 
  Truck, 
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { formatPrice } from '../utils/formatters';

const UAE_EMIRATES = [
  'Dubai',
  'Abu Dhabi',
  'Sharjah',
  'Ajman',
  'Ras Al Khaimah',
  'Fujairah',
  'Umm Al Quwain'
];

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, cartSubtotal, clearCart } = useShop();
  const { user, placeOrder } = useAuth();

  const [step, setStep] = useState(1);

  // Address State
  const [address, setAddress] = useState({
    name: user?.name || '',
    street: user?.addresses?.[0]?.street || 'Sheikh Zayed Road, Downtown',
    city: user?.addresses?.[0]?.city || 'Dubai',
    state: user?.addresses?.[0]?.state || 'Dubai',
    pincode: user?.addresses?.[0]?.pincode || '00000',
    phone: user?.phone || '+971 50 123 4567'
  });

  // Delivery Method
  const [deliveryMethod, setDeliveryMethod] = useState('express'); // 'standard' | 'express'
  
  // Payment Option
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'applepay' | 'tabby' | 'cod'

  // Order Confirmed State
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const shippingFee = deliveryMethod === 'express' ? 25 : 0;
  const totalAmount = cartSubtotal + shippingFee;

  const handlePlaceOrder = () => {
    const newOrder = placeOrder({
      items: cart,
      totalAmount,
      paymentMethod: paymentMethod.toUpperCase(),
      address
    });
    setConfirmedOrder(newOrder);
    clearCart();
    setStep(5);
  };

  if (cart.length === 0 && !confirmedOrder) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-8 bg-slate-50 dark:bg-[#090d16]">
        <div className="max-w-md mx-auto space-y-4">
          <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">No Items to Checkout</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Your shopping cart is currently empty.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm shadow-md transition-all"
          >
            Explore Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step Progress Tracker */}
        <div className="mb-10">
          <div className="flex items-center justify-between max-w-2xl mx-auto text-xs font-semibold">
            {[
              { id: 1, name: 'Account' },
              { id: 2, name: 'Shipping' },
              { id: 3, name: 'Delivery' },
              { id: 4, name: 'Payment' }
            ].map((s) => (
              <div key={s.id} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= s.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400'
                  }`}
                >
                  {step > s.id ? <CheckCircle2 className="w-4 h-4" /> : s.id}
                </div>
                <span className={step >= s.id ? 'text-slate-900 dark:text-white font-medium' : 'text-slate-400 hidden sm:inline'}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Checkout Main Content */}
        {step < 5 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Form Steps Left */}
            <div className="lg:col-span-8 bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-sm">
              
              {/* Step 1: Account Choice */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">1. Account Information</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Review your contact details before proceeding to shipping.</p>
                  </div>
                  
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{user?.name || 'Guest User'}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{user?.email || 'contact@example.com'}</p>
                    </div>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                      Verified
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setStep(2)}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    Continue to Shipping Address <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Step 2: Shipping Address */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" /> 2. Shipping Address
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Where would you like us to deliver your order?</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1.5">Full Name</label>
                      <input
                        type="text"
                        value={address.name}
                        onChange={(e) => setAddress({ ...address, name: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                        placeholder="e.g. Alex Morgan"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1.5">Phone Number</label>
                      <input
                        type="text"
                        value={address.phone}
                        onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                        placeholder="+971 50 123 4567"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1.5">Street Address / Villa / Apartment</label>
                      <input
                        type="text"
                        value={address.street}
                        onChange={(e) => setAddress({ ...address, street: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                        placeholder="Building name, Street, Apartment or Villa number"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1.5">City / District</label>
                      <input
                        type="text"
                        value={address.city}
                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                        placeholder="e.g. Downtown Dubai, Business Bay, Marina"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1.5">Emirate</label>
                      <select
                        value={address.state}
                        onChange={(e) => setAddress({ ...address, state: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                      >
                        {UAE_EMIRATES.map((em) => (
                          <option key={em} value={em}>{em}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1.5">Makani No. / PO Box</label>
                      <input
                        type="text"
                        value={address.pincode}
                        onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                        placeholder="e.g. 12345 67890 or 00000"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold text-sm transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      Continue to Delivery <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Delivery Options */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                      <Truck className="w-5 h-5 text-blue-600 dark:text-blue-400" /> 3. Select Delivery Speed
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Choose how fast you want your tech products to arrive.</p>
                  </div>

                  <div className="space-y-3">
                    <label
                      onClick={() => setDeliveryMethod('express')}
                      className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                        deliveryMethod === 'express'
                          ? 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-600'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <div>
                        <p className="font-semibold text-sm text-slate-900 dark:text-white">Priority Express Shipping</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Same-day delivery in Dubai · Next-day across other Emirates</p>
                      </div>
                      <span className="font-bold text-sm text-blue-600 dark:text-blue-400">AED 25</span>
                    </label>

                    <label
                      onClick={() => setDeliveryMethod('standard')}
                      className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                        deliveryMethod === 'standard'
                          ? 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-600'
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <div>
                        <p className="font-semibold text-sm text-slate-900 dark:text-white">Standard UAE Delivery</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Delivered in 2-3 business days across all 7 Emirates</p>
                      </div>
                      <span className="font-bold text-sm text-emerald-600 dark:text-emerald-400">FREE</span>
                    </label>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold text-sm transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      Proceed to Payment <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Payment Option */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" /> 4. Payment Method
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Select your preferred UAE payment method.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'card', name: 'Credit or Debit Card', desc: 'Visa, Mastercard & American Express' },
                      { id: 'applepay', name: 'Apple Pay', desc: 'Instant one-touch secure checkout' },
                      { id: 'tabby', name: 'Tabby (Pay in 4)', desc: 'Split into 4 interest-free installments' },
                      { id: 'cod', name: 'Cash on Delivery', desc: 'Pay upon delivery across UAE' }
                    ].map((pm) => (
                      <button
                        key={pm.id}
                        type="button"
                        onClick={() => setPaymentMethod(pm.id)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          paymentMethod === pm.id
                            ? 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-600 shadow-sm'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                        }`}
                      >
                        <p className="font-semibold text-sm text-slate-900 dark:text-white">{pm.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{pm.desc}</p>
                      </button>
                    ))}
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300">
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Delivering to:</p>
                    <p>{address.name} — {address.street}, {address.city}, {address.state} - {address.pincode}</p>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Phone: {address.phone}</p>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => setStep(3)}
                      className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      Place Order ({formatPrice(totalAmount)}) <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Order Items Preview Right */}
            <div className="lg:col-span-4">
              <div className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-3xl p-6 shadow-sm space-y-4 sticky top-28">
                <h4 className="font-heading font-semibold text-base text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3">
                  Order Summary ({cart.length})
                </h4>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 text-xs">
                      <img src={item.image} alt="" className="w-10 h-10 object-contain bg-slate-50 dark:bg-slate-900 rounded-lg p-1 border border-slate-200 dark:border-slate-700" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-900 dark:text-white truncate">{item.name}</p>
                        <p className="text-slate-500 dark:text-slate-400">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Subtotal:</span>
                    <span className="font-medium text-slate-900 dark:text-white">{formatPrice(cartSubtotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 dark:text-slate-400">
                    <span>Shipping:</span>
                    <span className={shippingFee === 0 ? 'text-emerald-600 font-semibold' : 'font-medium text-slate-900 dark:text-white'}>
                      {shippingFee === 0 ? 'Free' : formatPrice(shippingFee)}
                    </span>
                  </div>
                  <div className="flex justify-between font-heading font-bold text-base text-slate-900 dark:text-white pt-2 border-t border-slate-100 dark:border-slate-700">
                    <span>Total:</span>
                    <span>{formatPrice(totalAmount)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>256-bit SSL Secure Checkout</span>
                </div>
              </div>
            </div>

          </div>
        ) : (
          /* Step 5: Order Placed Celebration */
          <div className="max-w-md mx-auto bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 text-center space-y-6 shadow-xl">
            <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">Order Confirmed</h2>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-mono font-semibold">Order ID: #{confirmedOrder?.id}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Thank you for your order! We'll send shipping updates directly to your registered contact details.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2">
              <p className="font-semibold text-slate-900 dark:text-white">Delivery Address:</p>
              <p className="text-slate-600 dark:text-slate-400">{confirmedOrder?.shippingAddress}</p>
              <p className="font-bold text-slate-900 dark:text-white pt-1">Total Paid: {formatPrice(confirmedOrder?.totalAmount)}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate('/orders')}
                className="flex-1 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600 rounded-xl text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors"
              >
                Track Order
              </button>
              <button
                onClick={() => navigate('/shop')}
                className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold text-xs shadow-md transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
