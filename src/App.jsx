import './App.css';
import Navbar from './components/Navbar/Navbar';
import sample from './imgs/sample.png'
import logo from './imgs/logo.png'
import { useState } from 'react';
import Lottery from './components/Lottery/Lottery';
import Swap from './components/Swap/Swap';
import Aboutus from './components/About us/AboutUs';
import Footer from './components/Footer/Footer'
function App() {
  const LotteryShow = 1;
  const SwapShow = 2;
  const AboutShow =3;
  let [show, setShow] = useState(2);

  return (
    <div className="App">
      
      <>
      <div className='logo'>
        <img className='mainlogo' src={logo} alt =""/>
      </div>
      </>
      {/* <img src={sample} alt="" /> */}
      <Navbar handler={setShow} />
      
      <div className='container'>
      <div id="space">

    <div class="elogo">
           <div class="trif u1"></div>
           <div class="trif u2"></div>
           <div class="trif u3"></div>
           <div class="trif u4"></div>
           <div class="ct"></div>
           <div class="trif l1"></div>
           <div class="trif l4"></div>
    </div>
 
</div>

      {/* <img className="cryptogif" src={sample} alt="" /> */}
      <div className='main'>
      {show===LotteryShow && <Lottery/>}
      {show===SwapShow && <Swap/>}
      {show===AboutShow&& <Aboutus/>}
      <Footer/>
      
      </div> </div>
      
    </div>
  );
}

export default App;
