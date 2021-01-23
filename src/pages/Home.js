import React, { useContext } from "react";
import "../pagesStyle/Home.scss";
//import other components
import Button from "../Components/Button/Button";
import { Card } from 'ui-neumorphism'
import logophoto from "../images/logophoto.png";
import somethingCat from '../images/somethingCat.gif'
import uniswap from "../images/uniswap.gif";
import ReactTypingEffect from 'react-typing-effect';


const Home = ({ Title, subTitle, isNight }) => {
  /*   var { maskAccount, maskProvider, connectMetaMask } = useContext(Context); */

  return (
    <>
      <div className="containsAll">
        <div className="testingthespace">
          <div className="homePageBlueArea">
            <div className="title">

              <div style={{ opacity: 1 }}>
         

                <h1 className="h1Title" style={{ color: 'green' }}>{Title}</h1>
              </div>
              <Card inset className="subtitle" style={{ margin: '10px' }}>
                <p style={{ opacity: 1 }}>{subTitle}</p>
                <img className="catgirl" height='150' width='150' src={somethingCat} />
              </Card>
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
            { }
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
