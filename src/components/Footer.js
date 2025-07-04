import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  const XIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="0.8em"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M20.283 3H24l-7.99 9.174L23.572 21H17.41l-5.007-6.075L6.62 21H0l8.585-9.858L0.713 3H7.08l4.46 5.572L20.283 3zm-3.246 16h1.833L9.84 5H8.008l9.03 14z" />
    </svg>
  );

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Amrit SINGHAL</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/amrit1004"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://x.com/AmritSinghal45"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                title="X (formerly Twitter)"
              >
                <XIcon />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/amrit-singhal-63b75a256/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/amritsinghal45"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:amritsinghal2211@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
