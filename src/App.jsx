import './App.css';
import Navbar from './components/Navbar/Navbar';
import sample from './imgs/sample.png'
import logo from './imgs/logo.png'
import { useState } from 'react';
import Lottery from './components/Lottery/Lottery';
import Swap from './components/Swap/Swap';
import Aboutus from './components/About us/AboutUs';
import Footer from './components/Footer/Footer'
import Timeline from './components/Timeline/Timeline'
import Team from './components/Team/Team'
 
 
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
      <hr/>
      
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
    <hr  class="hr-1"/>
    <div className='Timeline'><Timeline/></div>
    <hr/>
    <Team/>
    <br></br>
    <div><Footer/></div> 
   </div>
  


      {/* <img className="cryptogif" src={sample} alt="" /> */}
      <div className='main'>
      {show===LotteryShow && <Lottery/>}
      {show===SwapShow && <Swap/>}
      {show===AboutShow&& <Aboutus/>}
     
    <br></br>
    <br></br>
    
    {/* <div id="canvas_container"></div> */}
   
      </div> </div>
      
    </div>
    
  );
}

export default App;
