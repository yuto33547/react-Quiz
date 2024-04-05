import React, { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const CreateQuiz = () => {
  const [question, setQuestion] = useState("");
  const [answerOptions, setAnswerOptions] = useState([
    { text: "", isOn: false },
    { text: "", isOn: false },
    { text: "", isOn: false },
    { text: "", isOn: false },
  ]);
  const [errorMessage, setErrorMessage] = useState("");

  const createQuestion = async () => {
    //答えは1つチェック
    const checkIsOn = answerOptions.filter((option) => option.isOn === true);
    if (checkIsOn.length !== 1) {
      setErrorMessage("正解となる選択肢は1つに設定してください");
      return;
    }
    try {
      const docRef = doc(db, "Questions", "Q3");
      const answerOptionsText = answerOptions.map((option) => option.text);
      await setDoc(docRef, {
        A: "4",
        Q: question,
        AnswerOptions: answerOptionsText,
      });
      console.log("問題Q3を追加しました");
    } catch (error) {
      console.error("ドキュメントの追加中にエラーが発生しました: ", error);
    }
  };

  const handleAnswerOptionChange = (index, newText) => {
    const updatedAnswerOptions = [...answerOptions];
    updatedAnswerOptions[index].text = newText;
    setAnswerOptions(updatedAnswerOptions);
  };

  const toggleButton = (index) => {
    const updatedAnswerOptions = [...answerOptions];
    updatedAnswerOptions[index].isOn = !updatedAnswerOptions[index].isOn;
    setAnswerOptions(updatedAnswerOptions);
  };

  return (
    <div className="QuizApp min-h-screen p-4 m-auto flex flex-col">
      <div className="QuestionContainer flex-1 bg-red-500 flex items-center justify-center">
        <div className="QuestionBox bg-white rounded-lg shadow border border-black border-opacity-10 mb-4 mt-4 p-2">
          <input
            type="text"
            placeholder="問題を入力して下さい"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="text-zinc-800 text-xl font-medium font-['DM Sans'] w-full p-2"
          />
        </div>
      </div>

      <div className="AnswerOptionsContainer flex-1 bg-blue-500 flex items-center justify-center flex-col">
        {answerOptions.map((option, index) => (
          <div
            key={index}
            className="item bg-white rounded-[15px] border-2 border-fuchsia-700 overflow-hidden mb-4 mt-4 w-[90%]"
          >
            <div className="text-center text-zinc-800 text-xl font-medium font-['DM Sans'] p-2">
              <input
                type="text"
                placeholder="回答を入力して下さい"
                value={option.text}
                onChange={(e) =>
                  handleAnswerOptionChange(index, e.target.value)
                }
                className="w-full"
              />
              <button
                onClick={() => toggleButton(index)}
                className={`rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-lg ${
                  option.isOn ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {option.isOn ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="Submit flex-1 bg-green-500 flex-col items-center justify-center">
        <button
          className="Button px-2.5 py-2.5 bg-fuchsia-700 bg-opacity-50 rounded-xl w-[30%] h-[10%] mb-2 mt-4 text-center"
          type="button"
          onClick={createQuestion}
        >
          <div className="text-center text-black text-xl font-medium font-['DM Sans']">
            送信する
          </div>
        </button>
        <div className="error-message text-red-500 text-center">
          {errorMessage}
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
