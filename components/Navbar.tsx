"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import LogoLight from "@/public/Invictus_TBG_P.png"




export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 120
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const handleWalletConnect = () => {
    setIsWalletConnected(!isWalletConnected)
  }

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full backdrop-blur-md md:flex border transition-all duration-300 ${
          isScrolled ? "max-w-4xl px-2 border-white/20 shadow-lg" : "max-w-6xl px-4 border-transparent shadow-none"
        } py-2`}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
          background: isScrolled ? "rgba(15, 15, 15, 0.8)" : "transparent",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <a
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
            isScrolled ? "ml-4" : ""
          }`}
          href="/"
          rel="noopener noreferrer"
        >
          <Image src={LogoLight} className="text-foreground w-27 rounded" alt="Invictus"/>
        </a>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-white/70 transition duration-200 hover:text-white md:flex md:space-x-2">
          <a className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer" href="/">
            <span className="relative z-20">Home</span>
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault()
              handleMobileNavClick("how-it-works")
            }}
            className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <span className="relative z-20">How it works?</span>
          </a>
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault()
              handleMobileNavClick("features")
            }}
            className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <span className="relative z-20">Features</span>
          </a>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault()
              handleMobileNavClick("pricing")
            }}
            className="relative px-4 py-2 text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <span className="relative z-20">Pricing</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleWalletConnect}
            className={` font-medium relative cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-block text-center px-4 py-2 text-sm rounded-full border-2 border-white/30 ${
              isWalletConnected
                ? "bg-green-500/20 border-green-400/30 text-green-300 hover:bg-green-500/30"
                : "gradient-primary "
            }`}
          >
            {isWalletConnected ? "0x1234...5678" : "Book a demo"}
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={`fixed top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full backdrop-blur-md md:hidden px-4 py-3 border transition-all duration-300 ${
          isScrolled ? "border-white/20 shadow-lg" : "border-transparent shadow-none"
        }`}
        style={{
          background: isScrolled ? "rgba(15, 15, 15, 0.8)" : "transparent",
          left: "1rem",
          right: "1rem",
          width: "calc(100% - 2rem)",
        }}
      >
        <a
          className={`flex items-center justify-center gap-2 transition-all duration-300 ${
            isScrolled ? "ml-4" : ""
          }`}
          href="/"
          rel="noopener noreferrer"
        >
          <Image src={LogoLight} className="text-foreground w-27 rounded" alt="Invictus" />
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 transition-colors hover:bg-white/10"
          aria-label="Toggle menu"
          style={{ background: "rgba(255, 255, 255, 0.05)" }}
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div
            className="absolute top-24 left-4 right-4 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6"
            style={{ background: "rgba(255, 255, 255, 0.1)" }}
          >
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault()
                  setIsMobileMenuOpen(false)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                Home
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault()
                  handleMobileNavClick("how-it-works")
                }}
                className="text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                How it works?
              </a>
              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault()
                  handleMobileNavClick("features")
                }}
                className="text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault()
                  handleMobileNavClick("pricing")
                }}
                className="text-left px-4 py-3 text-lg font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                Pricing
              </a>
              <div className="border-t border-white/20 pt-4 mt-4 flex flex-col space-y-3">
                <button
                  onClick={handleWalletConnect}
                  className={`px-4 py-3 text-lg font-bold text-center rounded-lg transition-all duration-200 border ${
                    isWalletConnected
                      ? "bg-green-500/20 border-green-400/30 text-green-300"
                      : "bg-gradient-to-r from-blue-900 to-blue-600 border-blue-400/30 text-white"
                  }`}
                >
                  {isWalletConnected ? "0x1234...5678" : "Book a demo"}
                </button>
              </div>
            </nav>
          </div>
        </div>
        
      )}



    </>
  )
}
