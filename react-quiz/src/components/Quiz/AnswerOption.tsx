import React from "react";

function AnswerOption({ text }) {
  return (
    <div className="AnswerOption">
      <div className="Rectangle5 w-[300px] h-[60px] bg-white rounded-[15px] border-2 border-fuchsia-700 overflow-hidden mb-4 mt-4">
        <div className=" text-center text-zinc-800 text-xl font-medium font-['DM Sans']">
          {text}
        </div>
      </div>
    </div>
  );
}

export default AnswerOption;
