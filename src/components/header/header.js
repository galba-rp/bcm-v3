import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../navBar/navbar";
import bcm from "../../assets/images/logoBCM.png";
import classes from "./header.module.css";

const header = () => {
  return (
    <header className={classes.Header}>
      <Link to="/">
        <img
          src={bcm}
          width="100"
          height="auto"
          alt=""
          className={classes.Logo}
        ></img>
      </Link>
      <NavBar />
    </header>
  );
};

export default header;
