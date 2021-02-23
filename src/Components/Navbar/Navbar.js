import Cookies from "js-cookie";
import React, { useEffect } from "react";
//react router dom
import { Link } from "react-router-dom";
import "ui-neumorphism/dist/index.css";
import useDarkMode from "../../Hooks/useDarkMode";
//style
import "./NavbarStyle.scss";

/* import MetaMaskButton from "../MetaMaskButton/MetaMaskButton"; */
//
export const Navbar = (props) => {
    /*  var { maskProvider, maskAccount, maskName, parent } = props; */

    /* var myContext = useContext(Context); */
    // const { account, reset } = useWallet()

    // dark-mode
    const [darkMode, setDarkMode] = useDarkMode(false);

    useEffect(() => {
        const darkModeCookie = Cookies.get("darkMode");
        const darkModeEnabled = darkModeCookie === "true" ? true : false;

        if (darkModeEnabled) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }

        setDarkMode(darkModeEnabled);
    }, [darkMode, setDarkMode]);

    const toggleDarkMode = (e) => {
        e.preventDefault();
        document.body.classList.toggle("dark-mode");
        setDarkMode(!darkMode);
        // Cookies.set("darkMode", !darkMode, { domain: "fur.finance" });
        Cookies.set("darkMode", !darkMode);
    };

    return (
        <nav>
            <div class="nav-wrapper position-relative">
                <div className="dark-mode__toggle">
                    <div
                        onClick={toggleDarkMode}
                        className={darkMode ? "toggle toggled" : "toggle"}
                    />
                </div>

                <nav-links
                    style={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ul>
                        <li>
                            <Link style={{ color: "rgb(15, 224, 15)" }} to="/">
                                HELLO
                            </Link>
                        </li>

                        <li>
                            <a
                                style={{ color: "rgb(15, 224, 15)" }}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`https://app.uniswap.org/#/swap?outputCurrency=${process.env.REACT_APP_FUR_ADDRESS}`}
                            >
                                TRADE
                            </a>
                        </li>
                        <li>
                            <Link
                                style={{ color: "rgb(15, 224, 15)" }}
                                className="stakeBTN"
                                to="/stake"
                            >
                                VAULT
                            </Link>
                        </li>
                        <li>
                            <a
                                style={{ color: "rgb(15, 224, 15)" }}
                                className="stakeBTN"
                                href="https://app.fur.finance"
                            >
                                FARMS
                            </a>
                        </li>
                        <li>
                            <Link
                                style={{ color: "rgb(15, 224, 15)" }}
                                className="stakeBTN"
                                to=""
                            >
                                GROUP-FI
                            </Link>
                        </li>

                        {/* <Switch onClick={e => setNight(!isNight)} className="onoffswitch">
            <input name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" />
            <label className="onoffswitch-label" htmlFor="myonoffswitch">
              <span className="onoffswitch-inner"></span>
              <span className="onoffswitch-switch"></span>
            </label>
          </Switch> */}

                        {/* </>
          )}
          <li>
            <MetaMaskButton />
          </li> */}
                    </ul>
                </nav-links>
            </div>
            {/* <ul><label className="account-address">{account}</label></ul> */}
        </nav>
    );
};
