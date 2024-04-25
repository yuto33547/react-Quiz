import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const timerProps = {
  isPlaying: true,
  size: 90,
  strokeWidth: 6,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time text-center text-2xl">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const minuteSeconds = 60;
const getTimeSeconds = (time) => (minuteSeconds - time) | 0;

interface CountdownProps {
  onTimeUp: () => void;
  passElaspedTime: (elapsedTime: number) => void;
  isAnswered: boolean;
}

function Countdown({ onTimeUp, passElaspedTime, isAnswered }: CountdownProps) {
  const [localElaspedTime, setLocalElaspedTime] = useState<number>(0);
  useEffect(() => {
    if (isAnswered === true) passElaspedTime(localElaspedTime);
  }, [isAnswered]);

  return (
    <CountdownCircleTimer
      {...timerProps}
      colors={["#218380", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[60, 30, 10, 0]}
      duration={minuteSeconds}
      onComplete={() => {
        onTimeUp();
        return { shouldRepeat: false };
      }}
      onUpdate={(elapsedTime) => {
        setLocalElaspedTime(getTimeSeconds(elapsedTime));
      }}
    >
      {({ elapsedTime, color }) => (
        <span style={{ color }}>
          {renderTime("seconds", getTimeSeconds(elapsedTime))}
        </span>
      )}
    </CountdownCircleTimer>
  );
}

export default Countdown;
