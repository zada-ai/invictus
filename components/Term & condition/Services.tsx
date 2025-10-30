 export default function TermsAndPolicies() {
  return (
 <div className="text-white text-center py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
        {/* ====== SERVICES ====== */}
        <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4">Services</h2>
        <div className="flex flex-col items-center space-y-2 mb-10">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>

        <div className="max-w-2xl mx-auto px-6 mb-16">
          <div className="group p-5 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-cyan-500/20 text-left">
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg md:text-xl font-light">
              Invictus Connect provides appointment-setting automation (
              <span className="text-cyan-400 font-semibold">RoofBot</span>) and CRM solutions for roofing companies.
            </p>
          </div>
        </div>

        {/* ====== PAYMENTS ====== */}
        <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4">Payments</h2>
        <div className="flex flex-col items-center space-y-2 mb-10">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
        </div>

        <div className="max-w-2xl mx-auto px-6 mb-16">
          <ul className="space-y-6 text-left text-lg md:text-xl font-light">
            {[
              "Services are billed monthly or annually depending on your plan.",
              "Payments are non-refundable.",
            ].map((item, index) => (
              <li
                key={index}
                className="group flex items-start space-x-4 p-4 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-pink-500/20"
              >
                <span className="text-pink-500 font-bold text-2xl group-hover:scale-125 transform transition-transform duration-300">
                  💳
                </span>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</p>
              </li>
            ))}
          </ul>
        </div>

      {/* ====== USER RESPONSIBILITIES ====== */}
      <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4">User Responsibilities</h2>
      <div className="flex flex-col items-center space-y-2 mb-10">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 mb-16">
        <ul className="space-y-6 text-left text-lg md:text-xl font-light">
          {[
            "You agree to provide accurate information when using our forms, chat, and scheduling tools.",
            "You are responsible for keeping your account information secure.",
          ].map((item, index) => (
            <li
              key={index}
              className="group flex items-start space-x-4 p-4 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-orange-500/20"
            >
              <span className="text-orange-500 font-bold text-2xl group-hover:scale-125 transform transition-transform duration-300">
                👤
              </span>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* ====== INTELLECTUAL PROPERTY ====== */}
      <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4">Intellectual Property</h2>
      <div className="flex flex-col items-center space-y-2 mb-10">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 mb-16">
        <ul className="space-y-6 text-left text-lg md:text-xl font-light">
          {[
            "All content, branding, and technology are the property of Invictus Connect.",
            "You may not copy, distribute, or reverse-engineer our services.",
          ].map((item, index) => (
            <li
              key={index}
              className="group flex items-start space-x-4 p-4 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-indigo-500/20"
            >
              <span className="text-indigo-500 font-bold text-2xl group-hover:scale-125 transform transition-transform duration-300">
                ⚙️
              </span>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* ====== LIMITATION OF LIABILITY ====== */}
      <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4">Limitation of Liability</h2>
      <div className="flex flex-col items-center space-y-2 mb-10">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 mb-16">
        <ul className="space-y-6 text-left text-lg md:text-xl font-light">
          {[
            "Invictus Connect is not liable for indirect damages, lost profits, or missed leads.",
            "Services are provided “as is” with no warranties.",
          ].map((item, index) => (
            <li
              key={index}
              className="group flex items-start space-x-4 p-4 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-red-500/20"
            >
              <span className="text-red-500 font-bold text-2xl group-hover:scale-125 transform transition-transform duration-300">
                ⚠️
              </span>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* ====== TERMINATION ====== */}
      <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4">Termination</h2>
      <div className="flex flex-col items-center space-y-2 mb-10">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 mb-16">
        <div className="group p-5 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-rose-500/20 text-left">
          <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg md:text-xl font-light">
            We may suspend or terminate services if these terms are violated.
          </p>
        </div>
      </div>

      {/* ====== GOVERNING LAW ====== */}
      <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4">Governing Law</h2>
      <div className="flex flex-col items-center space-y-2 mb-10">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 mb-16">
        <div className="group p-5 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-green-500/20 text-left">
          <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg md:text-xl font-light">
            These Terms are governed by the laws of <span className="text-green-400 font-semibold">Illinois, USA</span>.
          </p>
        </div>
      </div>

      {/* ====== CONTACT ====== */}
      <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4">Contact</h2>
      <div className="flex flex-col items-center space-y-2 mb-10">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <div className="group p-5 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-yellow-500/20 text-left">
          <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg md:text-xl font-light">
            For questions about these Terms or our Privacy Policy, contact us at{" "}
            <a
              href="mailto:invictusconnect@gmail.com"
              className="text-yellow-400 underline hover:text-yellow-300 transition-colors"
            >
              invictusconnect@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}