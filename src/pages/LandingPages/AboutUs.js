import React from "react";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <div className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-title">About us</div>
        <div className="about-us-text">
          <div className="paragraph">
            &emsp;The idea of ​​the Pawster was born during Pursuit's 8.4
            capstone project - meant as a tool that helps people and animals
            waiting to be adopted, find each other faster and easier. In a short
            time, the five authors of the Pawster initiative turned their vision
            into a working web application, connecting users to pets available
            in their area and presented their work to everyone who cares about
            the fate of sheltered animals.
          </div>
          <div className="paragraph">
            &emsp; Every member of the Pawster team, with the help of their
            skills and knowledge, helps this social initiative to turn into a
            real, useful tool both for people looking for an animal and for
            organizations that care for animals. Pawster's ambition is to create
            real social change while creating a fun user experience, all in the
            hopes of the decreasing the number of animals in shelters and
            euthanized.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
