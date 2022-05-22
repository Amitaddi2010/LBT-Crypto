import React from 'react'
import Timeline from 'react-simple-timeline'
import './../Timeline/timeline.css'
export default function Timeliner() {
  return (
    
    <section>
    <div className='timeline'>
     <h2 className='time'> Timeline </h2>
         <Timeline stories ={[
     {
       'title': 'Lottery Block Token ',
       'subtitle': 'Release date',
       'date': 'June 2022',
        
     },
     {
        'title': 'Metaverse project',
        'subtitle': 'Release date',
        'date': 'By the End of 2022',
    //    'link': 'https://vignette.wikia.nocookie.net/theoffice/images/e/e5/Maxresdefault.jpg/revision/latest?cb=20170626225717',
    //    'image': 'https://pbs.twimg.com/profile_images/549268771484229632/WnatiHzT.jpeg'
    //  
},
      
    ]} />
    </div>
    </section>
  )
}

