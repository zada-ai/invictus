"use client";

export default function Features() {
      const features = [
    {
      title: "🏠 You want more booked jobs",
      desc: "If you’re driving traffic to your site but those visitors aren’t converting, RoofBot is your 24/7 receptionist that works around the clock and makes sure every click counts. Our AI chat widget engages homeowners instantly and books appointments into your calendar — no more wasted website traffic.",
    },
    {
      title: "📲 Your tired of chasing leads manually",
      desc: "Whether it’s you or your team making calls, manual follow-ups waste time. RoofBot automates reminders and sends follow-up SMS messages so leads stay warm without the hassle.",
    },
    {
      title: "👷 You want simplicity",
      desc: "Most CRMs are overloaded with features no one uses. RoofBot gives you exactly what matters — leads, appointments, reminders, and a clean dashboard to keep your jobs organized. Whether you’re a growing crew or a larger company, it keeps your pipeline simple and effective.",
    },
     {
      title: "⏰ Your ready to grow revenue",
      desc: "At the end of the day, more booked appointments = more jobs closed = more money in your pocket. RoofBot streamlines the process from first contact to closed deal so you can focus on the jobs, not chasing/managing leads.",
    },
    
  ];


  return (
    <section
      id="features"
      className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#111] text-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        RoofBot is perfect for you if…
      </h2>

      <div className="flex flex-col items-center space-y-2 mb-10">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </div>
       

      <div className="space-10 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-white/10 pb-6"
          >
            <h3 className="text-xl font-semibold sm:w-1/3 text-blue-400">
              {feature.title}
            </h3>
            <p className="text-white/80 sm:w-2/3 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
    
  );
}
