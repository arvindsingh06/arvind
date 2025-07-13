import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, ExternalLink, Github, Mail, Phone, Linkedin, Instagram, X, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  links?: Array<{ text: string; url: string; icon?: React.ReactNode }>;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Arvind's AI assistant. I can provide information about his portfolio, projects, skills, and contact details. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const portfolioData = {
    about: {
      text: "Arvind Singh Rathore is a passionate B.Tech IT student specializing in AI/ML development. Currently pursuing his degree at Government Engineering College, Ajmer, with expertise in Python, machine learning, and data analysis.",
      links: []
    },
    projects: {
      text: "Here are Arvind's featured projects:",
      links: [
        { text: "Email Sender Web App", url: "https://github.com/arvindsingh06/send_mail", icon: <Github className="w-4 h-4" /> },
        { text: "Phone Call Automation", url: "https://github.com/arvindsingh06/make_call", icon: <Github className="w-4 h-4" /> },
        { text: "WhatsApp Messenger Bot", url: "https://github.com/arvindsingh06/sendwhatsappmsg", icon: <Github className="w-4 h-4" /> },
        { text: "SMS Sender with Twilio", url: "https://github.com/arvindsingh06/send_sms", icon: <Github className="w-4 h-4" /> }
      ]
    },
    skills: {
      text: "Arvind's technical skills include:",
      links: [
        { text: "Python (90%)", url: "#skills" },
        { text: "C Programming (85%)", url: "#skills" },
        { text: "Streamlit (80%)", url: "#skills" },
        { text: "scikit-learn (85%)", url: "#skills" },
        { text: "Pandas (88%)", url: "#skills" },
        { text: "NumPy (82%)", url: "#skills" },
        { text: "Git (78%)", url: "#skills" },
        { text: "GitHub (80%)", url: "#skills" }
      ]
    },
    contact: {
      text: "You can reach Arvind through:",
      links: [
        { text: "Email", url: "mailto:arvindsinghrathore113@gmail.com", icon: <Mail className="w-4 h-4" /> },
        { text: "Phone", url: "tel:+917073317709", icon: <Phone className="w-4 h-4" /> },
        { text: "LinkedIn", url: "https://linkedin.com/in/arvind-singh-rathore-039789344", icon: <Linkedin className="w-4 h-4" /> },
        { text: "GitHub", url: "https://github.com/arvindsingh06", icon: <Github className="w-4 h-4" /> },
        { text: "Instagram", url: "https://instagram.com/arvind_singh_chawandiya", icon: <Instagram className="w-4 h-4" /> },
        { text: "WhatsApp", url: "https://wa.me/917073317709", icon: <Phone className="w-4 h-4" /> }
      ]
    },
    education: {
      text: "Arvind's educational background:",
      links: [
        { text: "B.Tech IT - Government Engineering College, Ajmer (2022-2026)", url: "#education" },
        { text: "12th - Meera Senior Secondary School, Ajmer (2020-2021)", url: "#education" },
        { text: "10th - URM School, Pushkar (2018-2019)", url: "#education" }
      ]
    },
    internship: {
      text: "Current internship experience:",
      links: [
        { text: "AI/ML Intern at Linux World Pvt. Ltd. (June 2025 - August 2025)", url: "#internship" }
      ]
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (input: string): { text: string; links?: Array<{ text: string; url: string; icon?: React.ReactNode }> } => {
    const lowerInput = input.toLowerCase();
    
    // Direct contact requests
    if (lowerInput.includes('phone number') || lowerInput.includes('mobile number') || lowerInput.includes('contact number') || lowerInput.includes('call')) {
      return {
        text: "📞 Arvind's phone number is: +91 70733 17709",
        links: [
          { text: "Call Now", url: "tel:+917073317709", icon: <Phone className="w-4 h-4" /> },
          { text: "WhatsApp", url: "https://wa.me/917073317709", icon: <Phone className="w-4 h-4" /> }
        ]
      };
    } else if (lowerInput.includes('email') && (lowerInput.includes('what') || lowerInput.includes('give') || lowerInput.includes('tell'))) {
      return {
        text: "📧 Arvind's email address is: arvindsinghrathore113@gmail.com",
        links: [
          { text: "Send Email", url: "mailto:arvindsinghrathore113@gmail.com", icon: <Mail className="w-4 h-4" /> }
        ]
      };
    } else if (lowerInput.includes('linkedin') && (lowerInput.includes('profile') || lowerInput.includes('link'))) {
      return {
        text: "🔗 Arvind's LinkedIn profile:",
        links: [
          { text: "LinkedIn Profile", url: "https://linkedin.com/in/arvind-singh-rathore-039789344", icon: <Linkedin className="w-4 h-4" /> }
        ]
      };
    } else if (lowerInput.includes('github') && (lowerInput.includes('profile') || lowerInput.includes('link'))) {
      return {
        text: "💻 Arvind's GitHub profile:",
        links: [
          { text: "GitHub Profile", url: "https://github.com/arvindsingh06", icon: <Github className="w-4 h-4" /> }
        ]
      };
    } else if (lowerInput.includes('instagram') && (lowerInput.includes('profile') || lowerInput.includes('link'))) {
      return {
        text: "📸 Arvind's Instagram profile:",
        links: [
          { text: "Instagram Profile", url: "https://instagram.com/arvind_singh_chawandiya", icon: <Instagram className="w-4 h-4" /> }
        ]
      };
    } else if (lowerInput.includes('whatsapp') && (lowerInput.includes('number') || lowerInput.includes('link'))) {
      return {
        text: "💬 Contact Arvind on WhatsApp: +91 70733 17709",
        links: [
          { text: "Open WhatsApp", url: "https://wa.me/917073317709", icon: <Phone className="w-4 h-4" /> }
        ]
      };
    } else if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
      return {
        text: "📄 You can download Arvind's resume from the hero section or contact him directly for the latest version.",
        links: [
          { text: "Go to Home", url: "#home" },
          { text: "Contact for Resume", url: "mailto:arvindsinghrathore113@gmail.com", icon: <Mail className="w-4 h-4" /> }
        ]
      };
    }
    // Specific project links
    else if (lowerInput.includes('email sender') || lowerInput.includes('send mail')) {
      return {
        text: "📧 Email Sender Web App - A streamlined application for sending emails with SMTP integration:",
        links: [
          { text: "View Email Sender Project", url: "https://github.com/arvindsingh06/send_mail", icon: <Github className="w-4 h-4" /> }
        ]
      };
    } else if (lowerInput.includes('phone call') || lowerInput.includes('call automation') || lowerInput.includes('make call')) {
      return {
        text: "📞 Phone Call Automation - Automated calling system built with Python:",
        links: [
          { text: "View Call Automation Project", url: "https://github.com/arvindsingh06/make_call", icon: <Github className="w-4 h-4" /> }
        ]
      };
    } else if (lowerInput.includes('whatsapp') && (lowerInput.includes('bot') || lowerInput.includes('message') || lowerInput.includes('automation'))) {
      return {
        text: "💬 WhatsApp Messenger Bot - Automated messaging using Twilio API:",
        links: [
          { text: "View WhatsApp Bot Project", url: "https://github.com/arvindsingh06/sendwhatsappmsg", icon: <Github className="w-4 h-4" /> }
        ]
      };
    } else if (lowerInput.includes('sms') || lowerInput.includes('text message') || lowerInput.includes('send sms')) {
      return {
        text: "📱 SMS Sender with Twilio - Bulk SMS automation system:",
        links: [
          { text: "View SMS Sender Project", url: "https://github.com/arvindsingh06/send_sms", icon: <Github className="w-4 h-4" /> }
        ]
      };
    }
    // General categories
    else if (lowerInput.includes('project') || lowerInput.includes('work') || lowerInput.includes('github')) {
      return portfolioData.projects;
    } else if (lowerInput.includes('skill') || lowerInput.includes('technology') || lowerInput.includes('programming')) {
      return portfolioData.skills;
    } else if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      return portfolioData.contact;
    } else if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('college') || lowerInput.includes('school')) {
      return portfolioData.education;
    } else if (lowerInput.includes('internship') || lowerInput.includes('experience') || lowerInput.includes('work')) {
      return portfolioData.internship;
    } else if (lowerInput.includes('about') || lowerInput.includes('who') || lowerInput.includes('background')) {
      return portfolioData.about;
    } else if (lowerInput.includes('all') || lowerInput.includes('everything') || lowerInput.includes('complete')) {
      return {
        text: "Here's Arvind's complete portfolio information:",
        links: [
          ...portfolioData.contact.links,
          ...portfolioData.projects.links,
          { text: "View Full Portfolio", url: "#home" }
        ]
      };
    } else {
      return {
        text: "I can help you with information about Arvind's projects, skills, education, internship, contact details, or general background. What specific area interests you?",
        links: [
          { text: "View Projects", url: "#projects" },
          { text: "Check Skills", url: "#skills" },
          { text: "Contact Info", url: "#contact" },
          { text: "About Arvind", url: "#about" }
        ]
      };
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(inputText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        links: response.links
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleLinkClick = (url: string) => {
    if (url.startsWith('#')) {
      const element = document.getElementById(url.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="relative">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 animate-spin-slow opacity-75 blur-sm scale-110"></div>
            
            {/* Main Button */}
            <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-300 border-2 border-white/20">
              <Bot className="w-8 h-8 text-white group-hover:animate-pulse" />
              
              {/* Floating Particles */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-ping"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-30"></div>
          </div>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
        }`}>
          <div className="bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/30 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Arvind's AI Assistant</h3>
                  <p className="text-white/80 text-xs">Portfolio Information Bot</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4 text-white" />
                  ) : (
                    <Minimize2 className="w-4 h-4 text-white" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-blue-50/50 to-purple-50/50 dark:from-slate-800/50 dark:to-slate-900/50">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.isBot
                          ? 'bg-white/80 dark:bg-slate-800/80 text-gray-800 dark:text-white backdrop-blur-sm border border-white/30'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      } shadow-lg`}>
                        <div className="flex items-start space-x-2">
                          {message.isBot && (
                            <Bot className="w-5 h-5 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          )}
                          {!message.isBot && (
                            <User className="w-5 h-5 mt-0.5 text-white flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm leading-relaxed">{message.text}</p>
                            {message.links && message.links.length > 0 && (
                              <div className="mt-3 space-y-2">
                                {message.links.map((link, index) => (
                                  <button
                                    key={index}
                                    onClick={() => handleLinkClick(link.url)}
                                    className="flex items-center space-x-2 w-full text-left p-2 bg-blue-100/50 dark:bg-slate-700/50 hover:bg-blue-200/50 dark:hover:bg-slate-600/50 rounded-lg transition-colors text-xs backdrop-blur-sm border border-blue-200/30 dark:border-slate-600/30"
                                  >
                                    {link.icon || <ExternalLink className="w-3 h-3" />}
                                    <span className="text-blue-800 dark:text-blue-300">{link.text}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 px-4 py-3 rounded-2xl shadow-lg">
                        <div className="flex items-center space-x-2">
                          <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-t border-white/20">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about projects, skills, contact..."
                      className="flex-1 px-4 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputText.trim()}
                      className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;