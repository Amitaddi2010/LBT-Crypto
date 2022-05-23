import { useState, useEffect } from 'react'
import { AiOutlineSwap } from 'react-icons/ai'
import './Swap.css';

function Swap() {
  let [from, setFrom] = useState('LBT');
  let [to, setTo] = useState('ETH');
  let [angle, setAngle] = useState(90);


  return (
    <div className='content swap' >
      <h2 className='title'>Swap</h2>
       
      <div className='balance'>{from}</div>
      <AiOutlineSwap onClick={() => {     
        let temp = from;
        setFrom(to);
        setTo(temp);
        setAngle(old=>old+180);
      }} style={{
        transform:`rotate(${angle}deg)`,
        background: 'linear-gradient(176deg, rgba(154,185,183,1) 1%, rgba(132,190,184,1) 55%, rgba(54,126,244,1) 100%)', 
        fontSize: '3.5rem', 
        borderRadius: '100%', 
        boxShadow: '0px 0px 0px 5px rgb(15, 244, 221)',
        animation:''
      }} />

      <div className='balance'>{to}</div>
      <button >Connect Wallet</button>
      
      <div className="ExchangeRate">
          <span className="EXC-left "> Exchange rate: </span>
          <span className="EXC-right"> 1 ETH :  200000 LBT &#9432;   </span>
          <br></br>
          <span className="EXC-Fee"> Swap Fee :  1000LBT &#9432;</span>
          </div>
    </div>
  )
}

export default Swap