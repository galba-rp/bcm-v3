import React from "react";
import classes from './button.module.css'

const button = (props) => {
  return (
    <button
      className={[classes[props.btnType]].join(" ")}
      onClick={props.clicked}
      disabled= {props.disabled}
      title = {props.title}
    >
      {props.children}
    </button>
  );
};

export default button;
