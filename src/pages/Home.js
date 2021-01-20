import React, { useContext } from "react";
import "../pagesStyle/Home.scss";
//import other components
import Button from "../Components/Button/Button";
import logophoto from "../images/logophoto.png";
import uniswap from "../images/uniswap.gif";


const Home = ({ Title, subTitle }) => {
  /*   var { maskAccount, maskProvider, connectMetaMask } = useContext(Context); */

  return (
    <>
      <div className="containsAll">
        <div className="testingthespace">
          <div className="homePageBlueArea">
            <div className="title">
             
              <div style={{ opacity: 1 }}>
                <h1 style={{ opacity: 1 }}>{Title}</h1>
              </div>
              <div style={{ opacity: 1 }}>
                <p style={{ opacity: 1 }}>{subTitle}</p>
              </div>
              {/*      <AnimatePresence>
                                {!maskAccount && (
                                    <motion.a
                                        className='MetaMaskHomeButton'
                                        exit={{ opacity: [1, 0] }}
                                        onClick={connectMetaMask}>
                                        Connect MetaMask
                                    </motion.a>
                                )}
                            </AnimatePresence> */}
              {/* <div className='lastphoto'>
                                <img className='lastphoto' src={logophoto} />
                            </div> */}
            </div>
          </div>

          {/* <div className='secondContent'>
                        <div className='wrapper'>
                            <div className='starsWrapper'>
                                <div data-aos='fade-right'>
                                    <p>farms のうじょう</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-up' data-aos-duration='1500'>
                            <Pannels />
                        </div>
                    </div> */}

          <div className="tradeButtonParent">
            <Button 
              link={`https://app.uniswap.org/#/swap?outputCurrency=${process.env.REACT_APP_FUR_ADDRESS}`}
            >
              trade now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
