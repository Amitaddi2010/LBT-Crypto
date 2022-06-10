import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar({ handler, show, account }) {

  return (
    <nav className='nav'>
      
      <div className='icon' id="myTopnav">
        <a href="/">
          Home 
        </a>
      </div>
      
      <ul>
        
        <li><Link to="/swap">Swap</Link></li>
        <li><Link to="/lottery">Lottery</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="/nft">NFT</Link></li>
        <li><Link to="/metaverse">Metaverse</Link></li>
        <li><Link to="/timeline">Roadmap</Link></li>
      </ul>
      <div className='connect'>Account : {account ? account : "Not Connected"}</div>
 
         </nav>
  )
}

export default Navbar