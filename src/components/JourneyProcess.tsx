export const JourneyProcess = () => {
  return (
    <section className="py-20 px-4 section-gradient overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Your Journaling Journey</h2>
        <div className="space-y-24">
          {/* Card 1 - Left */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="journey-card flex-1 order-2 md:order-1">
              <div className="relative max-w-[300px] mx-auto">
                <div className="relative border-8 border-black rounded-[3rem] overflow-hidden aspect-[9/19] shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
                  <div className="h-full bg-[#D3F1DF]/30 p-4">
                    <div className="h-full flex items-center justify-center">
                      <div className="space-y-2">
                        <div className="h-4 w-20 bg-[#5DB996]/20 rounded mx-auto"></div>
                        <div className="h-24 w-full bg-white rounded-lg shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4">Never Face a Blank Page</h3>
              <p className="text-gray-600 text-lg">Intelligent prompts and conversation starters guide your journaling experience, making it easier to express yourself authentically.</p>
            </div>
          </div>

          {/* Card 2 - Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 text-center md:text-right">
              <h3 className="text-2xl font-semibold mb-4">Gain Deep Insights</h3>
              <p className="text-gray-600 text-lg">Uncover new layers of yourself through personalized journal analysis and mood tracking that helps you understand your emotional patterns.</p>
            </div>
            <div className="journey-card flex-1">
              <div className="relative max-w-[300px] mx-auto">
                <div className="relative border-8 border-black rounded-[3rem] overflow-hidden aspect-[9/19] shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
                  <div className="h-full bg-[#D3F1DF]/30 p-4">
                    <div className="h-full flex items-center justify-center">
                      <div className="space-y-2">
                        <div className="h-4 w-24 bg-[#5DB996]/20 rounded mx-auto"></div>
                        <div className="h-24 w-full bg-white rounded-lg shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Left */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="journey-card flex-1 order-2 md:order-1">
              <div className="relative max-w-[300px] mx-auto">
                <div className="relative border-8 border-black rounded-[3rem] overflow-hidden aspect-[9/19] shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
                  <div className="h-full bg-[#D3F1DF]/30 p-4">
                    <div className="h-full flex items-center justify-center">
                      <div className="space-y-2">
                        <div className="h-4 w-28 bg-[#5DB996]/20 rounded mx-auto"></div>
                        <div className="h-24 w-full bg-white rounded-lg shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4">Connect with Your Emotions</h3>
              <p className="text-gray-600 text-lg">Explore different aspects of your emotional self through mood-based characters and guided reflection prompts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};