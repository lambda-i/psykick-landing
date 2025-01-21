import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = () => {
  const targetDate = "2025-03-07";
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
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
    <div className="text-center mb-10">
      <h3 className="text-4xl text-gradient font-semibold">Available in Early March 2025 </h3>
      <h2 className="text-sm mb-4 mt-4">It’s free so why not give Psykick your Sidekick a shot!</h2>

      <div className="flex justify-center items-center gap-2 text-lg text-center">
        <div className="bg-white p-3 rounded-lg shadow-lg w-1/5 flex flex-col items-center">
          <span className="font-bold text-4xl text-green-600">{timeLeft.days}</span>
          <p className="text-sm md:text-md font-semibold text-gray-600">Days</p>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-lg w-1/5 flex flex-col items-center">
          <span className="font-bold text-4xl text-green-600">{timeLeft.hours}</span>
          <p className="text-sm md:text-md font-semibold text-gray-600">Hours</p>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-lg w-1/5 flex flex-col items-center">
          <span className="font-bold text-4xl text-green-600">{timeLeft.minutes}</span>
          <p className="text-sm md:text-md font-semibold text-gray-600">Minutes</p>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-lg w-1/5 flex flex-col items-center">
          <span className="font-bold text-4xl text-green-600">{timeLeft.seconds}</span>
          <p className="text-sm md:text-md font-semibold text-gray-600">Seconds</p>
        </div>
      </div>
    </div>
  );
};