import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Instagram, Send, MapPin, Twitter, Facebook, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arvindsinghrathore113@gmail.com',
      href: 'mailto:arvindsinghrathore113@gmail.com',
      color: 'from-red-500 to-pink-500',
      cubeColor: 'from-red-400 to-pink-600',
      glowColor: 'shadow-red-500/20'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 70733 17709',
      href: 'tel:+917073317709',
      color: 'from-green-500 to-teal-500',
      cubeColor: 'from-green-400 to-teal-600',
      glowColor: 'shadow-green-500/20'
    },
    {
      icon: () => (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4z"/></svg>
      ),
      label: 'Location',
      value: 'Pushkar, Rajasthan, India',
      color: 'from-yellow-400 to-yellow-600',
      cubeColor: 'from-yellow-300 to-yellow-500',
      glowColor: 'shadow-yellow-500/20'
    },
    {
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.11 17.44c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.26-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.15-1.34-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.41.12-.54.13-.13.29-.34.43-.51.14-.17.18-.29.27-.48.09-.19.05-.36-.02-.5-.07-.13-.61-1.48-.83-2.03-.22-.55-.44-.47-.61-.48-.16-.01-.34-.01-.53-.01-.18 0-.48.07-.73.33-.25.26-.96.97-.96 2.36 0 1.39 1.02 2.73 1.16 2.91.14.18 1.99 3.06 4.83 4.18.68.28 1.21.44 1.62.56.68.21 1.3.18 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.54-.33z" fill="#fff" stroke="#222" stroke-width="1.2"/>
          <path d="M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 2.36.65 4.57 1.78 6.46L3 29l6.7-1.75A12.93 12.93 0 0 0 16 29z" stroke="#222" stroke-width="1.2" fill="none"/>
        </svg>
      ),
      label: 'WhatsApp',
      value: '+91 70733 17709',
      href: 'https://wa.me/917073317709',
      color: 'from-green-400 to-green-600',
      cubeColor: 'from-green-300 to-green-500',
      glowColor: 'shadow-green-500/20'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/arvind-singh-rathore-039789344',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/arvindsingh06',
      color: 'hover:text-gray-800 dark:hover:text-gray-300'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/arvind_singh_chawandiya',
      color: 'hover:text-pink-600'
    }
  ];

  const fallingLogos = [
    { left: '8%',   icon: <Instagram className="w-12 h-12 text-white dark:text-gray-300 opacity-80" style={{ filter: 'blur(0.5px)' }} /> },
    { left: '18%',  icon: <Linkedin className="w-10 h-10 text-white dark:text-gray-300 opacity-80" style={{ filter: 'blur(0.5px)' }} /> },
    { left: '28%',  icon: <Github className="w-11 h-11 text-white dark:text-gray-300 opacity-80" style={{ filter: 'blur(0.5px)' }} /> },
    { left: '38%',  icon: <Mail className="w-9 h-9 text-white dark:text-gray-300 opacity-80" style={{ filter: 'blur(0.5px)' }} /> },
    { left: '48%',  icon: <Phone className="w-8 h-8 text-white dark:text-gray-300 opacity-80" style={{ filter: 'blur(0.5px)' }} /> },
    { left: '88%',  icon: <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white dark:text-gray-300 opacity-80" style={{ filter: 'blur(0.5px)' }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
    </svg> },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, projects, or just having a chat about technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info with 3D Falling Logos */}
            <div className="space-y-8 relative overflow-visible">
              {/* 3D Animated Background - Falling Contact Logos (left side only) */}
              <div ref={sectionRef} className="absolute inset-0 pointer-events-none z-0 w-full h-full">
                {fallingLogos.map((logo, i) => {
                  const randomDelay = `${(Math.random() * 3.5).toFixed(2)}s`;
                  const randomDuration = `${(3.5 + Math.random() * 2).toFixed(2)}s`;
                  return (
                    <div
                      key={i}
                      className="absolute animate-fall"
                      style={{
                        left: logo.left,
                        top: '-60px',
                        animationDelay: randomDelay,
                        zIndex: 0,
                        animationDuration: randomDuration,
                        '--fall-distance': `${sectionHeight}px`
                      } as React.CSSProperties}
                    >
                      {logo.icon}
                    </div>
                  );
                })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Feel free to reach out if you're looking for a developer, have a question, 
                  or just want to connect. I'd love to hear from you!
                </p>
              </div>

              {/* Contact Methods with 3D Effects */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className={`group relative p-4 bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl ${contact.glowColor} transform hover:scale-105 transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden`}
                    style={{ perspective: '1000px' }}
                  >
                    {/* 3D Floating Spheres Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                      {/* Multiple floating spheres */}
                      {[...Array(6)].map((_, sphereIndex) => (
                        <div
                          key={sphereIndex}
                          className="absolute sphere-container"
                          style={{
                            left: `${5 + (sphereIndex * 15)}%`,
                            top: `${10 + (sphereIndex % 2) * 40}%`,
                            animationDelay: `${sphereIndex * 0.7}s`,
                          }}
                        >
                          <div className={`sphere bg-gradient-to-br ${contact.cubeColor} opacity-15`}></div>
                        </div>
                      ))}
                      
                      {/* Floating particles */}
                      {[...Array(8)].map((_, particleIndex) => (
                        <div
                          key={`particle-${particleIndex}`}
                          className="absolute particle"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${particleIndex * 0.1}s`,
                          }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${contact.cubeColor} opacity-30`}></div>
                        </div>
                      ))}

                      {/* Gradient wave overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${contact.cubeColor} opacity-5 wave-animation`}></div>
                    </div>

                    <div className="relative z-10 flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                        <contact.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white">{contact.label}</p>
                        <p className="text-gray-600 dark:text-gray-400">{contact.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links with 3D Effects */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-3 bg-white dark:bg-slate-900 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-600 dark:text-gray-400 ${social.color} overflow-hidden`}
                      style={{ perspective: '1000px' }}
                    >
                      {/* 3D Background Effects for Social Icons */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {/* Floating particles around social icons */}
                        {[...Array(4)].map((_, particleIndex) => (
                          <div
                            key={`social-particle-${particleIndex}`}
                            className="absolute particle"
                            style={{
                              left: `${20 + (particleIndex * 20)}%`,
                              top: `${20 + (particleIndex * 20)}%`,
                              animationDelay: `${particleIndex * 0.15}s`,
                            }}
                          >
                            <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 opacity-40"></div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="relative z-10">
                        <social.icon className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form with 3D Effects */}
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 overflow-hidden group" style={{ perspective: '1000px' }}>
              {/* Enhanced Animated Background for Form */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                {/* Morphing Blob 1 */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 z-0 animate-morphing-blob">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 via-teal-400 to-purple-400 opacity-20 blur-2xl rounded-full" style={{ filter: 'blur(32px)' }}></div>
                </div>
                {/* Morphing Blob 2 */}
                <div className="absolute left-1/3 top-2/3 -translate-x-1/2 -translate-y-1/2 w-56 h-56 z-0 animate-morphing-blob2" style={{ animationDelay: '2s' }}>
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 via-yellow-300 to-blue-300 opacity-15 blur-2xl rounded-full" style={{ filter: 'blur(28px)' }}></div>
                </div>
                {/* Soft Floating Particles */}
                {[...Array(10)].map((_, i) => (
                  <div
                    key={`form-float-particle-${i}`}
                    className="absolute animate-form-particle"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      animationDelay: `${i * 0.7}s`,
                      animationDuration: `${4 + Math.random() * 3}s`,
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white opacity-10 blur-sm"></div>
                  </div>
                ))}
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 opacity-10 animate-gradient-move"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-500">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-white transition-all duration-300 group-hover:shadow-lg"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-focus:top-0 peer-focus:left-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:bg-white dark:peer-focus:bg-slate-900 peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white dark:peer-[:not(:placeholder-shown)]:bg-slate-900 peer-[:not(:placeholder-shown)]:px-2"
                    >
                      Your Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-white transition-all duration-300 group-hover:shadow-lg"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-focus:top-0 peer-focus:left-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:bg-white dark:peer-focus:bg-slate-900 peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white dark:peer-[:not(:placeholder-shown)]:bg-slate-900 peer-[:not(:placeholder-shown)]:px-2"
                    >
                      Your Email
                    </label>
                  </div>

                  {/* Message Textarea */}
                  <div className="relative group">
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:text-white transition-all duration-300 resize-none group-hover:shadow-lg"
                      placeholder=" "
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-focus:top-0 peer-focus:left-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:bg-white dark:peer-focus:bg-slate-900 peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white dark:peer-[:not(:placeholder-shown)]:bg-slate-900 peer-[:not(:placeholder-shown)]:px-2"
                    >
                      Your Message
                    </label>
                  </div>

                  {/* Submit Button with 3D Effects */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    style={{ perspective: '1000px' }}
                  >
                    {/* 3D Background Effects for Button */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {/* Floating particles for button */}
                      {[...Array(6)].map((_, particleIndex) => (
                        <div
                          key={`button-particle-${particleIndex}`}
                          className="absolute particle"
                          style={{
                            left: `${10 + (particleIndex * 15)}%`,
                            top: `${20 + (particleIndex * 10)}%`,
                            animationDelay: `${particleIndex * 0.1}s`,
                          }}
                        >
                          <div className="w-1 h-1 rounded-full bg-white opacity-30"></div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="relative z-10 flex items-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Portfolio Ending Section */}
      <div className="mt-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="group relative bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 border-2 border-transparent transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl overflow-hidden rainbow-border" style={{ perspective: '1000px' }}>
            {/* Rainbow Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 via-purple-500 to-red-500 bg-[length:400%_400%] animate-gradient-move opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            <div className="absolute inset-[2px] bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl"></div>
            
            {/* 3D Animated Background on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`ending-particle-${i}`}
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
                  key={`ending-cube-${i}`}
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
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Thanks for visiting my portfolio!
                </h3>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                I hope you enjoyed exploring my work and learning about my journey in technology. 
                Feel free to reach out if you'd like to collaborate on exciting projects or just want to connect!
              </p>
              <div className="mt-6 flex items-center justify-center space-x-2">
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">🚀</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Ready for the next adventure</span>
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;