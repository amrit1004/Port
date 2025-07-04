import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
  AiOutlineDownload,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import pdf from "../../Assets/amritlatest.pdf";
import "./FindMe.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function FindMe() {
  const findMeRef = useScrollAnimation();

  return (
    <Container fluid className="findme-section" id="findme" ref={findMeRef}>
      <Container>
        <Row>
          <Col md={12} className="findme-about section-animate">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="findme-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/amrit1004"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://https://x.com/AmritSinghal45"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/your-linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/amritsinghal45"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:amritsinghal2211@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <CgFileDocument />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FindMe; 