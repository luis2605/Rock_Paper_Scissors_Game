import React, { useState, useEffect } from "react";
import classes from "./endGame.module.css";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";

const EndGame = ({
  onPlayerSelection,
  onComputerSelection,
  onWhoWon,
  onBoardShownHandler,
}) => {
  const [PlayerSelected, setPlayerSelected] = useState("");
  const [PlayerClass, setPlayerClass] = useState("");

  const [computerSelected, setComputerSelected] = useState("");
  const [computerClass, setComputerClass] = useState("");

  const [showResult, setShowResult] = useState("");

  useEffect(() => {
    if (onPlayerSelection == 0) {
      setPlayerClass("endGame-paper");
      setPlayerSelected(paper);
    } else if (onPlayerSelection == 1) {
      setPlayerClass("endGame-rock");
      setPlayerSelected(rock);
    } else if (onPlayerSelection == 2) {
      setPlayerClass("endGame-scissors");
      setPlayerSelected(scissors);
    }
  }, [onPlayerSelection]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComputerSelection == 0) {
        setComputerSelected(paper);
        setComputerClass("endGame-paper");
      } else if (onComputerSelection == 1) {
        setComputerSelected(rock);
        setComputerClass("endGame-rock");
      } else if (onComputerSelection == 2) {
        setComputerSelected(scissors);
        setComputerClass("endGame-scissors");
      }

      setShowResult(onWhoWon);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComputerSelection, onWhoWon]);
  const restartGame = () => {
    onBoardShownHandler(true);
  };
  return (
    <div className={classes["container"]}>
      <div className={classes["endGame-container"]}>
        <div>
          <img
            className={classes[PlayerClass]}
            src={PlayerSelected}
            alt="choice"
          />
          <p className={classes["selection-text"]}>You Picked</p>
        </div>
        <div>
          <img
            className={classes[computerClass]}
            src={computerSelected}
            alt=""
          />
          <p className={classes["selection-text"]}>The House Picked</p>
        </div>
      </div>
      <p className={classes["result-text"]}>{showResult}</p>
      {showResult && (
        <button onClick={restartGame} className={classes["result-btn"]}>
          You wanna play again?
        </button>
      )}
    </div>
  );
};

export default EndGame;
