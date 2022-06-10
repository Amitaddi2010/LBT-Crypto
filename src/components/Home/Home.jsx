import {useLayoutEffect} from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import landing from '../../imgs/landing.jpg'

function Home({setAppClass, path}) {
    useLayoutEffect(() => {
        setAppClass(true);
      return () => {
        setAppClass(false);
      }
    }, [setAppClass, path])
    
  return (
    <div className='landingPage'>
      <img src={landing}></img>
      <h2 className='btn2'>Be a DeFi Chef with &nbsp; <span className='Token'>LB Token and Swap</span> .</h2> 
        <h3 className='btn3'>Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform. Welcome home to DeFi.
       </h3>

        <Link  to="/swap"><span className='btn' >Get Started </span>
        
        </Link>
       
        
    </div>
  )
}

export default Home