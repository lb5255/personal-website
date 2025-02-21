import React from "react";
import './Project.css';

import vaccine from '../assets/media/vaccine.jpg';
import mole from '../assets/media/mole.png';
import sheep from '../assets/media/sheep.jpg';
import daze from '../assets/media/dazw.jpg';
import clock from '../assets/media/clock.jpg';
import abstract from '../assets/media/abstract.jpg';
import movie from '../assets/media/movie.jpg';
import ritpage from '../assets/media/ritpage.jpg';
import restful from '../assets/media/restful.jpg';
import adminweb from '../assets/media/adminweb.jpg';
import wellness from '../assets/media/wellness.jpg';
import heart from '../assets/media/heart.jpg';
import snake from '../assets/media/snake.png';
import armenia from '../assets/media/welcometoarmenia.jpg'
import clarinet from '../assets/media/clarinet.jpg';
import functions from '../assets/media/functions.png';
import health from '../assets/media/reproductive_health.jpg';
import history from '../assets/media/brief_history.jpg';
import connect from '../assets/media/connect.png';
import spelltron from '../assets/media/spelltron.png';
import care from '../assets/media/care.png';

const projects = [
  {
    name: "Mass Vaccination Management",
    blur: "Capstone Project",
    tags: ["JavaScript", "Node.js", "Docker", "MySQL"],
    description: "The premise of this project is to ensure that those who seek vaccinations are able to do so efficiently and effectively. This establishes a stable infrastructure that allows staff to oversee the vaccination process in order to guarantee a healthy community. This project provides a single, easy-to-use citizen interface with a unified back-end system to manage scheduling, resource availability and operations tracking with a unified database for data collection, reporting and analysis. This project also has an intuitive frontend based on polished wireframes.",
    link: "",
    imgSrc: vaccine,
    imgAlt: "Vaccin8"
  },
  {
    name: "Whack-a-Mole",
    blur: "Group Project for Computer Science II",
    tags: [" Java ", " JavaFX ", " Client/Server "],
    description: "With the use of socket programming and graphical user interface (GUI), this group project recreates the classic game Whack-a-Mole with Mort from Madagascar as the mole.",
    link: "https://github.com/lb5255/whack-a-mole",
    imgSrc: mole,
    imgAlt: "Whack-a-Mole"
  },
  {
    name: "Sleepy Sheeps",
    blur: "Individual Project for iOS Dev",
    tags: [" SwiftUI "],
    description: "Sleepy Sheeps aims to provide an intuitive sleep tracking app to help users achieve their sleep cycle goals with a fun lil game. The herd's survivability depends on the user’s sleeping habits. This will motivate the user to improve their sleeping habits to keep their herd alive and well. When the user slacks off, their herds are at risk from an attack by the wolves. Accountability can be a powerful motivator!",
    link: "",
    imgSrc: sheep,
    imgAlt: "sheeps"
  },
  {
    name: "DAZE",
    blur: "Individual Project for Android Development",
    tags: [" Kotlin "],
    description: "Daze aims to provide intuitive tracking experiences to help users track their addictive habits. The app is for anyone who needs assistance in reaching their goals by providing a customizable journal entry that allows users to track their habits. Keeping track of addictive habits allows users to hold themselves accountable as well as keep themselves on track.",
    link: "",
    imgSrc: daze,
    imgAlt: "daze"
  },
  {
    name: "The Ultimate Alarm",
    blur: "Individual Project for Ubiquitous Computing",
    tags: [" Wio terminal "],
    description: "Do you struggle with awaking up on time?? If yes, me too! Althought there's variety of reasons as to why one struggles to wake up, a common factor is that the alarm sound is not enough to wake some people. This dilemma influenced my decision to create an alarm clock for my ISTE358 class. With the use of wio terminal and sensors such as 4-Digital Display, Circular LED, Ultrasonic Ranger and Speech Recognizer, the ultimate alarm was born.",
    link: "",
    imgSrc: clock,
    imgAlt: "alarm"
  },
  {
    name: "DB-LAMM",
    blur: "Group Project for Database Connectivity",
    tags: [" SQL ", "Java", "JavaFX"],
    description: "Created a database to store values of users, abstracts, speaking topics, abstract interests, and speaking topic interests. Then developed the backend functionality methods to access, add, delete, and update database entries. Finished it off with implementing presentation layer with the use of JavaFX.",
    link: "",
    imgSrc: abstract,
    imgAlt: "abstract"
  },
  {
    name: "Movie Pick",
    blur: "Individual Project for Client Programming",
    tags: [" JavaScript ", "JSON", "HTML/CSS"],
    description: " A web page that contains a form using select pull-down elements. Once the user selects the desired option, the script will dynamically create another pull-down element whose contents will depend upon the user's first choice.",
    link: "",
    imgSrc: movie,
    imgAlt: "movie"
  },
  {
    name: "RIT IST Department",
    blur: "Individual Project for Client Programming",
    tags: [" JavaScript ", "jQuery", "HTML/CSS"],
    description: " A dynamic recreation of RIT IST department website with all functionality handled by jQuery. There's 4 plug-ins that extend jQuery including a google maps to show where IST Students work. Use of AJAX to pull data using a proxy server and all information provided by school through API.",
    link: "",
    imgSrc: ritpage,
    imgAlt: "ritpage"
  },
  {
    name: "RESTful Service",
    blur: "Individual Project for Server Programming",
    tags: [" Java ", "WildFly-Maven", "Node.js"],
    description: " With the use of Wildfly and Maven, this RESTful service project in java allows a company to delete, get, put and post departments, employees and timecards. This project was also recreated in Node.js.",
    link: "",
    imgSrc: restful,
    imgAlt: "restful"
  },
  {
    name: "Event Management System",
    blur: "Individual Project for Server Programming",
    tags: [" PHP ", "SQL", "HTML/CSS"],
    description: " Web application build using PHP with login features implementing sessions to control access based on user's role. Ability to edit and commit any changes to the SQL database with the use of parameterized queries using prepared statements.",
    link: "",
    imgSrc: adminweb,
    imgAlt: "adminweb"
  },
  {
    name: "Wellness Manager",
    blur: "Group Project for Software Design Principles and Pattern",
    tags: [" Java"],
    description: "A project dedicated for healthy lifestyle choices, Wellness Manager acts as a journal to record foods or recipes as well as exercises. Users have the option to log their daily weight along with anything that influences their health which will be collected into a csv file.",
    link: "",
    imgSrc: wellness,
    imgAlt: "wellness"
  },
  {
    name: "Interactive Hearts",
    blur: "Personal Project",
    tags: ["p5.js"],
    description: " created interactive hearts that 'beats' to a music's rhythm. Use chrome browser and click enter to start the music. Each individual heart changes color when clicked on.",
    link: "",
    imgSrc: heart,
    imgAlt: "heart"
  },
  {
    name: "Snake",
    blur: "Personal Project",
    tags: ["p5.js"],
    description: " A recreation of the classic snake game with the use of ",
    link: "",
    imgSrc: snake,
    imgAlt: "snake"
  },
  {
    name: "Welcome to Armenia!",
    blur: "Individual Project for Web & Mobile II",
    tags: ["HTML.CSS", "JavaScript", "PHP", "MySQL"],
    description: " An informative website with the goal to inform what Armenia can offer, this modular site encompasses database integration via phpMyAdmin, a form with several fields that send an email confirmation as well as a comment form that displays previous and new posts. ",
    link: "",
    imgSrc: armenia,
    imgAlt: "armenia"
  },
  {
    name: "ClariNET",
    blur: "Individual Project for Web & Mobile II",
    tags: ["Design Document", "UI/UX", "Wireframe"],
    description: " An educational website that teaches users basic HTML/CSS and JavaScript through quizzes and videos. Due to COVID-19, this group project was left as a design document. ",
    link: "",
    imgSrc: clarinet,
    imgAlt: "clarinet"
  },
  {
    name: "Functions",
    blur: "Individual Project for Computer Science II",
    tags: ["Java"],
    description: "A Java program that calculates a function's value as well as its derivative and integral. This project is concerned with representing mathematical expressions in software so they can be manipulated in various ways and evaluated.",
    link: "",
    imgSrc: functions,
    imgAlt: "functions"
  },
  {
    name: "Reproductive Health",
    blur: "Individual Project for Web & Mobile I",
    tags: ["HTML/CSS", "JavaScript"],
    description: " An enriching website with the goal to provide a basic understanding of reproductive health.",
    link: "",
    imgSrc: health,
    imgAlt: "health"
  },
  {
    name: "A Brief History Of The Internet",
    blur: "Individual Project for Web & Mobile I",
    tags: ["HTML/CSS", "JavaScript"],
    description: " An informative website that provides a brief history of the internet as well as influential pioneers that made what we have happen.",
    link: "",
    imgSrc: history,
    imgAlt: "history"
  },
  {
    name: "Connect Four",
    blur: "Individual Project for Computer Science II",
    tags: ["Java", "JavaFX"],
    description: " Recreated the classic game of connect four.",
    link: "",
    imgSrc: connect,
    imgAlt: "connect"
  },
  {
    name: "Spelltron",
    blur: "Individual Project for Computer Science I",
    tags: ["Python"],
    description: " Checks for spelling error such as a missing letter, an additional letter or mistakenly typing the adjacent letter instead of the correct letter.",
    link: "",
    imgSrc: spelltron,
    imgAlt: "spelltron"
  },
  {
    name: "C.A.R.E.",
    blur: "Girls Who Code Summer Immersion @ Adobe 2017",
    tags: ["HTML/CSS", "JavaScript" , "Bootstrap"],
    description: "Coders Advocating for the Rights of Everyone or C.A.R.E. was developed by a team of 4 first time programmers to bring awareness to crucial topics such as Reproductive health, the Rights of LGBTQ+, Women in Sports and Big Business corruption.",
    link: "",
    imgSrc: care,
    imgAlt: "care"
  },
];

function Project() {
  return (
    <div id="wrapper">
      <h1 className="heading">Project</h1>
      <div id="projects">
        {projects.map((project, index) => (
          <div className="selectedProject" key={index}>
            <div className="projectInfo">
              <div className="projectName">{project.name}</div>
              <div className="projectBlur">{project.blur}</div>
              <div className="projectTags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
              <div className="projectDesc">
                <p>{project.description}</p>
                <a className="projectView" href={project.link}>see project</a>
              </div>
            </div>
            <div className="projectImage">
              <img className="projectPreview" src={project.imgSrc} alt={project.imgAlt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
