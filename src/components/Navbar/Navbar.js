import React from 'react'
import  './Navbar.css'
import logo from '../../assests/logo.png'
import contact from '../../assests/contact.png'
import ham from '../../assests/ham.png'
import {Link} from 'react-scroll';
import { useState } from 'react'
 
function Navbar() {
  const [showmenu, setshowmenu] = useState(false)
  return (
     
    <nav className="navbar">
    <img src={logo} alt="" className='logo' />
    <div className="menu">
       <Link  activeClass='active' to='intro' smooth={true} spy={true} offset={-100} duration={500} className="menulistitem" >Home</Link>
       <Link  activeClass='active' to='AboutMe' smooth={true} spy={true} offset={-100} duration={500} className="menulistitem">About Me</Link>
       <Link  activeClass='active' to='skills' smooth={true} spy={true} offset={-100} duration={500} className="menulistitem">Skills</Link>
       <Link  activeClass='active' to='project' smooth={true} spy={true} offset={-100} duration={500} className="menulistitem">Projects</Link>
       <a href="https://github.com/rishikeshpawar1312" target="_blank" rel="noopener noreferrer" className="menulistitem">GitHub</a>   
    </div>
    <button className='menubtn' onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
    }}>
        <img src={contact} alt=""  className='menubtnimg'/>Contact Me
    </button>


    <img src={ham} alt="" className='ham' onClick={()=>setshowmenu(!showmenu)}/>
    <div className="mobilemenu" style={{display :showmenu ? 'flex': 'none'}}>
       <Link  activeClass='active' to='intro' smooth={true} spy={true} offset={-100} duration={500} className="listitem"  onClick={()=>setshowmenu(false)} >Home</Link>
       <Link  activeClass='active' to='AboutMe' smooth={true} spy={true} offset={-100} duration={500} className="listitem" onClick={()=>setshowmenu(false)}>About Me</Link>
       <Link  activeClass='active' to='skills' smooth={true} spy={true} offset={-100} duration={500} className="listitem" onClick={()=>setshowmenu(false)}>Skills</Link>
       <Link  activeClass='active' to='project' smooth={true} spy={true} offset={-100} duration={500} className="listitem" onClick={()=>setshowmenu(false)}>Projects</Link>

    </div>

    </nav>
     
     
  )
}

export default Navbar