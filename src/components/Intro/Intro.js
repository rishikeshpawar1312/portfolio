import React from 'react'
import './Intro.css'
import  profile from '../../assests/profile.png';
import hire from '../../assests/hire.png';
 
function Intro() {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className='hi'> Hi</span>
        <span className='introtext'>I'm <span className='introname'>Rishikesh Pawar</span><br />
          Web-Developer<p className='intropara'>I am a skilled web developer</p></span>
        <a href="https://drive.google.com/file/d/1UhfbhiNucZ-WPlPKWDbQ0k7YTRuK_iAp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <button className="btn"><img src={hire} alt="" className='btnimg' />Resume</button>
        </a>
      </div>
      <img src={profile} alt="" className='bg' />
    </section>
  )
}

export default Intro
