import {useEffect} from 'react'
import {Link} from 'react-router-dom'

function Home({setAppClass}) {
    useEffect(() => {
        setAppClass(true);
      return () => {
        setAppClass(false);
      }
    }, [setAppClass])
    
  return (
    <div>
        <h1>Home</h1>
        <Link to="/swap">Get Started</Link>
    </div>
  )
}

export default Home