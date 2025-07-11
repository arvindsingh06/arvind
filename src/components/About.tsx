import React from 'react';
import { User, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Floating Orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`about-orb-${i}`}
            className="absolute sphere-container"
            style={{
              left: `${8 + i * 18}%`,
              top: `${10 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.6}s`,
              zIndex: 0,
            }}
          >
            <div className={`sphere bg-gradient-to-br ${i % 2 === 0 ? 'from-purple-400 to-blue-400' : 'from-pink-400 to-orange-400'} opacity-15 blur-2xl`} style={{ width: 100 + i * 15, height: 100 + i * 15 }}></div>
          </div>
        ))}
        {/* Floating Rings */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`about-ring-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 25}%`,
              top: `${25 + i * 20}%`,
              animation: 'spin-slow 12s linear infinite',
              animationDelay: `${i * 0.8}s`,
              zIndex: 0,
            }}
          >
            <div className="rounded-full border-4 border-gradient-to-r from-blue-400 to-purple-400 opacity-10" style={{ width: 120 + i * 30, height: 120 + i * 30 }}></div>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello! I'm Arvind Singh Rathore, a passionate B.Tech IT student with a deep fascination for 
                artificial intelligence and machine learning. Currently pursuing my degree at Government Engineering College, 
                I've been on an exciting journey of discovery in the world of data science and intelligent systems.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My approach to learning is hands-on and project-driven. I believe that the best way to understand 
                complex concepts is by building real-world applications. Whether it's analyzing datasets, 
                creating predictive models, or developing web applications, I'm always eager to turn theoretical 
                knowledge into practical solutions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
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
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-500">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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