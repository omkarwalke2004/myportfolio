import React from 'react'
import Avatar from "././../../../public/Avtar.png"
import Textchanger from '../Textchanger'

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20 '>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold leading-snug md:leading-normal tracking-tight md:tracking-tighter'><Textchanger/></h1>
        <p className='text-sm md:text-2xl mt-3 md:mt-6 leading-relaxed md:leading-snug tracking-tight' >I’m a computer engineering student with a passion for creating dynamic and user-friendly web applications. With expertise in React.js, Next.js, Node.js, and backend technologies, I specialize in building full-stack applications.</p>
        <a href="#Footer">
        <button className='mt-6 md:mt-10 py-2 px-4 md:py-3 md:px-6 bg-[#465697] text-sm md:text-lg font-semibold rounded-full hover:opacity-85 hover:scale-105 transition-transform duration-300'>Contact Me</button>

        </a>
        </div>
        <div>
            <img src={Avatar}   alt="" />
        </div>
      
    </div>
  )
}

export default Home
