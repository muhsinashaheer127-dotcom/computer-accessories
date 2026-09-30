import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Truck } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const FOOTER_LINKS = {
  'BURAQA STAR': [
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Careers', href: '/about' },
  ],
  Shop: [
    { label: 'Laptops', href: '/shop', cat: 'laptops' },
    { label: 'Monitors', href: '/shop', cat: 'monitors' },
    { label: 'Keyboards', href: '/shop', cat: 'keyboards' },
    { label: 'Components', href: '/shop', cat: 'components' },
    { label: 'Deals', href: '/shop', cat: 'all' },
  ],
  Support: [
    { label: 'Help Center', href: '/contact' },
    { label: 'Shipping Policy', href: '/contact' },
    { label: 'Returns & Refunds', href: '/contact' },
    { label: 'Warranty', href: '/contact' },
    { label: 'FAQs', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/' },
    { label: 'Terms & Conditions', href: '/' },
    { label: 'Refund Policy', href: '/' },
  ],
};

const SOCIAL = [
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: TwitterIcon, href: '#', label: 'Twitter / X' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
];

export const Footer = () => {
  const { setSelectedCategory } = useShop();

  return (
    <footer className="bg-slate-100 dark:bg-[#020408] border-t border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">

          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 space-y-5">
            <Link to="/" className="inline-flex flex-col gap-2 group">
              <img
                src="/logo-buraqa-dark.png"
                alt="BURAQA STAR COMPUTER TRADING LLC"
                className="h-12 w-auto object-contain self-start drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all duration-300"
              />
              <div>
                <span className="font-display font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                  BURAQA <span className="text-cyan-600 dark:text-cyan-400">STAR</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase block mt-0.5">
                  Computer Trading LLC
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              BURAQA STAR COMPUTER TRADING LLC is your trusted destination for premium computer accessories, peripherals, and high-performance computing setups across the UAE.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5 bg-white dark:bg-white/3 border border-slate-200 dark:border-white/5 px-3 py-1.5 rounded-lg">
                <Shield className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" /> UAE Official Warranty
              </div>
              <div className="flex items-center gap-1.5 bg-white dark:bg-white/3 border border-slate-200 dark:border-white/5 px-3 py-1.5 rounded-lg">
                <Truck className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400" /> Fast Delivery Across UAE
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  className="w-9 h-9 rounded-xl bg-white dark:bg-white/3 border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 hover:text-cyan-500 dark:hover:text-cyan-400 flex items-center justify-center text-slate-500 transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="font-display font-semibold text-slate-900 dark:text-white text-sm tracking-wide">{title}</h3>
              <ul className="space-y-2.5">
                {links.map(({ label, href, cat }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      onClick={cat ? () => setSelectedCategory(cat) : undefined}
                      className="text-sm text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BURAQA STAR COMPUTER TRADING LLC (Dubai, UAE). All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-slate-400 dark:text-slate-700">Accepted Payments:</span>
            {['Visa', 'Mastercard', 'Apple Pay', 'Tabby', 'Cash on Delivery'].map((pm) => (
              <span key={pm} className="px-2 py-1 bg-white dark:bg-white/3 border border-slate-200 dark:border-white/5 rounded-md font-medium text-slate-500 text-[11px]">{pm}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
