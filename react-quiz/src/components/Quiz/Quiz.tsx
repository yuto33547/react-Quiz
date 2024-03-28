import React, { useEffect } from "react";
import AnswerOption from "./AnswerOption.tsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

function Quiz() {
  useEffect(() => {
    // ここでFirestoreからデータを取得する処理を実行
    const getQuestions = async () => {
      const data = await getDocs(collection(db, "Questions"));
      console.log(data);
    };
    getQuestions();
  }, []);
  return (
    <>
      <div className="QuizAppUiDesign min-h-screen p-4 max-w-[800px] m-auto ">
        <div className="Frame w-[90%] h-[85%] left-[5%] top-[1%] bottom-[1%] absolute bg-white rounded-[30px]">
          <div className="flex flex-col h-screen">
            <div className="h-50 bg-red-500 flex items-center justify-center">
              <div className="QuestionBox w-64 h-18 bg-white rounded-lg shadow border border-black border-opacity-10 mb-4 mt-4">
                {/* QuestionBox */}
                <div className="Group1 flex items-center justify-center">
                  <div className="ml-4 text-fuchsia-700 text-xl font-bold font-['DM Sans']">
                    18
                  </div>
                </div>
                <div className="text-fuchsia-700 text-sm font-medium font-['DM Sans'] mb-2">
                  Question 13/20
                </div>
                <div className="text-center text-zinc-800 text-xl font-medium font-['DM Sans']">
                  坂本龍馬の名言はどれ？
                </div>
              </div>
            </div>

            <div className="AnswerOptions flex-1 bg-blue-500 flex flex-col justify-center items-center relative">
              <AnswerOption text="我がなすことは我のみぞ知る" top="5%" />
              <AnswerOption text="天は人の上に人を作らず" top="30%" />
              <AnswerOption text="人事を尽くして天命を待つ" top="55%" />
              <AnswerOption text="明日の我に今日は勝つべし" top="80%" />
            </div>

            <div className="h-40 bg-green-500 flex justify-center items-center">
              <div className="Button p-2.5 left-[35%] top-[73%] bg-fuchsia-700 bg-opacity-50 rounded-xl gap-2.5 inline-flex">
                <div className="text-center text-black text-xl font-medium font-['DM Sans']">
                  送信する
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
