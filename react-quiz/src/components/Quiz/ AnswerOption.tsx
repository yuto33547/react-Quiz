import React from "react";

function AnswerOption({ text, top }) {
  return (
    <div className="AnswerOption" style={{ position: "absolute", top: top }}>
      <div className="Rectangle5 w-[300px] h-[60px] left-0 top-0 absolute bg-white rounded-[15px] border-2 border-fuchsia-700 overflow-hidden">
        <div className=" left-[13px] top-[19px] absolute text-center text-zinc-800 text-xl font-medium font-['DM Sans']">
          {text}
        </div>
      </div>
    </div>
  );
}

export default AnswerOption;
