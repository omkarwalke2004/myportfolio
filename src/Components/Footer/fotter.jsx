import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { SiLinkedin } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

const Fotter = () => {
  return (
    <div id='Footer' className='flex flex-wrap justify-around bg-[#465697] text-white p-6 md:p-12 items-center'>
      {/* Contact Section */}
      <div className='text-center md:text-left mb-6 md:mb-0'>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal mt-2'>Feel Free To Reach</h3>
      </div>

      {/* Links Section */}
      <ul className='text-sm md:text-xl space-y-4 md:space-y-6'>
        <li className='flex gap-2 items-center'>
          <MdOutlineEmail size={24} />
          <a 
            href="mailto:omkarwalke647@gmail.com" 
            className='hover:underline hover:text-gray-300 transition duration-200'
          >
            omkarwalke647@gmail.com
          </a>
        </li>
        <li className='flex gap-2 items-center'>
          <SiLinkedin size={24} />
          <a 
            href="https://www.linkedin.com/in/omkar-walke-28b61b249/" 
            target='_blank' 
            rel='noopener noreferrer'
            className='hover:underline hover:text-gray-300 transition duration-200'
          >
            LinkedIn Profile
          </a>
        </li>
        <li className='flex gap-2 items-center'>
          <FaGithub size={24} />
          <a 
            href="https://github.com/omkarwalke2004" 
            target='_blank' 
            rel='noopener noreferrer'
            className='hover:underline hover:text-gray-300 transition duration-200'
          >
            GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Fotter;
