import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/Quiz");
  };

  return (
    <div
      className="QuizApp min-h-screen p-4 m-auto flex-col"
      style={{ backgroundColor: "#FFF0F5" }}
    >
      <div>名前を入力</div>
      <button onClick={handleNextClick}>次へ</button>
    </div>
  );
};

export default Login;
