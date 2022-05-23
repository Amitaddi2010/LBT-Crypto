import './App.css';
import Navbar from './components/Navbar/Navbar';
import Fancylogo from './components/Fancylogo/Fancylogo';
import { useState, useEffect } from 'react';
import Lottery from './components/Lottery/Lottery';
import Swap from './components/Swap/Swap';
import Footer from './components/Footer/Footer'
import Timeline from './components/Timeline/Timeline'
import Team from './components/Team/Team'


function App() {
  
  const LotteryShow = 1;
  const SwapShow = 2;
  let [show, setShow] = useState(2);

  return (
    <div className="App">
      <Navbar handler={setShow} show={show}/>
      <div className='container'>
        <div id="space">
          <Fancylogo />
        </div>
        <div className='main'>
          {show === LotteryShow && <Lottery />}
          {show === SwapShow && <Swap />}
        </div>
      </div>

            <Timeline />
       
          <Team />
          <Footer />
        

    </div>

  );
}

export default App;
