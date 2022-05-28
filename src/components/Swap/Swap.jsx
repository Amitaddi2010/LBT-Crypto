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
    <div className='content swap' >
      <h2 className='title'>Swap</h2>

      <div className='balance'>{from}
        <span>{from === 'ETH' ? etherBalance : (tokenBalance ? window.web3.utils.fromWei(tokenBalance, "Ether") : '0')}</span>
        <div><input type="text" value={input} onChange={(e) => {
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
        background: 'linear-gradient(176deg, rgba(154,185,183,1) 1%, rgba(132,190,184,1) 55%, rgba(54,126,244,1) 100%)',
        fontSize: '3.5rem',
        borderRadius: '100%',
        boxShadow: '0px 0px 0px 5px rgb(15, 244, 221)',
        animation: ''
      }} />

      <div className='balance'>{to}
        <span>{to === 'ETH' ? etherBalance : (tokenBalance ? window.web3.utils.fromWei(tokenBalance, "Ether") : '0')}</span>
        <div>
          <input type="text" disabled value={input * multiplier} />
        </div>
      </div>
      <button
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

      >Swap</button>

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