import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arvindsinghrathore113@gmail.com',
      href: 'mailto:arvindsinghrathore113@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 70733 17709',
      href: 'tel:+917073317709',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ajmer, Rajasthan, India',
      href: '#',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/arvind-singh-rathore-039789344',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/arvindsingh06',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/arvind_singh_chawandiya',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/917073317709',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate or have a question? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="group flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${social.color} text-white mr-3 group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className="w-5 h-5" />
                      </div>
                      <span className="text-white font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-none"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/25"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;