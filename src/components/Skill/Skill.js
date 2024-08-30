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
import reduxlogo from '../../assests/reduxlogo.png'
import nodelogo from '../../assests/nodelogo.png'
import mysqllogo from '../../assests/mysqllogo.png'

 

function Skill() {
  return (
    <section id="skills">
      <div className="skillsparts">
        <div className="skillstitle">Skills</div>

        <div className="skills-category">
          <div className="skills-category-title">Frontend Development</div>
          <div className="skillsimage">
            <img src={hlogo} alt="HTML" className="skillsimg" title="HTML" />
            <img src={csslogo} alt="CSS" className="skillsimg" title="CSS" />
            <img src={jlogo} alt="JavaScript" className="skillsimg" title="JavaScript" />
            <img src={rlogo} alt="React" className="skillsimg" title="React" />
            <img src={reduxlogo} alt="Redux" className="skillsimg" title="Redux" />
          </div>
        </div>

        <div className="skills-category">
          <div className="skills-category-title">Backend Development</div>
          <div className="skillsimage">
            <img src={nodelogo} alt="Node.js" className="skillsimg" title="Node.js" />
            <img src={mysqllogo} alt="MySQL" className="skillsimg" title="MySQL" />
          </div>
        </div>

        <div className="skills-category">
          <div className="skills-category-title">Programming Languages</div>
          <div className="skillsimage">
            <img src={clang} alt="C" className="skillsimg" title="C" />
            <img src={clogo} alt="C++" className="skillsimg" title="C++" />
          </div>
        </div>

        <div className="skills-category">
          <div className="skills-category-title">Tools & Platforms</div>
          <div className="skillsimage">
            <img src={glogo} alt="GitHub" className="skillsimg" title="GitHub" />
            <img src={blogo} alt="Bootstrap" className="skillsimg" title="Bootstrap" />
            <img src={tlogo} alt="Tailwind CSS" className="skillsimg" title="Tailwind CSS" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;

