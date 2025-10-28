"use client";

export default function Work() {
  return (
    <div id="how-it-works" className="text-white text-center py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How IT WORKS</h2>

      {/* Blue gradient lines */}
      <div className="flex flex-col items-center space-y-2 mb-8">
        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 py-10 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-105 hover:border-blue-500 transition-all duration-300">
          <div className="w-full h-56 overflow-hidden rounded-xl mb-4">
            <img
              src="Capture & Organize Leads.jpg"
              alt="Capture & Organize Leads"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-blue-400 mb-2">Capture & Organize Leads</h3>
          <p className="text-white/80 leading-relaxed">
            The RoofBot AI chat widget lives right on your website landing page. It engages leads instantly,
            collects their info, and saves it into your CRM — so no lead slips through the cracks.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-105 hover:border-blue-500 transition-all duration-300">
          <div className="w-full h-56 overflow-hidden rounded-xl mb-4">
            <img
              src="Book & Remind Automations.jpg"
              alt="Book & Remind Automations"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-blue-400 mb-2">Book & Remind Automations</h3>
          <p className="text-white/80 leading-relaxed">
            RoofBot automatically books qualified leads into your calendar while you sleep and sends SMS reminders
            + follow-ups, so customers never forget an appointment.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:scale-105 hover:border-blue-500 transition-all duration-300">
          <div className="w-full h-56 overflow-hidden rounded-xl mb-4">
            <img
              src="Track & Close in CRM.jpg"
              alt="Track & Close in CRM"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-blue-400 mb-2">Track & Close in CRM</h3>
          <p className="text-white/80 leading-relaxed">
            RoofBot logs every lead and appointment in your CRM so you can stay organized, avoid the hassle of manual
            follow-ups, and turn more leads into more closes.
          </p>
        </div>
      </div>
    </div>
  );
}
