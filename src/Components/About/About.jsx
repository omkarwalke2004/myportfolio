import React from 'react'
import AboutImg from "././../../../public/About.png"
import { IoArrowForward } from 'react-icons/io5'

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>     
      <h1 className="text-2xl md:text-4xl font-bold  mb-8">About Me</h1>

         <div className='md:flex flex-wrap flex-col md:flex-row items-center '>
        <img src={AboutImg} className='md:h-80' alt="" />
         <ul>
            <div className='flex gap-3 py-4'>
                <IoArrowForward size={30} className="mt-1"/>
                <span className='w-96'>
                    <h1 className='text-xl md:text-3xl font-semibold leading-normal '>Frontend Developer</h1>
                    <p className='text-sm md:text-base leading-relaxed text-gray-300 mt-2'>I am a skilled Frontend Developer with a strong focus on building dynamic, high-performance web applications using React.js and Next.js. I specialize in creating responsive, user-friendly interfaces and optimizing web experiences for speed and scalability.</p>

                </span>

            </div>
            <div className='flex gap-3 py-4'>
                <IoArrowForward size={30} className="mt-1"/>
                <span className='w-96'>
                    <h1 className='text-xl md:text-3xl font-semibold leading-normal '>Backend Developer </h1>
                    <p className='text-sm md:text-base leading-relaxed text-gray-300 mt-2'>I am a proficient Backend Developer with expertise in Node.js, Express.js, and Next.js, specializing in building robust, scalable, and efficient server-side applications. I focus on developing RESTful APIs, managing databases, and delivering high-performance backend solutions to power modern web applications.</p>

                </span>

            </div>
            <div className='flex gap-3 py-4'>
                <IoArrowForward size={30} className="mt-1"/>
                <span className='w-96'>
                    <h1 className='text-xl md:text-3xl font-semibold leading-normal '>Java Developer</h1>
                    <p className='text-sm md:text-base leading-relaxed text-gray-300 mt-2'> As a Java developer, I focus on building efficient backend systems with a strong emphasis on performance, security, and maintainability. My experience includes working with Java-based frameworks to create scalable and optimized backend solutions.</p>

                </span>

            </div>
         </ul>
      </div>
      </div>

    </div>
  )
}

export default About
