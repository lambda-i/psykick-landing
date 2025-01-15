export const JourneyProcess = () => {
  return (
    <section className="py-20 px-4 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Your Journaling Journey</h2>
        <div className="space-y-20 md:space-y-32">
          {/* Phone 1 - Left */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative max-w-[250px] mx-auto">
                <div className="relative border-8 border-black rounded-[3rem] overflow-hidden aspect-[9/19] shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
                  <div className="h-full bg-green-50 p-4">
                    <div className="h-full flex items-center justify-center">
                      <div className="space-y-2">
                        <div className="h-4 w-20 bg-green-200 rounded mx-auto"></div>
                        <div className="h-24 w-full bg-white rounded-lg shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Never Face a Blank Page</h3>
              <p className="text-gray-600">Intelligent prompts and conversation starters guide your journaling experience</p>
            </div>
          </div>

          {/* Phone 2 - Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative max-w-[250px] mx-auto">
                <div className="relative border-8 border-black rounded-[3rem] overflow-hidden aspect-[9/19] shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
                  <div className="h-full bg-green-50 p-4">
                    <div className="h-full flex items-center justify-center">
                      <div className="space-y-2">
                        <div className="h-4 w-24 bg-green-200 rounded mx-auto"></div>
                        <div className="h-24 w-full bg-white rounded-lg shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right">
              <h3 className="text-2xl font-semibold mb-4">Gain Deep Insights</h3>
              <p className="text-gray-600">Uncover new layers of yourself through personalized journal analysis</p>
            </div>
          </div>

          {/* Phone 3 - Left */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative max-w-[250px] mx-auto">
                <div className="relative border-8 border-black rounded-[3rem] overflow-hidden aspect-[9/19] shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
                  <div className="h-full bg-green-50 p-4">
                    <div className="h-full flex items-center justify-center">
                      <div className="space-y-2">
                        <div className="h-4 w-28 bg-green-200 rounded mx-auto"></div>
                        <div className="h-24 w-full bg-white rounded-lg shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Connect with Your Emotions</h3>
              <p className="text-gray-600">Explore different aspects of your emotional self through mood-based characters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};