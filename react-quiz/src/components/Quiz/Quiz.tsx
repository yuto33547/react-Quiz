import React, { useEffect } from "react";
import AnswerOption from "./AnswerOption.tsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

function Quiz() {
  // useEffect(() => {
  //   // ここでFirestoreからデータを取得する処理を実行
  //   const getQuestions = async () => {
  //     const data = await getDocs(collection(db, "Questions"));
  //     console.log(data);
  //   };
  //   getQuestions();
  // }, []);
  return (
    <div className="QuizApp min-h-screen p-4 m-auto flex-col">
      <div className="QuestionContainer  flex-1 bg-red-500 flex items-center justify-center">
        <div className="QuestionBox  bg-white rounded-lg shadow border border-black border-opacity-10 mb-4 mt-4">
          <div className="Group1 flex items-center justify-center">
            <div className="ml-4 text-fuchsia-700 text-xl font-bold font-['DM Sans']">
              18
            </div>
          </div>
          <div className="text-fuchsia-700 text-sm font-medium font-['DM Sans'] mb-2">
            Question 13/20
          </div>
          <div className="text-center text-zinc-800 text-xl font-medium font-['DM Sans'] p-2 h-[auto]">
            坂本龍馬の名言はどれ？
          </div>
        </div>
      </div>

      <div className="AnswerOptionsContainer flex-1 bg-blue-500 flex items-center justify-center flex-col">
        <AnswerOption text="我がなすことは我のみぞ知るでも坂本りょうはそんなことは知らずに生活していたし、おりょうはもっと何も知らなかったに違いない。" />
        <AnswerOption text="天は人の上に人を作らず" />
        <AnswerOption text="人事を尽くして天命を待つ" />
        <AnswerOption text="明日の我に今日は勝つべし" />
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
}

export default Quiz;
