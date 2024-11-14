import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Experince from './Components/Skills/Experince'
import Projects from './Components/Projects/projects'
import Fotter from './Components/Footer/fotter'


function App() {
  return (
   <div className='bg-[#171d32]  h-auto w-full overflow-hidden'>
  <Navbar/>
  <Home/>
  <About/>
 <Experince/>
 <Projects/>
 <Fotter/>
   </div>
  )
}

export default App