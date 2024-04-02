import React from "react";

function AnswerOption({ text }) {
  return (
    <div className="Rectangle5 bg-white rounded-[15px] border-2 border-fuchsia-700 overflow-hidden mb-4 mt-4 w-[80%] h-[auto]">
      <div className="text-center text-zinc-800 text-xl font-medium font-['DM Sans'] mb-4 mt-4">
        {text}
      </div>
    </div>
  );
}

export default AnswerOption;
