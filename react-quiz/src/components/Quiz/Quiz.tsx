import React, { useEffect, useState } from "react";
import AnswerOption from "./AnswerOption.tsx";
import {
  DocumentData,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase.js";
import Countdown from "./Countdown.tsx";

interface Question {
  A: number;
  AnswerOptions: string[];
  Author: string;
  Q: string;
  sendAt: any;
}

interface SelectedAnswer {
  selectedAnswer: number | undefined;
}

function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chooseAnswer, setChooseAnswer] = useState<number | undefined>();
  const [selectedFlg, setSelectedFlg] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // ここでFirestoreからデータを取得する処理を実行
    const getQuestions = async () => {
      const q = query(collection(db, "Questions"), orderBy("sendAt", "asc"));
      const querySnapshot = await getDocs(q);
      const newQuestions: Question[] = [];
      querySnapshot.forEach((doc) => {
        newQuestions.push(doc.data() as Question);
      });
      setQuestions(newQuestions);
      console.log("firestoreを読み込みました");
    };
    getQuestions();
  }, []);

  console.log(questions);
  console.log(chooseAnswer + "を選択しました");

  const handleAnswerClick = (index: number) => {
    // selectedFlgの該当するインデックスのフラグを更新する
    const updatedFlg = Array(selectedFlg.length).fill(false); // 全てのフラグをfalseにリセット
    updatedFlg[index] = true; // 選択されたインデックスのフラグをtrueに設定
    setSelectedFlg(updatedFlg);

    //回答の選択を更新する
    setChooseAnswer(index);
    console.log("handleAnswerClickを実行" + " :" + selectedFlg);
  };

  const checkAnswer = (answer: number) => {
    //回答をチェック
    console.log(chooseAnswer);
    if (chooseAnswer == undefined) {
      alert("回答を選択して下さい");
    } else {
      if (answer === chooseAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
      //次の問題へ
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setChooseAnswer(undefined);
        setSelectedFlg(Array(selectedFlg.length).fill(false)); //コンストラクタで初期化してset
      } else {
        alert("問題は全て終了しました。ランキングの画面に移動します。");
      }
    }
  };

  return (
    <>
      {questions.map((question, index) => {
        if (index === currentQuestionIndex) {
          return (
            <div
              className="QuizApp min-h-screen p-4 m-auto flex-col"
              key={index}
            >
              <div
                className="QuestionContainer  flex-1 flex items-center justify-center"
                style={{ color: "#218380" }}
              >
                <div
                  className="QuestionBox w-[60%] bg-white rounded-lg shadow border border-opacity-10 mb-4 mt-4"
                  style={{ borderColor: "#218380" }}
                >
                  <Countdown />

                  <div
                    className="text-fuchsia-700 text-sm font-medium font-['DM Sans'] mb-2 text-center"
                    style={{ color: "#218380" }}
                  >
                    Question {index + 1}/{questions.length}
                  </div>

                  <div className="text-center text-zinc-800 text-xl font-['DM Sans'] p-2 h-[auto]">
                    {question.Q}
                  </div>
                </div>
              </div>

              <div className="AnswerOptionsContainer flex-1 flex items-center justify-center flex-col">
                {question.AnswerOptions.map((answerOptionText, index) => (
                  <AnswerOption
                    key={index}
                    index={index}
                    text={answerOptionText}
                    handleAnswerClick={() => handleAnswerClick(index)}
                    selectedFlg={selectedFlg[index]}
                  />
                ))}
              </div>

              <div className="Submit flex-1 flex justify-center items-center">
                <button
                  className="Button px-2.5 py-2.5 bg-fuchsia-700 bg-opacity-50 rounded-xl w-[30%] h-[10%] mb-4 mt-4 text-center"
                  type="button"
                  onClick={() => checkAnswer(question.A)}
                >
                  <div className="text-center text-black text-xl font-medium font-['DM Sans']">
                    回答する
                  </div>
                </button>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default Quiz;
