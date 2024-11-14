import React from 'react';
import Refokuss from './../../../public/Refokuss.png';
import Car from './../../../public/car.png';
import Aitravelapp from './../../../public/Aitravel.png';
import Jobportal from './../../../public/jobportal.png';
import ProjectCard from "./../../Components/Projects/Projectcard"

const array = [
    {
      "title": "Refokuss Clone",
      "image": Refokuss,
      "description": "A front-end design clone of Refokuss built using React.js, Tailwind CSS, and Locomotive Scroll for smooth scrolling and animations.",
      "skills": ["React.js", "Tailwind CSS", "Locomotive Scroll", "JavaScript", "Responsive Design"]
    },
    {
      "title": "Car Marketplace",
      "image": Car,
      "description": "A car marketplace platform built with React.js, React Routing, Tailwind CSS, Neon DB (PostgreSQL), and Framer Motion for interactive animations and seamless transitions.",
      "skills": ["React.js", "React Routing", "PostgreSQL", "Framer Motion", "Tailwind CSS"]
    },
    {
      "title": "AI Travel Planner",
      "image": Aitravelapp,
      "description": "An AI-powered travel planner built using React.js, Google Places API for location suggestions, and Tailwind CSS for responsive design.",
      "skills": ["React.js", "Google Places API", "Tailwind CSS", "API Integration", "Responsive Design"]
    },
    {
      "title": "Job Portal",
      "image": Jobportal,
      "description": "A job portal application developed using React.js, React Routing for navigation, and Next.js for server-side rendering and improved performance.",
      "skills": ["React.js", "Next.js", "React Routing", "Server-side Rendering", "Tailwind CSS"]
    }
  ];

const Projects = () => {
  return (
    <div id='Projects' className='p-6 md:p-12 lg:p-20 text-white'>
      <h1 className='text-2xl md:text-4xl font-bold mb-8'>Projects</h1>

      {/* Grid layout for projects */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {array.map((item, index) => (
          <ProjectCard 
            img={item.image} 
            title={item.title} 
            main={item.description} 
            skills={item.skills} 
            key={index} 
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
