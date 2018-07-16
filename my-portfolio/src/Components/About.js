import React, { Component } from "react";
import "./About.css";
import Dots from "./Images/dots.svg";

class About extends Component {
  render() {
    return (
      <div id='page_wrapper'>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero. Sed dignissim lacinia nunc.
          <br />
          <br />
          Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
          at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
          ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
          suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia
          aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt
          sed, euismod in, nibh. Quisque volutpat condimentum velit.
        </div>
        <br />
        <br />
        <br />
        <br />

        <img id="dots2" src={Dots} alt="" />
        <div id="main_summary2">
          <h2 id="aboutme">Technical Skills</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero. Sed dignissim lacinia nunc.
          <br />
          <br />
          Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
          at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
          ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
          suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia
          aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt
          sed, euismod in, nibh. Quisque volutpat condimentum velit.
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
