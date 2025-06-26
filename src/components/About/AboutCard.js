import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amrit Singhal</span> from{" "}
            <span className="purple">Chandigarh, India.</span>
            <br />
            I’m currently pursuing my B.E. in Information Technology from UIET, Panjab University (2022–2026).
            <br />
            I’m a passionate full-stack developer who has contributed to open-source projects and built scalable apps using MERN & Next.js.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Open Source
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech Talks & Podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about Startups & Product Building
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code for impact. Build for scale."{" "}
          </p>
          <footer className="blockquote-footer">Amrit Singhal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
