import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date('2025-03-07') - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-20">
      <h3 className="text-2xl font-semibold mb-4">Launching March 7, 2025</h3>
      <div className="flex justify-center gap-4 text-xl">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
          <span className="font-bold text-3xl text-[#5DB996]">{timeLeft.days}</span>
          <p className="text-sm text-gray-600">Days</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
          <span className="font-bold text-3xl text-[#5DB996]">{timeLeft.hours}</span>
          <p className="text-sm text-gray-600">Hours</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
          <span className="font-bold text-3xl text-[#5DB996]">{timeLeft.minutes}</span>
          <p className="text-sm text-gray-600">Minutes</p>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
          <span className="font-bold text-3xl text-[#5DB996]">{timeLeft.seconds}</span>
          <p className="text-sm text-gray-600">Seconds</p>
        </div>
      </div>
    </div>
  );
};
