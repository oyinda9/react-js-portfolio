import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const h3Style = {
    fontFamily: 'cursive',
    color: 'black',  // Additional styles can be added here if needed
  };
    return (
      <nav className="navbar">
        <div className="logo">
          <h3 style={h3Style}>Code with me</h3>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <button>Contact</button> 
        </ul>
      </nav>
    );
  }
  
  export default NavBar;