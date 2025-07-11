import React, { useRef, useEffect, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const educationData = [
    {
      degree: 'B.Tech (Information Technology)',
      institution: 'Government Engineering College',
      year: '2022 - 2026',
      location: 'Ajmer, Rajasthan',
      icon: GraduationCap,
      color: 'from-blue-500 to-teal-500',
      cubeColor: 'from-blue-400 to-teal-400',
      glowColor: 'shadow-blue-500/20',
      status: 'current',
      description: 'Currently pursuing with a focus on software development, data structures, and emerging technologies.'
    },
    {
      degree: 'Senior Secondary (12th)',
      institution: 'Meera Senior Secondary School',
      year: '2020 - 2021',
      location: 'Ajmer, Rajasthan',
      icon: GraduationCap,
      color: 'from-orange-500 to-pink-500',
      cubeColor: 'from-orange-400 to-pink-400',
      glowColor: 'shadow-orange-500/20',
      status: 'completed',
      description: 'Completed with distinction in Science stream (Mathematics, Physics, Chemistry).'
    },
    {
      degree: 'Secondary (10th)',
      institution: 'URM School',
      year: '2018 - 2019',
      location: 'Pushkar, Ajmer',
      icon: GraduationCap,
      color: 'from-purple-500 to-blue-500',
      cubeColor: 'from-purple-400 to-blue-400',
      glowColor: 'shadow-purple-500/20',
      status: 'completed',
      description: 'Completed with excellent academic performance and developed early interest in computer science.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-slate-900 relative overflow-hidden">
      {/* 3D Animated Falling Background */}
      <div ref={sectionRef} className="absolute inset-0 pointer-events-none z-0">
        {/* Enhanced Falling Academic Icons */}
        {[
          { type: 'icon', svg: <GraduationCap className="w-10 h-10 text-blue-500 opacity-30" /> },
          { type: 'emoji', svg: <span className="text-3xl">📜</span> },
          { type: 'emoji', svg: <span className="text-3xl">📚</span> },
          { type: 'emoji', svg: <span className="text-3xl">🎓</span> },
          { type: 'emoji', svg: <span className="text-3xl">✏️</span> },
          { type: 'emoji', svg: <span className="text-3xl">📝</span> },
          { type: 'emoji', svg: <span className="text-3xl">📖</span> },
          { type: 'emoji', svg: <span className="text-3xl">📋</span> },
          { type: 'emoji', svg: <span className="text-3xl">🎯</span> },
          { type: 'emoji', svg: <span className="text-3xl">💡</span> },
          { type: 'svg', svg: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="12" width="24" height="16" rx="4" fill="#fbbf24" opacity="0.18"/><rect x="14" y="18" width="12" height="4" rx="2" fill="#6366f1" opacity="0.18"/></svg> },
          { type: 'svg', svg: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" fill="#14b8a6" opacity="0.13"/><rect x="14" y="14" width="12" height="12" rx="3" fill="#f472b6" opacity="0.18"/></svg> },
        ].map((item, i) => (
          <div
            key={`edu-fall-enhanced-${i}`}
            className="absolute animate-fall"
            style={{
              left: `${8 + i * 8 + Math.random() * 15}%`,
              top: `-${40 + i * 25}px`,
              animationDelay: `${i * 0.5}s`,
              zIndex: 0,
              animationDuration: `${2.5 + i * 0.6}s`,
              '--fall-distance': `${sectionHeight + 120}px`,
            } as React.CSSProperties}
          >
            {item.svg}
          </div>
        ))}
        {/* Falling Glowing Particles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`edu-fall-particle-${i}`}
            className="absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${60 + i * 20}px`,
              animationDelay: `${i * 0.4}s`,
              zIndex: 0,
              animationDuration: `${2.5 + i * 0.5}s`,
              '--fall-distance': `${sectionHeight + 80}px`,
            } as React.CSSProperties}
          >
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 opacity-20 blur"></div>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My educational journey and academic achievements.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-teal-600 rounded-full"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {/* Timeline Dot with Pulse Effect */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full shadow-lg z-10 animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Content Card with 3D Effects */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div 
                      className={`group bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl ${item.glowColor} transform hover:scale-105 hover:rotate-1 transition-all duration-500 p-6 border border-gray-100 dark:border-gray-700 overflow-hidden`}
                      style={{ perspective: '1000px' }}
                    >
                      {/* 3D Animated Background */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                        {/* Floating books and academic symbols */}
                        {['📚', '✏️', '📝', '🎓', '💡', '🔬'].map((symbol, symbolIndex) => (
                          <div
                            key={symbolIndex}
                            className="absolute academic-symbol"
                            style={{
                              left: `${Math.random() * 80 + 10}%`,
                              top: `${Math.random() * 80 + 10}%`,
                              animationDelay: `${symbolIndex * 0.3}s`,
                            }}
                          >
                            <span className="text-2xl opacity-20 group-hover:animate-bounce">
                              {symbol}
                            </span>
                          </div>
                        ))}
                        
                        {/* Rotating hexagons */}
                        {[...Array(5)].map((_, hexIndex) => (
                          <div
                            key={hexIndex}
                            className="absolute hexagon-container"
                            style={{
                              left: `${15 + (hexIndex * 18)}%`,
                              top: `${10 + (hexIndex * 15)}%`,
                              animationDelay: `${hexIndex * 0.4}s`,
                            }}
                          >
                            <div className={`hexagon bg-gradient-to-br ${item.cubeColor} opacity-15`}></div>
                          </div>
                        ))}

                        {/* Knowledge particles */}
                        {[...Array(10)].map((_, particleIndex) => (
                          <div
                            key={`particle-${particleIndex}`}
                            className="absolute knowledge-particle"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              animationDelay: `${particleIndex * 0.2}s`,
                            }}
                          >
                            <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${item.cubeColor} opacity-40`}></div>
                          </div>
                        ))}

                        {/* Gradient wave overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.cubeColor} opacity-5 education-wave`}></div>
                      </div>

                      {/* Icon and Degree */}
                      <div className="flex items-center space-x-3 mb-2">
                        {item.status && (
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold mb-0.5 ${item.status === 'current' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'}`}>{item.status === 'current' ? 'Running' : 'Completed'}</span>
                        )}
                        <span className="text-2xl text-blue-600 dark:text-teal-400">
                          <item.icon />
                        </span>
                        <span className="text-lg font-bold text-gray-900 dark:text-white">{item.degree}</span>
                      </div>
                      <div className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-1">{item.institution}</div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-2">
                        <Calendar className="w-4 h-4 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500" />
                        <span>{item.year}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <MapPin className="w-4 h-4 group-hover:scale-125 transition-all duration-500" />
                        <span>{item.location}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-1">{item.description}</p>
                    </div>
                  </div>

                  {/* Empty Space for Opposite Side */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;