import React from 'react';
import { Github, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  // Generate small particles like in hero section
  const particles = Array.from({ length: 70 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 3,
    opacity: Math.random() * 0.6 + 0.2,
  }));

  // Generate moving stars
  const movingStars = Array.from({ length: 90 }, (_, i) => ({
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
  const blinkingStars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.5 + 0.3,
  }));

  const projects = [
    {
      emoji: '📧',
      title: 'Email Sender Web App',
      description: 'A streamlined web application for sending emails with SMTP integration, built with Streamlit for easy deployment.',
      tags: ['Streamlit', 'SMTP', 'Python', 'Email API'],
      sourceCode: 'https://github.com/arvindsingh06/send_mail',
      featured: true,
      cubeColor: 'from-blue-500 to-cyan-500'
    },
    {
      emoji: '💰',
      title: 'Salary Prediction ML Model',
      description: 'Machine learning model using Linear Regression to predict salaries based on experience and other factors.',
      tags: ['Linear Regression', 'scikit-learn', 'Python', 'ML'],
      sourceCode: 'https://github.com/arvindsingh06',
      featured: true,
      cubeColor: 'from-green-500 to-emerald-500'
    },
    {
      emoji: '🤖',
      title: 'AI Chatbot',
      description: 'Interactive AI chatbot built with Gradio interface and OpenAI integration for natural conversations.',
      tags: ['Gradio', 'OpenAI', 'Python', 'AI'],
      sourceCode: 'https://github.com/arvindsingh06',
      featured: true,
      cubeColor: 'from-purple-500 to-pink-500'
    },
    {
      emoji: '📞',
      title: 'Phone Call Automation',
      description: 'Automated phone calling system built with Python for making programmatic voice calls and handling responses.',
      tags: ['Python', 'Voice API', 'Automation', 'Telephony'],
      sourceCode: 'https://github.com/arvindsingh06/make_call',
      featured: true,
      cubeColor: 'from-orange-500 to-red-500'
    },
    {
      emoji: '💬',
      title: 'WhatsApp Messenger Bot',
      description: 'WhatsApp messaging automation using Twilio API for sending bulk messages and automated responses.',
      tags: ['Twilio', 'WhatsApp API', 'Python', 'Messaging'],
      sourceCode: 'https://github.com/arvindsingh06/sendwhatsappmsg',
      featured: true,
      cubeColor: 'from-green-400 to-teal-500'
    },
    {
      emoji: '📱',
      title: 'SMS Sender with Twilio',
      description: 'SMS automation system using Twilio API for sending bulk SMS messages and notifications programmatically.',
      tags: ['Twilio', 'SMS API', 'Python', 'Notifications'],
      sourceCode: 'https://github.com/arvindsingh06/send_sms',
      featured: true,
      cubeColor: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
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
            key={`projects-particle-${particle.id}`}
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
            key={`projects-moving-star-${star.id}`}
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
            key={`projects-blinking-star-${star.id}`}
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
        {[...Array(5)].map((_, i) => (
          <div
            key={`projects-shooting-star-${i}`}
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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore some of my latest work in AI, machine learning, automation, and communication systems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden border ${
                  project.featured ? 'border-blue-200 dark:border-blue-800' : 'border-gray-200 dark:border-gray-700'
                }`}
                style={{ perspective: '1000px' }}
              >
                {/* 3D Cubes Background Animation */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                  {/* Multiple 3D Cubes with different colors and positions */}
                  {[...Array(6)].map((_, cubeIndex) => (
                    <div
                      key={cubeIndex}
                      className="absolute cube-container"
                      style={{
                        left: `${10 + (cubeIndex * 15)}%`,
                        top: `${5 + (cubeIndex * 12)}%`,
                        animationDelay: `${cubeIndex * 0.3}s`,
                        transform: 'translateZ(0)',
                      }}
                    >
                      <div className={`cube bg-gradient-to-br ${project.cubeColor} opacity-20`}>
                        <div className="cube-face cube-front"></div>
                        <div className="cube-face cube-back"></div>
                        <div className="cube-face cube-right"></div>
                        <div className="cube-face cube-left"></div>
                        <div className="cube-face cube-top"></div>
                        <div className="cube-face cube-bottom"></div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Additional floating cubes with different sizes */}
                  {[...Array(4)].map((_, smallCubeIndex) => (
                    <div
                      key={`small-${smallCubeIndex}`}
                      className="absolute small-cube-container"
                      style={{
                        right: `${5 + (smallCubeIndex * 20)}%`,
                        bottom: `${10 + (smallCubeIndex * 15)}%`,
                        animationDelay: `${smallCubeIndex * 0.5}s`,
                      }}
                    >
                      <div className={`small-cube bg-gradient-to-br ${project.cubeColor} opacity-30`}>
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

                {/* Project Content */}
                <div className="relative z-10 p-6">
                  {/* Project Emoji & Title */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{project.emoji}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  {/* Featured Badge (moved below title) */}
                  {project.featured && (
                    <div className="flex justify-end mb-2">
                      <div className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        <Sparkles className="w-3 h-3" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 hover:from-gray-900 hover:to-black dark:hover:from-gray-600 dark:hover:to-gray-700"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
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

export default Projects;