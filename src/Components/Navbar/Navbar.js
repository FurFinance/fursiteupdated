import React, { useContext } from "react";
import { Navbar } from 'ui-neumorphism';
import { Switch } from 'ui-neumorphism';

/* import Context from "../../Context/ReactContext"; */

//style
import "./NavbarStyle.scss";

//logo
import catlogo from "../../images/cat.gif";

//react router dom
import { BrowserRouter as Router, Link } from "react-router-dom";
/* import MetaMaskButton from "../MetaMaskButton/MetaMaskButton"; */
//
const DarkmodeNav = (props) => {
  const { isNight, setNight } = props;
  /*  var { maskProvider, maskAccount, maskName, parent } = props; */

  /* var myContext = useContext(Context); */

  return (
    <nav>
      <div class="nav-wrapper position-relative">
        
        
        <nav-links>
          <ul>
          <img className="catToken" src={catlogo} alt="logo" />
            <li>
              <Link style={{color: "rgb(15, 224, 15)"}} to="/">HELLO</Link>
            </li>
            <li>
              <Link style={{color: "rgb(15, 224, 15)"}} to="/about">ABOUT</Link>
            </li>
            <li>
              <Link style={{color: "rgb(15, 224, 15)"}} to="/chart">PRICE</Link>
            </li>
            <li>
              <Link style={{color: "rgb(15, 224, 15)"}} to="/team">TEAM</Link>
            </li>

            <li>
              <a
                style={{color: "rgb(15, 224, 15)"}}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://app.uniswap.org/#/swap?outputCurrency=${process.env.REACT_APP_FUR_ADDRESS}`}
              >
                TRADE
              </a>
            </li>
            <li>
              <Link style={{color: "rgb(15, 224, 15)"}} className="stakeBTN" to="/stake">
                STAKE
              </Link>
            </li>
            <li>
              <a style={{color: "rgb(15, 224, 15)"}} className="stakeBTN" href="https://app.fur.finance">
                FARM
              </a>
            </li>
            
            <Switch className="switch" onClick={e => setNight(!isNight)} className="onoffswitch">
              <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" />
              <label className="onoffswitch-label" htmlFor="myonoffswitch">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </Switch>

            {/* </>
            )}
            <li>
              <MetaMaskButton />
            </li> */}
          </ul>
        </nav-links>
      </div>
    </nav>
  );
};

export default DarkmodeNav;
