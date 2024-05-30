import { useEffect } from 'react';

interface TimeProps {
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  activeQuestionIndex: number;
  setActiveQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  lastIndex: number;
}

export const Time: React.FC<TimeProps> = ({
  time,
  setTime,
  activeQuestionIndex,
  setActiveQuestionIndex,
  lastIndex,
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const [minutes, seconds] = prevTime.split(':').map(Number);
        if (minutes === 0 && seconds === 0) {
          if (activeQuestionIndex === lastIndex) {
            return '00:00';
          } else {
            setActiveQuestionIndex((prevIndex) =>
              Math.min(prevIndex + 1, lastIndex)
            );
            return '00:59';
          }
        } else if (seconds === 0) {
          return `${minutes - 1 < 10 ? '0' : ''}${minutes - 1}:59`;
        } else {
          return `${minutes < 10 ? '0' : ''}${minutes}:${
            seconds - 1 < 10 ? '0' : ''
          }${seconds - 1}`;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeQuestionIndex, lastIndex, setActiveQuestionIndex, setTime]);

  return (
    <span
      className={`${
        parseInt(time.split(':')[1]) <= 10 ? ' text-red-500  ' : ' '
      } ml-auto font-bold`}
    >
      time: {time}
    </span>
  );
};
