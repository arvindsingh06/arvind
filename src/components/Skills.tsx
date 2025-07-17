import React from 'react';
import { Code, Database, Globe, Cpu, BarChart3, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C Programming', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      icon: Database,
      title: 'Data Science & ML',
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'scikit-learn', level: 85 },
        { name: 'Pandas', level: 88 },
        { name: 'NumPy', level: 82 },
        { name: 'Matplotlib', level: 78 }
      ]
    },
    {
      icon: Globe,
      title: 'Web Development',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Streamlit', level: 80 },
        { name: 'HTML/CSS', level: 75 },
        { name: 'React', level: 70 },
        { name: 'FastAPI', level: 72 }
      ]
    },
    {
      icon: Cpu,
      title: 'AI/ML Tools',
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'TensorFlow', level: 75 },
        { name: 'OpenCV', level: 70 },
        { name: 'Jupyter', level: 85 },
        { name: 'Google Colab', level: 88 }
      ]
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'Data Visualization', level: 82 },
        { name: 'Statistical Analysis', level: 78 },
        { name: 'Data Cleaning', level: 85 },
        { name: 'EDA', level: 80 }
      ]
    },
    {
      icon: GitBranch,
      title: 'Tools & Platforms',
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'Git', level: 78 },
        { name: 'GitHub', level: 80 },
        { name: 'VS Code', level: 85 },
        { name: 'Linux', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:animate-pulse`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${skillIndex * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl">
                  {/* Floating geometric shapes */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute geometric-shape"
                      style={{
                        left: `${10 + (i * 15)}%`,
                        top: `${15 + (i * 12)}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    >
                      <div className={`diamond bg-gradient-to-br ${category.color} opacity-20`}></div>
                    </div>
                  ))}
                  
                  {/* Code symbols */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={`code-${i}`}
                      className="absolute code-symbol text-gray-400 dark:text-gray-600 text-2xl font-mono opacity-10"
                      style={{
                        right: `${5 + (i * 8)}%`,
                        bottom: `${10 + (i * 15)}%`,
                        animationDelay: `${i * 0.3}s`,
                      }}
                    >
                      {['<>', '{}', '[]', '()'][i]}
                    </div>
                  ))}

                  {/* Pulse circles */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={`pulse-${i}`}
                      className="absolute pulse-circle rounded-full border-2 border-gray-300 dark:border-gray-600 opacity-10"
                      style={{
                        left: `${20 + (i * 25)}%`,
                        top: `${30 + (i * 20)}%`,
                        width: `${20 + (i * 10)}px`,
                        height: `${20 + (i * 10)}px`,
                        animationDelay: `${i * 0.4}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;