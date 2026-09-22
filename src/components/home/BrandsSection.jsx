import React from 'react';
import { BRANDS } from '../../data/products';

const BRAND_LOGOS = {
  asus: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/320px-ASUS_Logo.svg.png',
  msi: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/MSI_Logo.svg/320px-MSI_Logo.svg.png',
  lenovo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/320px-Lenovo_logo_2015.svg.png',
  hp: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/240px-HP_logo_2012.svg.png',
  dell: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/320px-Dell_Logo.png',
  logitech: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Logitech_logo_2015.svg/320px-Logitech_logo_2015.svg.png',
  razer: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Razer_logo.svg/320px-Razer_logo.svg.png',
  corsair: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Corsair_logo.svg/320px-Corsair_logo.svg.png',
  samsung: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/320px-Samsung_Logo.svg.png',
  nvidia: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/320px-Nvidia_logo.svg.png',
};

export const BrandsSection = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-[#0d1220] border-t border-b border-slate-100 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 space-y-2">
          <p className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">Partners</p>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            Shop by Brand
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
            Authentic products from the world's most trusted technology brands.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-3">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-200 dark:hover:border-blue-700/60 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
            >
              <div className="h-8 flex items-center justify-center">
                <span className="font-heading font-bold text-sm text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center leading-tight">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
