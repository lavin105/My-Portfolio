import React, { Component } from "react";
import "./About.css";
import Dots from "./Images/dots.svg";

class About extends Component {
  render() {
    return (
      <div id="page_wrapper">
        <div id="main_image" />
        <div id="image_holder" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <img id="dots1" src={Dots} alt="" />
        <div id="main_summary1">
          <h2 id="aboutme">A little about me</h2>
          My name is Brandon Lavinsky and I am currently pursuing my Bachelors
          of Science in Software Engineering as well as a Minor in Data
          Analytics at Chapman University . I thoroughly enjoy web development
          because it allows me to be extra creative with visuals and bring out
          my artistic nature. However I not only develop web applications but
          also have experience with other programming languages such as Java,
          C#, Python, and more. In my spare time aside from school and work I
          enjoy surfing, skateboard, playing basketball, and pretty much any
          outdoor activity.
          <br />
          <br />
        </div>
        
        

        <img id="dots2" src={Dots} alt="" />
        <div id="main_summary2">
          <h2 id="aboutme">Technical Skills</h2>
          I have had a lot of exposure to many different programming languages
          and technologies throughout my schooling. I have worked with Python,
          Java, C++, C#, MySql, JDBC, and UML. I had to learn web development on
          my own due to the fact that no courses were offered regarding web
          development at my University.
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default About;
