import React, { Component } from "react";
import "./Projects.css";
import ReactLogo from "./Images/reactlogo.png";
import GithubLogo from "./Images/GitHubLogo.png";
import MySQL from "./Images/mysql_javalogo.png";
import ChapmanLogo from "./Images/Chapman_University_logo.gif";
import DB from "./Images/database2.png";
import Plan from "./Images/plan.jpg";

class Projects extends Component {
  render() {
    return (
      <div id="wrapper">
      
        <a id="toGit" href="https://github.com/lavin105">
          <div id="github">
            <img alt="" id="github_img" src={GithubLogo} />
            <p id="visit">
              <strong>Visit my github!</strong>
            </p>
          </div>
        </a>
        <div>
        <header id='banner'>
          <h1 id="pageTitle">My Projects</h1>
          </header>

          <div className="wrap">
            <img className="project_image" src={ReactLogo} alt="" />
            <div className="project_info">
              <div className="main_info1">
                <a id="title">React Protfolio Website</a>
              </div>
              <div className="specific_info1">
                <a id="details">
                  <strong>
                    This project utilizes ReactJs and ReactRouter in <br />order
                    to create a functional portfolio web <br />application.
                    Click to be redirected to the GitHub repository.
                  </strong>
                </a>
              </div>
            </div>
          </div>

          <a id="imageLink" href="https://github.com/lavin105/HousingDatabase">
            <div className="wrap">
              <img className="project_image" src={MySQL} alt="" />

              <div className="project_info">
                <div className="main_info2">
                  <a id="title">Java/MySQL Housing Portal Application</a>
                </div>
                <div className="specific_info2">
                  <a id="details">
                    <strong>
                      This project utilizes Java/JDBC and MySQL in<br /> order
                      to create a housing portal application<br /> where users
                      can interact with homes for sale <br />and for rent in
                      order to help them find the <br />perfect home. Click to
                      be redirected <br /> to the GitHub repository.
                    </strong>
                  </a>
                </div>
              </div>
            </div>
          </a>

          <a id="imageLink" href="https://github.com/lavin105/Web-App">
            <div className="wrap">
              <img className="project_image" src={ChapmanLogo} alt="" />
              <div className="project_info">
                <div className="main_info3">
                  <a id="title">Pharmacy Scool Game Portal</a>
                </div>
                <div className="specific_info3">
                  <a id="details">
                    <strong>
                      This project was developed using html, css,<br /> and
                      javascript as well as firebase. The project <br />was
                      intended to serve as a web portal for <br />Chapman's
                      School of Pharmacy to manage <br />a pharmacy quiz game
                      that<br /> was in development.
                    </strong>
                  </a>
                </div>
              </div>
            </div>
          </a>
          <p />
          <p />

          <a
            id="imageLink"
            href="https://github.com/lavin105/SoftwareDevelopmentPlan"
          >
            <div className="wrap">
              <img className="project_image" src={Plan} alt="" />
              <div className="project_info">
                <div className="main_info4">
                  <a id="title">SDP/Cost Estimate</a>
                </div>
                <div className="specific_info4">
                  <a id="details">
                    <strong>
                      This project is a SDP and Cost Estimate created <br />for
                      a moch company called DroneSwarm Tm.<br /> Only critical
                      sections of the plan were completed <br />to showcase
                      their importance.
                    </strong>
                  </a>
                </div>
              </div>
            </div>
          </a>
          <a
            id="imageLink"
            href="https://github.com/lavin105/Data-Generator-Loader"
          >
            <div className="wrap">
              <img className="project_image" src={DB} alt="" />
              <div className="project_info">
                <div className="main_info5">
                  <a id="title">Data Generator/Loader</a>
                </div>
                <div className="specific_info5">
                  <a id="details">
                    <strong>
                      This project utilizes java and mysql in order to
                      <br />create fake data that can then be loaded into a
                      database schema.
                    </strong>
                  </a>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Projects;
