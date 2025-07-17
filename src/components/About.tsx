import React from 'react';
import { User, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  // Generate small particles like in hero section
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 3,
    opacity: Math.random() * 0.6 + 0.2,
  }));

  // Generate moving stars
  const movingStars = Array.from({ length: 80 }, (_, i) => ({
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
  const blinkingStars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  // Generate twinkling stars
  const twinklingStars = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 3,
    opacity: Math.random() * 0.8 + 0.2,
  }));

  const infoCards = [
    {
      icon: User,
      title: 'Experience',
      description: 'Passionate about AI/ML with hands-on experience in data analysis and Python development.',
      color: 'from-blue-500 to-blue-600',
      cubeColor: 'from-blue-400 to-blue-600',
      glowColor: 'shadow-blue-500/20'
    },
    {
      icon: Target,
      title: 'Strengths',
      description: 'Problem-solving, analytical thinking, and continuous learning mindset.',
      color: 'from-teal-500 to-teal-600',
      cubeColor: 'from-teal-400 to-teal-600',
      glowColor: 'shadow-teal-500/20'
    },
    {
      icon: Heart,
      title: 'Interests',
      description: 'Machine learning, data visualization, and building intelligent solutions.',
      color: 'from-orange-500 to-orange-600',
      cubeColor: 'from-orange-400 to-orange-600',
      glowColor: 'shadow-orange-500/20'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
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
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello! I'm Arvind Singh Rathore, a passionate B.Tech IT student with a deep fascination for 
                artificial intelligence and machine learning. Currently pursuing my degree at Government Engineering College, 
                I've been on an exciting journey of discovery in the world of data science and intelligent systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My approach to learning is hands-on and project-driven. I believe that the best way to understand 
                complex concepts is by building real-world applications. Whether it's analyzing datasets, 
                creating predictive models, or developing web applications, I'm always eager to turn theoretical 
                knowledge into practical solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest trends in AI, participating in hackathons, 
                or contributing to open-source projects. I'm driven by the potential of technology to solve 
                real-world problems and make a positive impact on society.
              </p>
            </div>

            {/* Info Cards with 3D Effects */}
            <div className="space-y-6">
              {infoCards.map((card, index) => (
                <div
                  key={index}
                  className={`group relative p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl ${card.glowColor} transform hover:scale-105 transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden`}
                  style={{ perspective: '1000px' }}
                >
                  {/* 3D Floating Spheres Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                    {/* Multiple floating spheres */}
                    {[...Array(8)].map((_, sphereIndex) => (
                      <div
                        key={sphereIndex}
                        className="absolute sphere-container"
                        style={{
                          left: `${5 + (sphereIndex * 12)}%`,
                          top: `${10 + (sphereIndex * 8)}%`,
                          animationDelay: `${sphereIndex * 0.2}s`,
                        }}
                      >
                        <div className={`sphere bg-gradient-to-br ${card.cubeColor} opacity-15`}></div>
                      </div>
                    ))}
                    
                    {/* Floating particles */}
                    {[...Array(12)].map((_, particleIndex) => (
                      <div
                        key={`particle-${particleIndex}`}
                        className="absolute particle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${particleIndex * 0.1}s`,
                        }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.cubeColor} opacity-30`}></div>
                      </div>
                    ))}

                    {/* Gradient wave overlay */}
                    {/* (No overlay needed for About section background) */}
                  </div>
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${card.color} text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <card.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-500">
                        {card.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;