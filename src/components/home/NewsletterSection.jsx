import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { Mail, ArrowRight, Check } from 'lucide-react';

export const NewsletterSection = () => {
  const { addToast } = useToast();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    addToast('You\'re subscribed to BURAQA STAR updates!', 'success');
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-[#0d1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-[#0d1424] border border-slate-800 dark:border-slate-700/60 p-10 sm:p-16 text-center">

          {/* Subtle bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-blue-950/30 pointer-events-none" />

          <div className="relative max-w-xl mx-auto space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase">Newsletter</p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Stay Updated
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Get the latest products, exclusive offers and technology updates from BURAQA STAR, delivered straight to your inbox.
              </p>
            </div>

            {!subscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 focus:border-amber-500 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl transition-all shadow-md text-sm"
                >
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 py-3 px-6 bg-white/10 border border-green-500/30 rounded-xl max-w-md mx-auto">
                <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-sm font-medium text-slate-200">You're subscribed! Welcome to BURAQA STAR.</span>
              </div>
            )}

            <p className="text-xs text-slate-500">
              No spam. Unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
