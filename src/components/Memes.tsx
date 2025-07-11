import React, { useState } from 'react';
import { Laugh, RefreshCw, Code, Coffee, Bug } from 'lucide-react';

const Memes: React.FC = () => {
  const [currentMeme, setCurrentMeme] = useState(0);

  const memes = [
    {
      emoji: '💻',
      hindi: "Jab code first time mein run ho jaye toh lagta hai hum genius hain",
      english: "When code runs on the first try, we feel like geniuses",
      reaction: "Abhi screenshot leke LinkedIn pe post karna hai! 📸✨",
      icon: Code,
      color: 'from-green-500 to-emerald-600'
    },
    {
      emoji: '🐛',
      hindi: "1 bug fix karne gaye the, 99 naye bugs paida kar diye",
      english: "Went to fix 1 bug, created 99 new bugs",
      reaction: "Ab toh lagta hai naukri jaane wali hai! 😱💼",
      icon: Bug,
      color: 'from-red-500 to-pink-600'
    },
    {
      emoji: '☕',
      hindi: "Chai khatam ho gayi, ab code nahi chal raha",
      english: "Tea finished, now code is not working",
      reaction: "Chai = Code fuel! Bina chai ke sirf bugs aate hain! ☕️🐛",
      icon: Coffee,
      color: 'from-amber-500 to-orange-600'
    },
    {
      emoji: '🤖',
      hindi: "ChatGPT se code manga, usne bola 'Stack Overflow dekho'",
      english: "Asked ChatGPT for code, it said 'Check Stack Overflow'",
      reaction: "AI bhi copy-paste karta hai! Hum akele nahi hain! 🤖📋",
      icon: Code,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      emoji: '📊',
      hindi: "Machine Learning model train kar rahe the, model ne humein train kar diya",
      english: "Was training ML model, model trained us instead",
      reaction: "Ab model boss hai, hum intern! Accuracy 99%, salary 1%! 🤖💸",
      icon: Code,
      color: 'from-purple-500 to-violet-600'
    },
    {
      emoji: '🔄',
      hindi: "Infinite loop laga diya, ab laptop fan helicopter ban gaya",
      english: "Created infinite loop, laptop fan became helicopter",
      reaction: "Task Manager bhi dar ke bhag gaya! 🚁💻",
      icon: RefreshCw,
      color: 'from-teal-500 to-green-600'
    },
    {
      emoji: '🎯',
      hindi: "Client bola 'Simple sa website banao', 50 revisions baad...",
      english: "Client said 'Make simple website', after 50 revisions...",
      reaction: "Simple matlab NASA ka rocket! 🚀🤯",
      icon: Code,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      emoji: '🔥',
      hindi: "Production mein deploy kiya, sab kuch crash ho gaya",
      english: "Deployed to production, everything crashed",
      reaction: "It works on my machine! Mera laptop magic hai kya?! 💻✨",
      icon: Code,
      color: 'from-red-600 to-orange-600'
    },
    {
      emoji: '🧠',
      hindi: "Raat bhar code kiya, subah dekha toh variable name 'asdfgh' tha",
      english: "Coded all night, morning saw variable name was 'asdfgh'",
      reaction: "3 AM ka brain.exe has stopped working! 🧟‍♂️",
      icon: Code,
      color: 'from-pink-500 to-rose-600'
    },
    {
      emoji: '💡',
      hindi: "Stackoverflow se code copy kiya, comment mein 'This code is shit' likha tha",
      english: "Copied code from Stackoverflow, comment said 'This code is shit'",
      reaction: "Phir bhi use kar liya! Desperate times! 😅💩",
      icon: Code,
      color: 'from-yellow-500 to-amber-600'
    },
    {
      emoji: '⏰',
      hindi: "Manager: 'Ye feature 1 din mein ho jayega na?' Me: 'Haan bilkul!' *2 weeks later*",
      english: "Manager: 'This feature will be done in 1 day right?' Me: 'Yes absolutely!' *2 weeks later*",
      reaction: "Time estimation = Random number generator! 🎲⏳",
      icon: Code,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      emoji: '🎭',
      hindi: "Git commit message: 'Fixed bug' *Actually broke 5 more things*",
      english: "Git commit message: 'Fixed bug' *Actually broke 5 more things*",
      reaction: "Git history = Fiction novel! 📚🤥",
      icon: Code,
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const nextMeme = () => {
    setCurrentMeme((prev) => (prev + 1) % memes.length);
  };

  const currentMemeData = memes[currentMeme];

  return (
    <section id="memes" className="py-12 bg-gray-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Transparency Background with Falling Meme Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 to-orange-50/20 dark:from-yellow-900/10 dark:to-orange-900/5"></div>
        
        {/* Falling Meme Emojis */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`falling-meme-${i}`}
            className="absolute falling-meme"
            style={{
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
              fontSize: `${20 + i * 3}px`,
              opacity: 0.6,
            }}
          >
            {['😂', '🤣', '😆', '😄', '🤓', '😅', '🤪', '😜'][i % 8]}
          </div>
        ))}
        
        {/* Floating Laughing Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`floating-laugh-${i}`}
            className="absolute floating-laugh"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 30}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${4 + i * 0.3}s`,
              fontSize: `${16 + i * 2}px`,
              opacity: 0.4,
            }}
          >
            {['😊', '😋', '😎', '🤗', '😌', '😉'][i % 6]}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Laugh className="w-6 h-6 text-yellow-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Developer Memes
              </h2>
              <Laugh className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-4"></div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Because every developer needs some humor in their debugging sessions! 😄
            </p>
          </div>

          {/* Meme Card */}
          <div className="relative">
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transform hover:scale-102 transition-all duration-300">
              {/* Header */}
              <div className={`bg-gradient-to-r ${currentMemeData.color} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{currentMemeData.emoji}</div>
                    <div>
                      <h3 className="text-lg font-bold">Programmer Life</h3>
                      <p className="text-white/80 text-xs">Meme #{currentMeme + 1} of {memes.length}</p>
                    </div>
                  </div>
                  <currentMemeData.icon className="w-6 h-6 opacity-80" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="space-y-3">
                  {/* Hindi Text */}
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      "{currentMemeData.hindi}"
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                      ({currentMemeData.english})
                    </p>
                  </div>

                  {/* Reaction */}
                  <div className="text-center p-4 bg-yellow-100/80 dark:bg-yellow-900/30 backdrop-blur-sm rounded-lg border-l-4 border-yellow-500">
                    <p className="text-lg font-medium text-yellow-800 dark:text-yellow-300">
                      {currentMemeData.reaction}
                    </p>
                  </div>
                </div>

                {/* Next Button */}
                <div className="text-center mt-8">
                  <button
                    onClick={nextMeme}
                    className="group inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                    <span>Next Meme</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Meme Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {memes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentMeme(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentMeme
                    ? 'bg-yellow-500 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-yellow-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memes;