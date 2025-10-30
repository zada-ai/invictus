"use client";

export default function Information() {
  return (
    <div className="text-white text-center py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
      {/* ========== Section: Information We Collect ========== */}
      <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4 text-white">
        Information We Collect
      </h2>

      <div className="flex flex-col items-center space-y-2 mb-10">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 mb-16">
        <ol className="space-y-6 text-left text-lg md:text-xl font-light">
          {[
            "Contact details you provide (name, email, phone number).",
            "Information submitted through forms, chat widgets, and scheduling tools.",
            "We may collect basic technical details like browser type and device info to help improve our website.",
          ].map((item, index) => (
            <li
              key={index}
              className="group flex items-start space-x-4 p-4 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-blue-500/20"
            >
              <span className="text-blue-500 font-bold text-2xl group-hover:scale-125 transform transition-transform duration-300">
                {index + 1}.
              </span>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* ========== Section: How We Use Your Information ========== */}
      <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4 text-white">
        How We Use Your Information
      </h2>

      <div className="flex flex-col items-center space-y-2 mb-10">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 mb-16">
        <ul className="space-y-6 text-left text-lg md:text-xl font-light">
          {[
            "To deliver and improve our services (including RoofBot and our CRM).",
            "To schedule and confirm demo appointments.",
            "To send reminders and follow-ups through third-party tools (e.g., Twilio, Google Calendar).",
            "To communicate with you about your account, services, or inquiries.",
          ].map((item, index) => (
            <li
              key={index}
              className="group flex items-start space-x-4 p-4 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-green-500/20"
            >
              <span className="text-green-500 font-bold text-2xl group-hover:scale-125 transform transition-transform duration-300">
                ✓
              </span>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* ========== Section: Sharing Information ========== */}
      <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4 text-white">
        Sharing Information
      </h2>

      <div className="flex flex-col items-center space-y-2 mb-10">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 mb-16">
        <ul className="space-y-6 text-left text-lg md:text-xl font-light">
          {[
            "We may share information with trusted third parties (e.g., Twilio, Google, Squarespace) strictly to provide our services.",
            "We do not sell or rent your information.",
          ].map((item, index) => (
            <li
              key={index}
              className="group flex items-start space-x-4 p-4 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-purple-500/20"
            >
              <span className="text-purple-500 font-bold text-2xl group-hover:scale-125 transform transition-transform duration-300">
                ➤
              </span>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* ========== Section: Data Security ========== */}
      <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4 text-white">
        Data Security
      </h2>

      <div className="flex flex-col items-center space-y-2 mb-10">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6 mb-16">
        <div className="group p-5 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-red-500/20 text-left">
          <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg md:text-xl font-light">
            We use industry-standard security measures to protect your information. However, no method of transmission is 100% secure.
          </p>
        </div>
      </div>

      {/* ========== Section: Your Rights ========== */}
      <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4 text-white">
        Your Rights
      </h2>

      <div className="flex flex-col items-center space-y-2 mb-10">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <ul className="space-y-6 text-left text-lg md:text-xl font-light">
          <li className="group flex items-start space-x-4 p-4 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-yellow-500/20">
            <span className="text-yellow-500 font-bold text-2xl group-hover:scale-125 transform transition-transform duration-300">
              ⚖️
            </span>
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
              You can request access, correction, or deletion of your personal information.
            </p>
          </li>

          <li className="group flex items-start space-x-4 p-4 rounded-xl bg-[#1a1a1a] hover:bg-[#1f2937] transition-all duration-300 shadow-md hover:shadow-yellow-500/20">
            <span className="text-yellow-500 font-bold text-2xl group-hover:scale-125 transform transition-transform duration-300">
              ✉️
            </span>
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
              To exercise your rights or ask questions, contact us at{" "}
              <a
                href="mailto:invictusconnect@gmail.com"
                className="text-yellow-400 underline hover:text-yellow-300 transition-colors"
              >
                invictusconnect@gmail.com
              </a>
              .
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
