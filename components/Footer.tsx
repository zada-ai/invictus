"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b12] text-gray-300 border-t border-white/10 py-10 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/Invictus_TBG_P.png"
            alt="Invictus Connect Logo"
            className="w-40 sm:w-48 md:w-56 h-auto object-contain"
          />
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-xl font-semibold text-white tracking-wide">
            Contact Info
          </h3>
          <p className="text-sm hover:text-blue-400 transition">
            invictusconnect@gmail.com
          </p>
          <p className="text-sm hover:text-blue-400 transition">
            (630) 857-6655
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#"
            className="text-sm hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm hover:text-blue-400 transition-colors"
          >
            Terms & Conditions
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      {/* Bottom Text */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-semibold">Invictus Connect</span>.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
