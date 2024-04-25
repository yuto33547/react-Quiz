import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnswerOption from "./AnswerOption.tsx";
import {
  DocumentData,
  collection,
  getDocs,
  orderBy,
  query,
  addDoc,
} from "firebase/firestore";
import { db } from "../../firebase.js";
import Countdown from "./Countdown.tsx";
import SakuraBackgroud from "./SakuraBackgroud.jsx";

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
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chooseAnswer, setChooseAnswer] = useState<number | undefined>();
  const [selectedFlg, setSelectedFlg] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [colors, setColors] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0); // 経過時間のステートを追加
  const [timeScore, setTimeScore] = useState<number[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

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
  };

  const handleTimeUp = () => {
    // タイムアップ時の処理

    //timeScoreをセット
    console.log(elapsedTime);
    setTimeScore((prevTimeScore) => [...prevTimeScore, elapsedTime]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setChooseAnswer(undefined);
      setSelectedFlg(Array(selectedFlg.length).fill(false));
    } else {
      alert("問題は全て終了しました。ランキングの画面に移動します。");
    }
  };

  const displayAnswer = () => {
    const correctAnswer = questions[currentQuestionIndex].A; // 現在の問題の正解
    const selectedAnswerIndex = chooseAnswer; // 選択した回答のインデックス

    // 各回答オプションの色を格納するための配列を作成
    const answerColors = selectedFlg.map((_, index) => {
      if (index === correctAnswer) {
        return "bg-green-500 border-none"; // 正解の場合の色
      } else if (index === selectedAnswerIndex) {
        return "bg-red-500 border-none"; // 選択した回答の場合の色
      } else {
        return "bg-zinc-300 border-none"; // その他の場合の色
      }
    });

    console.log(answerColors);

    // 各AnswerOptionコンポーネントに色を渡すためにstateを更新
    setColors(answerColors);
  };

  const checkAnswer = async (answer: number) => {
    //回答をチェック
    if (chooseAnswer == undefined) {
      alert("回答を選択して下さい");
    } else {
      if (answer === chooseAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
      //timeScoreをセット
      console.log(elapsedTime);
      setTimeScore((prevTimeScore) => [...prevTimeScore, elapsedTime]);

      displayAnswer(); // 回答の色を変更
      setIsButtonDisabled(true); // ボタンを無効化
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 1秒待って次の問題へ
      setIsButtonDisabled(false); // ボタンを有効化
      setColors([]); //colorsを初期化

      //次の問題へ
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setChooseAnswer(undefined);
        setSelectedFlg(Array(selectedFlg.length).fill(false)); //コンストラクタで初期化してset
      } else {
        alert("問題は全て終了しました。ランキングの画面に移動します。");
        //DBにニックネームと記録を登録する
        const totalTime = timeScore.reduce((total, time) => total + time, 0); //timeScoreの合計値
        try {
          const collectionRef = collection(db, "Results");
          await addDoc(collectionRef, {
            nickName: localStorage.getItem("nickName"),
            score: score,
            time: totalTime,
          });
          console.log("DBに結果を登録しました");
        } catch (error) {
          console.error("ドキュメントの追加中にエラーが発生しました: ", error);
        }
        navigate("/Ranking");
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
              style={{ backgroundColor: "#FFF0F5" }}
            >
              <SakuraBackgroud />
              <div
                className="QuestionContainer flex items-center justify-center"
                style={{ color: "#218380" }}
              >
                <div
                  className="QuestionBox min-w-60 min-h-20 bg-white rounded-lg shadow border border-opacity-10 mb-4 mt-4 flex flex-col justify-end "
                  style={{ borderColor: "#218380" }}
                >
                  <div className=" top-0 -translate-y-6 self-center bg-white rounded-full">
                    <Countdown
                      onTimeUp={handleTimeUp}
                      setElapsedTime={setElapsedTime}
                    />
                  </div>

                  <div
                    className="text-fuchsia-700 text-sm font-medium font-['DM Sans'] text-center "
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
                    color={colors[index]}
                  />
                ))}
              </div>

              <div className="Submit flex-1 flex justify-center items-center">
                <button
                  className={`Button px-2.5 py-2.5 bg-fuchsia-700 bg-opacity-50 rounded-xl w-[30%] h-[10%] mb-4 mt-4 text-center 
                    chooseAnswer !== undefined ? "bg-gray-400" : ""
                  `}
                  type="button"
                  onClick={() => checkAnswer(question.A)}
                  disabled={isButtonDisabled}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).classList.add(
                      "bg-opacity-70"
                    );
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).classList.remove(
                      "bg-opacity-70"
                    );
                  }}
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
