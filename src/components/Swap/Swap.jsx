import { useState, useEffect } from 'react'
import { AiOutlineSwap } from 'react-icons/ai'
import './Swap.css';
import './../../App'

function Swap({ etherBalance, tokenBalance, buyTokens, sellTokens }) {
  const [from, setFrom] = useState('LBT');
  const [to, setTo] = useState('ETH');
  const [angle, setAngle] = useState(90);
  const [input, setInput] = useState(0);
  const [multiplier, setMultiplier] = useState(100);
  useEffect(() => {
    if (from === 'LBT') {
      setMultiplier(0.01);
    } else if (from === 'ETH') {
      setMultiplier(100);
    }
  }, [from])

  return (
    <div className='swap'>
      <h2 className='swap-title'>LBT Swap</h2>

      <div className='balance'> Balance : &nbsp; {from} &nbsp; =  &nbsp;
        <span>{from === 'ETH' ? etherBalance : (tokenBalance ? window.web3.utils.fromWei(tokenBalance, "Ether") : '0')}</span>
        <div><input className='text' type="text" placeholder="Enter Amount" value={input} onChange={(e) => {
          setInput(e.target.value)
        }} />
        </div>
      </div>
      <AiOutlineSwap onClick={() => {
        let temp = from;
        setFrom(to);
        setTo(temp);
        setAngle(old => old + 180);
      }} style={{
        transform: `rotate(${angle}deg)`,
        background:  '#484848',
        fontSize: '2.5rem',
        marginBottom:'.3em',
        borderRadius: '50%',
        boxShadow: '0rem 0rem 0rem .2rem rgb(15, 244, 221)',
        animation: ''
      }} />

      <div className='balance'>Balance : {to} &nbsp; = &nbsp;
        <span>{to === 'ETH' ? etherBalance : (tokenBalance ? window.web3.utils.fromWei(tokenBalance, "Ether") : '0')}</span>
        <div>
          <input className='text' type="text"  disabled value={input * multiplier} />
        </div>
      </div>
      
      <button className='Swapbtn'
        onClick={
          () => {
            if (from === 'ETH') {
              let etherAmount = window.web3.utils.toWei(input, "Ether");
              buyTokens(etherAmount);
            } else {
              let etherAmount = window.web3.utils.toWei(window.web3.utils.toBN(input), "Ether");
              sellTokens(etherAmount);
            }
          }
        }

      ><h3>SWAP</h3></button>

      <div className="ExchangeRate">
        <span className="EXC-left "> Exchange rate: </span>
        <span className="EXC-right"> 1 ETH :  100 LBT &#9432;   </span>
         
      </div>
    </div>
  )
}

export default Swap