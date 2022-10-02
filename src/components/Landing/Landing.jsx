//import react
import React from "react";
import { Link } from "react-router-dom";

//import styles
import s from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={s.principal}>
      <div className={s.title}>
        <h1>The Moonwalkers welcome you to:</h1>
        <br />
        <h1>THE MOONQUAKES PROJECT</h1>
        <br />
        <Link to="/home">
          <button className={s.btn}>Come hear the noise</button>
        </Link>
      </div>
    </div>
  );
}
