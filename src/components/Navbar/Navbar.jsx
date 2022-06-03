import './menubar.css'
import logo from '../../imgs/logo.png'
import './../../App'
function Navbar({handler, show, account}) {
 
// function myFunction() {
//   var x = document.getElementById("myTopnav").scrollIntoView({behavior: 'auto',
//   block: 'start'});
//   if (x.className === "nav") {
//     x.className += "responsive";
//   } else {
//     x.className = "nav";
//   }
// }
 
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
        document.getElementById('aboutus').scrollIntoView({behavior: 'smooth',
        block: 'start'});
      }}>About Us</button> 
      <button onClick={()=>{
        document.getElementById('timeline').scrollIntoView({behavior: 'smooth',
        block: 'start'});
      }}>Roadmap</button>
       <button onClick={()=>{
        document.getElementById('NFT').scrollIntoView({behavior: 'smooth',
        block: 'start'});
      }}>NFT</button>
       <button onClick={()=>{
        document.getElementById('Metaverse').scrollIntoView({behavior: 'smooth',
        block: 'start'});
      }}>Metaverse</button>
      <button className='connect'>Account : {account ? account : "Not Connected"}</button>
      {/* <a href="#" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
    </a> */}
    
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