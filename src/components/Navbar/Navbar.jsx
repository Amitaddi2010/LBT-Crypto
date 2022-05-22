import './Navbar.css'

function Navbar({handler}) {
  return (
    <nav className='nav'>
      <button onClick={()=>handler(2)}>Swap</button>
      <button onClick={()=>handler(1)}>Lottery</button>
      <button onClick={()=>handler(3)}>About Us</button>
    </nav>
  )
}

export default Navbar