import React, { useState, useEffect } from "react";

interface AnswerOptionProps {
  index: number;
  text: string;
  handleAnswerClick: (index: number) => void;
  selectedFlg: boolean;
}

function AnswerOption(props: AnswerOptionProps) {
  //分割代入
  let { index, text, handleAnswerClick, selectedFlg } = props;

  // selectedFlg の変更を検出して isSelected を更新
  useEffect(() => {
    console.log("selectFlg :" + selectedFlg);
  }, [selectedFlg]);

  const chooseAnswer = () => {
    handleAnswerClick(index);
    console.log("selectFlg :" + selectedFlg);

    //選択した回答の色を変える処理(選択肢を選ぶ時の処理はこのコンポーネント内で完結は無理)
    //if すでに他のが選択されていたらクリアして→毎回クリアしても問題ないか
    //結論。selectFlgを親コンポーネントで持って、それが変更されることをuseEffectで検出できればいい
    //selectedFlgの値によって色を変える
    console.log("chooseAnswerを実行");
  };
  console.log("AnswerOptionを再レンダリング");

  return (
    <div
      className={`Rectangle5 ${
        selectedFlg
          ? "bg-gray-200 border-gray-600"
          : "bg-white border-fuchsia-700"
      } rounded-[15px] border-2 overflow-hidden mb-4 mt-4 w-[90%] h-[auto]`}
      onClick={chooseAnswer}
    >
      <div className="text-center text-zinc-800 text-xl font-medium font-['DM Sans'] mb-4 mt-4">
        {text}
      </div>
    </div>
  );
}

export default AnswerOption;
