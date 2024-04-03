import React from "react";

const CreateQuiz = () => {
  return (
    <div className="QuizApp min-h-screen p-4 m-auto flex-col">
      <div className="QuestionContainer  flex-1 bg-red-500 flex items-center justify-center">
        <div className="QuestionBox  bg-white rounded-lg shadow border border-black border-opacity-10 mb-4 mt-4">
          <div className="text-fuchsia-700 text-sm font-medium font-['DM Sans'] mb-2">
            Question 13/20
          </div>
          <div className="text-center text-zinc-800 text-xl font-medium font-['DM Sans'] p-2 h-[auto]">
            坂本龍馬の名言はどれ？
          </div>
        </div>
      </div>

      <div className="AnswerOptionsContainer flex-1 bg-blue-500 flex items-center justify-center flex-col">
        <div className="item bg-white rounded-[15px] border-2 border-fuchsia-700 overflow-hidden mb-4 mt-4 w-[90%] h-[auto]">
          <div className="text-center text-zinc-800 text-xl font-medium font-['DM Sans'] mb-4 mt-4">
            我がなすことは我のみぞ知るでも坂本りょうはそんなことは知らずに生活していたし、おりょうはもっと何も知らなかったに違いない。
          </div>
        </div>
        <div className="item bg-white rounded-[15px] border-2 border-fuchsia-700 overflow-hidden mb-4 mt-4 w-[90%] h-[auto]">
          <div className="text-center text-zinc-800 text-xl font-medium font-['DM Sans'] mb-4 mt-4">
            天は人の上に人を作らず
          </div>
        </div>
        <div className="item bg-white rounded-[15px] border-2 border-fuchsia-700 overflow-hidden mb-4 mt-4 w-[90%] h-[auto]">
          <div className="text-center text-zinc-800 text-xl font-medium font-['DM Sans'] mb-4 mt-4">
            人事を尽くして天命を待つ
          </div>
        </div>
        <div className="item bg-white rounded-[15px] border-2 border-fuchsia-700 overflow-hidden mb-4 mt-4 w-[90%] h-[auto]">
          <div className="text-center text-zinc-800 text-xl font-medium font-['DM Sans'] mb-4 mt-4">
            明日の我に今日は勝つべし
          </div>
        </div>
      </div>

      <div className="Submit flex-1 bg-green-500 flex justify-center items-center">
        <div className="Button p-2.5 bg-fuchsia-700 bg-opacity-50 rounded-xl justify-center items-center gap-2.5 inline-flex w-[30%] h-[10%] mb-4 mt-4">
          <div className="text-center text-black text-xl font-medium font-['DM Sans']">
            送信する
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
