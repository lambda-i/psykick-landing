import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown = () => {
  const targetDate = "2025-03-07";
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-60 bg-gray-50">
      <div>
      <h2 className="text-4xl font-semibold text-gradient mb-8">Available in Early March '25</h2>
      </div>
      <div className="flex space-x-4 text-center text-gray-800">
        <div className="time-box">
          <span className="text-5xl font-bold">{timeLeft.days}</span>
          <p className="text-lg font-medium text-gray-600">DAYS</p>
        </div>
        <span className="text-5xl font-bold text-gray-500">:</span>
        <div className="time-box">
          <span className="text-5xl font-bold">{timeLeft.hours}</span>
          <p className="text-lg font-medium text-gray-600">HOURS</p>
        </div>
        <span className="text-5xl font-bold text-gray-500">:</span>
        <div className="time-box">
          <span className="text-5xl font-bold">{timeLeft.minutes}</span>
          <p className="text-lg font-medium text-gray-600">MINUTES</p>
        </div>
        <span className="text-5xl font-bold text-gray-500">:</span>
        <div className="time-box">
          <span className="text-5xl font-bold">{timeLeft.seconds}</span>
          <p className="text-lg font-medium text-gray-600">SECONDS</p>
        </div>
      </div>
    </div>
  );
};