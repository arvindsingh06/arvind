import React, { useEffect, useState } from 'react';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onComplete]);

  // Generate particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900 transition-opacity duration-500 ${
      isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out infinite ${particle.delay}s alternate`,
            }}
          />
        ))}
      </div>

      {/* Ambient Light Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* ASR Logo with Glow Effect */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 animate-spin-slow opacity-75 blur-sm"></div>
            {/* Inner Logo Container */}
            <div className="relative w-full h-full bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-700 shadow-2xl">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                ASR
              </span>
            </div>
            {/* Rotating Border */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 animate-spin-slow opacity-50" 
                 style={{ 
                   background: 'conic-gradient(from 0deg, #3B82F6, #14B8A6, #F97316, #3B82F6)',
                   WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), white calc(100% - 2px))',
                   mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), white calc(100% - 2px))'
                 }}>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white animate-fade-in-up">
            Loading Arvind's Portfolio...
          </h2>
          {/* Progress Bar */}
          <div className="w-64 mx-auto">
            <div className="w-full bg-slate-700 rounded-full h-1 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 transition-all duration-300 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-slate-400 text-sm mt-2">{progress}%</p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-20 -left-20 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute -top-10 -right-16 w-3 h-3 bg-teal-400 rounded-full animate-bounce delay-500 opacity-60"></div>
        <div className="absolute -bottom-16 -left-12 w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-1000 opacity-60"></div>
        <div className="absolute -bottom-20 -right-20 w-5 h-5 bg-blue-400 rounded-full animate-bounce delay-1500 opacity-60"></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;