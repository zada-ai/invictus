"use client";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-[#080808] to-[#101020] text-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl uppercase font-extrabold mb-5 tracking-tight">
        Choose the <span className="text-blue-400">Plan</span> that fits your team best
      </h2>

      {/* Decorative Lines */}
      <div className="flex flex-col items-center space-y-2 mb-16">
        <div className="w-28 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10">
        {/* Starter Plan */}
        <div className="group relative flex-1 max-w-lg backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-blue-500/30">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="p-10 relative z-10 text-left">
            <h3 className="text-2xl font-bold text-blue-400 mb-3 text-center">Starter Plan</h3>
            <p className="text-xl font-semibold text-center text-white mb-8">$1,000 + $350/mo</p>

            <h4 className="text-blue-400 font-semibold mb-2">AI Integration</h4>
            <ul className="text-white/80 space-y-2 mb-5">
              <li>• 24/7 Full AI chat widget for your website</li>
              <li>• Automated appointment booking</li>
              <li>• SMS confirmations & reminders</li>
              <li>• Automatic follow-up messages</li>
            </ul>

            <h4 className="text-blue-400 font-semibold mb-2">Lead Management CRM</h4>
            <ul className="text-white/80 space-y-2">
              <li>• Centralized dashboard with all leads in one place</li>
              <li>• Automatic lead capture from website chat stored in CRM</li>
              <li>• Exportable lead data anytime</li>
              <li>• Track appointments, statuses, and notes</li>
              <li>• Standard support</li>
            </ul>

            <div className="mt-8 text-center">
              <button className="gradient-primary font-medium relative cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-block text-center px-4 py-2 text-sm rounded-full border-2 border-white/30">
                Get Starter Plan
              </button>
            </div>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="group relative flex-1 max-w-lg bg-gradient-to-br from-blue-600/20 to-blue-900/10 backdrop-blur-lg border border-blue-500/40 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:shadow-blue-500/50">
          
          {/* 🌟 31-Point Star Badge */}
          <div className="absolute -top-8 right-3 z-20 flex items-center justify-center pt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="w-20 h-20 text-yellow-400 animate-spin-slow"
            >
              <polygon
                points={Array.from({ length: 31 })
                  .map((_, i) => {
                    const angle = (i / 31) * Math.PI * 2;
                    const r = i % 2 === 0 ? 100 : 80;
                    const x = 100 + r * Math.cos(angle);
                    const y = 100 + r * Math.sin(angle);
                    return `${x},${y}`;
                  })
                  .join(" ")}
                fill="currentColor"
                stroke="#FFD700"
                strokeWidth="2"
              />
            </svg>
            <span className="absolute text-[10px] sm:text-xs font-bold text-black bg-yellow-300 px-2 py-1 rounded-md shadow-md uppercase tracking-wide">
              Best Seller
            </span>
          </div>

          <div className="p-10 relative z-10 text-left">
            <h3 className="text-2xl font-bold text-blue-400 mb-3 text-center">Pro Plan</h3>
            <p className="text-xl font-semibold text-center text-white mb-8">$3,942 / Year</p>
            <h4 className="text-blue-400 font-semibold mb-2">AI Integration</h4>
            <ul className="text-white/80 space-y-2 mb-5">
              <li>• Everything in Starter</li>
            </ul>

            <h4 className="text-blue-400 font-semibold mb-2">Lead Management CRM</h4>
            <ul className="text-white/80 space-y-2 mb-5">
              <li>• Everthing in Starter</li>
            </ul>
            <h4 className="text-blue-400 font-semibold mb-2">Plus+</h4>
            <ul className="text-white/80 space-y-2 mb-8">
              <li>• No setup fee</li>
              <li>• Priority onboarding + support</li>
            </ul>

            <div className="text-center">
              <button className="gradient-primary font-medium relative cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-block text-center px-4 py-2 text-sm rounded-full border-2 border-white/30">
                Get Pro Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

