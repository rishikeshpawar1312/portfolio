import React from 'react'
import './Intro.css'
import bg from '../../assests/bg.png';
import hire from '../../assests/hire.png'
import {Link} from 'react-scroll';
 
function Intro() {
  return (
    <section id="intro">
    <div className="introcontent">
        <span className='hi'> Hi</span>
        <span className='introtext'>I'm <span className='introname'>Rishikesh Pawar</span><br />
        Web-Developer<p className='intropara'>I am a skilled web developer</p></span>
        <Link><button className="btn"><img src={hire} alt="" className='btnimg' />Hire Me</button></Link>
        
    </div>
    <img src={bg} alt="" className='bg'/>
        </section>
  )
}

export default Intro