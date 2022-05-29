import './menubar.css'
import logo from '../../imgs/logo.png'
import './../../App'
 import Link from 'react-scroll/modules/components/Link';
function Navbar({handler, show, account}) {
 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav") {
    x.className += "responsive";
  } else {
    x.className = "nav";
  }
}
 
  return (
     <div className='header'>
     
    <nav className='nav'>
    <div className='icon' id ="myTopnav">
    <a href="/">
        <img className='mainlogo' src = {logo} alt="" ></img>
        </a>
          </div>
      <button   onClick={()=>handler(2)} className={show === 2 ? `active`:undefined}>Swap</button>
      <button onClick={()=>handler(1)} className={show === 1 ? `active`:undefined}>Lottery</button>
      <button onClick={()=>{
        document.getElementById('aboutus').scrollIntoView(true);
      }}>About Us</button> 
      <button onClick={()=>{
        document.getElementById('Timeline').scrollIntoView(true);
      }}>Timeline</button>
       <button onClick={()=>{
        document.getElementById('Timeline').scrollIntoView(true);
      }}>NFT</button>
       <button onClick={()=>{
        document.getElementById('Timeline').scrollIntoView(true);
      }}>Metaverse</button>
      <button className='connect'>Account : {account ? account : "Not Connected"}</button>
      <a href="javascript:void(0);" class="icon" onclick={myFunction}>
    <i class="fa fa-bars"></i>
    </a>
    
     </nav>
     </div>
          
           
          


//     {/* <button className='connect' 
//     type="button"  onClick={async()=>{
//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts"
        
//       })
//       console.log(accounts)
//     }}>
    
// Connect MetaMask</button> */}

//     </div>
  )
}

export default Navbar