import React from 'react';

export const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
      {/* Animated Grid - Optimized with CSS */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating Particles - Reduced from 20 to 8 for better performance */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/20 dark:bg-cyan-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Circles - Simplified */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/3 dark:bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/3 dark:bg-violet-500/5 rounded-full blur-3xl" />
    </div>
  );
};
