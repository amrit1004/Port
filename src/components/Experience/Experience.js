import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Experience() {
  const titleRef = useScrollAnimation();
  const timelineRef = useScrollAnimation(0.1);

  const experiences = [
    {
      company: "Phocket",
      role: "Backend Developer Intern",
      location: "Remote",
      duration: "Jan 2025 - March 2025",
      points: [
        "Developed backend APIs using Node.js and PostgreSQL, reducing query response time by 25% across 3 core services.",
        "Integrated AWS (EC2, S3) for deployment and storage, increasing system scalability and uptime by 30%.",
        "Collaborated on 5+ backend modules, contributing to a 20% improvement in development efficiency and stability."
      ]
    },
    {
      company: "Techno8ive",
      role: "Full-Stack Developer Intern",
      location: "Noida India",
      duration: "May 2024 - July 2024",
      points: [
        "Developed scalable web applications using Next.js and the MERN stack, achieving a 30% improvement in overall page load speed.",
        "Leveraged APIs in Express.js, incorporating rate limiting to handle up to 10,000 requests per minute while reducing malicious traffic by 40%.",
        "Blended third-party APIs (e.g., Google Maps API, Stripe) to expand application functionality and utilized Axios with Server-Side Rendering (SSR) to reduce client-side latency by 25%."
      ]
    },
    {
      company: "DebatesMatch",
      role: "Full-Stack Developer Intern",
      location: "Remote",
      duration: "July 2024 - August 2024",
      points: [
        "Used Next.js and PostgreSQL, delivering a scalable platform that supported a growing user base of over 1,000 active users.",
        "Executed authorization workflows with Firebase Authentication, reducing unauthorized access incidents by 35% and improving login efficiency by 20%.",
        "Established a CI/CD pipeline to automate deployments, achieving 99.9% uptime and reducing deployment errors by 50%"
      ]
    }
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <div ref={titleRef} className="section-animate">
          <h1 className="project-heading">
            Professional <strong className="purple">Experience</strong>
          </h1>
        </div>
        <div ref={timelineRef} className="timeline-container stagger-animate">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience; 