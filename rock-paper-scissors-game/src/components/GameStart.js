import React, { useState, useEffect } from "react";
import classes from "./gameStart.module.css";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import EndGame from "./EndGame";

const GameStart = ({ onRulesOpenHandler, onResult, onPassScore }) => {
  const [score, setScore] = useState(12);
  //randomNumber 0-2
  const randomNumber = Math.floor(Math.random() * 3);

  //starting the game
  const [boardShown, setBoardShown] = useState(true);

  //restart game

  const boardShownHandler = (value) => {
    setBoardShown(value);
    onPassScore(score);
  };
  //player selection
  const [playerSelection, setPlayerSelection] = useState(null);
  //computer selection
  const [computerSelection, setComputerSelection] = useState(null);
  //who won ?

  const [whoWon, setWhoWon] = useState("");

  // open Rules portal
  const openRules = () => {
    return onRulesOpenHandler(true);
  };

  // identify id of element selected

  const playerComputerSelection = (e, playerSelection, computerSelection) => {
    setBoardShown(false);
    setPlayerSelection((playerSelection) => {
      return parseInt(e.target.id);
    });
    setComputerSelection(randomNumber);
  };
  // logic for the game
  useEffect(() => {
    if (
      (playerSelection === 0 && computerSelection === 1) ||
      (playerSelection === 1 && computerSelection === 2) ||
      (playerSelection === 2 && computerSelection === 0)
    ) {
      setWhoWon("Player won ");
      setScore(score + 1);
    } else if (
      (playerSelection === 0 && computerSelection === 2) ||
      (playerSelection === 1 && computerSelection === 0) ||
      (playerSelection === 2 && computerSelection === 1)
    ) {
      setWhoWon("Computer won");
      setScore(score - 1);
    } else if (playerSelection === computerSelection) {
      setWhoWon("It is a Tie");
      setScore(score);
    }
    onResult(whoWon);
  }, [playerSelection, computerSelection]);

  useEffect(() => {}, [whoWon]);

  return (
    <div className={classes["gameSet-container"]}>
      {boardShown && (
        <div className={classes["gameSet-board"]}>
          <img
            onClick={playerComputerSelection}
            id={0}
            className={classes["gameSet-paper"]}
            src={paper}
            alt="paper"
          />
          <img
            onClick={playerComputerSelection}
            id={2}
            className={classes["gameSet-scissors"]}
            src={scissors}
            alt="scissors"
          />
          <img
            onClick={playerComputerSelection}
            id={1}
            className={classes["gameSet-rock"]}
            src={rock}
            alt="rock"
          />
        </div>
      )}

      {boardShown ? (
        ""
      ) : (
        <EndGame
          onPlayerSelection={playerSelection}
          onComputerSelection={computerSelection}
          onWhoWon={whoWon}
          onBoardShownHandler={boardShownHandler}
        />
      )}

      {boardShown && (
        <button onClick={openRules} className={classes["gameSet-btn"]}>
          {" "}
          Rules
        </button>
      )}
    </div>
  );
};

export default GameStart;
