import React from "react";

interface AnswerOptionProps {
  text: string;
}

function AnswerOption(props: AnswerOptionProps) {
  return (
    <div className="Rectangle5 bg-white rounded-[15px] border-2 border-fuchsia-700 overflow-hidden mb-4 mt-4 w-[90%] h-[auto]">
      <div className="text-center text-zinc-800 text-xl font-medium font-['DM Sans'] mb-4 mt-4">
        {props.text}
      </div>
    </div>
  );
}

export default AnswerOption;
