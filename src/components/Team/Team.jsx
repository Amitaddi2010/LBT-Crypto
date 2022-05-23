import React from 'react'
import './../Team/team.css'
import T1 from './../../imgs/Team1.png'

// import { SwitchTransition, CSSTransition } from "react-transition-group";

export default function Team() {
  return (

    <div id="aboutus" className='Team'>
      <h2 className='h2'>Team</h2>
      <div className="teammembers">
        <div className='member'>
          <img className='Team1' src={T1} />
          <figcaption>
            <h3>Amit Kumar Saraswat</h3>

            <p>Blockchain Developer</p>
          </figcaption>
        </div>

        <div className='member'>
          <img className='Team1' src={T1} />
          <figcaption>
            <h3>Tarun</h3>

            <p>Blockchain Developer</p>
          </figcaption>
        </div >
      </div>
    </div>




  )
}

