import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li className="left">
            <a ><Link to="/">Home</Link></a>
          </li>
          <li className="right">
          <a><Link to="/resume">Resume</Link></a>
          </li>
          <li className="right">
          <a><Link to="/projects">Projects</Link></a>
          </li>
          <li className="right">
          <a><Link to="/contact">Contact</Link></a>
          </li>
          <li className="right">
          <a><Link to="/about">About</Link></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
