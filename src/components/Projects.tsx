import React from 'react';
import { ExternalLink, Github, Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: 'Email Sender Web App',
      description: 'A streamlined web application for sending emails with SMTP integration. Features a clean interface for composing and sending emails programmatically.',
      technologies: ['Python', 'Streamlit', 'SMTP', 'Email APIs'],
      githubUrl: 'https://github.com/arvindsingh06/send_mail',
      icon: Mail,
      color: 'from-blue-500 to-blue-600',
      features: [
        'SMTP Integration',
        'User-friendly Interface',
        'Email Templates',
        'Bulk Email Support'
      ]
    },
    {
      title: 'Phone Call Automation',
      description: 'Automated calling system built with Python that can make programmatic phone calls. Useful for notifications, reminders, and automated communication.',
      technologies: ['Python', 'Twilio API', 'Voice Processing', 'Automation'],
      githubUrl: 'https://github.com/arvindsingh06/make_call',
      icon: Phone,
      color: 'from-green-500 to-green-600',
      features: [
        'Automated Calling',
        'Voice Integration',
        'Call Scheduling',
        'API Integration'
      ]
    },
    {
      title: 'WhatsApp Messenger Bot',
      description: 'An intelligent WhatsApp messaging bot that can send automated messages, handle responses, and manage conversations programmatically.',
      technologies: ['Python', 'Twilio API', 'WhatsApp Business API', 'Bot Framework'],
      githubUrl: 'https://github.com/arvindsingh06/sendwhatsappmsg',
      icon: MessageSquare,
      color: 'from-teal-500 to-teal-600',
      features: [
        'Automated Messaging',
        'Response Handling',
        'Message Scheduling',
        'Contact Management'
      ]
    },
    {
      title: 'SMS Sender with Twilio',
      description: 'A robust SMS automation system using Twilio API for sending bulk text messages. Perfect for notifications, marketing, and communication.',
      technologies: ['Python', 'Twilio API', 'SMS Gateway', 'Bulk Messaging'],
      githubUrl: 'https://github.com/arvindsingh06/send_sms',
      icon: Send,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Bulk SMS Sending',
        'Message Templates',
        'Delivery Tracking',
        'Contact Lists'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
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
            <linearGradient id="constellation-gradient-projects" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
          
          <line x1="15%" y1="25%" x2="30%" y2="20%" stroke="url(#constellation-gradient-projects)" strokeWidth="1" className="animate-constellation-draw" />
          <line x1="30%" y1="20%" x2="40%" y2="35%" stroke="url(#constellation-gradient-projects)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '0.5s' }} />
          <line x1="40%" y1="35%" x2="25%" y2="45%" stroke="url(#constellation-gradient-projects)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '1s' }} />
          
          <line x1="65%" y1="15%" x2="80%" y2="30%" stroke="url(#constellation-gradient-projects)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '1.5s' }} />
          <line x1="80%" y1="30%" x2="85%" y2="45%" stroke="url(#constellation-gradient-projects)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '2s' }} />
          <line x1="85%" y1="45%" x2="70%" y2="55%" stroke="url(#constellation-gradient-projects)" strokeWidth="1" className="animate-constellation-draw" style={{ animationDelay: '2.5s' }} />
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
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work in automation, communication systems, and web applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
                style={{ perspective: '1000px' }}
              >
                {/* 3D Floating Cubes Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                  {/* Multiple floating cubes */}
                  {[...Array(6)].map((_, cubeIndex) => (
                    <div
                      key={cubeIndex}
                      className="absolute cube-container"
                      style={{
                        left: `${10 + (cubeIndex * 15)}%`,
                        top: `${15 + (cubeIndex * 12)}%`,
                        animationDelay: `${cubeIndex * 0.3}s`,
                      }}
                    >
                      <div className={`cube bg-gradient-to-br ${project.color} opacity-15`}>
                        <div className="cube-face cube-front"></div>
                        <div className="cube-face cube-back"></div>
                        <div className="cube-face cube-right"></div>
                        <div className="cube-face cube-left"></div>
                        <div className="cube-face cube-top"></div>
                        <div className="cube-face cube-bottom"></div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Small floating cubes */}
                  {[...Array(8)].map((_, smallCubeIndex) => (
                    <div
                      key={`small-${smallCubeIndex}`}
                      className="absolute small-cube-container"
                      style={{
                        right: `${5 + (smallCubeIndex * 8)}%`,
                        bottom: `${10 + (smallCubeIndex * 6)}%`,
                        animationDelay: `${smallCubeIndex * 0.2}s`,
                      }}
                    >
                      <div className={`small-cube bg-gradient-to-br ${project.color} opacity-20`}>
                        <div className="cube-face cube-front"></div>
                        <div className="cube-face cube-back"></div>
                        <div className="cube-face cube-right"></div>
                        <div className="cube-face cube-left"></div>
                        <div className="cube-face cube-top"></div>
                        <div className="cube-face cube-bottom"></div>
                      </div>
                    </div>
                  ))}

                  {/* Gradient wave overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                </div>

                <div className="relative z-10">
                  {/* Project Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${project.color} text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <project.icon className="w-8 h-8" />
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300 group/link"
                    >
                      <Github className="w-5 h-5 text-gray-300 group-hover/link:text-white" />
                    </a>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-500">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-gray-300 bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors duration-300"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mr-2 flex-shrink-0`}></div>
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 border border-current border-opacity-30 rounded-full text-xs font-medium text-gray-300 hover:bg-opacity-30 transition-colors duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                    <button className="flex items-center justify-center px-4 py-3 bg-white/10 hover:bg-white/20 text-gray-300 rounded-lg transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </button>
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