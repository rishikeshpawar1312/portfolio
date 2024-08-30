import React from 'react';
import './Experience.css';
import hackilogo from '../../assests/hackilogo.jpeg'; 
import hackwlogo from '../../assests/hackwlogo.jpg'; 

function Experience() {
  return (
    <section id="experience">
      <div className="experience-title">Hackathon Experience</div>
      <div className="experience-cards">
        <div className="experience-card">
          <div className="card-content">
            <h3 className="card-title">HACKWAVE - National Level Hackathon</h3>
            <p className="card-description">
              Achieved Top 6 in 'HACKWAVE', a 36-hour National Level Hackathon at CDGI.
            </p>
            <p className="card-details">
              This experience helped in enhancing problem-solving skills, teamwork, and technical expertise in real-time coding challenges.
            </p>
          </div>
          <div className="card-image">
            <img src={hackwlogo} alt="Hackathon" />
          </div>
        </div>
        <div className="experience-card">
          <div className="card-content">
            <h3 className="card-title">HACK'NDORE - National Level Hackathon</h3>
            <p className="card-description">
              Competed in 'HACK'NDORE', a 48-hour National Level Hackathon with 700 teams, shortlisted in the top 80 finalists.
            </p>
            <p className="card-details">
              This hackathon emphasized working under pressure, rapid prototyping, and collaborating with diverse teams.
            </p>
          </div>
          <div className="card-image">
            <img src= {hackilogo} alt="Hackathon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
