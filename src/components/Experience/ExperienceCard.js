import React from "react";
import { Row, Col } from "react-bootstrap";
import { MdWork } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function ExperienceCard({ experience, isLeft }) {
  return (
    <div className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
      <div className="timeline-content">
        <div className="timeline-dot">
          <MdWork />
        </div>
        <div className="experience-card">
          <h3>{experience.company}</h3>
          <h4>{experience.role}</h4>
          <p className="location">
            <IoLocationSharp /> {experience.location}
          </p>
          <p className="duration">{experience.duration}</p>
          <ul>
            {experience.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard; 