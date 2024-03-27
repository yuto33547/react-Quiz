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
        <div className="QuizAppUiDesign w-[90%] h-[85%] left-[5%] top-[7.5%] absolute bg-white rounded-[30px]">
          <div className="Rectangle2 w-[80%] h-[23%] left-[7%] top-[5%] absolute bg-white rounded-[20px] shadow border border-black border-opacity-10" />
          <div className="Group1 w-[20%] h-[20%] left-[38%] top-[1%] absolute">
            <div className="Ellipse5 w-[100%] h-[100%] left-0 top-0 absolute bg-white rounded-full" />
            <div className="Ellipse7 w-[75%] h-[75%] left-[15%] top-[15%] absolute bg-white rounded-full" />
            <div className="left-[35%] top-[20%] absolute text-fuchsia-700 text-xl font-bold font-['DM Sans']">
              18
            </div>
          </div>
          <div className="Question left-[30%] top-[12%] absolute text-fuchsia-700 text-sm font-medium font-['DM Sans']">
            Question 13/20
          </div>
          <div className="left-[17%] top-[17%] absolute text-center text-zinc-800 text-xl font-medium font-['DM Sans']">
            坂本龍馬の名言はどれ？
          </div>
          <div className="AnswerOptions w-full h-50% relative max-w-[800px]">
            <AnswerOption text="我がなすことは我のみぞ知る" top="30%" />
            <AnswerOption text="天は人の上に人を作らず" top="40%" />
            <AnswerOption text="人事を尽くして天命を待つ" top="50%" />
            <AnswerOption text="明日の我に今日は勝つべし" top="60%" />
          </div>

          <div className="Button p-2.5 left-[35%] top-[73%] absolute bg-fuchsia-700 bg-opacity-50 rounded-xl justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-black text-xl font-medium font-['DM Sans']">
              送信する
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
