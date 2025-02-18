import React from "react";
import "./Home.css";

function Home() {
  return(
    <div className="container"> 
      <div className="center" > 
        <h1 className="title"> 
          Hi, my name is <span className="name"> Lea Boyadjian</span>. <br/> 
          I'm a software engineer.
        </h1>
        <a className="ghostbutton" href="/about">View my work →</a>
      </div>

    </div>
  );
}

export default Home;
