import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState(""); // ニックネームの状態を管理する

  const handleInputChange = (e) => {
    setNickName(e.target.value); // ニックネームの値を更新する
  };

  const handleNextClick = () => {
    // ニックネームをlocalStorageに保存する
    localStorage.setItem("nickName", nickName);
    navigate("/Quiz");
  };

  return (
    <div
      className="QuizApp min-h-screen p-4 m-auto flex flex-col items-center justify-center"
      style={{ backgroundColor: "#FFF0F5" }}
    >
      <Form className="w-50 mb-4">
        <Form.Group controlId="nickname">
          <Form.Label>ニックネームを入力</Form.Label>
          <Form.Control
            type="text"
            placeholder="nickname"
            value={nickName}
            onChange={handleInputChange}
          />
        </Form.Group>
      </Form>
      <div className="mb-4">
        <Button variant="outline-success" onClick={handleNextClick} size="lg">
          次へ
        </Button>
      </div>
    </div>
  );
};

export default Login;
