import React from 'react';
import { ExternalLink, Github, Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Projects: React.FC = () => {
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
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work in automation, communication systems, and web applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
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
                      className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300 group/link"
                    >
                      <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover/link:text-gray-900 dark:group-hover/link:text-white" />
                    </a>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-500">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mr-2 flex-shrink-0`}></div>
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 border border-current border-opacity-30 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-opacity-30 transition-colors duration-300`}
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
                    <button className="flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors duration-300">
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