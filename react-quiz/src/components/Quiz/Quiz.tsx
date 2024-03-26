import React, { useEffect } from "react";
import AnswerOption from "./ AnswerOption.tsx";
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
    <div className="QuizAppUiDesign w-[360px] h-[717px] relative bg-fuchsia-100 rounded-[30px] border-2 border-black">
      <div className="QuizAppUiDesign w-[337px] h-[680px] left-[12px] top-[18px] absolute bg-white rounded-[30px]">
        <div className="Rectangle2 w-[281px] h-[166px] left-[26px] top-[32px] absolute bg-white rounded-[20px] shadow border border-black border-opacity-10" />
        <div className="Group1 w-[67px] h-[67px] left-[128px] top-[-1px] absolute">
          <div className="Ellipse5 w-[67px] h-[67px] left-0 top-0 absolute bg-white rounded-full" />
          <div className="Ellipse7 w-[49px] h-[49px] left-[9px] top-[9px] absolute bg-white rounded-full" />
          <div className=" left-[23px] top-[20px] absolute text-fuchsia-700 text-xl font-bold font-['DM Sans']">
            18
          </div>
        </div>
        <div className="Question1320 left-[111px] top-[81px] absolute text-fuchsia-700 text-sm font-medium font-['DM Sans']">
          Question 13/20
        </div>
        <div className=" left-[60px] top-[115px] absolute text-center text-zinc-800 text-xl font-medium font-['DM Sans']">
          坂本龍馬の名言はどれ？
        </div>
        <div
          className="AnswerOptions left-[18px]"
          style={{ position: "relative" }}
        >
          <AnswerOption text="我がなすことは我のみぞ知る" top="245px" />
          <AnswerOption text="天は人の上に人を作らず" top="324px" />
          <AnswerOption text="人事を尽くして天命を待つ" top="403px" />
          <AnswerOption text="明日の我に今日は勝つべし" top="482px" />
        </div>

        <div className="Button p-2.5 left-[118px] top-[589px] absolute bg-fuchsia-700 bg-opacity-50 rounded-xl justify-center items-center gap-2.5 inline-flex">
          <div className=" text-center text-black text-xl font-medium font-['DM Sans']">
            送信する
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
