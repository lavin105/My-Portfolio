import React, { Component } from "react";
import "./Contact.css";
import GithubLogo from "./Images/GitHubLogo.png";
import gmail from "./Images/gmail.png";
import phone from "./Images/phone.png";
import linked from "./Images/linkedinlogo.jpg";

class Contact extends Component {
  render() {
    return (
      <div id="theWrapper">
        <header id="banner">
          <h1 id="pageTitle">Contact Information</h1>
        </header>
        <a id="contact_link" href="https://mail.google.com/mail/">
          <div id="holder1">
            <div id="imgHolder">
              <img id="specific_image" src={gmail} alt="" />
            </div>
            <div id="textHolder">
              <p id="cantact_info">brandonlavinsky@gmail.com</p>
            </div>
          </div>
        </a>

        <a id="contact_link" href="https://github.com/lavin105">
          <div id="holder3">
            <div id="imgHolder">
              <img id="specific_image" src={GithubLogo} alt="" />
            </div>
            <div id="textHolder">
              <p id="cantact_info">https://github.com/lavin105</p>
            </div>
          </div>
        </a>
        <a id="contact_link">
          <div id="holder2">
            <div id="imgHolder">
              <img id="specific_image" src={phone} alt="" />
            </div>
            <div id="textHolder">
              <p id="cantact_info">(310)-972-0622</p>
            </div>
          </div>
        </a>
        <a
          id="contact_link"
          href="https://www.linkedin.com/in/brandon-lavinsky-6bb2b4133/"
        >
          <div id="holder3">
            <div id="imgHolder">
              <img id="specific_image" src={linked} alt="" />
            </div>
            <div id="textHolder">
              <p id="cantact_info">Brandon Lavinsky</p>
            </div>
          </div>
        </a>
        <h1>
          <br />
        </h1>
      </div>
    );
  }
}

export default Contact;
