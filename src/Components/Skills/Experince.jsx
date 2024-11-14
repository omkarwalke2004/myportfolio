import React from 'react';
import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const skillsData = [
  {
    icon: <FaHtml5 color="#E34F26" size={50} />,
    title: "HTML5",
  },
  {
    icon: <SiTailwindcss color="#1572b6" size={50} />,
    title: "Tailwind css",
  },
  {
    icon: <FaJs color="#F7DF1E" size={50} />,
    title: "JavaScript",
  },
  {
    icon: <FaReact color="#61DAFB" size={50} />,
    title: "React.js",
  },
  {
    icon: <FaNodeJs color="#47A248" size={50} />,
    title: "Node.js",
  },
  {
    icon: <SiMongodb color="#47A248" size={50} />,
    title: "MongoDB",
  },
  {
    icon: <FaJava color="#de8e2f" size={50} />,
    title: "Java",
  },
];

const Experience = () => {
  return (
    <div id='Experince' className="p-10 md:p-24">
      <h1 className="text-2xl md:text-3xl text-white font-bold text-center mb-8">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 transition-transform transform hover:scale-105"
          >
            <span className="p-3 rounded-full bg-zinc-950 shadow-lg">
              {skill.icon}
            </span>
            <h2 className="text-lg md:text-xl font-semibold text-white mt-2">{skill.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
