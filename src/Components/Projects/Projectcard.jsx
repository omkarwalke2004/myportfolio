import React from 'react';

const ProjectCard = ({ img, title, main, skills }) => {
  return (
    <div className='p-4 md:p-6 flex flex-col w-full max-w-md bg-[#0c0e19] shadow-slate-900 rounded-2xl hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
      {/* Updated Image Section */}
      <div className='flex justify-center'>
        <img className='w-full h-52 object-center  rounded-2xl' src={img} alt={title} />
      </div>

      <h3 className='px-4 pt-4 text-xl md:text-2xl font-bold leading-snug text-white'>
        {title}
      </h3>

      <p className='px-4 pt-2 text-sm md:text-md leading-tight text-gray-300'>
        {main}
      </p>

      {/* Skills Covered */}
      <div className='px-4 pt-4'>
        <h4 className='text-white font-semibold mb-2'>Skills Covered:</h4>
        <ul className='list-disc list-inside text-gray-400 text-sm'>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className='mt-6 px-4 flex justify-center'>
        <button className='text-white py-2 px-6 text-sm md:text-lg font-semibold rounded-full bg-[#465697] hover:bg-[#596aa1] hover:scale-105 transform transition duration-300'>
          Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
