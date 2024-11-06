import React, { useEffect } from 'react';
import ProjectItem from './ProjectItem';
import Carousel from './Carousel';
import './main.css';

const projectsData = [
  {
    image: "pic1.png",
    video: "pic2.png",
    title: "MobiPrint: A Mobile 3D Printer For Environment-Scale Design And Fabrication",
    authors: "Daniel Campos Zamora, Liang He, and Jon Froehlich",
    conference: "UIST 2024",
    resources: {
      pdf: "#",
      acm: "#",
      video: "#",
      code: "#"
    },
    description: "We present MobiPrint, a prototype mobile fabrication system that combines elements from robotics...",
  },
  {
    image: "pic2.png",
    video: "pic3.png",
    title: "3D Printing Magnetophoretic Displays",
    authors: "Zeyu Yan, Huaining Lee, Liang He, and Huaishu Peng",
    conference: "UIST 2023",
    resources: {
      pdf: "#",
      acm: "#",
      video: "#",
      code: "#"
    },
    description: "We present a pipeline for printing interactive 3D-printed magnetophoretic displays..."
  },
  {
    image: "pic2.png",
    video: "pic2.png",
    title: "MobiPrint: A Mobile 3D Printer For Environment-Scale Design And Fabrication",
    authors: "Daniel Campos Zamora, Liang He, and Jon Froehlich",
    conference: "UIST 2024",
    resources: {
      pdf: "#",
      acm: "#",
      video: "#",
      code: "#"
    },
    description: "We present MobiPrint, a prototype mobile fabrication system that combines elements from robotics...",
  },
  {
    image: "pic2.png",
    video: "pic2.png",
    title: "MobiPrint: A Mobile 3D Printer For Environment-Scale Design And Fabrication",
    authors: "Daniel Campos Zamora, Liang He, and Jon Froehlich",
    conference: "UIST 2024",
    resources: {
      pdf: "#",
      acm: "#",
      video: "#",
      code: "#"
    },
    description: "We present MobiPrint, a prototype mobile fabrication system that combines elements from robotics...",
  },
  // Add more project data here
];

const ProjectPage = () => {
    useEffect(() => {
      const handleScroll = () => {
        const projectItems = document.querySelectorAll('.project-page');
        projectItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            item.classList.add('visible');
          } else {
            item.classList.remove('visible');
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <div>
        <Carousel />
        <div className="project-page">
          <h1>Projects</h1>
          {projectsData.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProjectPage;
