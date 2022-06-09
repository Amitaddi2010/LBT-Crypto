import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import Lottery from './components/Lottery/Lottery';
import Swap from './components/Swap/Swap';
import Footer from './components/Footer/Footer'
import Timeline from './components/Timeline/Timeline'
import Team from './components/Team/Team'
import NFT from './components/NFT/NFT';
import Home from './components/Home/Home';
import Metaverse from './components/Metaverse/Metaverse';
import { loadAccount, loadWeb3, loadContract, buyTokens, sellTokens, loadBalance } from './utils/utils';

import { Routes, Route, Link } from "react-router-dom";


function App() {
  const SwapShow = 2;
  const LotteryShow = 1;
  const [appClass, setAppClass] = useState(false);
  const [show, setShow] = useState(SwapShow);
  const [account, setAccount] = useState(null);
  const [balanceAsEther, setbalanceAsEther] = useState();
  const [tokenBal, setTokenBal] = useState(0);
  const [loading, setLoader] = useState(false);
  const [manager, setManager] = useState('');
  const [lotteryContract, setLotteryContract] = useState();
  const [lotteryAddress, setLotteryAddress] = useState("");
  useEffect(() => {
    loadWeb3();
    loadAccount(setAccount);
    loadContract({ setManager, setLotteryContract, setLotteryAddress });
  }, [])
  useEffect(() => {
    window.ethereum?.on("accountsChanged", handleAccountChange);
    return () => {
      window.ethereum?.removeListener("accountsChanged", handleAccountChange);
    };
  });
  useEffect(() => {
    loadBalance({ account, setbalanceAsEther, setTokenBal });
  }, [account, loading])
  const handleAccountChange = (...args) => {
    // you can console to see the args
    const accounts = args[0];
    // if no accounts that means we are not connected
    if (accounts.length === 0) {
      console.log("Please connect to metamask");
      // our old data is not current connected account
      // currentAccount account that you already fetched and assume you stored it in useState
    } else if (accounts[0] !== account) {
      // if account changed you should update the currentAccount so you return the updated the data
      // assuming you have [currentAccount,setCurrentAccount]=useState
      // however you are tracking the state currentAccount, you have to update it. in case of redux you have to dispatch update action etc
      setAccount(accounts[0])
    }
  };
  return (
    <div className={appClass ? 'App Landing':'App' }>
      <Navbar handler={setShow} show={show} account={account} />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home setAppClass={setAppClass} />} />
          <Route path="/lottery" element={<Lottery manager={manager} account={account} setLoader={setLoader} />} />
          <Route path="/swap" element={<Swap
            etherBalance={balanceAsEther}
            tokenBalance={tokenBal}
            buyTokens={async (amount) => {
              await buyTokens(amount, setLoader, account);
            }}
            sellTokens={async (amount) => {
              await sellTokens(amount, setLoader, account);
            }}
          />} />
          <Route path="/team" element={<Team />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="/nft" element={<NFT />} />
          <Route path="/metaverse" element={<Metaverse />} />
        </Routes>
      </div>
      <Footer />
    </div>

  );
}

export default App;
