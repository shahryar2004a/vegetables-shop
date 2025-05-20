import { useState, useEffect } from "react";

const useCountdown = (daysFromNow) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + daysFromNow * 24 * 60 * 60 * 1000;

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    // اجرای تایمر هر ثانیه
    const interval = setInterval(updateTimer, 1000);

    // اجرای اولیه تابع برای نمایش درست زمان
    updateTimer();

    // تمیز کردن تایمر
    return () => clearInterval(interval);
  }, [daysFromNow]); // وابستگی به مقدار روزهای ورودی

  return timeLeft;
};

export default useCountdown;
