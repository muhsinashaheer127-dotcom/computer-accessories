import React from 'react';

export const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-30">
          <defs>
            <pattern id="techGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-500/20" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />

      {/* Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <line x1="0%" y1="20%" x2="30%" y2="20%" stroke="currentColor" strokeWidth="1" className="text-cyan-500/30" />
        <line x1="30%" y1="20%" x2="30%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-cyan-500/30" />
        <line x1="30%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-cyan-500/30" />

        <line x1="70%" y1="30%" x2="70%" y2="60%" stroke="currentColor" strokeWidth="1" className="text-violet-500/30" />
        <line x1="70%" y1="60%" x2="90%" y2="60%" stroke="currentColor" strokeWidth="1" className="text-violet-500/30" />
        <line x1="90%" y1="60%" x2="90%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-violet-500/30" />

        <line x1="10%" y1="70%" x2="40%" y2="70%" stroke="currentColor" strokeWidth="1" className="text-cyan-500/30" />
        <line x1="40%" y1="70%" x2="40%" y2="90%" stroke="currentColor" strokeWidth="1" className="text-cyan-500/30" />
      </svg>

      {/* Scanning Line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-[scanHorizontal_8s_linear_infinite]" />
      </div>
    </div>
  );
};
