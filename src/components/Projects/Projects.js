import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import useScrollAnimation from "../hooks/useScrollAnimation";

function Projects() {
  const titleRef = useScrollAnimation();
  const projectsRef = useScrollAnimation(0.1);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div ref={titleRef} className="section-animate">
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
        </div>

        <Row
          style={{ justifyContent: "center", paddingBottom: "10px" }}
          ref={projectsRef}
          className="stagger-animate"
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/images/chatapp.jpg"
              isBlog={false}
              title="ChatApp"
              description="Built a real-time Chat Application using the MERN stack with WebSocket integration via Socket.IO for instant bi-directional communication. Implemented user authentication with JWT, real-time messaging, typing indicators, and online/offline user tracking. Designed a responsive UI with React.js, integrated RESTful APIs with Express.js, and used MongoDB for chat and user data persistence. Focused on creating a seamless and interactive messaging experience with support for one-on-one and group conversations."
              ghLink="https://github.com/amrit1004/chat-app"
              demoLink='https://chat-app-xnkn.onrender.com/'
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/images/bank.jpg"
              isBlog={false}
              title="Horizon"
              description="Developed a modern FinTech-Real Estate Web Application using Next integrated with Appwrite for secure authentication and Plaid for bank account linking and financial data retrieval. The platform allows users to manage real estate payments, view transaction histories, and monitor connected bank accounts in real-time. Incorporated server-side rendering (SSR) for performance and SEO, used STC for efficient styling, and implemented role-based dashboards for agents and clients to streamline property transactions and payment workflows"
              ghLink="https://github.com/amrit1004/horizon"
              demoLink="https://horizon-xi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/images/estate.jpg"
              isBlog={false}
              title="Mern-Estate"
              description="Built a full-featured Real Estate Web Application using the MERN stack (MongoDB, Express.js, React.js, Node.js) to allow users to buy, sell, and rent properties. Integrated secure user authentication with JWT, property listing with images, filtering based on location and price, and a dashboard for agents and users to manage listings. Designed with a focus on responsiveness, usability, and real-world scalability"
              ghLink="https://github.com/amrit1004/mern-estate"
              demoLink="https://mern-estate-cyan.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/images/court.jpg"
              isBlog={false}
              title="Court Case Management System"
              description="Developed an E-Portal for efficient Court Case Management using Node.js, Express, and Next.js, enabling lawyers, judges, and court staff to manage and track legal cases digitally. Integrated user roles, secure login, and RESTful APIs for case filing, scheduling, and document management. Aimed at reducing paperwork and streamlining the judicial process through a responsive, role-based web interface."


              ghLink="https://github.com/amrit1004/court"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/images/inotebook.jpg"
              isBlog={false}
              title="iNotebook"
              description="Developed a secure and responsive Notes Application using the MERN stack, enabling users to manage personal notes with real-time CRUD operations. Incorporated user authentication and authorization using JWT, ensuring data privacy."
              ghLink="https://github.com/amrit1004/inotebok"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/images/newsapp.jpg"
              isBlog={false}
              title="NewMonkey-NewsApp"
              description="Built a dynamic and responsive News Application using React.js, which fetches real-time news articles from external News API sources. Integrated category-based filtering (e.g., sports, technology, business) and infinite scroll for seamless content delivery. Designed with a clean UI to enhance readability and provide users with up-to-date news coverage from around the world."
              ghLink="https://github.com/Aaryan18-code/Newsapp--React"
              // demoLink="https://your-demo-link.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
