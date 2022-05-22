import React from 'react'
import './../Team/team.css'
import T1 from './../../imgs/Team1.png'
import T2 from './../../imgs/team2.png'

export default function Team() {
  return (
    
<div className='Team'>
  
<h2 className='h2'>Team</h2>
<figure className='amit'>
  <img className='Team1' src={T1}/>
  <figcaption>
  <h3>Amit Kumar Saraswat</h3>
  
  <p>Blockchain Developer</p>
   </figcaption>
   </figure>

   <figure className='tarun'>
  <img className='Team1' src={T1}/>
  <figcaption>
  <h3>Tarun</h3>
  
  <p>Blockchain Developer</p>
   </figcaption>
   </figure >
</div>
 
 
 
 
  )
}

