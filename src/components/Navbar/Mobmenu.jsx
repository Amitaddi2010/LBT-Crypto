import React from 'react'
import './menubar.css'
import './../../App'
export default function Mobmenu(handler, show, account) {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

  return (
    <div>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  <div className="topnav" id="myTopnav">
  <button onClick={()=>handler(2)} className={show === 2 ? `active`:undefined}>Swap</button>
      <button onClick={()=>handler(1)} className={show === 1 ? `active`:undefined}>Lottery</button>
      <button onClick={()=>{
        document.getElementById('aboutus').scrollIntoView(true);
      }}>About Us</button> 
      <button onClick={()=>{
        document.getElementById('timeline').scrollIntoView(true);
      }}>Roadmap</button>
       <button onClick={()=>{
        document.getElementById('Timeline').scrollIntoView(true);
      }}>NFT</button>
       <button onClick={()=>{
        document.getElementById('Timeline').scrollIntoView(true);
      }}>Metaverse</button>
      <button className='connect'>Account : {account ? account : "Not Connected"}</button>
    
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
         </div>
  )
}
