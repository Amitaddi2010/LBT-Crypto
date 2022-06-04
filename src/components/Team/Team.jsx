import React from 'react'
import './../Team/team.css'
import T1 from './../../imgs/Team1.png'
import T2 from './../../imgs/T2.jpeg'
import T3 from './../../imgs/ Team4.webp'

// import { SwitchTransition, CSSTransition } from "react-transition-group";

export default function Team() {
  return (

    <div className="container1" id ="aboutus">
    <h1 className="heading"><span>meet</span>Our Team</h1>
    <div className="profiles">
      <div className="profile">
        <img alt=""  className="profile-img" src={T1} />
        <h3 className="user-name">Amit Saraswat</h3>
        <h5> Founder and CEO </h5>
        <p>Researcher, Blockchain Developer</p>
      </div>
      
      <div className="profile">
         
        <img alt="" className='profile-img' src={T3} />
        <h3 className="user-name">Tarun Raddy</h3>
        <h5>Co-Founder</h5>
        <p>Full Stack Blockchain developer </p>
      </div>
      <div className="profile">
        <img alt=""  className="profile-img" src={T2}/>
      
        <h3 className="user-name">Rukhmani</h3>
        <h5>Managing Partner</h5>
        <p> Team Leader and Management </p>
      </div>
    </div>
  </div>

  )
}

