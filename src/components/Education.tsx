import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Government Engineering College, Ajmer',
      duration: '2022 - 2026',
      location: 'Ajmer, Rajasthan',
      status: 'Currently Pursuing',
      description: 'Specializing in AI/ML, Data Structures, Algorithms, and Software Development. Active participant in coding competitions and technical events.',
      highlights: [
        'Focus on Artificial Intelligence and Machine Learning',
        'Strong foundation in Data Structures and Algorithms',
        'Hands-on experience with Python and C programming',
        'Active in college technical societies and events'
      ],
      color: 'from-blue-500 to-blue-600',
      icon: GraduationCap
    },
    {
      degree: 'Higher Secondary Education (12th)',
      institution: 'Meera Senior Secondary School, Ajmer',
      duration: '2020 - 2021',
      location: 'Ajmer, Rajasthan',
      status: 'Completed',
      description: 'Completed higher secondary education with focus on Science stream (PCM - Physics, Chemistry, Mathematics).',
      highlights: [
        'Science stream with PCM subjects',
        'Strong mathematical foundation',
        'Developed analytical thinking skills',
        'Prepared foundation for engineering studies'
      ],
      color: 'from-green-500 to-green-600',
      icon: BookOpen
    },
    {
      degree: 'Secondary Education (10th)',
      institution: 'URM School, Pushkar',
      duration: '2018 - 2019',
      location: 'Pushkar, Rajasthan',
      status: 'Completed',
      description: 'Completed secondary education with excellent academic performance and developed interest in mathematics and science.',
      highlights: [
        'Strong academic performance',
        'Developed interest in STEM subjects',
        'Participated in school competitions',
        'Built foundation for higher studies'
      ],
      color: 'from-purple-500 to-purple-600',
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic journey and educational milestones
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl">
                  {/* Academic symbols */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute academic-symbol"
                      style={{
                        left: `${5 + (i * 12)}%`,
                        top: `${10 + (i * 8)}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    >
                      <div className={`hexagon bg-gradient-to-br ${edu.color} opacity-15`}></div>
                    </div>
                  ))}
                  
                  {/* Knowledge particles */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={`knowledge-${i}`}
                      className="absolute knowledge-particle"
                      style={{
                        right: `${Math.random() * 100}%`,
                        bottom: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} opacity-25`}></div>
                    </div>
                  ))}

                  {/* Education wave */}
                  <div className="absolute inset-0 education-wave">
                    <div className={`w-full h-full bg-gradient-to-r ${edu.color} opacity-5`}></div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-r ${edu.color} text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <edu.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-500">
                        {edu.degree}
                      </h3>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${edu.color} text-white mt-2 md:mt-0`}>
                        {edu.status}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid md:grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="flex items-center text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mr-3 flex-shrink-0`}></div>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
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

export default Education;