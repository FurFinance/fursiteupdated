import React, { useContext, useState } from "react";
import { Navbar } from 'ui-neumorphism';
import { Switch } from 'ui-neumorphism';
import useDarkMode from '../../Hooks/useDarkMode';

import 'ui-neumorphism/dist/index.css'

/* import Context from "../../Context/ReactContext"; */

//style
import "./NavbarStyle.scss";

//logo
import catlogo from "../../images/cat.gif";

//react router dom
import { BrowserRouter as Router, Link } from "react-router-dom";
/* import MetaMaskButton from "../MetaMaskButton/MetaMaskButton"; */
//


export const DarkmodeNav = (props) => {

  const [darkMode, setDarkMode] = useDarkMode(true)

  const toggleDarkMode = e => {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode)
  }

  return (
    <div className="nav-container">
      <div className="dark-mode__toggle">
        <div
          onClick={toggleDarkMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
      <div className="nav-div">
        <div>
          <Link className="stakeBTN" style={{ color: "rgb(62, 153, 62);" }} to="/">HELLO</Link>
        </div>
        <div>
          <a
            className="stakeBTN"
            style={{ color: "rgb(62, 153, 62);" }}
            target="_blank"
            rel="noopener noreferrer"
            href={`https://app.uniswap.org/#/swap?outputCurrency=${process.env.REACT_APP_FUR_ADDRESS}`}
          >
            TRADE
          </a>
        </div>
        <div>
          <Link style={{ color: "rgb(62, 153, 62);" }} className="stakeBTN" to="/stake">
            VAULT
          </Link>
        </div>
        <div>
          <a style={{ color: "rgb(62, 153, 62);" }} className="stakeBTN" href="https://app.fur.finance">
            FARMS
          </a>
        </div>
      </div>
    </div>
  )
};


