import {useEffect} from 'react'
import  Aos  from 'aos';
import './../Timeline/timeline.css'
export default function Timeliner() {
  useEffect(() => {
    Aos.init();
    console.log(Aos)
  }, [])
  return (

    <section>
      <div id = "Timeline" className='timeline'>
        <h2 className='time'> Timeline </h2>
        <div className='line'></div>
        <div className='timeline-block' data-aos="fade-right">
          <h3>Lottery Block Token</h3>
          <h6>Release date</h6>
          <span>June 2022</span>
        </div>
        <div className='timeline-block' data-aos="fade-left">
          <h3>Metaverse project</h3>
          <h6>Release date</h6>
          <span>By the End of 2022</span>
        </div>
        <div className='timeline-block' data-aos="fade-right">
          <h3>Coming Soon..</h3>
          <h6>Release date</h6>
          <span>Near Future</span>
        </div>
        <div className='timeline-block' data-aos="fade-right">
          <h3>Coming Soon..</h3>
          <h6>Release date</h6>
          <span>Near Future</span>
        </div>
      </div>
    </section>
  )
}

