import lottery from '../abis/lottery.json';
import EthSwap from "../abis/EthSwap.json";
import Token from "../abis/Token.json";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";
 
const providerOptions = {
	
  binancechainwallet: {
		package: true
	  },
	walletconnect: {
		package: WalletConnectProvider,
		options: {
		  infuraId: "1d06d07274f0416ba9089c49d7cfa7f8"
		}
	  },
	  walletlink: {
		package: WalletLink, 
		options: {
		  appName: "LBToken", 
		  infuraId: "1d06d07274f0416ba9089c49d7cfa7f8", 
		  rpc: "", 
		  chainId: 3, 
		  appLogoUrl: null, 
		  darkMode: true 
		}
	  },
};

const web3Modal = new Web3Modal({
  network: "ropsten",
  theme: "dark",
  cacheProvider: false,
  providerOptions 
});
const provider = new web3Modal.connect();
window.web3 = new Web3(provider);


 
const loadWeb3 = async () => {
       const provider = await web3Modal.connect();
       if(provider){
        window.web3 = new Web3(provider);
        await window.ethereum.request({ method: "eth_requestAccounts" });
       }else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.alert("No wallet installed");
      }
      console.log(window.web3);
  };
  const loadAccount = async (setAccount)=>{
    const provider = await web3Modal.connect();
    window.web3 = new Web3(provider);
    const accounts = await window.web3.eth.getAccounts();
    console.log(accounts)
    // web3Api.web3.eth.defaultAccount = accounts[0];
    setAccount(accounts[0]);
  };
  const loadContract = async ({setManager, setLotteryContract,setLotteryAddress})=>{
    const provider = await web3Modal.connect();
    window.web3 = new Web3(provider);
    const web3 = window.web3;
    const networkId = await web3.eth.net.getId();
    console.log(networkId);
    const lotterydata = lottery.networks[networkId];
    const contract = new web3.eth.Contract(lottery.abi, lotterydata.address);
    setLotteryContract(contract);
    setLotteryAddress(lotterydata.address)
    console.log(contract);
    contract.methods.manager().call((err, res)=>{
      setManager(res);
    })
    console.log(lotterydata.address);
  };
  const loadBalance = async ({account, setTokenBal, setbalanceAsEther})=>{
    const provider = await web3Modal.connect();
    window.web3 = new Web3(provider);
    if(account && window.web3){
      console.log('loading...');
    const ethBalance = await window.web3.eth.getBalance(account);
    setbalanceAsEther(window.web3.utils.fromWei(ethBalance, "Ether"));
    const networkId = await window.web3.eth.net.getId();
    const tokenData = Token.networks[networkId];
    if (tokenData) {

      const token = new window.web3.eth.Contract(Token.abi, tokenData.address);

      let tokenBal = await token.methods.balanceOf(account).call();
      setTokenBal(tokenBal.toString());
      // console.log(tokenBal.toString());
    } else {
      console.log(
        "Oops Sorry Unfortunately contract is not deployed to this selected network. Please change your network error"
      );
    }
  }
}
  const buyTokens = async (etherAmount, setLoader,account) => {
    const provider = await web3Modal.connect();
    window.web3 = new Web3(provider);
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



  const sellTokens = async (tokenAmount, setLoader, account) => {
    const provider = await web3Modal.connect();
    window.web3 = new Web3(provider);
    const web3 = window.web3;
    const networkId = await web3.eth.net.getId();
    const LWCSwapData = EthSwap.networks[networkId];
    const LWCSwap = new web3.eth.Contract(EthSwap.abi, LWCSwapData.address);
    const tokenData = Token.networks[networkId];
    setLoader(true);
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
  };



  export { loadAccount, loadWeb3, loadBalance,loadContract, buyTokens, sellTokens};