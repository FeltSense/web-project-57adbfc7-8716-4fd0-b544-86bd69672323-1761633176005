export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhjNWZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Real Results, Real Stories
      </h2>
      <p className="text-xl text-purple-200 max-w-2xl mx-auto">
        Hear from our members who transformed their lives at PulseCore
      </p>
    </div>

    <div className="relative">
      <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
        {/* Testimonial 1 */}
        <div className="min-w-[340px] md:min-w-[400px] snap-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                SM
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Sarah Mitchell</h3>
                <p className="text-purple-300 text-sm">Marketing Director</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-purple-100 leading-relaxed mb-4">
              "Lost 28 pounds in 4 months! The trainers created a personalized plan that fit my busy schedule. The morning HIIT classes are intense but addictive. I've never felt stronger or more confident."
            </p>
            <div className="flex items-center gap-2 text-sm text-purple-300">
              <span className="bg-purple-500/30 px-3 py-1 rounded-full">Member for 6 months</span>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="min-w-[340px] md:min-w-[400px] snap-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                JC
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">James Chen</h3>
                <p className="text-purple-300 text-sm">Software Engineer</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-purple-100 leading-relaxed mb-4">
              "After years of desk work destroying my posture, PulseCore's strength training program completely reversed my back pain. The equipment is top-notch and the community atmosphere keeps me motivated every single session."
            </p>
            <div className="flex items-center gap-2 text-sm text-purple-300">
              <span className="bg-purple-500/30 px-3 py-1 rounded-full">Member for 1 year</span>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="min-w-[340px] md:min-w-[400px] snap-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
                ER
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Emily Rodriguez</h3>
                <p className="text-purple-300 text-sm">High School Teacher</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-purple-100 leading-relaxed mb-4">
              "The yoga and spin classes are phenomenal! I've improved my flexibility dramatically and my stress levels have dropped. The instructors remember your name and push you just the right amount. Worth every penny."
            </p>
            <div className="flex items-center gap-2 text-sm text-purple-300">
              <span className="bg-purple-500/30 px-3 py-1 rounded-full">Member for 8 months</span>
            </div>
          </div>
        </div>

        {/* Testimonial 4 */}
        <div className="min-w-[340px] md:min-w-[400px] snap-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-2xl font-bold">
                MT
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Marcus Thompson</h3>
                <p className="text-purple-300 text-sm">Restaurant Owner</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-purple-100 leading-relaxed mb-4">
              "At 52, I thought my athletic days were behind me. PulseCore proved me wrong! The personal training sessions helped me build muscle I didn't know I could have. My energy levels are like I'm in my 30s again."
            </p>
            <div className="flex items-center gap-2 text-sm text-purple-300">
              <span className="bg-purple-500/30 px-3 py-1 rounded-full">Member for 2 years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicators */}
      <div className="flex justify-center gap-2 mt-8">
        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
        <div className="w-2 h-2 rounded-full bg-purple-400/40"></div>
        <div className="w-2 h-2 rounded-full bg-purple-400/40"></div>
        <div className="w-2 h-2 rounded-full bg-purple-400/40"></div>
      </div>
    </div>

    <div className="text-center mt-12">
      <p className="text-purple-200 text-lg mb-6">Join over 2,000+ members transforming their lives</p>
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105">
        Start Your Journey Today
      </button>
    </div>
  </div>
</section>
  );
}