import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I'm a passionate <b className="purple">Full-Stack Developer</b> currently pursuing my B.E. in Information Technology from UIET, Panjab University, Chandigarh.
              <br />
              <br />
              I have strong command over technologies like{" "}
              <i>
                <b className="purple">Next.js, React.js, Node.js, and Firebase</b>
              </i>{" "}
              and love building scalable, real-world applications.
              <br />
              <br />
              I’ve worked on projects involving{" "}
              <i>
                <b className="purple">CI/CD, WebSockets, APIs, and PostgreSQL</b>
              </i>{" "}
              and enjoy integrating third-party services like{" "}
              <b className="purple">Stripe and Google Maps</b> to deliver complete solutions.
              <br />
              <br />
              My interests include{" "}
              <b className="purple">Web Development, Open Source</b>, and emerging domains like{" "}
              <b className="purple">Blockchain</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
