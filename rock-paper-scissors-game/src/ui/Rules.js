import React from "react";
import classes from "./rules.module.css";
import rules from "../images/image-rules.svg";
import exit from "../images/icon-close.svg";

const Rules = (props) => {
  const onExitRules = () => {
    return props.onRulesCloseHandler(false);
  };

  return (
    <div className={classes["rules-container"]}>
      <h1 className={classes.titel}>Rules</h1>
      <img className={classes.rules} src={rules} alt="rules" />
      <img
        onClick={onExitRules}
        className={classes.exit}
        src={exit}
        alt="exit-button"
      />
    </div>
  );
};

export default Rules;
