import React, { useEffect, useState } from 'react'
 
import './../Lottery/Lottery.css'
import './../../App'
import lottery from '../../abis/lottery.json';
 
 
 
function Lottery({manager, account, setLoader}) {
  const [isManager, setIsManager] = useState(false);
  const transact = async ()=>{
      setLoader(true);
      let web3 =  window.web3;
const networkId = await web3.eth.net.getId();
const lotterydata = lottery.networks[networkId];
      web3.eth.sendTransaction({ 
        from: account,
        to: lotterydata.address, 
        value: '1000000000000000000',
      }).then( function(tx) { ;
      console.log("Transaction: ", tx); 
      setLoader(false);
      alert(' Participated Sucessfully ')
       
      });
  }

  const selectWinner = async ()=>{
    const web3 = window.web3;
    const networkId = await web3.eth.net.getId();
    const lotterydata = lottery.networks[networkId];
    const contract = new web3.eth.Contract(lottery.abi, lotterydata.address);
    contract.methods.selectWinner().send({from:account})
  }

  // const getBalance = async ()=>{
  //   const web3 = window.web3;
  //   const networkId = await web3.eth.net.getId();
  //   const lotterydata = lottery.networks[networkId];
  //   const contract = new web3.eth.Contract(lottery.abi, lotterydata.address);
  //   contract.methods.getBalance();
  //   console.log(getBalance);
  // }

  useEffect(()=>{
    if(account && manager){
      if(account.toLowerCase()===manager.toLowerCase()){
        setIsManager(true);
      }else{
        setIsManager(false);
      }
    }
  },[manager, account])

  return (
    <div className='lottery'>
    <h2>Lottery </h2>
      {isManager?
      <div>
      <h1>Manager</h1>
      <button onClick={
        ()=>{
          console.log("selecting winner");
          selectWinner();
        }
      }><h3>Select Winner</h3></button>
      </div>
      :
      <div>
      <h2>Try Your Luck</h2>
      <button
      onClick={()=>{
        transact()
      }}
      ><h3>Participate Now</h3></button>
      
      </div>}
    </div>
  )
}

export default Lottery