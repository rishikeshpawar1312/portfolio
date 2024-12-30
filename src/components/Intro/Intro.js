import React from 'react'
import './Intro.css'
import  profile from '../../assests/profile.png';
import hire from '../../assests/hire.png';
 
function Intro() {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className='hi'>Hi</span>
        <span className='introtext'>I'm <span className='introname'>Rishikesh Pawar</span><br />
        Full-Stack Developer<p className='intropara'>"Building modern web apps with React and Next.js, while exploring React Native to bring seamless experiences to mobile platforms."</p></span>
        <a href="https://drive.google.com/file/d/1tufhjm950JsDeDFfymsFZSiQZJkl1s7T/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <button className="btn"><img src={hire} alt="" className='btnimg' />Resume</button>
        </a>
      </div>
      <img src={profile} alt="" className='bg' />
    </section>
  )
}
export default Intro
