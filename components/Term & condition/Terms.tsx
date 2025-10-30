"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientBlinds from "@/components/GradientBlinds";
import Services from "@/components/Term & condition/Services";

export default function TermsAndPolicies() {
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
             
             {/* Privacy Content */}
              <div className="relative z-10 flex min-h-screen flex-col">
             {/* Hero Section */}
             <div className="flex-1 flex items-center justify-center">
               <div className="flex items-center justify-center min-h-screen w-full px-5 sm:px-20">
                 <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
                   <div className="bg-[var(--primary)] px-2 py-2">
                     <h3 className="text-white text-xl font-semibold">Terms & Conditions</h3>
                   </div>
                   <h1 className="text-5xl font-bold uppercase leading-tight tracking-tight text-white md:text-7xl text-balance drop-shadow-2xl">
                    Invictus Connect
                     
                   </h1>
                   <p className="text-xl text-white/90 max-w-3xl text-pretty drop-shadow-lg">
                 By using Invictus Connect’s website and services, you agree to the following terms:
                   </p>
     
     
                 </div>
               </div>
             </div>
           </div>

      {/* ==== MAIN CONTENT (NO GRADIENT) ==== */}
      <section className="relative z-10">
                <Services />
              </section>
              <section className="relative z-10">
                <Footer />
              </section>
              </main>
    </>
  );
}
