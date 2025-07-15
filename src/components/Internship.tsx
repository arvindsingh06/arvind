import React from 'react';
import { Briefcase, User, Award, Calendar, MapPin } from 'lucide-react';

const Internship: React.FC = () => {
  // Generate small particles like in hero section
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 3,
    opacity: Math.random() * 0.6 + 0.2,
  }));

  // Generate moving stars
  const movingStars = Array.from({ length: 70 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    moveX: (Math.random() - 0.5) * 80,
    moveY: (Math.random() - 0.5) * 80,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.7 + 0.2,
  }));

  // Generate blinking stars
  const blinkingStars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  return (
    <section id="internship" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Universe Galaxy Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Ambient Light Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/6 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/4 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Small Moving Particles */}
        {particles.map((particle) => (
          <div
            key={`internship-particle-${particle.id}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-universe-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
            }}
          />
        ))}

        {/* Small Moving Stars */}
        {movingStars.map((star) => (
          <div
            key={`internship-moving-star-${star.id}`}
            className="absolute bg-white rounded-full animate-star-move"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              opacity: star.opacity,
              '--move-x': `${star.moveX}px`,
              '--move-y': `${star.moveY}px`,
              boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, ${star.opacity})`,
            } as React.CSSProperties}
          />
        ))}

        {/* Blinking Stars */}
        {blinkingStars.map((star) => (
          <div
            key={`internship-blinking-star-${star.id}`}
            className="absolute bg-white rounded-full animate-star-blink"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              boxShadow: `0 0 ${star.size * 4}px rgba(255, 255, 255, 0.8)`,
            }}
          />
        ))}

        {/* Shooting Stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`internship-shooting-star-${i}`}
            className="absolute animate-shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 8 + 2}s`,
            }}
          >
            <div className="shooting-star-trail">
              <div className="w-2 h-2 bg-white rounded-full relative">
                <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Internship Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Gaining valuable industry experience and mentorship in AI/ML development.
            </p>
          </div>

          {/* Internship Card */}
          <div className="group relative bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl border border-blue-100 dark:border-blue-800 transform hover:scale-105 transition-all duration-500 overflow-hidden max-w-md mx-auto" style={{ perspective: '1000px' }}>
            {/* 3D Cubes Background Animation */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden z-0">
              {[...Array(4)].map((_, cubeIndex) => (
                <div
                  key={cubeIndex}
                  className="absolute cube-container"
                  style={{
                    left: `${10 + (cubeIndex * 18)}%`,
                    top: `${10 + (cubeIndex * 18)}%`,
                    animationDelay: `${cubeIndex * 0.3}s`,
                    transform: 'translateZ(0)',
                  }}
                >
                  <div className="cube bg-gradient-to-br from-blue-400 to-teal-400 opacity-20">
                    <div className="cube-face cube-front"></div>
                    <div className="cube-face cube-back"></div>
                    <div className="cube-face cube-right"></div>
                    <div className="cube-face cube-left"></div>
                    <div className="cube-face cube-top"></div>
                    <div className="cube-face cube-bottom"></div>
                  </div>
                </div>
              ))}
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-black/10 dark:from-transparent dark:via-black/5 dark:to-white/5"></div>
            </div>
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-white/20 rounded-full">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">AI/ML Intern</h3>
                  <p className="text-blue-100 text-xs">Linux World Pvt. Ltd.</p>
                </div>
              </div>
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                <Award className="w-4 h-4" />
                <span className="font-medium">Current Position</span>
              </div>
            </div>
            {/* Content */}
            <div className="p-4 z-10 relative">
              <div className="space-y-3">
                {/* Company Info */}
                <div className="flex items-start space-x-2">
                  <div className="p-1 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-xs mb-0.5">Company</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">Linux World Pvt. Ltd.</p>
                  </div>
                </div>
                {/* Duration */}
                <div className="flex items-start space-x-2">
                  <div className="p-1 bg-teal-100 dark:bg-teal-900 rounded-lg">
                    <Calendar className="w-4 h-4 text-teal-600 dark:text-teal-400 animate-spin-slow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-xs mb-0.5">Duration</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">1 June to 1 August 2025</p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-start space-x-2">
                  <div className="p-1 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <MapPin className="w-4 h-4 text-orange-600 dark:text-orange-400 animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-xs mb-0.5">Mode</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">Offline</p>
                  </div>
                </div>
                {/* 3D Animated Glowing Particles */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`internship-particle-${i}`}
                      className="absolute animate-pulse"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        animationDelay: `${i * 0.4}s`,
                        zIndex: 0,
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 opacity-30 blur"></div>
                    </div>
                  ))}
                </div>
                {/* Mentor */}
                <div className="flex items-start space-x-2">
                  <div className="p-1 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <User className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-xs mb-0.5">Mentor</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">Vimal Daga Sir</p>
                  </div>
                </div>
                {/* Focus Areas */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-xs mb-1">Focus Areas</h4>
                  <div className="flex flex-wrap gap-1">
                    {['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Python Development'].map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full text-[10px] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Description */}
                <div className="mt-2 p-2 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-xs mb-1">Experience Overview</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">
                    Currently working as an AI/ML Intern at Linux World Pvt. Ltd. under the expert guidance of 
                    Vimal Daga Sir. This internship has provided me with invaluable hands-on experience in 
                    artificial intelligence and machine learning technologies. I'm actively involved in 
                    developing AI solutions, working with various ML algorithms, and contributing to 
                    real-world projects that leverage data science techniques.
                  </p>
                </div>
                {/* Key Achievements */}
                <div className="mt-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-xs mb-1">Key Learning Areas</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {[
                      'Advanced Python Programming',
                      'Machine Learning Algorithms',
                      'Data Analysis & Visualization',
                      'AI Model Development',
                      'Industry Best Practices',
                      'Real-world Project Implementation'
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300 text-[10px]">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;