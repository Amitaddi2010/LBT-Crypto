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
        <span className="month">Jan</span>
        <span className="year">2014</span>
      </span>
      <h2>The Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
    </div>
  </article>
  <article>
    <div className="inner">
      <span className="date">
        <span className="day">26<sup>th</sup></span>
        <span className="month">Jan</span>
        <span className="year">2014</span>
      </span>
      <h2>The Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
    </div>
  </article>
  <article>
    <div className="inner">
      <span className="date">
        <span className="day">26<sup>th</sup></span>
        <span className="month">Jan</span>
        <span className="year">2014</span>
      </span>
      <h2>The Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
    </div>
  </article>
  <article>
    <div className="inner">
      <span className="date">
        <span className="day">26<sup>th</sup></span>
        <span className="month">Jan</span>
        <span className="year">2014</span>
      </span>
      <h2>The Title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis rutrum nunc, eget dictum massa. Nam faucibus felis nec augue adipiscing, eget commodo libero mattis.</p>
    </div>
  </article>
   
</section>
  )
}

