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
                  {/* Camera Screen */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
                  <img src="public/lovable-uploads/Landing main.png" alt="Camera Screen" className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Select Your Mood</h3>
              {/* <p className="text-gray-600">No right or wrong mood - start just by checking in with your feelings and let your thoughts flow naturally</p> */}
              <p className="text-gray-600">No right or wrong mood - Start just by checking in with your feelings and let your thoughts flow naturally</p>
            </div>
          </div>

          {/* Phone 2 - Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative max-w-[250px] mx-auto">
                <div className="relative border-8 border-black rounded-[3rem] overflow-hidden aspect-[9/19] shadow-xl">
                  {/* Camera Screen */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
                  <img src="public/lovable-uploads/MoodJournalEntry.png" alt="Camera Screen" className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right">
            <h3 className="text-2xl font-semibold mb-4">Turn Your Mood Into Self-Discovery</h3>
            <p className="text-gray-600">Express your emotions with Psykick’s characters, offering guidance as you put your thoughts into words</p>
            </div>
          </div>

          {/* Phone 3 - Left */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative max-w-[250px] mx-auto">
                <div className="relative border-8 border-black rounded-[3rem] overflow-hidden aspect-[9/19] shadow-xl">
                  {/* Camera Screen */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
                  <img src="public/lovable-uploads/Insights Page.png" alt="Camera Screen" className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Gain A New Perspective</h3>
              <p className="text-gray-600">See how you felt and what it means in a new way with Psykick</p>
            </div>
          </div>

          {/* Phone 4 - Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative max-w-[250px] mx-auto">
                <div className="relative border-8 border-black rounded-[3rem] overflow-hidden aspect-[9/19] shadow-xl">
                  {/* Camera Screen */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-2xl"></div>
                  <img src="public/lovable-uploads/History.png" alt="Camera Screen" className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right">
              <h3 className="text-2xl font-semibold mb-4">Track Your Journey</h3>
              <p className="text-gray-600">Revisit past journal entries anytime to find clarity in your journey</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};