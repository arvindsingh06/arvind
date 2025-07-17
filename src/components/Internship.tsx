import React from 'react';
import { Briefcase, Calendar, MapPin, Users, Target, TrendingUp } from 'lucide-react';

const Internship: React.FC = () => {
  const internshipData = {
    position: 'AI/ML Intern',
    company: 'Linux World Pvt. Ltd.',
    duration: 'June 2025 - August 2025',
    location: 'Remote',
    status: 'Upcoming',
    description: 'Excited to join Linux World as an AI/ML Intern where I will work on cutting-edge machine learning projects, contribute to real-world AI solutions, and gain hands-on experience with industry-standard tools and practices.',
    responsibilities: [
      'Develop and implement machine learning models for various business applications',
      'Work with large datasets to extract meaningful insights and patterns',
      'Collaborate with senior developers on AI-driven product features',
      'Participate in code reviews and follow best practices for ML development',
      'Research and experiment with new AI/ML technologies and frameworks',
      'Document findings and present results to the technical team'
    ],
    skills: [
      'Python Programming',
      'Machine Learning',
      'Data Analysis',
      'TensorFlow/PyTorch',
      'Data Visualization',
      'Statistical Analysis'
    ],
    expectations: [
      {
        icon: Target,
        title: 'Learning Goals',
        description: 'Gain practical experience in deploying ML models in production environments',
        color: 'from-blue-500 to-blue-600'
      },
      {
        icon: Users,
        title: 'Team Collaboration',
        description: 'Work closely with experienced professionals and learn industry best practices',
        color: 'from-green-500 to-green-600'
      },
      {
        icon: TrendingUp,
        title: 'Skill Development',
        description: 'Enhance technical skills and gain exposure to enterprise-level AI solutions',
        color: 'from-purple-500 to-purple-600'
      }
    ]
  };

  return (
    <section id="internship" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Internship Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional experience and upcoming opportunities in AI/ML development
            </p>
          </div>

          {/* Main Internship Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-12 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div className="flex flex-col lg:flex-row lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Company Info */}
              <div className="lg:w-1/3">
                <div className="flex items-center mb-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white mr-4">
                    <Briefcase className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{internshipData.position}</h3>
                    <p className="text-orange-500 font-semibold">{internshipData.company}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{internshipData.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{internshipData.location}</span>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                    {internshipData.status}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {internshipData.description}
                </p>
              </div>

              {/* Details */}
              <div className="lg:w-2/3 space-y-8">
                {/* Responsibilities */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Responsibilities</h4>
                  <div className="grid gap-3">
                    {internshipData.responsibilities.map((responsibility, index) => (
                      <div
                        key={index}
                        className="flex items-start bg-gray-50 dark:bg-gray-800 rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {internshipData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium hover:from-orange-500/30 hover:to-orange-600/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expectations Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {internshipData.expectations.map((expectation, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-r ${expectation.color} text-white mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg w-fit`}>
                  <expectation.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-teal-400 transition-all duration-500">
                  {expectation.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {expectation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;