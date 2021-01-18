import React from "react";

import "./BottomBarStyle.scss";

//telegram twitter discord
import { FaDiscord, FaTelegram, FaTwitterSquare } from "react-icons/fa";

const BottomBar = ({isNight}) => {
  return (
    <>
      <hr />
      <footer>
        <div className="iconsParent">
          <ul>
            <li>
              <a href="https://discord.gg/tEhXTsqS">
              <FaDiscord style={{ color: !isNight ? '#222f3e' : 'white' }} />
              </a>
            </li>
            <li>
              <a href="https://t.me/FURFINANCE">
              <FaTelegram style={{ color: !isNight ? '#222f3e' : 'white' }}  />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/furfinance">
              <FaTwitterSquare style={{ color: !isNight ? '#222f3e' : 'white' }}  />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default BottomBar;
