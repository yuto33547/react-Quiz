// App.tsx

import React from "react";
import Quiz from "./components/Quiz/Quiz.tsx";
import Home from "./components/Home/Home.tsx";
import CreateQuiz from "./components/CreateQuiz/CreateQuiz.tsx";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SakuraBackgroud from "./components/Quiz/SakuraBackgroud.jsx";

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
        <Route path="/Quiz/" element={<Quiz />}></Route>
        <Route path="/CreateQuiz/" element={<CreateQuiz />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
