"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ProjectItem {
  id: string;
  company: string;
  description: string;
  category: string;
  image: string;
  width: string; // Bootstrap col width
  aspect: string; // CSS aspect ratio
}

const projects: ProjectItem[] = [
  { id: "01", company: "Brandlift", description: "Strategic Branding and Motion Identity", category: "PRODUCT DESIGN, MOTION", image: "/images/solution/Real Estate.jpg", width: "col-lg-4", aspect: "1:1" },
  { id: "02", company: "Devnest", description: "Full-stack Platform Development", category: "DEVELOPMENT, BRANDING", image: "/images/solution/Hospitality.avif", width: "col-lg-8", aspect: "16/9" },
  { id: "03", company: "Wiregrid", description: "Enterprise Strategy and Digital Motion", category: "STRATEGY, MOTION", image: "/images/solution/retail.jpg", width: "col-lg-5", aspect: "16/10" },
  { id: "04", company: "Agencylabs", description: "UI/UX Design and Product Scalability", category: "UI/UX, DEVELOPMENT", image: "/images/solution/education.avif", width: "col-lg-7", aspect: "1:1" },
  { id: "05", company: "Visionary", description: "Immersive 3D Environments", category: "AR/VR, DESIGN", image: "/images/solution/Healthcare.avif", width: "col-lg-6", aspect: "16/10" },
  { id: "06", company: "Apex", description: "Market Position and Growth Strategy", category: "MARKETING, STRATEGY", image: "/images/solution/marketing.avif", width: "col-lg-6", aspect: "16/9" },
];

const ProjectCard = ({ project, index }: { project: ProjectItem, index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isRight = index % 2 !== 0;
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create refined scroll-scrubbed clip-path transformations
  const clipPath = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    index % 2 === 0
      ? ["polygon(0% 0%, 0% 0%, 0% 0%)", "polygon(0% 0%, 300% 0%, 0% 300%)"]
      : ["polygon(100% 0%, 100% 0%, 100% 0%)", "polygon(100% 0%, -200% 0%, 100% 300%)"]
  );

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const xOffset = useTransform(scrollYProgress, [0.1, 0.3], [isRight ? -50 : 50, 0]);

  return (
    <div ref={containerRef} className={`row g-0 align-items-stretch ${isRight ? 'flex-row-reverse' : ''}`} style={{ margin: 0, padding: 0 }}>
      {/* Image Column */}
      <div className={`${project.width} p-0 m-0`}>
        <div className="project-img-wrapper h-100" style={{ margin: 0 }}>
          <motion.img 
            src={project.image} 
            alt={project.company}
            className="w-100 h-100 object-fit-cover d-block"
            style={{ clipPath: clipPath as any }}
          />
        </div>
      </div>
      
      {/* Info Column */}
      <div className={`col-lg flex-grow-1 d-flex flex-column justify-content-center ${isRight ? 'align-items-start ps-lg-5 ps-4' : 'align-items-end pe-lg-5 pe-4'}`}>
        <motion.div 
          className="project-info py-5 w-100"
          style={{ 
            textAlign: isRight ? 'left' : 'right',
            opacity,
            x: xOffset
          }}
        >
          <div className={`d-flex align-items-baseline gap-3 mb-2 ${isRight ? 'justify-content-start' : 'justify-content-end'}`}>
            <h4 className="project-company-name mb-0">{project.company}.</h4>
            <span className="project-category-text">{project.category}</span>
          </div>
          <p className="project-description-text mt-2">{project.description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default function ProjectList() {
  return (
    <section className="project-grid-area bg-white" style={{ marginTop: '50px', overflow: 'hidden' }}>
      <div className="container-fluid p-0">
        <div className="container">
          <div className="row mb-50">
            <div className="col-12 text-center">
              <h2 className="project-grid-subtitle text-uppercase">Projects</h2>
              <h1 className="project-grid-title mt-3 mx-auto">Projects that deliver real results</h1>
            </div>
          </div>
        </div>
        
        <div className="project-rows-connected" style={{ maxWidth: '1400px', margin: '0 auto', borderBottom: '1px solid #eee' }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
