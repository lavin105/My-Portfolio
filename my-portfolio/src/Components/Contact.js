import React, { Component } from "react";
import "./Contact.css";
import GithubLogo from "./Images/GitHubLogo.png";
import gmail from "./Images/gmail.png";
import phone from "./Images/phone.png";

class Contact extends Component {
  render() {
    return (
      <div id="theWrapper">
      
        <header id="banner">
          <h1 id="pageTitle">Contact Information</h1>
        </header>
        <div id="contain">
        <div id="information1">
          <div id="gmail">
            <img alt="" id="gmail_img" src={gmail} />
            <div id="email">
              <h1 id="email_info">brandonlavinsky@gmail.com</h1>
            </div>
          </div>
        </div>

        <div id="information2">
          <div id="phone">
            <img alt="" id="phone_img" src={phone} />
          </div>
          <div id="number">
            <h1 id="number_info">(310)-972-0622</h1>
          </div>
        </div>

        <div id="information3">
          <div id="github1">
            <img alt="" id="github_img1" src={GithubLogo} />
          </div>
          <div id="git">
              <h1 id="git_info">https://github.com/lavin105</h1>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Contact;
