import React, { useContext } from "react";

/* import Context from "../../Context/ReactContext"; */

//style
import "./NavbarStyle.scss";

//logo
import logophoto from "../../images/logophoto.png";

//react router dom
import { BrowserRouter as Router, Link } from "react-router-dom";
/* import MetaMaskButton from "../MetaMaskButton/MetaMaskButton"; */
//
const Navbar = (props) => {
  const { isNight, setNight } = props;
  /*  var { maskProvider, maskAccount, maskName, parent } = props; */

  /* var myContext = useContext(Context); */

  return (
    <nav style={{  zIndex:'9999',
    boxShadow: isNight ? '-1px 13px 31px -12px rgba(87, 101, 116,1.0)' : '-1px 13px 8px -12px rgba(54, 54, 54, 0.4)' }}>
      <div className="contain">
        <img src={logophoto} alt="logo" />
        <div className="" style={{ marginLeft: "auto" }}></div>
        <nav-links>
          <ul>
            {/*   {myContext.makeAccount && (
              <> */}
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/chart">PRICE</Link>
            </li>
            <li>
              <Link to="/team">TEAM</Link>
            </li>

            <li>
              <a
                className="tradeBTN"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://app.uniswap.org/#/swap?outputCurrency=${process.env.REACT_APP_FUR_ADDRESS}`}
              >
                TRADE
              </a>
            </li>
            <li>
              <Link className="stakeBTN" to="/stake">
                STAKE
              </Link>
            </li>
            <li>
              <a className="stakeBTN" href="https://lucky-field-1404.on.fleek.co">
                FARM
              </a>
            </li>
            <li className="onoffswitch">
              <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" onChange={e => setNight(!isNight)} id="myonoffswitch" />
              <label className="onoffswitch-label" htmlFor="myonoffswitch">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
              </label>
            </li>

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

export default Navbar;
