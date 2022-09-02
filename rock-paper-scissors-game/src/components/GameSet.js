import React, { useState, useEffect } from "react";
import classes from "./gameSet.module.css";
import bkg from "../images/bg-triangle.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";

const GameSet = (props) => {
  const randomNumber = Math.floor(Math.random() * 3);

  const onPlayerSelectsPaper = () => {
    props.onGameSetClose(false);
    props.onComputerSelectionHandler(randomNumber);
    props.onPlayerSelectionHandler(0);
  };
  const onPlayerSelectsRock = () => {
    props.onGameSetClose(false);
    props.onComputerSelectionHandler(randomNumber);
    props.onPlayerSelectionHandler(1);
  };
  const onPlayerSelectsScissors = () => {
    props.onGameSetClose(false);
    props.onComputerSelectionHandler(randomNumber);
    props.onPlayerSelectionHandler(2);
  };
  const onOpenRules = () => {
    return props.onRulesOpenHandler(true);
  };

  return (
    <div className={classes["container-background"]}>
      <img className={classes.bkg} src={bkg} alt="bkg" />
      <div className={classes.container}>
        <img
          onClick={onPlayerSelectsPaper}
          className={`${classes.paper} ${classes.btn}`}
          src={paper}
          alt="paper"
        />
        <img
          onClick={onPlayerSelectsRock}
          className={`${classes.rock} ${classes.btn}`}
          src={rock}
          alt="rock"
        />
        <img
          onClick={onPlayerSelectsScissors}
          className={`${classes.scissors} ${classes.btn}`}
          src={scissors}
          alt="scissors"
        />
      </div>
      <button onClick={onOpenRules} className={classes.rules}>
        Rules
      </button>
    </div>
  );
};

export default GameSet;
