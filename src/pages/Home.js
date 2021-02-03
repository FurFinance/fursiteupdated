import React, { useContext, useState } from "react";
import "../pagesStyle/Home.scss";
//import other components
import Button from "../Components/Button/Button";
import { Card } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import { Link } from 'react-router-dom';
import logophoto from "../images/logophoto.png";
import somethingCat from '../images/somethingCat.gif'
import uniswap from "../images/uniswap.gif";
import ReactTypingEffect from 'react-typing-effect';
import { TerminalApp } from '../Components/Terminal/TerminalApp.js'
import original from '../images/original.gif'
import eth from '../images/eth.gif'
import purr from '../images/PURRR.png'
import catbowl from '../images/CAT BOWL.png'
import text from '../images/TEXT.png'


const Home = () => {
  return (
    <div className="home-container">
      <Card className="home-card">
        <div className="home-header">
          <h1 className="pubKey">fur.finance</h1>
        </div>
        <div className="purr-container">
          <img className="purr-img" src={ purr } />
        </div>
        <div className="bowl-container">
          <a href="https://app.fur.finance">
            <img className="cat-bowl" src={catbowl} />
          </a>
        </div>
        <div className="home-btns">
          <a className="trade" href={`https://app.uniswap.org/#/swap?outputCurrency=${process.env.REACT_APP_FUR_ADDRESS}`} >
            <Button depressed className="trade">
              💸 Trade
            </Button>
          </a>
            <Button className="stake">
              <Link className="stake" to={"/stake"} >
                🥩 Stake
              </Link>
            </Button>
          <a className="farm" href={`https://app.fur.finance`} >
            <Button>
              🧑‍🌾 Farm 
            </Button>
          </a>
        </div>
      </Card>
      <div className="bottom-text">
        <img className="btm-txt"src={ text } />
      </div>
    </div>
  )
};

export default Home;
