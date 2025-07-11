import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { MdWork } from "react-icons/md";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import pdf from "../Assets/Amrit-resume.pdf";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [showToast, setShowToast] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    updateExpanded(false);
  };

  const handleResumeClick = () => {
    window.open(pdf);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand
            onClick={() => scrollToSection('home')}
            className="d-flex"
            style={{ color: "#d458F4", fontWeight: "bold", fontSize: "1.8rem", cursor: "pointer" }}
          >
            AM
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection('home')}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection('about')}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection('experience')}>
                  <MdWork style={{ marginBottom: "2px" }} /> Experience
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection('project')}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={() => scrollToSection('contact')}>
                  <AiOutlineMail style={{ marginBottom: "2px" }} /> Contact
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link onClick={handleResumeClick} style={{ cursor: 'pointer' }}>
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 9999
        }}
      >
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
          <Toast.Body style={{ background: '#28a745', color: 'white', borderRadius: '8px' }}>
            Resume downloaded successfully!
          </Toast.Body>
        </Toast>
      </div>
    </>
  );
}

export default NavBar;
