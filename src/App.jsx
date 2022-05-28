import './App.css';
import Navbar from './components/Navbar/Navbar';
import Fancylogo from './components/Fancylogo/Fancylogo';
import { useState, useEffect, useInsertionEffect } from 'react';
import Lottery from './components/Lottery/Lottery';
import Swap from './components/Swap/Swap';
import Footer from './components/Footer/Footer'
import Timeline from './components/Timeline/Timeline'
import Team from './components/Team/Team'
import Web3 from "web3";
import EthSwap from "./abis/EthSwap.json";
import Token from "./abis/Token.json";

import detectEthereumProvider from "@metamask/detect-provider";


function App() {
  
  const LotteryShow = 1;
  const SwapShow = 2;
  const [show, setShow] = useState(2);
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  
  const [balance, setBalance] = useState(0);
  const [balanceAsEther, setbalanceAsEther] = useState();
  const [tokenBal, setTokenBal] = useState(0);
  const [token1, setToken1] = useState();
  const [LWCswap, setLWCSwap] = useState();
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
       
      if (provider) {
         
        provider.request({ method: "eth_requestAccounts" });
        setWeb3Api({
          web3: new Web3(provider),
          provider,
           
        });
      } else {
        console.log("Please install MetaMask!");
      }
    };

    loadProvider();
  }, []);


  // useEffect(()=>{
  //   web3Api.web3.eth.defaultAccount = web3Api.web3.eth.accounts[0];
  // },[web3Api.web3])
 
   useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      console.log(web3Api.web3.eth)
      // web3Api.web3.eth.defaultAccount = accounts[0];
      setAccount(accounts[0]);
    };
    web3Api.web3 && getAccount();
  }, [web3Api.web3]);

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);
  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    // console.log(account);
    const ethBalance = await web3.eth.getBalance(accounts[0]);
    setBalance(ethBalance);
    setbalanceAsEther(web3.utils.fromWei(ethBalance, "Ether"));
    // const abi = Token.abi;
    // const networkId = await web3.eth.net.getId();
    // const address = Token.networks[networkId].address;
    // const token = new web3.eth.Contract(abi, address);

    // ##################

    const networkId = await web3.eth.net.getId();
    const tokenData = Token.networks[networkId];
    if (tokenData) {
      // you need to creae the contract instane 👇
      /* so abi is telling you how code is work you can interact with it
       so may be you have multiple smart contract and same abi code but 
       you need to tell the address of smart contract where this smart 
     contract is placed.*/

      // ##### we are loading the token ###
      const token = new web3.eth.Contract(Token.abi, tokenData.address);

      let tokenBal = await token.methods.balanceOf(accounts[0]).call();
      setTokenBal(tokenBal.toString());
      // console.log(tokenBal.toString());
    } else {
      console.log(
        "Oops Sorry Unfortunately contract is not deployed to this selected network. Please change your network error"
      );
    }

    //##########################################

    // ##### we are loading the LWC Swap data Contract ###

    const LWCSwapData = EthSwap.networks[networkId];
    if (LWCSwapData) {
      // ##### we are loading the LWC Swap(Eth Swap) ###
      const LWCSwap = new web3.eth.Contract(EthSwap.abi, LWCSwapData.address);
      console.log(LWCSwap.address)
      setLWCSwap(LWCSwap);
    } else {
      console.log(
        "Oops Sorry Unfortunately LWCSwapcontract is not deployed to this selected network. Please change your network error"
      );
    }

    setLoader(false); // when all step is done the remove the laoding from the page
  };

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("No wallet installed");
    }
  };
  // calling buy token function
  const buyTokens = async (etherAmount) => {
    const web3 = window.web3;
    const networkId = await web3.eth.net.getId();
    const LWCSwapData = EthSwap.networks[networkId];
    setLoader(true);
    let tempAccount = await window.web3.eth.getAccounts();
    const LWCSwap = new window.web3.eth.Contract(
      EthSwap.abi,
      LWCSwapData.address
    ); // this is duplicate code
    LWCSwap.methods
      .buy_token()
      .send({ value: etherAmount, from: tempAccount[0] })
      .on("transactionHash", (hash) => {
        setLoader(false);
      });
  };

  // sell token function

  const sellTokens = async (tokenAmount) => {
    console.log(tokenAmount);
    const web3 = window.web3;
    const networkId = await web3.eth.net.getId();
    const LWCSwapData = EthSwap.networks[networkId];
    const LWCSwap = new web3.eth.Contract(EthSwap.abi, LWCSwapData.address);
    // console.log(LWCAddress, LWCSwapData.address)
    // here token code start
    const tokenData = Token.networks[networkId];
    setLoader(true);
    let tempAccount = await window.web3.eth.getAccounts();
    const token = new web3.eth.Contract(Token.abi, tokenData.address); // this is duplicate code
    console.log(LWCSwapData.address)
    token.methods
      .approve(LWCSwapData.address, tokenAmount)
      .send({ from: account })
      .on("transactionHash", (hash) => {
        LWCSwap.methods
          .sellToken(tokenAmount)
          .send({ from: account })
          .on("transactionHash", (hash) => {
            setLoader(false);
          });
      });
    // .approve(LWCSwapData.address, tokenAmount)
    // .send({ from: tempAccount[0] })
    // .on("transactionHash", (hash) => {
    //   console.log(hash);
    //   setLoader(false);
    // });
    // .sellToken(tokenAmount)
    // .send({ from: tempAccount[0] })
    // .on("transactionHash", (hash) => {
    //   setLoader(false);
    // });
  };

  let content;
  if (loading) {
    content = (
      <p id="loader" className="text-center">
        {" "}
        Loading....
      </p>
    );
  } else {
    content = (
  <div>
    content loaded
  </div>  
  );
  }




  return (
    <div className="App">
       
      <Navbar handler={setShow} show={show} account={account}/>
      <div className='container'>
        <div id="space">
          <Fancylogo />
        </div>
        {!loading?
        <div className='main'>
          {show === LotteryShow && <Lottery />}
          {show === SwapShow && 
          <Swap  
            etherBalance={balanceAsEther}
            tokenBalance={tokenBal}
            buyTokens={buyTokens}
            sellTokens={sellTokens}
            />}
        </div>:<div>loading...</div>}
      </div>

            <Timeline />
       
          <Team />
          <Footer />
        
         
    </div>

  );
}

export default App;
