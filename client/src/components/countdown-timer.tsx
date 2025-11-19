import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date('2025-12-31T23:59:59');
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-pulse" />
      {[
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Mins' },
        { value: timeLeft.seconds, label: 'Secs' }
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 sm:px-4 py-1 sm:py-2 min-w-[55px] sm:min-w-[70px]">
            <span className="text-xl sm:text-3xl font-bold text-white tabular-nums">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-white/80 mt-1 font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
