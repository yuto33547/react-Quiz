import React from "react";

interface AnswerOptionProps {
  index: number;
  text: string;
  setChooseAnswer: (index: number) => void;
}

function AnswerOption(props: AnswerOptionProps) {
  let { index, text, setChooseAnswer } = props;
  const chooseAnswer = () => {
    //選択した回答の色を変える処理

    setChooseAnswer(index);
  };

  return (
    <div
      className="Rectangle5 bg-white rounded-[15px] border-2 border-fuchsia-700 overflow-hidden mb-4 mt-4 w-[90%] h-[auto]"
      onClick={chooseAnswer}
    >
      <div className="text-center text-zinc-800 text-xl font-medium font-['DM Sans'] mb-4 mt-4">
        {text}
      </div>
    </div>
  );
}

export default AnswerOption;
