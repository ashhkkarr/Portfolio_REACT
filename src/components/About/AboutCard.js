import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Muhammed Ashkar </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am currently placed as a Assistant Systems Engineer Trainee, at TCS.
            <br />
            I have completed B-Tech in Mechanical Engineering at MACE Kothamangalam.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ashkar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
