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
    <section className="py-20 bg-slate-50 dark:bg-[#050a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="space-y-3">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Stay Updated
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              Get the latest products, exclusive offers and technology updates delivered to your inbox
            </p>
          </div>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-3 pl-10 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold rounded-xl transition-all text-sm"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 py-3 px-6 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-xl max-w-md mx-auto">
              <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">You're subscribed!</span>
            </div>
          )}

          <p className="text-xs text-slate-500 dark:text-slate-400">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
