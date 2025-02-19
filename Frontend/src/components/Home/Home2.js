import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Technology isn't just my field—it's my canvas. I thrive on creating solutions that are not only functional but transformative.  
              <br />
              <br />
              Fluent in the languages of innovation—<b className="purple">JavaScript, Python, React.js</b>, and <b className="purple">Node.js</b>—I engineer systems that merge logic with creativity.  
              <br />
              <br />
              My passion lies in pushing the limits of what’s possible, exploring the synergy between <b className="purple">Artificial Intelligence</b> and <b className="purple">Human-Centered Design</b>.  
              <br />
              <br />
              Whether building intelligent algorithms or immersive user experiences, my mission is to design technology that resonates, inspires, and evolves with the world around us.
              <br />
              <br />
              <i>
                "Innovation isn’t just about coding; it’s about connecting people, ideas, and possibilities." 🌍
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ marginTop: "100px" }} // Added marginTop here
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let’s <span className="purple">connect</span> and create the future together!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Aashish-gif"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aashish-tejwani/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:tajcg29082024@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
