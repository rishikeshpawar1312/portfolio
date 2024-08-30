import React from 'react';
import './Projects.css';
import bloglogo from '../../assests/bloglogo.png';
import newslogo from '../../assests/newslogo.png';
import  web from '../../assests/web.png';


function Projects() {
  return (
    <section id="project">
      <div className="projectpart">
        <div className="projecttitle">Projects I Made</div>
        <div className="projectsrow">
          <div className="card">
            <img src={bloglogo} alt="Project 1" className="card-img" />
            <div className="card-content">
            <div className="cardtitle">Blog Website</div>
              <div className="card-skills">Skills: React, Node.js, HTML, CSS , Javascript , Appwrite , Redux</div>
              <div className="card-buttons">
                <a href="https://github.com/rishikeshpawar1312/blogwebsite" target="_blank" rel="noopener noreferrer" className="card-link">GitHub</a>
                <a href="https://blogwebsite-kohl.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-link">Live Site</a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={newslogo} alt="Project 2" className="card-img" />
            <div className="card-content">
              <div className="cardtitle">News App</div>
              <div className="card-skills">Skills:React , API-Integration,JavaScript, HTML, CSS </div>
              <div className="card-buttons">
                <a href="https://github.com/rishikeshpawar1312/Newsapp" target="_blank" rel="noopener noreferrer" className="card-link">GitHub</a>
                <a href="https://your-live-site.com" target="_blank" rel="noopener noreferrer" className="card-link">Live Site</a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={web} alt="Project 3" className="card-img" />
            <div className="card-content">
            <div className="cardtitle">WebImpact</div>
              <div className="card-skills">Skills: Javasricpt ,Youtube Data API </div>
              <div className="card-buttons">
                <a href="https://github.com/priyaup/smart-education-application" target="_blank" rel="noopener noreferrer" className="card-link">GitHub</a>
                <a href="https://your-live-site.com" target="_blank" rel="noopener noreferrer" className="card-link">Live Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
