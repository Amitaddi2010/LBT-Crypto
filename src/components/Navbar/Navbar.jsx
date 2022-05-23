import './Navbar.css'
import logo from '../../imgs/logo.png'
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
    </div>
  )
}

export default Navbar