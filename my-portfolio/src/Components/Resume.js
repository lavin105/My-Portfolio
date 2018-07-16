import React, { Component } from "react";
import "./Resume.css";
import Res from "./Images/Resume_Final.pdf";

class Resume extends Component {
  render() {
    return (
      <div>
        <h1 id="page_title">My Resume</h1>
        <iframe
          id="resume"
          src={Res}
          title="your_title"
          align="top"
          height="620"
          width="100%"
          frameborder="0"
          scrolling="auto"
          target="Message"
        />
        <h1>
          <br />
        </h1>
      </div>
    );
  }
}

export default Resume;
