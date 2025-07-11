import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: 'Python',
      icon: '🐍',
      level: 90,
      description: 'Primary programming language for AI/ML development',
      color: 'bg-gradient-to-r from-green-500 to-blue-500',
      particleColor: 'from-green-400 to-blue-400',
      glowColor: 'shadow-green-500/30'
    },
    {
      name: 'C Programming',
      icon: '⚡',
      level: 85,
      description: 'Systems programming and algorithm implementation',
      color: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      particleColor: 'from-blue-400 to-indigo-400',
      glowColor: 'shadow-blue-500/30'
    },
    {
      name: 'Streamlit',
      icon: '🔷',
      level: 80,
      description: 'Interactive web app development for ML models',
      color: 'bg-gradient-to-r from-red-500 to-pink-500',
      particleColor: 'from-red-400 to-pink-400',
      glowColor: 'shadow-red-500/30'
    },
    {
      name: 'scikit-learn',
      icon: '🤖',
      level: 85,
      description: 'Machine learning toolkit for Python',
      color: 'bg-gradient-to-r from-orange-500 to-yellow-500',
      particleColor: 'from-orange-400 to-yellow-400',
      glowColor: 'shadow-orange-500/30'
    },
    {
      name: 'Pandas',
      icon: '🐼',
      level: 88,
      description: 'Data manipulation and analysis library',
      color: 'bg-gradient-to-r from-blue-600 to-purple-600',
      particleColor: 'from-blue-400 to-purple-400',
      glowColor: 'shadow-purple-500/30'
    },
    {
      name: 'NumPy',
      icon: '🔢',
      level: 82,
      description: 'Numerical computing with Python',
      color: 'bg-gradient-to-r from-indigo-500 to-blue-600',
      particleColor: 'from-indigo-400 to-blue-400',
      glowColor: 'shadow-indigo-500/30'
    },
    {
      name: 'Git',
      icon: '🌿',
      level: 78,
      description: 'Version control and collaboration',
      color: 'bg-gradient-to-r from-orange-600 to-red-600',
      particleColor: 'from-orange-400 to-red-400',
      glowColor: 'shadow-orange-500/30'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      level: 80,
      description: 'Code repository management and collaboration',
      color: 'bg-gradient-to-r from-purple-600 to-pink-600',
      particleColor: 'from-purple-400 to-pink-400',
      glowColor: 'shadow-purple-500/30'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Floating Hexagons */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`skills-hexagon-${i}`}
            className="absolute geometric-shape"
            style={{
              left: `${10 + i * 22}%`,
              top: `${18 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.6}s`,
              zIndex: 0,
            }}
          >
            <div className="hexagon bg-gradient-to-br from-blue-400 to-teal-400 opacity-20" style={{ width: 56, height: 56 }}></div>
          </div>
        ))}
        {/* Floating Diamonds */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`skills-diamond-${i}`}
            className="absolute geometric-shape"
            style={{
              left: `${25 + i * 28}%`,
              top: `${30 + i * 25}%`,
              animationDelay: `${i * 0.8}s`,
              zIndex: 0,
            }}
          >
            <div className="diamond bg-gradient-to-br from-orange-400 to-pink-400 opacity-15" style={{ width: 40, height: 40 }}></div>
          </div>
        ))}
        {/* Floating Circles */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`skills-circle-${i}`}
            className="absolute sphere-container"
            style={{
              left: `${60 + i * 10}%`,
              top: `${10 + i * 35}%`,
              animationDelay: `${i * 0.9}s`,
              zIndex: 0,
            }}
          >
            <div className="sphere bg-gradient-to-br from-purple-400 to-blue-400 opacity-10 blur-2xl" style={{ width: 70 + i * 10, height: 70 + i * 10 }}></div>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My technical expertise spans across various programming languages, frameworks, and tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group relative bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl ${skill.glowColor} transform hover:scale-110 hover:rotate-2 transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700`}
                style={{ perspective: '1000px' }}
              >
                {/* 3D Animated Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                  {/* Rotating geometric shapes */}
                  {[...Array(6)].map((_, shapeIndex) => (
                    <div
                      key={shapeIndex}
                      className="absolute geometric-shape"
                      style={{
                        left: `${10 + (shapeIndex * 15)}%`,
                        top: `${5 + (shapeIndex * 12)}%`,
                        animationDelay: `${shapeIndex * 0.3}s`,
                      }}
                    >
                      <div className={`diamond bg-gradient-to-br ${skill.particleColor} opacity-20`}></div>
                    </div>
                  ))}
                  
                  {/* Floating code symbols */}
                  {['<', '>', '{', '}', '(', ')'].map((symbol, symbolIndex) => (
                    <div
                      key={symbolIndex}
                      className="absolute code-symbol"
                      style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                        animationDelay: `${symbolIndex * 0.4}s`,
                      }}
                    >
                      <span className={`text-2xl font-bold bg-gradient-to-r ${skill.particleColor} bg-clip-text text-transparent opacity-30`}>
                        {symbol}
                      </span>
                    </div>
                  ))}

                  {/* Pulsing circles */}
                  {[...Array(4)].map((_, circleIndex) => (
                    <div
                      key={`circle-${circleIndex}`}
                      className="absolute pulse-circle"
                      style={{
                        right: `${5 + (circleIndex * 20)}%`,
                        bottom: `${10 + (circleIndex * 15)}%`,
                        animationDelay: `${circleIndex * 0.5}s`,
                      }}
                    >
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${skill.particleColor} opacity-25`}></div>
                    </div>
                  ))}

                  {/* Matrix-style background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.particleColor} opacity-5 matrix-bg`}></div>
                </div>

                {/* Skill Content */}
                <div className="relative z-10 p-6">
                  {/* Icon & Name */}
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter group-hover:drop-shadow-lg">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-500">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Progress Bar with 3D Effect */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className={`h-full ${skill.color} transition-all duration-1000 ease-out rounded-full relative overflow-hidden group-hover:shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-pulse"></div>
                        {/* Progress bar glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* 3D Border Effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 via-teal-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{ 
                       background: `conic-gradient(from 0deg, ${skill.particleColor.split(' ')[1]}, ${skill.particleColor.split(' ')[3]}, ${skill.particleColor.split(' ')[1]})`,
                       WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), white calc(100% - 2px))',
                       mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), white calc(100% - 2px))'
                     }}>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto px-4">
              <div className="group relative bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-2 border-transparent transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl overflow-hidden rainbow-border" style={{ perspective: '1000px' }}>
                {/* Rainbow Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 via-purple-500 to-red-500 bg-[length:400%_400%] animate-gradient-move opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                <div className="absolute inset-[2px] bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl"></div>
                {/* 3D Animated Background on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden z-0">
                  {/* Floating particles */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`always-particle-${i}`}
                      className="absolute animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 opacity-30 blur"></div>
                    </div>
                  ))}
                  {/* Rotating cubes */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={`always-cube-${i}`}
                      className="absolute cube-container"
                      style={{
                        left: `${20 + i * 25}%`,
                        top: `${20 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    >
                      <div className="cube bg-gradient-to-br from-blue-400 to-teal-400 opacity-15" style={{ width: 30 + i * 5, height: 30 + i * 5 }}>
                        <div className="cube-face cube-front"></div>
                        <div className="cube-face cube-back"></div>
                        <div className="cube-face cube-right"></div>
                        <div className="cube-face cube-left"></div>
                        <div className="cube-face cube-top"></div>
                        <div className="cube-face cube-bottom"></div>
                      </div>
                    </div>
                  ))}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/5 to-teal-400/5"></div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Always Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    I'm constantly expanding my skill set and staying updated with the latest technologies 
                    in AI, machine learning, and data science. Currently exploring deep learning frameworks 
                    and cloud computing platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;