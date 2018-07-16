import React, { Component } from "react";
import "./Home.css";
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="main">
          <h1>Welcome to My Portfolo</h1>
          <div className="container">
          <Link id='lnk' href="/about" to="/about"><button className="btn">About</button></Link>
          <Link id='lnk' href="/contact" to="/contact"> <button className="btn">Contact</button></Link>
          <Link id='lnk' href="/projects" to="/projects"><button className="btn">Projects</button></Link>
          <Link id='lnk' href="/resume" to="/resume"> <button className="btn">Resume</button></Link>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
