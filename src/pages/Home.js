import React, { useContext, useState } from "react";
import "../pagesStyle/Home.scss";
//import other components
import Button from "../Components/Button/Button";
import { Card } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import { Link } from "react-router-dom";
import logophoto from "../images/logophoto.png";
import somethingCat from "../images/somethingCat.gif";
import uniswap from "../images/uniswap.gif";
import ReactTypingEffect from "react-typing-effect";
import { TerminalApp } from "../Components/Terminal/TerminalApp.js";
import original from "../images/original.gif";
import eth from "../images/eth.gif";
import purr from "../images/PURRR.png";
import catbowl from "../images/CAT BOWL.png";
import text from "../images/TEXT.png";

const Home = () => {
    return (
        <div className="my-12 p-6">
            <div className="mx-auto w-full max-w-lg px-6 py-12 shadow-xl bg-gray-100 rounded-lg gradient space-y-8 mb-6">
                <div className="space-y-4">
                    <img className="h-8 mx-auto" src={purr} alt="" />
                    <h1 className="text-2xl sm:text-4xl uppercase font-extrabold text-center">
                        fur.finance
                    </h1>
                </div>
                <img className="w-96 mx-auto" src={catbowl} alt="" />
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                    <button
                        type="button"
                        className="silkscreen-font shadow rounded px-3 py-2"
                    >
                        💸 Trade
                    </button>
                    <button
                        type="button"
                        className="silkscreen-font shadow rounded px-3 py-2"
                    >
                        🥩 Stake
                    </button>
                    <button
                        type="button"
                        className="silkscreen-font shadow rounded px-3 py-2"
                    >
                        🧑‍🌾Farm
                    </button>
                </div>
            </div>
            <div className="mx-auto text-center max-w-md">
                <p className="silkscreen-font text-2xl">
                    FUR IS THE NEW MONEY FOR DECENTRALIZED CAT TREATS
                </p>
            </div>
        </div>

        // <div className="home-container"
        //   <Card className="home-card">
        //     <div className="home-header">
        //       <h1 className="pubKey">fur.finance</h1>
        //     </div>
        //     <div className="purr-container">
        //       <img className="purr-img" src={ purr } />
        //     </div>
        //     <div className="bowl-container">
        //       <a href="https://app.fur.finance">
        //         <img className="cat-bowl" src={catbowl} />
        //       </a>
        //     </div>
        //     <div className="home-btns">
        // <a className="trade" href={`https://app.uniswap.org/#/swap?outputCurrency=${process.env.REACT_APP_FUR_ADDRESS}`} style={{ color: 'limegreen' }} >
        //   <Button depressed className="trade">
        //     💸 Trade
        //   </Button>
        // </a>
        //   <Button className="stake">
        //     <Link className="stake" to={"/stake"} style={{ color: 'limegreen' }} >
        //       🥩 Stake
        //     </Link>
        //   </Button>
        // <a className="farm" href={`https://app.fur.finance`} style={{ color: 'limegreen' }} >
        //   <Button>
        //     🧑‍🌾 Farm
        //   </Button>
        // </a>
        //     </div>
        //   </Card>
        //   <div className="bottom-text">
        //     <p className="btm-txt">
        //       Fur is the new money for
        //       <br />
        //       decentralized cat treats
        //     </p>
        //   </div>

        // </div>
    );
};

export default Home;
