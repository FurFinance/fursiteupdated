import React from "react";
import { IconButton } from 'ui-neumorphism'
import "./BottomBarStyle.scss";

import 'ui-neumorphism/dist/index.css'
//telegram twitter discord
import { FaDiscord, FaTelegram, FaTwitterSquare } from "react-icons/fa";

const BottomBar = ({darkMode}) => {

  return (
        <div className="footer">
            <div className="iconsParent">
                  <div className="discord-container">
                        <a href="https://discord.gg/EzBgUqBd8p">
                              <FaDiscord className="discord-icon" style={{ color: !darkMode ? '#222f3e' : 'white' }} /> 
                        </a>
                  </div>
                  <div className="telegram-container">
                        <a href="https://t.me/FURFINANCE">
                              <FaTelegram className="telegram-icon" style={{ color: !darkMode ? '#222f3e' : 'white' }}  />
                        </a>
                  </div>
                  <div className="twitter-container">
                        <a href="https://twitter.com/furfinance">
                              <FaTwitterSquare className="twitter-icon" style={{ color: !darkMode ? '#222f3e' : 'white' }}  />
                        </a>
                  </div>
            </div>
        </div> 
  );
};

export default BottomBar;
