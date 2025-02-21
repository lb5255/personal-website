import React from "react";
import resume from '../assets/pdf/resume.pdf';
import portrait from '../assets/media/me.jpeg';
import './About.css';

function About() {
    return (
        <div id="wrapper">
          {/* <nav>
            <div id="home"> 
              <a href="/">Home</a>
            </div>
            <div id="links">
              <a href="/about" id="active">About</a>
              <a href="/projects">Project</a>
            </div>
          </nav> */}
          <h1 className="heading"> Who Am I?</h1>
          <div className="intro">
            <p> 
            Hello! My name is Lea, and I’m a <mark>software engineer</mark>. 
    
     I’m always eager to learn new tools to enhance my development skills. Currently, I’m working toward my <mark>AWS Developer</mark> certification to deepen my knowledge of cloud computing and infrastructure.
    
     My journey in tech began in high school with the <mark>Girls Who Code Summer Immersion Program</mark>, where I was first introduced to Python and JavaScript. I quickly fell in love with coding and knew I wanted to turn it into my career! 👩🏻‍💻        
     </p>  
            <div id="external">
              <a href={resume} id="resume">view resume</a>
              <a href="mailto:lea.a.boyadjian@gmail.com" id="email"> say hello</a>
            </div>
            <div id="aboutWrapper">
              <div id="bio">
                <p>
                I graduated cum laude from Rochester Institute of Technology with a <mark>Bachelor of Science in Web & Mobile Computing</mark>. In addition to my tech studies, I earned an <mark>Associate of Arts</mark> degree from Bard College while attending Bard High School Early College in Manhattan.            
                </p>
                <p>
                Alongside my studies, I served as a <mark>Resident Advisor</mark> for three years, receiving bi-annual training to support residential students as a first-line responder for crisis management, mental health needs, resource referrals, and community engagement.
    
    I was also an active member of <mark>Women in Computing</mark>, participating in club events such as WiCHacks—a 72-hour hackathon where participants collaborate to develop apps, websites, games, or other software projects.
    
    During my final year of college, I served as an Executive Board Member for RIT’s first chapter of the Google Developer Student Club.
    
                </p>
                <p> 
                I have worked on projects across various technologies, including  <mark>Java, Python and JavaScript</mark>. Learn more about the work I have done in my <mark>Project's </mark> tab!
                </p>
              </div>
              <div id="social">
                <img id="portrait" src={portrait} alt="Portrait" />
              <p>
                  <b>LinkedIn:</b>
                  <a href="https://www.linkedin.com/in/lea-boyadjian/">Lea Boyadjian</a>
                  <br />
                  <b>Github:</b>
                  <a href="https://github.com/lb5255">Lea Boyadjian</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default About;
