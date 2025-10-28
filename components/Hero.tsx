export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
  {/* Animated Gradient Overlay */}
  <div className="absolute inset-0 opacity-50">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x"></div>
  </div>
  
  {/* Animated Gradient Orbs */}
  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
  <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
  <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

  {/* Floating Text Elements */}
  <div className="absolute top-20 left-10 text-white/20 text-6xl font-bold animate-float">STRENGTH</div>
  <div className="absolute top-40 right-20 text-white/20 text-5xl font-bold animate-float animation-delay-1000">CARDIO</div>
  <div className="absolute bottom-32 left-20 text-white/20 text-5xl font-bold animate-float animation-delay-2000">YOGA</div>
  <div className="absolute bottom-20 right-32 text-white/20 text-6xl font-bold animate-float animation-delay-3000">HIIT</div>

  {/* Content Container */}
  <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
    {/* Main Headline */}
    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tight">
      Transform Your Body,
      <span className="block mt-2 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
        Elevate Your Life
      </span>
    </h1>

    {/* Subheadline */}
    <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
      Join PulseCore Fitness Studio for expert-led group classes, personalized training, and a supportive community that fuels your fitness journey
    </p>

    {/* Key Value Props */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
        <div className="text-4xl mb-3">💪</div>
        <h3 className="text-lg font-bold text-white mb-2">Diverse Classes</h3>
        <p className="text-gray-300 text-sm">HIIT, yoga, spin, strength training, and more for all fitness levels</p>
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
        <div className="text-4xl mb-3">🏆</div>
        <h3 className="text-lg font-bold text-white mb-2">Certified Trainers</h3>
        <p className="text-gray-300 text-sm">Experienced professionals dedicated to your success and safety</p>
      </div>
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
        <div className="text-4xl mb-3">✨</div>
        <h3 className="text-lg font-bold text-white mb-2">Flexible Memberships</h3>
        <p className="text-gray-300 text-sm">No long-term contracts, cancel anytime, pay-as-you-go options</p>
      </div>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <a href="#membership" className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
        <span className="relative z-10">Start Your Free Trial</span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
      <a href="#schedule" className="px-10 py-5 bg-white/10 backdrop-blur-lg text-white text-lg font-bold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-xl">
        View Class Schedule
      </a>
    </div>

    {/* Social Proof */}
    <div className="mt-12 flex items-center justify-center gap-3 text-gray-300">
      <div className="flex -space-x-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border-2 border-white"></div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 border-2 border-white"></div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 border-2 border-white"></div>
      </div>
      <p className="text-sm font-medium">
        <span className="text-white font-bold">2,500+ members</span> crushing their fitness goals
      </p>
    </div>
  </div>

  <style jsx>{`
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 15s ease infinite;
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animation-delay-1000 {
      animation-delay: 1s;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    .animation-delay-3000 {
      animation-delay: 3s;
    }
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
</section>
  );
}