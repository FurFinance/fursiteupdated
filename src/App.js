import React, { Component, lazy, useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
/* import Context from "./Context/ReactContext"; */

//react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
//pages import
import Home from "./pages/Home";
//Navbar
import Navbar from "./Components/Navbar/Navbar";

//Footer
import BottomBar from "./Components/Footer/BottomBar";
import { Suspense } from "react";

const About = React.lazy(() => import("./pages/About"));
/* const Blog = React.lazy(() => import("./pages/Blog")); */
const Team = React.lazy(() => import("./pages/Team"));
const Stake = React.lazy(() => import("./pages/Stake"));
const Error404 = React.lazy(() => import("./pages/Error404"));
const Chart = React.lazy(() => import("./pages/Chart"));

function App() {
  const [isNight, setNight] = useState(false);
  /*   const [maskProvider, setMaskProvider] = useState();
  const [maskAccount, setMaskAccount] = useState();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const MetaMask = async () => {
      const MaskProvider = await detectEthereumProvider();
      if (MaskProvider) {
        await MaskProvider.enable();
        setMaskProvider(MaskProvider);
        setMaskAccount(MaskProvider.selectedAddress);
      }
    };
    MetaMask();
  }, []);

  const connectMetaMask = async () => {
    if (maskProvider) {
      const accounts = await maskProvider.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setMaskAccount(account);
    } else {
      alert(
        "Failed to connect to MetaMask. Do you have it installed? https://metamask.io"
      );
    }
  };
 */



  return (
    <div className={isNight ? 'nt' : 'bg'} style={{ color: isNight ? 'white' : '#363636', backgroundRepeat: 'repeat', position: 'relative' }}>
      {/*  <Context.Provider
        value={{
          maskProvider,
          setMaskProvider,
          maskAccount,
          setMaskAccount,
          connectMetaMask,
        }}
      > */}
      <svg className="svg-top"
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f8a5af" fill-opacity="0.6" d="M0,160L120,170.7C240,181,480,203,720,197.3C960,192,1200,160,1320,144L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
      </svg>
      <div className="br"></div>
      <Router>
        <Navbar isNight={isNight} setNight={setNight} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              path="/"
              component={() => (
                <Home
                  Title={"fur.finance"}
                  subTitle={
                    "simple decentralised products for high risk-adjusted returns"
                  }
                />
              )}
              exact
            />
            <Route path="/about" component={About} exact />
            {/* <Route path="/blog" component={Blog} exact /> */}
            <Route path="/team" component={Team} exact />
            <Route path="/stake" component={Stake} exact />
            <Route path="/chart" component={Chart} />
            <Route component={Error404} />
          </Switch>
        </Suspense>
        <svg className="svg-bottom"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path fill="#f8a5af" fill-opacity="0.6" d="M0,96L120,90.7C240,85,480,75,720,80C960,85,1200,107,1320,117.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
        <BottomBar isNight={isNight} />
      </Router>
      {/*  </Context.Provider> */}
    </div>

  );
}

export default App;
