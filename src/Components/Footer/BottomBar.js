import React from "react";
import { IconButton } from 'ui-neumorphism'
import "./BottomBarStyle.scss";

import 'ui-neumorphism/dist/index.css'
//telegram twitter discord
import { FaDiscord, FaTelegram, FaTwitterSquare } from "react-icons/fa";

const BottomBar = ({darkMode}) => {

  return (
    

     
        <div className="iconsParent">
            
              <a href="https://discord.gg/tEhXTsqS">
              
              <FaDiscord className="discord-icon" style={{ color: !darkMode ? '#222f3e' : 'white' }} /> 
              </a>
            
            
           
              <a href="https://t.me/FURFINANCE">
              <FaTelegram style={{ color: !darkMode ? '#222f3e' : 'white' }}  />
              </a>
          
              <a href="https://twitter.com/furfinance">
              <FaTwitterSquare style={{ color: !darkMode ? '#222f3e' : 'white' }}  />
              </a>
        </div>
    
   
  );
};

export default BottomBar;
