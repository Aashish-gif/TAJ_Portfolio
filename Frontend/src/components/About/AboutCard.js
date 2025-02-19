




import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello World! I am <span className="purple">Tejwani Aashish Jitendrakumar(TAJ)</span> 
            from <span className="purple">[Ahmedabad,India]</span>.
            <br />
            I am a passionate software developer with a boundless curiosity for innovation and technology.
            <br />
            I hold a deep interest in exploring <span className="purple">Artificial Intelligence</span> and how it can shape the future. 
            <br />
            <br />
            When I’m not writing code, you’ll often find me indulging in my other passions that fuel my creativity and inspiration!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books 
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching and Creating Digital Art
            </li>
            <li className="about-activity">
              <ImPointRight /> Connecting with Enthusiasts in the Tech World
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking and Embracing the Beauty of Nature
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Strategy Games and Puzzles
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let your passion be the fuel and your determination the engine to achieve greatness!"{" "}
          </p>
          <footer className="blockquote-footer">TAJ</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

