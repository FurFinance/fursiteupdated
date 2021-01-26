import React, { Component } from "react";

//import styleing
import "../pagesStyle/Stake.scss";
import catEatHeart from "../images/catEatHeart.gif";
import { Card, Button, TextArea } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

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
      <>
        {/* <div data-aos="fade-up"> */}
        <Card className="cardWrapper">
          <div className="catEatHeart"><img height="90" width="90" src={catEatHeart} /></div>

          <Card outlined className="sectionWrapperTest">


            <Card outlined className="stakeFur">
              <h1 text className="h5Title">Total Staked FUR</h1>
              <h2>{this.displayValue(totalTokenStaked)}</h2>
            </Card >







            <Card outlined className="stakeFur">
              <h1 text className="h5Title">Your Staked FUR</h1>
              <h2>{this.displayValue(userStakedTokenAmount)}</h2>

            </Card>




            {/* starting the nxt row */}



            <Card inset className="stakeFur">

              <h5 className="h1Title" style={{ textSize: '2.5rem' }}>Stake your FUR</h5>
              <p>FUR Balance:</p>
              <h2>{this.displayValue(userTokenAmount)}</h2>


              <input
                className="input"
                id="amountToStake"
                placeholder="Amount"
                value={amountToStake}
                onChange={this.handleChange}
              />

              <div className="stakingCard">
                <Button depressed
                  className="farmBtn"
                  // TODO do better type check here, right now userTokenAmount is a string
                  disabled={userTokenAmount == 0}
                  onClick={this.handleSetAllToStake}

                >
                  All
              </Button>
                <Button
                  className="farmBtn"
                  disabled={amountToStake === 0 || amountToStake === ""}
                  onClick={this.handleSteak}
                >
                  Stake
              </Button>
              </div>
            </Card>





            <Card inset className="stakeFur">

              <h5 className="h1Title">Your FUR Profit</h5>

              <p>
                Profit Earned: <h2>{this.displayValue(userDividends)}</h2>
              </p>
              <input
                className="input"
                id="amountToUnstake"
                placeholder="FUR to withdraw"
                value={amountToUnstake}
                onChange={this.handleChange}
              />
              <div className="stakingCard">
                <Button // TODO do better type check here, right now userStakedTokenAmount is a string
                  disabled={userStakedTokenAmount == 0}
                  onClick={this.handleSetAllToWithdraw}
                  className="farmBtn"
                >
                  All
                </Button>

                <Button // TODO do better type check here, right now userDividends is a string
                  disabled={userDividends == 0}
                  onClick={this.handleCollect}
                  className="farmBtn"
                >
                  Collect
                </Button>




                <Button style={{ marginBottom: '12px' }}
                  disabled={amountToUnstake === 0 || amountToUnstake === ""}
                  onClick={this.handleUnstake}
                  className="farmBtn"
                >
                  Withdraw
              </Button>

              </div>

            </Card>
          </Card>
        </Card>





        {/* </div> */}
      </>
    );
  }
}

export default Stake;
