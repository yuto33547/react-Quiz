import React, { useState, useEffect } from "react";

interface AnswerOptionProps {
  index: number;
  text: string;
  handleAnswerClick: (index: number) => void;
  selectedFlg: boolean;
  color: string;
}

function AnswerOption(props: AnswerOptionProps) {
  //分割代入
  let { index, text, handleAnswerClick, selectedFlg, color } = props;
  const [fontSize, setFontSize] = useState("text-xl"); // デフォルトのフォントサイズ

  // selectedFlg の変更を検出 親のstateが変更されると自動的にレンダリングされるのでいらないけど明示的に
  useEffect(() => {
    // console.log("再レンダリングした時色は：" + index + color);
  }, [selectedFlg]);

  useEffect(() => {
    // textの文字数に応じてフォントサイズを調整
    const textLength = text.length;
    if (textLength < 15) {
      setFontSize("text-xl");
    } else if (textLength < 30) {
      setFontSize("text-base");
    } else {
      setFontSize("text-sm"); // それ以外の場合、デフォルトのフォントサイズ
    }
  }, [text]);

  const chooseAnswer = () => {
    handleAnswerClick(index);

    //選択した回答の色を変える処理(選択肢を選ぶ時の処理はこのコンポーネント内で完結は無理)
    //if すでに他のが選択されていたらクリアして→毎回クリアしても問題ないか
    //結論。selectFlgを親コンポーネントで持って、それが変更されることをuseEffectで検出できればいい
    //selectedFlgの値によって色を変える
  };

  // console.log("再レンダリングした時色は：" + index + color);

  return (
    <div
      className={`Rectangle5 rounded-[15px] border-2 overflow-hidden mb-4 mt-4 w-[90%] max-w-80 h-[auto] 
      ${
        selectedFlg
          ? "bg-gray-200 border-gray-600"
          : color || "bg-white border-fuchsia-700"
      }  ${color}`}
      onClick={chooseAnswer}
    >
      <div
        className={`text-center text-zinc-800 font-medium font-['DM Sans'] mb-4 mt-4 ${fontSize}`}
      >
        {text}
      </div>
    </div>
  );
}

export default AnswerOption;
