import React, { useState, useEffect } from "react";
import classes from "./gameBoard.module.css";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";

const GameBoard = (props) => {
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const onOpenRules = () => {
    return props.onRulesOpenHandler(true);
  };
  console.log(props);

  //render the player selection
  const playerSelection = () => {
    if (props.onPlayerSelection === 0) {
      return paper;
    }
    if (props.onPlayerSelection === 1) {
      return rock;
    } else {
      return scissors;
    }
  };
  //render the computer selection
  const computerSelection = () => {
    if (props.onComputerSelection === 0) {
      return paper;
    }
    if (props.onComputerSelection === 1) {
      return rock;
    } else {
      return scissors;
    }
  };

  //selects class to apply player
  const classSelectionPlayer = () => {
    if (props.onPlayerSelection === 0) {
      return classes.paper;
    }
    if (props.onPlayerSelection === 1) {
      return classes.rock;
    } else {
      return classes.scissors;
    }
  };
  //select class to apply computer
  const classSelectionComputer = () => {
    if (props.onComputerSelection === 0) {
      return classes.paper;
    }
    if (props.onComputerSelection === 1) {
      return classes.rock;
    } else {
      return classes.scissors;
    }
  };
  //define winner

  useEffect(() => {
    if (props.onPlayerSelection === 0 && props.onComputerSelection === 1) {
      setResult("You win");
      setScore((score) => {
        return score + 1;
      });
    }
    if (props.onPlayerSelection === 1 && props.onComputerSelection === 2) {
      setResult("You win");
      setScore((score) => {
        return score + 1;
      });
    }
    if (props.onPlayerSelection === 2 && props.onComputerSelection === 0) {
      setResult("You win");
      setScore((score) => {
        return score + 1;
      });
    }
    if (props.onPlayerSelection === 0 && props.onComputerSelection === 0) {
      setResult("it is a Tie");
      setScore((score) => {
        return score;
      });
    }
    if (props.onPlayerSelection === 1 && props.onComputerSelection === 1) {
      setResult("it is a Tie");
      setScore((score) => {
        return score;
      });
    }
    if (props.onPlayerSelection === 2 && props.onComputerSelection === 2) {
      setResult("it is a Tie");
      setScore((score) => {
        return score;
      });
    } else {
      setResult("You lose");
      setScore((score) => {
        return score - 1;
      });
    }

    // console.log(score)
  }, [props.onPlayerSelection, props.onComputerSelection, result]);

  //restarting

  const restart = () => {
    props.onShowGameSet(true);
    console.log(score);
  };

  //set score

  return (
    <div className={classes.container}>
      <div className={classes["container-selection"]}>
        <div className={classes.selection}>
          {" "}
          <div className={classes.placeholder}>
            <img
              className={classSelectionPlayer()}
              src={playerSelection()}
              alt=""
            />
          </div>
          <p className={classes.text}>you picked</p>
        </div>
        <div className={classes.selection}>
          <div className={classes.placeholder}>
            {" "}
            <img
              className={classSelectionComputer()}
              src={computerSelection()}
              alt=""
            />
          </div>
          <p className={classes.text}>the house picked</p>
        </div>
      </div>
      <div className={classes["game-result"]}>
        <h2 className={classes["game-result_titel"]}>{result}</h2>
        <button onClick={restart} className={classes.restart}>
          Play again
        </button>
      </div>
      <button onClick={onOpenRules} className={classes.rules}>
        Rules
      </button>
    </div>
  );
};

export default GameBoard;
