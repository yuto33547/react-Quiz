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
}

function Countdown({ onTimeUp }: CountdownProps) {
  //currentQuestionIndexが変更されたタイミングでカウントダウンを再開
  //onCopliteの定義からnewInitialRemainingTimeを渡すと再開できるっぽい
  //次の問題に行った時、自動的に再レンダリングされてカウントが60から再開するのでそれらは必要なし

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
