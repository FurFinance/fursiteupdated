import React, { useContext, useState } from "react";
import { Navbar } from 'ui-neumorphism';
import { Switch } from 'ui-neumorphism';

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
  const { isNight, setNight } = props;
  /*  var { maskProvider, maskAccount, maskName, parent } = props; */

  /* var myContext = useContext(Context); */

  return (
    <div className="nav-container">
      <div className="nav-div">
        <div>
          <Link className="stakeBTN" style={{ color: "rgb(15, 224, 15)" }} to="/">HELLO</Link>
        </div>
        <div>
          <a
            className="stakeBTN"
            style={{ color: "rgb(15, 224, 15)" }}
            target="_blank"
            rel="noopener noreferrer"
            href={`https://app.uniswap.org/#/swap?outputCurrency=${process.env.REACT_APP_FUR_ADDRESS}`}
          >
            TRADE
          </a>
        </div>
        <div>
          <Link style={{ color: "rgb(15, 224, 15)" }} className="stakeBTN" to="/stake">
            VAULT
          </Link>
        </div>
        <div>
          <a style={{ color: "rgb(15, 224, 15)" }} className="stakeBTN" href="https://app.fur.finance">
            FARMS
          </a>
        </div>
      </div>
      <div className="darkmode-container">
        <Switch color="green" onCdivck={e => setNight(!isNight)} className="onoffswitch">
          <input name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" />
          <label className="onoffswitch-label" htmlFor="myonoffswitch">
            <span className="onoffswitch-inner"></span>
            <span className="onoffswitch-switch"></span>
          </label>
        </Switch>
      </div>
    </div>
  )
};


