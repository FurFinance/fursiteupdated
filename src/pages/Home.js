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


const Home = ({ Title, subTitle, isNight, maskAccount }) => {
  return (
      <div className="main">
        <Card className="homeCard">
          <h1 className="pubKey">fur.finance</h1>
          <img src={purr} width="140" height="60" />
        {/* <div></div> */}
          <a href="https://app.fur.finance"><img className="bowl" src={catbowl} width="400" height="200" /></a>
        {/* <div></div> */}
        <div className="menuBtn">
        <a href={`https://app.uniswap.org/#/swap?outputCurrency=${process.env.REACT_APP_FUR_ADDRESS}`} style={{ color: 'lime' }}><Button depressed>💸 Trade</Button></a>
            <Button><Link to={"/stake"} style={{ color: 'lime' }}>🥩 Stake</Link></Button>
            <a href={`https://app.fur.finance`}style={{ color: 'lime' }}><Button>🧑‍🌾 Farm </Button></a>
        </div>
        </Card>
        <div>
        <img className="header"src={text} width="500" height="90" />
        </div>
      </div>
  )
};

export default Home;
