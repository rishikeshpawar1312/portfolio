import React from 'react'
import './Projects.css'
 
import PROJECT from '../../assests/PROJECT.png'


function Projects() {
  return (
   <section id="project">
   <div class="projectpart">
     <div class="projecttitle">Projects I Made</div>
     <div class="projectsrow">
       <div class="card">
         <img src={PROJECT} alt="" class="projectsimgs" />
         <div class="card-description">Description for Project 1</div>
       </div>
       <div class="card">
         <img src={PROJECT} alt="" class="projectsimgs" />
         <div class="card-description">Description for Project 2</div>
       </div>
       <div class="card">
         <img src={PROJECT} alt="" class="projectsimgs" />
         <div class="card-description">Description for Project 2</div>
       </div>
     </div>
     {/* <div class="projectsrow">
       <div class="card">
         <img src={PROJECT} alt="" class="projectsimgs" />
         <div class="card-description">Description for Project 3</div>
       </div>
        
     </div> */}
   </div>
 </section>
 
  )
}

export default Projects