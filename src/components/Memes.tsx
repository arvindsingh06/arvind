import React from 'react';
import { Laugh, Code, Coffee, Bug, Zap, Heart } from 'lucide-react';

const Memes: React.FC = () => {
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

  const developerMemes = [
    {
      icon: Code,
      title: "When your code works on the first try",
      content: "// This never happens\nif (codeWorksFirstTry) {\n  console.log('Impossible!');\n}",
      emoji: "🤯",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Bug,
      title: "99 little bugs in the code",
      content: "99 little bugs in the code,\n99 little bugs,\nTake one down, patch it around,\n117 little bugs in the code!",
      emoji: "🐛",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Coffee,
      title: "Coffee to Code Ratio",
      content: "def productivity():\n  coffee_cups = 5\n  lines_of_code = coffee_cups * 100\n  return 'Still debugging...'",
      emoji: "☕",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Zap,
      title: "When you finally fix that bug",
      content: "After 3 hours of debugging:\n\n// Changed semicolon to comma\n// Problem solved! 🎉",
      emoji: "⚡",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Relationship Status",
      content: "It's complicated...\n\nMe: 'I love you'\nCode: 'Syntax Error'",
      emoji: "💔",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Laugh,
      title: "Documentation be like",
      content: "// TODO: Add proper documentation\n// TODO: Remove this TODO\n// TODO: Actually write code",
      emoji: "📝",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const funFacts = [
    "There are only 10 types of people: those who understand binary and those who don't",
    "Programming is 10% writing code and 90% figuring out why it doesn't work",
    "A programmer's favorite hangout place? Foo Bar!",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem!"
  ];

  return (
    <section id="memes" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Universe Galaxy Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Ambient Light Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/6 right-1/3 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>

        {/* Small Moving Particles */}
        {particles.map((particle) => (
          <div
            key={`memes-particle-${particle.id}`}
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
            key={`memes-moving-star-${star.id}`}
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
            key={`memes-blinking-star-${star.id}`}
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
            key={`memes-twinkling-star-${star.id}`}
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
            key={`memes-shooting-star-${i}`}
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
            <linearGradient id="memes-constellation-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
          
          <line x1="15%" y1="25%" x2="30%" y2="20%" stroke="url(#memes-constellation-gradient)" strokeWidth="1" className="animate-constellation-draw" />
          <line x1="30%" y1="20%" x2="40%" y2="35%" stroke="url(#memes-constellation-gradient)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '0.5s' }} />
          <line x1="40%" y1="35%" x2="25%" y2="45%" stroke="url(#memes-constellation-gradient)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '1s' }} />
          
          <line x1="65%" y1="15%" x2="80%" y2="30%" stroke="url(#memes-constellation-gradient)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '1.5s' }} />
          <line x1="80%" y1="30%" x2="85%" y2="45%" stroke="url(#memes-constellation-gradient)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '2s' }} />
          <line x1="85%" y1="45%" x2="70%" y2="55%" stroke="url(#memes-constellation-gradient)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '2.5s' }} />
        </svg>

        {/* Cosmic Dust */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`memes-dust-${i}`}
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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Developer Humor
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Because every developer needs a good laugh! Here's some coding humor to brighten your day 😄
            </p>
          </div>

          {/* Memes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {developerMemes.map((meme, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-meme-laugh"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Meme Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${meme.color} text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <meme.icon className="w-6 h-6" />
                  </div>
                  <div className="text-4xl meme-emoji-float" style={{ animationDelay: `${index * 0.3}s` }}>
                    {meme.emoji}
                  </div>
                </div>

                {/* Meme Title */}
                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-500">
                  {meme.title}
                </h3>

                {/* Meme Content */}
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm text-gray-300 leading-relaxed border border-gray-700/50">
                  <pre className="whitespace-pre-wrap">{meme.content}</pre>
                </div>

                {/* Floating laugh emojis */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl pointer-events-none">
                  {['😂', '🤣', '😄', '😆'].map((emoji, emojiIndex) => (
                    <div
                      key={emojiIndex}
                      className="absolute text-2xl floating-laugh"
                      style={{
                        left: `${20 + (emojiIndex * 20)}%`,
                        top: `${15 + (emojiIndex * 15)}%`,
                        animationDuration: `${2 + (emojiIndex * 0.5)}s`,
                        animationDelay: `${emojiIndex * 0.2}s`,
                      }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Fun Facts Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Programming Fun Facts & Jokes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-300 meme-wave"
                  style={{ animationDelay: `${index * 0.4}s` }}
                >
                  <div className="text-2xl mr-4 flex-shrink-0">💡</div>
                  <p className="text-gray-300 leading-relaxed italic">"{fact}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Falling Meme Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {['💻', '🐛', '☕', '🚀', '⚡', '🔥'].map((emoji, index) => (
              <div
                key={index}
                className="absolute text-3xl falling-meme opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${8 + Math.random() * 4}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memes;