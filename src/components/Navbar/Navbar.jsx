import './Navbar.css'
import logo from '../../imgs/logo.png'
import './../../App'
 
function Navbar({handler, show}) {
  return (
     <div className='header'>
     <div className='logo'>
        <img className='mainlogo' src={logo} alt="" />
      </div>
  
    
    <nav className='nav'>
      
      <button onClick={()=>handler(2)} className={show == 2 && `active`}>Swap</button>
      <button onClick={()=>handler(1)} className={show == 1 && `active`}>Lottery</button>
      <button onClick={()=>{
        document.getElementById('aboutus').scrollIntoView(true);
      }}>About Us</button>
      
    </nav>



    {/* <button className='connect' 
    type="button"  onClick={async()=>{
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
        
      })
      console.log(accounts)
    }}>
    
Connect MetaMask</button> */}
    <></>
    </div>
  )
}

export default Navbar