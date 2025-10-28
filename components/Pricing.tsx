export default function Pricing() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-5xl font-light text-gray-900 mb-4 tracking-tight">
        Membership Plans
      </h2>
      <p className="text-lg text-gray-500 font-light">
        Choose the perfect plan to achieve your fitness goals
      </p>
    </div>

    {/* Pricing List */}
    <div className="space-y-1">
      {/* Basic Tier */}
      <div className="group border-b border-gray-200 hover:border-gray-900 transition-all duration-300">
        <div className="py-8 flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-baseline gap-4 mb-3">
              <h3 className="text-2xl font-light text-gray-900">Basic</h3>
              <span className="text-sm text-gray-500 font-light">Perfect for beginners</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 font-light">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Access to gym floor during off-peak hours
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Basic cardio and strength equipment
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Locker room access
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Monthly fitness assessment
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-8 ml-8">
            <div className="text-right">
              <div className="text-4xl font-light text-gray-900">$29</div>
              <div className="text-sm text-gray-500 font-light">per month</div>
            </div>
            <button className="px-8 py-3 bg-gray-900 text-white text-sm font-light hover:bg-gray-800 transition-colors duration-300 opacity-0 group-hover:opacity-100">
              Select Plan
            </button>
          </div>
        </div>
      </div>

      {/* Core Tier */}
      <div className="group border-b border-gray-200 hover:border-gray-900 transition-all duration-300 bg-gray-50">
        <div className="py-8 flex items-center justify-between px-6">
          <div className="flex-1">
            <div className="flex items-baseline gap-4 mb-3">
              <h3 className="text-2xl font-light text-gray-900">Core</h3>
              <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-light">POPULAR</span>
              <span className="text-sm text-gray-500 font-light">Most popular choice</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 font-light">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-900 rounded-full"></span>
                24/7 unlimited gym access
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-900 rounded-full"></span>
                All equipment including premium machines
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-900 rounded-full"></span>
                5 group fitness classes per month
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-900 rounded-full"></span>
                Free guest pass (2x per month)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-900 rounded-full"></span>
                Personalized workout plan
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-900 rounded-full"></span>
                Nutrition consultation (quarterly)
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-8 ml-8">
            <div className="text-right">
              <div className="text-4xl font-light text-gray-900">$59</div>
              <div className="text-sm text-gray-500 font-light">per month</div>
            </div>
            <button className="px-8 py-3 bg-gray-900 text-white text-sm font-light hover:bg-gray-800 transition-colors duration-300 opacity-0 group-hover:opacity-100">
              Select Plan
            </button>
          </div>
        </div>
      </div>

      {/* Elite Tier */}
      <div className="group border-b border-gray-200 hover:border-gray-900 transition-all duration-300">
        <div className="py-8 flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-baseline gap-4 mb-3">
              <h3 className="text-2xl font-light text-gray-900">Elite</h3>
              <span className="text-sm text-gray-500 font-light">For serious athletes</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 font-light">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Everything in Core, plus:
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Unlimited group fitness classes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                4 personal training sessions per month
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Access to recovery zone (sauna, cold plunge)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Monthly body composition analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Priority class booking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Complimentary towel service
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-8 ml-8">
            <div className="text-right">
              <div className="text-4xl font-light text-gray-900">$99</div>
              <div className="text-sm text-gray-500 font-light">per month</div>
            </div>
            <button className="px-8 py-3 bg-gray-900 text-white text-sm font-light hover:bg-gray-800 transition-colors duration-300 opacity-0 group-hover:opacity-100">
              Select Plan
            </button>
          </div>
        </div>
      </div>

      {/* Premium Tier */}
      <div className="group border-b border-gray-200 hover:border-gray-900 transition-all duration-300">
        <div className="py-8 flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-baseline gap-4 mb-3">
              <h3 className="text-2xl font-light text-gray-900">Premium</h3>
              <span className="text-sm text-gray-500 font-light">Ultimate fitness experience</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 font-light">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Everything in Elite, plus:
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                8 personal training sessions per month
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Dedicated fitness coach
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Custom meal planning and nutrition coaching
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Private locker with laundry service
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Unlimited guest passes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Access to exclusive member events
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Complimentary sports massage (monthly)
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-8 ml-8">
            <div className="text-right">
              <div className="text-4xl font-light text-gray-900">$149</div>
              <div className="text-sm text-gray-500 font-light">per month</div>
            </div>
            <button className="px-8 py-3 bg-gray-900 text-white text-sm font-light hover:bg-gray-800 transition-colors duration-300 opacity-0 group-hover:opacity-100">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Note */}
    <div className="mt-16 text-center">
      <p className="text-sm text-gray-500 font-light mb-4">
        All memberships include no commitment • Cancel anytime • First week free trial
      </p>
      <p className="text-xs text-gray-400 font-light">
        Secure payment processing powered by Stripe
      </p>
    </div>
  </div>
</section>
  );
}