// App.tsx

import React from "react";
import Quiz from "./components/Quiz/Quiz.tsx";
import Home from "./components/Home/Home.tsx";
import CreateQuiz from "./components/CreateQuiz/CreateQuiz.tsx";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SakuraBackgroud from "./components/Quiz/SakuraBackgroud.jsx";
import Login from "./components/Login/Login.tsx";
import Ranking from "./components/Ranking/Ranking.tsx";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          {/* <li>
            <Link to="/">ホーム</Link>
          </li> */}
          <li>
            <Link to="/Quiz/">クイズ</Link>
          </li>
          <li>
            <Link to="/CreateQuiz/">クイズ作成</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/Quiz" element={<Quiz />}></Route>
        <Route path="/CreateQuiz" element={<CreateQuiz />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Ranking" element={<Ranking />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
