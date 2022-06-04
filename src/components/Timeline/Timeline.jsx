import {useEffect} from 'react'
import  Aos  from 'aos';
import './../Timeline/timeline.css'
export default function Timeliner() {
  useEffect(() => {
    Aos.init();
    console.log(Aos)
  }, [])
  return (

    <section id="timeline">
   <h1 className="heading1"><span>Our</span>Roadmap</h1>
  <article>
    <div className="inner">
      <span className="date">
        <span className="day">30<sup>th</sup></span>
        <span className="month">Jun</span>
        <span className="year">2022</span>
      </span>
      <h2>LBT Token</h2>
      <p> A Lottery Block Token Deployment: Test Network: 1 Polygon 2. Ropsten </p>
    </div>
  </article>
  <article>
    <div className="inner">
      <span className="date">
        <span className="day">26<sup>th</sup></span>
        <span className="month">Nov</span>
        <span className="year">2022</span>
      </span>
      <h2>Lottery Block Token </h2>
      <p>
      A Lottery Block Token Deployment: Main Network: Polygon Blockchain
      </p>
    </div>
  </article>
  <article>
    <div className="inner">
      <span className="date">
        <span className="day">23<sup>th</sup></span>
        <span className="month">Jan</span>
        <span className="year">2023</span>
      </span>
      <h2>NFT Project Launch</h2>
      <p>NFT Marketplace Launch : 1. Buy and Sell 2. Mint NFT </p>
    </div>
  </article>
  <article>
    <div className="inner">
      <span className="date">
        <span className="day">26<sup>th</sup></span>
        <span className="month">Mar</span>
        <span className="year">2022</span>
      </span>
      <h2>Metaverse</h2>
      <p>Launch our LBT into Metaverse : Casino Block in Metaverse , Spin to Win $ </p>
    </div>
  </article>
   
</section>
  )
}

