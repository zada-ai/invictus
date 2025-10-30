"use client"
import GradientBlinds from "@/components/GradientBlinds"
import Navbar from "@/components/Navbar"
import Work from "@/components/Work";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer  from "@/components/Footer";

export default function Home() {

  const handleBookingClick = () => {
    window.location.href = 'https://roofbot-crm-frontend-ege1.vercel.app/'
  }

  return (
    <>
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Animated Gradient Background */}
      <div className="fixed inset-0 w-full h-full flex items-center justify-center">
        <GradientBlinds
          gradientColors={["#5a59c2", "#7877E6", "#9c9bef", "#b8b7f5"]}
          angle={15}
          noise={0.25}
          blindCount={13}
          blindMinWidth={50}
          spotlightRadius={0.38}
          spotlightSoftness={1.6}
          spotlightOpacity={0.42}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="overlay"
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center justify-center min-h-screen w-full px-5 sm:px-20">
            <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
              <div className="bg-[var(--primary)] px-2 py-2">
                <h3 className="text-white text-xl font-semibold">AI-Powered CRM & Lead Management for Roofers</h3>
              </div>
              <h1 className="text-5xl font-bold uppercase leading-tight tracking-tight text-white md:text-7xl text-balance drop-shadow-2xl">
                Never Miss a Roofing
                <br />
                Lead Again
              </h1>
              <p className="text-xl text-white/90 max-w-3xl text-pretty drop-shadow-lg">
              2x your lead generation and never lose a customer again. Invictus RoofBot books appointments, sends reminders, and keeps everything organized inside our CRM.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button onClick={handleBookingClick} className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent shadow-2xl">
                  Book a demo
                </button>
                <button className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent shadow-xl">
                  Explore More
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
          <section className="relative z-10">
          <Work />
        </section>
        <section className="relative z-10">
          <Features />
        </section>
        <section className="relative z-10">
          <Pricing />
        </section>
        <section className="relative z-10">
          <Footer />
        </section>
    </main>
    
    
    </>
  )
}
