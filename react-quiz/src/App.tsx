// App.tsx

import React from "react";
import Quiz from "./components/Quiz/Quiz.tsx";
import Home from "./components/Home/Home.tsx";
import CreateQuiz from "./components/CreateQuiz/CreateQuiz.tsx";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Quiz" element={<Quiz />}></Route>
        <Route path="/CreateQuiz" element={<CreateQuiz />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
