import React from 'react'
import './../Lottery/Lottery.css'
import './../../App'
function Lottery() {

  
  return (
    <div className='lottery'>
    <h2>Lottery</h2>
    <div className='balance'></div>
    
    
    <button className='ParticipateNow' > <h3>Participate Now</h3> </button>

    <div className="ExchangeRate">
          <span className="EXC-left "> Exchange rate: </span>
          <span className="EXC-right">1 ETH   =   200000 LBT &#9432;   </span>
          <br></br>
          <span className="EXC-Fee"> Participation Fee   =   1000LBT &#9432;</span>
        </div>

    </div>
  )
}

export default Lottery