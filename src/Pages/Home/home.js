import React from "react";
import "./home.css";

function home() {
  return (
    <div id="home">
      <div className="bigBox">
        <h2>About</h2>
      </div>
      <div className="hidenBox">
        <div>
          <h2>Developer Projects</h2>
        </div>
        <div>
          <h2>Ux Design Projects</h2>
        </div>
      </div>
      <div className="hidenBox">
        <div>
          <h2>Contact</h2>
        </div>
        <div>
          <h2>Linked In</h2>
        </div>
        <div>
          <h2>Spotify</h2>
        </div>
        <div>
          <h2>Git Hub</h2>
        </div>
      </div>
      <div className="bigBox">
        <h2>Reasons To Hire Me</h2>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>
    </div>
  );
}

export default home;
