import React from "react";
import classes from "./scoreBar.module.css";

const ScoreBar = ({ onScore }) => {
  return (
    <div className={classes.container}>
      <div className={classes.name}>
        {" "}
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>{" "}
      </div>
      <div className={classes.score}>
        {" "}
        <p className={classes["score-score"]}>Score</p>
        <p className={classes["score-value"]}> {onScore}</p>
      </div>
    </div>
  );
};

export default ScoreBar;
