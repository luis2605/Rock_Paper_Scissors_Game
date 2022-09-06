import "./App.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import ScoreBar from "./components/ScoreBar";
import Rules from "./ui/Rules";

import GameStart from "./components/GameStart";

function App() {
  const [rulesOpen, setRulesOpen] = useState(false);
  const [score, setScore] = useState("");

  // shows rules
  const rulesCloseHandler = (value) => {
    setRulesOpen(value);
  };
  //closes rules
  const rulesOpenHandler = (value) => {
    setRulesOpen(value);
  };

  //get whoWon from GameStart

  const result = (value) => {
    console.log(value);
  };

  //score
  const passScore = (value) => {
    setScore(value);
  };

  return (
    <div className="App">
      <ScoreBar onScore={score} />

      {ReactDOM.createPortal(
        rulesOpen && <Rules onRulesCloseHandler={rulesCloseHandler} />,
        document.getElementById("rules")
      )}

      <GameStart
        onPassScore={passScore}
        onResult={result}
        onRulesOpenHandler={rulesOpenHandler}
      />
    </div>
  );
}

export default App;
