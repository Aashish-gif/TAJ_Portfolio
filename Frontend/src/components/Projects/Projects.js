import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Placeholder image paths
import cricketImg from "../../Assets/Projects/cricket.png";
import githubImg from "../../Assets/Projects/github.png";
import springStepImg from "../../Assets/Projects/springStep.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Cricket Score App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cricketImg}
              isBlog={false}
              title="Cricket Score App"
              description="Developed a responsive web application to provide real-time cricket score updates, solving the common issue of quick score accessibility. Designed an intuitive frontend using React.js and integrated live cricket score APIs for real-time data. Deployed on Render for reliable hosting and scalability."
              ghLink="https://github.com/Aashish-gif/CricketScoreByTAJ"
              demoLink="https://cricket-scores-by-taj.onrender.com"
            />
          </Col>

          {/* GitHub Data Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githubImg}
              isBlog={false}
              title="GitHub Data Management System"
              description="Created a backend system to manage and retrieve GitHub-related data such as users, repositories, issues, and more. Designed RESTful APIs with Node.js and Express.js, integrated MongoDB for data storage, and documented API endpoints using Postman."
              ghLink="https://github.com/Aashish-gif/ClassTest"
              demoLink="https://class-test-c50m.onrender.com"
            />
          </Col>

          {/* Spring Step Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={springStepImg}
              isBlog={false}
              title="Spring Step Website"
              description="Built a responsive website to showcase Spring Step’s services with an engaging user interface. Utilized HTML, CSS, and JavaScript for development and deployed on Render for accessibility and reliable hosting."
              ghLink="https://github.com/Aashish-gif/SpringStepwebsite"
              demoLink="https://spring-step-official-website.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
