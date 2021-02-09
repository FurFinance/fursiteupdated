import React, { Component } from "react";

//import styleing
import "../pagesStyle/Stake.scss";
import N1 from '../images/N1.png'
import FOOD from '../images/FOOD.png'
import FOOD2 from '../images/FOOD2.png'
import FOOD3 from '../images/FOOD3.png'
import FOOD4 from '../images/FOOD99.png'
import { Card, Button, TextArea } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import ASCII from 'react-rainbow-ascii'

//effects
import AOS from "aos";
import "aos/dist/aos.css";

var Web3 = require("web3");

const FURU_ADDRESS = process.env.REACT_APP_FUR_ADDRESS;
const ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Collect",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Fee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Stake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Unstake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "bool", name: "status", type: "bool" },
    ],
    name: "Whitelist",
    type: "event",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_tokens", type: "uint256" }],
    name: "acidDrop",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "allInfoFor",
    outputs: [
      { internalType: "uint256", name: "totalTokenSupply", type: "uint256" },
      { internalType: "uint256", name: "totalTokensStaked", type: "uint256" },
      { internalType: "uint256", name: "userBalance", type: "uint256" },
      { internalType: "uint256", name: "userStaked", type: "uint256" },
      { internalType: "uint256", name: "userDividends", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "address", name: "_spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_spender", type: "address" },
      { internalType: "uint256", name: "_tokens", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address[]", name: "_receivers", type: "address[]" },
      { internalType: "uint256[]", name: "_amounts", type: "uint256[]" },
    ],
    name: "bulkTransfer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "collect",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_tokens", type: "uint256" }],
    name: "distribute",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "dividendsOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "isWhitelisted",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_tokens", type: "uint256" }],
    name: "stake",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "stakedOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalStaked",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "uint256", name: "_tokens", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "uint256", name: "_tokens", type: "uint256" },
      { internalType: "bytes", name: "_data", type: "bytes" },
    ],
    name: "transferAndCall",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_from", type: "address" },
      { internalType: "address", name: "_to", type: "address" },
      { internalType: "uint256", name: "_tokens", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_tokens", type: "uint256" }],
    name: "unstake",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "bool", name: "_status", type: "bool" },
    ],
    name: "whitelist",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

class Stake extends Component {
  state = {
    account: null,
    amountToStake: "",
    amountToUnstake: "",
    furuContract: null,
    totalTokenSupply: 0,
    totalTokenStaked: 0,
    userDividends: 0,
    userTokenAmount: 0,
    userStakedTokenAmount: 0,
    web3: null,
  };

  componentDidMount() {
    if (!this.ethEnabled()) {
      alert(
        "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"
      );
    }
    const web3 = new Web3(window.ethereum);

    const furuContract = new web3.eth.Contract(ABI, FURU_ADDRESS);
    this.setState({ furuContract, web3 });
  }

  componentDidUpdate(prevProps, prevState) {
    const { account, web3 } = this.state;
    if (account !== prevState.account) {
      this.getAmounts();
    }
    if (web3 !== prevState.web3) {
      this.getAccount();
    }
  }

  displayValue(value) {
    if (!value) return 0;

    return Number(Web3.utils.fromWei(value)).toFixed(3);
  }

  ethEnabled = () => {
    if (window.ethereum) {
      window.ethereum.enable();
      return true;
    }
    return false;
  };

  getAccount = async () => {
    const { web3 } = this.state;
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
  };

  getAmounts = async () => {
    const { account, furuContract } = this.state;
    if (!account) return;
    furuContract.methods.allInfoFor(account).call(
      { from: account },
      function (error, info) {
        if (!error) {
          const totalTokenSupply = info[0];
          const totalTokenStaked = info[1];
          const userTokenAmount = info[2];
          const userStakedTokenAmount = info[3];
          const userDividends = info[4];

          this.setState({
            totalTokenSupply,
            totalTokenStaked,
            userTokenAmount,
            userStakedTokenAmount,
            userDividends,
          });
        } else {
          console.log(error);
        }
      }.bind(this)
    );
  };

  handleCollect = () => {
    const { account, furuContract } = this.state;
    furuContract.methods
      .collect()
      .send({ from: account }, function (error, hash) {
        if (!error) {
          console.log(hash);
        } else {
          console.log(error);
        }
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSetAllToStake = () => {
    const { userTokenAmount } = this.state;

    this.setState({ amountToStake: Web3.utils.fromWei(userTokenAmount) });
  };

  handleSetAllToWithdraw = () => {
    const { userStakedTokenAmount } = this.state;
    this.setState({
      amountToUnstake: Web3.utils.fromWei(userStakedTokenAmount),
    });
  };

  handleSteak = () => {
    const { account, amountToStake, furuContract } = this.state;
    furuContract.methods
      .stake(Web3.utils.toWei(amountToStake))
      .send({ from: account }, function (error, hash) {
        if (!error) {
          console.log(hash);
        } else {
          console.log(error);
        }
      });
  };

  handleUnstake = () => {
    const { account, amountToUnstake, furuContract } = this.state;
    furuContract.methods
      .unstake(Web3.utils.toWei(amountToUnstake))
      .send({ from: account }, function (error, hash) {
        if (!error) {
          console.log(hash);
        } else {
          console.log(error);
        }
      });
  };

  render() {
    const {
      amountToStake,
      amountToUnstake,
      totalTokenStaked,
      userDividends,
      userStakedTokenAmount,
      userTokenAmount,
    } = this.state;

    return (
      <div className="stake-container">

        {/* CARD ONE */}

        <Card className="main-card">
            <div className="stake-header">
              <h1 className="stake-h1"> { `Kitty Treats`.toUpperCase() } </h1>
                <br />
              <h2 className="stake-h2"> { `Vending Machine`.toUpperCase() } </h2>
            </div>
            <div className="all-cards-div">
              <Card className="all-staked-card">
                <div className="all-staked-text">
                  <h3 className="all-staked-h3"> { `All Staked FUR`.toUpperCase() } </h3>
                  <p className="stake-number"> { this.displayValue(totalTokenStaked) } </p>
                </div>
                <div className="all-staked-img">
                  <img className="food-img-1" src={ FOOD } />
                </div>
              </Card>

              {/* CARD TWO */}

              <Card className="your-staked-card">
                <div className="your-staked-text">
                  <h3 className="your-staked-h3"> { `Your Staked Fur`.toUpperCase() } </h3>
                  <p className="stake-number"> { this.displayValue(userStakedTokenAmount) } </p>
                </div>
                <div className="your-staked-img">
                  <img className="food-img-2" src={ FOOD2 } />
                </div>
              </Card>

              {/* CARD THREE */}

              <Card className="stake-card">
                <div className="stake-card-text">
                  <h3 className="stake-h3">
                    Stake Your Fur
                      <br />
                      <br />
                    { `FUR Balance:`.toUpperCase() }
                  </h3>
                  <p className="stake-number"> { this.displayValue(userTokenAmount) } </p>
                  <div className="stake-functionality">
                    <div className="field">
                      <input
                        type="number"
                        className="input"
                        id="amountToStake"
                        placeholder="AMOUNT"
                        value={amountToStake.toString()}
                        onChange={this.handleChange}
                      />
                    </div>
                      <div className="stake-buttons">
                        <button
                          className="farmBtn1"
                          // TODO do better type check here, right now userTokenAmount is a string
                          disabled={userTokenAmount == 0}
                          onClick={this.handleSetAllToStake}
                        >
                          ALL
                        </button>
                        <button
                          className="farmBtn2"
                          disabled={amountToStake === 0 || amountToStake === ""}
                          onClick={this.handleSteak}
                        >
                          STAKE
                        </button>
                      </div>
                  </div>
                </div>
                <div className="staked-img">
                  <img className="food-img-3" src={ FOOD3 } />
                </div>
              </Card>

              {/* CARD FOUR */}

              <Card className="fur-profit-card">
                <div className="fur-profit-text">
                  <h3 className="profit-h3">
                    Your Fur profit
                      <br />
                      <br />
                    Profit Earned:
                  </h3>
                  <p className="stake-number"> { this.displayValue(userTokenAmount) } </p>
                  <div className="profit-functionality">
                    <div className="field">
                      <input
                        type="number"
                        className="input"
                        id="amountToUnstake"
                        placeholder="WITHDRAW"
                        value={amountToUnstake.toString()}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="profit-buttons">
                      <button 
                        // TODO do better type check here, right now userStakedTokenAmount is a string
                        disabled={userStakedTokenAmount == 0}
                        onClick={this.handleSetAllToWithdraw}
                        className="farmBtn3"
                      >
                        ALL
                      </button>
                      <button 
                        // TODO do better type check here, right now userDividends is a string
                        disabled={userDividends == 0}
                        onClick={this.handleCollect}
                        className="farmBtn4"
                      >
                        COLLECT
                      </button>
                      <button
                        disabled={amountToUnstake === 0 || amountToUnstake === ""}
                        onClick={this.handleUnstake}
                        className="farmBtn5"
                      >
                        WITHDRAW
                      </button>
                    </div>
                  </div>
                </div>
                <div className="staked-img">
                  <img className="food-img-4" src={ FOOD4 } />
                </div>
              </Card>
            </div>
        </Card>
      </div>
    )


    // return (
    //   <>
    //     {/* <div data-aos="fade-up"> */}
    //     <Card className="cardWrapper">
    //       <h1 className="stakeHeader">{'Kitty Treats'.toUpperCase()}</h1>
    //       <div></div>
    //       <h2 className="stakeHeader">{'Vending Machine'.toUpperCase()}</h2>

    //       <Card className="sectionWrapperTest">


    //         <div dark className="stakeFur1" >
    //           <div className="centerText">
    //             <span className="stakeText">{'All Staked FUR'.toUpperCase()}</span>

    //             <h1 className="stakeNumber">{this.displayValue(totalTokenStaked)}</h1>
    //           </div>
    //           <img src={FOOD} className="food" />
    //         </div >







    //         <div dark className="stakeFur2">
    //           <div className="centerText2">
    //             <span className="stakeText2">{'Your Staked Fur'.toUpperCase()}</span>
    //             <h1 className="stakeNumber2">{this.displayValue(userStakedTokenAmount)}</h1>
    //           </div>
    //           <img src={FOOD2} className="food2" />
    //         </div>




    //         {/* starting the nxt row */}



    //         <div className="stakeFur3">
    //           <div className="centerText3">

    //             <span className="stakeText3">{"FUR Balance:".toUpperCase()}</span>

    //             <h1 className="stakeNumber3">{this.displayValue(userTokenAmount)}</h1>

    //             <input
    //             type="number"
    //               className="input"
    //               id="amountToStake"
    //               placeholder="AMOUNT"
    //               value={amountToStake}
    //               onChange={this.handleChange}

    //             />

    //             <div className="stakingCard">
    //               <button
    //                 className="farmBtn"
    //                 // TODO do better type check here, right now userTokenAmount is a string
    //                 disabled={userTokenAmount == 0}
    //                 onClick={this.handleSetAllToStake}

    //               >

    //               </button>
    //               <button
    //                 className="farmBtn7"
    //                 disabled={amountToStake === 0 || amountToStake === ""}
    //                 onClick={this.handleSteak}
    //               >

    //               </button>
    //             </div>

    //           </div>
    //           <img src={FOOD3} className="food3" />

    //         </div>





    //         <div className="stakeFur4">
    //           <div className="centerText4">
    //           <div className="stakeText4">
    //             <h3 className="furProfit">YOUR FUR PROFIT</h3>
    //             <div></div>
    //             <div></div>
    //             <span className="stakeText3">
    //               PROFIT EARNED <h3 className="stakeNumber4">{this.displayValue(userDividends)}</h3>
    //             </span>
    //             <div className="field">
    //               <input
    //                 type="number"
    //                 className="input"
    //                 id="amountToUnstake"
    //                 placeholder="WITHDRAW"
    //                 value={amountToUnstake}
    //                 onChange={this.handleChange}
    //               />
    //             </div>
    //           </div>
    //           <div className="stakingCard">
    //             <div className="centerBtns">
    //               <button // TODO do better type check here, right now userStakedTokenAmount is a string
    //                 disabled={userStakedTokenAmount == 0}
    //                 onClick={this.handleSetAllToWithdraw}
    //                 className="farmBtn1"
    //               >

    //               </button>

    //               <button // TODO do better type check here, right now userDividends is a string
    //                 disabled={userDividends == 0}
    //                 onClick={this.handleCollect}
    //                 className="farmBtn2"
    //               >

    //               </button>




    //               <button style={{ marginBottom: '12px' }}
    //                 disabled={amountToUnstake === 0 || amountToUnstake === ""}
    //                 onClick={this.handleUnstake}
    //                 className="farmBtn3"
    //               >

    //               </button>
    //             </div>

    //           </div>
    //           </div>
    //           <img src={FOOD4} className="food4" />
    //         </div>
    //       </Card>
    //     </Card>





    //     {/* </div> */}
    //   </>
    // );
  }
}

export default Stake;
