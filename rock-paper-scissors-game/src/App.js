import "./App.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import GameSet from "./components/GameSet";
import ScoreBar from "./components/ScoreBar";
import Rules from "./ui/Rules";
import GameBoard from "./components/GameBoard";

function App() {
  const [rulesOpen, setRulesOpen] = useState(false);

  const [playerSelection, setPlayerSelection] = useState("");
  const [computerSelection, setComputerSelection] = useState("");

  const [showGameBoard, setShowGameBoard] = useState(false);
  const [showGameSet, setShowGameSet] = useState(true);

  const [score, setScore] = useState(12);

  //gives a player selection in number 0-2
  const PlayerSelects = (value) => {
    setPlayerSelection(value);
  };

  const ComputerSelects = (value) => {
    setComputerSelection(value);
  };

  // shows rules
  const rulesCloseHandler = (value) => {
    setRulesOpen(value);
  };
  //closes rules
  const rulesOpenHandler = (value) => {
    setRulesOpen(value);
  };

  //closes gameSet and shows GameBoard

  const gameSetClose = (value) => {
    setShowGameSet(value);
    setShowGameBoard(!value);
  };
  //pass the score to scoreBar
  // start new
  const startNew = (value) => {
    setShowGameSet(value);
    setShowGameBoard(!value);
  };
  //score

  return (
    <div className="App">
      <ScoreBar onScore={score} />
      {showGameSet && (
        <GameSet
          onRulesOpenHandler={rulesOpenHandler}
          onPlayerSelectionHandler={PlayerSelects}
          onComputerSelectionHandler={ComputerSelects}
          onGameSetClose={gameSetClose}
        />
      )}
      {ReactDOM.createPortal(
        rulesOpen && <Rules onRulesCloseHandler={rulesCloseHandler} />,
        document.getElementById("rules")
      )}
      {showGameBoard && (
        <GameBoard
          onRulesOpenHandler={rulesOpenHandler}
          onPlayerSelection={playerSelection}
          onComputerSelection={computerSelection}
          onShowGameSet={startNew}
        />
      )}
      {}
    </div>
  );
}

export default App;
