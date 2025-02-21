import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/project">Project</Link></li>
        </ul>
      </nav>
    );
  }  

export default Navbar;
