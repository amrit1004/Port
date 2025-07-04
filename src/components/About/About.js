import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import useScrollAnimation from "../hooks/useScrollAnimation";

function About() {
  const aboutRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const toolsRef = useScrollAnimation();
  const githubRef = useScrollAnimation();

  return (
    <Container fluid className="about-section">
      <Particle />

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }} ref={aboutRef} className="section-animate">
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <div ref={skillsRef} className="section-animate">
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <Techstack />
        </div>

        <div ref={toolsRef} className="section-animate">
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </div>
      </Container>
    </Container>
  );
}

export default About;
