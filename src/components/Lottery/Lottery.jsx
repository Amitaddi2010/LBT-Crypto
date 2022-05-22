import React from 'react'
import './../Lottery/Lottery.css'
function Lottery() {
  return (
    <div className='Lottery'>
    <h2>Lottery</h2>
    <button className='ParticipateNow'> <h2>Participate Now</h2> </button>

    <div className="ExchangeRate">
          <span className="EXC-left "> Exchange rate:&nbsp; </span>
          <span className="EXC-right"> &nbsp; 1 ETH   =   200000 LBT &#9432; &nbsp; </span>
          <br></br>
          <span className="EXC-Fee"> &nbsp; &nbsp; &nbsp;participation Fee   =   1000LBT &#9432;</span>
        </div>

    </div>
  )
}

export default Lottery