import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  // Generate small particles like in hero section
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 3,
    opacity: Math.random() * 0.8 + 0.2,
  }));

  // Generate moving stars
  const movingStars = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    moveX: (Math.random() - 0.5) * 100,
    moveY: (Math.random() - 0.5) * 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.9 + 0.1,
  }));

  // Generate blinking stars
  const blinkingStars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.7 + 0.3,
  }));

  // Generate twinkling stars
  const twinklingStars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.8,
    duration: Math.random() * 2.5 + 1.5,
    delay: Math.random() * 3,
  }));

  const educationData = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Government Engineering College, Ajmer',
      duration: '2022 - 2026',
      location: 'Ajmer, Rajasthan',
      status: 'Currently Pursuing',
      description: 'Specializing in AI/ML, Data Structures, Algorithms, and Software Development. Active participant in coding competitions and technical events.',
      highlights: [
        'Focus on Artificial Intelligence and Machine Learning',
        'Strong foundation in Data Structures and Algorithms',
        'Hands-on experience with Python and C programming',
        'Active in college technical societies and events'
      ],
      color: 'from-blue-500 to-blue-600',
      icon: GraduationCap
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'Meera Senior Secondary School, Ajmer',
      duration: '2020 - 2021',
      location: 'Ajmer, Rajasthan',
      status: 'Completed',
      description: 'Completed higher secondary education with focus on Science stream (PCM - Physics, Chemistry, Mathematics).',
      highlights: [
        'Science stream with PCM subjects',
        'Strong mathematical foundation',
        'Developed analytical thinking skills',
        'Prepared foundation for engineering studies'
      ],
      color: 'from-green-500 to-green-600',
      icon: BookOpen
    },
    {
      degree: 'Secondary Education (10th)',
      institution: 'URM School, Pushkar',
      duration: '2018 - 2019',
      location: 'Pushkar, Rajasthan',
      status: 'Completed',
      description: 'Completed secondary education with excellent academic performance and developed interest in mathematics and science.',
      highlights: [
        'Strong academic performance',
        'Developed interest in STEM subjects',
        'Participated in school competitions',
        'Built foundation for higher studies'
      ],
      color: 'from-purple-500 to-purple-600',
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Universe Galaxy Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Ambient Light Effects like preloader */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/6 right-1/3 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>

        {/* Small Moving Particles like preloader */}
        {particles.map((particle) => (
          <div
            key={`particle-${particle.id}`}
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
            key={`moving-star-${star.id}`}
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
            key={`blinking-star-${star.id}`}
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

        {/* Twinkling Stars with Cross Effect */}
        {twinklingStars.map((star) => (
          <div
            key={`twinkling-star-${star.id}`}
            className="absolute animate-star-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          >
            <div 
              className="bg-white rounded-full relative"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `0 0 ${star.size * 6}px rgba(255, 255, 255, 0.9)`,
              }}
            >
              {/* Cross effect */}
              <div 
                className="absolute bg-white opacity-80"
                style={{
                  left: '50%',
                  top: '50%',
                  width: `${star.size * 4}px`,
                  height: '1px',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.6)`,
                }}
              />
              <div 
                className="absolute bg-white opacity-80"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '1px',
                  height: `${star.size * 4}px`,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.6)`,
                }}
              />
            </div>
          </div>
        ))}

        {/* Shooting Stars */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`shooting-star-${i}`}
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

        {/* Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="constellation-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
          
          <line x1="15%" y1="25%" x2="30%" y2="20%" stroke="url(#constellation-gradient)" strokeWidth="1" className="animate-constellation-draw" />
          <line x1="30%" y1="20%" x2="40%" y2="35%" stroke="url(#constellation-gradient)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '0.5s' }} />
          <line x1="40%" y1="35%" x2="25%" y2="45%" stroke="url(#constellation-gradient)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '1s' }} />
          
          <line x1="65%" y1="15%" x2="80%" y2="30%" stroke="url(#constellation-gradient)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '1.5s' }} />
          <line x1="80%" y1="30%" x2="85%" y2="45%" stroke="url(#constellation-gradient)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '2s' }} />
          <line x1="85%" y1="45%" x2="70%" y2="55%" stroke="url(#constellation-gradient)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '2.5s' }} />
        </svg>

        {/* Cosmic Dust */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute opacity-40 animate-cosmic-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <div 
              className="bg-white rounded-full"
              style={{
                width: `${Math.random() * 1.5 + 0.5}px`,
                height: `${Math.random() * 1.5 + 0.5}px`,
                boxShadow: `0 0 ${Math.random() * 3 + 1}px rgba(255, 255, 255, 0.3)`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My academic journey and educational milestones
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl">
                  {/* Academic symbols */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute academic-symbol"
                      style={{
                        left: `${5 + (i * 12)}%`,
                        top: `${10 + (i * 8)}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    >
                      <div className={`hexagon bg-gradient-to-br ${edu.color} opacity-15`}></div>
                    </div>
                  ))}
                  
                  {/* Knowledge particles */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={`knowledge-${i}`}
                      className="absolute knowledge-particle"
                      style={{
                        right: `${Math.random() * 100}%`,
                        bottom: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} opacity-25`}></div>
                    </div>
                  ))}

                  {/* Education wave */}
                  <div className="absolute inset-0 education-wave">
                    <div className={`w-full h-full bg-gradient-to-r ${edu.color} opacity-5`}></div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-r ${edu.color} text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <edu.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-500">
                        {edu.degree}
                      </h3>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${edu.color} text-white mt-2 md:mt-0`}>
                        {edu.status}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-300">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid md:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="flex items-center text-gray-300 bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors duration-300"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mr-3 flex-shrink-0`}></div>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;