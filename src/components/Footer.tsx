import React from 'react';
import { Heart, Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:arvindsinghrathore113@gmail.com',
      label: 'Email'
    },
    {
      icon: Phone,
      href: 'tel:+917073317709',
      label: 'Phone'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/arvind-singh-rathore-039789344',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/arvindsingh06',
      label: 'GitHub'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/arvind_singh_chawandiya',
      label: 'Instagram'
    }
  ];

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Arvind Singh Rathore
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                AI/ML Engineer passionate about building intelligent solutions 
                and analyzing data to drive meaningful insights.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {['About', 'Projects', 'Skills', 'Education', 'Memes', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-left text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 dark:bg-slate-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <span>© {currentYear} Arvind Singh Rathore. All rights reserved.</span>
              </div>

              {/* Made with Love */}
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <span>Designed & Developed with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>by Arvind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;