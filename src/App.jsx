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
import detectEthereumProvider from "@metamask/detect-provider";


function App() {
  
  const LotteryShow = 1;
  const SwapShow = 2;
  let [show, setShow] = useState(2);
  
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
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
      // if (window.ethereum) {
      //   provider = window.ethereum;
      //   try {
      //     await provider.enable();
      //   } catch {
      //     console.error("User is not allowed");
      //   }
      // } else if (window.web3) {
      //   provider = window.web3.currentProvider;
      // } else if (!process.env.production) {
      //   provider = new Web3.providers.HttpProvider("http://localhost:7545");
      // }
    };

    loadProvider();
  }, []);


 
  //Metamask Connection
//   useEffect(() =>{
// const loadProvider = async()=>{
//   console.log(window.web3)
//   console.log(window.ethereum)
// };

//    }, []);
   // /
   useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    web3Api.web3 && getAccount();
  }, [web3Api.web3]);

  return (
    <div className="App">
       <p class="card-text">
            Account : {account ? account : "not connected"}
          </p>
      <Navbar handler={setShow} show={show}/>
      <div className='container'>
        <div id="space">
          <Fancylogo />
        </div>
        <div className='main'>
          {show === LotteryShow && <Lottery />}
          {show === SwapShow && <Swap />}
        </div>
      </div>

            <Timeline />
       
          <Team />
          <Footer />
        
         
    </div>

  );
}

export default App;
