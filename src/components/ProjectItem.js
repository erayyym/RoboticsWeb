import React, { useState } from 'react';
import './ProjectItems.css';

const ProjectItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="project-item">
      <div 
        className="project-media" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={isHovered ? project.video : project.image} 
          alt={isHovered ? `${project.title} Video Preview` : project.title} 
          className={isHovered ? "project-video" : "project-image"} 
        />
      </div>
      <div className="project-content">
        <h2>{project.title}</h2>
        <p>{project.authors}</p>
        <span>{project.conference}</span>
        <div className="project-resources">
          <a href={project.resources.pdf} target="_blank" rel="noopener noreferrer">PDF</a>
          <a href={project.resources.acm} target="_blank" rel="noopener noreferrer">ACM DL</a>
          <a href={project.resources.video} target="_blank" rel="noopener noreferrer">Video</a>
          <a href={project.resources.code} target="_blank" rel="noopener noreferrer">Code & Hardware Design</a>
        </div>
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
