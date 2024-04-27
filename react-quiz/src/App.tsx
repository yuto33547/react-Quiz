// App.tsx

import React from "react";
import Quiz from "./components/Quiz/Quiz.tsx";
import CreateQuiz from "./components/CreateQuiz/CreateQuiz.tsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.tsx";
import Ranking from "./components/Ranking/Ranking.tsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/Quiz" element={<Quiz />}></Route>
        <Route path="/CreateQuiz" element={<CreateQuiz />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Ranking" element={<Ranking />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
