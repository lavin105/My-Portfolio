import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Navigation from "./Navigation";
import About from "./About";
import Resume from './Resume';

class Layout extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
      </div>
    );
  }
}

export default Layout;
