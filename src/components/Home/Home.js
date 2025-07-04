import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Home() {
  const homeRef = useScrollAnimation();
  const contentRef = useScrollAnimation(0.2);

  return (
    <section>
      <Container fluid className="home-section" id="home" ref={homeRef}>
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col lg={7} md={12} className="home-header order-2 order-lg-1">
              <div className="section-animate" ref={contentRef}>
                <h1 style={{ paddingBottom: 15 }} className="heading responsive-heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name responsive-heading">
                  I'M
                  <strong className="main-name"> AMRIT SINGHAL</strong>
                </h1>

                <div className="type-container" style={{ padding: "30px 0", textAlign: "left" }}>
                  <Type />
                </div>
              </div>
            </Col>

            <Col lg={5} md={12} className="order-1 order-lg-2 mb-4 mb-lg-0">
              <div className="home-img-container">
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px", width: "100%", objectFit: "contain" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <div id="about" className="section-padding">
        <About />
      </div>
      <div id="experience" className="section-padding">
        <Experience />
      </div>
      <div id="project" className="section-padding">
        <Projects />
      </div>
      <div id="contact" className="section-padding">
        <Contact />
      </div>
      <Footer />
    </section>
  );
}

export default Home;
