import React, { Component, lazy, useEffect, useState } from "react";
import { Card } from 'ui-neumorphism';
import './index.css'
import detectEthereumProvider from "@metamask/detect-provider";
import 'ui-neumorphism/dist/index.css'
/* import Context from "./Context/ReactContext"; */
import ReactTypingEffect from 'react-typing-effect';

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
    <div className={isNight ? 'nt' : 'bg'} style={{ color: isNight ? '#e4ebf5e' : '#363636', backgroundRepeat: 'repeat', position: 'relative' }}>
      {/*  <Context.Provider
        value={{
          maskProvider,
          setMaskProvider,
          maskAccount,
          setMaskAccount,
          connectMetaMask,
        }}
      > */}

      {/* <div className="br"></div> */}
      <Router>
        <Navbar isNight={isNight} setNight={setNight} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              path="/"
              component={() => (
                <Home style={{color: "lime"}}
                  Title="fur.finance"
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
      
        <BottomBar isNight={isNight} />
      </Router>
      
    </div>

  );
}

export default App;
