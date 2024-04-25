import React from "react";
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
  setElapsedTime: React.Dispatch<React.SetStateAction<number>>;
}

function Countdown({ onTimeUp, setElapsedTime }: CountdownProps) {
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
        setElapsedTime(getTimeSeconds(elapsedTime));
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
