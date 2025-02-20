import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Cake Selling Website"
              description="A simple and elegant cake-selling website where users can browse, customize, and order cakes online."
              ghLink="https://github.com/ashhkkarr/mern-ecommerce"
              demoLink="https://mern-ecommerce-sj9n.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Waste Detection"
              description="Developed a waste detection model using Ultralytics YOLO to identify and classify different types of waste for efficient waste management and recycling."
              ghLink=""
              demoLink=""
            />
          </Col>

          

          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
