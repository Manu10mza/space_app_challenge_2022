//import react
import React from "react";

//import styles
import "./Resources.css";

//import img
import sismo from "./img/nakamura.png";
import moon from "./img/moon.png";
import grupo from "./img/grupo.png";

export default function Resources() {
  return (
    <div className="resources">
      <div className="block1">
        <div className="blockParagraph">
          <h1>The Moonquake Project</h1>
          <p>
            When they explored the Moon, NASA’s Apollo astronauts left behind
            several instruments to collect geophysical data near each Apollo
            landing site. Our challenge was to develop an app that plots the
            seismic data these instruments transmitted back to Earth on an
            interactive 3-D globe.
          </p>
        </div>
        <img id="flaticonImg" src={sismo} alt="" />
      </div>
      <div className="block2">
        <img src={moon} alt="" />
        <div className="blockParagraph">
          <h1>The Future</h1>
          <p>
            The application was designed with the idea of scaling it and
            allowing the processing of new information brought by future
            missions in a simple way. This app could help future missions such
            as Artemis and hopefully the establishment of humanity on the Moon.
          </p>
        </div>
      </div>
      <div className="block3">
        <div className="blockParagraph">
          <h1>Our Team</h1>
          <p id="blockParagraph">
            Our team, consisting of two geologists, a biologist, a computer
            engineer and a chemical engineer,* worked with great enthusiasm and
            passion for 48 hours non-stop to bring you a beautiful yet practical
            solution. We have dreamed of space since we were little and we work
            on this project with great joy.
          </p>
          <div className="buttons">
            <a href="/home" target="_blank" rel="noopener noreferrer">
              <input
                id="resourcesButton"
                type="button"
                value="Back to the Moon"
              />
            </a>
            <a
              href="https://github.com/Manu10mza/space_app_challenge_2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              <input
                id="resourcesButton"
                type="button"
                value="Code repository"
              />
            </a>
          </div>
        </div>
        <img id="flaticonImg" src={grupo} alt="" />
      </div>
    </div>
  );
}
