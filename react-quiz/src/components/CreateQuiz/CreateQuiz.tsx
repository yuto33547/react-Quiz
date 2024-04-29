import React, { useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

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
      const collectionRef = collection(db, "Questions");
      const answerOptionsText = answerOptions.map((option) => option.text);
      const answerIndex = answerOptions.findIndex(
        (option) => option.isOn === true
      );
      await addDoc(collectionRef, {
        A: answerIndex,
        Q: question,
        AnswerOptions: answerOptionsText,
        Author: null,
        sendAt: Timestamp.now(),
      });
      console.log("問題を追加しました");
      setAnswerOptions([
        { text: "", isOn: false },
        { text: "", isOn: false },
        { text: "", isOn: false },
        { text: "", isOn: false },
      ]);
      setQuestion("");
    } catch (error) {
      console.error("ドキュメントの追加中にエラーが発生しました: ", error);
    }
  };

  const handleAnswerOptionChange = (index, newText) => {
    const updatedAnswerOptions = [...answerOptions];
    // if (newText.length > 15) {
    //   updatedAnswerOptions[index].text = "15文字以内に設定して下さい";
    //   setAnswerOptions(updatedAnswerOptions);
    //   console.log(updatedAnswerOptions);
    //   return;
    // }
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
      <div className="QuestionContainer flex-1 flex items-center justify-center">
        <div className="QuestionBox bg-white rounded-lg shadow border border-black border-opacity-10 mb-4 mt-4 p-2">
          <Form.Control
            as="textarea"
            rows={3}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="問題を入力して下さい"
          />
        </div>
      </div>

      <div className="AnswerOptionsContainer flex-1 flex items-center justify-center flex-col">
        {answerOptions.map((option, index) => (
          <div
            key={index}
            className="item bg-white rounded-[15px] border-2 border-fuchsia-700 overflow-hidden mb-4 mt-4 w-[100%]"
          >
            <div className="text-zinc-800 text-xl font-medium font-['DM Sans'] p-2 w-[100%] flex ">
              <Form.Control
                as="input"
                value={option.text}
                onChange={(e) =>
                  handleAnswerOptionChange(index, e.target.value)
                }
                placeholder="回答を入力して下さい"
                className="flex-9" // flex-grow を追加しました
              />

              <button
                onClick={() => toggleButton(index)}
                className={`rounded-full w-8 h-8 text-white font-bold text-lg flex-1 ${
                  option.isOn ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {option.isOn ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="Submit flex-1 flex flex-col items-center justify-center">
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
