import React from 'react'
import './Skill.css'
import clang from '../../assests/clang.png'
import clogo from '../../assests/clogo.png'
import hlogo from '../../assests/hlogo.png'
import csslogo from '../../assests/csslogo.png'
import jlogo from '../../assests/jlogo.png'
import rlogo from '../../assests/rlogo.png'
import glogo from '../../assests/glogo.png'
import blogo from '../../assests/blogo.png'
import tlogo from '../../assests/tlogo.png'


function Skill() {
  return (
    <section id="skills">
        <div className="skillsparts">
           <div className="skillstitle">Skills</div>
           <div className="skillsrow">
      <img src={clang} alt="" className="skillsimg" />
      <img src={clogo} alt="" className="skillsimg" />
      <img src={hlogo} alt="" className="skillsimg" />
      <img src={csslogo} alt="" className="skillsimg" />
      <img src={jlogo} alt="" className="skillsimg" />
    </div>
    <div className="skillsrow">
      
      <img src={rlogo} alt="" className="skillsimg" />
    </div>
    <div className="skillsrow">
      <img src={glogo} alt="" className="skillsimg" />
      <img src={blogo} alt="" className="skillsimg" />
      <img src={tlogo} alt="" className="skillsimg" />

      
    </div>
        </div>
    </section>
  )
}

export default Skill