import React from "react";
import { useNavigate } from "react-router-dom";
import { PlayCircle, Zap, Trophy, Target, Brain, Star, TrendingUp } from "lucide-react";

const StartPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  const features = [
    {
      icon: Brain,
      title: "Smart Questions",
      description: "Curated challenges that adapt to your knowledge level"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get immediate results and learn as you go"
    },
    {
      icon: Trophy,
      title: "Track Progress",
      description: "Monitor your improvement with detailed analytics"
    }
  ];

  const stats = [
    { value: "1000+", label: "Questions" },
    { value: "95%", label: "Accuracy" },
    { value: "10K+", label: "Users" }
  ];

  const categories = [
    { name: "Science", color: "from-purple-400 to-pink-400", emoji: "🔬" },
    { name: "History", color: "from-amber-400 to-orange-400", emoji: "📚" },
    { name: "Geography", color: "from-green-400 to-emerald-400", emoji: "🌍" },
    { name: "Technology", color: "from-blue-400 to-cyan-400", emoji: "💻" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        {/* Hero Section */}
        <div className="text-center mb-20 md:mb-32">
          {/* Logo Badge */}
          <div className="inline-block mb-8 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="relative w-28 h-28 mx-auto bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                <PlayCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text">
              Master Your
            </span>
            <span className="block text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text">
              Knowledge
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Challenge yourself with engaging quizzes designed to test and expand your knowledge.
            <span className="block mt-2 text-gray-500">Start your journey to becoming a quiz master today.</span>
          </p>

          {/* CTA Button */}
          <button
            onClick={handleStart}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <PlayCircle className="w-6 h-6 relative z-10 group-hover:rotate-90 transition-transform duration-300" strokeWidth={2.5} />
            <span className="relative z-10">Start Quiz Now</span>
          </button>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose QuizMaster?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience a quiz platform designed with your learning journey in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-20 md:mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Explore Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dive into diverse categories and discover your areas of expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    {category.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Quote Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden mb-20 md:mb-32">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <Star className="w-12 h-12 text-white/80 mx-auto mb-6" strokeWidth={2} />
            <blockquote className="text-2xl md:text-4xl font-bold text-white mb-6 leading-relaxed">
              "The beautiful thing about learning is that nobody can take it away from you."
            </blockquote>
            <p className="text-lg text-white/90 font-medium">
              — B.B. King
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <TrendingUp className="w-4 h-4" />
            <span>Join thousands of learners</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ready to Begin?
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Your journey to knowledge mastery starts with a single click
          </p>
          
          <button
            onClick={handleStart}
            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gray-900 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-gray-900/50 transform hover:scale-105 transition-all duration-300"
          >
            <Target className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" strokeWidth={2.5} />
            <span>Let's Go!</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default StartPage;