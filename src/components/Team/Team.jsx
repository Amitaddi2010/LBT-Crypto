import React from 'react'
import './../Team/team.css'
import T1 from './../../imgs/Team1.png'
import T2 from './../../imgs/T2.jpeg'
import T3 from './../../imgs/ Team4.webp'

// import { SwitchTransition, CSSTransition } from "react-transition-group";

export default function Team() {
  return (

    <div class="container1">
    <h1 class="heading"><span>meet</span>Our Team</h1>
    <div class="profiles">
      <div class="profile">
        <img  class="profile-img" src={T1} />
        <h3 class="user-name">Amit Saraswat</h3>
        <h5>Creative Director</h5>
        <p>Expert in Blockchain Web3 NFT!</p>
      </div>
      <div class="profile">
        <img  class="profile-img" src={T2}/>
      
        <h3 class="user-name">Rukhmani</h3>
        <h5>Managing Partner</h5>
        <p>Team Leader and Management</p>
      </div>
      <div class="profile">
         
        <img className='profile-img' src={T3} />
        <h3 class="user-name">Tarun Raddy</h3>
        <h5>Project Manager</h5>
        <p>Blockchain and Web developer !</p>
      </div>
    </div>
  </div>

  )
}

